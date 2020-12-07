const res = {
  code: 0,
  msg: '请求成功',
  data: {
    itemList: [
      {
        id: 34,
        pid: 0,
        name: '测试专用',
        catePath: 'http://119.3.216.203:7780/ceshi',
        iconPath: '',
        type: 2,
        listType: 1,
        isCover: 0,
        cover: '',
        status: 1,
        sort: 125,
        mark: true
      },
      {
        id: 4,
        pid: 0,
        name: '网上党校',
        catePath: 'http://119.3.216.203:7780/jiankangyinshi',
        iconPath: 'http://admin.ysdj.com/jkys',
        type: 1,
        listType: 1,
        isCover: 0,
        cover: '/itemcate/20200714/cdb679eb67ddedaf616.jpg',
        status: 1,
        sort: 600,
        mark: true
      },
      {
        id: 8,
        pid: 0,
        name: '直播',
        catePath: 'http://119.3.216.203:7780/zhibo',
        iconPath: 'http://admin.ysdj.com/zhb',
        type: 1,
        listType: 1,
        isCover: 0,
        cover: '/itemcate/20200714/cdb679eb67ddedaf616.jpg',
        status: 1,
        sort: 750,
        mark: true
      },
      {
        id: 7,
        pid: 0,
        name: '自建栏目1',
        catePath: 'http://119.3.216.203:7780/jiankangyinshi',
        iconPath: 'http://admin.ysdj.com/jkys',
        type: 2,
        listType: 1,
        isCover: 1,
        cover:
          'http://admin.ysdj.com/itemcate/20200714/cdb679eb67ddedaf616.jpg',
        status: 1,
        sort: 900,
        mark: true
      }
    ]
  }
};

console.log(res);
