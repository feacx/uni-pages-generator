import { isObject } from ".";

/**
 * @description 全局数据结构
 */
export interface IQueryObject {
  [key: string]: string | number | boolean;
}

/**
 * @description 根据对象生成url拼接字符串（仅支持一级结构）
 */
 export const generateUrlQueryWithObject = (params: Record<string, string | undefined>): string => {
  let _ = '';
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const element = params[key];
      _ += `${key}=${element}`;
    }
  }
  return _;
}

/**
 * @description 根据URL及参数创建完整的URL参数
 * @param {string} string 基础url
 * @param {object} params 请求参数Object
 */
export const generateFullUrl = (url: string, params?: Record<string, string | undefined>): string => {
  if (isEmptyObject(params)) return url;
  const query = generateUrlQueryWithObject(params || {});
  return `${url}${query ? `?${query}` : ''}`;
}

/**
 * @description 校验是否为空对象
 */
export const isEmptyObject = (e: any) => {
  if (isObject(e)) {
    for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
    return true;
  }
  return false;
}

