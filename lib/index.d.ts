import { writeFileSync } from 'fs';

let tree = {
    pages: [
        {
            path: "pages/home/index",
            style: {
                navigationBarTitleText: "首页",
                navigationStyle: "custom",
                usingComponents: {
                    "bottom-tabbar": "/components/BottomTabbar/BottomTabbar",
                },
                enablePullDownRefresh: true,
            },
        },
    ],
    subPackages: [
        {
            root: "pages/about",
            pages: [
                {
                    path: "index",
                    style: {
                        navigationBarTitleText: "隐私条款",
                        navigationStyle: "custom",
                        usingComponents: {
                            "navigation-bar": "/components/NavigationBar/NavigationBar",
                        },
                    },
                },
                {
                    path: "player",
                    style: {
                        navigationBarTitleText: "视频播放",
                        disableScroll: true,
                        navigationStyle: "custom",
                        usingComponents: {
                            "navigation-bar": "/components/NavigationBar/NavigationBar",
                            "tencent-cloud-player": "plugin://tencent-cloud-player/player",
                        },
                    },
                },
            ],
        },
    ],
    globalStyle: {
        navigationBarTextStyle: "black",
        navigationBarTitleText: "Philips LAB",
        navigationBarBackgroundColor: "#ffffff",
        backgroundColor: "#ffffff",
    },
    tabBar: {
        list: [
            {
                pagePath: "pages/home/index",
            },
            {
                pagePath: "pages/user/index",
            },
        ],
        borderStyle: "white",
    },
    easycom: {
        "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue",
    },
    condition: {
        current: 0,
        list: [
            {
                name: "首页",
                path: "pages/home/index",
                query: "",
            },
        ],
    },
};
const json = JSON.stringify(tree, null, "\t");
writeFileSync("./pages2.json", json);
