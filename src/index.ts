import { defaultParams } from "./config/default.config";
import { getLoginId, onTrack, setGlobalUserStorageData } from "./http";
import { IParams } from "./interface";
import { Bootstrap, setLaunchAttribute } from "./lifecycle";
import { initialize } from "./utils";
import { IQueryObject } from "./utils/route.util";

export const monitor: {
  [key: string]: any;
} = {};

export const globalConfig: IParams = { ...defaultParams };

export const setParam = async (config: IParams) => {
  clearData(config);
  await initialize(config.name);
  globalConfig.name = config.name;
  globalConfig.miniprogram_name = config.miniprogram_name;
  monitor.track = track;
  monitor.config = globalConfig;
  monitor.setOpenid = setOpenid;
  monitor.login = login;
  monitor.miniprogram_name = config.miniprogram_name;
  const account = wx.getAccountInfoSync();
  monitor.appid = account.miniProgram.appId;
  const app = getApp();
  app[config.name] = monitor;
  setLaunchAttribute(config.name);
  new Bootstrap();
};

const clearData = (config: IParams) => {
  wx.removeStorageSync(config.storage_store_key);
  wx.removeStorageSync(config.storage_store_user_key);
};

export const track = (event: string, properties: IQueryObject) => {
  onTrack(event, properties, "", globalConfig.show_log);
};

// 设置openid
export const setOpenid = (openid: string) => {
  setGlobalUserStorageData("openid", openid);
  if (!getLoginId()) {
    setGlobalUserStorageData("distinct_id", openid);
  }
}

export const login = (id: string | number) => {
  setGlobalUserStorageData("distinct_id", id);
  setGlobalUserStorageData("login_id", id);
  track('$BindId', {})
}
