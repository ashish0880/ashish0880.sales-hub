<template>
  <header>
    <div class="row header-container">
      <div class="col-md-4 app-logo">
        <img src="../assets/Saleshub.png" />
      </div>
      <div class="col-md-4 header-right">
        <div class="col-md-6 sales"  style="padding:0">
          <p>Sales YTD Budget</p>
        </div>
        <div class="col-md-6 number" style="padding:0">
          <p><i class="fas fa-arrow-up"></i>54<span>(+7.4%)</span></p>
        </div>
        
      </div>
      <div class="col-md-4 menu-tiles">
        <div class="menu-titles">
          <img src="../assets/Search.svg" />
          <img src="../assets/setting.svg" />
          <img src="../assets/notification.svg" />
          <img
            style="height: 45px; border-radius: 50%"
            src="../assets/header-img.jpg"
            />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header-container {
  margin: 0;
    padding: 0px 10px 12px 10px;
  background-color: #0b0c30;
  /* border-bottom: solid 1px $color_pantone; */
}

.app-logo {
    padding: 15px 0 5px 0px;
  img {
    height: 40px;
    float: left;
    width: 45%;
  }
}

.city-selected {
  position: relative;
  padding: 8px 30px 0;
}

.city-name {
  /* @include font-family($color_persian_green, 16px, bold); */
  line-height: normal;
  margin-left: 10px;
  top: 13px;
  position: absolute;
}

.header-right {
    background: #1D206E;
        border-radius: 23.5px;    width: 25%;    position: absolute;
        left: 53%;top: 16px;
    .sales {
      padding:0;

      p {
        color:white;margin:0;padding:10px;float: left;font-size: 13px;
      }
    }
    .number {
      padding: 0;

      p {
        color: white;
    margin: 0px;
    padding: 10px;
    font-size: 13px; font-weight:bold
      }

      .fas {
       margin-right: 4px;
    font-size: 11px;
    }
        span {
      font-size: 11px;color: #04C09E;padding-left: 6px;
    }

    }

}

.menu-tiles {
  padding: 0;
  float: right;
  .menu-titles {
    float: right;
    padding-top: 10px;
    img {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
