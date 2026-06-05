export type RoadmapStatus = "已完成" | "进行中" | "未开始";

export type RoadmapStage = {
  week: string;
  title: string;
  relatedCourses: string[];
  coreOutputs: string[];
  assessment: string;
  status: RoadmapStatus;
};

export const roadmap: RoadmapStage[] = [
  {
    week: "第1周",
    title: "平台基础与合规意识",
    relatedCourses: ["第1课 亚马逊平台简介", "第2课 销售政策及卖家行为准则"],
    coreOutputs: ["后台入口地图", "10个术语解释", "账号安全红线清单"],
    assessment: "新人能找得到入口，知道哪些事不能碰。",
    status: "已完成"
  },
  {
    week: "第2周",
    title: "产品与 Listing 基础",
    relatedCourses: ["第4课 产品上架技巧及 Listing 优化", "第9课 邮箱、链接与工具分享"],
    coreOutputs: ["3个竞品分析表", "20个关键词", "3版标题", "1套五点描述"],
    assessment: "能写出合规、自然、有卖点的基础文案。",
    status: "进行中"
  },
  {
    week: "第3周",
    title: "图片、A+、促销与广告基础",
    relatedCourses: ["第5课 亚马逊促销策略", "第6课 广告投放与优化"],
    coreOutputs: ["7张副图规划", "A+草图", "广告观察表", "促销测试方案"],
    assessment: "能把卖点转化成图片和广告测试思路。",
    status: "未开始"
  },
  {
    week: "第4周",
    title: "售后、绩效、数据与复盘",
    relatedCourses: ["第3课 卖家绩效与客服处理", "第7课 销售数据统计与分析", "第8课 防跟卖及申诉技巧"],
    coreOutputs: ["售后案例表", "一周数据复盘", "下周优化计划", "申诉材料清单"],
    assessment: "能用数据和政策语言说明问题。",
    status: "未开始"
  }
];
