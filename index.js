'use strict';

/**
 * @description main into
 * @author Fea.cx
 * @datetime 2022-11-22
 */
const a = 213;
class Analytics {
    constructor() {
        this.init();
    }
    /**
     * @description 初始化函数
     */
    init() {
        Promise.all([this.getNetworkType, this.getSystemInfo])
            .then((res) => {
            const success_message = '成功';
            console.log('成功了', success_message);
            console.log('asdasd', getApp());
        })
            .catch((err) => {
            console.log('失败了', err);
        });
    }
    static setParam() {
        console.log('阿斯达啊');
    }
    getSystemInfo() {
        return new Promise((resolve, reject) => {
            wx.getSystemInfo({
                success(e) {
                    resolve(e);
                },
                fail(e) {
                    reject(e);
                },
            });
        });
    }
    getNetworkType() {
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
    }
}

exports.Analytics = Analytics;
exports.a = a;
