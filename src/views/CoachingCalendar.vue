<template>
  <div>
    <h2>Coaching Calendar</h2>
    <div class="col-md-12 panel calendar-panel panel-blur bootstrap-panel xsmall-panel">
      <div class="panel-body" style="padding:0">
        <a>
          <img
            class="bulb-img"
            src="../assets/calendar.svg"
            style="float: right; width: 40px; height: 40px"
          />
        </a>
        <div class="col-md-12 coaching-noti">
          <ejs-schedule
            height="550px"
            width="100%"
            :selectedDate="selectedDate"
            :eventSettings="eventSettings"
          >
            <e-views>
              <e-view option="Week" startHour="07:00" endHour="15:00"></e-view>
            </e-views>
          </ejs-schedule>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { scheduleData } from "./datasource.js";
import { extend } from "@syncfusion/ej2-base";
import {
  SchedulePlugin,
  WorkWeek,
  Month,
  Week,
} from "@syncfusion/ej2-vue-schedule";
Vue.use(SchedulePlugin);
export default {
  data() {
    return {
      eventSettings: { dataSource: extend([], scheduleData, null, true) },
      selectedDate: new Date(2018, 1, 19),
    };
  },
  provide: {
    schedule: [WorkWeek, Month, Week],
  },
};
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";

h2 {
  font-size: 14px;
  font-weight: bold;
  margin-top: 25px;
  text-align: left;
}

.calendar-panel {
  padding: 20px 30px 10px 10px;
}

.coaching-noti {
  padding: 0;
}

.e-schedule {
  border: none !important;
}

.e-schedule .e-schedule-toolbar .e-toolbar-items {
    background-color: white;
}

.e-schedule .e-vertical-view .e-date-header-wrap table tbody td { 
  border: none !important;
}
.e-schedule .e-vertical-view .e-left-indent-wrap table tbody td {
  border: none;
}  

.e-date-header-wrap.e-all-day-auto {
    border-right-width: 0px !important;
}

.e-schedule .e-schedule-toolbar .e-tbar-btn {
    background: white;
}

.e-schedule .e-schedule-toolbar {
    box-shadow: none;
}

.e-schedule .e-schedule-toolbar .e-toolbar-items .e-toolbar-item.e-date-range .e-tbar-btn .e-tbar-btn-text {
    font-size: 16px;
    font-weight: bold;
}

.e-schedule .e-vertical-view .e-header-cells.e-current-day {
    color: white !important;
    background: #4030A6 !important;
    border-radius: 17px !important;
}
.e-schedule .e-vertical-view .e-header-cells .e-header-day {
    display: block;
    text-align: center;
    font-size: 10px;
}
.e-schedule .e-vertical-view .e-header-cells .e-header-date {
    display: block;
    text-align: center;
    font-size: 14px;
}

.e-schedule .e-vertical-view .e-header-cells {
    height: 50px;
    padding: 0;
}
</style>