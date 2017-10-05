const state = [
  {
    name: 'Statistic',
    icon: 'ti-clipboard',
    path: '/admin/stats',
    widgets: [
    ]
  }
]

const mutations = {
  SOCKET_CONNECT: function (state, status) {
    state[0].widgets.push({
      type: 'chart',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
          [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
        ]
      },
      options: {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '245px'
      }
    })
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}
