<template>
  <div>
    <h2>Insights</h2>
    <div class="col-md-11 panel panel-blur bootstrap-panel xsmall-panel" style="margin-bottom:5px">
      <div class="panel-body">
        <div class="col-md-2 coaching-noti-i" style="padding: 0">
          <button>
            <img class="bulb-img" src="../assets/bulb.svg" />
          </button>
        </div>
        <div class="col-md-10 coaching-noti">
          <p>
            Your yearly sales are behind by 12%. You need $23k more per month to
            reach your target​
          </p>
          <button class="new-primary-btn training-btn">Training</button>
        </div>
      </div>
    </div>
    <div class="col-md-11 panel panel-blur bootstrap-panel xsmall-panel" style="padding-top:0;padding-bottom:0;margin-bottom:10px">
      <div class="panel-body" style="padding:10px">
        <div class="col-md-2 coaching-noti-i" style="padding: 0">
          <button>
            <img class="bulb-img" src="../assets/bulb.svg" />
          </button>
        </div>
        <div class="col-md-10 coaching-noti">
          <p>
            Other reps have increased their sales by 3.5% since last quarter
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-12" style="padding:0"> 
        <h2 style="margin-top:5px">Margin Projection</h2>
            <div
      class="col-md-11 panel panel-blur bootstrap-panel xsmall-panel chart-panel"
    >
      <div class="panel-body">
        <div id="chart">
          <apexchart
            type="area"
            height="150"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
        <div class="col-md-12 coaching-noti">
          <p>
            Plan is below budget by $ 165,985
          </p>
          <button class="new-primary-btn review-btn">Review</button>
        </div>
      </div>
    </div>
    </div>
    
    <div class="col-md-12" style="padding:0"> 
    <h2 style="margin-top: 10px;">New & Existing focused accounts 21</h2>
        <div
      class="col-md-11 panel panel-blur bootstrap-panel xsmall-panel chart-panel"
    >
      <div class="panel-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Account KONE</th>
                <th scope="col">#Accts</th>
                <th scope="col">#Accts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New</td>
                <td>0</td>
                <td>$0</td>
              </tr>
              <tr>
                <td>Existing</td>
                <td>0</td>
                <td>$0</td>
              </tr>
            </tbody>
          </table>
      </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  text-align: left;
}

.panel {
  background: white;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 0px;
  border-radius: 8px;
  color: black;
}

.coaching-noti-i {
  padding: 0;
  button {
    background-color: #4030a6;
    border-color: none;
    border-color: transparent;
    border-radius: 7px;
  }
  img {
    width: 30px;
    height: 40px;
  }
}
.coaching-noti {
  text-align: left;
  padding-left: 25px;
  p {
    font-size: 15px;
    color: black;
  }

  .training-btn {
    border-radius: 20px;
    float: right;
    width: 55%;
    color: black;
  }
}

.chart-panel {
  background: white;

  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  .panel-body {
      padding: 0px 10px 10px 0px;
  }
  p {
      color: black;
  }
 .review-btn {
    border-radius: 20px;
    float: right;
    width: 40%;
    color: black;
  }
  table {
      text-align: left;
      margin-bottom: 0;
  }
}

.apexcharts-toolbar {
  display: none !important;
}
</style>

<script>
import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

export default Vue.extend({
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: ["Q1", "Q2", "Q3", "Q4"],
        },
        yaxis: {
          categories: ["0", "50", "100", "150"],
        },
        grid: {
          show: true,
          borderColor: "#90A4AE",
          strokeDashArray: 0,
          position: "back",
          yaxis: {
            lines: {
              show: false,
            },
          },
          row: {
            colors: undefined,
            opacity: 0.5,
          },
          column: {
            colors: undefined,
            opacity: 0.5,
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
          stroke: {
            curve: "smooth",
          },
        },
      },
      series: [
        {
          name: "Margin Projection",
          data: ["50", "200", "60", "150"],
        },
      ],
    };
  },
});
</script>