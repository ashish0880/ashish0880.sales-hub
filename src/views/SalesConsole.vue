<template>
  <div>
    <div class="col-md-12" style="text-align: left; text-align: left; padding: 0;">
      <h2>
        Actions
        <span style="float: right; font-size: 11px;"> View All <img src="../assets/Path.svg" style="width: 11px; padding-bottom: 5px; height: auto; padding-left: 2px;" /> </span>
      </h2>
    </div>
    <div class="col-md-6 panel panel-blur bootstrap-panel xsmall-panel first-panel">
      <div class="panel-body">
        <div class="col-md-2 coaching-noti-i" style="padding: 0;">
          <button>
            <img class="bulb-img" src="../assets/Bob presentation.svg" />
          </button>
        </div>
        <div class="col-md-10 coaching-noti">
          <p>Bob Barker</p>
          <span>Provide Guidence <br>
          Review History </span>
        </div>
      </div>
    </div>

    <div class="col-md-6 cr-panel">
      <div class="row-md-5 panel panel-blur bootstrap-panel xsmall-panel second-panel">
        <div class="panel-body second-panel-body">
          <div class="col-md-2 img-sec img-sec-green">
            <img src="../assets/Call.svg" />
          </div>
          <div class="col-md-10">
            <b>Victor Grandos</b>
            <p>Potential <b>Sales Lead</b></p>
          </div>
        </div>
      </div>

      <div class="row-md-5 panel panel-blur bootstrap-panel xsmall-panel third-panel">
        <div class="panel-body third-panel-body">
          <div class="col-md-2 img-sec">
            <img src="../assets/msg.svg" />
          </div>
          <div class="col-md-10">
            <b>Wolf Pack Construction</b>
            <p>Email <b>Pitch Desk</b></p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 cr-panel">
      <div class="col-md-6 panel panel-blur bootstrap-panel xsmall-panel second-panel fourth-panel">
        <div class="panel-body second-panel-body">
          <div class="col-md-2 img-sec">
            <img src="../assets/msg.svg" />
          </div>
          <div class="col-md-10">
            <b>Mav Solutions</b>
            <p>Email <b>Pitch Deck</b></p>
          </div>
        </div>
      </div>

      <div class="col-md-6 panel panel-blur bootstrap-panel xsmall-panel third-panel fifth-panel">
        <div class="panel-body third-panel-body">
          <div class="col-md-2 img-sec cc">
            <img src="../assets/Shape.svg" />
          </div>
          <div class="col-md-10">
            <b>C. C. & W Enterprises</b>
            <p>
              Review History
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12" style="padding: 0;">
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
                <td><i class="fas fa-arrow-down"></i><b>2,374,524</b><span class="desc"> (-7.4%)</span></td>
              </tr>
              <tr>
                <th scope="row">Month-to-Date</th>
                <td><i class="fas fa-arrow-up"></i><b>4,726,134</b><span> (+8.2%)</span></td>
                <td><i class="fas fa-arrow-down"></i><b>1,584,524</b><span class="desc"> (-5.8%)</span></td>
                <td><i class="fas fa-arrow-up"></i><b>7,215,42</b><span> (+7.4%)</span></td>
              </tr>
              <tr>
                <th scope="row">Today</th>
                <td><i class="fas fa-arrow-up"></i><b>2,374,524</b><span> (+7.4%)</span></td>
                <td><i class="fas fa-arrow-up"></i><b>2,374,524</b><span> (+7.4%)</span></td>
                <td><i class="fas fa-arrow-down"></i><b>2,374,524</b><span class="desc"> (-7.4%)</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  <div class="col-md-12" style="padding:0;margin-bottom:30px;">
    <WeeklyCallList />
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WeeklyCallList from '@/views/WeeklyCallList'

export default {
  components: {
    WeeklyCallList,
  }
}
</script>




<style lang="scss" scoped>
h2 {
 text-align: left;
}

.panel {
 background: #5680fe;
 padding-bottom: 18px;
 padding-left: 5px;
 padding-right: 0px;
 border-radius: 8px;
 margin-bottom: 5px;
}

.first-panel {
 background-image: url("../assets/Bitmap.png");
 padding-top: 25px;
}

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
}

.coaching-noti {
 text-align: left;
 padding-left: 15px;
 p {
  font-size: 15px;
  color: white;
  word-spacing: 2px;
  margin-top: 10px;
 }
   span {
    color: #E9E9E9;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    text-align: left;
  }
//  span {
//   color: white;
//   font-size: 12px i {
//    font-size: 30px;
//    color: white;
//    position: absolute;
//    bottom: -5px;
//    right: 11px;
//   }
//  }
 img {
  width: 30px;
  height: 28px;
  margin-left: 5px;
 }
}

.cr-panel {
 padding: 0;
}

.second-panel {
 background: white;
 padding-left: 10px;
 padding-right: 0px;
 padding-top: 0px;
 padding-bottom: 0px;
 margin-left: 10px;
 margin-bottom: 0px;
}

.second-panel-body {
 padding: 0;
 text-align: left;
 padding: 15px 0 15px 0;

 .img-sec {
  padding: 0;
  background: #565AFF;
  width: 40px;
  height: 40px;
  border-radius: 30%;

  img {
   width: 25px;
   height: 25px;
   margin: 7px;
   padding: 2px;
  }
 }

 .img-sec-green {
   background: #00BF9D !important;
 }

 p {
  color: #808080;
  margin-top: 8px;
  font-size: 11px;
  margin-bottom: 0;
  b {
   color: black;
  }
 }

 .below-plan {
  padding: 0;
  img {
   width: 40px;
   height: 40px;
   border-radius: 50%;
  }

  .second-img {
   margin-left: -14px;
  }

  span {
   margin-left: -32px;
   font-size: 18px;
   margin-top: 7px;
   color: white;
   position: absolute;
  }
 }
}

.third-panel {
 background: white;
 padding: 0;
 margin-top: 5px;
 margin-left: 10px;
 padding-left: 10px;
 .third-panel-body {
  padding: 0;
  text-align: left;
  padding: 15px 0 15px 0;

  .img-sec {
   padding: 0;
   /* padding-left: 6px; */
   width: 40px;
   height: 40px;
   border-radius: 30%;
   background: #575aff;

   img {
    width: 25px;
    height: 25px;
    margin: 7px;
    padding: 2px;
   }
  }

  .cc {
   background: #fec004;
  }

  p {
   color: #808080;
   margin-top: 8px;
   font-size: 11px;
   margin-bottom: 0;

   b {
    color: black;
   }
  }
 }
}

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
  padding: 17px 8px 17px 8px;
  border-top: 1px solid #d6d6d6;
 }

 td {
  text-align: left;
  padding: 17px 8px 17px 8px;

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


.fifth-panel {
 margin-top: 0;
width: 48%;

 img-sec {
  background: #fec004;
 }
}

h2 {
 font-size: 14px;
 font-weight: bold;
 margin-top: 30px;
 // margin-bottom: 10px;
}

.team-performance {
 margin-left: 0;
 margin-top: 5px;
}

img {
 width: 45px;
 height: 45px;
 // border-radius: 50%;
}

</style>