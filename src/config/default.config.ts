import { IParams } from "../interface";
import { DEFAULT_NAME, DEFAULT_STORAGE_NAME } from '../config';

export const defaultParams: IParams = {
  name: DEFAULT_NAME, // 全局变量名
  server_url: "https://philips.dev.x-chain.net.cn/lab/cms/baseContentTag/getContentTagList", // 服务端url
  send_timeout: 1e3, // 超时时间
  show_log: true, // 是否打印Log
  autoTrack: {
    // 自动采集的事件
    appLaunch: true,
    appShow: true,
    appHide: true,
    pageShow: true,
    pageShare: true,
    pageLoad: true,
    pageHide: true,
    pageUnload: true,
    mpClick: true,
    mpFavorite: true,
    pageLeave: true,
  },
  batch_send: true, // 是否批量发送数据
  storage_store_key: DEFAULT_STORAGE_NAME, // 全局数据 storage 键名
};
