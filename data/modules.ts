export type ModuleDifficulty = "入门" | "进阶" | "重点";

export type TrainingModule = {
  title: string;
  description: string;
  difficulty: ModuleDifficulty;
  estimatedTime: string;
  keySkills: string[];
  learningGoals: string[];
  practice: string[];
  assessment: string;
  progress: number;
};

export const modules: TrainingModule[] = [
  {
    title: "第1课 亚马逊平台简介",
    description:
      "理解第三方卖家的经营逻辑，认识 Seller Central 常用入口，掌握 Listing、Offer、Featured Offer、BSR、Review、Rating、FBA/FBM 等基础概念。",
    difficulty: "入门",
    estimatedTime: "4小时",
    keySkills: ["Seller Central", "Listing", "FBA/FBM"],
    learningGoals: [
      "理解选品、上架、引流、转化、履约、售后、复盘的完整链路",
      "认识目录、库存、订单、广告、品牌、绩效、报告、买家消息和帮助 CASE 入口",
      "理解买家看到的是产品详情页，卖家管理的是商品信息、Offer、库存、履约、价格和广告组合"
    ],
    practice: [
      "登录后台，截图标注10个常用入口",
      "拆解3个公司产品页面",
      "整理10个亚马逊术语并用自己的话解释"
    ],
    assessment: "能说清 Listing、Offer、Buy Box、BSR、Review、Rating、FBA/FBM 的含义。",
    progress: 92
  },
  {
    title: "第2课 销售政策及卖家行为准则",
    description:
      "理解账号安全、卖家行为准则、评论政策、买家沟通边界、侵权风险和账号关联风险。",
    difficulty: "重点",
    estimatedTime: "5小时",
    keySkills: ["账号安全", "评论红线", "合规沟通"],
    learningGoals: [
      "理解账号安全高于短期出单",
      "掌握评论红线、买家沟通边界和侵权风险",
      "识别新人最容易犯的违规动作"
    ],
    practice: [
      "输出账号安全风险清单，至少10条",
      "标红现有 Listing 标题中的潜在侵权词、夸大词和促销词",
      "模拟写一段合规买家消息"
    ],
    assessment: "能列出至少10条账号高风险动作，并知道如何规避。",
    progress: 80
  },
  {
    title: "第3课 卖家绩效与客服处理",
    description:
      "掌握 Account Health、ODR、VTR、LSR、OTDR、买家消息、退款和 A-to-z 风险。",
    difficulty: "进阶",
    estimatedTime: "5小时",
    keySkills: ["Account Health", "ODR", "售后处理"],
    learningGoals: [
      "理解 Account Health 是账号生命线",
      "掌握 ODR、VTR、LSR、OTDR、取消率、A-to-z、Chargeback、Negative Feedback",
      "能处理未收到、延迟、破损、缺件、退款、发票等基础售后"
    ],
    practice: [
      "整理5个售后案例，写责任判断和回复草稿",
      "记录 Account Health 各项指标位置和含义",
      "模拟买家延迟收货要求部分退款的处理流程"
    ],
    assessment: "能判断常见售后问题对账号绩效的影响。",
    progress: 54
  },
  {
    title: "第4课 产品上架技巧及 Listing 优化",
    description:
      "掌握新品上架资料整理流程，能写出符合美国买家阅读习惯的标题、五点、Search Terms 和图片需求。",
    difficulty: "重点",
    estimatedTime: "7小时",
    keySkills: ["标题", "五点描述", "Search Terms"],
    learningGoals: [
      "掌握标题、五点、描述、Search Terms、变体、类目、图片与 A+ 基础",
      "从竞品中提取关键词、卖点顺序、价格带和差异化机会",
      "输出合规、可读、有关键词逻辑的 Listing 文案"
    ],
    practice: [
      "找3-5个竞品，整理标题结构、五点顺序、价格、评分、Review 数量和主图风格",
      "输出20-30个关键词，按核心词、长尾词、场景词、属性词分类",
      "写3版标题、1套五点、1份 Search Terms"
    ],
    assessment: "标题和五点合规自然，关键词、卖点、图片需求能形成闭环。",
    progress: 58
  },
  {
    title: "第5课 亚马逊促销策略",
    description:
      "理解 Coupon、Prime Exclusive Discount、价格测试、站内促销与新品冷启动节奏。",
    difficulty: "进阶",
    estimatedTime: "4小时",
    keySkills: ["Coupon", "价格测试", "促销节奏"],
    learningGoals: [
      "理解促销不是单纯降价，而是帮助新品获得点击、转化和初期数据",
      "掌握 Coupon、Prime Exclusive Discount、限时促销、价格测试的基本逻辑",
      "能根据新品阶段制定促销节奏"
    ],
    practice: [
      "为1个新品设计7天促销测试表",
      "记录3个竞品是否使用 Coupon、折扣、Prime、价格尾数"
    ],
    assessment: "能为新品制定7天促销测试方案。",
    progress: 46
  },
  {
    title: "第6课 广告投放与优化",
    description:
      "理解自动广告、手动广告、匹配方式、搜索词报告、否词、预算和竞价。",
    difficulty: "重点",
    estimatedTime: "8小时",
    keySkills: ["广告结构", "关键词测试", "ACOS"],
    learningGoals: [
      "理解广告是测试工具，不是万能出单按钮",
      "掌握自动广告、手动广告、广泛/词组/精准匹配、商品投放",
      "能根据搜索词报告做加词、否词、调价"
    ],
    practice: [
      "查看1个广告活动数据，标出曝光、点击、花费、销售额、ACOS",
      "从搜索词中选出3个可加词和3个需否定的词"
    ],
    assessment: "能搭建基础广告观察表并提出优化动作。",
    progress: 35
  },
  {
    title: "第7课 销售数据统计与分析",
    description:
      "学习业务报告、广告报告、自然流量与广告流量的拆分判断。",
    difficulty: "重点",
    estimatedTime: "7小时",
    keySkills: ["Business Reports", "CTR/CVR", "周复盘"],
    learningGoals: [
      "掌握业务报告和广告报告基础读取方法",
      "判断问题属于流量不足、点击不足、转化不足、价格问题、评价问题还是库存问题",
      "输出周复盘和下周计划"
    ],
    practice: [
      "选1个产品整理最近7天数据并与上周对比",
      "写一份200-300字周复盘",
      "给出3条下周优化动作"
    ],
    assessment: "能用一周数据判断流量、点击、转化、价格或评价问题。",
    progress: 30
  },
  {
    title: "第8课 防跟卖及申诉技巧",
    description:
      "了解品牌备案、透明计划、图片/文案证据、跟卖监控、申诉 POA。",
    difficulty: "进阶",
    estimatedTime: "5小时",
    keySkills: ["跟卖监控", "证据归档", "POA"],
    learningGoals: [
      "理解跟卖、侵权投诉、Listing 抑制、账号申诉的基础逻辑",
      "掌握证据归档和 POA 写作框架",
      "知道哪些问题应先开 CASE，哪些问题要准备正式申诉"
    ],
    practice: [
      "整理1份产品证据包目录",
      "模拟一个 Listing 被抑制的申诉 POA",
      "找1个 ASIN 检查是否存在跟卖或异常报价"
    ],
    assessment: "能整理一份基础申诉材料清单。",
    progress: 24
  },
  {
    title: "第9课 邮箱、链接与工具分享",
    description:
      "整理常用后台链接、客服邮箱、CASE 路径、关键词工具、AI 工具和表格模板。",
    difficulty: "入门",
    estimatedTime: "3小时",
    keySkills: ["工具箱", "模板", "AI 辅助"],
    learningGoals: [
      "建立新人常用工具箱",
      "把课程内容沉淀为表格、链接和模板",
      "学会用 AI 辅助，但不让 AI 替代合规判断"
    ],
    practice: [
      "建立个人运营资料库文件夹",
      "整理常用链接为浏览器书签",
      "用 AI 生成一版 Listing，再用合规清单逐条检查并修改"
    ],
    assessment: "能用工具完成关键词、竞品、图片需求和周报输出。",
    progress: 20
  }
];
