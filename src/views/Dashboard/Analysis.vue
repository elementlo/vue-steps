<template>
  <div>
    <Chart :option="chartOption" style="height: 500px" />
  </div>
</template>

<script>
import Chart from "../../components/Chart";
import request from "../../utils/request";
export default {
  data() {
    return {
      chartOption: {}
    };
  },
  components: {
    Chart
  },
  mounted() {
    this.getChartData();
    this.interval = setInterval(() => {
      this.getChartData();
    }, 3000);
  },
  methods: {
    getChartData() {
      request({
        url: "/api/dashboard/chart",
        method: "get",
        params: { ID: 12345 }
      }).then(response => {
        this.chartOption = {
          title: {
            text: "爱斐斐"
          },
          tooltip: {},
          xAxis: {
            data: ["亲亲", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: response.data
            }
          ]
        };
      });
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style></style>
