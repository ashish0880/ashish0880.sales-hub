<template>
    <div>
        <div class="page-wrap col-md-12" style="padding-bottom: 30px;">
            <div class="menu-row">
            <div class="col-md-2 cc-btn">
                <button class="new-primary-btn" :class="{ active: isActive == 1 }" @click="isActive = 1" style="width:90%;">Weekly Call List</button>
            </div>
            <div class="col-md-2 pt-btn" style="width:15%">
                <button class="new-primary-btn" :class="{ active: isActive == 2 }" @click="isActive = 2" style="width: 100%;margin-left: 10px;">Completed Calls</button>
            </div>
            </div>
        </div>
    <div v-if="isActive == 1">  
    <div class="col-md-12" style="padding: 0;">
      <div class="col-md-12 panel panel-blur bootstrap-panel xsmall-panel sixth-panel">
        <div class="row-md-12 panel-body sixth-panel-body">
          <div class="col-md-3 key-details">
            <h1>Mav Solutions</h1>
            <p>Territory Code 4969</p>
            <button class="mav-key">Key</button>
            <div class="row-md-12 process-name"><span style="padding-right: 12px;">At risk</span>
                <div class="progress_bar" style="width: 45%;display:inline-block;margin-top: 10px;">
                <div class="pro-bar">
                    <span class="progress-bar-inner" style="background-color: #1abc9c; width: 75%;" data-value="75" data-percentage-value="75"></span>
                </div>
            </div><span style="padding-left: 12px;">Advocate</span></div>
          </div>
        
        <div class="col-md-5 sales-details contact">
            <div class="key  col-md-3">
              <h2>Contact</h2>
              <p style="color:black">Tony Smith</p>
            </div>
            <div class="col-md-2" style="padding-top: 10px;">
                <div class="col-md-2" style="padding-bottom: 10px;">
                    <span class="col-md-2" style="background: rgb(86, 90, 255);border-radius: 50%; text-align: center;">
                        <img style="margin-left: -10px;" src="../assets/Call.svg" />
                    </span>
                </div>
                <div class="col-md-2" style="padding-left: 20px;padding-bottom: 10px;"><img src="../assets/message.svg" /></div>
                <div class="col-md-2" style="padding-left: 20px;padding-bottom: 10px;"><img src="../assets/chat.svg" /></div>
            </div>
            <div class="value contact-value col-md-7" style="padding-top: 15px;margin-left:0">
              <p><b>(216) 223-8860</b></p>
              <p>mavsolutions@gmail.com</p>
              <p>(216) 223-8860</p>
            </div>
          </div>

          <div class="col-md-4 sales-details">
            <h2>Possible silent walker</h2>
            <div class="key col-md-2">
              <p>Sales</p>
              <p>Gallons </p>
              <p class="margins">Margins</p>
            </div>
            <div class="value col-md-4">
              <p> <b>2,374,524</b><span> (+7.4%)</span></p>
              <p> <b>54</b><span> (+6.2%)</span> </p>
              <p> <b>5,672</b><span class="desc"> (-0.3%)</span> </p>
            </div>
            <div class="strat-price-btn col-md-5">
            <button>Micro Starategy</button>
            <button class="prc-btn">Mobile Pricing</button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="col-md-12" style="padding: 0;">
      <div class="col-md-12 panel panel-blur bootstrap-panel xsmall-panel sixth-panel">
        <div class="row-md-12 panel-body sixth-panel-body">
          <div class="col-md-3 key-details">
            <h1>C. C. & W Enterprises</h1>
            <p>Territory Code 0100</p>
            <button class="cc-key">Opportunity</button>
            <div class="row-md-12 process-name"><span style="padding-right: 12px;">At risk</span>
                <div class="progress_bar" style="width: 45%;display:inline-block;margin-top: 10px;">
                <div class="pro-bar">
                    <span class="progress-bar-inner" style="background-color: #1abc9c; width: 30%;" data-value="30" data-percentage-value="30"></span>
                </div>
            </div><span style="padding-left: 12px;">Advocate</span></div>
          </div>

        <div class="col-md-5 sales-details contact">
            <div class="key col-md-3">
                <h2>Contact</h2>
              <p style="color:black">Andrea Coppersmith</p>
            </div>
            <div class="col-md-2" style="padding-top: 10px;">
                <div class="col-md-2" style="padding-bottom: 10px;">
                    <span class="col-md-2" style="border-radius: 50%; text-align: center;filter: invert(39%) sepia(98%) saturate(3484%) hue-rotate(227deg) brightness(97%) contrast(108%);">
                        <img style="margin-left: -10px;" src="../assets/Call.svg" />
                    </span>
                </div>
                <div class="col-md-2" style="padding-bottom: 10px;">
                    <span class="col-md-2" style="background: rgb(86, 90, 255);border-radius: 50%; text-align: center;">
                        <img style="margin-left: -10px;filter: invert(100%) sepia(1%) saturate(7500%) hue-rotate(183deg) brightness(115%) contrast(100%);" src="../assets/message.svg" />
                    </span>
                </div>
                <div class="col-md-2" style="padding-left: 20px;padding-bottom: 10px;"><img src="../assets/chat.svg" /></div>
            </div>
            <div class="value contact-value col-md-7" style="padding-top: 15px;margin-left:0">
              <p>(216) 223-8860</p>
              <p><b style="color:black">andrea@ccwenterprises.com</b></p>
              <p>(216) 223-8860</p>
            </div>
          </div>
          <div class="col-md-4 sales-details">
            <h2>Lead Gen Test Drive coupon use</h2>
            <div class="key col-md-2">
              <p>Sales</p>
              <p>Gallons </p>
              <p class="margins">Margins</p>
            </div>
            <div class="value col-md-4">
              <p> <b>2,374,524</b><span> (+7.4%)</span></p>
              <p> <b>54</b><span> (+6.2%)</span> </p>
              <p> <b>5,672</b><span class="desc"> (-0.3%)</span> </p>
            </div>
            <div class="strat-price-btn col-md-5">
            <button>Micro Starategy</button>
            <button class="prc-btn">Mobile Pricing</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12" style="padding: 0;">
      <div class="col-md-12 panel panel-blur bootstrap-panel xsmall-panel sixth-panel">
        <div class="row-md-12 panel-body sixth-panel-body">
          <div class="col-md-3 key-details">
            <h1>Victor Grandos</h1>
            <p>Territory Code 0100</p>
            <button class="cc-key2">New</button>
            <div class="row-md-12 process-name"><span style="padding-right: 12px;">At risk</span>
                <div class="progress_bar" style="width: 45%;display:inline-block;margin-top: 10px;">
                <div class="pro-bar">
                    <span class="progress-bar-inner" style="background-color: #1abc9c; width: 90%;" data-value="90" data-percentage-value="90"></span>
                </div>
            </div><span style="padding-left: 12px;">Advocate</span></div>
          </div>
            <div class="col-md-5 sales-details contact">
            <div class="key col-md-3">
            <h2>Contact</h2>
              <p style="color:black">Victor Grandos</p>
            </div>
            <div class="col-md-2" style="padding-top: 10px;">
                <div class="col-md-2" style="padding-bottom: 10px;">
                    <span class="col-md-2" style="border-radius: 50%; text-align: center;filter: invert(39%) sepia(98%) saturate(3484%) hue-rotate(227deg) brightness(97%) contrast(108%);">
                        <img style="margin-left: -10px;" src="../assets/Call.svg" />
                    </span>
                </div>
                <div class="col-md-2" style="padding-left: 20px;padding-bottom: 10px;"><img src="../assets/message.svg" /></div>
                <div class="col-md-2" style="padding-left: 20px;padding-bottom: 10px;">
                    <img src="../assets/chat.svg" />
                </div>
            </div>
            <div class="value contact-value col-md-7" style="padding-top: 15px;margin-left:0">
              <p><b>(216) 223-8860</b></p>
              <p><b>victor@grandos.com</b></p>
              <p><b>(216) 223-8860</b></p>
            </div>
          </div>
          <div class="col-md-4 sales-details">
            <h2>Customer base with low call frequency</h2>
            <div class="key col-md-2">
              <p>Sales</p>
              <p>Gallons </p>
              <p class="margins">Margins</p>
            </div>
            <div class="value col-md-4">
              <p> <b>2,374,524</b><span> (+7.4%)</span></p>
              <p> <b>54</b><span> (+6.2%)</span> </p>
              <p> <b>5,672</b><span class="desc"> (-0.3%)</span> </p>
            </div>
            <div class="strat-price-btn col-md-5">
            <button>Micro Starategy</button>
            <button class="prc-btn">Mobile Pricing</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12" style="padding: 0;">
      <div class="col-md-12 panel panel-blur bootstrap-panel xsmall-panel sixth-panel">
        <div class="row-md-12 panel-body sixth-panel-body">
          <div class="col-md-3 key-details">
            <h1>Jose Cordova</h1>
            <p>Territory Code 0100</p>
            <button class="jose-key">Existing</button>
            <div class="row-md-12 process-name"><span style="padding-right: 12px;">At risk</span>
                <div class="progress_bar" style="width: 45%;display:inline-block;margin-top: 10px;">
                <div class="pro-bar">
                    <span class="progress-bar-inner" style="background-color: #1abc9c; width: 30%;" data-value="30" data-percentage-value="30"></span>
                </div>
            </div><span style="padding-left: 12px;">Advocate</span></div>
          </div>
            <div class="col-md-5 sales-details contact">
            <div class="key col-md-3">
            <h2>Contact</h2>
              <p style="color:black">Jose Cordova</p>
            </div>
            <div class="col-md-2" style="padding-top: 10px;">
                <div class="col-md-2" style="padding-bottom: 10px;">
                    <span class="col-md-2" style="border-radius: 50%; text-align: center;filter: invert(39%) sepia(98%) saturate(3484%) hue-rotate(227deg) brightness(97%) contrast(108%);">
                        <img style="margin-left: -10px;" src="../assets/Call.svg" />
                    </span>
                </div>
                <div class="col-md-2" style="padding-left: 20px;padding-bottom: 10px;"><img src="../assets/message.svg" /></div>
                <div class="col-md-2" style="padding-bottom: 10px;">
                    <span class="col-md-2" style="background: rgb(86, 90, 255);border-radius: 50%; text-align: center;">
                        <img style="margin-left: -10px;    filter: invert(100%) sepia(1%) saturate(7500%) hue-rotate(183deg) brightness(115%) contrast(100%);" src="../assets/chat.svg" />
                    </span>
                </div>
            </div>
            <div class="value contact-value col-md-7" style="padding-top: 15px;margin-left:0">
              <p>(216) 223-8860</p>
              <p>Jose Cordova@gmail.com</p>
              <p><b>(216) 223-8860</b></p>
            </div>
          </div>
          <div class="col-md-4 sales-details">
            <h2>Lead Gen Test Drive coupon use</h2>
            <div class="key col-md-2">
              <p>Sales</p>
              <p>Gallons </p>
              <p class="margins">Margins</p>
            </div>
            <div class="value col-md-4">
              <p> <b>2,374,524</b><span> (+7.4%)</span></p>
              <p> <b>54</b><span> (+6.2%)</span> </p>
              <p> <b>5,672</b><span class="desc"> (-0.3%)</span> </p>
            </div>
            <div class="strat-price-btn col-md-5">
            <button>Micro Starategy</button>
            <button class="prc-btn">Mobile Pricing</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="col-md-12" style="padding: 0;">
      <div class="col-md-12 panel panel-blur bootstrap-panel xsmall-panel sixth-panel">
        <div class="row-md-12 panel-body sixth-panel-body">
          <div class="col-md-3 key-details">
            <h1>Bob Barker</h1>
            <p>Territory Code 4969</p>
            <button class="cc-key2">Key</button>
            <div class="row-md-12 process-name"><span style="padding-right: 12px;">At risk</span>
                <div class="progress_bar" style="width: 45%;display:inline-block;margin-top: 10px;">
                <div class="pro-bar">
                    <span class="progress-bar-inner" style="background-color: #1abc9c; width: 60%;" data-value="60" data-percentage-value="60"></span>
                </div>
            </div><span style="padding-left: 12px;">Advocate</span></div>
          </div>
            <div class="col-md-5 sales-details contact">
            <div class="key col-md-3">
            <h2>Contact</h2>
              <p style="color:black">Tony Smith</p>
            </div>
            <div class="col-md-2" style="padding-top: 10px;">
                <div class="col-md-2" style="padding-bottom: 10px;">
                    <span class="col-md-2" style="background: rgb(86, 90, 255);border-radius: 50%; text-align: center;">
                        <img style="margin-left: -10px;" src="../assets/Call.svg" />
                    </span>
                </div>
                <div class="col-md-2" style="padding-left: 20px;padding-bottom: 10px;"><img src="../assets/message.svg" /></div>
                <div class="col-md-2" style="padding-left: 20px;padding-bottom: 10px;">
                    <img src="../assets/chat.svg" />
                </div>
            </div>
            <div class="value contact-value col-md-7" style="padding-top: 15px;margin-left:0">
              <p><b>(216) 223-8860</b></p>
              <p>mavsolutions@gmail.com</p>
              <p>(216) 223-8860</p>
            </div>
          </div>
          <div class="col-md-4 sales-details">
            <h2>Possible silent walker</h2>
            <div class="key col-md-2">
              <p>Sales</p>
              <p>Gallons </p>
              <p class="margins">Margins</p>
            </div>
            <div class="value col-md-4">
              <p> <b>2,374,524</b><span> (+7.4%)</span></p>
              <p> <b>54</b><span> (+6.2%)</span> </p>
              <p> <b>5,672</b><span class="desc"> (-0.3%)</span> </p>
            </div>
            <div class="strat-price-btn col-md-5">
            <button>Micro Starategy</button>
            <button class="prc-btn">Mobile Pricing</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>  
    </div>
</template>


<script>
// @ is an alias to /src

export default {
      data: function () {
        return {
          isActive: 1
        }
    },
}
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
  font-size: 16px;
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
 border-left: 1px solid #f1f1f1;
 padding-right: 0;
 padding-bottom: 5px;
 h2 {
  padding-top: 15px;
 }
 p{
   color: #808080;

   b{ 
     color: #000;
   }
  span {
   color: #00bf9d;
  }
  .desc {
   color: #f05c60;
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
   margin-left: 23px;
   
   p {
     font-size: 13px;
     padding-left: 10px;
   }
 }
 .contact-value {
p {
    margin: 0 0 20px;
}
 }
 .strat-price-btn {
   padding: 0;
   text-align: center;
   font-weight: bold;

   button {
    border-radius: 5px;
    border: 0.6px solid #D7D7D7;
    font-size: 10px;
    line-height: 12px;
    color: #292929;
    background: white;
    padding: 9px 13px 9px 13px;
    margin-left: 20px;
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

</style>