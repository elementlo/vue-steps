<template>
  <div ref="chartDom" style="height:500px"></div>
</template>

<script>
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/title";
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";
export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    // option: {
    //   handler(val) {
    //     this.myChart.setOption(val);
    //   },
    //   deep: true
    // },
    option(val) {
      this.myChart.setOption(val);
    }
  },
  created() {
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    this.renderChart();
    addListener(this.$refs.chartDom, this.resize);
    // 绘制图表
  },
  beforeDestroy() {
    removeListener(this.$refs.charDom, this.resize);
    this.myChart.dispose();
    this.myChart = null;
  },
  methods: {
    resize() {
      this.myChart.resize();
    },
    renderChart() {
      this.myChart = echarts.init(this.$refs.chartDom);
      this.myChart.setOption(this.option);
    }
  }
};
</script>
