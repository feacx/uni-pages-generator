import { globalConfig } from "..";
import { defaultParams } from "../config/default.config";
import { ITrack } from "../interface";
import { getCurrentPageUrl, getCurrentPageUrlAndArgs, getCurrentTimestramp, getGlobalStorageSycn, getReferer, getUUID } from "../utils";
import { IQueryObject } from "../utils/route.util";

/**
 * @description 发送请求
 */
export const http = (data: ITrack, url: string) => {
  wx.request({
    url: url,
    method: "POST",
    data,
    success(e: any) {
      successLog(e);
    },
    fail(e: any) {
      exceptLog(e);
    },
  });
};

/**
 * @description 上报成功Log
 */
export const successLog = (e: any) => {
  // console.log("数据上报成功", e);
};

/**
 * @description 上报异常Log
 */
export const exceptLog = (e: any) => {
  console.error("数据上报错误", e);
};

/**
 * @description 数据收集及上报
 */
export const onTrack = (event: string, properties: IQueryObject, server_url: string, show_log?: boolean) => {
  // 数据格式转换
  const data = formatParameter(event, properties);

  // 是否打印Log
  show_log && console.log(data);

  // 校验缓存中是否有未发出的数据
  
  // 校验数据格式
  
  // 发送数据
  http(data, server_url || defaultParams.server_url);
}

/**
 * @description 全局数据格式处理封装
 */
// 封装数据
export const formatParameter = (event: string, properties: IQueryObject) => {
  const GlobalProperties = getGlobalStorageSycn();
  const _current_propertie = {
    $referrer: getReferer() || '',
    $url: getCurrentPageUrl(),
    $url_path: getCurrentPageUrlAndArgs(),
  };
  return {
    distinct_id: getDistinctId(), // 用户唯一 ID
    anonymous_id: getAnonymousId(), // 匿名 ID，先从 storage 里拿，如果没有，就生成一个
    login_id: getLoginId(), // 自定义服务端ID
    openid: setOpenid(), // 自定义服务端ID
    properties: {
      ...GlobalProperties,
      ...properties,
      ..._current_propertie,
    },
    type: "track", // track
    event,
    time: getCurrentTimestramp(), //当前时间戳
  };
};

/**
 * @description 获取distinct_ID 用户唯一ID
 * 当初始化时，生成一条随机 ID
 * 当获取到用户数据后，替换为 openid
 * 当用户还有其他ID时，设置为用户的唯一 ID
 */
export const getDistinctId = (): string => {
  let user = getGlobalUserStorage();
  if (user.distinct_id) {
    return user.distinct_id
  } else {
    const anonymous_id = getAnonymousId()
    setGlobalUserStorageData('distinct_id', anonymous_id);
    return getDistinctId();
  }
}

/**
 * @description 获取 LoginID
 * @returns 
 */
 export const getLoginId = (): string => {
  let user = getGlobalUserStorage();
  if (user.login_id) {
    setGlobalUserStorageData('distinct_id', user.login_id);
    return user.login_id
  }
  return '';
}

/**
 * @description 获取 LoginID
 * @returns 
 */
 export const setOpenid = (): string => {
  let user = getGlobalUserStorage();
  if (user.openid) {
    setGlobalUserStorageData('distinct_id', user.openid);
    return user.openid
  }
  return '';
}

/**
 * @description 获取匿名ID
 * @returns 
 */
export const getAnonymousId = (): string => {
  let user = getGlobalUserStorage();
  if (user.anonymous_id) {
    return user.anonymous_id
  } else {
    const uuid = getUUID();
    setGlobalUserStorageData('anonymous_id', uuid);
    return getAnonymousId();
  }
}

export const setGlobalUserStorageData = (key: string, value: string | number) => {
  const user = getGlobalUserStorage();
  user[key] = value;
  wx.setStorageSync(globalConfig.storage_store_user_key, user);
}

const getGlobalUserStorage = () => {
  const user = wx.getStorageSync(globalConfig.storage_store_user_key);
  return user || {};
}
