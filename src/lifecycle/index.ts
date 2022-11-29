import {
  getCurrentPageUrlAndArgs,
  getMiniprogramApp,
  getReferer,
  isObject,
  mergeGlobalStorageObject,
} from "../utils";
import { generateFullUrl, IQueryObject } from "../utils/route.util";

/**
 * @description 小程序首次启动获取到的参数
 */
export const setLaunchAttribute = (app_name: string) => {
  const launch = wx.getLaunchOptionsSync();
  const set = {
    $app_id: getMiniprogramApp()[app_name].appid,
    $latest_scene: launch.scene,
    $miniprogram_name: getMiniprogramApp()[app_name].miniprogram_name,
  };
  mergeGlobalStorageObject(set);
};

export class Bootstrap {
  private app;
  constructor(app: any) {
    this.app = app;
    this.init();
  }

  init() {
    const config = this.app.config;
    if (!isObject(config)) return;
    config.autoTrack && config.autoTrack.appLaunch && this.appLaunch();
    config.autoTrack && config.autoTrack.appShow && this.appShow();
    config.autoTrack && config.autoTrack.appHide && this.appHide();
    this.pageMonitor()
  }

  /**
   * @description 小程序启动
   */
  appLaunch() {
    this.app.track("$MPLaunch", {});
  };

  appShow() {
    wx.onAppShow((e) => {
      this.app.track("$MPShow", {});
    });
  };

  appHide() {
    wx.onAppShow((e) => {
      this.app.track("$MPHide", {});
    });
  };

  pageMonitor() {
    const that = this;
    var e = Page;
    Page = function(t) {
      try {
        // @ts-ignore
        t || (t = {}), that.pageEvent(t), e.apply(this, arguments);
      } catch (t) {
        // @ts-ignore
        e.apply(this, arguments);
      }
    };
    var t = Component;
    // @ts-ignore
    Component = function(e) {
      try {
        e || (e = {}), that.pageEvent(e.methods || {});
        // @ts-ignore
        t.apply(this, arguments);
      } catch (e) {
        // @ts-ignore
        t.apply(this, arguments);
      }
    };
  }

  pageEvent = (e: any) => {
    this.app.config.autoTrack.pageLoad && (e.onLoad = () => {
      this.app.track('$PageLoad', {})
    })
    this.app.config.autoTrack.pageShow && (e.onShow = () => {
      console.log('Show');
      this.app.track('$PageShow', {})
    })
    this.app.config.autoTrack.pageUnload && (e.onUnload = () => {
      console.log('Unload');
      this.app.track('$PageUnload', {})
    })
    this.app.config.autoTrack.pageHide && (e.onHide = () => {
      console.log('Hide');
      this.app.track('$PageHide', {})
    })
  }
}

/**
 * @description 小程序展示
 */
export const pageShare = (app: any) => {
  console.log("asdasd", app);
  app.track("launch", {});
};

/**
 * @description 元素点击
 */
export const mpClick = (app: any) => {
  console.log("asdasd", app);
  app.track("launch", {});
};

