export type QuizQuestion = {
  question: string;
  options: {
    label: "A" | "B" | "C" | "D";
    text: string;
  }[];
  answer: "A" | "B" | "C" | "D";
  explanation: string;
  area: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    question: "亚马逊 Listing 标题中最重要的内容通常是什么？",
    options: [
      { label: "A", text: "表情符号" },
      { label: "B", text: "核心关键词" },
      { label: "C", text: "夸张促销词" },
      { label: "D", text: "无关品牌词" }
    ],
    answer: "B",
    explanation: "标题需要优先覆盖买家搜索相关的核心关键词，同时保持自然可读。",
    area: "Listing"
  },
  {
    question: "如果一个产品 Sessions 较高，但转化率很低，优先应该检查什么？",
    options: [
      { label: "A", text: "产品价格、主图、评价和页面说服力" },
      { label: "B", text: "只增加广告预算" },
      { label: "C", text: "删除 Listing" },
      { label: "D", text: "关闭所有促销" }
    ],
    answer: "A",
    explanation: "有流量但转化低，说明买家进入页面后没有被说服。",
    area: "数据分析"
  },
  {
    question: "ACOS 的含义是什么？",
    options: [
      { label: "A", text: "广告销售成本占比" },
      { label: "B", text: "产品自然排名" },
      { label: "C", text: "库存周转天数" },
      { label: "D", text: "页面浏览量" }
    ],
    answer: "A",
    explanation: "ACOS = 广告花费 / 广告销售额。",
    area: "广告"
  },
  {
    question: "以下哪种行为属于高风险评论违规？",
    options: [
      { label: "A", text: "使用官方 Request a Review" },
      { label: "B", text: "改善说明书" },
      { label: "C", text: "给买家返现换五星好评" },
      { label: "D", text: "优化包装" }
    ],
    answer: "C",
    explanation: "返现换好评属于操纵评论风险。",
    area: "合规"
  },
  {
    question: "主图通常不应包含什么？",
    options: [
      { label: "A", text: "真实产品" },
      { label: "B", text: "真实配件" },
      { label: "C", text: "白色背景" },
      { label: "D", text: "促销文字和水印" }
    ],
    answer: "D",
    explanation: "主图不得添加文字、水印、促销图形等误导元素。",
    area: "图片"
  },
  {
    question: "广告有大量曝光但 CTR 很低，优先检查什么？",
    options: [
      { label: "A", text: "退款率" },
      { label: "B", text: "主图、价格、标题和投放相关性" },
      { label: "C", text: "仓库地址" },
      { label: "D", text: "发票" }
    ],
    answer: "B",
    explanation: "CTR 低代表买家看到但不愿点击。",
    area: "广告"
  },
  {
    question: "ODR 通常应控制在什么水平以下？",
    options: [
      { label: "A", text: "1%" },
      { label: "B", text: "5%" },
      { label: "C", text: "10%" },
      { label: "D", text: "20%" }
    ],
    answer: "A",
    explanation: "ODR 是重要账号健康指标，通常应低于 1%。",
    area: "绩效"
  },
  {
    question: "标题中加入竞品品牌词的主要风险是什么？",
    options: [
      { label: "A", text: "字数变短" },
      { label: "B", text: "图片变模糊" },
      { label: "C", text: "商标侵权或 Listing 风险" },
      { label: "D", text: "广告一定变便宜" }
    ],
    answer: "C",
    explanation: "无授权使用他人品牌词可能带来侵权风险。",
    area: "合规"
  },
  {
    question: "自动广告跑出稳定出单词后，下一步合理动作是什么？",
    options: [
      { label: "A", text: "立刻删除 Listing" },
      { label: "B", text: "加入手动广告进一步控制" },
      { label: "C", text: "不看数据" },
      { label: "D", text: "提高所有无关词竞价" }
    ],
    answer: "B",
    explanation: "出单词应沉淀到可控的手动广告结构中。",
    area: "广告"
  },
  {
    question: "周复盘最重要的目的是什么？",
    options: [
      { label: "A", text: "写得越长越好" },
      { label: "B", text: "只汇报销售额" },
      { label: "C", text: "证明自己很忙" },
      { label: "D", text: "找出问题并制定下一步动作" }
    ],
    answer: "D",
    explanation: "复盘必须服务于后续优化。",
    area: "周复盘"
  }
];
