<template>
  <div class="main">
    <div class="imgDesktop">
      <q-img alt="Ellipse19" src="/icons/Ellipse-19.png" style="height: 25%; width:25%;float: left;
                  position: relative;z-index: -1;"/>
      <div class="settings">
        <div class="row">
          <div class="set"></div>
          <div class="user"></div>
        </div>

      </div>

    </div>

    <div class="content">
      <h2>MelodyCam</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Desktop",
}
</script>

<style lang="scss" scoped>
.imgDesktop {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.content {

  z-index: 5;
}

h2 {
  z-index: 5;
  font-family: Montserrat-ExtraBold;
  font-weight: bold;
  color: $red;
}


.settings {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url($imgPath + "Ellipse-18.png");
}
.row{
  display: flex;
  flex-direction: row;
}
.set {
  width: 42px;
  height: 42px;
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url($imgPath + "settings.png");
}

.user {
  width: 42px;
  height: 42px;
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url($imgPath + "user.png");
}
</style>
