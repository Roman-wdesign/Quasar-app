<template>
  <div class="container" >
    <div class="q-pa-md .shadow-20">
      <q-form class="q-gutter-md ">
        <div class="img">
          <q-img alt="SignUp" src="Sign Up.png" style="height: 50%; width:50%;"/>
        </div>
        <h4 class="word">Sign Up</h4>
        <q-input class="form" :input-style="{ color: '#000000' }" label-color="grey-10"  outlined label="E-mail" type="email" style="width: 30rem; border: 1px solid rgba(0, 0, 0, 0.24); "/>
        <q-input class="form" :input-style="{ color: '#000000' }" label-color="grey-10" outlined type="password" label="Password" style="width: 30rem; border: 1px solid rgba(0, 0, 0, 0.24)"/>
      </q-form>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-sm" >
        <q-checkbox class="check-1" color="blue" v-model="blue" label="Remember my data"/>
      </div>

      <div class="q-px-sm">
      </div>
    </div>
    <button-main>
      <template>
        <q-btn class="signup" label="Next"></q-btn>
      </template>
    </button-main>
  </div>
</template>

<script>
import ButtonMain from "components/ButtonMain";

export default {
  components: {ButtonMain},
  data() {
    return {
      blue:true,
      val: true,
      text: '',
      label: 'Next',
    }
  },
  name: "TheSignUp"
}
</script>

<style lang="scss" scoped>

.img{
  @media (max-width: 414px){
    padding: 0;
    margin: 0;
  }
}

.container {
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  padding: 5rem 0;
  border-radius: 50px;
  background-color: #ffffff;
  box-shadow: 2px 8px 8px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 8px 8px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 8px 8px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: 414px){
    height: 761px;
    border-radius: 0;
    box-shadow: none;
    max-width: 30rem;
    margin: 70px 0 30px 0;
    padding: 0;
  }
}
.word{
  font-weight: bold;
  color: $red;
  margin: 0;
}
.form{
  @media (max-width: 414px){
    max-width: 20rem;
  }
}
</style>
