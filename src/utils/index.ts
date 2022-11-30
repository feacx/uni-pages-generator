import { DEFAULT_STORAGE_NAME, SDK_VERSION } from "../config";
import { generateFullUrl, IQueryObject } from "./route.util";

/**
 * @description 获取系统信息
 */
export const getSystemInfo = () => {
  return new Promise((resolve, reject) => {
    wx.getSystemInfoAsync({
      success(res) {
        const sdkInfo = {
          $lib: "MiniProgram",
          $lib_version: SDK_VERSION,
          $wifi_enabled: res.wifiEnabled,
          $brand: res.brand,
          $model: res.model,
          $screen_width: res.screenWidth,
          $screen_height: res.screenHeight,
          $os: res.platform,
          $os_version: res.system,
          $mp_client_app_version: res.version,
          $mp_client_basic_library_version: res.SDKVersion,
        };
        mergeGlobalStorageObject(sdkInfo);
        resolve(res);
      },
      fail(e) {
        reject(e);
      },
    });
  });
};

/**
 * @description 获取设备网络状态
 */
export const getNetworkType = () => {
  return new Promise((resolve, reject) => {
    wx.getNetworkType({
      success(e) {
        resolve(e);
      },
      fail(e) {
        reject(e);
      },
    });
  });
};

/**
 * @description 初始化应用
 */
export const initialize = (name: string) => {
  return Promise.all([getNetworkType(), getSystemInfo()]).catch((err) => {
    console.log("初始化失败", err);
  });
};

/**
 * @description 获取全局小程序APP
 */
export const getMiniprogramApp = () => {
  return getApp();
};

/**
 * @description 获取当前URL，不包含参数
 */
 export const getCurrentPageUrl = (step: number = 1): string => {
  try {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - step];
    return currentPage.route;
  } catch {
    const launch = wx.getLaunchOptionsSync();
    return launch.path;
  }
};

/**
 * @description 获取当前URL
 */
export const getCurrentPageUrlAndArgs = (step: number = 1): string => {
  try {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - step];
    return generateFullUrl(currentPage.route, currentPage.options);
  } catch {
    const launch = wx.getLaunchOptionsSync();
    return generateFullUrl(launch.path, launch.query);
  }
};

/**
 * @description 获取referer
 */
export const getReferer = (): string => {
  const pages = getCurrentPages();
  if (pages.length > 1) {
    return getCurrentPageUrlAndArgs(2);
  }
  const launch = wx.getLaunchOptionsSync();
  return generateFullUrl(launch.path, launch.query);
};

/**
 * @description 合并全局属性数据
 * @param {String} 对象名
 * @param {Object{String}} 另一个对象
 */
export const mergeGlobalStorageObject = (newObject: IQueryObject) => {
  const originObject = wx.getStorageSync(DEFAULT_STORAGE_NAME);
  const cpObject = { ...originObject, ...newObject };
  setGlobalStorageSync(cpObject);
};

/**
 * @description 存储全局属性数据
 */
export const setGlobalStorageSync = (value: any) => {
  wx.setStorageSync(DEFAULT_STORAGE_NAME, value);
};

/**
 * @description 获取全局属性数据
 */
export const getGlobalStorageSycn = () => {
  return wx.getStorageSync(DEFAULT_STORAGE_NAME);
}

/**
 * @description 编译数据
 */
export const encodeTrackData = (e: any) => {
  return encodeURIComponent(e);
};

/**
 * @description 校验是否为对象
 */
export const isObject = (e: any) => {
  return null != e && "[object Object]" == Object.prototype.toString.call(e);
};

/**
 * @description 获取当前时间戳
 */
export const getCurrentTimestramp = () => {
  return new Date().getTime();
};

/**
 * @description 获取UUID
 */
export const getUUID = () => {
  return (
    Date.now() +
    "-" +
    Math.floor(1e7 * getRandom()) +
    "-" +
    getRandom()
      .toString(16)
      .replace(".", "") +
    "-" +
    String(31242 * getRandom())
      .replace(".", "")
      .slice(0, 8)
  );
};

export const getRandom = () => {
  let e = getCurrentTimestramp();
  const l = Math.ceil(((e = (9301 * e + 49297) % 233280) / 233280) * 1e19);
  return l / 1e19;
};

/**
 * @description 监测程序是否加载完毕
 */
 export const checkAppLaunch = () => {
  return wx.getLaunchOptionsSync();
};

/**
 * @description url解码
 */
export const _decodeURIComponent = (e: string) => {
  var t = "";
  try {
    t = decodeURIComponent(e);
  } catch (a) {
    t = e;
  }
  return t;
}
