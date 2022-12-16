<template>
  <div>
    <div
      class="col-md-5"
      style="text-align: left; text-align: left; padding: 0"
    >
      <h2>
        SherPlan Goals
        <span style="float: right; font-size: 11px">
          View All
          <img
            src="../assets/Path.svg"
            style="
              width: 11px;
              padding-bottom: 5px;
              height: auto;
              padding-left: 2px;
            "
          />
        </span>
      </h2>

      <div
        class="col-md-12 panel panel-blur bootstrap-panel xsmall-panel sheer-panel-main sheer-panel"
        style="padding: 0"
      >
        <div class="row-md-12 panel-body fourth-panel-body" style="    padding-bottom: 12.2%;">
          <table class="table">
            <tbody>
              <tr>
                <td style="border-top:none">
                  <div class="coaching-noti-i">
                    <button>
                      <img
                        class="bulb-img"
                        src="../assets/Bob presentation.svg"
                      /></button
                    > <span>Attend 3 events</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="cc">
                    <button style="background-color:#00BF9D"> <img src="../assets/customers.png" /></button>
                     <span>Complete 7 customer 360s</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="cc">
                    <button> <img src="../assets/Shape.svg" /></button>
                     <span>Complete 12 FTF calls with key accounts</span>
                  </div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-md-7" style="text-align: left;width: 55.5%;">
      <h2>
        Integrated SherPlan Dashboard
        <span style="float: right; font-size: 11px">
          View All
          <img
            src="../assets/Path.svg"
            style="
              width: 11px;
              padding-bottom: 5px;
              height: auto;
              padding-left: 2px;
            "
          />
        </span>
      </h2>

      <div
        class="col-md-12 panel panel-blur bootstrap-panel sheer-panel-dash xsmall-panel sheer-panel"
        style="padding: 0"
      >
        <div class="row-md-12 panel-body fourth-panel-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Account KONE Type</th>
                <th scope="col">Current Plan</th>
                <th scope="col">Actual YTD</th>
                <th scope="col">Actual vs Plans</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Key Accounts</th>
                <td>$ 73,303</td>
                <td>$ 148,211</td>
                <td>$ 74,909</td>
              </tr>
              <tr>
                <th scope="row">Opp accounts</th>
                <td>$ 40,930</td>
                <td>$ 15,968</td>
                <td>($ 24,963)</td>
              </tr>
              <tr>
                <th scope="row">New accounts</th>
                <td>$ 20,110</td>
                <td>$ 14,326</td>
                <td>($ 5,784)</td>
              </tr>
              <tr>
                <th scope="row">Existing accounts</th>
                <td>$ 85,582</td>
                <td>$ 114,684</td>
                <td>$ 29,102</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coaching-noti-i {
  padding: 0;
  button {
    background-color: #4030a6;
    border-color: none;
    border-color: transparent;
    width: 40px;
    height: 40px;
    border-radius: 30%;
  }
  img {
    width: 25px;
    height: 25px;
    padding: 2px;
  }
    span {
    padding-left: 15px;
    font-weight: bold;
  }
}

.cc {
  padding: 0;
    button {
    background-color: #fec004;
    border-color: none;
    border-color: transparent;
    width: 40px;
    height: 40px;
    border-radius: 30%;
  }
  img {
    width: 25px;
    height: 25px;
    padding: 2px;
  }
  span {
    padding-left: 15px;
    font-weight: bold;
  }
}

.sheer-panel {
  table {
    margin-bottom: 0;
  }

  th {
    padding: 15px 8px 15px 8px;
    border-top: 1px solid #d6d6d6;
  }

  td {
    text-align: left;
    padding: 15px 8px 15px 8px;
  }

  h2 {
    margin-top: 0;
  }
}

// .sheer-panel-main {

// }

.sheer-panel-dash {
  tbody tr {  th {
    font-weight: 100;
  }
  }

}
</style>