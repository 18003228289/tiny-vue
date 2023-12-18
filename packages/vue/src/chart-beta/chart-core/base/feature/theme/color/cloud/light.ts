import gray from './gray'

// 图表的状态颜色
const colorState = {
  // 紧急色
  errorColor: '#F23030',
  // 重要告警色
  warningColor: '#FF8800',
  // 次要告警色
  subwarningColor: '#F7D916',
  // 成功色
  successColor: '#5CB300',
  // 提示色
  infoColor: '#1476FF',
  // 失效 '#C2C2C2'
  disabledColor: gray.colorGray40
}

// 图表内置的颜色组
const colorGroup = ['#1476FF', '#0BB8B2', '#6E51E0', '#5CB300', '#FCBE1E', '#33BCF2', '#BA53E6', '#EB4696']

const light = {
  ...gray,
  colorGroup,
  colorState
}

export default light
export { colorGroup, colorState }