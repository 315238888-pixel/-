const defaultTripData = {
  badge: "Singapore & Kota Kinabalu · 2026",
  kicker: "城市漫游 + 环球影城 + 红树林萤火虫 + 海岛浮潜 + 海边度假",
  title: "新加坡 & 亚庇 9 天旅行计划",
  summary:
    "2026年10月3日从上海出发，先在新加坡住三晚，安排热门景点和环球影城；10月6日飞亚庇，后半程切换成红树林、萤火虫、离岛浮潜和海滩度假，最后经福州回上海。这一版已经按你的真实航班、住宿和节奏整理好了。",
  routeLabel: "上海 → 新加坡 → 亚庇 → 福州 → 上海",
  stats: [
    { label: "天数", value: "9天8晚" },
    { label: "飞行段", value: "4段" },
    { label: "住宿分配", value: "3 + 4 + 1 晚" },
    { label: "旅行风格", value: "城市 / 乐园 / 海岛" },
  ],
  heroStops: [
    { title: "10/3 上海出发", meta: "下午起飞，晚上落地新加坡" },
    { title: "10/4 热门景点日", meta: "城市打卡、拍照和夜景" },
    { title: "10/5 环球影城", meta: "把最耗体力的一天单独留出来" },
    { title: "10/7 红树林 + 萤火虫", meta: "傍晚气氛最好的一天" },
    { title: "10/8 离岛浮潜", meta: "把整天都交给海上活动" },
    { title: "10/9 香格里拉海边放松", meta: "用度假感把行程收尾" },
    { title: "10/10 福州市内游", meta: "抵达福州后在市内轻松逛逛" },
  ],
  tabs: [
    { id: "overview", label: "概览" },
    { id: "route", label: "路线" },
    { id: "daily", label: "每日" },
    { id: "weather", label: "天气" },
    { id: "prep", label: "行前" },
    { id: "toolkit", label: "工具" },
  ],
  overviewCards: [
    {
      label: "主要目的地",
      value: "新加坡 + 亚庇",
      note: "前半段是城市和乐园，后半段是自然和海边。",
    },
    {
      label: "航班节奏",
      value: "10/3 去程 · 10/6 转场 · 10/10 回国 · 10/11 返沪",
      note: "中间没有反复折返，整体动线比较顺。",
    },
    {
      label: "住宿安排",
      value: "东陵 JEN 3晚 · 凯悦尚萃 3晚 · 香格里拉 1晚 · 福州 1晚",
      note: "只在后半段换一次海边酒店，折腾感不算强。",
    },
    {
      label: "体力分布",
      value: "前紧后松",
      note: "新加坡前3天更适合早出晚归，亚庇后两天明显舒服很多。",
    },
    {
      label: "旅行亮点",
      value: "城市拍照 + 环球影城 + 萤火虫 + 浮潜 + 海滩",
      note: "一趟旅行里同时有热闹、玩乐和放空。",
    },
    {
      label: "必带重点",
      value: "护照 / 防晒 / 泳衣 / 驱蚊",
      note: "这趟最容易忘的是海边用品和傍晚活动装备。",
    },
    {
      label: "页面使用",
      value: "可以继续在网页里直接改",
      note: "以后如果你改航班或酒店，不用重新做整站。",
    },
    {
      label: "预算风格",
      value: "中等偏舒适",
      note: "住宿档次和海上项目会拉开总花费。",
    },
  ],
  routeReasons: [
    {
      title: "先城市、后海岛，节奏更容易进入状态",
      text: "新加坡放在前半段，可以先把热门景点和环球影城玩掉，后面去亚庇时身体和心情都更像度假。",
    },
    {
      title: "环球影城单独给一天最合理",
      text: "这样不会和城市景点互相挤压，玩完以后晚上也能自然早点回去休息。",
    },
    {
      title: "亚庇先轻松适应，再上自然活动",
      text: "10月6日只是飞过去和市区逛逛，真正的红树林、萤火虫和出海放到后两天，安排更顺。",
    },
    {
      title: "最后一晚住香格里拉很值",
      text: "把最放松、最有海边度假感的一晚放在旅程后段，会比一开始就住海边更有收尾仪式感。",
    },
  ],
  stayPlan: [
    {
      title: "10/3-10/5 · 新加坡东陵 JEN 酒店",
      meta: "连续住三晚，把城市热门景点和环球影城视为一个完整前半段，不需要天天搬行李。",
    },
    {
      title: "10/6-10/8 · 亚庇凯悦尚萃",
      meta: "市区吃饭、参加红树林团、第二天出海集合都比较方便，适合承担活动密集段。",
    },
    {
      title: "10/9 · 亚庇香格里拉",
      meta: "把最后一晚留给纯放松、海边和酒店体验，整趟旅行会更像真正度假收尾。",
    },
    {
      title: "10/10 · 福州过渡住宿",
      meta: "回国后只保留休息功能，为10月11日下午返沪留足缓冲，不把最后两天压得太累。",
    },
  ],
  highlight: {
    tag: "Trip Rhythm",
    title: "这趟最好玩的地方，是节奏很顺：先逛，再玩，再躺。",
    text:
      "新加坡三天负责热闹和打卡，亚庇四天负责自然和海边，最后一晚香格里拉把度假感真正拉满。相比一路赶到底，这种前半段有内容、后半段能放松的行程通常更舒服。",
  },
  routeLink: "https://www.google.com/maps/dir/%E4%B8%8A%E6%B5%B7/%E6%96%B0%E5%8A%A0%E5%9D%A1/%E4%BA%9A%E5%BA%87/%E7%A6%8F%E5%B7%9E/%E4%B8%8A%E6%B5%B7/",
  routeStops: [
    { title: "上海浦东 T2", meta: "10/3 14:30 起飞" },
    { title: "新加坡樟宜机场", meta: "10/3 20:20 落地" },
    { title: "新加坡东陵 JEN 酒店", meta: "连住 3 晚，城市段根据这里展开" },
    { title: "热门景点日", meta: "10/4 主要安排城市片区和夜景" },
    { title: "环球影城", meta: "10/5 把乐园单独留一整天" },
    { title: "樟宜机场 → 亚庇", meta: "10/6 08:45-11:15 飞行转场" },
    { title: "亚庇凯悦尚萃", meta: "连住 3 晚，承接市区 + 红树林 + 出海" },
    { title: "红树林 + 萤火虫", meta: "10/7 傍晚重点活动" },
    { title: "离岛浮潜", meta: "10/8 全天出海活动" },
    { title: "亚庇香格里拉", meta: "10/9 海边度假和看日落" },
    { title: "亚庇 → 福州 → 上海", meta: "10/10-10/11 回程收尾" },
  ],
  segments: [
    {
      title: "Day 1-3 · 上海 → 新加坡城市段",
      meta: "3晚城市漫游 + 1天环球影城",
      note: "这一段更适合早出晚归，把热门景点和乐园体验优先完成。",
      tone: "city",
      size: 42,
    },
    {
      title: "Day 4 · 新加坡 → 亚庇转场",
      meta: "上午飞行 · 下午市区轻松逛",
      note: "转场日不要塞太满，只要顺利入住并感受一下亚庇节奏就够了。",
      tone: "return",
      size: 22,
    },
    {
      title: "Day 5 · 红树林 + 萤火虫",
      meta: "下午出发 · 傍晚氛围最好",
      note: "白天尽量轻松一点，把体力留给这场傍晚到晚上的一日游。",
      tone: "mountain",
      size: 28,
    },
    {
      title: "Day 6 · 离岛浮潜出海",
      meta: "全天海上活动",
      note: "这一天最吃天气和体力，防晒、晕船药和换洗衣物都要提前备好。",
      tone: "coast",
      size: 38,
    },
    {
      title: "Day 7 · 海滩度假 + 换香格里拉",
      meta: "放松、拍照、看海和看日落",
      note: "这一天最好故意排空一点，别让最舒服的酒店变成匆忙打卡。",
      tone: "coast",
      size: 26,
    },
    {
      title: "Day 8-9 · 亚庇 → 福州 → 上海",
      meta: "回国飞行 + 1晚缓冲 + 次日返沪",
      note: "把返程做成稳定收尾，比回国当天立刻连飞到底更轻松。",
      tone: "return",
      size: 34,
    },
  ],
  days: [
    {
      code: "D1",
      date: "Day 1 · 2026年10月3日（星期六）",
      title: "上海飞新加坡，晚上入住东陵 JEN",
      summary: "今天的目标很简单：顺利抵达、入境、入住，不建议再额外塞太多行程。",
      drive: "飞行日",
      stay: "新加坡东陵 JEN 酒店",
      tone: "light",
      tags: ["出发", "入境", "入住"],
      note: "如果当晚状态还可以，只安排酒店周边简单走走就够了，别把第一晚搞得太累。",
      timeline: [
        { time: "14:30", title: "上海浦东 T2 起飞", desc: "把护照、登机牌、酒店订单放在最顺手的位置，第一段国际航班以顺利出发为主。" },
        { time: "20:20", title: "抵达新加坡樟宜机场", desc: "入境、取行李后前往酒店，建议路上顺手补水和简单零食。" },
        { time: "21:30", title: "入住新加坡东陵 JEN 酒店", desc: "放下行李，简单整理第二天要穿的衣服和充电设备。" },
        { time: "22:30", title: "早点休息", desc: "前半段行程会比较满，第一晚早点睡能让后面三天顺很多。" },
      ],
    },
    {
      code: "D2",
      date: "Day 2 · 2026年10月4日（星期日）",
      title: "新加坡热门景点游，把城市经典片区串起来",
      summary: "这一天适合安排热门景点、拍照点和夜景，把最有“到此一游”感的内容先完成。",
      drive: "市区地铁 / 打车",
      stay: "新加坡东陵 JEN 酒店",
      tone: "light",
      tags: ["热门景点", "城市漫游", "夜景"],
      timeline: [
        { time: "上午", title: "从酒店出发，安排 2-3 个核心片区", desc: "建议按片区玩，不要来回折返，把最想去的城市景点优先排进上午和中午。" },
        { time: "中午", title: "就近午餐 + 室内点补空调", desc: "新加坡步行很容易出汗，中午顺势进商场或餐厅休息会舒服很多。" },
        { time: "下午", title: "继续热门景点或拍照点", desc: "下午只留给顺路景点，尽量不要为了一个点专门横穿全城。" },
        { time: "晚上", title: "夜景 / 河边散步后回酒店", desc: "把漂亮的夜景留到收尾，城市段第一天会很完整。" },
      ],
    },
    {
      code: "D3",
      date: "Day 3 · 2026年10月5日（星期一）",
      title: "环球影城主场日，其他景点只做补充",
      summary: "把最耗体力的一天独立出来很合理，乐园玩完以后晚上只安排轻松补位内容。",
      drive: "乐园日",
      stay: "新加坡东陵 JEN 酒店",
      tone: "drive",
      tags: ["环球影城", "整天游玩", "早点回酒店"],
      note: "如果晚上还有精力，再补一个顺路点就够了，不建议把环球影城这天排成双倍强度。",
      timeline: [
        { time: "早上", title: "早点出发前往环球影城", desc: "把乐园日独立出来最大的好处，就是不用一边赶项目一边担心其他城市景点。" },
        { time: "白天", title: "全天玩环球影城", desc: "以核心项目为主，别为了“全刷”把自己玩得太透支。" },
        { time: "傍晚", title: "视体力决定是否补一个顺路点", desc: "如果腿已经很累，直接回酒店休息通常是更好的选择。" },
        { time: "晚上", title: "回酒店整理行李", desc: "第二天上午要飞亚庇，今晚提前收一遍东西会轻松很多。" },
      ],
    },
    {
      code: "D4",
      date: "Day 4 · 2026年10月6日（星期二）",
      title: "新加坡飞亚庇，下午轻松逛市区",
      summary: "这是从城市切到海岛的过渡日，节奏适合慢下来，不建议塞进高强度项目。",
      drive: "飞行 + 市区轻逛",
      stay: "亚庇凯悦尚萃",
      tone: "light",
      tags: ["飞行转场", "亚庇", "轻松逛逛"],
      timeline: [
        { time: "08:45-11:15", title: "新加坡樟宜机场 → 亚庇", desc: "早点到机场，把登机、托运和落地入境都做得从容一点。" },
        { time: "中午", title: "前往酒店办理入住或寄存行李", desc: "先把住宿稳定下来，下午的节奏就会轻松很多。" },
        { time: "下午", title: "亚庇市区逛逛", desc: "今天只安排轻松感受城市，不追打卡数量，重点是切换到海岛节奏。" },
        { time: "晚上", title: "早些回酒店休息", desc: "第二天是红树林和萤火虫活动，今晚保存体力更重要。" },
      ],
    },
    {
      code: "D5",
      date: "Day 5 · 2026年10月7日（星期三）",
      title: "亚庇红树林 + 萤火虫，把傍晚留给自然体验",
      summary: "白天可以轻松一点，最重要的部分是下午到晚上的一日游氛围。",
      drive: "一日游接送",
      stay: "亚庇凯悦尚萃",
      tone: "nature",
      tags: ["红树林", "萤火虫", "傍晚活动"],
      note: "今天记得带驱蚊液、薄外套和方便收纳的小包，傍晚活动时会很实用。",
      timeline: [
        { time: "上午", title: "睡到自然醒或在酒店慢慢吃早餐", desc: "不用故意早起，白天越放松，晚上的活动体验通常越好。" },
        { time: "中午", title: "市区随意逛或回酒店休息", desc: "把体力留给下午，不建议今天又排长时间暴走。" },
        { time: "下午", title: "按集合时间出发参加红树林团", desc: "今天的重点从这里开始，之后通常会连着看日落、红树林和萤火虫。" },
        { time: "晚上", title: "结束活动返回酒店", desc: "回到酒店之后就不用再安排别的，洗漱休息最舒服。" },
      ],
    },
    {
      code: "D6",
      date: "Day 6 · 2026年10月8日（星期四）",
      title: "离岛出海浮潜，把整天留给海上活动",
      summary: "这是后半段最晒也最像海岛度假的一天，防晒、防水和晕船准备要做足。",
      drive: "出海日",
      stay: "亚庇凯悦尚萃",
      tone: "nature",
      tags: ["浮潜", "出海", "防晒"],
      note: "泳衣、替换衣服、防水袋和晕船药最好前一晚就准备好，早上会省事很多。",
      timeline: [
        { time: "早上", title: "前往码头或集合点", desc: "出海日的节奏通常比较早，越早准备好，整天会越轻松。" },
        { time: "白天", title: "离岛浮潜 + 海上活动", desc: "今天主要任务就是玩海，不建议再叠加其他硬核安排。" },
        { time: "下午", title: "回市区 / 回酒店冲洗休息", desc: "海上回来通常会比较累，下午和傍晚留一点缓冲很有必要。" },
        { time: "晚上", title: "轻松晚餐", desc: "吃一顿舒服的晚饭就好，别把这天又变成赶场。" },
      ],
    },
    {
      code: "D7",
      date: "Day 7 · 2026年10月9日（星期五）",
      title: "海滩度假日，换到香格里拉慢下来",
      summary: "前面几天已经很满了，这一天最适合主动留白，让旅程真的进入度假状态。",
      drive: "度假日",
      stay: "亚庇香格里拉",
      tone: "light",
      tags: ["海边", "换酒店", "放空"],
      timeline: [
        { time: "上午", title: "从凯悦尚萃退房，前往香格里拉", desc: "今天的重点不是景点数量，而是把住宿切换成最舒服的状态。" },
        { time: "中午", title: "办理入住后慢慢休息", desc: "不赶行程、不赶打卡，海边酒店最值得的就是把节奏慢下来。" },
        { time: "下午", title: "海滩 / 泳池 / 拍照 / 看海", desc: "按当天心情安排，想躺就躺，想拍照就拍照。" },
        { time: "晚上", title: "看日落，轻松吃饭", desc: "把这趟旅行最放松的画面留在最后一晚，会很有收尾感。" },
      ],
    },
    {
      code: "D8",
      date: "Day 8 · 2026年10月10日（星期六）",
      title: "亚庇飞福州，回国后住一晚过渡",
      summary: "今天的任务就是顺利回国，别再给自己额外加太多移动和打卡内容。",
      drive: "回程飞行",
      stay: "福州",
      tone: "drive",
      tags: ["回国", "飞行", "过渡住宿"],
      timeline: [
        { time: "上午", title: "退房并前往机场", desc: "把退房、交通和机场时间都留得宽松一点，回程心态会轻松很多。" },
        { time: "13:05-17:00", title: "亚庇 → 福州", desc: "今天重点是顺顺利利到福州，不再安排其他旅行内容。" },
        { time: "晚上", title: "福州入住休息", desc: "回国后把节奏彻底放慢，第二天只剩一段国内返程。" },
        { time: "夜间", title: "整理次日返沪行李", desc: "把证件和次日航班信息再确认一遍，第二天就会很省心。" },
      ],
    },
    {
      code: "D9",
      date: "Day 9 · 2026年10月11日（星期日）",
      title: "福州飞上海，旅程正式收尾",
      summary: "最后一天比较轻松，重点是把返程做稳，不需要再安排新的打卡点。",
      drive: "返程日",
      stay: "上海",
      tone: "light",
      tags: ["返沪", "收尾", "轻松"],
      note: "如果上午有空，只安排酒店附近短活动就好，不值得为了多看一个点把最后一天搞得很赶。",
      timeline: [
        { time: "上午", title: "福州慢慢收尾", desc: "睡到自然醒、吃早餐、整理行李，让旅程在轻松里结束。" },
        { time: "15:30-16:50", title: "福州 → 上海虹桥", desc: "最后一段飞行时间不长，核心是稳定返程。" },
        { time: "傍晚", title: "抵达上海，旅程结束", desc: "到家之后你只需要休息和整理照片，这趟行程就正式画上句号了。" },
      ],
    },
  ],
  budget: [
    { title: "机票", amount: "以已出票价格为准", meta: "4段航班已经明确，托运行李和选座费别忘了单独留意。" },
    { title: "新加坡住宿", amount: "东陵 JEN 3晚", meta: "城市段更吃地段和交通便利度，通常比海岛段更像功能型消费。" },
    { title: "亚庇住宿", amount: "凯悦尚萃 3晚 + 香格里拉 1晚", meta: "最后一晚海边酒店通常会成为住宿花费高点。" },
    { title: "主要玩乐", amount: "环球影城 + 红树林团 + 出海浮潜", meta: "这三项基本决定你的活动预算水平。" },
    { title: "餐饮与市内交通", amount: "人均约 ¥1,500 - ¥2,500", meta: "新加坡前半段偏贵，亚庇后半段会相对轻松一点。" },
    { title: "机动金", amount: "建议预留 ¥800 - ¥1,500", meta: "给下雨改计划、临时打车、加项目和回程小支出。" },
  ],
  budgetNotes: [
    "新加坡前三天消费更密集，亚庇后半段主要花在一日游、海上项目和酒店体验。",
    "环球影城、红树林团、出海浮潜最好尽量提前锁定，现场改动空间通常会比较小。",
    "如果你想把香格里拉最后一晚住得更有仪式感，可以把下午茶、晚餐或酒店内消费单独列一笔。",
  ],
  budgetRisks: [
    "国庆档和周末容易把酒店、门票和热门活动价格整体抬高。",
    "出海和红树林都受天气影响，改期、取消或重新预订最好提前看清楚规则。",
    "机场接送、托运行李、防晒补货这些小项加起来会比想象中更快。",
  ],
  weather: [
    { icon: "🌆", name: "新加坡城市步行", range: "26°C - 32°C", tip: "热、湿、走路容易出汗，但商场和地铁空调会很强。" },
    { icon: "🎢", name: "环球影城", range: "26°C - 31°C", tip: "白天排队会比较晒，防晒和补水都很重要。" },
    { icon: "🌴", name: "亚庇市区", range: "25°C - 32°C", tip: "白天偏热，晚上体感仍然温暖，轻薄衣物最实用。" },
    { icon: "🌿", name: "红树林 / 萤火虫时段", range: "24°C - 28°C", tip: "傍晚不算冷，但驱蚊和一件薄外套会很有用。" },
    { icon: "🤿", name: "离岛浮潜", range: "26°C - 31°C", tip: "海上最怕的是暴晒和吹风，回程也容易觉得疲惫。" },
    { icon: "🧳", name: "福州过渡日", range: "22°C - 29°C", tip: "回国段体感会更轻松，但机舱和室内依旧建议带薄外套。" },
  ],
  layers: [
    "这趟不用带厚衣服，核心思路是轻薄、透气、快干，再加一件能进空调房的薄外套。",
    "海边和出海日真正重要的是防晒、遮阳和换洗衣物，不是多带几套重衣服。",
    "鞋子以好走、耐湿、容易脱换为主，城市暴走和海岛活动的舒适度会差很多。",
  ],
  weatherAlerts: [
    "热带天气很容易突然来一阵短时雨，包里长期放折叠伞或轻便雨衣最省心。",
    "红树林和出海都受天气影响，前一天再确认集合时间、出发点和注意事项最稳。",
    "海边看似不冷，但长时间晒和吹风会很耗体力，晚上一定记得补水和早点休息。",
  ],
  checklistGroups: [
    {
      title: "证件与航班",
      items: [
        { id: "passport", label: "护照与身份证", note: "出境和回程都要反复用到，放在最顺手的位置。" },
        { id: "flight-orders", label: "4段航班订单", note: "10/3、10/6、10/10、10/11 四段最好单独整理在一起。" },
        { id: "hotel-orders", label: "酒店订单", note: "新加坡、亚庇、福州三段住宿建议截图保存。" },
        { id: "payment", label: "银行卡 / 现金", note: "至少准备一张主卡、一张备用卡和少量现金。" },
      ],
    },
    {
      title: "海边与防晒",
      items: [
        { id: "swimwear", label: "泳衣和换洗衣服", note: "出海和酒店海边日都会用到。" },
        { id: "sunblock", label: "高倍防晒", note: "新加坡步行和亚庇出海都很晒，最好别等当地临时买。" },
        { id: "sunglasses", label: "墨镜 / 帽子", note: "海边和乐园排队都很实用。" },
        { id: "dry-bag", label: "防水袋", note: "手机、充电宝和证件备份最适合放这里。" },
      ],
    },
    {
      title: "数码与充电",
      items: [
        { id: "phone", label: "手机与充电线", note: "拍照、导航、打车和看订单都会用到。" },
        { id: "power-bank", label: "充电宝", note: "乐园日和出海日最怕掉电。" },
        { id: "adapter", label: "转换插头", note: "出境段建议提前准备，不要等临时借。" },
        { id: "network", label: "漫游 / eSIM", note: "最好出发前就处理好，不要落地后再找网络。" },
      ],
    },
    {
      title: "药品与舒适度",
      items: [
        { id: "motion-sick", label: "晕船药", note: "如果你平时容易晕，出海那天一定要提前吃。" },
        { id: "mosquito", label: "驱蚊液", note: "红树林和傍晚户外活动很需要。" },
        { id: "daily-meds", label: "常备药", note: "肠胃药、止痛药、创可贴这些都建议带一点。" },
        { id: "after-sun", label: "晒后舒缓用品", note: "海边和环球影城连续两天后会很感谢它。" },
      ],
    },
  ],
  prepReminders: [
    "把10月6日、10月10日、10月11日三段转场的证件和订单单独整理，临场最省心。",
    "环球影城前一晚、红树林前一晚、出海前一晚都尽量早点睡，第二天体感差很多。",
    "换到香格里拉那天不要再额外加太多打卡点，不然最后一晚的度假感会被打断。",
  ],
  toolkitGroups: [
    {
      title: "地图与交通",
      tools: [
        { name: "Google Maps", desc: "查路线、收藏地点和看酒店周边", icon: "🗺️", color: "#4285f4", url: "https://www.google.com/maps" },
        { name: "Grab", desc: "新加坡和马来西亚都常用的打车工具", icon: "🚕", color: "#00b14f", url: "https://www.grab.com" },
        { name: "Google Translate", desc: "临时翻译和菜单辅助", icon: "🌐", color: "#1a73e8", url: "https://translate.google.com" },
        { name: "WhatsApp", desc: "联系酒店、司机或当地团时常用", icon: "💬", color: "#25d366", url: "https://www.whatsapp.com" },
      ],
    },
    {
      title: "门票与订单",
      tools: [
        { name: "Trip.com", desc: "集中查看机票、酒店和订单", icon: "🧾", color: "#3556ff", url: "https://www.trip.com" },
        { name: "Klook", desc: "乐园门票和当地玩乐常会用到", icon: "🎟️", color: "#ff5b00", url: "https://www.klook.com" },
        { name: "Booking", desc: "备用酒店和临时查房", icon: "🏨", color: "#003580", url: "https://www.booking.com" },
        { name: "Agoda", desc: "东南亚酒店比价时很常见", icon: "🛏️", color: "#7a3cff", url: "https://www.agoda.com" },
      ],
    },
    {
      title: "天气与出海",
      tools: [
        { name: "Weather.com", desc: "看小时天气和短时阵雨", icon: "🌦️", color: "#1d7ea8", url: "https://weather.com" },
        { name: "Windy", desc: "看风和云层，对出海前判断有帮助", icon: "💨", color: "#7b2d8b", url: "https://www.windy.com" },
        { name: "Google Keep", desc: "临时记集合时间、房号和备注", icon: "📝", color: "#fbbc04", url: "https://keep.google.com" },
        { name: "Google Drive", desc: "把护照和订单备份到云端", icon: "📁", color: "#0f9d58", url: "https://drive.google.com" },
      ],
    },
    {
      title: "沟通与收尾",
      tools: [
        { name: "Gmail", desc: "集中找电子机票和订单邮件", icon: "✉️", color: "#ea4335", url: "https://mail.google.com" },
        { name: "Google Calendar", desc: "把航班和集合时间塞进日历提醒", icon: "📅", color: "#4285f4", url: "https://calendar.google.com" },
        { name: "XE", desc: "看汇率和大致换算", icon: "💱", color: "#0a3d91", url: "https://www.xe.com" },
        { name: "Photos", desc: "回程时及时备份照片更安心", icon: "📸", color: "#34a853", url: "https://photos.google.com" },
      ],
    },
  ],
};

