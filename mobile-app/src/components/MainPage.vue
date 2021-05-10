<template>
  <div class="main">
    <div class="content">
      <h1>MelodyCam</h1>
      <h4>Find new friends by video chatting with <br>
        people from all over the world!</h4>
      <h5 style="opacity: 50%">*All featres are free for our user. You will <br> need to be logged to use our cam site.</h5>
      <q-btn class="signup"  label="Sign Up"/>
      <p style="padding: 0.7rem 0 0 0">Don’t have account?</p>
      <p style="color: #0E5979">Create it now!</p>
    </div>

    <div class="imgMain">
      <q-img alt="Main" src="Team.png"
             style="height: 35%; max-width: 35%;"/>
    </div>

    <div class="imgUnion">
      <q-img alt="Main" src="Union.png"
             style="height: 35%; max-width: 35%"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage"
}
</script>

<style lang="scss" scoped>
.signup{
  text-transform: none;
  font-size: 1.6rem;
  color: black;
  margin: auto;
  border-radius: 5rem;
  width: 15rem;
  height: 4rem;
  background-color: $red ;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

}


h1 {
  font-family: Montserrat-ExtraBold;
  font-weight: bold;
  color: $red;
}

</style>
