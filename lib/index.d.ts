const DEFAULT_NAME = "monitor"; // 全局应用变量名
const DEFAULT_STORAGE_NAME = 'monitor_storage_2022'; // 全局 Storage 存储值
const SDK_VERSION = '0.1'; // SDK库版本

const defaultParams = {
    name: DEFAULT_NAME,
    server_url: "https://api.xxx.com/byte.gif",
    send_timeout: 1e3,
    show_log: true,
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
    batch_send: true,
    storage_store_key: DEFAULT_STORAGE_NAME,
    storage_store_user_key: DEFAULT_STORAGE_NAME, // 全局数据 storage 键名
};

/**
 * @description 根据对象生成url拼接字符串（仅支持一级结构）
 */
const generateUrlQueryWithObject = (params) => {
    let _ = '';
    for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
            const element = params[key];
            _ += `${key}=${element}`;
        }
    }
    return _;
};
/**
 * @description 根据URL及参数创建完整的URL参数
 * @param {string} string 基础url
 * @param {object} params 请求参数Object
 */
const generateFullUrl = (url, params) => {
    if (isEmptyObject(params))
        return url;
    const query = generateUrlQueryWithObject(params || {});
    return `${url}${query ? `?${query}` : ''}`;
};
/**
 * @description 校验是否为空对象
 */
const isEmptyObject = (e) => {
    if (isObject(e)) {
        for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t))
                return !1;
        return true;
    }
    return false;
};

/**
 * @description 获取系统信息
 */
