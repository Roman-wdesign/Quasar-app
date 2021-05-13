<template>
  <div class="main">
    <div class="imgDesktop">
      <q-img alt="Ellipse19" src="/icons/Ellipse-19.png" style="height: 25%;
      width:25%;float: left;   margin-right: -200px; position: relative;z-index: -1;"/>

      <q-img alt="Ellipse18" src="/icons/Ellipse-18.png" style="height: 25%;
      width:25%;float: right; margin-left: -200px;    position: relative;z-index: -1;"/>
    </div>

    <div class="content">
      <h2>MelodyCam</h2>
      <div class="set">
        <a href="#" class="user"></a>
        <a href="#" class="settings"></a>
      </div>
    </div>


    <div class="chose">
      <div class="gender">
        <q-tabs no-shadow>
          <q-tab class="tabs" no-shadow name="female" label="Female"/>
          <q-tab class="tabs" no-shadow name="male" label="Male"/>
          <q-tab class="tabs" no-shadow name="couple" label="Couple"/>
        </q-tabs>
      </div>
    </div>

    <div class="chatting">
      <div class="video">
        <div class="search">
          <q-btn class="searching">
            <div class="poly"></div>
            Searching for female
          </q-btn>
        </div>
        <div class="search2">
          <a href="#" class="mic"></a>
          <a href="#" class="cam"></a>
        </div>
      </div>
      <div class="chat  .shadow-6">
        <h4 style="text-align: center;margin-top: 5px;">Chat</h4>
        <div class="q row justify-center">
          <div style="width: 100%; width: 400px">
            <q-chat-message
              style="  padding: 0.5rem;"
              name="me"
              avatar="https://cdn.quasar.dev/img/avatar1.jpg"
              :text="['hey, how are you?']"
              sent
              bg-color="cyan-3"
            />
            <q-chat-message
              style="  padding: 0.5rem;"
              name="Jane"
              avatar="https://cdn.quasar.dev/img/avatar2.jpg"
              :text="['doing fine, how r you?']"
              bg-color="light-blue-13"
            />
          </div>
          <div class="area">
            <q-input
              label="Write to your new friend"
              borderless
              autogrow
              type="textarea"
            />
          </div>
        </div>
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
.area {
  margin: 0;
  border-radius: 2rem;
  position: absolute;
  z-index: 5;
  bottom: 0;
  //height: 100%;
  width: 100%;
  background-color: #E1F0FC;
}
label{
  position: relative;
  padding-left: 10px;
}
label:before{
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  righth: 0;
  top: 0;
  bottom: 0;

  background-repeat: no-repeat;
  background-image: url($imgPath  + "settings.png");

}

.content {
  margin-top: -110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  z-index: 5;
}

h2 {

  z-index: 5;
  font-family: Montserrat-ExtraBold;
  font-weight: bold;
  color: $red;
}

h4 {
  font-family: Montserrat-Regular;
  font-weight: 700;
  color: $red;
}

.set {
  display: flex;
  flex-direction: row;
}

.user {
  margin-right: 0.5rem;
  width: 42px;
  height: 42px;
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url($imgPath  + "settings.png");

  &:hover {
    opacity: 50%;
  }
}

.settings {
  margin-left: 0.5rem;
  width: 42px;
  height: 42px;
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url($imgPath  + "user.png");

  &:hover {
    opacity: 50%;
  }
}

.chose {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.tabs {
  box-shadow: none;
  font-family: Montserrat-Regular;
  font-weight: normal;

  &:hover {
    box-shadow: none;
    background-position: center;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-image: url($imgPath  + "tab-hover.png");
    border: none;

  }

}

.chatting {
  padding: 0.5rem 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  width: 611px;
  height: 280px;
  background-color: #C4C4C4;
  margin: 0 0.5rem 0 0;
  border: solid #ffffff 2px;
}

.search2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  width: 611px;
  height: 280px;
  background-color: #C4C4C4;
  margin: 0.5rem 0 0 0;
  border: solid #ffffff 2px;
}

.searching {
  border-radius: 3rem;
  background-color: #CDE7FD;
  font-size: 1.3rem;
  font-weight: 400;
  text-transform: none;
}

.poly {
  margin: auto;
  margin: 0 0.5rem 0 0;
  width: 25px;
  height: 25px;
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url($imgPath  + "Polygon 1.png");
}

.mic {
  margin: 0 0 0.5rem 0;
  width: 50px;
  height: 50px;
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url($imgPath  + "Microphone.png");

  &:hover {
    opacity: 50%;
  }

}

.cam {
  margin: 0.5rem 0 0 0;
  width: 50px;
  height: 50px;
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url($imgPath  + "Camera.png");

  &:hover {
    opacity: 50%;
  }
}

.chat {
  position: relative;
  border-radius: 2rem;
  background-color: #ffffff;
}

</style>
