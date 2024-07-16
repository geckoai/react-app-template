/// <reference types="@types/react" />
/// <reference types="@types/react-dom" />
/// <reference types="@types/node" />

declare namespace NodeJS {
  declare interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
    readonly HOST: string;
    readonly PORT: string;
    readonly WDS_SOCKET_HOST?: string;
    readonly WDS_SOCKET_PORT?: string;
    readonly WDS_SOCKET_PATH: string;
    readonly APP_RUNTIME_ENV: string;
  }
  declare interface Process {
    env: ProcessEnv;
  }
}
declare var process: NodeJS.Process;

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare type NullLike<T> = null | T;

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

declare interface BPMNContextPadProvider {
  $inject: string[];
}

declare interface BPMNModule {
  contextPadProvider: [string, BPMNContextPadProvider];
}

declare module 'bpmn-js-embedded-comments' {
  declare var m: BPMNModule;
  export default m;
}

declare module 'diagram-js-minimap' {
  declare var m: BPMNModule;
  export default m;
}

declare module 'camunda-transaction-boundaries' {
  declare var m: BPMNModule;
  export default m;
}

declare module 'bpmn-js-color-picker' {
  declare var m: BPMNModule;
  export default m;
}

declare module 'bpmn-js-properties-panel' {
  export var BpmnPropertiesPanelModule: BPMNModule;
  export var BpmnPropertiesProviderModule: BPMNModule;
  export var CamundaPlatformPropertiesProviderModule: BPMNModule;
  export var ZeebePropertiesProviderModule: BPMNModule;

  export default {
    BpmnPropertiesPanelModule,
    BpmnPropertiesProviderModule,
    CamundaPlatformPropertiesProviderModule,
    ZeebePropertiesProviderModule,
  };
}

declare module 'react-color' {
  import { FC } from 'react';
  export const SketchPicker: FC<any>;
}