const DATA_STORAGE_KEY = "travel-planner-data-v2";
const CHECK_STORAGE_PREFIX = "trip-check-";
const HIDDEN_OVERVIEW_CARD_LABELS = new Set(["预算风格", "页面使用", "体力分布", "住宿安排"]);
const ROUTE_MAP_ASSET = "outputs/singapore-kota-kinabalu-route-map.svg";
const SHOW_STAY_PLAN_META = false;

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function normalizeAmpersands(value) {
  if (typeof value !== "string") {
    return value;
  }

  return value.replace(/＆/g, "&");
}

function normalizeTripData(input = {}) {
  const base = cloneData(defaultTripData);
  const normalizedTabs = (Array.isArray(input.tabs) ? input.tabs : base.tabs).filter(
    (tab) => tab && tab.id !== "budget",
  );
  const legacyRouteLink = "https://www.google.com/maps/search/?api=1&query=Singapore+Kota+Kinabalu";
  const normalizedRouteLink =
    typeof input.routeLink === "string" && input.routeLink && input.routeLink !== legacyRouteLink
      ? input.routeLink
      : base.routeLink;

  return {
    ...base,
    ...input,
    badge: normalizeAmpersands(typeof input.badge === "string" ? input.badge : base.badge),
    title: normalizeAmpersands(typeof input.title === "string" ? input.title : base.title),
    routeLabel: normalizeAmpersands(typeof input.routeLabel === "string" ? input.routeLabel : base.routeLabel),
    routeLink: normalizedRouteLink,
    highlight: { ...base.highlight, ...(input.highlight || {}) },
    stats: Array.isArray(input.stats) ? input.stats : base.stats,
    heroStops: Array.isArray(input.heroStops) ? input.heroStops : base.heroStops,
    tabs: normalizedTabs.length ? normalizedTabs : base.tabs,
    overviewCards: Array.isArray(input.overviewCards) ? input.overviewCards : base.overviewCards,
    routeReasons: Array.isArray(input.routeReasons) ? input.routeReasons : base.routeReasons,
    stayPlan: Array.isArray(input.stayPlan) ? input.stayPlan : base.stayPlan,
    routeStops: Array.isArray(input.routeStops) ? input.routeStops : base.routeStops,
    segments: Array.isArray(input.segments) ? input.segments : base.segments,
    days: Array.isArray(input.days) ? input.days : base.days,
    budget: Array.isArray(input.budget) ? input.budget : base.budget,
    budgetNotes: Array.isArray(input.budgetNotes) ? input.budgetNotes : base.budgetNotes,
    budgetRisks: Array.isArray(input.budgetRisks) ? input.budgetRisks : base.budgetRisks,
    weather: Array.isArray(input.weather) ? input.weather : base.weather,
    layers: Array.isArray(input.layers) ? input.layers : base.layers,
    weatherAlerts: Array.isArray(input.weatherAlerts) ? input.weatherAlerts : base.weatherAlerts,
    checklistGroups: Array.isArray(input.checklistGroups) ? input.checklistGroups : base.checklistGroups,
    prepReminders: Array.isArray(input.prepReminders) ? input.prepReminders : base.prepReminders,
    toolkitGroups: Array.isArray(input.toolkitGroups) ? input.toolkitGroups : base.toolkitGroups,
  };
}

