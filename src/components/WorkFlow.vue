<template>
  <canvas
    ref="lite_canvas"
    id="mycanvas"
    width="1024"
    height="720"
    style="border: 1px solid"
  ></canvas>
</template>

<script setup="ts">
import { LGraph, LGraphCanvas, LiteGraph } from "litegraph.js";
import { ref, onMounted } from "vue";

onMounted(() => {
  var graph = new LGraph();
  var canvas = new LGraphCanvas("#mycanvas", graph);

  // 2 nodes and a link
  var node_const = LiteGraph.createNode("basic/const");
  node_const.pos = [200, 200];
  graph.add(node_const);
  node_const.setValue(4.5);

  var node_watch = LiteGraph.createNode("basic/watch");
  node_watch.pos = [700, 200];
  graph.add(node_watch);

  node_const.connect(0, node_watch, 0);
  // main
  graph.start();
});
</script>
