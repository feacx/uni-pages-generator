import { DEFAULT_STORAGE_NAME, DEFAULT_USER_STORAGE_NAME } from "./config";
import { defaultParams } from "./config/default.config";
import { getLoginId, onTrack, setGlobalUserStorageData } from "./http";
import { IParams } from "./interface";
import { Bootstrap, setLaunchAttribute } from "./lifecycle";
import { initialize } from "./utils";
import { IQueryObject } from "./utils/route.util";

/**
 * @description main into
 * @author Fea.cx
 * @datetime 2022-11-22
 */

export class Analytics {
  public config; // 全局设置
  public app: {
    [key: string]: any;
  };

  constructor(config: IParams) {
    this.app = {};
    this.config = { ...defaultParams, ...config };
    this.init();
  }

  /**
   * @description 初始化函数
   */
  async init() {
    this.clearData();
    await initialize(this.config.name);
    this.app = getApp();
    this.app[this.config.name] = {};
    const app = this.app[this.config.name]
    app.track = this.track;
    app.config = this.config;
    app.setOpenid = this.setOpenid;
    app.login = this.login;
    app.miniprogram_name = this.config.miniprogram_name;
    const account = wx.getAccountInfoSync();
    app.appid = account.miniProgram.appId;
    setLaunchAttribute(this.config.name);
    new Bootstrap(app);
  }

  // 格式化数据
  // 合并数据
  // 发送请求
  track(event: string, properties: IQueryObject) {
    onTrack(event, properties, '', this.config.show_log);
  }

  // 设置openid
  setOpenid(openid: string) {
    setGlobalUserStorageData('openid', openid);
    if (!getLoginId()) {
      setGlobalUserStorageData('distinct_id', openid);
    }
  }

  // 设置 Login id
  login(id: string | number) {
    setGlobalUserStorageData('login_id', id);
  }

  clearData() {
    wx.removeStorageSync(DEFAULT_STORAGE_NAME);
    wx.removeStorageSync(DEFAULT_USER_STORAGE_NAME);
  }
}