function loadTripData() {
  try {
    const saved = localStorage.getItem(DATA_STORAGE_KEY);
    if (saved) {
      return normalizeTripData(JSON.parse(saved));
    }
  } catch (error) {
    console.warn("Could not load saved trip data.", error);
  }

  return cloneData(defaultTripData);
}

function persistTripData() {
  try {
    localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(tripData));
    return true;
  } catch (error) {
    console.warn("Could not persist trip data.", error);
    return false;
  }
}

function clearSavedTripData() {
  try {
    localStorage.removeItem(DATA_STORAGE_KEY);
  } catch (error) {
    console.warn("Could not clear saved trip data.", error);
  }
}

let tripData = loadTripData();

const elements = {
  badge: document.querySelector("#trip-badge"),
  kicker: document.querySelector("#trip-kicker"),
  title: document.querySelector("#trip-title"),
  summary: document.querySelector("#trip-summary"),
  stats: document.querySelector("#hero-stats"),
  route: document.querySelector("#trip-route"),
  heroStops: document.querySelector("#hero-stops"),
  tabbar: document.querySelector("#tabbar"),
  overviewCards: document.querySelector("#overview-cards"),
  routeReasons: document.querySelector("#route-reasons"),
  stayPlan: document.querySelector("#stay-plan"),
  overviewDetailGrid: document.querySelector("#overview-detail-grid"),
  routeReasonsCard: document.querySelector("#route-reasons-card"),
  stayPlanCard: document.querySelector("#stay-plan-card"),
  highlight: document.querySelector("#highlight-callout"),
  routeStops: document.querySelector("#route-stops"),
  routeLink: document.querySelector("#route-link"),
  routeSegments: document.querySelector("#route-segments"),
  dailySummary: document.querySelector("#daily-summary"),
  dayList: document.querySelector("#day-list"),
  budgetCards: document.querySelector("#budget-cards"),
  budgetNotes: document.querySelector("#budget-notes"),
  budgetRisks: document.querySelector("#budget-risks"),
  weatherCards: document.querySelector("#weather-cards"),
  weatherNotes: document.querySelector("#weather-notes"),
  checklistGroups: document.querySelector("#checklist-groups"),
  prepReminders: document.querySelector("#prep-reminders"),
  toolkitGroups: document.querySelector("#toolkit-groups"),
  expandAll: document.querySelector("#expand-all-days"),
  collapseAll: document.querySelector("#collapse-all-days"),
  resetChecklist: document.querySelector("#reset-checklist"),
  editorPanel: document.querySelector("#editor-panel"),
  editorBackdrop: document.querySelector("#editor-backdrop"),
  closeEditor: document.querySelector("#close-editor"),
  editorBadge: document.querySelector("#editor-badge"),
  editorKicker: document.querySelector("#editor-kicker"),
  editorTitleInput: document.querySelector("#editor-title-input"),
  editorRouteLabel: document.querySelector("#editor-route-label"),
  editorSummary: document.querySelector("#editor-summary"),
  editorJson: document.querySelector("#editor-json"),
  applyQuickEdit: document.querySelector("#apply-quick-edit"),
  applyJsonEdit: document.querySelector("#apply-json-edit"),
  resetTripData: document.querySelector("#reset-trip-data"),
  editorStatus: document.querySelector("#editor-status"),
};

