<template>
    <div>
        <div class="col-md-7" style="padding: 0;">
      <div class="col-md-12" style="text-align: left; text-align: left; padding: 0;">
        <h2>
          Sales Metrics
          <span style="float: right; font-size: 11px;"> View All <img src="../assets/Path.svg" style="width: 11px; padding-bottom: 5px; height: auto; padding-left: 2px;" /> </span>
        </h2>
      </div>
      <div class="col-md-12 panel panel-blur bootstrap-panel xsmall-panel fourth-panel sales-panel">
        <div class="row-md-12 panel-body fourth-panel-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"><img src="../assets/sales.svg" />Sales</th>
                <th scope="col"><img class="gln-img" src="../assets/gallon.svg" />Gallons</th>
                <th scope="col"><img class="mrg-img" src="../assets/margins.svg" />Margins</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Year-to-Date</th>
                <td><i class="fas fa-arrow-up"></i><b>2,374,524</b><span> (+7.4%)</span></td>
                <td><i class="fas fa-arrow-up"></i><b>2,374,524</b><span> (+7.4%)</span></td>
                <td><i class="fas fa-arrow-up"></i><b>2,374,524</b><span> (+7.4%)</span></td>
              </tr>
              <tr>
                <th scope="row">Month-to-Date</th>
                <td><i class="fas fa-arrow-up"></i><b>1,38,764</b><span> (+7.4%)</span></td>
                <td><i class="fas fa-arrow-up"></i><b>1,38,764</b><span> (+7.4%)</span></td>
                <td><i class="fas fa-arrow-up"></i><b>5,230</b><span> (+7.4%)</span></td>
              </tr>
              <tr>
                <th scope="row">Today</th>
                <td><i class="fas fa-arrow-up"></i><b>5,230</b><span> (+7.4%)</span></td>
                <td><i class="fas fa-arrow-up"></i><b>1,38,764</b><span> (+7.4%)</span></td>
                <td><i class="fas fa-arrow-up"></i><b>5,230</b><span> (+7.4%)</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

        <div class="col-md-12 panel panel-blur bootstrap-panel xsmall-panel fourth-panel sales-panel" style="margin-top:20px">
        <div class="row-md-12 panel-body fourth-panel-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">New accounts</th>
                <th scope="col">Daily avg. F2F calls</th>
                <th scope="col">Opp/New F2F calls</th>
                <th scope="col">Calendar usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Year-to-Date</th>
                <td><b>54</b><span> (+7.4%)</span></td>
                <td><b>6.2</b><span> (+7.4%)</span></td>
                <td><b>20</b></td>
                <td><b>92.0</b></td>
              </tr>
              <tr>
                <th scope="row">Month-to-Date</th>
                <td><b>9</b><span> (+7.4%)</span></td>
                <td><b>26</b><span> (+7.4%)</span></td>
                <td><b>2.0</b></td>
                <td><b>9.0</b></td>
              </tr>
              <tr>
                <th scope="row">Today</th>
                <td><b>54</b></td>
                <td><b>1</b><span> (+7.4%)</span></td>
                <td><b>0.2</b></td>
                <td style="padding-bottom: 12.5%;"><b>0.6</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
     <div class="col-md-5" style="padding-left: 40px;">
         <PlanTrackInsights />
    </div>
    <div class="col-md-12" style="padding: 0px;">
         <PlanTrackSherplan />
    </div>
 </div>
</template>
<script>
// @ is an alias to /src
import PlanTrackInsights from '@/views/PlanTrackInsights.vue'
import PlanTrackSherplan from '@/views/PlanTrackSherplan.vue'

export default {
  components: {
    PlanTrackInsights,
    PlanTrackSherplan
  },
}
</script>




<style lang="scss" scoped>
.fourth-panel {
 background: white;
 margin-left: 0;
 padding-bottom: 0px;

 .fourth-panel-body {
  padding: 0;
 }

 img {
  width: 20px;
  padding-right: 5px;
  border-radius: 0;
  height: auto;
 }

 table {
  margin-bottom: 0;
 }

 th {
  padding: 25px 8px 25px 8px;
  border-top: 1px solid #d6d6d6;
  font-weight: 100;
 }

 td {
  text-align: left;
  padding: 25px 8px 25px 8px;
  font-size: 15px;

  i {
   font-size: 10px;
   color: #00bf9d;
   padding: 5px;
  }

  .fa-arrow-down {
   color: #f05c60;
  }

  span {
   color: #00bf9d;
  }
  .desc {
   color: #f05c60;
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

 h2 {
  margin-top: 0;
 }
}

.sales-panel {
 padding-top: 0;
}
</style>