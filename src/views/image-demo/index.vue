<template>
  <div style="margin:16px">
    <div>
      <a-space style="margin-bottom:16px">
        <a-button type="primary" @click="setAddMode">新增模式</a-button>
        <a-button type="primary" @click="setSelectMode">拖动模式</a-button>
      </a-space>
    </div>
    <div>
      <div>当前模式: {{ mode }}</div>
      <div>拖动模式下，点中“点”后，按 delete 键删除当前“点”</div>
      <a-space direction="horizontal" align="start">
        <canvas class="image-container"></canvas>
        <div>
          <h3>差异点列表</h3>
          <ul>
            <li v-for="item in dataList" :key="item.index">{{item.label}} - {{ item.coor }}</li>
          </ul>
        </div>
      </a-space>
    </div>

  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
// https://github.com/heylight/canvas-select
import CanvasSelect from 'canvas-select';

let instance = null;
const option = [
  // {
  //   label: "rectangle",
  //   labelFillStyle: "#f00",
  //   textFillStyle: "#fff",
  //   coor: [[184, 183], [275, 238]], // required
  //   type: 1 // required
  // },
  {
    label: "差异点0",
    coor: [100, 50], // required
    type: 3 // required
  },
  // {
  //   label: "line",
  //   coor: [[470, 155], [490, 230], [493, 298]], // required
  //   type: 4 // required
  // },
  // {
  //   label: "circle",
  //   coor: [369, 197], // required
  //   radius: 38, // required
  //   type: 5 // required
  // }
];
export default {
  setup() {
    const dataList = ref([])
    const mode = ref("拖动模式")

    const setAddMode = function() {
      console.log('edit mode:>> ');
      mode.value = "新增模式"
      instance.createType = 3;
      instance.update();
    }
    const setSelectMode = function() {
      console.log('select mode:>> ');
      mode.value = "拖动模式"
      instance.createType = 0;
      instance.update();
    }
    return {
      setAddMode,
      setSelectMode,
      dataList,
      mode
    }
  },
  mounted() {
    instance = new CanvasSelect('.image-container');
    instance.setImage('https://sdimg.cn-wlcb.ufileos.com/temp/2.png');
    // console.log('instance :>> ', instance);
    // 加载数据
    instance.setData(option);
    // 0 不创建(默认)，1创建矩形，2创建多边形，3点标注，4折线标注，5圆形标注
    instance.createType = 0;
    // instance.lock = true;
    instance.on('select', (info) => {
      console.log('select', info);
      // 可对选中对参数info进行修改
      // info.label="差异点";
      // instance.update();
      // 单个形状修改填充颜色：info.fillStyle="#0f0"
      // 然后调用instance.update()更新视图
    });
    instance.on('add', (info) => {
      console.log('add :>> ', info);
      info.label="差异点"+info.index;
    })
    instance.on('updated',(result)=>{
      console.log('updated :>> ', result);
      this.dataList = result.map((item)=>{
        return {
          index:item.index,
          coor: item.coor,
          label: item.label
        }
      })
    })
  },
}

</script>

<style lang="less" scoped>
.image-container {
  width: 600px;
  height: 400px;
}
</style>
