<template>
  <div class="main">
    <div class="imgDesktop">
      <q-img alt="Ellipse19" class="Ellipse19" src="/icons/Ellipse-19.png"/>
      <q-img alt="Ellipse18" class="Ellipse18" src="/icons/Ellipse-18.png"/>
    </div>

    <div class="content">
      <h2>MelodyCam</h2>
      <div class="set">
        <a href="#" class="settings" @click="settings=true"></a>
        <a href="#" class="user"></a>
      </div>
      <q-dialog v-model="settings">
        <q-card class="settings-card">
          <q-card-section>
            <div class="set-2">
              <a href="#" class="settings" @click="settings=false"></a>
              <a href="#" class="user"></a>
            </div>
            <h4 class="word">Settings</h4>
            <div class="q-pa-md"
                 style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <q-btn-dropdown
                flat
                style="box-shadow: unset;
                text-transform: none;
                color: #1D1D1D;
                opacity: 50%;"

                label="Select Country">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Russia</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Canada</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <q-btn-dropdown flat style="box-shadow: unset;  text-transform: none; color: #1D1D1D;opacity: 50%;"
                              label="Select  Language">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>English</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>French</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Russian</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <div class="toggle" style="box-shadow: unset;  text-transform: none;">
                <q-toggle
                  style="color: #1D1D1D; opacity: 50%;"
                  keep-color
                  :label="EnableDarkTheme"
                  color="pink"
                  @input="$q.dark.toggle"
                  false-value="Enable Dark Theme"
                  true-value="Disable Dark Theme"
                  v-model="EnableDarkTheme"
                />
              </div>
              <a href="#" style="text-decoration: none; color: black;  opacity: 50%; text-transform: none;">Help</a>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>


    <div class="chose">
      <div class="gender">
        <q-tabs class="shadow-0" v-model="tab" indicator-color="transparent">
          <q-tab :ripple="false" class="tabs" no-shadow name="female" label="Female"/>
          <q-tab :ripple="false" class="tabs" no-shadow name="male" label="Male"/>
          <q-tab :ripple="false" class="tabs" no-shadow name="couple" label="Couple"/>
        </q-tabs>
      </div>
    </div>

    <div class="chatting">
      <div class="video">
        <div class="search">

          <q-btn class="searching" @click="alert=true">
            <div class="poly"></div>
            Searching for female
          </q-btn>

          <q-dialog v-model="alert">
            <q-card
              style="padding: 2rem 0 5rem 0;border-radius: 2rem; max-height: 700px; width: 100%; display: flex;flex-direction: column">
              <q-icon v-close-popup
                      style="padding: 0.5rem;  align-self: flex-end;"
                      size="3.5rem">
                <span class="material-icons">close</span>
              </q-icon>

              <div class="img" style="display: flex; justify-content: center; align-items: center;">
                <q-img alt="SignUp" src="Sign Up.png" style="height: 45%; width:45%;"/>
              </div>
              <q-card-section>
                <h4 class="word">Update</h4>
              </q-card-section>
              <q-card-section class="q-pt-none"
                              style="text-align: center; font-family:' Montserrat-Regular'; font-size: 1.3rem;">
                We have updating our filtering <br> system (Female\Male) and you can <br> now instanly find people
                according <br> to
                your settings.
              </q-card-section>

              <q-card-actions v-close-popup align="center">
                <button-main>
                  <template>
                    <q-btn class="signup" label="Ok, thank you"></q-btn>
                  </template>
                </button-main>
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
        <div class="search2">
          <a href="#" class="mic"></a>
          <a href="#" class="cam"></a>
        </div>
      </div>
      <div class="chat  .shadow-6">
        <h4 style="text-align: center;margin-top: 5px;">Chat</h4>
        <div class="q row justify-center">
          <div style="width: 400px">
            <q-chat-message class="message"
                            style="padding: 0.5rem;color: #1D1D1D"
                            name="me"
                            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                            :text="['hey, how are you?']"
                            sent
                            bg-color="cyan-3"
            />
            <q-chat-message class="message"
                            style="  padding: 0.5rem;color: #1D1D1D"
                            name="Jane"
                            avatar="https://cdn.quasar.dev/img/avatar2.jpg"
                            :text="['doing fine, how r you?']"
                            bg-color="light-blue-13"
            />
          </div>
          <div class="area">
            <div class="area-input">
              <q-input
                :input-style="{ color: '#000000' }"
                clearable
                placeholder="Write to your new friend"
                borderless
                autogrow
                type="textarea"/>
            </div>
            <div class="area-icon">
              <q-btn class="btn-icon" size="12px" flat round :ripple="false" disable>
                <q-icon name="img:icons/emoji.png"/>
              </q-btn>
              <q-btn class="btn-icon" size="12px" flat round :ripple="false" disable>
                <q-icon name="img:icons/send.png"/>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonMain from "components/ButtonMain";


