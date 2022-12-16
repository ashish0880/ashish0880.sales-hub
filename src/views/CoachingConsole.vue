<template>
  <div>
    <h2>Coaching Actions</h2>
    <div class="col-md-6 panel panel-blur bootstrap-panel xsmall-panel">
      <div class="panel-body">
        <div class="col-md-2 coaching-noti-i" style="padding: 0">
          <button>
            <img class="bulb-img" src="../assets/bulb.svg" />
          </button>
        </div>
        <div class="col-md-10 coaching-noti">
          <p>Mike’s sales seem to<br />
            have decreased <br />
            F2F down by 55%
          </p>
          <span>Schedule Coaching
           <img class="arrow-img" src="../assets/arrow forward.svg" />
            </span>
        </div>
      </div>
    </div>

    <div class="col-md-6 cr-panel">
    <div class="row-md-5 panel panel-blur bootstrap-panel xsmall-panel second-panel">
      <div class="panel-body second-panel-body">
          <div class="col-md-2 img-sec"> 
             <img src="../assets/fhead.jpg" />
          </div>
        <div class="col-md-10">
          <b>Coaching Request</b>
          <p>
            Tina has requested a <b>Coaching Session</b> on <b>Emerial Plus</b> paint
          </p>
        </div>
      </div>
    </div>

    <div class="row-md-5 panel panel-blur bootstrap-panel xsmall-panel third-panel">
      <div class="panel-body third-panel-body">
          <div class="col-md-2 img-sec"> 
             <img src="../assets/m-head.jpg" />
          </div>
        <div class="col-md-10">
          <b>Training Overdue</b>
          <p>
            Tony has <b>Not Completed</b> the mandatory on <b>‘Sales 101’</b> training
          </p>
        </div>
      </div>
    </div>
    </div>

    <div class="col-md-12 panel panel-blur bootstrap-panel xsmall-panel second-panel team-performance">
      <div class="panel-body second-panel-body" style="padding:0">
        <div class="col-md-1 vertical-line"></div>
        <div class="col-md-3 below-plan">
          <div class="col-md-2">
            <b style="text-align: left;float: left;padding-top: 30px;padding-bottom: 30px;">Team <br />Performance</b>
          </div>
        </div>
          <div class="col-md-3" style="    padding: 0;
    text-align: center;
    margin-top: 13px;">
                Below Plan
            <div class="row-md-12 below-img">
                <img :src="image" />
                <img class="second-img" :src="image2" style="margin-left: -14px;" />
                <img class="second-img" style="margin-left: -14px;" src="../assets/blueberry.png" />
                <span style="    margin-left: -35px;
    font-size: 18px;
    margin-top: 9px;
    color: white;
    position: absolute;">+{{ count }}</span>
            </div>      
          </div>
        <div class="col-md-3 at below-plan">At Plan
           <div class="row-md-12">
            <img :src="image" />
            <img class="second-img" :src="image2" />
           </div>
        </div>
        <div class="col-md-3 above below-plan" style="width:24%">Above Plan
          <div class="row-md-12">
            <img :src="image" />
            <img class="second-img" :src="image2" />
            <img class="second-img" src="../assets/blueberry.png" />
            <span>+{{ count }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12" style="padding:0">
      <h2>Coach Performance Metrics</h2>
      <div class="col-md-12 panel panel-blur bootstrap-panel xsmall-panel fourth-panel">
        <div class="row-md-12 panel-body fourth-panel-body">
          <div class="col-md-7 metrics-info">
            <b>Based on your performance as a coach and the ratings you’ve
              received from your team, you have earned the title of ‘Super
              Trainer’.</b>
          </div>
          <div class="col-md-5  metrics-logo">
              <div class="col-md-4 logo-block">
                    <div class="img-section">
                    <img style="width: 20px;height: 40px;border-radius: 0;" src="../assets/Super trainer.svg" />
                    </div>
              </div>
              <div class="col-md-8 lvl-block">
                  <p>Level</p>
                  <b>Super Trainer</b>
              </div>
          </div>
          <div class="col-md-7 first-review">
              I’m <b>Comfortable Being Myself</b> on the team
          </div>
          <div class="col-md-5 first-prg">
          <b>70%</b>
            <div class="progress_bar" style="width: 75%;display:inline-block;margin-left: 10px;">
                <div class="pro-bar">
                    <span class="progress-bar-inner" style="background: #565AFF; width: 70%;" data-value="70" data-percentage-value="70"></span>
                </div>
            </div>
          </div>
          <div class="col-md-7 second-review">
              I have a <b>Clear Understanding</b> of what success means in this team
          </div>
          <div class="col-md-5 second-prg">
            <b>40%</b>
            <div class="progress_bar" style="width: 75%;display:inline-block;margin-left: 10px;">
                <div class="pro-bar">
                    <span class="progress-bar-inner" style="background: #FEC004; width: 40%;" data-value="40" data-percentage-value="40"></span>
                </div>
            </div>
          </div>
          <div class="col-md-7 third-review">
              I understand how my <b>Work Contributes</b> to <br/> the team
          </div>
          <div class="col-md-5 third-prg">
            <b>80%</b>
            <div class="progress_bar" style="width: 75%;display:inline-block;margin-left: 10px;">
                <div class="pro-bar">
                    <span class="progress-bar-inner" style="background: #00BF9D; width: 80%;" data-value="80" data-percentage-value="80"></span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data: function () {
        return {
            image: require('../assets/f-head.jpg'),
            image2: require('../assets/m-head.jpg'),
            count: 2
        }
    },

    mounted: function() {
      return {
            image: require('../assets/f-head.jpg'),
            image2: require('../assets/m-head.jpg'),
            count: 2
      }

     }
  }


