import { monitor } from "..";
import {
  isObject,
  mergeGlobalStorageObject,
  _decodeURIComponent,
} from "../utils";

/**
 * @description 小程序首次启动获取到的参数
 */
export const setLaunchAttribute = (app_name: string) => {
  const launch = wx.getLaunchOptionsSync();
  const launchInfo: {
    [key: string]: any;
  } = {
    $app_id: monitor.appid,
    $latest_scene: launch.scene,
    $miniprogram_name: monitor.miniprogram_name,
  };
  const utm_source = ['utm_campaign', 'utm_content', 'utm_medium', 'utm_source', 'utm_term'];
  for (let index = 0; index < utm_source.length; index++) {
    const element = utm_source[index];
    if (launch.query[element]) {
      launchInfo[`$${element}`] = _decodeURIComponent(launch.query[element]);
    }
  }
  mergeGlobalStorageObject(launchInfo);
};

export class Bootstrap {
  constructor() {
    this.init();
  }

  init() {
    const config = monitor.config;
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
    monitor.track("$MPLaunch", {});
  };

  appShow() {
    wx.onAppShow((e) => {
      monitor.track("$MPShow", {});
    });
  };

  appHide() {
    wx.onAppShow((e) => {
      monitor.track("$MPHide", {});
    });
  };

  pageMonitor() {
    const that = this;
    const e = Page;
    Page = function (t) {
      try {
        // @ts-ignore
        t || (t = {}), that.pageEvent(t), e.apply(this, arguments);
      } catch (t) {
        // @ts-ignore
        e.apply(this, arguments);
      }
    };
    const t = Component;
    // @ts-ignore
    Component = function (e) {
      try {
        // @ts-ignore
        e || (e = {}), e.methods || (e.methods = {}), that.pageEvent(e.methods), t.apply(this, arguments);
      } catch (e) {
        // @ts-ignore
        t.apply(this, arguments);
      }
    };
  }

  pageEvent = function (e: any) {
    if (monitor.config.autoTrack.pageLoad) {
      const type = 'onLoad';
      if (e[type]) {
        const _event = e[type];
        e[type] = function() {
          monitor.track('$PageLoad', {})
          _event.apply(this, arguments)
        }
      }
    }
    if (monitor.config.autoTrack.pageShow) {
      const type = 'onShow';
      if (e[type]) {
        const _event = e[type];
        e[type] = function() {
          monitor.track('$PageShow', {})
          _event.apply(this, arguments)
        }
      }
    }
    if (monitor.config.autoTrack.pageUnload) {
      const type = 'onUnload';
      if (e[type]) {
        const _event = e[type];
        e[type] = function() {
          monitor.track('$PageUnload', {})
          _event.apply(this, arguments)
        }
      }
    }
    if (monitor.config.autoTrack.pageHide) {
      const type = 'onHide';
      if (e[type]) {
        const _event = e[type];
        e[type] = function() {
          monitor.track('$PageHide', {})
          _event.apply(this, arguments)
        }
      }
    }
    if (monitor.config.autoTrack.pageShare) {
      const type = 'onShareAppMessage';
      if (e[type]) {
        const _event = e[type];
        e[type] = function() {
          monitor.track('$pageShare', {})
          _event.apply(this, arguments)
        }
      }
      const type2 = 'onShareTimeline';
      if (e[type2]) {
        const _event = e[type2];
        e[type2] = function() {
          monitor.track('$pageShare', {})
          _event.apply(this, arguments)
        }
      }
    }
  }
}

/**
 * @description 元素点击
 */
export const mpClick = (app: any) => {
  app.track("launch", {});
};
