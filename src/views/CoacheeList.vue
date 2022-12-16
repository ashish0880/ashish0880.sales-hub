<template>
  <div>
    <div class="page-wrap col-md-12" style="padding-bottom: 30px;">
    </div>
    <div>
      <div class="col-md-12" style="padding: 0;">
        <div class="col-md-12 panel panel-blur bootstrap-panel xsmall-panel sixth-panel">
          <div class="row-md-12 panel-body sixth-panel-body">
            <div class="col-md-4 key-details">
              <div class="row-md-12">
                <div class="col-md-2" style="padding: 15px 0px 0px;">
                  <img style="width: 45px;height: 45px; border-radius: 50%" src="../assets/mface.jpg" />
                </div>
                <div class="col-md-6" style="padding:0;padding-top: 10px;">
                  <h1>Mike Smith</h1>
                  <p>(216) 223-8860 / 61</p>
                  <p>mike.smith@saleshub.com</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 sales-details contact">
              <div class="key">
                <h2>Coaching NBA</h2>
                <p style="color:black">Margins are trending below FY 2020</p>
                <p><b>5</b> out of <b>16</b> calls done this week</p>
              </div>
            </div>
            <div class="col-md-3">
              <div id="chart">
                <apexchart
                  type="area"
                  height="150"
                  :options="chartOptions"
                  :series="series"
                  >
                </apexchart>
              </div>
            </div>
            <div class="col-md-2 sales-details">
              <div class="strat-price-btn col-md-5">
                <button>OnSet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12" style="padding: 0;">
        <div class="col-md-12 panel panel-blur bootstrap-panel xsmall-panel sixth-panel">
          <div class="row-md-12 panel-body sixth-panel-body">
            <div class="col-md-4 key-details">
              <div class="row-md-12">
                <div class="col-md-2" style="padding: 15px 0px 0px;">
                  <img style="width: 45px;height: 45px; border-radius: 50%" src="../assets/m-head.jpg" />
                </div>
                <div class="col-md-6" style="padding:0;padding-top: 10px;">
                  <h1>Tony Paige</h1>
                  <p>(216) 223-8860 / 61</p>
                  <p>tony.paige@saleshub.com</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 sales-details contact">
              <div class="key">
                <h2>Coaching NBA</h2>
                <p style="color:black"> Sales and marketing 101 training overdue</p>
                <p><b>13</b> out of <b>20</b> calls done this week</p>
              </div>
            </div>
            <div class="col-md-3">
              <div id="chart">
                <apexchart
                  type="area"
                  height="150"
                  :options="chartOptions"
                  :series="series2"
                  >
                </apexchart>
              </div>
            </div>
            <div class="col-md-2 sales-details">
              <div class="strat-price-btn col-md-5">
                <button>OnSet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12" style="padding: 0;">
        <div class="col-md-12 panel panel-blur bootstrap-panel xsmall-panel sixth-panel">
          <div class="row-md-12 panel-body sixth-panel-body">
            <div class="col-md-4 key-details">
              <div class="row-md-12">
                <div class="col-md-2" style="padding: 15px 0px 0px;">
                  <img style="width: 45px;height: 45px; border-radius: 50%" src="../assets/f-head.jpg" />
                </div>
                <div class="col-md-6" style="padding:0;padding-top: 10px;">
                  <h1>Amy Andrews</h1>
                  <p>(216) 223-8860 / 61</p>
                  <p>amy.andrews@saleshub.com</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 sales-details contact">
              <div class="key">
                <h2>Coaching NBA</h2>
                <p style="color:black">Sales have exceeded by 3% from budget</p>
                <p><b>15</b> out of <b>22</b> calls done this week</p>
              </div>
            </div>
            <div class="col-md-3">
              <div id="chart">
                <apexchart
                  type="area"
                  height="150"
                  :options="chartOptions"
                  :series="series3"
                  >
                </apexchart>
              </div>
            </div>
            <div class="col-md-2 sales-details">
              <div class="strat-price-btn col-md-5">
                <button>OnSet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12" style="padding: 0;">
        <div class="col-md-12 panel panel-blur bootstrap-panel xsmall-panel sixth-panel">
          <div class="row-md-12 panel-body sixth-panel-body">
            <div class="col-md-4 key-details">
              <div class="col-md-2" style="padding: 15px 0px 0px;">
                <img style="width: 45px;height: 45px; border-radius: 50%" src="../assets/fhead.jpg" />
              </div>
              <div class="col-md-6" style="padding:0;padding-top: 10px;">
                <h1>Rebecca Carman</h1>
                <p>(216) 223-8860 / 61</p>
                <p>beccarman@saleshub.com</p>
              </div>
            </div>
            <div class="col-md-3 sales-details contact">
              <div class="key">
                <h2>Coaching NBA</h2>
                <p style="color:black">Coaching NBA Sales and marketing 101 training overdue</p>
                <p><b>13</b> out of <b>20</b> calls done this week</p>
              </div>
            </div>
            <div class="col-md-3">
              <div id="chart">
                <apexchart
                  type="area"
                  height="150"
                  :options="chartOptions"
                  :series="series4"
                  >
                </apexchart>
              </div>
            </div>
            <div class="col-md-2 sales-details">
              <div class="strat-price-btn col-md-5">
                <button>OnSet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12" style="padding: 0;">
        <div class="col-md-12 panel panel-blur bootstrap-panel xsmall-panel sixth-panel">
          <div class="row-md-12 panel-body sixth-panel-body">
            <div class="col-md-4 key-details">
              <div class="col-md-2" style="padding: 15px 0px 0px;">
                <img style="width: 45px;height: 45px; border-radius: 50%" src="../assets/mhead.jpg" />
              </div>
              <div class="col-md-6" style="padding:0;padding-top: 10px;">
                <h1>William Pence</h1>
                <p>(216) 223-8860 / 61</p>
                <p>william@saleshub.com</p>
              </div>
            </div>
            <div class="col-md-3 sales-details contact">
              <div class="key">
                <h2>Coaching NBA</h2>
                <p style="color:black">Margins are trending below FY 2020</p>
                <p><b>5</b> out of <b>16</b> calls done this week</p>
              </div>
            </div>
            <div class="col-md-3">
              <div id="chart">
                <apexchart
                  type="area"
                  height="150"
                  :options="chartOptions"
                  :series="series5"
                  >
                </apexchart>
              </div>
            </div>
            <div class="col-md-2 sales-details">
              <div class="strat-price-btn col-md-5">
                <button>OnSet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

