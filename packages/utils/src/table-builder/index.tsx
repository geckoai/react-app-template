import {
  Button,
  Dropdown,
  Row,
  Space,
  Table,
  TableProps,
  Typography,
} from 'antd';
import { ClassConstructor, ClassMirror } from '@geckoai/class-mirror';
import { TypeMirror } from '@geckoai/class-transformer';
import { ApiPropertyDecorate, ApiPropertyMetadataImpl } from '@geckoai/http';
import { cloneElement, ReactNode, useContext, useMemo, useState } from 'react';
import { I18n, I18nContext } from '@packages/i18n';
import { ColumnGroupType, ColumnType } from 'antd/lib/table/interface';
import { ColumnHeightOutlined, ReloadOutlined } from '@ant-design/icons';

export class TableColumnBuilder<T extends object> {
  public static create<T extends object>(
    key: string,
    dataIndex: string,
    metadataMapping: Map<PropertyKey, ApiPropertyMetadataImpl>
  ) {
    return new TableColumnBuilder<T>(key, dataIndex, metadataMapping);
  }

  private visible: boolean = false;

  private __restProps: ColumnType<T> | ColumnGroupType<T> | InitHandler<T> = {};

  constructor(
    public readonly key: string,
    public readonly dataIndex: string,
    private metadataMapping: Map<PropertyKey, ApiPropertyMetadataImpl>
  ) {}

  public initProps(props: ColumnType<T> | ColumnGroupType<T> | InitHandler<T>) {
    this.__restProps = props;
    return this;
  }

  public setVisible(visible: boolean): this {
    this.visible = visible;
    return this;
  }

  public build(): ColumnType<T> | ColumnGroupType<T> {
    const metadata = this.metadataMapping.get(this.dataIndex);
    if (typeof this.__restProps === 'function') {
      return {
        key: this.key,
        dataIndex: this.dataIndex,
        title: metadata?.locale
          ? I18n.current<string>(metadata?.locale)
          : metadata?.description,
        ...this.__restProps(this.metadataMapping),
      };
    }
    return {
      key: this.key,
      dataIndex: this.dataIndex,
      title: metadata?.locale
        ? I18n.current<string>(metadata?.locale)
        : metadata?.description,
      ...this.__restProps,
    };
  }
}

export class TableBuilder<T extends object> {
  private readonly mirror: ClassMirror;

  private readonly metadatas: Map<PropertyKey, ApiPropertyMetadataImpl> =
    new Map();

  private readonly keys: string[] = [];

  constructor(protected target: TypeMirror<T>) {
    const elementType = target.elementType();
    const type = target.type() as any;

    if (elementType && elementType.type()) {
      if (type === Array) {
        this.mirror = ClassMirror.reflect(elementType.type());
      } else {
        this.mirror = ClassMirror.reflect(type);
      }
    } else {
      this.mirror = ClassMirror.reflect(type);
    }

    this.mirror.getAllProperties().forEach((value, key) => {
      const apiPropertyDecorates = value.getDecorates(ApiPropertyDecorate);
      apiPropertyDecorates.forEach((d) => {
        if (d.metadata) {
          this.metadatas.set(key, d.metadata);
        }
      });
    });

    this.createKey = this.createKey.bind(this);
  }

  private createKey(): string {
    const key = [
      Math.floor(Math.random() * 256).toString(16),
      Math.floor(Math.random() * 256).toString(16),
      Math.floor(Math.random() * 256).toString(16),
      Math.floor(Math.random() * 256).toString(16),
    ]
      .join('')
      .toUpperCase();

    if (this.keys.includes(key)) {
      return this.createKey();
    }
    return key;
  }

  public get<K extends keyof T>(key?: K): TableColumnBuilder<T> {
    return TableColumnBuilder.create(
      this.createKey(),
      key as any,
      this.metadatas
    );
  }

  public build(ops: { rowKey: keyof T }) {
    return (props: ITableProps<T>) => {
      const {
        title,
        actions,
        size = 'middle',
        columns = [],
        onReload,
        ...rest
      } = props;
      const locale = useContext(I18nContext);
      const [iSize, setISize] = useState(size);
      const cols = useMemo(() => columns.map((x) => x.build()), [columns]);
      return (
        <div>
          <Row
            justify="space-between"
            style={{ marginBottom: 10 }}
            align="middle"
          >
            {typeof title === 'string' ? (
              <Typography.Title level={5} style={{ margin: 0 }}>
                {title}
              </Typography.Title>
            ) : (
              title ?? <div />
            )}
            <Space>
              {actions?.map((x, i) => cloneElement(x as any, { key: i }))}
              <Button
                loading={rest.loading}
                icon={<ReloadOutlined />}
                onClick={() => onReload?.()}
              />
              <Dropdown
                destroyPopupOnHide
                menu={{
                  selectedKeys: iSize ? [iSize] : [],
                  onClick: (e) => setISize(e.key as any),
                  items: [
                    { key: 'large', label: locale.UI.LARGE },
                    { key: 'middle', label: locale.UI.MIDDLE },
                    { key: 'small', label: locale.UI.SMALL },
                  ],
                }}
              >
                <Button icon={<ColumnHeightOutlined />} />
              </Dropdown>
            </Space>
          </Row>

          <Table size={iSize} columns={cols} rowKey={ops?.rowKey} {...rest} />
        </div>
      );
    };
  }

  public static create<T extends {}>(clazz: ClassConstructor<T>) {
    return new TableBuilder<T>(TypeMirror.createObjectMirror(clazz));
  }
}

export interface ITableProps<T extends object>
  extends Omit<TableProps<T>, 'columns' | 'title'> {
  actions?: ReactNode[];
  columns?: TableColumnBuilder<T>[];
  title?: ReactNode;
  onReload?: () => void;
}

export type InitHandler<T> = (
  metadata?: Map<PropertyKey, ApiPropertyMetadataImpl>
) => ColumnType<T> | ColumnGroupType<T>;