const getSystemInfo = () => {
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
const getNetworkType = () => {
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
const initialize = (name) => {
    return Promise.all([getNetworkType(), getSystemInfo()]).catch((err) => {
        console.log("初始化失败", err);
    });
};
/**
 * @description 获取当前URL，不包含参数
 */
const getCurrentPageUrl = (step = 1) => {
    try {
        const pages = getCurrentPages();
        const currentPage = pages[pages.length - step];
        return currentPage.route;
    }
    catch (_a) {
        const launch = wx.getLaunchOptionsSync();
        return launch.path;
    }
};
/**
 * @description 获取当前URL
 */
const getCurrentPageUrlAndArgs = (step = 1) => {
    try {
        const pages = getCurrentPages();
        const currentPage = pages[pages.length - step];
        return generateFullUrl(currentPage.route, currentPage.options);
    }
    catch (_a) {
        const launch = wx.getLaunchOptionsSync();
        return generateFullUrl(launch.path, launch.query);
    }
};
/**
 * @description 获取referer
 */
const getReferer = () => {
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
const mergeGlobalStorageObject = (newObject) => {
    const originObject = wx.getStorageSync(DEFAULT_STORAGE_NAME);
    const cpObject = { ...originObject, ...newObject };
    setGlobalStorageSync(cpObject);
};
/**
 * @description 存储全局属性数据
 */
const setGlobalStorageSync = (value) => {
    wx.setStorageSync(DEFAULT_STORAGE_NAME, value);
};
/**
 * @description 获取全局属性数据
 */
const getGlobalStorageSycn = () => {
    return wx.getStorageSync(DEFAULT_STORAGE_NAME);
};
/**
 * @description 校验是否为对象
 */
const isObject = (e) => {
    return null != e && "[object Object]" == Object.prototype.toString.call(e);
};
/**
 * @description 获取当前时间戳
 */
const getCurrentTimestramp = () => {
    return new Date().getTime();
};
/**
 * @description 获取UUID
 */
const getUUID = () => {
    return (Date.now() +
        "-" +
        Math.floor(1e7 * getRandom()) +
        "-" +
        getRandom()
            .toString(16)
            .replace(".", "") +
        "-" +
        String(31242 * getRandom())
            .replace(".", "")
            .slice(0, 8));
};
const getRandom = () => {
    let e = getCurrentTimestramp();
    const l = Math.ceil(((e = (9301 * e + 49297) % 233280) / 233280) * 1e19);
    return l / 1e19;
};
/**
 * @description url解码
 */
const _decodeURIComponent = (e) => {
    var t = "";
    try {
        t = decodeURIComponent(e);
    }
    catch (a) {
        t = e;
    }
    return t;
};

/**
 * @description 发送请求
 */
const http = (data, url) => {
    wx.request({
        url: url,
        method: "POST",
        data,
        success(e) {
        },
        fail(e) {
            exceptLog(e);
        },
    });
};
/**
 * @description 上报异常Log
 */
const exceptLog = (e) => {
    console.error("数据上报错误", e);
};
/**
 * @description 数据收集及上报
 */
const onTrack = (event, properties, server_url, show_log) => {
    // 数据格式转换
    const data = formatParameter(event, properties);
    // 是否打印Log
    show_log && console.log(data);
    // 校验缓存中是否有未发出的数据
    // 校验数据格式
    // 发送数据
    http(data, server_url || defaultParams.server_url);
};
/**
 * @description 全局数据格式处理封装
 */
// 封装数据
const formatParameter = (event, properties) => {
    const GlobalProperties = getGlobalStorageSycn();
    const _current_propertie = {
        $referrer: getReferer() || '',
        $url: getCurrentPageUrl(),
        $url_path: getCurrentPageUrlAndArgs(),
    };
    return {
        distinct_id: getDistinctId(),
        anonymous_id: getAnonymousId(),
        login_id: getLoginId(),
        openid: setOpenid$1(),
        properties: {
            ...GlobalProperties,
            ...properties,
            ..._current_propertie,
        },
        type: "track",
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
const getDistinctId = () => {
    let user = getGlobalUserStorage();
    if (user.distinct_id) {
        return user.distinct_id;
    }
    else {
        const anonymous_id = getAnonymousId();
        setGlobalUserStorageData('distinct_id', anonymous_id);
        return getDistinctId();
    }
};
/**
 * @description 获取 LoginID
 * @returns
 */
const getLoginId = () => {
    let user = getGlobalUserStorage();
    if (user.login_id) {
        setGlobalUserStorageData('distinct_id', user.login_id);
        return user.login_id;
    }
    return '';
};
/**
 * @description 获取 LoginID
 * @returns
 */
const setOpenid$1 = () => {
    let user = getGlobalUserStorage();
    if (user.openid) {
        setGlobalUserStorageData('distinct_id', user.openid);
        return user.openid;
    }
    return '';
};
/**
 * @description 获取匿名ID
 * @returns
 */
const getAnonymousId = () => {
    let user = getGlobalUserStorage();
    if (user.anonymous_id) {
        return user.anonymous_id;
    }
    else {
        const uuid = getUUID();
        setGlobalUserStorageData('anonymous_id', uuid);
        return getAnonymousId();
    }
};
const setGlobalUserStorageData = (key, value) => {
    const user = getGlobalUserStorage();
    user[key] = value;
    wx.setStorageSync(globalConfig.storage_store_user_key, user);
};
const getGlobalUserStorage = () => {
    const user = wx.getStorageSync(globalConfig.storage_store_user_key);
    return user || {};
};

/**
 * @description 小程序首次启动获取到的参数
 */
const setLaunchAttribute = (app_name) => {
    const launch = wx.getLaunchOptionsSync();
    const launchInfo = {
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
class Bootstrap {
    constructor() {
        this.pageEvent = function (e) {
            if (monitor.config.autoTrack.pageLoad) {
                const type = 'onLoad';
                if (e[type]) {
                    const _event = e[type];
                    e[type] = function () {
                        monitor.track('$PageLoad', {});
                        _event.apply(this, arguments);
                    };
                }
            }
            if (monitor.config.autoTrack.pageShow) {
                const type = 'onShow';
                if (e[type]) {
                    const _event = e[type];
                    e[type] = function () {
                        monitor.track('$PageShow', {});
                        _event.apply(this, arguments);
                    };
                }
            }
            if (monitor.config.autoTrack.pageUnload) {
                const type = 'onUnload';
                if (e[type]) {
                    const _event = e[type];
                    e[type] = function () {
                        monitor.track('$PageUnload', {});
                        _event.apply(this, arguments);
                    };
                }
            }
            if (monitor.config.autoTrack.pageHide) {
                const type = 'onHide';
                if (e[type]) {
                    const _event = e[type];
                    e[type] = function () {
                        monitor.track('$PageHide', {});
                        _event.apply(this, arguments);
                    };
                }
            }
            if (monitor.config.autoTrack.pageShare) {
                const type = 'onShareAppMessage';
                if (e[type]) {
                    const _event = e[type];
                    e[type] = function () {
                        monitor.track('$pageShare', {});
                        _event.apply(this, arguments);
                    };
                }
                const type2 = 'onShareTimeline';
                if (e[type2]) {
                    const _event = e[type2];
                    e[type2] = function () {
                        monitor.track('$pageShare', {});
                        _event.apply(this, arguments);
                    };
                }
            }
        };
        this.init();
    }
    init() {
        const config = monitor.config;
        if (!isObject(config))
            return;
        config.autoTrack && config.autoTrack.appLaunch && this.appLaunch();
        config.autoTrack && config.autoTrack.appShow && this.appShow();
        config.autoTrack && config.autoTrack.appHide && this.appHide();
        this.pageMonitor();
    }
    /**
     * @description 小程序启动
     */
    appLaunch() {
        monitor.track("$MPLaunch", {});
    }
    ;
    appShow() {
        wx.onAppShow((e) => {
            monitor.track("$MPShow", {});
        });
    }
    ;
    appHide() {
        wx.onAppShow((e) => {
            monitor.track("$MPHide", {});
        });
    }
    ;
    pageMonitor() {
        const that = this;
        const e = Page;
        Page = function (t) {
            try {
                // @ts-ignore
                t || (t = {}), that.pageEvent(t), e.apply(this, arguments);
            }
            catch (t) {
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
            }
            catch (e) {
                // @ts-ignore
                t.apply(this, arguments);
            }
        };
    }
}

const monitor = {};
const globalConfig = { ...defaultParams };
const setParam = async (config) => {
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
const clearData = (config) => {
    wx.removeStorageSync(config.storage_store_key);
    wx.removeStorageSync(config.storage_store_user_key);
};
const track = (event, properties) => {
    onTrack(event, properties, "", globalConfig.show_log);
};
// 设置openid
const setOpenid = (openid) => {
    setGlobalUserStorageData("openid", openid);
    if (!getLoginId()) {
        setGlobalUserStorageData("distinct_id", openid);
    }
};
const login = (id) => {
    setGlobalUserStorageData("distinct_id", id);
    setGlobalUserStorageData("login_id", id);
    track('$BindId', {});
};

export { globalConfig, login, monitor, setOpenid, setParam, track };
