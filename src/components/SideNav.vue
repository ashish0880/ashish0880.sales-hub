<template>
  <div class="sidenav">
    <div class="left-menu">
      <img src="../assets/add.svg" />
      <p style="margin-bottom: 50px">Add New</p>
      <div class="row-md-12">
        <router-link to="/sales" >
        <button :class="{ active: isActive == 2 }" @click="isActive = 2">
          <img src="../assets/sc.svg" />
        </button>
        </router-link>
        <p>Sales Console</p>
      </div>
      <div class="row-md-12">
         <router-link to="/customers" >
        <button :class="{ active: isActive == 3 }" @click="isActive = 3">
          <img src="../assets/Customer.svg" />
        </button>
         </router-link>
        <p>Customers</p>
      </div>
      <div class="row-md-12">
        <button><img src="../assets/md.svg" /></button>
        <p>My Development</p>
      </div>
      <div class="row-md-12">
        <button><img src="../assets/dm.svg" /></button>
        <p>District Team Metrics</p>
      </div>
      <div class="row-md-12">
                <router-link to="/coaching" >
          <button :class="{ active: isActive == 1 }" @click="isActive = 1"><img src="../assets/Coaching.svg" /></button>
              </router-link >
        <p>Coaching</p>
      </div>
      <div class="row-md-12" style="margin-top: 30px;">

          <img src="../assets/Logout.svg" />
   
        <p class="logout-btn">Logout</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.sidenav {
    width: 80px;
    z-index: 1000;
    background-color: #0b0c30;
    padding-top: 10px;

  .left-menu {
    padding: 0px 8px 8px 7px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;

    .material-icons {
      color: white;
      position: absolute;
      left: 17px;
      font-size: 37px;
    }

    button {
      margin-bottom: 5px;
      background-color: #1f2267;
      border-color: transparent;
      border-radius: 23px;
      width: 55px;
      height: 55px;
    }
    .active {
    background: #5680FE;
    
    img  {
      filter: sepia(1);
    }
    p {
      color: white !important;
    }
   }
    p {
      font-size: 11px;
      margin: 0 0 20px;
    }
    .logout-btn {
      margin: 0 0 60px;
    }
  }
}
</style>


<script>

export default {
    data: function () {
        return {
          isActive: 1
        }
    },
  }

</script>