</script>

<style lang="scss" scoped>
h2 {
  text-align: left;
}

.panel {
  background: #5680fe;
  padding-top: 25px;
  padding-bottom: 28px;
  padding-left: 5px;
  padding-right: 0px;
  border-radius: 8px;
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
    color: white;
        word-spacing: 2px;
  }
  span {
    color: white; 
    font-size: 12px

    i {
                font-size: 30px;
                color: white;
                position: absolute;
                bottom: -5px;
                right: 11px;
    }
  }
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
  padding-left: 5px;
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

    .second-img{
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

.at {
      text-align: center;
    margin-top: 14px;
}
.above {
      text-align: center;
    margin-top: 14px;
}

.third-panel {
  background: white;
  padding: 0;
  margin-top: 5px;
  margin-left: 10px;
  .third-panel-body {
      padding: 0;
      text-align: left;
      padding: 15px 0 15px 0;

        .img-sec { 
    padding: 0;
        padding-left: 6px;
  }

      p {
            color:#808080;
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
  padding-right: 0px;
  padding-left: 0;
  padding-bottom: 0;

  .fourth-panel-body {
      padding: 0;
  }
}

h2 {
  font-size: 14px;
  font-weight: bold;
  margin-top: 25px;
  // margin-bottom: 10px;
}

.team-performance {
  margin-left: 0;
  margin-top: 5px;

  .below-img {
    img {
      width: 40px;
    height: 40px;
    }
  }
}

img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.vertical-line {
  border-left: thick solid rgb(2, 125, 220);
  width: 1%;
  height: 54px;
  margin-left: -6px;
  margin-top: 22px;
  padding: 0;
}

.below {
  padding-top: 20px;
  padding-bottom: 30px;
}

.at {
  padding-top: 20px;
  padding-bottom: 30px;
}

.above {
  padding-top: 20px;
  padding-bottom: 30px;
}

.img-section {
    border-radius: 50%;
    background: #ff4961;
    width: 40px;
    height: 40px;
}

.metrics-info {
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid #d6d6d6;
}

.metrics-logo {
    padding-bottom: 30px;
    border-bottom: 1px solid #d6d6d6;
}

.logo-block {
    padding: 0;
    width: 15%;
}
.lvl-block {
    text-align: left;

    p {
    margin: 0;
    color: #808080;
    font-size: 10px;
    }
}

.first-review {
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: left;
    border-bottom: 1px solid #d6d6d6;
        font-size: 12px;
}
.first-prg {
    padding-top: 15px;
    padding-bottom: 12px;
    text-align: left;
    border-bottom: 1px solid #d6d6d6;
}
.second-review {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: left;
    border-bottom: 1px solid #d6d6d6;
    font-size: 12px;
}
.second-prg {
    padding-top: 10px;
padding-bottom: 7.5px;
    text-align: left;
    border-bottom: 1px solid #d6d6d6;
}
.third-review {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: left;
        font-size: 12px;
}
.third-prg {
    padding-top: 10px;
    padding-bottom: 30px;
    text-align: left;
}

.progress_bar .pro-bar {
    background: #F0F2F9;
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;
    height:7px;
    position: relative;
    border-radius: 20px;
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
    border-radius: 20px;
}
.progress_bar .progress-bar-inner:before {
    // content: "";
    background-color: hsl(0, 0%, 100%);
    border-radius: 50%;
    width: 4px;
    height: 4px;
    position: absolute;
    right: 1px;
    top: 0;
    z-index: 1;
}
.progress_bar .progress-bar-inner:after {
    // content: "";
    width: 14px;
    height: 14px;
    background-color: inherit;
    border-radius: 50%;
    position: absolute;
    right: -4px;
    top: -5px;
}

</style>
