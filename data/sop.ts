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
    title: "竞品分析流程",
    description: "用于快速判断竞品强弱、价格带、卖点顺序和差异化机会。",
    category: "竞品",
    tags: ["竞品", "Listing", "数据复盘"],
    owner: "运营",
    updated: "2026年6月",
    steps: [
      "确定核心关键词和类目",
      "搜索主关键词，选取3-5个同款或相近竞品",
      "记录价格、评分、Review 数、BSR、主图风格、五点卖点顺序、A+模块",
      "判断竞品强弱：价格、评价壁垒、图片专业度、卖点清晰度",
      "输出差异化机会：功能、材质、件数、尺寸、说明书、包装、使用场景、售后"
    ]
  },
  {
    title: "标题优化流程",
    description: "帮助新人写出关键词靠前、语义自然、无明显违规风险的标题。",
    category: "Listing",
    tags: ["Listing"],
    owner: "内容",
    updated: "2026年6月",
    steps: [
      "收集核心关键词、长尾词、场景词和属性词",
      "分析竞品标题结构，找出高频主词和转化意图词",
      "确定主关键词放在前半段，避免重复堆砌",
      "按“品牌 + 核心关键词 + 核心卖点 + 属性规格 + 场景/人群”组合",
      "检查字符数、促销词、侵权词、特殊符号、重复词、可读性",
      "输出2-3个版本，并说明每版适合的定位"
    ]
  },
  {
    title: "五点描述写作流程",
    description: "把产品卖点按买家决策顺序写成清晰、可信、可扫描的五点。",
    category: "Listing",
    tags: ["Listing"],
    owner: "内容",
    updated: "2026年6月",
    steps: [
      "提炼5个核心卖点，按照买家决策顺序排列",
      "每点用清晰短标题开头，后面解释具体利益",
      "自然融合关键词，不为关键词牺牲可读性",
      "写事实，不写无法证明的绝对承诺",
      "检查每点长度、语法、场景、规格和合规风险"
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
