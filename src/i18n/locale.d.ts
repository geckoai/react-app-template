import { Locale } from 'antd';
import { BaseLocale } from '@geckoai/i18n';

export interface I18nLocale extends BaseLocale {
  antd: Locale;
  flag: string;
  language: string;
  UI: Record<UI_KEY, string>;
  SELECT: Record<SELECT_KEY, Array<{ key: number | string; label: string }>>;
  STATUS: Record<
    STATUS_KEY,
    Array<{ key: number | string; label: string; color?: string }>
  >;
  MENU: Record<MENU_KEY, string>;
  TEMPLATE: Record<TEMPLATE_KEY, string>;
  TABLE: Record<TABLE_FIELD_KEY, any>;
  TIME_RANGE: {
    MOR_M: string;
    AIR_MOR_M: string;
    AFTER_M: string;
    AIR_AFTER_M: string;
    RELAX_M: string;
    NIGHT_M: string;
  };
}

type PLACEHOLDER_KEY = 'ENTER_KEYWORD' | 'ENTER_NAME';

type SELECT_KEY =
  | 'PLAN_TYPE'
  | 'MUSIC_PLAY_METHOD'
  | 'PLAY_TIME_UNIT'
  | 'REPEAT_BY';

type STATUS_KEY =
  | 'PLAN_ISSUED'
  | 'DEVICE_ONLINE_STATUS'
  | 'DEVICE_PLAY_STATUS'
  | 'DEVICE_RUNNING_STATUS';

type TEMPLATE_KEY = 'SCREEN_NUMBER';

type TABLE_FIELD_KEY =
  | 'TIME_RANGE'
  | 'PLAY_INTERVAL'
  | 'MEDIA_GROUP'
  | 'PLAY_MODE'
  | 'LICENSE_NUMBER'
  | 'USED_LICENSE_NUMBER'
  | 'PARENT_DEPARTMENT'
  | 'DEPARTMENT_TYPE'
  | 'DEPARTMENT_NO'
  | 'AUTHORITIES'
  | 'LAST_UPDATE_DATE'
  | 'LAST_UPDATE_TIME'
  | 'LATEST_ONLINE_TIME'
  | 'ONLINE_TIME'
  | 'DEVICE_REGISTER_TIME'
  | 'SORT_NO'
  | 'COMPANY'
  | 'UUID'
  | 'NAME'
  | 'STATUS'
  | 'OS'
  | 'REGION'
  | 'DEVICE_NO'
  | 'DEVICE_TYPE'
  | 'CONNECTED_STATUS'
  | 'RUNNING_STATUS'
  | 'STORE'
  | 'STORE_NAME'
  | 'CLIENT_TYPE'
  | 'CLIENT_NAME'
  | 'CLIENT_ID'
  | 'DESCRIPTION'
  | 'DEVICE_IP'
  | 'STORE_NO'
  | 'MAC_ADDRESS'
  | 'SCREEN_NUMBER'
  | 'SCREEN_TYPE'
  | 'CREATE_BY'
  | 'CREATE_TIME'
  | 'DURATION'
  | 'ID'
  | 'CONFIG_SCREEN_NUMBER'
  | 'PLAY_DELAY_S'
  | 'PLAY_INTERVAL_S'
  | 'PLAY_SCREEN_NUMBER'
  | 'TYPE'
  | 'UPDATE_BY'
  | 'UPDATE_LATEST_TIME'
  | 'VERSION'
  | 'CATEGORY'
  | 'PRODUCT_NAME'
  | 'MEDIA_TYPE'
  | 'PRICE_GROUP'
  | 'RESOURCE_TYPE'
  | 'IS_DEFAULT'
  | 'RESOLUTION'
  | 'URL'
  | 'LAYOUT'
  | 'RESOURCE_GROUP'
  | 'RESOLUTION_TYPE'
  | 'START_DATE'
  | 'START_TIME'
  | 'END_DATE'
  | 'END_TIME'
  | 'PLAN_TYPE'
  | 'PUBLISH_DATE'
  | 'PUBLISH_TIME'
  | 'PUBLISH_MESSAGE'
  | 'REPETITION_METHOD'
  | 'SELECT_DAY_OF_WEEK'
  | 'ISSUED_USER'
  | 'ISSUED_DURATION_MS'
  | 'DEPARTMENT'
  | 'EMAIL'
  | 'ROLE_NAME'
  | 'TENANT'
  | 'COUNTRY'
  | 'PHONE'
  | 'ACCOUNT_NAME'
  | 'MACHINE_CODE';