export default {
  components: {ButtonMain},
  data() {
    return {
      tab: "",
      alert: false,
      settings: false,
      EnableDarkTheme: 'Enable Dark Theme',

      onItemClick() {
        console.log('Clicked on an Item')
      }
    }
  },
  methods: {},
  name: "Desktop",

}
</script>

<style lang="scss" scoped>

.body--dark {
  background: $dark-page;
}

.body--light {
  background: #ffffff;
}

.imgDesktop {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: -120px 0 0 0;
  padding: 0 10px;

  @media (max-width: 414px) {
    margin: -90px 0 0 0;
    padding: 0 10px;
  }
}

.Ellipse19 {
  height: 20%;
  width: 20%;
  float: left;
  position: relative;
  z-index: -1;
  @media (max-width: 414px) {
    height: 50%;
    width: 50%;
  }
}

.Ellipse18 {
  height: 10%;
  width: 10%;
  float: right;
  position: relative;
  z-index: -1;
  @media (max-width: 414px) {
    height: 40%;
    width: 40%;
  }
}

.message {
  @media (max-width: 414px) {
    display: none;
  }
}

.main {
  @include flex-1;
  @media (max-width: 414px) {
    max-width: 40rem;
  }
}

.settings-card {
  @include flex-1;
  align-items: center;
  background-color: inherit;
  box-shadow: none;
  right: 0;

  @include card-img;
  background-image: url($imgPath  + "Union-settings.png");
}


.area {
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  margin: 0;
  border-radius: 2rem;
  position: absolute;
  z-index: 5;
  bottom: 0;
  width: 100%;
  background-color: #E1F0FC;
}

.area-icon {
  display: flex;
  flex-direction: row;
}

.area-input {
  width: 100%;
}

label {
  position: relative;
}

.content {
  padding: 0 40px 0 5px;
  margin-top: -210px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  z-index: 5;
  @media (max-width: 414px) {
    max-width: 40rem;
    margin-top: 0;
  }
}

h2 {
  padding-left: 150px;
  z-index: 5;
  font: {
    size: 4rem;
    family: 'Montserrat-ExtraBold';
    weight: bold;
  }

  color: $red;
  @media (max-width: 414px) {
    padding: 0;
    font: {
      size: 2rem;
    }
  }
}

h4 {
  font-family: 'Montserrat-ExtraBold';
  font-weight: bold;
  color: $red;
}

.set {
  display: flex;
  flex-direction: row;
}

.set-2 {
  display: flex;
  float: right;
  position: relative;
}

.settings {
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;
  width: 42px;
  height: 42px;
  @include card-img;
  background-image: url($imgPath  + "settings.png");

  &:hover {
    opacity: 50%;
  }

  @media (max-width: 414px) {
    width: 23px;
    height: 23px;
  }
}

.user {
  margin-left: 0.5rem;
  width: 42px;
  height: 42px;
  @include card-img;
  background-image: url($imgPath  + "user.png");

  &:hover {
    opacity: 50%;
  }

  @media (max-width: 414px) {
    width: 23px;
    height: 23px;
  }
}

.chose {
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.tabs {
  box-shadow: none;
  font:{
    size: 1rem;
    family: 'Montserrat-Regular';
    weight: normal;
  }

  @include card-img;
  background-image: url($imgPath  + "tab-hover.png");
  @media (max-width: 414px){
    font:{
      size: 0.6rem;
    }
  }
}

.chatting {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.search {
  @include search;
  margin: 0 0.5rem 0 0;
  @media (max-width: 414px) {
    max-width: 346px;
    max-height: 280px;
    margin: 0 auto;
  }
}

.search2 {
  @include search;
  margin: 0.5rem 0 0 0;
  @media (max-width: 414px) {
    max-width: 346px;
    max-height: 280px;
    margin: 1rem auto;
  }
}

.searching {
  border-radius: 3rem;
  background-color: #CDE7FD;
  font-size: 1.3rem;
  font-weight: 400;
  text-transform: none;
}

.poly {
  margin: 0 0.5rem 0 0;
  width: 25px;
  height: 25px;
  @include card-img;
  background-image: url($imgPath  + "Polygon 1.png");
}

.mic {
  margin: 0 0 0.5rem 0;
  width: 50px;
  height: 50px;
  @include card-img;
  background-image: url($imgPath  + "Microphone.png");

  &:hover {
    opacity: 50%;
  }
}

.cam {
  margin: 0.5rem 0 0 0;
  width: 50px;
  height: 50px;
  @include card-img;
  background-image: url($imgPath  + "Camera.png");

  &:hover {
    opacity: 50%;
  }
}

.chat {
  position: relative;
  border-radius: 2rem;
  background-color: #ffffff;
  @media (max-width: 414px) {
    width: 100%;
    height: 10rem;
    position: sticky;
  }
}

.word {
  text-align: center;
  font-weight: bold;
  color: $red;
  margin: 0;
}
</style>
