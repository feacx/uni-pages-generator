/**
 * @description 初始化参数
 */
export interface IParams {
  name: string; // 全局变量名
  server_url: string; // 服务端url
  send_timeout: number; // 超时时间
  show_log: boolean; // 是否打印Log
  autoTrack: {
    // 自动采集的事件
    appLaunch: boolean;
    appShow: boolean;
    appHide: boolean;
    pageShow: boolean;
    pageLoad: boolean;
    pageHide: boolean;
    pageUnload: boolean;
    pageShare: boolean;
    mpClick: boolean;
    mpFavorite: boolean;
    pageLeave: boolean;
  };
  batch_send: boolean; // 是否批量发送数据
  storage_store_key: string;
  storage_store_user_key: string;
  miniprogram_name?: string;
}

/**
 * @description 数据格式
 */
export interface ITrack {
  distinct_id: string;
  anonymous_id: string;
  login_id: string | number;
  type: string; // track
  event: string;
  time: number;
}
