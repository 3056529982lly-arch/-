export type SopItem = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  owner: string;
  steps: string[];
  updated: string;
};

export const sopItems: SopItem[] = [
  {
    title: "Listing SOP使用顺序",
    description: "给新人一条清晰的 Listing 工作路线，避免先写文案、后补资料导致返工。",
    category: "Listing",
    tags: ["Listing", "流程", "交付清单"],
    owner: "运营",
    updated: "2026年6月",
    steps: [
      "新上架先做资料准备：确认品牌、型号、ASIN/SKU规划、UPC/EAN/GTIN、类目、变体、尺寸、材质、重量、包装、套装内容、适用人群、使用场景、年龄建议、说明书、证书和实拍图。",
      "再做竞品分析：选择3-5个同款、相近功能、价格带接近且 Review/评分有代表性的竞品，不只看头部竞品，也要看中腰部和弱竞品。",
      "再收集关键词：从 Amazon 搜索框、竞品标题/五点/A+、广告搜索词报告、Brand Analytics、评论问答、类目词、说明书和人工筛选后的 AI 扩展中整理。",
      "再写标题和五点：先确定主关键词、次关键词、核心卖点顺序，再输出标题3版和五点1套。",
      "再补 Search Terms：把标题和五点不适合放、但高度相关的同义词、长尾词、场景词、属性词、拼写变体补到后台。",
      "再做图片和 A+需求：主图、副图、尺寸图、细节图、场景图、包装图和 A+草图要和五点卖点顺序对应。",
      "上架前做合规检查：标题、五点、Description、Search Terms、主图、副图、A+、类目属性、变体、年龄建议、品牌词和认证声明都要过一遍。",
      "上架后按数据优化旧 Listing：用 Sessions、CTR、CVR、Unit Session Percentage、广告点击/转化、价格、Review、库存和 Featured Offer 状态判断问题后再改。",
      "Listing交付清单：产品基础资料表、竞品分析表、关键词分类表、标题3版、五点1套、Search Terms 1套、图片需求表、A+草图、合规检查表、修改记录表。"
    ]
  },
  {
    title: "新品上架资料准备 SOP",
    description: "在写 Listing 前先把产品基础信息、关键词、图片需求、A+草图和合规资料整理完整。",
    category: "Listing",
    tags: ["Listing", "新品上架", "资料准备", "ASIN", "SKU"],
    owner: "运营",
    updated: "2026年6月",
    steps: [
      "适用场景：新品准备上架前，运营需要整理产品基础信息、关键词、Listing 文案、图片需求、A+草图和合规资料，交给主管或上架人员审核。",
      "新人先准备：品牌名、产品型号、ASIN/SKU规划、UPC/EAN/GTIN 信息、类目、变体信息、颜色、尺寸、材质、重量、包装尺寸、套装内容、适用人群、使用场景、年龄建议、注意事项、说明书、证书或授权资料、实拍图和包装图。",
      "基础信息清单：品牌、型号、SKU、类目、变体、颜色、尺寸、材质、重量、包装尺寸、包装数量、站点、上架负责人。",
      "产品信息清单：功能、适用人群、使用场景、套装内容、注意事项、说明书、年龄建议、材质说明、兼容性说明、是否含电池/遥控器/小零件/工具。",
      "视觉素材清单：主图、配件图、尺寸图、细节图、场景图、包装图、A+素材、说明书局部图、需要设计补充的图文点。",
      "合规资料清单：品牌授权、供应商发票、检测报告、商标证明、特殊类目审核材料、产品安全说明、年龄或小零件提醒依据。",
      "检查步骤 1：先确认产品是否适合当前站点和类目，类目属性不要乱填。",
      "检查步骤 2：核对产品基础信息是否完整，尤其是尺寸、材质、颜色、件数、包装数量和年龄建议。",
      "检查步骤 3：确认套装内容与图片、五点、包装、说明书一致。",
      "检查步骤 4：检查是否涉及品牌词、侵权外观、受保护设计、敏感词、认证声明或特殊类目规则。",
      "检查步骤 5：收集3-5个竞品作为参考；先完成关键词表，再写标题和五点；图片需求要和五点卖点顺序对应。",
      "常见缺失资料：没有准确尺寸、材质描述模糊、套装内容不清楚、图片和实物不一致、没有说明书或说明书版本不对应、没有合规证明、变体关系不清楚、年龄建议缺失。",
      "风险提醒：资料不完整时不要强行上架。尺寸、材质、数量、年龄、配件、颜色等基础信息一旦写错，容易导致退货、差评、Listing 抑制或买家投诉。",
      "交付物模板：产品基础资料表、竞品分析表、关键词分类表、标题3版、五点1套、Search Terms 1套、图片需求表、A+文案草图、Listing 合规检查表。"
    ]
  },
  {
    title: "竞品分析 SOP",
    description: "用于新品上架、旧 Listing 优化、广告词拓展、主图或价格调整前的竞品拆解。",
    category: "竞品",
    tags: ["竞品", "Listing", "数据复盘"],
    owner: "运营",
    updated: "2026年6月",
    steps: [
      "适用场景：新品上架前、旧 Listing 优化前、广告词拓展前、主图或价格调整前。",
      "竞品选择标准：搜索核心关键词后排名靠前；同款或功能相近；价格带接近；Review 数量和评分有代表性；图片风格专业；A+页面完整；不要只选最强竞品，也要选中等竞品和弱竞品。",
      "新人先查：主关键词、类目节点、价格、Coupon/Prime 折扣、评分、Review 数量、BSR、主图风格、标题结构、五点顺序、A+模块、变体数量、配送方式、差评内容。",
      "分析步骤 1：确定核心关键词和类目，用 Amazon 前台搜索主关键词。",
      "分析步骤 2：选择3-5个同款或相近竞品，记录 ASIN/链接，避免只看一个样本就下结论。",
      "分析步骤 3：记录价格、评分、Review 数、BSR、Coupon、Prime、配送方式和变体数量。",
      "分析步骤 4：拆解标题，标记品牌、核心词、属性、规格、场景、人群和关键词靠前程度。",
      "分析步骤 5：拆解五点，记录卖点顺序、关键词、场景、材质、售后、尺寸、功能和注意事项。",
      "分析步骤 6：查看主图和副图，记录角度、背景、配件、尺寸、场景、文字表达、是否解决买家疑问。",
      "分析步骤 7：查看 A+，记录品牌故事、细节、对比表、场景、说明、安装或使用教育内容。",
      "分析步骤 8：查看差评和问答，提取质量、说明书、物流、尺寸、缺件、使用难度等痛点。",
      "竞品分析字段：ASIN/链接、标题、价格/优惠、评分/Review、BSR/类目、主图特点、副图卖点、五点顺序、A+模块、差评痛点、关键词机会、差异化机会。",
      "判断方法 - 价格：我们是否处在合理价格带，是否需要 Coupon 辅助冷启动。",
      "判断方法 - 评价：竞品 Review 是否形成壁垒；如果对方几百上千评，新品要靠差异化、图片、价格和广告长尾词切入。",
      "判断方法 - 图片：竞品主图是否清晰、有强识别度；副图是否把卖点讲清楚。",
      "判断方法 - 卖点：竞品最先强调功能、材质、件数、尺寸、使用场景还是礼品属性。",
      "判断方法 - 差评：差评是规避风险和提炼卖点的重要来源，要转化为图片、五点、说明书或售后改进。",
      "输出结果：竞品分析表、关键词机会表、卖点排序建议、图片规划建议、价格和促销建议、Listing 差异化定位。",
      "常见错误：只看标题不看差评；只选头部竞品；只记录数据不输出判断；照抄竞品标题和五点；把竞品品牌词写进自己的 Listing；没有区分核心词、长尾词和场景词。",
      "交付物模板：竞品数量3-5个；每个竞品至少记录 ASIN、价格、评分、Review、主图特点、标题结构、五点顺序、差评痛点和差异化机会。"
    ]
  },
  {
    title: "标题写作 SOP",
    description: "帮助新人写出关键词靠前、语义自然、定位清晰且无明显合规风险的标题。",
    category: "Listing",
    tags: ["Listing"],
    owner: "内容",
    updated: "2026年6月",
    steps: [
      "适用场景：新品上架、旧 Listing 标题优化、CTR 低、关键词收录弱、产品定位不清晰。",
      "推荐标题结构：品牌名 + 核心关键词 + 核心卖点 + 次核心关键词 + 属性/规格/使用场景/适用人群。",
      "写作步骤 1：确定1个主关键词和2-4个次关键词，先看关键词分类表和竞品标题。",
      "写作步骤 2：主关键词尽量放在标题前半段，但标题要像美国买家能读懂的商品名。",
      "写作步骤 3：加入产品最重要属性，例如件数、比例、材质、功能、适用年龄、使用场景或目标人群。",
      "写作步骤 4：控制字符数，多数类目建议不超过200 characters；如果 Seller Central 后台类目有更短要求，以后台为准。",
      "写作步骤 5：检查可读性，不要为了关键词牺牲语义，也不要把所有卖点硬塞进标题。",
      "美国站表达建议：用自然表达，不要中式直译；重要词靠前；成人拼装模型可强调 adults、collectors、hobby builders；礼品属性可放后半段，例如 gift for hobbyists。",
      "合规检查：标题不要包含 Free Shipping、Best Seller、No.1、100% Quality Guaranteed、竞品品牌词、夸大承诺、无关大词、过度重复关键词、无法证明的认证词和过多特殊符号。",
      "示例结构：Brand + 3D Wooden Puzzle for Adults + 453 PCS Mechanical Typewriter Model Kit + Click-Clack Sound + Vintage Desk Decor Gift for Writers。",
      "常见错误：主关键词太靠后；标题像关键词堆砌；加入竞品品牌词；加入促销词；标题过长；与图片或五点卖点不一致；没有体现产品核心差异。",
      "输出要求：至少3版标题；每版说明关键词布局；每版说明适合的定位；最终推荐1版；标记可能有风险的词。"
    ]
  },
  {
    title: "五点描述写作 SOP",
    description: "把产品卖点按买家决策顺序写成清晰、可信、可扫描、能降低售后疑问的五点。",
    category: "Listing",
    tags: ["Listing"],
    owner: "内容",
    updated: "2026年6月",
    steps: [
      "适用场景：新品上架、Listing 转化低、买家疑问多、退货原因集中、产品卖点表达不清。",
      "五点排序逻辑 1：第1点写核心功能或产品定位，让买家立刻知道这是什么。",
      "五点排序逻辑 2：第2点写使用体验、结构、组装体验、操作体验或便携性。",
      "五点排序逻辑 3：第3点写适用场景、人群、礼品、收藏、展示、教育或兴趣爱好。",
      "五点排序逻辑 4：第4点写材质、尺寸、安全、包装、配件、兼容性或注意事项。",
      "五点排序逻辑 5：第5点写说明书、售后、包装内容、注意事项或附加价值。",
      "写作步骤 1：从产品资料中提炼5个核心卖点，按买家决策路径排序，不要照搬供应商资料顺序。",
      "写作步骤 2：每点用清晰短标题开头，后半句解释买家利益，而不是只罗列参数。",
      "写作步骤 3：自然融合关键词，不强行堆词；每一点尽量只解决一个主要问题。",
      "写作步骤 4：检查事实准确性，确保和图片、尺寸、包装、说明书一致。",
      "拼装模型写法：强调件数、组装体验、展示价值、说明书、适用年龄、收藏属性。",
      "积木类写法：强调结构稳定、细节还原、分包/步骤、展示尺寸、兼容性要谨慎表达。",
      "RC 类写法：强调遥控功能、适用水域/地面、续航、控制距离、操作注意事项、年龄建议。",
      "DIY 木质/金属模型写法：强调材质、机械结构、组装时长、成品展示、礼品属性和小零件注意。",
      "合规检查：不要写 best quality、perfect for everyone、guaranteed satisfaction、official LEGO compatible if not authorized、100% safe、medical/therapeutic claims、exaggerated performance claims、misleading age or certification claims。",
      "常见错误：五点顺序混乱；第一条没有核心关键词和产品定位；每点都在说同一件事；只写参数不写买家利益；翻译腔太重；和图片表达不一致；承诺售后但公司做不到；写了无法证明的安全或认证声明。",
      "输出要求：5条完整五点；每条一个清晰短标题；每条尽量控制在300 characters以内，如公司有不同要求按公司标准；标记融合的关键词；标记需要图片配合的卖点。"
    ]
  },
  {
    title: "关键词收集与分类 SOP",
    description: "把关键词从零散词库整理成可用于标题、五点、Search Terms 和广告的分类表。",
    category: "Listing",
    tags: ["Listing", "关键词", "Search Terms", "广告"],
    owner: "内容",
    updated: "2026年6月",
    steps: [
      "适用场景：新品上架、标题优化、五点优化、Search Terms 填写、广告建组、旧 Listing 优化。",
      "关键词来源：Amazon 搜索框联想词、竞品标题、竞品五点、竞品 A+、广告搜索词报告、Brand Analytics（如有权限）、买家评论和问答、类目词、产品说明书和功能词、AI 辅助扩展后人工筛选。",
      "分类方法 - 核心词：直接描述产品的主词，例如 building block set、model kit、3D wooden puzzle。",
      "分类方法 - 长尾词：带属性、场景、人群或功能的词，例如 model kit for adults、wooden puzzle for adults、RC boat for pool。",
      "分类方法 - 场景词：描述使用场景，例如 desk decor、gift for adults、STEM project、collector display。",
      "分类方法 - 属性词：描述材质、尺寸、件数、颜色、功能，例如 453PCS、walnut wood、LED light、remote control。",
      "分类方法 - 人群词：描述目标买家，例如 adults、teens 16+、hobby builders、collectors。",
      "分类方法 - 避开词：竞品品牌词、侵权词、无关大词、夸大词、敏感词、无法证明的认证词。",
      "收集步骤 1：先确定产品核心词，再搜索核心词并记录 Amazon 联想词。",
      "收集步骤 2：拆解3-5个竞品标题，提取高频词、主词、属性词和场景词。",
      "收集步骤 3：拆解竞品五点和 A+，提取功能词、场景词、人群词、材质词和售后/说明相关词。",
      "收集步骤 4：查看评论和问答，提取买家真实表达，例如 too small、missing parts、easy to assemble、good gift 等。",
      "收集步骤 5：如果有广告数据，加入真实出单词、高相关点击词和高花费无转化词，并标记来源。",
      "收集步骤 6：删除侵权词、无关词和重复词，按核心词、长尾词、场景词、属性词、人群词分类。",
      "收集步骤 7：标记每个词的用途：标题、五点、Search Terms、广告、图片文案或暂不使用。",
      "判断关键词价值：是否精准描述产品；买家搜索意图是否明确；是否与产品价格和功能匹配；是否能自然写进标题或五点；是否存在侵权风险；是否太泛导致垃圾流量。",
      "常见错误：只堆大词不考虑转化；把竞品品牌词放进标题或 Search Terms；把不相关热词塞进 Listing；同一词反复重复；AI 生成后不筛选；关键词表没有分类，后续无法使用。",
      "交付物模板：关键词、类型、来源、适用位置、相关性、风险备注、是否用于标题、是否用于五点、是否用于 Search Terms、是否用于广告。"
    ]
  },
  {
    title: "Search Terms填写 SOP",
    description: "用后台 Search Terms 补充标题和五点未覆盖的相关词，避免重复、侵权和无关流量。",
    category: "Listing",
    tags: ["Listing", "Search Terms", "关键词", "Seller Central"],
    owner: "内容",
    updated: "2026年6月",
    steps: [
      "适用场景：新品上架、关键词补充、标题不适合放太多词、需要补充同义词和拼写变体。",
      "填写原则：Search Terms 用于补充后台搜索词，不是标题重复区；优先放同义词、长尾词、场景词、属性词、拼写变体；不要重复堆标题里已经充分覆盖的词。",
      "适合放：同义表达、单复数变体、场景词、属性词、目标人群词、拼写变体、英美表达差异词。",
      "不要放：竞品品牌词、ASIN、Free shipping、Best seller、Discount、No.1、无关高流量词、重复词、敏感词、侵权词。",
      "操作步骤 1：先整理关键词分类表，确认标题和五点已经覆盖的核心词。",
      "操作步骤 2：删除标题和五点中已经充分覆盖的重复词，保留还没覆盖但相关性高的词。",
      "操作步骤 3：检查是否存在侵权、竞品品牌、无关热词、促销词或无法证明的认证词。",
      "操作步骤 4：按 Seller Central 后台字符/字节限制填写，不确定时以当前站点和类目后台提示为准。",
      "操作步骤 5：保存前再次检查类目和站点规则，修改后记录日期、修改内容和预期改善指标。",
      "操作步骤 6：后续结合收录、Sessions、广告曝光、CTR、CVR 和 Unit Session Percentage 观察，不要改完就不复盘。",
      "常见错误：把 Search Terms 当成关键词垃圾桶；复制竞品品牌词；加入无关热词；重复标题词太多；没有记录修改日期；修改后不观察数据。",
      "检查清单：无竞品品牌词；无 ASIN；无促销词；无无关大词；补充了标题未覆盖的相关词；符合后台限制；保存了修改记录。"
    ]
  },
  {
    title: "Listing合规检查 SOP",
    description: "在新品上架或旧 Listing 修改前检查标题、五点、Search Terms、图片、A+ 和类目属性风险。",
    category: "Listing",
    tags: ["Listing", "合规", "Search Terms", "主图", "A+"],
    owner: "运营",
    updated: "2026年6月",
    steps: [
      "适用场景：新品上架前、旧 Listing 修改前、主图/A+更新前、收到警告或 Listing 抑制后。",
      "检查范围：标题、五点、Description、Search Terms、主图、副图、A+、类目和属性、变体、包装数量、年龄建议、品牌词、认证和安全声明。",
      "检查步骤 1：检查标题是否含促销词、侵权词、特殊符号滥用和重复堆词。",
      "检查步骤 2：检查五点是否有夸大承诺、无法证明声明、医疗/安全绝对化表达。",
      "检查步骤 3：检查 Search Terms 是否含竞品品牌词、ASIN、促销词和无关词。",
      "检查步骤 4：检查主图是否白底、无文字、无水印、无未包含配件、产品主体清晰。",
      "检查步骤 5：检查副图和 A+ 是否改变产品事实，是否展示未包含配件或夸大功能。",
      "检查步骤 6：检查尺寸、材质、颜色、件数、包装数量是否和实物、图片、说明书一致。",
      "检查步骤 7：检查年龄建议、小零件提醒、电池/遥控器/工具说明是否合理。",
      "检查步骤 8：检查是否涉及商标、版权图片、专利外观、授权或认证问题；修改前后保存记录，方便复盘。",
      "高风险词：Free Shipping、Best、No.1、100% Quality Guaranteed、Official、LEGO（除非授权）、FDA/CE/UL 等无证明认证词、cure、medical、therapy、absolutely safe、risk-free、lifetime guarantee（除非公司明确支持）。",
      "常见违规：标题堆词；使用竞品品牌；主图加文字；图片显示未包含配件；五点夸大性能；A+写无证据认证；变体滥用；类目属性乱填；年龄建议误导；Search Terms 放侵权词。",
      "处理方式：发现风险后先标记问题位置；判断删除、替换或补充证据；高风险词立即删除；涉及侵权或认证内容先问主管；修改后记录日期和原因。",
      "检查表模板：检查项、页面位置、问题描述、风险等级、处理方式、负责人、完成状态、备注。"
    ]
  },
  {
    title: "旧Listing优化 SOP",
    description: "用 Sessions、CTR、CVR、Unit Session Percentage、广告和库存状态判断旧 Listing 应该改哪里。",
    category: "Listing",
    tags: ["Listing", "旧Listing", "Sessions", "CTR", "CVR", "数据复盘"],
    owner: "运营",
    updated: "2026年6月",
    steps: [
      "适用场景：产品无单、订单下降、Sessions 高但转化低、广告有点击无转化、CTR 低、主图更换后流量波动、关键词排名弱。",
      "新人先判断：是流量问题还是转化问题；是点击问题还是页面说服力问题；是价格问题还是评价问题；是广告问题还是自然流量问题；是否库存、配送、Buy Box/Featured Offer 异常；是否竞品降价或上促销；最近是否改过标题、主图、价格、广告或 Coupon。",
      "诊断路径 - Sessions 低：检查关键词收录、广告曝光、类目节点、库存、广告预算、标题核心词和 Search Terms。",
      "诊断路径 - CTR 低：检查主图、标题前半段、价格、Coupon、评分、投放词相关性和搜索结果页竞争力。",
      "诊断路径 - Sessions 高但转化低：检查价格、Review、Rating、主图、副图、五点、A+、配送、变体和竞品优势。",
      "诊断路径 - 广告有点击无转化：检查投放词是否精准，Listing 是否承接搜索意图，价格和评价是否弱于竞品。",
      "诊断路径 - 订单突然下降：检查库存、价格、Coupon、广告状态、Buy Box/Featured Offer、竞品促销和类目季节性。",
      "优化动作 - 标题：核心词不清晰、收录弱或定位不明时，优化标题前半段。",
      "优化动作 - 主图：CTR 低时优先检查主图识别度、清晰度、产品占比和是否突出套装内容。",
      "优化动作 - 五点：转化低时补充买家关心的功能、尺寸、材质、使用场景、注意事项和售后边界。",
      "优化动作 - A+：产品复杂、客单价高、需要教育买家时优化 A+，补充对比表、安装说明、场景和细节。",
      "优化动作 - 价格/Coupon：价格弱于竞品时测试 Coupon 或小幅调价，并记录测试周期。",
      "优化动作 - 关键词：收录弱或广告词不精准时优化 Search Terms 和广告结构。",
      "优化动作 - 图片：退货原因集中时补充尺寸图、说明图、配件图或使用注意图。",
      "修改节奏：不要一天内同时大改标题、主图、价格、广告和 Coupon；每次重点改1-2个变量；修改前截图和记录数据；修改后观察3-7天；大促前不要随意大改核心 Listing；如果修改后明显变差，要能回退旧版本。",
      "记录模板：日期、ASIN/SKU、修改内容、修改前数据、修改原因、预期改善指标、观察周期、修改后数据、结论、是否保留/回退。",
      "风险提醒：Listing 优化不是频繁乱改。没有记录的修改，后面无法判断效果。新手必须先判断问题类型，再决定改标题、主图、五点、价格还是广告。"
    ]
  },
  {
    title: "Listing交付清单",
    description: "Listing 上架或优化提交前的最终核对卡，用来确认资料、文案、图片、A+和记录表是否齐全。",
    category: "Listing",
    tags: ["Listing", "交付清单", "资料准备", "合规"],
    owner: "运营",
    updated: "2026年6月",
    steps: [
      "产品基础资料表：品牌、型号、ASIN/SKU、UPC/EAN/GTIN、类目、变体、颜色、尺寸、材质、重量、包装尺寸、套装内容、年龄建议、注意事项。",
      "竞品分析表：3-5个竞品，包含 ASIN、价格、评分、Review、BSR、主图特点、标题结构、五点顺序、A+模块、差评痛点和差异化机会。",
      "关键词分类表：关键词、类型、来源、适用位置、相关性、风险备注、是否用于标题、五点、Search Terms 和广告。",
      "标题3版：每版说明主关键词位置、次关键词布局、适合定位、字符长度和风险词检查结果。",
      "五点1套：5条完整五点，每条有短标题、买家利益、融合关键词和需要图片配合的卖点标记。",
      "Search Terms 1套：确认无竞品品牌词、ASIN、促销词、侵权词和无关大词，并符合 Seller Central 后台限制。",
      "图片需求表：主图、配件图、尺寸图、细节图、场景图、包装图、说明书图，且与五点卖点顺序对应。",
      "A+草图：模块顺序、图片主题、短文案、对比表、场景说明、安装/使用教育内容。",
      "合规检查表：标题、五点、Description、Search Terms、图片、A+、变体、类目属性、年龄建议、认证声明全部检查。",
      "修改记录表：日期、ASIN/SKU、修改内容、修改原因、修改前数据、预期指标、观察周期、修改后数据、结论和是否回退。"
    ]
  },
  {
    title: "图片与A+ SOP使用顺序",
    description: "给新人一条清晰的 Image & A+ 工作路线，避免先生成漂亮图、后发现产品细节和合规不通过。",
    category: "A+",
    tags: ["图片", "A+", "AI作图", "Prompt", "质检"],
    owner: "运营/设计",
    updated: "2026年6月",
    steps: [
      "先整理产品信息：产品名称、站点、产品类型、核心关键词、目标买家、使用场景、核心卖点、材质规格、尺寸数量、包装包含、年龄建议、禁止元素和必须保持不变的产品细节。",
      "再判断每张图的转化任务：品牌印象、核心卖点、细节证明、场景想象、组装体验、规格包装、Brand Story 或系列展示。",
      "再规划整套 A+ 结构：先吸引，再解释，再证明，再降低疑虑，最后形成品牌和系列统一感。",
      "再写每张图的英文 Prompt：必须包含产品约束、图片任务与构图、短英文文案、禁止项和尺寸比例。",
      "AI 出图后先做产品一致性检查：颜色、比例、结构、纹理、配件、件数、关键细节不能变。",
      "再做文字和合规检查：英文拼写、乱码、价格促销、Logo、政治符号、儿童场景、未授权品牌、夸大声明都要排查。",
      "通过后交给设计精修或上传：设计需要保留产品真实细节，统一字体、边距、Callouts 和移动端可读性。",
      "上线后结合 Sessions、CTR、CVR、Unit Session Percentage、销售额和退货原因复盘，不要只看图片是否好看。",
      "Image & A+ 交付清单：产品信息整理表、A+模块规划表、图片任务拆分表、每张图英文 Prompt、禁止项清单、AI出图质检表、修改记录表、最终图片文件、上传后数据复盘记录。"
    ]
  },
  {
    title: "AI作图制作A+标准工作流 SOP",
    description: "使用 ChatGPT / GPT Image / Midjourney / Gemini 等 AI 工具制作 Amazon A+ 图片方案和 Prompt 的标准流程。",
    category: "A+",
    tags: ["图片", "A+", "AI作图", "Prompt", "Brand Story"],
    owner: "运营/设计",
    updated: "2026年6月",
    steps: [
      "适用场景：使用 ChatGPT、GPT Image、Midjourney、Gemini 或其他 AI 作图工具，为 Amazon A+ Content、Brand Story、详情页副图、产品卖点图、场景图和细节图生成图片方案和 Prompt。",
      "核心原则：AI 作图不是随便生成漂亮图片，而是帮助买家更快理解产品价值、降低疑虑、提升 CVR。AI 是工具，最终负责人仍然是运营和设计。",
      "标准流程 1：收集产品资料，包括实拍图、包装图、说明书、尺寸、材质、件数、颜色、适用年龄、使用场景和禁止项。",
      "标准流程 2：整理产品信息表，不能直接把供应商大段资料丢给 AI，要提炼可用信息。",
      "标准流程 3：分析目标买家和转化痛点，例如不懂尺寸、担心缺件、不会组装、看不出材质、担心不适合送礼。",
      "标准流程 4：规划 A+ 页面结构，先确定每张图的角色，再写 Prompt。",
      "标准流程 5：拆分每张图片的转化任务，做到一张图只表达一个主要信息。",
      "标准流程 6：生成每张图的英文 Prompt，必须写清产品细节保持不变、图片任务、构图、英文文案、禁止项和尺寸。",
      "标准流程 7：使用 AI 工具生成初版图，保存 Prompt 版本和输出图文件名。",
      "标准流程 8：按质检 SOP 检查产品、文字、合规和视觉；不通过就重新生成或局部修改。",
      "标准流程 9：交给设计师精修或自行排版，统一字体、留白、Callouts、阴影和移动端可读性。",
      "标准流程 10：上传 Seller Central 后台，记录上线日期，观察 Sessions、CTR、CVR、Unit Session Percentage、销售额和转化变化。",
      "新人简化流程：产品信息 -> ChatGPT 生成 A+ 结构 -> ChatGPT 生成每张图 Prompt -> AI 生图 -> 人工检查产品细节 -> 设计精修/上传 -> 数据复盘。",
      "新人交付物：产品信息整理表、A+模块规划表、每张图的图片任务说明、每张图的英文 Prompt、禁止项清单、AI出图质检表、修改记录、最终上传图链接或文件名。",
      "常见错误：一上来就让 AI 生图；没有先规划 A+ 结构；Prompt 没有强调产品细节保持不变；没写禁止项导致 AI 乱加人、手、配件、Logo、旗帜、战斗场景；AI 生成文字拼错仍然使用；AI 把积木模型变成真实模型；只追求好看，不考虑转化任务；没有保存 Prompt 和修改记录。",
      "风险提醒：凡是改变产品事实、误导买家、添加实际不包含配件、出现侵权 Logo、政治符号、虚假认证、价格促销信息的图，都不能直接上传。"
    ]
  },
  {
    title: "A+图片产品信息整理 SOP",
    description: "在生成 A+ 图片方案和 Prompt 前，把供应商资料、产品卖点、实拍图、规格和禁用元素整理成统一输入格式。",
    category: "A+",
    tags: ["图片", "A+", "AI作图", "Prompt", "资料准备"],
    owner: "运营",
    updated: "2026年6月",
    steps: [
      "适用场景：生成 A+ 图片方案和 Prompt 前，用于把供应商资料、产品卖点、实拍图、规格、禁用元素整理成统一输入格式。",
      "信息整理模板：产品名称；站点 Amazon US / UK / DE / FR / JP；产品类型；核心关键词；适用人群；使用场景；核心卖点1/2/3；材质/规格；尺寸/数量；包装包含；年龄建议；不能出现的元素；必须保持不变的产品细节；需要体现的品牌风格；目标图片类型；图片尺寸。",
      "操作步骤 1：先整理产品基础信息，不要直接粘贴供应商大段资料。",
      "操作步骤 2：提炼3-5个真正影响转化的卖点，例如材质、结构、组装体验、展示价值、遥控功能、说明书清晰度。",
      "操作步骤 3：明确适用人群和使用场景，例如 adult hobby builders、collectors、desk decor、STEM project、RC outdoor play。",
      "操作步骤 4：写清楚必须保持不变的产品细节，例如积木颗粒结构、车灯位置、炮塔形状、船体比例、木纹纹理、遥控器样式、包装内容。",
      "操作步骤 5：写清楚禁止出现的元素，例如儿童、手、额外配件、未授权 Logo、价格、折扣、旗帜、爆炸、战斗场景、政治符号。",
      "操作步骤 6：确认目标图片类型和尺寸，区分主图、副图、A+横幅、A+模块、Brand Story。",
      "操作步骤 7：信息确认后再让 AI 生成 A+ 结构和 Prompt。",
      "新人检查点：产品名称是否准确；尺寸、件数、材质、年龄建议是否完整；图片中不能出现的元素是否明确；产品细节是否有严格约束；是否说明目标图片尺寸；是否区分主图、副图、A+和Brand Story。",
      "常见缺失信息：没有产品尺寸；没有包装包含；没有年龄建议；没有说明不能出现儿童；军事类没有禁止旗帜、爆炸、战斗和政治符号；RC 类没有说明遥控器和配件是否真实包含；积木类没有说明必须保持颗粒结构不变。",
      "交付物模板：产品信息整理表、产品参考图文件夹、禁止项清单、必须保持不变的细节清单、目标图片尺寸和模块用途。"
    ]
  },
  {
    title: "A+模块规划 SOP",
    description: "在生成单张 AI 图片前，先规划整套 A+ 页面结构，确保每张图都有明确转化任务。",
    category: "A+",
    tags: ["图片", "A+", "A+模块", "Brand Story", "Callouts"],
    owner: "运营/设计",
    updated: "2026年6月",
    steps: [
      "适用场景：在生成单张 AI 图片之前，先规划整套 A+ 页面结构，确保每张图都有明确的转化任务。",
      "A+图片任务类型 - 品牌横幅：建立第一印象，展示品牌调性、产品系列和适用人群。",
      "A+图片任务类型 - 核心卖点图：强化购买理由，展示功能、材质、结构、体验。",
      "A+图片任务类型 - 细节放大图：证明产品质量，展示局部结构、纹理、工艺、配件。",
      "A+图片任务类型 - 场景图：让买家想象使用价值，例如桌面摆件、收藏展示、礼物场景。",
      "A+图片任务类型 - 对比图：降低选择成本，例如普通款 vs 本产品，或不同版本对比。",
      "A+图片任务类型 - 说明图：降低使用疑虑，例如组装步骤、尺寸说明、配件说明、说明书清晰度。",
      "A+图片任务类型 - Brand Story 图：提高店铺统一感，展示产品矩阵和品牌理念。",
      "推荐A+结构：顶部品牌/产品横幅 -> 核心卖点模块 -> 细节放大模块 -> 场景展示模块 -> 组装体验模块 -> 规格/包装模块 -> 品牌系列模块。",
      "操作步骤 1：先判断产品最核心的购买理由，是结构、材质、功能、收藏价值、礼品属性还是使用体验。",
      "操作步骤 2：再判断买家最大疑虑，例如尺寸不清、不会组装、担心缺件、担心材质、担心年龄不合适。",
      "操作步骤 3：把卖点和疑虑拆成5-7个图片任务，每张图只表达一个主要信息。",
      "操作步骤 4：图片顺序要符合购买决策路径：先吸引，再解释，再证明，再降低疑虑。",
      "操作步骤 5：军事、RC、积木、木质模型等品类需要单独处理合规限制。",
      "操作步骤 6：输出 A+ 模块规划表后，再写每张图的 Prompt。",
      "模块规划模板：图片编号、图片类型、转化任务、核心卖点、构图建议、英文标题、Callouts、禁止项、尺寸。",
      "常见错误：每张图都想讲所有卖点；图片顺序混乱；A+ 只做场景图没有细节证明；只做漂亮图不解决买家疑虑；没有品牌风格统一；没有为移动端阅读考虑文字大小。"
    ]
  },
  {
    title: "AI生图Prompt四层结构 SOP",
    description: "用固定四层结构写 Amazon A+ 英文 Prompt，减少产品变形、错误文字和合规问题。",
    category: "A+",
    tags: ["图片", "A+", "AI作图", "Prompt", "Callouts"],
    owner: "运营/设计",
    updated: "2026年6月",
    steps: [
      "适用场景：为 Amazon A+ 横幅、细节图、场景图、组装体验图和 Brand Story 图生成英文 Prompt。",
      "第一层 - 产品约束：说明必须使用上传产品图作为严格参考，保持产品形状、颜色、比例、结构、纹理、配件和可见细节不变。",
      "第二层 - 图片任务与构图：说明这张图要表达什么，以及产品放在哪里、背景风格是什么、画面是否需要留白。",
      "第三层 - 文字内容：给出简短英文 Headline、Subtext、Callouts。文字必须短，避免 AI 拼错；重要文字建议后期由设计师排版。",
      "第四层 - 禁止项：明确告诉 AI 不要出现人、儿童、手、额外配件、Logo、价格、折扣、政治符号、爆炸、战斗、乱码文字、误导性认证。",
      "通用Prompt骨架：Create a premium Amazon US A+ Content image for [PRODUCT TYPE]. Use the uploaded product photo as the strict reference and keep the product shape, color, proportions, structure, texture, accessories, and all visible details unchanged. Show the product in a clean, premium, product-focused composition suitable for Amazon A+ content. The image should communicate [CORE VALUE]. Place the product [POSITION] and leave enough clean space for text. Add clean English text: Headline: [HEADLINE]. Callouts: [CALLOUT 1], [CALLOUT 2], [CALLOUT 3]. Use professional studio lighting, premium shadows, and a clean background. Keep the layout clear, modern, and easy to understand. No people, no children, no hands, no extra products, no logos, no price tags, no badges, no exaggerated effects, no misleading claims. Aspect ratio [SIZE].",
      "写作步骤 1：先从 A+ 模块规划表复制图片任务、核心卖点、尺寸和禁止项。",
      "写作步骤 2：补充必须保持不变的产品细节，例如轮胎、船体、炮塔、机翼、木纹、积木颗粒、遥控器。",
      "写作步骤 3：写短英文标题和 Callouts，避免长句；如果文字复杂，要求 AI 留白，由设计师后期加字。",
      "检查清单：是否说明上传图是严格参考；是否写了产品细节保持不变；是否说明图片任务；是否给出构图位置；是否给出短英文文字；是否写清禁止项；是否写清尺寸；是否避免夸大和侵权词。",
      "常见错误：Prompt 只写 make it premium；没写保持产品细节不变；没有禁止 AI 添加配件；没有禁止儿童、人手、Logo；英文文字太长；没写站点和用途；军事类没有禁止政治符号和战斗场景。"
    ]
  },
  {
    title: "A+顶部横幅Prompt模板 SOP",
    description: "用于 Amazon A+ 顶部品牌/产品横幅，建立第一印象并突出核心价值。",
    category: "A+",
    tags: ["图片", "A+", "AI作图", "Prompt", "横幅"],
    owner: "运营/设计",
    updated: "2026年6月",
    steps: [
      "适用场景：A+ Content 顶部横幅、品牌横幅、产品系列第一屏，用来建立专业感和核心定位。",
      "图片目标：让买家在第一眼理解产品类型、目标人群和核心价值，同时保持画面干净、产品突出、可用于 Amazon US A+。",
      "Prompt模板：Create a premium Amazon US A+ Content banner image for [PRODUCT TYPE]. Use the uploaded product photo as the strict reference and keep the product shape, color, proportions, structure, texture, and all visible details unchanged. Show the product in a clean, premium, product-focused composition suitable for Amazon A+ content. The scene should communicate [CORE VALUE], with a refined [STYLE] atmosphere. Place the product prominently and leave enough clean space for text. Add clean English text: Headline: [HEADLINE]. Subtext: [SUBTEXT]. Use professional studio lighting, premium shadows, and a clean background. Keep the layout clear, modern, and easy to understand. No people, no children, no hands, no extra products, no logos, no price tags, no badges, no exaggerated effects, no misleading claims. Aspect ratio [SIZE].",
      "适合标题：Build, Display, Collect；A Rewarding Building Experience；Detailed Model Design；Build Your Model Collection；Designed for Adult Hobby Builders。",
      "禁止项：人、儿童、手、额外配件、Logo、价格、折扣、Best Seller 徽章、夸大效果、误导性认证、政治符号、战斗场景。",
      "质检重点：产品是否变形；横幅是否留出文字区；标题是否拼写正确；移动端是否能看清；产品是否仍是主角；是否与品牌风格统一。"
    ]
  },
  {
    title: "细节放大A+图Prompt模板 SOP",
    description: "用于展示工艺、纹理、结构和配件细节，帮助买家相信产品质量。",
    category: "A+",
    tags: ["图片", "A+", "AI作图", "Prompt", "细节放大", "Callouts"],
    owner: "运营/设计",
    updated: "2026年6月",
    steps: [
      "适用场景：A+ 细节模块、副图细节卖点、材质证明、结构说明、配件说明。",
      "图片目标：突出产品真实结构和局部细节，不改变产品事实，用 Callouts 解释买家关心的点。",
      "Prompt模板：Create a premium Amazon US A+ Content image focusing on the craftsmanship and close-up details of [PRODUCT]. Use the uploaded product photo as the strict reference and keep the product shape, color, proportions, structure, and all details unchanged. Show the full product as the main subject, with several clean macro-style detail callout windows highlighting [DETAIL 1], [DETAIL 2], [DETAIL 3], [DETAIL 4]. Add clean English text: Headline: [HEADLINE]. Callouts: [CALLOUT 1], [CALLOUT 2], [CALLOUT 3]. Use a refined studio-style layout, clean background, soft shadows, and premium lighting. The image should look like a professional Amazon A+ feature module. No people, no children, no hands, no clutter, no extra accessories, no logos, no fake certifications, no unrealistic product changes. Aspect ratio [SIZE].",
      "适合Callouts：Natural Wood Grain；Intricate Surface Details；Precision Building Structure；Detailed Model Design；Organized Assembly；Step-by-Step Instructions。",
      "质检重点：放大窗口是否展示真实细节；是否多加零件；是否把积木颗粒变成真实金属/木头产品；Callouts 是否短且拼写正确；细节是否与主产品一致。"
    ]
  },
  {
    title: "成人拼装体验图Prompt模板 SOP",
    description: "用于模型、积木、DIY 和收藏类产品，展示有序、安静、成人向的组装体验。",
    category: "A+",
    tags: ["图片", "A+", "AI作图", "Prompt", "拼装", "积木"],
    owner: "运营/设计",
    updated: "2026年6月",
    steps: [
      "适用场景：军事拼装积木、机械模型、木质拼装模型、DIY 模型、车模积木、成人收藏类模型。",
      "图片目标：表达 calm、focused、rewarding 的成人拼装体验，让买家理解组装过程有步骤、有说明、有成就感。",
      "Prompt模板：Create a premium Amazon US A+ Content image showing the building experience for [PRODUCT NAME]. Use the uploaded product photo as the strict reference and keep the completed model unchanged in shape, color, proportions, structure, and all visible details. Show the completed model in the background or center-right, with neatly organized building parts, an instruction booklet, and a partially assembled section arranged on a clean modern adult hobby workspace. The scene should feel calm, focused, rewarding, and suitable for adult hobby builders and collectors. Add clean English text: Headline: [HEADLINE]. Callouts: Step-by-Step Instructions, Designed for Ages 16+, Organized Building Experience. Use warm studio lighting, a clean desk surface, and a refined engineering hobby atmosphere. No children, no people, no hands, no messy workspace, no combat scene, no explosions, no flags, no political symbols, no extra products, no logos. Aspect ratio [SIZE].",
      "禁止项：儿童、人物、手、凌乱桌面、战斗场景、爆炸、旗帜、政治符号、额外产品、Logo、未包含配件。",
      "适用品类：军事拼装积木、机械模型、木质拼装模型、DIY模型、车模积木、成人收藏类模型。",
      "质检重点：是否误导年龄；是否出现人手；是否添加实际不包含配件；说明书是否看起来真实但不要求可读；成品模型是否和实物一致。"
    ]
  },
  {
    title: "收藏展示场景图Prompt模板 SOP",
    description: "用于展示模型成品的桌面摆件、收藏展示和礼品属性，但不能添加不存在的产品细节。",
    category: "A+",
    tags: ["图片", "A+", "AI作图", "Prompt", "场景图", "收藏"],
    owner: "运营/设计",
    updated: "2026年6月",
    steps: [
      "适用场景：成人模型、木质机械模型、积木车模、RC 模型、收藏摆件类产品的 A+ 场景图。",
      "图片目标：让买家想象成品展示价值，突出 premium、adult、stylish、rewarding 的收藏氛围。",
      "Prompt模板：Create a premium Amazon US A+ Content image for [PRODUCT NAME] as a collectible display piece. Use the uploaded product photo as the strict reference and keep the product shape, color, proportions, structure, and all details unchanged. Place the completed model on a modern office desk, collector shelf, or clean study room display area. The atmosphere should feel premium, adult, stylish, and rewarding after assembly. Make the product the clear main focus. Add clean English text: Headline: Build, Display, Collect. Callouts: Collectible Display Model, Perfect Desk Display, For Adult Hobby Builders. Use warm ambient lighting, clean modern decor, and a refined collector display style. No children, no people, no hands, no racing scene, no combat scene, no extra products, no logos, no unrealistic effects. Aspect ratio [SIZE].",
      "适合标题：Build, Display, Collect；Premium Display Piece；Collectible Model Design；For Adult Hobby Builders；Create Your Display Corner。",
      "风险提醒：不要添加未包含配件、品牌 Logo、额外模型、手、人物或不真实产品细节；不要让场景抢过产品主体。",
      "质检重点：产品是否是主角；背景是否干净；是否出现额外产品或 Logo；是否符合成人消费场景；文字是否短且可读。"
    ]
  },
  {
    title: "品牌故事图Prompt模板 SOP",
    description: "用于 Brand Story A+ 横幅或系列展示图，统一品牌调性并展示产品矩阵。",
    category: "A+",
    tags: ["图片", "A+", "AI作图", "Prompt", "Brand Story"],
    owner: "运营/设计",
    updated: "2026年6月",
    steps: [
      "适用场景：Amazon Brand Story A+ banner、品牌故事图、产品系列展示图、店铺统一风格图。",
      "图片目标：展示品牌统一感、系列化产品和收藏展示氛围，不制造实际不存在的产品或未授权 Logo。",
      "Prompt模板：Create a premium Amazon US Brand Story A+ banner image for a [BRAND CATEGORY] brand. Use the uploaded product photos as strict references and keep every model's shape, color, proportions, structure, and all product details unchanged. Show a curated collection of assembled products displayed together in a modern adult collector studio. The scene should feel like a refined engineering model showroom and communicate a consistent brand identity. Add clean English text: Headline: [BRAND HEADLINE]. Subtext: [BRAND SUBTEXT]. Use clean studio lighting, premium shadows, and a professional collectible display atmosphere. Keep the layout suitable for Amazon Brand Story A+. No children, no people, no hands, no political symbols, no flags, no weapons-in-use scene, no explosions, no logos, no price tags. Aspect ratio [SIZE].",
      "适用产品线：拼装战舰、飞机模型、坦克积木、车模积木、木质机械模型、RC 玩具系列、DIY 模型系列。",
      "合规提醒：不得出现未授权品牌 Logo、真实军队标志、政治符号、国旗、爆炸、战斗场景、价格促销信息；多个产品同框时必须确认都属于实际销售或品牌系列。",
      "质检重点：每个模型是否保持真实；产品数量是否与系列真实匹配；品牌文案是否夸大；移动端是否可读；是否适合 Brand Story 模块比例。"
    ]
  },
  {
    title: "不同品类AI作图重点 SOP",
    description: "按机械木质模型、军事拼装积木、RC 玩具和车模积木区分 AI 作图重点、关键词和禁止项。",
    category: "A+",
    tags: ["图片", "A+", "AI作图", "Prompt", "军事", "RC", "木质", "积木"],
    owner: "运营/设计",
    updated: "2026年6月",
    steps: [
      "机械模型/木质拼装类重点表达：木纹质感、机械结构、手工拼装体验、成品装饰价值、礼物属性。",
      "机械模型/木质拼装类推荐关键词：precision wooden construction, natural wood grain, mechanical linkage, handcrafted details, vintage desk decor, adult hobby builders, relaxing assembly experience。",
      "机械模型/木质拼装类禁止项：不要把真实木纹改成塑料；不要添加不存在的金属配件；不要夸大机械功能；不要出现儿童手部操作成人定位产品。",
      "军事拼装积木类重点表达：工程结构感、收藏展示感、积木颗粒细节、成人爱好者场景、合规规避。",
      "军事拼装积木类推荐关键词：military-inspired building block model, adult collector studio, engineering model showroom, detailed block structure, organized building experience, display model。",
      "军事拼装积木类禁止项：真实战争、爆炸、血腥、政治符号、国旗、纳粹相关元素、真实武器使用场景、作战宣传感。",
      "RC 玩具类重点表达：产品真实功能、遥控器和配件、动态使用场景、灯光效果、主图白底合规。",
      "RC 玩具类推荐关键词：clean Amazon main image, pure white background, full product set, remote control, built-in LED lighting, realistic product photography。",
      "RC 玩具类风险提醒：防水、续航、控制距离、速度、灯光和适用场景必须与实际参数一致，不要夸大。",
      "车模积木类重点表达：车身线条、可打开结构、发动机细节、展示收藏感、成人爱好者场景。",
      "车模积木类推荐关键词：collectible supercar building block model, detachable engine assembly, premium desk display, adult hobby builders, detailed mechanical structure。",
      "车模积木类禁止项：真实车标、品牌 Logo、未授权名车标识、夸张赛车效果、真实赛道品牌标识。"
    ]
  },
  {
    title: "Amazon A+ AI作图合规检查 SOP",
    description: "检查 AI 生成的 A+ 图片是否包含价格促销、夸大声明、侵权 Logo、错误文字和误导性内容。",
    category: "A+",
    tags: ["图片", "A+", "AI作图", "合规", "质检"],
    owner: "运营/设计",
    updated: "2026年6月",
    steps: [
      "不建议出现：价格、折扣、优惠券；Best Seller、No.1、Top Quality 等无法证明的绝对化表达；竞品贬低对比；未授权品牌 Logo；真实名车 Logo、军队标志、政治符号；夸大功能效果；儿童使用成人拼装产品的场景；医疗、安全、认证类未经证明的声明；多加产品实际不包含的配件；错误文字、乱码文字、拼写错误。",
      "适合使用的 A+ 文字：Clear Instructions；Detailed Building Experience；Designed for Ages 16+；Collectible Display Model；Organized Assembly；Premium Display Piece；Detailed Model Design。",
      "谨慎使用词：Best；Perfect；Guaranteed；Official；Military-grade；Realistic weapon；For kids（尤其是产品定位 16+ 或 adult 时）。",
      "检查步骤 1：先看产品是否与实物一致，颜色、比例、结构、配件、纹理和件数有没有变化。",
      "检查步骤 2：再看英文文字是否拼写正确，有没有乱码、中文残留、夸大词或违规词。",
      "检查步骤 3：再看是否有合规风险，例如价格促销、Logo、政治符号、儿童场景、虚假认证、侵权品牌。",
      "检查步骤 4：再看是否存在不包含配件，例如多加遥控器、电池、工具、展示架、额外模型或包装。",
      "检查步骤 5：再看尺寸是否符合 Amazon 模块要求，文字和产品是否在安全区域内。",
      "检查步骤 6：最后看移动端是否清晰，Callouts 是否过小，产品是否被文字遮挡。",
      "处理方式：低风险文字错误交给设计修正；产品结构变化必须重新生成或换参考图；出现侵权 Logo、政治符号、价格促销、虚假认证时直接淘汰该图；不确定的认证和授权问题先升级主管。"
    ]
  },
  {
    title: "AI出图质检 SOP",
    description: "用产品一致性、文字、合规和视觉四类标准判断 AI 出图是否能进入设计精修或上传。",
    category: "A+",
    tags: ["图片", "A+", "AI作图", "质检", "Prompt"],
    owner: "运营/设计",
    updated: "2026年6月",
    steps: [
      "产品一致性检查：产品颜色是否变了；产品比例是否变了；零件结构是否多了或少了；是否加了不存在的配件；是否把积木模型变成真实模型；是否改变车灯、炮塔、机翼、船体、轮胎、纹理等关键细节。",
      "文字检查：英文是否拼写正确；是否有乱码；是否有中文残留；是否有夸大或违规词；字体是否清晰；手机端是否能看清。",
      "合规检查：是否出现 Logo 或品牌侵权元素；是否出现价格、折扣、促销信息；是否出现儿童不合适场景；军事类是否出现政治符号、旗帜、爆炸、真实战斗；是否有虚假认证或无法证明的声明。",
      "视觉检查：主体是否突出；背景是否干净；卖点是否一眼能看懂；文字和产品是否抢画面；风格是否和店铺其他图片统一；尺寸是否符合 Amazon 模块要求。",
      "通过标准：产品真实一致、文字正确、无违规元素、卖点清晰、尺寸正确、移动端可读。",
      "需要修改：产品细节变化、文字错误、出现不包含配件、出现 Logo/价格/政治符号、卖点不清晰、尺寸不对。",
      "修改记录模板：日期、ASIN/SKU、图片类型、Prompt版本、问题类型、修改动作、是否通过、负责人、备注。",
      "升级主管条件：涉及认证、授权、品牌 Logo、政治符号、军事敏感表达、儿童年龄定位、安全功能声明或产品事实不确定。"
    ]
  },
  {
    title: "AI作图Prompt生成交付模板 SOP",
    description: "给 ChatGPT 的可复制指令，用于批量生成 Amazon A+ 图片方案和每张图的英文 Prompt。",
    category: "A+",
    tags: ["图片", "A+", "AI作图", "Prompt", "交付模板"],
    owner: "运营",
    updated: "2026年6月",
    steps: [
      "适用场景：运营已经整理好产品信息，需要让 ChatGPT 规划一套 Amazon A+ Content 图片方案，并为每张图生成可直接用于 AI 作图的英文 Prompt。",
      "可直接给 ChatGPT 的 Prompt 生成指令：你是 Amazon US 运营和 A+ 图片策划专家。请根据以下产品信息，为我规划一套 Amazon A+ Content 图片方案，并为每一张图生成可直接用于 AI 作图的英文 Prompt。",
      "指令要求 1：先分析产品核心卖点、目标买家和转化痛点。",
      "指令要求 2：再规划5-7张 A+ 图片模块。",
      "指令要求 3：每张图都要说明图片目的、构图建议、英文标题、英文 Callouts、AI 作图 Prompt、禁止项。",
      "指令要求 4：Prompt 必须强调保持上传产品图细节不变。",
      "指令要求 5：图片风格要符合 Amazon US，专业、清晰、偏成人消费场景。",
      "指令要求 6：不要出现儿童、手、额外配件、Logo、价格、折扣、政治符号、夸张效果。",
      "指令要求 7：如果是军事类积木，禁止出现爆炸、战斗、国旗、政治符号、真实武器使用场景。",
      "产品信息占位：在指令末尾粘贴产品名称、站点、产品类型、关键词、适用人群、使用场景、卖点、材质规格、尺寸数量、包装包含、年龄建议、禁止元素和必须保持不变的细节。",
      "输出格式要求：产品核心卖点；买家转化痛点；A+模块规划表；每张图的图片目的；构图建议；英文标题；Callouts；AI作图Prompt；禁止项；质检重点。",
      "交付物：可复制的 ChatGPT 指令、A+模块规划表、每张图英文 Prompt、禁止项清单、质检重点清单、后续设计修改记录。"
    ]
  },
  {
    title: "主图检查流程",
    description: "检查主图是否真实、清晰、合规，并能在搜索结果中传递产品识别度。",
    category: "图片",
    tags: ["图片"],
    owner: "设计",
    updated: "2026年6月",
    steps: [
      "确认主图展示真实产品和真实配件",
      "背景符合站点/类目要求，通常为纯白",
      "产品占比足够，主体清晰，边缘无毛刺",
      "无文字、图标、促销信息、水印、边框、色块",
      "颜色、数量、尺寸比例与实物一致",
      "保存原图、修图稿、最终图，便于追溯"
    ]
  },
  {
    title: "副图与 A+ 规划流程",
    description: "把卖点转化为图片主题，形成移动端也能读懂的详情页内容。",
    category: "A+",
    tags: ["图片", "A+"],
    owner: "设计",
    updated: "2026年6月",
    steps: [
      "列出5个核心卖点",
      "将卖点转化为图片主题：尺寸、细节、材质、功能、场景、包装、说明书",
      "每张图只讲一个主要信息，文字短而清晰",
      "A+按品牌故事、核心卖点、细节放大、场景展示、对比表、使用说明规划",
      "检查移动端可读性，避免文字过小"
    ]
  },
  {
    title: "广告基础复盘流程",
    description: "用曝光、点击、花费、销售额和 ACOS 判断广告下一步动作。",
    category: "广告",
    tags: ["广告", "数据复盘"],
    owner: "PPC",
    updated: "2026年6月",
    steps: [
      "查看曝光、点击、CTR、CPC、花费、订单、销售额、ACOS",
      "判断问题：无曝光、无点击、无转化、花费过高、转化不稳定",
      "下载搜索词报告，筛选高相关词、出单词、花费词、无关词",
      "执行动作：加词、否词、调竞价、调预算、优化 Listing",
      "记录动作日期，至少观察3-7天再判断"
    ]
  },
  {
    title: "售后处理流程",
    description: "把买家问题拆成责任类型、证据需求和合规处理方案。",
    category: "售后",
    tags: ["售后"],
    owner: "客服",
    updated: "2026年6月",
    steps: [
      "读取买家消息和订单信息",
      "判断责任类型：物流、产品、买家误用、平台、清关或其他",
      "确认是否需要照片、视频、缺件编号或物流截图",
      "给出合规方案：补发、退款、退货、解释说明、开 CASE",
      "记录处理结果和可复盘原因，反馈给产品、供应链或 Listing"
    ]
  },
  {
    title: "买家未收到货处理 SOP",
    description: "适用于包裹未收到、物流长时间未更新、超过预计送达时间，或买家要求退款/重新发货的情况。",
    category: "售后",
    tags: ["售后", "客服", "物流", "A-to-z"],
    owner: "客服",
    updated: "2026年6月",
    steps: [
      "适用场景：买家表示包裹未收到、物流很久没有更新、超过预计送达时间、要求退款或重新发货。",
      "新人先查：订单号、站点、发货方式 FBA/FBM、自配送、预计送达时间、当前物流轨迹、是否显示 Delivered、是否清关异常、地址异常、派送失败、是否已开 A-to-z、是否已退款或部分退款、此前是否联系过买家。",
      "责任判断：未超过预计送达时间先安抚并继续跟进；已超过预计送达但物流仍在运输，判断是否需要部分退款安抚或继续等待；长期无更新需联系承运商或开 CASE；显示 Delivered 但买家说未收到，转入 Delivered but Not Received 流程；买家已开 A-to-z 立即升级主管；FBA 订单按 Amazon 订单页面和平台流程处理。",
      "处理步骤 1：先回复买家并表达理解，不要直接推责，也不要承诺平台外补偿。",
      "处理步骤 2：核对订单页面、物流页面和买家描述是否一致，截取关键证据保存到工单。",
      "处理步骤 3：未超时订单告知仍在预计时效内，设置内部跟进时间；已超时订单根据物流状态联系承运商、开 CASE 或请主管判断退款/补发。",
      "处理步骤 4：FBM 自配送订单要同步检查仓库发货记录、面单、承运商收件记录和异常原因；FBA 订单优先引导买家按 Amazon 流程查询或联系 Amazon Customer Service。",
      "可选方案：继续等待并跟进、联系承运商、开 CASE、部分退款安抚、重新发货、退货后退款、全额退款。选择方案前必须看金额、风险、证据和主管规则。",
      "英文回复模板 - 未超预计送达：Dear Customer, We are sorry for the waiting time. We checked your order and the package is still in transit. It is currently within the estimated delivery window, and we will continue to monitor the shipment status for you. If there is no further update soon, please contact us again and we will help check the next available solution. Thank you for your patience and understanding.",
      "英文回复模板 - 已延迟正在跟进：Dear Customer, We are very sorry that your package has been delayed. We have checked the tracking information and are following up on the shipment status. We understand how frustrating this can be. Please allow us a little time to confirm the latest update with the carrier. We will do our best to help you resolve this issue as soon as possible. Thank you for your understanding.",
      "升级主管条件：已开 A-to-z；买家要求立即全额退款或重发；高金额订单；同一买家多次未收到；物流显示 Delivered 但争议较大；涉及差评/投诉威胁；超过内部处理时限仍无承运商结果。",
      "风险提醒：不要说“物流问题与我们无关”；不要在证据不足时承诺全额退款或重发；不要让买家去平台外收款；不要要求买家以好评换补偿；所有处理要留痕。",
      "复盘记录字段：日期、站点、订单号、ASIN/SKU、发货方式、预计送达时间、物流状态、买家诉求、责任判断、处理方案、是否退款、退款金额、是否升级主管、最终结果、可改进点。"
    ]
  },
  {
    title: "显示送达但买家说没收到 SOP",
    description: "处理 Delivered but Not Received 场景，兼顾买家体验、证据留存和高风险订单升级。",
    category: "售后",
    tags: ["售后", "客服", "物流", "Delivered"],
    owner: "客服",
    updated: "2026年6月",
    steps: [
      "适用场景：物流显示 Delivered，但买家说没有收到，门口、信箱、家人、前台、物业或包裹柜都暂时找不到，怀疑承运商放错位置。",
      "新人先查：Delivered 时间、Delivered 地点、签收信息、承运商、是否 FBA、是否有包裹柜记录、买家是否已检查前台/物业/邻居、买家是否已联系承运商、是否已开 A-to-z。",
      "处理步骤 1：先表达理解，不要直接推责，也不要回复“Tracking shows delivered. We are not responsible.”",
      "处理步骤 2：建议买家检查门口、邮箱、前台、物业、邻居、家人、包裹柜和其他常见投递点。",
      "处理步骤 3：建议买家等待 24-48 小时，因为部分承运商可能提前标记 Delivered。",
      "处理步骤 4：同步保存物流截图；FBM 订单可联系承运商确认投递证明；FBA 订单按 Amazon 流程引导买家联系 Amazon Customer Service。",
      "处理步骤 5：如果 24-48 小时后仍未找到，根据订单金额、历史记录、站点规则和证据，评估补发、退款、开 CASE 或升级主管。",
      "英文回复模板：Dear Customer, We are sorry to hear that you have not received the package. We checked the tracking information and it shows as delivered. Sometimes carriers may mark a package as delivered slightly earlier than the actual delivery, or leave it at the front door, mailbox, reception desk, parcel locker, or with a neighbor. Could you please check these possible locations first? If you still cannot find the package, please let us know and we will continue to help you check the next available solution. Thank you for your patience.",
      "风险提醒：不要直接否认买家；不要在未核对订单金额和历史记录前承诺重发/全额退款；不要要求买家撤销投诉后再处理；Delivered 场景容易触发 A-to-z，必须留存证据。",
      "升级主管条件：买家已开 A-to-z；高金额订单；买家强烈要求退款/重发；同一地址或买家多次发生；承运商记录异常；涉及差评、投诉或账号绩效风险。"
    ]
  },
  {
    title: "买家申请退货 SOP",
    description: "区分主观退货、质量问题、物流问题和 Listing 描述风险，指导新人决定是否要证据、退货或补救。",
    category: "售后",
    tags: ["售后", "客服", "退货", "Listing"],
    owner: "客服",
    updated: "2026年6月",
    steps: [
      "适用场景：买家想退货，原因包括不想要、买错、尺寸/颜色/型号不符合预期、产品破损、缺件、不会使用、与描述不符、送达太晚。",
      "新人先查：退货原因、订单金额、产品是否已使用、是否质量问题、是否物流导致、是否买家主观原因、是否 FBA 订单、是否已自动批准退货、是否影响账号绩效、是否有差评风险。",
      "责任判断：买家不想要按退货流程处理；买错型号/颜色需检查页面描述是否清楚；产品破损要求照片并判断补发/退款；缺件要求缺件编号并优先补件；不会使用先提供指导；与描述不符为高风险，必须检查 Listing 是否有误；物流严重延迟判断是否部分退款或退货退款。",
      "处理步骤 1：确认买家真实诉求，是只想退货、想换货、想补发、想退款，还是需要使用帮助。",
      "处理步骤 2：如涉及破损、缺件、描述不符，先收集照片、视频、零件编号、说明书页码或包装照片。",
      "处理步骤 3：FBA 订单按 Amazon 退货流程处理；FBM 订单按公司退货地址、标签、时限和退款规则处理。",
      "处理步骤 4：判断是否需要先解决问题而非直接退货，例如补说明书、补配件、提供安装指导或排查使用方法。",
      "处理步骤 5：记录退货原因并反馈给产品、供应链或 Listing，避免同类问题重复发生。",
      "英文回复模板 - 常规退货：Dear Customer, We are sorry that the product did not fully meet your expectations. You may submit a return request through your Amazon order page, and the return will be handled according to Amazon's return process. If there is any product issue, please feel free to share more details with us, and we will do our best to help. Thank you.",
      "英文回复模板 - 破损退货：Dear Customer, We are very sorry to hear that the item arrived damaged. Could you please send us a few clear photos showing the damaged part and the package condition? This will help us check the issue and provide a suitable solution as soon as possible. Thank you for your help and understanding.",
      "复盘字段：退货原因、责任类型、是否有证据、是否影响 Listing、是否供应链问题、处理方案、退款金额、是否升级、最终结果、下次预防动作。"
    ]
  },
  {
    title: "买家要求退款 SOP",
    description: "明确全额退款、部分退款和不建议直接退款的适用边界，降低误退和合规风险。",
    category: "售后",
    tags: ["售后", "客服", "退款", "A-to-z"],
    owner: "客服",
    updated: "2026年6月",
    steps: [
      "全额退款可能适用：包裹确认丢失；产品严重破损且无法补发；买家退回商品后按流程退款；平台判定需要退款；公司主管确认的高风险安抚方案。",
      "部分退款可能适用：轻微瑕疵；物流延迟安抚；少量配件问题但不影响主要功能；买家愿意保留商品；补件成本或时效不合适且主管规则允许。",
      "不建议直接退款：买家没有提供必要证据；物流仍在预计时效内；显示 Delivered 但买家尚未检查周边；买家提出平台外补偿；买家以好评/删除差评作为条件；订单金额高或责任不清。",
      "新人先查：订单金额、站点、订单状态、退货状态、发货方式 FBA/FBM、物流证据、产品证据、历史沟通、是否已开 A-to-z、是否已有退款记录。",
      "操作前确认：退款原因是否真实清楚；是否需要照片/视频/物流截图；是否会重复退款；退款金额是否在权限内；是否需要主管批准；是否影响账号绩效或财务记录。",
      "处理步骤 1：先判断买家的核心诉求和责任类型，不要把所有投诉都默认成全额退款。",
      "处理步骤 2：证据不足时先礼貌索取证据；证据充分时按权限提供部分退款、全额退款、补发或退货退款方案。",
      "处理步骤 3：操作后记录退款金额、币种、原因、审批人、截图和买家回复。",
      "英文回复模板 - 需要证据：Dear Customer, We are sorry for the inconvenience. To help us provide the most suitable solution, could you please send us a few clear photos or details showing the issue? Once we receive the information, we will check it carefully and get back to you as soon as possible.",
      "英文回复模板 - 退款处理中：Dear Customer, Thank you for your patience. We have checked the case and will process the refund according to the applicable Amazon process. Please allow some time for the refund to appear in your original payment method after it is processed.",
      "升级主管条件：高金额订单；买家已开 A-to-z；要求全额退款且商品未退回；买家提出平台外补偿；涉及差评条件交换；同一买家多次索赔；客服权限不足。"
    ]
  },
  {
    title: "产品破损 SOP",
    description: "收集破损证据，区分运输破损和产品质量问题，再决定补发、退款、退货或供应链升级。",
    category: "售后",
    tags: ["售后", "客服", "产品质量", "供应链"],
    owner: "客服",
    updated: "2026年6月",
    steps: [
      "适用场景：买家收到商品后发现外箱破损、产品裂开、零件断裂、无法正常使用、包装压坏或内部件损坏。",
      "需要买家提供的证据：破损位置清晰照片、外包装照片、运输标签照片、产品整体照片、订单号、必要时提供短视频。",
      "判断运输破损：外箱明显挤压、破洞、湿损；产品破损位置与外箱受力点一致；同批次其他订单正常；承运商轨迹有异常。",
      "判断产品质量问题：外箱完好但产品结构断裂、配件脆裂、功能失效、同 ASIN/SKU 多个买家反馈同类问题、质检或供应商批次记录异常。",
      "处理步骤 1：先安抚买家并索取照片，不要让买家承担解释成本。",
      "处理步骤 2：根据照片判断是否影响主要功能；轻微外观问题可评估部分退款；严重无法使用优先补发或退货退款。",
      "处理步骤 3：可补发时确认库存、地址和补发方式；不可补发时按退货退款或全额/部分退款规则处理。",
      "处理步骤 4：同类破损集中出现时，记录 ASIN/SKU、批次、包装方式并升级供应链复盘。",
      "英文回复模板：Dear Customer, We are very sorry that the item arrived damaged. Could you please send us clear photos of the damaged part and the package condition? This will help us confirm whether the issue was caused during shipping or by the product itself, and we will do our best to provide a suitable solution for you.",
      "记录字段：订单号、ASIN/SKU、破损位置、外箱状态、是否影响功能、证据链接、判断原因、处理方案、是否补发、是否退款、是否反馈供应链、最终结果。"
    ]
  },
  {
    title: "产品缺件/少件 SOP",
    description: "适用于积木、模型、RC、DIY 等零件型产品，优先定位缺失编号并补件。",
    category: "售后",
    tags: ["售后", "客服", "缺件", "供应链"],
    owner: "客服",
    updated: "2026年6月",
    steps: [
      "适用场景：缺少零件、配件、说明书、遥控器、电池、工具、编号零件，常见于 building block、model kit、RC、DIY 类目。",
      "新人先查：ASIN、SKU、缺失零件编号、说明书页码、缺失数量、买家照片、仓库是否可补件、供应商是否可补件、订单金额、是否影响主要功能。",
      "处理步骤 1：先安抚买家，说明需要准确编号以便快速确认。",
      "处理步骤 2：请买家提供缺件编号、说明书页码、收到零件照片和缺失数量；如果买家不清楚编号，引导其拍说明书对应页面。",
      "处理步骤 3：对照清单或说明书确认是否真实缺件，避免把安装错误误判为缺件。",
      "处理步骤 4：可补件时确认库存、补件时效和收件信息；无法补件时评估部分退款、退货退款或主管升级。",
      "处理步骤 5：记录缺件编号并汇总给仓库/供应链，判断是否为漏装、说明书错误或供应商批次问题。",
      "英文回复模板：Dear Customer, We are sorry for the missing part issue. Could you please send us the part number, the instruction page, and a photo of the parts you received? This will help us confirm the missing piece accurately and provide the best solution for you. Once we receive the details, we will check it as soon as possible. Thank you for your patience.",
      "风险提醒：不要在未确认编号时直接补发整套；不要让买家反复描述同一问题；缺件集中出现时必须反馈供应链和 Listing/说明书。"
    ]
  },
  {
    title: "买家不会使用/不会组装 SOP",
    description: "面向 RC 玩具、积木套装、模型套件、机械拼图等产品，先指导排查，再判断退换货。",
    category: "售后",
    tags: ["售后", "客服", "使用指导", "产品质量"],
    owner: "客服",
    updated: "2026年6月",
    steps: [
      "适用场景：买家表示不会安装、组装失败、遥控器无法配对、产品不会动、说明书看不懂、步骤卡住或怀疑产品坏了。",
      "新人先查：说明书、视频教程、常见错误、产品版本、配件是否齐全、电池/遥控器是否正确、开关位置、充电状态、频率/配对方式、买家卡住的具体步骤。",
      "处理步骤 1：先确认问题发生在哪一步，让买家描述具体步骤、页面编号或操作现象。",
      "处理步骤 2：提供说明书页码、简短文字指导、安装方向提醒或视频链接；回复要一步一步，不要一次塞太多信息。",
      "处理步骤 3：必要时让买家发送照片或视频，确认是否装反、少件、电池没电、遥控器未配对或使用环境不合适。",
      "处理步骤 4：仍无法解决时判断是否为缺件、质量问题或买家主观不会用，再选择补件、补发、退货退款或升级主管。",
      "英文回复模板：Dear Customer, We are sorry for the trouble with using or assembling the item. Could you please let us know which step you are having difficulty with, or send us a photo/video of the current setup? We will check it carefully and guide you through the next steps. If any part is missing or defective, we will also help find a suitable solution.",
      "风险提醒：不要直接说买家操作错误；不要在未排查配件和电池前判定产品质量问题；高频使用问题要反馈 Listing、说明书和视频教程。"
    ]
  },
  {
    title: "发票问题 SOP",
    description: "处理 invoice、VAT invoice、公司抬头和欧洲站发票需求，避免税务承诺风险。",
    category: "售后",
    tags: ["售后", "客服", "发票", "VAT"],
    owner: "客服",
    updated: "2026年6月",
    steps: [
      "适用场景：买家要求 invoice、VAT invoice、公司抬头、欧洲站发票、发票下载方式或发票信息修改。",
      "新人先查：站点、订单号、买家发票需求、公司发票流程、是否由 Amazon 自动开票、订单是否 B2B、是否涉及 VAT 信息。",
      "处理步骤 1：确认买家需要普通 invoice 还是 VAT invoice，以及是否需要公司名称、地址或税号信息。",
      "处理步骤 2：按公司和站点流程处理；如果由 Amazon 自动生成，引导买家在订单页面下载或联系 Amazon Customer Service。",
      "处理步骤 3：不能私自承诺不符合税务规则的内容，不能随意修改金额、日期、税率或买家主体信息。",
      "英文回复模板：Dear Customer, Thank you for contacting us. Could you please confirm what type of invoice you need and provide the required company details if applicable? We will check the order and handle it according to the applicable Amazon and company invoice process. If the invoice is generated by Amazon, you may also be able to download it from your order page.",
      "升级主管条件：VAT invoice 争议、买家要求修改金额/日期/税率、欧洲站税务规则不清、公司抬头信息异常、买家投诉发票影响报销或清关。"
    ]
  },
  {
    title: "买家差评/低星反馈处理 SOP",
    description: "在合规边界内解决真实问题，避免诱导评价、平台外联系和绩效风险。",
    category: "售后",
    tags: ["售后", "客服", "Review", "Request a Review"],
    owner: "客服",
    updated: "2026年6月",
    steps: [
      "合规原则：先解决实际问题，所有沟通留在 Amazon 允许的渠道内，不用退款、礼品或补偿换取修改评价。",
      "不能做：不能返钱换改评；不能要求删除差评；不能威胁买家；不能平台外联系；不能暗示“给好评才补偿”；不能操纵 Review。",
      "可以做：解决产品、物流或使用问题；提供退换货流程；使用官方 Request a Review；把产品问题反馈给产品、供应链或 Listing。",
      "新人先查：订单号、评价内容、星级、买家诉求、是否已联系过客服、是否产品质量问题、是否 Listing 描述误导、是否需要主管处理。",
      "处理步骤 1：如果买家通过站内信反馈低星原因，先表达歉意并聚焦问题本身。",
      "处理步骤 2：按问题类型提供补件、指导、退货、退款或承运商跟进方案，不能提“请修改评价”。",
      "处理步骤 3：若发现 Listing 误导、批量质量问题或说明书问题，记录并反馈相关负责人。",
      "英文回复模板：Dear Customer, We are sorry that the product did not meet your expectations. We would like to understand the issue and help resolve it properly. Could you please share more details about the problem you experienced? We will check it carefully and provide the best available solution according to Amazon's process.",
      "升级主管条件：低星评价影响较大；买家提出评价交换条件；涉及安全、质量批量问题或侵权投诉；客服不确定回复是否合规；买家情绪激烈或已投诉。"
    ]
  },
  {
    title: "A-to-z 索赔风险处理 SOP",
    description: "识别 A-to-z 高风险信号，快速整理证据并升级主管，保护账号绩效。",
    category: "售后",
    tags: ["售后", "客服", "A-to-z", "绩效"],
    owner: "客服",
    updated: "2026年6月",
    steps: [
      "高风险信号：买家明确说要开 A-to-z；订单已出现 A-to-z；包裹未收到或 Delivered 争议；物流超时；买家多次催促无结果；退款争议；买家投诉客服不处理。",
      "新人先查：订单号、站点、发货方式、物流轨迹、Delivered 证明、承运商记录、买家历史消息、此前回复、退款记录、退货记录、订单金额、是否 FBA。",
      "立即升级主管条件：A-to-z 已开启；买家威胁开 A-to-z；高金额订单；责任不清；证据不足但时限紧；涉及账号绩效、ODR 或政策风险。",
      "证据整理清单：订单截图、物流轨迹截图、预计送达时间、Delivered 时间/地点、承运商证明、买家消息时间线、客服回复记录、退款/补发/退货记录、内部处理建议。",
      "回复原则：简短、礼貌、基于事实；不争辩；不承诺平台外补偿；不要求买家撤销索赔作为处理条件；所有结论先经主管确认。",
      "处理步骤 1：看到 A-to-z 信号后先暂停高风险承诺，立即整理证据。",
      "处理步骤 2：把证据、责任判断和建议方案发主管确认，再按平台流程回复或提交材料。",
      "处理步骤 3：结案后复盘原因，是物流、客服响应慢、Listing 误导、产品问题还是流程漏点。",
      "复盘字段：A-to-z 状态、触发原因、首次响应时间、证据是否充分、责任判断、处理方案、是否影响 ODR、主管意见、最终结果、预防动作。"
    ]
  },
  {
    title: "客服案例记录模板",
    description: "统一记录售后工单信息，方便交接、主管复核、绩效追踪和后续复盘。",
    category: "售后",
    tags: ["售后", "客服", "记录模板", "复盘"],
    owner: "客服",
    updated: "2026年6月",
    steps: [
      "日期：记录买家首次联系日期、客服首次回复日期和最终结案日期。",
      "站点：US、CA、UK、DE、FR、IT、ES、JP 等，避免不同站点流程混用。",
      "订单号：粘贴完整 Amazon 订单号，并确认是否 FBA/FBM。",
      "ASIN/SKU：记录对应商品，必要时补充批次、颜色、型号或变体。",
      "问题类型：未收到货、Delivered 未收到、退货、退款、破损、缺件、不会使用、发票、差评、A-to-z 等。",
      "买家诉求：退款、补发、补件、退货、换货、发票、使用指导、投诉处理。",
      "物流状态：预计送达、在途、无更新、Delivered、派送失败、退回中、清关异常。",
      "责任判断：物流责任、产品责任、买家主观、平台流程、清关/地址问题、责任不清。",
      "处理方案：继续跟进、联系承运商、开 CASE、补发、补件、部分退款、全额退款、退货退款、升级主管。",
      "是否退款：是/否；退款金额：币种 + 金额；是否已避免重复退款。",
      "是否升级主管：是/否；升级原因；主管结论。",
      "是否影响绩效：A-to-z、ODR、退货率、差评、投诉、账号健康等。",
      "是否需要反馈 Listing/供应链：描述误导、说明书问题、包装破损、批量缺件、质量批次、图片不清楚等。",
      "复盘结论：根因、已采取动作、预防措施、责任人、下次跟进时间。"
    ]
  },
  {
    title: "客服风险提醒清单",
    description: "新人回复前必看的售后合规底线，降低退款、评价、A-to-z 和平台政策风险。",
    category: "售后",
    tags: ["售后", "客服", "风险", "合规"],
    owner: "客服",
    updated: "2026年6月",
    steps: [
      "不诱导评价：不能用退款、礼品、补发、折扣换好评、改评或删差评。",
      "不承诺平台外补偿：不引导买家到站外收款、聊天或处理交易。",
      "不随意全额退款：证据不足、责任不清、金额较高或已有退款记录时，先核实并升级。",
      "不和买家争吵：即使买家情绪激烈，也只回应事实、流程和解决方案。",
      "不甩锅物流或平台：可以说明正在核查承运商或 Amazon 流程，但不要说“与我们无关”。",
      "不在证据不足时下结论：破损、缺件、Delivered 未收到、描述不符都需要对应证据和记录。",
      "高风险订单先升级主管：A-to-z、差评威胁、高金额、重复索赔、税务发票争议、产品安全问题都要先升级。",
      "回复前检查：是否礼貌、是否合规、是否有下一步、是否需要证据、是否承诺过度、是否留下工单记录。"
    ]
  },
  {
    title: "周数据复盘流程",
    description: "把销售、流量、转化、广告和库存问题沉淀为下周动作。",
    category: "数据复盘",
    tags: ["数据复盘"],
    owner: "运营",
    updated: "2026年6月",
    steps: [
      "拉取本周和上周核心数据",
      "先看销售额和订单，再看 Sessions 和转化率",
      "拆分自然问题与广告问题",
      "找出出单产品、掉单产品、无单产品",
      "每个重点产品输出“问题判断 + 原因 + 下周动作”",
      "主管点评后沉淀为案例库"
    ]
  }
];