export default Vue.extend({
  data: function () {
    return {
      isActive: 1,
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
      series2: [
        {
          name: "Margin Projection",
          data: ["80", "160", "120", "150"],
        },
      ],
            series3: [
        {
          name: "Margin Projection",
          data: ["50", "120", "100", "80"],
        },
      ],
            series4: [
        {
          name: "Margin Projection",
          data: ["50", "40", "100", "20","50","150"],
        },
      ],
            series5: [
        {
          name: "Margin Projection",
          data: ["50", "200", "60", "150"],
        },
      ],
    };
  },
});
</script>



<style lang="scss" scoped>

.active {
  background: #ffffff;
  color: black;
  font-weight: bold;
}

h2 {
 text-align: left;
}

.panel {
 background: #5680fe;
 // padding-top: 25px;
 padding-bottom: 30px;
 padding-left: 5px;
 padding-right: 0px;
 border-radius: 8px;
 margin-bottom: 5px;
}

.first-panel {
 background-image: url("../assets/Bitmap.png");
 padding-top: 25px;
}


.cr-panel {
 padding: 0;
}


.sales-panel {
 padding-top: 0;
}

.key-details {
 text-align: left;

 h1 {
  font-size: 18px;
  font-weight: bold;
  margin-top: 0;
  padding-top: 15px;
 }
 p  {
     color: #808080;
 }
 .process-name {
   margin-bottom: 7px;
 }
 .progress_bar
  .pro-bar {
    background: hsl(0, 0%, 97%);
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;
    height:4px;
    margin-bottom: 2px;
    position: relative;
    margin-top: 6px;
}
.progress_bar .progress_bar_title{
    color: hsl(218, 4%, 50%);
    font-size: 15px;
    font-weight: 300;
    position: relative;
    top: -28px;
    z-index: 1;
}
.progress_bar .progress_number{
    float: right;
    margin-top: -24px;
}
.progress_bar .progress-bar-inner {
    background-color: hsl(0, 0%, 88%);
    display: block;
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: width 1s linear 0s;
}
.progress_bar .progress-bar-inner:before {
    content: "";
    // background-color: hsl(0, 0%, 100%);
    border-radius: 50%;
    width: 4px;
    height: 4px;
    position: absolute;
    right: 1px;
    top: 0;
    z-index: 1;
}
.progress_bar .progress-bar-inner:after {
    content: "";
    width: 14px;
    height: 14px;
    border: 1px solid #F0F2F9;
    background: #FFFFFF;
    border-radius: 50%;
    position: absolute;
    right: -4px;
    top: -5px;
}
}

