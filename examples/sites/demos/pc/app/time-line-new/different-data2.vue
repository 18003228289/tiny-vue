<template>
  <tiny-time-line :data="data" auto-color-field="color1" vertical :active="active" @click="click"></tiny-time-line>
</template>

<script>
import { Modal } from '@opentiny/vue'
import TimeLineNew from '@opentiny/vue-time-line-new'
import { IconLoading } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTimeLine: TimeLineNew
  },
  data() {
    return {
      active: 6,
      data: [
        { name: '节点标题', time: '2022-11-11 00:01:30', color1: 'success' },
        { name: '节点标题', time: '2022-11-12 14:20:15', color1: IconLoading() },
        { name: '节点标题', time: '2022-11-14 20:45:50', color1: 'error' },
        { name: '节点标题', time: '2022-11-11 00:01:30' },
        { name: '节点标题', time: '2022-11-14 20:45:50', color1: 'warning' },
        { name: '节点标题', time: '2022-11-11 00:01:30' }
      ]
    }
  },
  methods: {
    click(index, node) {
      this.active = index
      Modal.message({
        message: 'click 事件，当前 index：' + index + ' 节点信息：' + node.name + ',' + node.time,
        status: 'info'
      })
    }
  }
}
</script>
