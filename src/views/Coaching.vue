<template>
<div>
  <div class="page-wrap col-md-12">
    <div class="menu-row">
      <div class="col-md-2 cc-btn">
        <button class="new-primary-btn" :class="{ active: isActive == 1 }" @click="isActive = 1" style="width:90%;">Coach Console</button>
      </div>
      <div class="col-md-2 pt-btn">
        <button class="new-primary-btn" :class="{ active: isActive == 2 }" @click="isActive = 2" style="width: 100%;margin-left: 10px;">Plan & Track</button>
      </div>
      <div class="col-md-2 cl-btn">
        <button class="new-primary-btn" :class="{ active: isActive == 3 }" @click="isActive = 3" style="width: 87%;">Coachee List</button>
      </div>
      <div class="col-md-2 cr-btn">
        <button class="new-primary-btn coaching-btn" :class="{ active: isActive == 4 }" @click="isActive = 4">Coaching Resources</button>
      </div>
      <div class="col-md-2 t-btn">
        <button class="new-primary-btn" :class="{ active: isActive == 5 }" @click="isActive = 5" style="width: 100%;margin-left: 10px;">Tracking</button>
      </div>
      <div class="col-md-2" style="float:right">
        <button @click="videoOn = true" style="padding-left: 3px;padding-right: 15px;" class="new-primary-btn watch-btn"><i class="far fa-play-circle" style="font-size: 18px;"></i><span style="padding: 0px 10px 0px 10px;">Watch Video</span></button>
      </div>

        <div>
          <div class="modal modal-container" role="dialog" v-if="videoOn">
            <div class="modal-dialog">
                <div class="modal-content">
                    <i class="fa fa-times" @click="videoOn = false"></i>
                    <video autoplay width="420" height="340" controls> <source type="video/mp4" src="../assets/videos/sales.mp4"></video>
                </div>
            </div>
          </div>
        </div>

    </div>
  </div>
  <div class="col-md-7" v-if="isActive == 1">
    <CoachingConsole />
  </div>
  <div class="col-md-5" v-if="isActive == 1"> 
    <CoachingCalendar />
  </div>
  <div class="col-md-12" v-if="isActive == 3">
    <CoacheeList />
  </div>
  </div>
</template>


<style lang='scss'>

body {
  background: #deedff;
  background-image: url("../assets/Rectangle.svg");
}

.page-wrap {
  padding: 0;
}

.menu-row {
  margin-top: 25px;

  .cc-btn {
    width: 13%;
    padding: 0;
    padding-left: 6px;
  }

  .pt-btn {
    width: 13%;
  }

  .t-btn {
    width: 12%;
  }

  .watch-btn {
    background: white !important;
    color: black;
    float: right;
  }
}
.new-primary-btn {
  border-radius: 10px;
  text-transform: none;
  background-color: #9acaff;
  color: white;
  font-family: Helvetica;
  font-size: 13px;
  // font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  padding-left: 10px;
  padding-right: 10px;
  height: 32px;
  text-align: center;
  border: 0;
  line-height: normal;
}

.active {
  background: #ffffff;
  color: black;
  font-weight: bold;
}

.coaching-btn {
    width: 100%;
}

.modal {
    display: block;
    background-color: rgba(0, 0, 0, .6);
    img {
        display: flex;
        padding: 20px 0;
        margin: 0 auto;
        max-height: 400px;
        max-width: 100%;
    }
    .fa.fa-times {
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
        z-index: 1;
    }
}

.modal-container {
    .modal-dialog {
      margin: 11% auto;
      width: 50%;
    }

    .modal-content {
        padding: 20px;
        width: 90%;
        font-size: 20px;
        overflow: hidden;

        span {
            display: block;
            margin-bottom: 10px;
        }

        .modal-buttons {
            float: right;
            width: 50%;
        }

        .request-btn  {
            margin-right: 10px;
            width: 46%;
        }
    }
}
</style>

<script>
// @ is an alias to /src
import CoachingConsole from '@/views/CoachingConsole'
import CoachingCalendar from '@/views/CoachingCalendar.vue'
import CoacheeList from '@/views/CoacheeList.vue'



export default {
  components: {
    CoachingConsole,
    CoachingCalendar,
    CoacheeList
  },

    data: function () {
        return {
          isActive: 1,
          videoOn: false
        }
        
    },
  }

</script>