type MENU_KEY =
  | 'AD_SOURCE'
  | 'MUSIC_SOURCE'
  | 'AD_SCHEDULE'
  | 'MUSIC_SCHEDULE'
  | 'MODELER_SCHEDULE'
  | 'MUSIC_PLAY_LIST_MANAGEMENT'
  | 'MUSIC_LIST_MANAGEMENT'
  | 'MUSIC_SOURCE_MANAGEMENT'
  | 'AD_SOURCE_MANAGEMENT'
  | 'PLAY_MANAGEMENT'
  | 'MUSIC_SCHEDULE_MANAGEMENT'
  | 'AD_SCHEDULE_MANAGEMENT'
  | 'SCHEDULE_MANAGEMENT'
  | 'BATCH_UPLOAD_PRODUCT_MATERIAL'
  | 'CLIENT_MANAGEMENT'
  | 'CLIENT_DEVICE_LIST'
  | 'COMMON_TAGS'
  | 'COMMON_TAGS_MANAGEMENT'
  | 'DEVICE_MANAGEMENT'
  | 'DEVICE_FAULT_BACKUP'
  | 'DEVICE_SLIDE_CONFIGURATION'
  | 'DEVICE_FAULT_BACKUP_DM'
  | 'DEVICE_SLIDE_CONFIGURATION_MANAGEMENT'
  | 'MONITOR_MANAGEMENT'
  | 'MATERIAL_MANAGEMENT'
  | 'MODELER_MANAGEMENT'
  | 'MODELER_CONFIG_MANAGEMENT'
  | 'MODELER_CONFIG_LIST'
  | 'MODELER_EXAMPLE_MANAGEMENT'
  | 'MODELER_EXAMPLE_LIST'
  | 'MODELER_LAYOUT_MANAGEMENT'
  | 'MODELER_LAYOUT_LIST'
  | 'MODELER_CONFIG_DETAILS'
  | 'MODELER_EXAMPLE_DETAILS'
  | 'MODELER_LAYOUT_DETAILS'
  | 'MODELER_PLAN_MANAGEMENT'
  | 'MODELER_PLAN_HISTORY_MANAGEMENT'
  | 'MODELER_PLAN_EXAMPLE_MANAGEMENT'
  | 'MODELER_PLAN_CONFIG'
  | 'MODELER_PLAN_EXAMPLE_LIST'
  | 'MODELER_PLAN_HISTORY_LIST'
  | 'MUSIC_PLAN_HISTORY_LIST'
  | 'MODELER_PLAN_LIST'
  | 'MODELER_PLAN_DETAILS'
  | 'MEDIA_RESOURCES_MANAGEMENT'
  | 'NEW_TENANT'
  | 'NEW_MODELER_CONFIG'
  | 'NEW_MODELER_LAYOUT'
  | 'NEW_CLIENT_DEVICE'
  | 'NEW_SERIAL_NUMBER_TAG'
  | 'NEW_COMMON_TAG'
  | 'NEW_PRICE_GROUP'
  | 'NEW_SCREEN_DEVICE'
  | 'NEW_PRODUCT_MATERIAL'
  | 'NEW_DEVICE_FAULT_BACKUP_DMC'
  | 'NEW_DEVICE_SLIDE_CONFIGURATION'
  | 'NEW_PRODUCT_SOLD_OUT'
  | 'NEW_PRODUCT'
  | 'NEW_MODELER_PLAN'
  | 'PRICE_GROUP'
  | 'PRICE_GROUP_LIST'
  | 'SCREEN_MANAGEMENT'
  | 'SCREEN_DEVICE_LIST'
  | 'SERIAL_NUMBER_TAGS'
  | 'SERIAL_NUMBER_TAGS_MANAGEMENT'
  | 'PRODUCT'
  | 'PRODUCT_MANAGEMENT'
  | 'PRODUCT_LIST'
  | 'PRODUCT_SOLD_OUT_LIST'
  | 'PRODUCT_SOLD_OUT_MANAGEMENT'
  | 'PRODUCT_MATERIAL'
  | 'PRODUCT_MATERIAL_LIST'
  | 'UPDATE_TENANT'
  | 'UPDATE_MODELER_PLAN'
  | 'UPDATE_MODELER_CONFIG'
  | 'UPDATE_MODELER_LAYOUT'
  | 'UPDATE_PRODUCT'
  | 'UPDATE_CLIENT_DEVICE'
  | 'UPDATE_SCREEN_DEVICE'
  | 'UPDATE_PRICE_GROUP'
  | 'UPDATE_DEVICE_FAULT_BACKUP_DMC'
  | 'UPDATE_DEVICE_SLIDE_CONFIGURATION'
  | 'SYSTEM_CONFIGURATION'
  | 'USER_MANAGEMENT'
  | 'USER_LIST'
  | 'TENANT_MANAGEMENT'
  | 'TENANT_LIST'
  | 'ROLE_MANAGEMENT'
  | 'REPORT_ONLINE_CLIENT'
  | 'REPORT_CLIENT_VERSION'
  | 'REPORT_SELLOUT'
  | 'REPORT_MANAGEMENT'
  | 'DEPARTMENT_MANAGEMENT'
  | 'BUSINESS_TYPE_MANAGEMENT';

