<template>
  <div class="main">
    <div class="imgDesktop">
      <q-img alt="Ellipse19" src="/icons/Ellipse-19.png" style="height: 25%;
      width:25%;float: left; margin-top: -150px; position: relative;z-index: -1;"/>

      <q-img alt="Ellipse18" src="/icons/Ellipse-18.png" style="height: 25%;
      width:25%;float: right;margin-top: -150px;    position: relative;z-index: -1;"/>
    </div>

    <div class="content">
      <h2>MelodyCam</h2>
      <div class="set">
        <a href="#" class="user"></a>
        <a href="#" class="settings"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Desktop",
}
</script>

<style lang="scss" scoped>


.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
}

h2 {
  z-index: 5;
  font-family: Montserrat-ExtraBold;
  font-weight: bold;
  color: $red;
}
.set{
  display: flex;
  flex-direction: row;
}
.user{
  margin-right: 0.5rem;
  width: 42px;
  height: 42px;
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image:url($imgPath  + "settings.png");
  &:hover{
    opacity: 50%;
  }
}
.settings{
  margin-left: 0.5rem;
  width: 42px;
  height: 42px;
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image:url($imgPath  + "user.png");
  &:hover{
    opacity: 50%;
  }
}

</style>
