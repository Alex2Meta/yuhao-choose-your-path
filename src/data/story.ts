export interface StoryNode {
  id: string;
  title: string;
  description: string;
  choices: Choice[];
  isEnding?: boolean;
}

export interface Choice {
  text: string;
  nextNode: string;
  description?: string;
}

export const storyNodes: Record<string, StoryNode> = {
  start: {
    id: 'start',
    title: '12岁的夏天',
    description: `1999年，你12岁，正在山东老家过暑假。

你坐在院子里，看着天上的星星，心里想着：
"我长大了要做什么？"

你从小就喜欢拆东西，家里的闹钟、收音机都被你拆开研究过。
你对科技和机械特别着迷，总想着有一天能做出改变世界的东西。

这时候，老师在作文课上布置了题目《我的理想》，你会怎么写？`,
    choices: [
      {
        text: '做一个科学家，未来要改变世界',
        nextNode: 'dream_big',
        description: '你在作文本上写下："我未来要做改变世界的科学家和企业家"'
      },
      {
        text: '做一个老师，安稳教书育人',
        nextNode: 'ending_teacher',
        description: '你觉得老师受人尊敬，生活安稳也很好'
      },
      {
        text: '还没想好，走一步看一步',
        nextNode: 'dream_uncertain',
        description: '12岁的你，对未来还很迷茫'
      }
    ]
  },
  dream_big: {
    id: 'dream_big',
    title: '立下大志',
    description: `老师给你的作文打了最高分，在班里朗读了你的理想。

你心里暗暗记住了这个目标。从那以后，你学习更加努力，
尤其是数学和物理，总是年级前几名。

很快，十几年过去了，你凭借优异的成绩考上了...`,
    choices: [
      {
        text: '清华大学，继续追逐梦想',
        nextNode: 'tsinghua',
        description: '你考上了清华大学精密仪器系'
      }
    ]
  },
  tsinghua: {
    id: 'tsinghua',
    title: '清华园岁月',
    description: `来到清华园，你接触到了最前沿的科技。

这里高手如云，你每天泡在实验室里，跟着导师做科研，
练就了扎实的工程技术功底。

硕士毕业了，面前有几个选择：`,
    choices: [
      {
        text: '出国读博，继续深造',
        nextNode: 'study_abroad',
        description: '去国外顶尖大学拿个博士学位'
      },
      {
        text: '加入小米生态链，直接创业实践',
        nextNode: 'xiaomi',
        description: '加入刚刚兴起的小米生态链，做智能硬件'
      },
      {
        text: '进大厂做工程师，稳定高薪',
        nextNode: 'ending_big_engineer',
        description: '进入顶级互联网公司，过上安稳生活'
      }
    ]
  },
  study_abroad: {
    id: 'study_abroad',
    title: '海外深造',
    description: `你去了美国顶尖大学读博，接触到了最前沿的机器人技术。

几年后，你博士毕业，硅谷的科技公司给了你丰厚的offer...`,
    choices: [
      {
        text: '留在硅谷工作',
        nextNode: 'ending_silicon_valley',
        description: '在美国安居乐业，做一名硅谷工程师'
      },
      {
        text: '回国创业，追逐年少梦想',
        nextNode: 'xiaomi',
        description: '不忘初心，回国实现12岁时的理想'
      }
    ]
  },
  xiaomi: {
    id: 'xiaomi',
    title: '加入小米生态链',
    description: `2015年，你加入小米生态链，负责智能清洁项目。

你发现高端吸尘器马达技术被国外巨头垄断，价格卖得很贵，
国内用户买不起好产品。你认定这是一个机会，决定自己干！`,
    choices: [
      {
        text: '出来自己创业，攻克核心技术',
        nextNode: 'found_dreame',
        description: '创办追觅科技，自己干'
      },
      {
        text: '在小米继续做，风险小',
        nextNode: 'ending_mi_engineer',
        description: '稳扎稳打，在大平台做高管也不错'
      }
    ]
  },
  found_dreame: {
    id: 'found_dreame',
    title: '创立追觅科技',
    description: `2017年，你创办了追觅科技。

你把所有资金都投入到研发上，目标就是攻克高速数字马达这个核心技术。
团队每天泡在实验室，试了一次又一次，钱快烧完了，技术还没突破...

你现在的选择是：`,
    choices: [
      {
        text: '继续砸钱研发，就算烧光钱也不放弃',
        nextNode: 'breakthrough',
        description: '核心技术必须拿下来，背水一战'
      },
      {
        text: '先做代工，赚钱养活团队再说',
        nextNode: 'ending_odetm',
        description: '活下去比什么都重要'
      }
    ]
  },
  breakthrough: {
    id: 'breakthrough',
    title: '技术突破',
    description: `功夫不负有心人，你带领团队终于研发出了
转速超过18万转/分钟的高速数字马达，打破了国外垄断！

有了核心技术，追觅的产品一下子打开了市场，
从无线吸尘器做到扫地机器人，卖到了全世界100多个国家。

现在公司发展起来了，下一步怎么走？`,
    choices: [
      {
        text: '继续深耕家用机器人，让AI改变生活',
        nextNode: 'ending_robot_kingdom',
        description: '打造一个智能机器人家族'
      },
      {
        text: '拓展更多品类，做全品类智能家电',
        nextNode: 'ending_smart_home',
        description: '成为全球顶级的智能家电品牌'
      }
    ]
  },
  ending_teacher: {
    id: 'ending_teacher',
    title: '人民教师',
    description: `你成了一名老师，教书育人，桃李满天下。
生活安稳幸福，你培养了一批又一批学生，他们中很多人去追逐了科技梦想。

这也是一条很棒的人生道路！`,
    choices: [],
    isEnding: true
  },
  ending_big_engineer: {
    id: 'ending_big_engineer',
    title: '大厂工程师',
    description: `你进入了顶尖互联网公司，拿着高薪，生活优渥。
你参与了很多热门产品，改变了亿万人的生活，日子过得不错。`,
    choices: [],
    isEnding: true
  },
  dream_uncertain: {
    id: 'dream_uncertain',
    title: '迷茫的青春',
    description: `因为没有明确目标，你学习动力不足，
最后考上了一所普通大学，毕业后找了一份普通工作。

其实平凡的生活也挺好，只是你偶尔还会想起，
12岁那年夏天，院子里那颗星星...`,
    choices: [],
    isEnding: true
  },
  ending_silicon_valley: {
    id: 'ending_silicon_valley',
    title: '硅谷工程师',
    description: `你留在了硅谷，成了一名工程师，
收入很高，生活安逸，但是你偶尔还是会想起
12岁时那个改变世界的梦想...`,
    choices: [],
    isEnding: true
  },
  ending_mi_engineer: {
    id: 'ending_mi_engineer',
    title: '小米高管',
    description: `你在小米做到了高管，生活安稳，
看着身边朋友创业成功，你心里偶尔也会想，
如果当年自己出来干，会是什么结果呢...`,
    choices: [],
    isEnding: true
  },
  ending_odetm: {
    id: 'ending_odetm',
    title: '代工企业',
    description: `你给别人做代工，企业活着，但是没有核心技术，
也没有自己的品牌，利润微薄，一直做不大。`,
    choices: [],
    isEnding: true
  },
  ending_robot_kingdom: {
    id: 'ending_robot_kingdom',
    title: '机器人王国缔造者',
    description: `你坚持深耕智能机器人领域，
追觅成了全球家用机器人领域的领导者，
每一台追觅机器人都在帮用户解放双手，
让人们有更多时间去做自己喜欢的事情。

你实现了12岁那年许下的愿望——**改变世界**。

恭喜你，走完了这趟旅程！`,
    choices: [],
    isEnding: true
  },
  ending_smart_home: {
    id: 'ending_smart_home',
    title: '全球家电巨头',
    description: `追觅成长为了全球顶级的智能家电品牌，
在世界各地都能看到追觅的产品，改变着亿万人的生活。

你从12岁那个少年，一步步走到了这里，
梦想终成现实。

恭喜你，走完了这趟旅程！`,
    choices: [],
    isEnding: true
  }
};
