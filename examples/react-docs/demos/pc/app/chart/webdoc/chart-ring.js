export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'ring-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['ringChart.jsx']
    }
  ],
  apis: [{ 'name': 'chart-ring', 'type': 'component', 'props': [], 'events': [], 'slots': [] }],
  types: [
    {
      name: 'IChartSettings',
      type: 'interface',
      code: `
interface IChartSettings {
  dataType: string // 数据类型，可选值: KMB , normal , percent 
  digit: number // 设置数据类型为 percent 时保留的位数，默认为2
  dimension: string // 维度，默认 columns 第一项为维度
  hoverAnimation: boolean // 是否开启 hover 在扇区上的放大动画效果，默认值为 true 
  itemStyle: object // 图形样式，
  label: object // 环图图形上的文本标签，
  labelLine: object // 标签的视觉引导线样式，
  legendLimit: number //  legend 显示数量限制， legend 数量过多会导致环图样式错误，限制 legend 最大值并且当超过此值时，隐藏 legend 可以解决这个问题
  limitShowNum: number // 设置超过此数字时使用‘其他’代替，此时数据会按照由大到小顺序显示
  metrics: string // 指标，默认 columns 第二项为指标
  offsetY: number/string // 纵向偏移量，支持数值和百分比
  radius: array // 环图外半径与内半径，数组元素支持数值和百分比，如：[50,70]或['50%','70%']
  roseType: string // 显示为南丁格尔玫瑰图，默认不展示为南丁格尔玫瑰图，可设置为' radius ',' area '
  selectedMode: string // 选中模式，可选值： single , multiple ，默认为 false 
}
`
    }
  ]
}