const panels = Array.from(document.querySelectorAll(".panel"));
let activePanel = "overview";

function renderHeroTitle(titleText) {
  if (!elements.title) {
    return;
  }

  const normalizedTitle = normalizeAmpersands(titleText || "");
  const titleWithBreak = normalizedTitle.replace(/\s*(\d+\s*天)/, "\n$1");
  const titleParts = titleWithBreak.split("&");

  elements.title.replaceChildren();

  titleParts.forEach((part, index) => {
    part.split("\n").forEach((line, lineIndex) => {
      if (line) {
        elements.title.appendChild(document.createTextNode(line));
      }

      if (lineIndex < part.split("\n").length - 1) {
        elements.title.appendChild(document.createElement("br"));
      }
    });

    if (index < titleParts.length - 1) {
      const ampersand = document.createElement("span");
      ampersand.className = "hero__amp";
      ampersand.textContent = "&";
      elements.title.appendChild(ampersand);
    }
  });
}

function getPanelElement(panelId) {
  return document.querySelector(`#panel-${panelId}`);
}

function setActivePanel(panelId) {
  if (!panelId || panelId === activePanel) {
    return;
  }

  activePanel = panelId;
  renderTabs();
}

function scrollToPanel(panelId) {
  const panel = getPanelElement(panelId);
  if (!panel) {
    return;
  }

  setActivePanel(panelId);
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function syncActivePanelToScroll() {
  if (!panels.length) {
    return;
  }

  const marker = Math.max(120, window.innerHeight * 0.24);
  let nextPanel = panels[0].dataset.panel;

  panels.forEach((panel) => {
    if (panel.getBoundingClientRect().top <= marker) {
      nextPanel = panel.dataset.panel;
    }
  });

  setActivePanel(nextPanel);
}

function syncActivePanelToHash() {
  const targetId = window.location.hash.replace(/^#/, "");
  if (!targetId) {
    return;
  }

  const targetPanel = panels.find((panel) => panel.id === targetId);
  if (targetPanel) {
    setActivePanel(targetPanel.dataset.panel);
  }
}

function renderStats() {
  const statOverrides = [
    { label: "天数", value: "9天8晚", valueClass: "stat-card__value--nowrap" },
    { label: "飞行段", value: "4段", valueClass: "stat-card__value--nowrap" },
    { label: "住宿分配", value: "3 + 4 + 1晚", valueClass: "stat-card__value--nowrap" },
    { label: "旅行风格", value: "城市<br>乐园<br>海岛", valueClass: "stat-card__value--stack" },
  ];

  elements.stats.innerHTML = tripData.stats
    .map(
      (item, index) => {
        const displayItem = statOverrides[index] || item;
        return `
        <article class="stat-card">
          <span class="stat-card__value ${displayItem.valueClass || ""}">${displayItem.value}</span>
          <span class="stat-card__label">${displayItem.label}</span>
        </article>
      `;
      },
    )
    .join("");
}

function renderStopList(stops, compact = false) {
  return stops
    .map(
      (stop) => `
        <div class="stop-pill">
          <span class="stop-pill__dot" aria-hidden="true"></span>
          <div class="stop-pill__body">
            <div class="stop-pill__title">${stop.title}</div>
            <div class="stop-pill__meta">${stop.meta}</div>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderTabs() {
  elements.tabbar.innerHTML = tripData.tabs
    .map(
      (tab) => `
        <a
          class="tabbar__button ${tab.id === activePanel ? "is-active" : ""}"
          href="#panel-${tab.id}"
          data-panel-link="${tab.id}"
          ${tab.id === activePanel ? 'aria-current="page"' : ""}
        >
          ${tab.label}
        </a>
      `,
    )
    .join("");
}

function renderOverview() {
  const visibleOverviewCards = tripData.overviewCards.filter(
    (item) => !HIDDEN_OVERVIEW_CARD_LABELS.has(item.label),
  );

  elements.overviewCards.innerHTML = visibleOverviewCards
    .map(
      (item) => `
        <article class="info-card reveal">
          <div class="info-card__label">${item.label}</div>
          <div class="info-card__value">${item.value}</div>
          <div class="info-card__note">${item.note}</div>
        </article>
      `,
    )
    .join("");

  elements.routeReasons.innerHTML = "";
  elements.routeReasonsCard.hidden = true;

  elements.stayPlan.innerHTML = tripData.stayPlan
    .map(
      (item) => `
        <article class="stay-item">
          <div class="stay-item__title">${item.title}</div>
          <div
            class="stay-item__meta ${SHOW_STAY_PLAN_META ? "" : "stay-item__meta--placeholder"}"
            ${SHOW_STAY_PLAN_META ? "" : 'aria-hidden="true"'}
          >
            ${SHOW_STAY_PLAN_META ? item.meta : "&nbsp;"}
          </div>
        </article>
      `,
    )
    .join("");

  elements.stayPlanCard.hidden = false;
  elements.overviewDetailGrid.style.gridTemplateColumns = "1fr";

  elements.highlight.hidden = true;
}

function renderRoute() {
  if (elements.routeLink) {
    elements.routeLink.href = tripData.routeLink;
  }

  if (elements.routeStops) {
    elements.routeStops.innerHTML = `
      <figure class="route-visual">
        <img
          class="route-visual__image"
          src="${ROUTE_MAP_ASSET}"
          alt="${tripData.routeLabel} 地理轨迹图"
        >
        <figcaption class="route-visual__caption">
          把关键停留城市和日期串联起来，一眼看清这趟旅程从出发到返程的顺序。
        </figcaption>
      </figure>
    `;
  }

  if (elements.routeSegments) {
    elements.routeSegments.innerHTML = "";
    elements.routeSegments.hidden = true;
  }
}

function renderDays() {
  elements.dailySummary.textContent = `示例行程共 ${tripData.days.length} 天，你可以保留结构，只替换每天的数据。`;

  elements.dayList.innerHTML = tripData.days
    .map(
      (day, index) => `
        <article class="day-card ${index === 0 ? "is-open" : ""}" data-tone="${day.tone}">
          <button class="day-card__toggle" type="button" aria-expanded="${index === 0}">
            <div class="day-card__badge">${day.code}</div>
            <div>
              <p class="day-card__date">${day.date}</p>
              <h3 class="day-card__title">${day.title}</h3>
              <p class="day-card__summary">${day.summary}</p>
            </div>
            <div class="day-card__chips">
              <span class="chip">🚗 ${day.drive}</span>
              <span class="chip">🏨 ${day.stay}</span>
            </div>
            <span class="day-card__arrow" aria-hidden="true">+</span>
          </button>
          <div class="day-card__body">
            <div class="day-card__inner">
              <div class="timeline">
                ${day.timeline
                  .map(
                    (item) => `
                      <div class="timeline__item">
                        <div class="timeline__time">${item.time}</div>
                        <div class="timeline__title">${item.title}</div>
                        <div class="timeline__desc">${item.desc}</div>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
              <div class="tag-row">
                ${day.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
              </div>
              ${day.note ? `<div class="day-note">${day.note}</div>` : ""}
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderBudget() {
  if (!elements.budgetCards || !elements.budgetNotes || !elements.budgetRisks) {
    return;
  }

  elements.budgetCards.innerHTML = tripData.budget
    .map(
      (item) => `
        <article class="budget-item reveal">
          <div class="card__eyebrow">Budget Line</div>
          <div class="budget-item__title">${item.title}</div>
          <div class="budget-item__amount">${item.amount}</div>
          <div class="budget-item__meta">${item.meta}</div>
        </article>
      `,
    )
    .join("");

  elements.budgetNotes.innerHTML = tripData.budgetNotes.map((item) => `<li>${item}</li>`).join("");
  elements.budgetRisks.innerHTML = tripData.budgetRisks.map((item) => `<li>${item}</li>`).join("");
}

function renderWeather() {
  elements.weatherCards.innerHTML = tripData.weather
    .map(
      (item) => `
        <article class="weather-card reveal">
          <div class="weather-card__icon">${item.icon}</div>
          <div class="weather-card__name">${item.name}</div>
          <div class="weather-card__range">${item.range}</div>
          <div class="weather-card__tip">${item.tip}</div>
        </article>
      `,
    )
    .join("");

  elements.weatherNotes.innerHTML = [
    ...tripData.layers.map((item) => ({ label: "叠穿原则", text: item, tone: "layer" })),
    ...tripData.weatherAlerts.map((item) => ({ label: "高频提醒", text: item, tone: "alert" })),
  ]
    .map(
      (item) => `
        <article class="weather-note reveal" data-tone="${item.tone}">
          <div class="weather-note__label">${item.label}</div>
          <div class="weather-note__text">${item.text}</div>
        </article>
      `,
    )
    .join("");
}

function renderWeather() {
  elements.weatherCards.innerHTML = tripData.weather
    .map(
      (item) => `
        <article class="weather-card reveal">
          <div class="weather-card__icon">${item.icon}</div>
          <div class="weather-card__name">${item.name}</div>
          <div class="weather-card__range">${item.range}</div>
          <div class="weather-card__tip">${item.tip}</div>
        </article>
      `,
    )
    .join("");

  if (elements.weatherNotes) {
    elements.weatherNotes.innerHTML = "";
    elements.weatherNotes.hidden = true;
  }

  return;

  const alertCards = [
    {
      icon: "🌦️",
      name: "天气提醒",
      tip: tripData.weatherAlerts[0] || "",
    },
    {
      icon: "⛵",
      name: "出海提醒",
      tip: [tripData.weatherAlerts[1], tripData.weatherAlerts[2]].filter(Boolean).join(" "),
    },
  ].filter((item) => item.tip);

  elements.weatherNotes.innerHTML = alertCards
    .map(
      (item) => `
        <article class="weather-card weather-card--compact reveal">
          <div class="weather-card__icon">${item.icon}</div>
          <div class="weather-card__name">${item.name}</div>
          <div class="weather-card__tip">${item.tip}</div>
        </article>
      `,
    )
    .join("");
}

function renderChecklist() {
  elements.checklistGroups.innerHTML = tripData.checklistGroups
    .map(
      (group) => `
        <article class="checklist-group reveal">
          <h3 class="checklist-group__title">${group.title}</h3>
          <div class="checklist-list">
            ${group.items
              .map(
                (item) => `
                  <label class="check-item">
                    <input type="checkbox" data-check-id="${item.id}">
                    <span>
                      <span class="check-item__label">${item.label}</span>
                      <span class="check-item__note">${item.note}</span>
                    </span>
                  </label>
                `,
              )
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");

  elements.prepReminders.innerHTML = tripData.prepReminders.map((item) => `<li>${item}</li>`).join("");
}

function renderToolkit() {
  elements.toolkitGroups.innerHTML = tripData.toolkitGroups
    .map(
      (group) => `
        <article class="toolkit-group reveal">
          <h3 class="toolkit-group__title">${group.title}</h3>
          <div class="tool-grid">
            ${group.tools
              .map(
                (tool) => `
                  <a class="tool-card" href="${tool.url}" target="_blank" rel="noreferrer">
                    <span class="tool-card__icon" style="background:${tool.color}">${tool.icon}</span>
                    <span>
                      <span class="tool-card__name">${tool.name}</span>
                      <span class="tool-card__desc">${tool.desc}</span>
                    </span>
                  </a>
                `,
              )
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function initHero() {
  elements.badge.textContent = tripData.badge;
  elements.kicker.textContent = tripData.kicker;
  renderHeroTitle(tripData.title);
  elements.summary.textContent = tripData.summary;
  elements.route.textContent = tripData.routeLabel;
  elements.heroStops.innerHTML = renderStopList(tripData.heroStops, true);
  document.title = normalizeAmpersands(tripData.title) || "Roadtrip Planner Template";
}

function syncEditorFields() {
  if (!elements.editorBadge) {
    return;
  }

  elements.editorBadge.value = tripData.badge || "";
  elements.editorKicker.value = tripData.kicker || "";
  elements.editorTitleInput.value = tripData.title || "";
  elements.editorRouteLabel.value = tripData.routeLabel || "";
  elements.editorSummary.value = tripData.summary || "";
  elements.editorJson.value = JSON.stringify(tripData, null, 2);
}

function setEditorStatus(message, tone = "") {
  if (!elements.editorStatus) {
    return;
  }

  elements.editorStatus.textContent = message;
  elements.editorStatus.className = `editor-status${tone ? ` is-${tone}` : ""}`;
}

function setEditorOpen(isOpen) {
  if (!elements.editorPanel || !elements.editorBackdrop) {
    return;
  }

  elements.editorPanel.hidden = !isOpen;
  elements.editorBackdrop.hidden = !isOpen;
  document.body.classList.toggle("is-editor-open", isOpen);

  if (isOpen) {
    syncEditorFields();
    setEditorStatus("");
  }
}

function applyQuickEdit() {
  tripData = normalizeTripData({
    ...tripData,
    badge: elements.editorBadge.value,
    kicker: elements.editorKicker.value,
    title: elements.editorTitleInput.value,
    routeLabel: elements.editorRouteLabel.value,
    summary: elements.editorSummary.value,
  });

  renderAllSections();
  if (persistTripData()) {
    setEditorStatus("已更新并保存在当前浏览器。", "success");
  } else {
    setEditorStatus("页面已更新，但本地保存失败。", "error");
  }
}

function applyJsonEdit() {
  try {
    const parsed = JSON.parse(elements.editorJson.value);
    tripData = normalizeTripData(parsed);
    renderAllSections();

    if (persistTripData()) {
      setEditorStatus("整站内容已更新并保存在当前浏览器。", "success");
    } else {
      setEditorStatus("页面已更新，但本地保存失败。", "error");
    }
  } catch (error) {
    setEditorStatus("格式有问题，请检查 JSON 的逗号和括号。", "error");
  }
}

function resetTripDataToDefault() {
  tripData = cloneData(defaultTripData);
  clearSavedTripData();
  renderAllSections();
  setEditorStatus("已经恢复成示例内容。", "success");
}

function bindChecklistInputs() {
  document.querySelectorAll("[data-check-id]").forEach((input) => {
    if (input.dataset.bound === "1") {
      return;
    }

    const key = `${CHECK_STORAGE_PREFIX}${input.dataset.checkId}`;

    try {
      input.checked = localStorage.getItem(key) === "1";
    } catch (error) {
      console.warn("Could not load checklist state.", error);
    }

    input.addEventListener("change", () => {
      try {
        localStorage.setItem(key, input.checked ? "1" : "0");
      } catch (error) {
        console.warn("Could not save checklist state.", error);
      }
    });

    input.dataset.bound = "1";
  });
}

function renderAllSections() {
  initHero();
  renderStats();
  renderTabs();
  renderOverview();
  renderRoute();
  renderDays();
  renderWeather();
  renderChecklist();
  renderToolkit();
  bindChecklistInputs();
  syncEditorFields();
  observeReveal();
  requestAnimationFrame(() => {
    refreshOpenDayHeights();
    syncActivePanelToHash();
    syncActivePanelToScroll();
  });
}

function refreshOpenDayHeights() {
  document.querySelectorAll(".day-card.is-open").forEach((card) => {
    const body = card.querySelector(".day-card__body");
    if (body) {
      body.style.maxHeight = `${body.scrollHeight}px`;
    }
  });
}

function toggleDayCard(card, forceOpen) {
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !card.classList.contains("is-open");
  card.classList.toggle("is-open", shouldOpen);
  const button = card.querySelector(".day-card__toggle");
  const body = card.querySelector(".day-card__body");
  if (button) {
    button.setAttribute("aria-expanded", String(shouldOpen));
  }
  if (body) {
    body.style.maxHeight = shouldOpen ? `${body.scrollHeight}px` : "0px";
  }
}

function bindInteractions() {
  document.addEventListener("click", (event) => {
    const dayToggle = event.target.closest(".day-card__toggle");
    if (dayToggle) {
      toggleDayCard(dayToggle.closest(".day-card"));
    }
  });

  if (elements.expandAll) {
    elements.expandAll.addEventListener("click", () => {
      document.querySelectorAll(".day-card").forEach((card) => toggleDayCard(card, true));
      scrollToPanel("daily");
    });
  }

  elements.collapseAll.addEventListener("click", () => {
    document.querySelectorAll(".day-card").forEach((card) => toggleDayCard(card, false));
  });

  elements.resetChecklist.addEventListener("click", () => {
    document.querySelectorAll("[data-check-id]").forEach((input) => {
      input.checked = false;
      try {
        localStorage.removeItem(`${CHECK_STORAGE_PREFIX}${input.dataset.checkId}`);
      } catch (error) {
        console.warn("Could not reset checklist state.", error);
      }
    });
  });

  if (elements.applyQuickEdit) {
    elements.applyQuickEdit.addEventListener("click", applyQuickEdit);
  }

  if (elements.applyJsonEdit) {
    elements.applyJsonEdit.addEventListener("click", applyJsonEdit);
  }

  if (elements.resetTripData) {
    elements.resetTripData.addEventListener("click", resetTripDataToDefault);
  }

  if (elements.closeEditor) {
    elements.closeEditor.addEventListener("click", () => setEditorOpen(false));
  }

  if (elements.editorBackdrop) {
    elements.editorBackdrop.addEventListener("click", () => setEditorOpen(false));
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && elements.editorPanel && !elements.editorPanel.hidden) {
      setEditorOpen(false);
    }
  });

  window.addEventListener("hashchange", syncActivePanelToHash);
  window.addEventListener("scroll", syncActivePanelToScroll, { passive: true });
  window.addEventListener("resize", () => {
    refreshOpenDayHeights();
    syncActivePanelToScroll();
  });
}

function observeReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  revealItems.forEach((item) => {
    if (!item.classList.contains("is-visible")) {
      observer.observe(item);
    }
  });
}

function init() {
  renderAllSections();
  bindInteractions();
}

init();
