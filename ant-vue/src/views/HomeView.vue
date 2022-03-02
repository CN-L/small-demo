<template>
  <a-table bordered :columns="columns" :components="components" :data-source="data">
    <template v-slot:action>
      <a href="javascript:;">Delete</a>
    </template>
  </a-table>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    width: 200
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    width: 100
  },
  {
    title: 'Type',
    dataIndex: 'type',
    width: 100
  },
  {
    title: 'Note',
    dataIndex: 'note',
    width: 100
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }

]
const data = [
  {
    key: 0,
    date: '2018-02-11',
    amount: 120,
    type: 'income',
    note: 'transfer'
  },
  {
    key: 1,
    date: '2018-03-11',
    amount: 243,
    type: 'income',
    note: 'transfer'
  },
  {
    key: 2,
    date: '2018-04-11',
    amount: 98,
    type: 'income',
    note: 'transfer'
  }
];
const draggingMap = {};
columns.forEach(col => {
  draggingMap[col.key] = col.width;
});
const draggingState = Vue.observable(draggingMap);
console.log(draggingState)
const resizeableTitle = (h, props, children) => {
  let thDom = null;
  const { key, ...restProps } = props;
  const col = columns.find(col => {
    const k = col.dataIndex || col.key;
    return k === key;
  });
  if (!col.width) {
    return <th {...restProps}>{children}</th>;
  }
  const onDrag = x => {
    draggingState[key] = 0;
    col.width = Math.max(x, 1);
  };

  const onDragstop = () => {
    draggingState[key] = thDom.getBoundingClientRect().width;
  };
  return (
    <th {...restProps} v-ant-ref={r => (thDom = r)} width={col.width} class="resize-table-th">
      {children}
      <vue-draggable-resizable
        key={col.key}
        class="table-draggable-handle"
        x={draggingState[key] || col.width}
        z={1}
        axis="x"
        prevent-deactivation={true}
        draggable={true}
        resizable={false}
        onDragging={onDrag}
        onDragstop={onDragstop}
      ></vue-draggable-resizable>
    </th>
  );
};

export default {
  name: 'HomeView',
  data() {
    this.components = {
      header: {
        cell: resizeableTitle
      }
    };
    return {
      columns,
      data
    }
  }
}
</script>
<style lang="less">
.resize-table-th {
  position: relative;
   .table-draggable-handle {
    height: 100% !important;
    width: 100%;
    bottom: 0;
    left: 0;
    opacity: 0;
    cursor: col-resize;
    touch-action: none;
    position: absolute;
  }
}
</style>
