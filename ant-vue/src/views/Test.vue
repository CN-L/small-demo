<template>
<div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
    <vue-draggable-resizable :w="100" :h="100" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
      <p>你可以进行拖拽和移动<br>
      X坐标为: {{ x }};Y坐标为: {{ y }} <br> 宽为: {{ width }} ;高为: {{ height }}</p>
    </vue-draggable-resizable>
  </div>
</template>
<script>
export default {
  name: 'TestIndex',
  data() {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
  }
}

</script>
<style lang="scss">

</style>
