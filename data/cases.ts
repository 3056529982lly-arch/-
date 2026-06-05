export type CaseItem = {
  title: string;
  category: string;
  problem: string;
  checklist: string[];
  action: string;
};

export const caseItems: CaseItem[] = [
  {
    title: "今天0订单怎么办？",
    category: "数据复盘",
    problem: "前几天日均销售额正常，今天突然无订单。",
    checklist: [
      "查看 Sessions 是否下降",
      "查看广告是否正常消耗",
      "查看 Buy Box / Featured Offer 是否正常",
      "查看价格、Coupon、库存、配送时效",
      "查看竞品是否大幅降价或上促销"
    ],
    action:
      "先判断问题属于流量、点击、转化、库存还是广告，再决定改图、调价、促销或广告动作。"
  },
  {
    title: "主图更换后流量下降怎么办？",
    category: "图片与转化",
    problem: "更换主图后，广告或自然流量出现明显下降。",
    checklist: [
      "对比更换前后 CTR",
      "检查主图是否改变产品识别度",
      "检查是否降低灯光、清晰度、产品占比",
      "检查是否影响买家对尺寸、颜色、配件的理解"
    ],
    action:
      "不要频繁大改主图，保留旧图备份，观察3-7天数据后再判断。"
  },
  {
    title: "买家延迟收货要求退款怎么办？",
    category: "售后处理",
    problem: "买家因物流延迟联系卖家，要求退款或部分退款。",
    checklist: [
      "查看物流轨迹和承诺送达时间",
      "判断是否已经超过预计送达范围",
      "判断适合部分退款、全额退款还是继续等待",
      "后台操作后保留沟通记录"
    ],
    action:
      "先安抚，再确认责任和金额，避免承诺平台外补偿。"
  },
  {
    title: "广告花费高但没有订单怎么办？",
    category: "广告优化",
    problem: "广告持续花费，但没有稳定订单或 ACOS 明显偏高。",
    checklist: [
      "查看曝光、点击、CTR、CPC、CVR、ACOS",
      "判断投放词是否不相关",
      "检查 Listing 价格、评价、主图、五点和 A+",
      "找出高花费无转化词"
    ],
    action:
      "达到测试阈值后否词、降价、调竞价或优化 Listing，不要无限烧预算。"
  }
];
