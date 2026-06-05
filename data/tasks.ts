export type TaskPriority = "高" | "中" | "低";
export type TaskStatus = "未开始" | "进行中" | "已完成";

export type PracticeTask = {
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  estimatedTime: string;
  deliverable: string;
};

export type WeeklyTasks = {
  week: string;
  focus: string;
  tasks: PracticeTask[];
};

export const weeklyTasks: WeeklyTasks[] = [
  {
    week: "第1周",
    focus: "平台基础与合规意识",
    tasks: [
      {
        title: "标注10个后台常用入口",
        description: "登录 Seller Central，找到订单、库存、广告、绩效、报告、买家消息等入口。",
        priority: "高",
        status: "已完成",
        estimatedTime: "45分钟",
        deliverable: "后台入口截图标注图"
      },
      {
        title: "拆解3个公司产品页面",
        description: "从标题、主图、五点、A+、价格、Review 等角度拆解产品详情页。",
        priority: "高",
        status: "进行中",
        estimatedTime: "90分钟",
        deliverable: "3份页面拆解记录"
      },
      {
        title: "整理10个亚马逊术语",
        description: "用自己的话解释 Listing、Offer、BSR、Review、Rating、FBA/FBM 等术语。",
        priority: "中",
        status: "未开始",
        estimatedTime: "40分钟",
        deliverable: "术语解释表"
      },
      {
        title: "输出账号安全风险清单",
        description: "整理至少10条新人不能触碰的账号高风险动作。",
        priority: "高",
        status: "未开始",
        estimatedTime: "50分钟",
        deliverable: "账号安全红线清单"
      },
      {
        title: "写一段合规买家消息",
        description: "围绕延迟、缺件或退款场景，写一段不诱导评价、不承诺站外补偿的消息。",
        priority: "中",
        status: "未开始",
        estimatedTime: "30分钟",
        deliverable: "买家消息草稿"
      }
    ]
  },
  {
    week: "第2周",
    focus: "产品与 Listing 基础",
    tasks: [
      {
        title: "分析3-5个竞品 Listing",
        description: "记录竞品价格、主图、五点顺序、A+、评分、Review 数和差异化机会。",
        priority: "高",
        status: "进行中",
        estimatedTime: "120分钟",
        deliverable: "竞品分析表"
      },
      {
        title: "提取20-30个关键词",
        description: "按核心词、长尾词、场景词、属性词进行分类。",
        priority: "高",
        status: "未开始",
        estimatedTime: "60分钟",
        deliverable: "关键词分类表"
      },
      {
        title: "写3版标题",
        description: "每版标题都需要说明关键词优先级、卖点逻辑和合规注意点。",
        priority: "高",
        status: "未开始",
        estimatedTime: "60分钟",
        deliverable: "3版标题草稿"
      },
      {
        title: "完成1套五点描述",
        description: "按买家决策顺序写5条卖点，避免夸大承诺和关键词堆砌。",
        priority: "高",
        status: "未开始",
        estimatedTime: "75分钟",
        deliverable: "五点描述草稿"
      },
      {
        title: "完成1份 Search Terms",
        description: "补充标题和五点未覆盖的相关搜索词，避免重复和无关词。",
        priority: "中",
        status: "未开始",
        estimatedTime: "40分钟",
        deliverable: "Search Terms 表"
      },
      {
        title: "输出 Listing 合规检查表",
        description: "检查标题、五点、图片、品牌词、促销词和绝对化表述。",
        priority: "高",
        status: "未开始",
        estimatedTime: "45分钟",
        deliverable: "Listing 合规检查表"
      }
    ]
  },
  {
    week: "第3周",
    focus: "图片、A+、促销与广告基础",
    tasks: [
      {
        title: "规划7张副图",
        description: "把尺寸、材质、功能、场景、对比、包装和说明书转化为图片主题。",
        priority: "高",
        status: "未开始",
        estimatedTime: "90分钟",
        deliverable: "7张副图规划表"
      },
      {
        title: "完成1套 A+ 页面草图",
        description: "规划品牌故事、核心卖点、细节放大、场景展示和对比表模块。",
        priority: "中",
        status: "未开始",
        estimatedTime: "90分钟",
        deliverable: "A+模块草图"
      },
      {
        title: "设计7天促销测试表",
        description: "为1个新品设定 Coupon、价格、预算和观察指标。",
        priority: "中",
        status: "未开始",
        estimatedTime: "50分钟",
        deliverable: "促销测试表"
      },
      {
        title: "查看1个广告活动数据",
        description: "记录曝光、点击、CTR、CPC、花费、订单、销售额和 ACOS。",
        priority: "高",
        status: "未开始",
        estimatedTime: "60分钟",
        deliverable: "广告观察表"
      },
      {
        title: "提出加词和否词建议",
        description: "从搜索词报告中找出3个可加词和3个需否定词。",
        priority: "高",
        status: "未开始",
        estimatedTime: "45分钟",
        deliverable: "广告优化建议"
      }
    ]
  },
  {
    week: "第4周",
    focus: "售后、绩效、数据与复盘",
    tasks: [
      {
        title: "整理5个售后案例",
        description: "判断责任类型、处理方案、风险等级和可反馈给产品的问题。",
        priority: "高",
        status: "未开始",
        estimatedTime: "90分钟",
        deliverable: "售后案例表"
      },
      {
        title: "记录 Account Health 指标",
        description: "找到 ODR、VTR、LSR、OTDR 等指标入口并说明含义。",
        priority: "高",
        status: "未开始",
        estimatedTime: "60分钟",
        deliverable: "绩效指标说明表"
      },
      {
        title: "分析1个产品最近7天数据",
        description: "对比上周，判断流量、点击、转化、广告或库存问题。",
        priority: "高",
        status: "未开始",
        estimatedTime: "90分钟",
        deliverable: "7天数据分析表"
      },
      {
        title: "写1份200-300字周复盘",
        description: "用清晰结构说明本周数据变化、原因判断和下周动作。",
        priority: "高",
        status: "未开始",
        estimatedTime: "45分钟",
        deliverable: "周复盘文档"
      },
      {
        title: "输出3条下周优化动作",
        description: "每条动作需要写明负责人、预期指标和观察周期。",
        priority: "中",
        status: "未开始",
        estimatedTime: "35分钟",
        deliverable: "下周行动清单"
      },
      {
        title: "整理1份产品证据包目录",
        description: "归档图片、文案、采购记录、品牌资料和异常截图。",
        priority: "中",
        status: "未开始",
        estimatedTime: "50分钟",
        deliverable: "证据包目录"
      }
    ]
  }
];