type CONFIRM_KEY =
  | 'EXIT_ACCOUNT'
  | 'CONFIRM_DELETE'
  | 'CONFIRM_PUBLISH'
  | 'CREATE_COMPONENT'
  | 'CONFIRM_UPDATE_SCREEN_NUMBER'
  | 'CONFIRM_UPDATE_SCREEN_NAME'
  | 'NOT_DELETE_INCLUDE_CHILD_NODE';

type NOTIFICATION_KEY =
  | 'UPDATE_SUCCESS'
  | 'SAVE_SUCCESS'
  | 'DELETE_SUCCESS'
  | 'PUBLISH_SUCCESS'
  | 'UPLOAD_SUCCESS';

type UI_KEY =
  | 'SITE_NAME'
  | 'WELCOME'
  | 'SEND_SMS_CODE'
  | 'UNASSIGNED_SCREEN_NUMBER'
  | 'IT_IS_ALL_NOTHING_MORE'
  | 'SINGLE_STORE_RELEASE'
  | 'MULTIPLE_STORE_RELEASE'
  | 'INSERT_SCHEDULE'
  | 'RELEASE_SCHEDULE'
  | 'SAVE_TO_CUSTOM_COMPONENT'
  | 'DEVICE_SCREENSHOT_TIMEOUT'
  | 'DEVICE_SCREENSHOT'
  | 'DEVICE_OFFLINE'
  | 'DEVICE_NOT_INSTALLED'
  | 'CHANGE_PASSWORD_SUCCESS_JUMP'
  | 'CHANGE_PASSWORD'
  | 'PAGE_TOTAL'
  | 'UPLOAD'
  | 'UPLOAD_AND_DRAG_UPLOAD_PLACEHOLDER'
  | 'UPLOAD_AND_DRAG_UPLOAD_HINT'
  | 'PROCESS_PROGRESS'
  | 'IMPORT'
  | 'AUDIT'
  | 'AUDIT_HISTORY'
  | 'ON'
  | 'OFF'
  | 'START'
  | 'STOP'
  | 'CANCEL'
  | 'ALERT'
  | 'ERROR'
  | 'SUBMIT'
  | 'EXPORT'
  | 'SIGN_IN'
  | 'SIGN_OUT'
  | 'SEARCH'
  | 'SETTING'
  | 'RESET'
  | 'EDIT'
  | 'NEW'
  | 'SELECT_ALL'
  | 'BATCH_NEW'
  | 'MOVE'
  | 'BATCH_MOVE'
  | 'UPDATE'
  | 'UNDO'
  | 'REDO'
  | 'COPY'
  | 'PASTE'
  | 'DELETE'
  | 'SAVE'
  | 'PREVIEW'
  | 'VIEW'
  | 'PUBLISH'
  | 'DOWNLOAD'
  | 'SCREENSHOT_UPLOADING'
  | 'CONFIG'
  | 'NEXT'
  | 'PLAY'
  | 'EYE'
  | 'RESTART_DEVICE'
  | 'CONFIRM_RESTART_DEVICE'
  | 'RESTART_APP'
  | 'CONFIRM_RESTART_APP'
  | 'SHUTDOWN'
  | 'CONFIRM_SHUTDOWN'
  | 'SCREEN_SLEEP'
  | 'CONFIRM_SCREEN_SLEEP'
  | 'WAKE_UP_SCREEN'
  | 'SYNC_TIME'
  | 'CONFIRM_WAKE_UP_SCREEN'
  | 'NEARLY_WEEK'
  | 'NEARLY_DAY'
  | 'NEARLY_MONTH'
  | 'NEARLY_ONE_HOUR'
  | 'NEARLY_SIX_HOUR'
  | 'TIMER_SET'
  | 'BATCH_CONTROL'
  | 'BATCH_SHUTDOWN_DETAIL'
  | 'WAKE_UP'
  | 'BATCH_WAKE_UP_DETAIL'
  | 'SLEEP'
  | 'BATCH_SLEEP_DETAIL';