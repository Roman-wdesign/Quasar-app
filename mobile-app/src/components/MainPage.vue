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
        Find new friends by video chatting with  people from all over the world!
      </p>
      <h6 style="opacity: 50%; margin: 1rem 0; z-index: 2;">
        *All featres are free for our user. You will <br> need to be logged to use our cam site.
      </h6>
      <q-btn class="signup" label="Sign Up"/>
      <p style="padding: 0.7rem 0 0 0">Don’t have account?</p>
      <p style="color: #0E5979">Create it now!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage"
}
</script>

<style lang="scss" scoped>


p {
  font-size: 2rem;
  z-index: 2;
  margin: 1rem 0;
}

.signup {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: none;
  font-size: 1.2rem;
  color: black;
  margin: auto;
  border-radius: 5rem;
  width: 9rem;
  height: 2rem;
  background-color: $red;
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
