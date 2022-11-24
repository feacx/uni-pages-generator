import { writeFileSync } from "fs";

let student = {
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
    {
      path: "pages/home/signin/prizes",
      style: {
        navigationBarTitleText: "惊喜好礼",
        navigationStyle: "custom",
        usingComponents: {
          "navigation-bar": "/components/NavigationBar/NavigationBar",
        },
      },
    },
    {
      path: "pages/home/signin/records",
      style: {
        navigationBarTitleText: "获奖记录",
        navigationStyle: "custom",
        usingComponents: {
          "navigation-bar": "/components/NavigationBar/NavigationBar",
        },
      },
    },

    {
      path: "pages/user/index",
      style: {
        navigationBarTitleText: "会员中心",
        navigationStyle: "custom",
        enablePullDownRefresh: true,
        usingComponents: {
          "navigation-bar": "/components/NavigationBar/NavigationBar",
        },
      },
    },
  ],

  subPackages: [
    {
      root: "pages/activity",
      pages: [
        {
          path: "index",
          style: {
            navigationBarTitleText: "活动体验",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "shop/activity/index",
          style: {
            navigationBarTitleText: "活动日历",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "list",
          style: {
            navigationBarTitleText: "活动列表",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            "app-plus": {
              scrollIndicator: "none",
            },
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "detail",
          style: {
            navigationBarTitleText: "活动详情",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            "app-plus": {
              scrollIndicator: "none",
            },
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
          },
        },
        {
          path: "results/index",
          style: {
            navigationBarTitleText: "订单结果",
            navigationStyle: "custom",
            "app-plus": {
              scrollIndicator: "none",
            },
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "noNeedDetail",
          style: {
            navigationBarTitleText: "活动详情",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            "app-plus": {
              scrollIndicator: "none",
            },
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
          },
        },
        {
          path: "calendar",
          style: {
            navigationBarTitleText: "活动日历",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            "app-plus": {
              scrollIndicator: "none",
            },
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },
    {
      root: "pages/my",
      pages: [
        {
          path: "activity/index",
          style: {
            navigationBarTitleText: "我的活动",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "order/index",
          style: {
            navigationBarTitleText: "我的订单",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "order/details",
          style: {
            navigationBarTitleText: "订单详情",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "order/applyRefund",
          style: {
            navigationBarTitleText: "申请退款",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "exclusiveRemind/subscribe",
          style: {
            navigationBarTitleText: "订阅设置",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "cardVoucher/index",
          style: {
            navigationBarTitleText: "我的卡券",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "cardVoucher/detail",
          style: {
            navigationBarTitleText: "卡券详情",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            "app-plus": {
              backgroundColor: "#3c76cd",
            },
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "cardVoucher/order/submit",
          style: {
            navigationBarTitleText: "提交订单",
            navigationStyle: "custom",
            enablePullDownRefresh: false,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "cardVoucher/order/list",
          style: {
            navigationBarTitleText: "核销订单",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "cardVoucher/order/detail",
          style: {
            navigationBarTitleText: "核销订单详情",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "mail/index",
          style: {
            navigationBarTitleText: "站内信",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "mail/details",
          style: {
            navigationBarTitleText: "站内信详情",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "privilege/index",
          style: {
            navigationBarTitleText: "我的权益",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "privilege/details",
          style: {
            navigationBarTitleText: "权益介绍",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "product/index",
          style: {
            navigationBarTitleText: "我的产品",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "profile/edit",
          style: {
            navigationBarTitleText: "个人信息",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "profile/code",
          style: {
            navigationBarTitleText: "我的会员码",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "topic/index",
          style: {
            navigationBarTitleText: "我的笔记",
            enablePullDownRefresh: true,
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "collect/index",
          style: {
            navigationBarTitleText: "我的收藏",
            navigationStyle: "custom",
            onReachBottomDistance: 600,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },
    {
      root: "pages/login",
      pages: [
        {
          path: "auth",
          style: {
            navigationBarTitleText: "登录注册页",
            navigationStyle: "custom",
          },
        },
        {
          path: "hobby",
          style: {
            navigationBarTitleText: "兴趣偏好",
            enablePullDownRefresh: false,
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "perfect",
          style: {
            navigationBarTitleText: "完善个人信息",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },
    {
      root: "pages/signin",
      pages: [
        {
          path: "index",
          style: {
            navigationBarTitleText: "二楼签到",
            navigationStyle: "custom",
          },
        },
      ],
    },
    {
      root: "pages/share",
      pages: [
        {
          path: "index",
          style: {
            navigationBarTitleText: "分享",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },

    {
      root: "pages/comment",
      pages: [
        {
          path: "reply",
          style: {
            navigationBarTitleText: "评论回复",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            "app-plus": {
              softinputMode: "adjustPan",
            },
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },

    {
      root: "pages/discovery",
      pages: [
        {
          path: "list",
          style: {
            navigationBarTitleText: "Lab Discovery",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "detail",
          style: {
            navigationBarTitleText: "Discovery",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
          },
        },
      ],
    },

    {
      root: "pages/grass",
      pages: [
        {
          path: "index",
          style: {
            navigationBarTitleText: "种草纪",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "category",
          style: {
            navigationBarTitleText: "种草纪",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "detail",
          style: {
            navigationBarTitleText: "种草纪",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
          },
        },
        {
          path: "publish",
          style: {
            navigationBarTitleText: "种草纪",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },
    {
      root: "pages/health",
      pages: [
        {
          path: "themes",
          style: {
            navigationBarTitleText: "Lab健康",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "list",
          style: {
            navigationBarTitleText: "Lab健康",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "theme",
          style: {
            navigationBarTitleText: "Lab健康主题",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "detail",
          style: {
            navigationBarTitleText: "Lab健康详情",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
          },
        },
      ],
    },

    {
      root: "pages/news",
      pages: [
        {
          path: "index",
          style: {
            navigationBarTitleText: "新鲜事",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "detail",
          style: {
            navigationBarTitleText: "新鲜事",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
          },
        },
      ],
    },
    {
      root: "pages/article",
      pages: [
        {
          path: "detail",
          style: {
            navigationBarTitleText: "文章详情",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
          },
        },
      ],
    },

    {
      root: "pages/feedback",
      pages: [
        {
          path: "index",
          style: {
            navigationBarTitleText: "调研",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "submit",
          style: {
            navigationBarTitleText: "调研",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },

    {
      root: "pages/answer",
      pages: [
        {
          path: "index",
          style: {
            navigationBarTitleText: "问卷答题",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "results/index",
          style: {
            navigationBarTitleText: "答题结果",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "activity",
          style: {
            navigationBarTitleText: "答题活动页",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },

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
    {
      root: "pages/go",
      pages: [
        {
          path: "index",
          style: {
            navigationBarTitleText: "福利GO",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "integral",
          style: {
            navigationBarTitleText: "积分获取",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "exchange/index",
          style: {
            navigationBarTitleText: "积分兑换",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "exchange/detail",
          style: {
            navigationBarTitleText: "兑换记录",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "task",
          style: {
            navigationBarTitleText: "积分获取",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "records",
          style: {
            navigationBarTitleText: "兑换记录",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "raider",
          style: {
            navigationBarTitleText: "兑换记录",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "result",
          style: {
            navigationBarTitleText: "订单结果",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "detail",
          style: {
            navigationBarTitleText: "积分明细",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },
    {
      root: "pages/rule",
      pages: [
        {
          path: "level",
          style: {
            navigationBarTitleText: "等级规则",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "integral",
          style: {
            navigationBarTitleText: "积分规则",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "signin",
          style: {
            navigationBarTitleText: "积分规则",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },

    {
      root: "pages/draw",
      pages: [
        {
          path: "women/index",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            disableScroll: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
          },
        },
        {
          path: "women/draw",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            disableScroll: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "women/scanCode",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            disableScroll: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "women/photoWallIndex",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "women/photoWallTemplate",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "women/photoWallForm",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "women/photoWallList",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "blindBox",
          style: {
            navigationBarTitleText: "盲盒抽奖",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "prizes",
          style: {
            navigationBarTitleText: "惊喜好礼",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "records",
          style: {
            navigationBarTitleText: "获奖记录",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "rule",
          style: {
            navigationBarTitleText: "活动规则",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "christmas/index",
          style: {
            navigationBarTitleText: "圣诞",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "christmas/task",
          style: {
            navigationBarTitleText: "圣诞",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "christmas/draw",
          style: {
            navigationBarTitleText: "圣诞",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "aggregation/index",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            disableScroll: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "aggregation/detail",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "mgm/index",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "valentine/index",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            disableScroll: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
          },
        },
        {
          path: "mgm/task",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "mgm/draw",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "valentine/draw",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "maserati/index",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            disableScroll: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
          },
        },
        {
          path: "maserati/answer",
          style: {
            navigationBarTitleText: "问卷答题",
            navigationStyle: "custom",
            disableScroll: true,
            "app-plus": {
              scrollIndicator: "none",
            },
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "maserati/draw",
          style: {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            disableScroll: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "astronaut/index",
          style: {
            navigationBarTitleText: "冲破束缚 耀上天",
            navigationStyle: "custom",
            disableScroll: false,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "astronaut/diyEquip",
          style: {
            navigationBarTitleText: "冲破束缚 耀上天",
            navigationStyle: "custom",
            disableScroll: false,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "astronaut/diySticker",
          style: {
            navigationBarTitleText: "冲破束缚 耀上天",
            navigationStyle: "custom",
            disableScroll: false,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "astronaut/diyAddress",
          style: {
            navigationBarTitleText: "冲破束缚 耀上天",
            navigationStyle: "custom",
            disableScroll: false,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "astronaut/diyName",
          style: {
            navigationBarTitleText: "冲破束缚 耀上天",
            navigationStyle: "custom",
            disableScroll: false,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "openbox/index",
          style: {
            navigationBarTitleText: "会员福利",
            navigationStyle: "custom",
            disableScroll: true,
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },

    {
      root: "pages/search",
      pages: [
        {
          path: "index",
          style: {
            navigationBarTitleText: "搜索",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "result",
          style: {
            navigationBarTitleText: "搜索",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },

    {
      root: "pages/scan",
      pages: [
        {
          path: "result",
          style: {
            navigationBarTitleText: "扫码结果",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },

    {
      root: "shop",
      pages: [
        {
          path: "home/index",
          style: {
            navigationBarTitleText: "首页",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
            enablePullDownRefresh: true,
          },
        },
        {
          path: "cart/index",
          style: {
            navigationBarTitleText: "购物车",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
            enablePullDownRefresh: true,
          },
        },
        {
          path: "category/index",
          style: {
            navigationBarTitleText: "分类",
            navigationStyle: "custom",
            disableScroll: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
            enablePullDownRefresh: true,
          },
        },
        {
          path: "seckill/index",
          style: {
            navigationBarTitleText: "每日秒杀",
            navigationStyle: "custom",
            disableScroll: false,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
            enablePullDownRefresh: true,
          },
        },
        {
          path: "seckill/list",
          style: {
            navigationBarTitleText: "秒杀专区",
            navigationStyle: "custom",
            disableScroll: false,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
            enablePullDownRefresh: true,
          },
        },
        {
          path: "seckill/detail",
          style: {
            navigationBarTitleText: "秒杀详情",
            navigationStyle: "custom",
            disableScroll: false,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
            enablePullDownRefresh: true,
          },
        },
        {
          path: "order/index",
          style: {
            navigationBarTitleText: "我的订单",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "order/detail",
          style: {
            navigationBarTitleText: "订单详情",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "order/service",
          style: {
            navigationBarTitleText: "售后服务",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "order/orderResults",
          style: {
            navigationBarTitleText: "订单结果",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "order/changePath",
          style: {
            navigationBarTitleText: "回收牙刷头",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "wishList/index",
          style: {
            navigationBarTitleText: "心愿单",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            onReachBottomDistance: 600,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "product/index",
          style: {
            navigationBarTitleText: "商品列表",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "product/evaluate",
          style: {
            navigationBarTitleText: "评价列表",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
          },
        },
        {
          path: "product/videos",
          style: {
            navigationBarTitleText: "视频列表",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
          },
        },
        {
          path: "product/detail",
          style: {
            navigationBarTitleText: "商品详情",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "heatRanking/index",
          style: {
            navigationBarTitleText: "热销榜单",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "buyersElegant/index",
          style: {
            navigationBarTitleText: "精选买家秀",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "buyersElegant/detail",
          style: {
            navigationBarTitleText: "精选买家秀",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
          },
        },
        {
          path: "bargain/index",
          style: {
            navigationBarTitleText: "心愿购",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "bargain/detail",
          style: {
            navigationBarTitleText: "心愿购",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "bargain/activitybargainDetail",
          style: {
            navigationBarTitleText: "心愿购",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },

        {
          path: "bargain/partake",
          style: {
            navigationBarTitleText: "心愿购",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "collage/index",
          style: {
            navigationBarTitleText: "特卖拼团",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "collage/activityCollageDetail",
          style: {
            navigationBarTitleText: "特卖拼团",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "openTicket/index",
          style: {
            navigationBarTitleText: "申请开票",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "address/site",
          style: {
            navigationBarTitleText: "收货地址",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "address/add-site",
          style: {
            navigationBarTitleText: "添加地址",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "collage/partake",
          style: {
            navigationBarTitleText: "特卖拼团",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "collage/detail",
          style: {
            navigationBarTitleText: "特卖拼团",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "collage/collageDetail",
          style: {
            navigationBarTitleText: "特卖拼团",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "bargain/bargainDetail",
          style: {
            navigationBarTitleText: "心愿购",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },

        {
          path: "search/index",
          style: {
            navigationBarTitleText: "搜索",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "search/result",
          style: {
            navigationBarTitleText: "搜索",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "comment/index",
          style: {
            navigationBarTitleText: "发表评价",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "comment/results",
          style: {
            navigationBarTitleText: "发表评价",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "order/submit",
          style: {
            navigationBarTitleText: "提交订单",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "order/submitResult",
          style: {
            navigationBarTitleText: "支付状态",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "withdrawExchange/withdrawExchange",
          style: {
            navigationBarTitleText: "售后服务",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "withdrawExchange/withdraw",
          style: {
            navigationBarTitleText: "退款退货",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "withdrawExchange/exchange",
          style: {
            navigationBarTitleText: "换货",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "withdrawExchange/wuLiu",
          style: {
            navigationBarTitleText: "填写物流信息",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：企业合作福利购-登录页（Old-即将删除）",
          path: "store/cooperate/login/index",
          style: {
            navigationBarTitleText: "登录",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：飞利浦员工店-登录页(New)",
          path: "store/cooperate/login/philips",
          style: {
            navigationBarTitleText: "登录",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：企业合作福利购-登录页(New)",
          path: "store/cooperate/login/cooperate",
          style: {
            navigationBarTitleText: "登录",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：飞利浦员工店-登录页（Old-即将删除）",
          path: "store/employee/login/index",
          style: {
            navigationBarTitleText: "登录",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：企业合作福利购-首页",
          path: "store/cooperate/home/index",
          style: {
            navigationBarTitleText: "首页",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：企业合作福利购-分类",
          path: "store/cooperate/category/index",
          style: {
            navigationBarTitleText: "分类",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：企业合作福利购-商品列表",
          path: "store/cooperate/product/index",
          style: {
            navigationBarTitleText: "商品列表",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：企业合作福利购-购物车",
          path: "store/cooperate/cart/index",
          style: {
            navigationBarTitleText: "购物车",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：企业合作福利购-提交订单",
          path: "store/cooperate/order/submit",
          style: {
            navigationBarTitleText: "提交订单",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：企业合作福利购-支付成功",
          path: "store/cooperate/order/submitResult",
          style: {
            navigationBarTitleText: "支付成功",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：企业合作福利购-订单详情",
          path: "store/cooperate/order/detail",
          style: {
            navigationBarTitleText: "订单详情",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：企业合作福利购-支付结果",
          path: "store/cooperate/order/orderResults",
          style: {
            navigationBarTitleText: "支付结果",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：企业合作福利购-个人中心",
          path: "store/cooperate/user/index",
          style: {
            navigationBarTitleText: "个人中心",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：企业合作福利购-商品搜索页",
          path: "store/cooperate/search/index",
          style: {
            navigationBarTitleText: "商品搜索页",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：企业合作福利购-商品搜索结果页",
          path: "store/cooperate/search/result",
          style: {
            navigationBarTitleText: "商品搜索结果页",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：企业合作福利购-热销榜单",
          path: "store/cooperate/heatRanking/index",
          style: {
            navigationBarTitleText: "热销榜单",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          _comment: "注释：企业合作福利购-商品详情页",
          path: "store/cooperate/product/detail",
          style: {
            navigationBarTitleText: "商品详情页",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "o2o/customized/index",
          style: {
            navigationBarTitleText: "定制服务",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "o2o/experience/activityAbout/index",
          style: {
            navigationBarTitleText: "活动预约",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },

        {
          path: "o2o/myLab/index",
          style: {
            navigationBarTitleText: "我的Lab",
            enablePullDownRefresh: true,
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "o2o/myLab/shopDetail",
          style: {
            navigationBarTitleText: "体验店详情",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "o2o/myLab/specialList",
          style: {
            navigationBarTitleText: "特色专区",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "o2o/myLab/specialDetail",
          style: {
            navigationBarTitleText: "专区详情",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
          },
        },
        {
          path: "o2o/carving/index",
          style: {
            navigationBarTitleText: "尊享定制服务",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },
    {
      root: "pages/service",
      pages: [
        {
          path: "index",
          style: {
            navigationBarTitleText: "售后服务",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "bottom-tabbar": "/components/BottomTabbar/BottomTabbar",
            },
          },
        },
        {
          path: "problem/index",
          style: {
            navigationBarTitleText: "常见问题",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "problem/result",
          style: {
            navigationBarTitleText: "常见问题",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "problem/detail",
          style: {
            navigationBarTitleText: "常见问题",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "locate",
          style: {
            navigationBarTitleText: "服务网点",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-city-selector":
                "plugin://tencent-city-selector/selector-component",
            },
          },
        },
        {
          path: "myProduct",
          style: {
            navigationBarTitleText: "我的产品",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "category",
          style: {
            navigationBarTitleText: "售后服务-分类",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "apply",
          style: {
            navigationBarTitleText: "维修申请",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "productList",
          style: {
            navigationBarTitleText: "产品指南",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "productDetail",
          style: {
            navigationBarTitleText: "产品指南",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "charge",
          style: {
            navigationBarTitleText: "收费标准",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "survey/index",
          style: {
            navigationBarTitleText: "调研列表",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "survey/detail",
          style: {
            navigationBarTitleText: "产品支持调研",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "survey/answer",
          style: {
            navigationBarTitleText: "产品支持调研",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "survey/results",
          style: {
            navigationBarTitleText: "产品支持调研",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "productRegister",
          style: {
            navigationBarTitleText: "产品注册",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "results/register",
          style: {
            navigationBarTitleText: "产品注册",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "memberCheck",
          style: {
            navigationBarTitleText: "会员特权",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "results/member",
          style: {
            navigationBarTitleText: "会员特权",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "results/index",
          style: {
            navigationBarTitleText: "售后结果页",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },

    {
      root: "package-other",
      pages: [
        {
          path: "official-account/subscribe",
          style: {
            navigationBarTitleText: "关注公众号",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "webview/index",
          style: {
            navigationBarTitleText: "Philips LAB",
          },
        },
        {
          path: "zoom/consent",
          style: {
            navigationBarTitleText: "正在建设",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "404/index",
          style: {
            navigationBarTitleText: "正在建设",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "clock/index",
          style: {
            navigationBarTitleText: "正在建设",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "space/index",
          style: {
            navigationBarTitleText: "空间",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "space/privateLetter",
          style: {
            navigationBarTitleText: "私信",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },
    {
      root: "sub/openbox",
      pages: [
        {
          path: "draw",
          style: {
            navigationBarTitleText: "OpenBox首页",
            navigationStyle: "custom",
            enablePullDownRefresh: false,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },
    {
      root: "sub/ohc",
      pages: [
        {
          path: "index",
          style: {
            navigationBarTitleText: "OHC首页",
            navigationStyle: "custom",
            enablePullDownRefresh: false,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "guide",
          style: {
            navigationBarTitleText: "OHC首页",
            navigationStyle: "custom",
            enablePullDownRefresh: false,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "filtrate",
          style: {
            navigationBarTitleText: "牙刷头功能筛选",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "filtrate-result",
          style: {
            navigationBarTitleText: "牙刷头筛选结果",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "guide-info",
          style: {
            navigationBarTitleText: "牙刷头科普信息",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "contrast",
          style: {
            navigationBarTitleText: "牙刷头对比",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "answer",
          style: {
            navigationBarTitleText: "牙刷头答题",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "select",
          style: {
            navigationBarTitleText: "选择牙刷",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "search",
          style: {
            navigationBarTitleText: "搜索牙刷",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "parts-recommend",
          style: {
            navigationBarTitleText: "配件推荐",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "parts-recommend-answer",
          style: {
            navigationBarTitleText: "配件推荐",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "parts-add",
          style: {
            navigationBarTitleText: "添加或修改配件",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "cart",
          style: {
            navigationBarTitleText: "购物车",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "see-head",
          style: {
            navigationBarTitleText: "查看刷头全家福",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },
    {
      root: "sub/cloudcode",
      pages: [
        {
          path: "index",
          style: {
            navigationBarTitleText: "云码-首页",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "result",
          style: {
            navigationBarTitleText: "云码-完成页",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },
    {
      root: "sub/group2.0",
      pages: [
        {
          path: "home/index",
          style: {
            navigationBarTitleText: "OHC首页",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "union/index",
          _comment: "注释: 我的团购中转页",
          style: {
            navigationBarTitleText: "Philips社区团长",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "award/index",
          _comment: "注释: 团长领取奖励页面",
          style: {
            navigationBarTitleText: "Philips社区团长",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "list/index",
          style: {
            navigationBarTitleText: "团购商品列表页",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "list/activityList",
          style: {
            navigationBarTitleText: "团购商品活动列表页",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "detail/index",
          style: {
            navigationBarTitleText: "团购商品详情页",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "my/heelgroup",
          style: {
            navigationBarTitleText: "我的跟团",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "my/openball",
          style: {
            navigationBarTitleText: "我的开团",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "my/detail",
          _comment: "注释: 团长-我的开团-详情",
          style: {
            navigationBarTitleText: "详情",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "headhome/index",
          _comment: "注释: 团长-主页",
          style: {
            navigationBarTitleText: "社区团购",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },

    {
      root: "sub/warranty",
      pages: [
        {
          path: "list/index",
          style: {
            navigationBarTitleText: "电子保卡",
            _comment: "注释：电子保卡列表页（集团用户）",
            navigationStyle: "custom",
            onReachBottomDistance: 88,
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "dealer/index",
          _comment: "注释：电子保卡-经销商",
          style: {
            navigationBarTitleText: "电子保卡",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "dealer/detail",
          style: {
            navigationBarTitleText: "电子保卡",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "dealer/RepairRecord",
          style: {
            navigationBarTitleText: "維修記錄",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "scan/index",
          _comment: "注释：电子保卡-扫码",
          style: {
            navigationBarTitleText: "电子保卡",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "scan/proList",
          _comment: "注释：电子保卡-企业扫码商品列表",
          style: {
            navigationBarTitleText: "电子保卡",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "scan/error",
          _comment: "注释：电子保卡-扫码错误页",
          style: {
            navigationBarTitleText: "电子保卡",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },
    {
      root: "sub/activity/mgm8",
      pages: [
        {
          path: "index",
          style: {
            navigationBarTitleText: "8月活动",
            _comment: "8月活动MGM邀请新人",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "select",
          style: {
            navigationBarTitleText: "8月活动",
            _comment: "8月活动MGM邀请新人",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "diy",
          style: {
            navigationBarTitleText: "8月活动",
            _comment: "8月活动MGM邀请新人",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "lottery",
          style: {
            navigationBarTitleText: "8月活动",
            _comment: "8月活动MGM邀请新人",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "poster",
          style: {
            navigationBarTitleText: "生成海报结果",
            _comment: "8月活动MGM邀请新人",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "rule",
          style: {
            navigationBarTitleText: "活动规则",
            _comment: "8月活动MGM邀请新人",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },
    {
      root: "sub/activity/beard-ninja",
      pages: [
        {
          path: "index",
          style: {
            navigationBarTitleText: "剃须大作战",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
            enablePullDownRefresh: false,
            disableScroll: true,
          },
        },
        {
          path: "rtb",
          style: {
            navigationBarTitleText: "剃须大作战",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
              "tencent-cloud-player": "plugin://tencent-cloud-player/player",
            },
            enablePullDownRefresh: false,
            disableScroll: true,
          },
        },
        {
          path: "flow",
          style: {
            navigationBarTitleText: "剃须大作战",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
            enablePullDownRefresh: false,
            disableScroll: true,
          },
        },
        {
          path: "brand",
          style: {
            navigationBarTitleText: "剃须大作战",
            navigationStyle: "custom",
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
            enablePullDownRefresh: false,
            disableScroll: true,
          },
        },
        {
          path: "gifts",
          style: {
            navigationBarTitleText: "剃须大作战",
            navigationStyle: "custom",
            enablePullDownRefresh: false,
            disableScroll: true,
          },
        },
        {
          path: "share",
          style: {
            navigationBarTitleText: "剃须大作战",
            navigationBarTextStyle: "white",
            navigationBarBackgroundColor: "#000000",
            navigationStyle: "custom",
            enablePullDownRefresh: false,
            disableScroll: true,
          },
        },
        {
          path: "web",
          style: {
            navigationBarTitleText: "剃须大作战",
            navigationBarTextStyle: "white",
            navigationBarBackgroundColor: "#000000",
            homeButton: false,
            enablePullDownRefresh: false,
            disableScroll: true,
          },
        },
      ],
    },
    {
      root: "sub/activity/care",
      pages: [
        {
          path: "index",
          style: {
            navigationBarTitleText: "圣悠活健康好礼",
            navigationStyle: "custom",
            disableScroll: false,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "customized",
          style: {
            navigationBarTitleText: "圣悠活健康好礼",
            navigationStyle: "custom",
            disableScroll: false,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "draw",
          style: {
            navigationBarTitleText: "圣悠活健康好礼",
            navigationStyle: "custom",
            disableScroll: false,
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
        {
          path: "records",
          style: {
            navigationBarTitleText: "圣悠活健康好礼",
            navigationStyle: "custom",
            disableScroll: false,
            enablePullDownRefresh: true,
            usingComponents: {
              "navigation-bar": "/components/NavigationBar/NavigationBar",
            },
          },
        },
      ],
    },
    {
      root: "sub/activity/virtualTour",
      pages: [
        {
          path: "index",
          style: {
            navigationStyle: "custom",
            disableScroll: true,
          },
        },
        {
          path: "welcome",
          style: {
            navigationStyle: "custom",
            disableScroll: true,
          },
        },
      ],
    },
    {
      root: "sub/space",
      pages: [
        {
          path: "product/index",
          style: {
            navigationBarTitleText: "3D空间-产品页",
            navigationStyle: "custom",
            enablePullDownRefresh: false,
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
    usingComponents: {
      "comp-painter": "/wxcomponents/painter/index",
    },
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
      {
        name: "胡子忍者",
        path: "sub/activity/beard-ninja/index",
        query: "",
      },
      {
        name: "商城-分类",
        path: "shop/category/index",
        query: "",
      },
    ],
  },
};

let data = JSON.stringify(student, null, "\t");
writeFileSync("../../pages2.json", data);