.contact {
    p {
        font-weight: bold;
        // color: black !important;
    }
    h2 {
        font-weight: 100;
    }
}

.sales-details {
 text-align: left;
 padding-right: 0;
 padding-bottom: 5px;
 padding-left: 0;
 h2 {
  padding-top: 15px;
 }
 p{
   color: #808080;

   b{ 
     color: #000;
   }
  span {
   color: #000;
  }
 }
 .key {
   padding: 0;
      p {
     font-size: 13px;
   }
 }
 .value {
   padding: 0;
   
   p {
     font-size: 13px;
     padding-left: 10px;
   }
 }
 .contact-value {
p {
margin: 0 0 18px;
}
 }
 .strat-price-btn {
   padding: 0;
   text-align: center;
   font-weight: bold;
       padding-top: 30px;

   button {
    border-radius: 5px;
    border: 0.6px solid #D7D7D7;
    font-size: 12px;
    line-height: 12px;
    color: #292929;
    background: white;
    padding: 9px 13px 9px 13px;
    margin-left: 20px;
    width: 100%;
   }

   .prc-btn {
    margin-top: 10px;
    width: 102px;
   }
 }
}


h2 {
 font-size: 14px;
 font-weight: bold;
 margin-top: 30px;
 // margin-bottom: 10px;
}

img {
 width: 45px;
 height: 45px;
 // border-radius: 50%;
}


.sixth-panel {
 background: white;
 margin-left: 0;
 padding-bottom: 0px;
     margin-bottom: 10px;

 .sixth-panel-body {
  padding: 0;
 }

 img {
    width: 20px;
    height: 28px;
 }

.margins {
  margin: 0;
}

 .contact-opt {
   padding: 0;

   .contact-name {
    padding: 11px 6px 6px 15px;
    text-align: left;
    p {
      margin: 0;
    }
   }
 }

 .contact-icons {
   padding: 0;
       border-top: 1px solid #f1f1f1;

   .col-md-4 {
     padding: 0;
   }

   .mid-msg {
     border-right: 1px solid #f1f1f1;
   }
 }

 button {
  border-radius: 5px;
  border: none;
 }
 .mav-key {
  background: #ff495c;
  color: white;
 }
 .cc-key {
  background: #5680fe;
  color: white;
 }
 .cc-key2 {
  background: #00bf9d;
  color: white;
 }
 .jose-key {
   background: #896320;
    color: white;
 }

 h2 {
  margin-top: 0;
 }
}

.call-duration {
    p {
        padding-top: 20px;
    margin: 0 0 0px;
    }
}

</style>