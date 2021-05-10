<template>
  <div class="main">
    <div class="imgMain">
      <q-img alt="Main" src="Union.png" style="height: 35%; width:35%; float: left; position: relative;
         bottom: 340px;
         margin-right: -250px;
          left:0;
         z-index: 1"/>
      <q-img alt="Main" src="Team.png"
             style="right: 50px;height: 35%; width: 35%;
             position: relative;
             float: right;
             z-index: 1"/>
    </div>

    <div class="content">
      <h2 style="z-index: 2; ">MelodyCam</h2>
      <p>
        Find new friends by video chatting with people from all over the world!
      </p>
      <h6 style="opacity: 50%; margin: 1rem 0; z-index: 2;">
        *All featres are free for our user. You will <br> need to be logged to use our cam site.
      </h6>
      <button-main></button-main>
      <p style="padding: 0.7rem 0 0 0">Don’t have account?</p>
      <p style="color: #0E5979">Create it now!</p>
    </div>
  </div>
</template>

<script>
import ButtonMain from "components/ButtonMain";

export default {
  name: "MainPage",
  components: {ButtonMain}
}
</script>

<style lang="scss" scoped>


p {
  font-size: 2rem;
  z-index: 2;
  margin: 1rem 0;
}

.content {
  margin: 50px 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

}

h2 {
  z-index: 2;
  font-family: Montserrat-ExtraBold;
  font-weight: bold;
  color: $red;
  margin: 5rem 0 0 0;
}

</style>
