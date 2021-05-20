<template>
  <div class="container" >
    <div class="q-pa-md .shadow-20">
      <q-form class="q-gutter-md ">
        <div class="img">
          <q-img alt="SignUp" src="Sign Up.png" style="height: 50%; width:50%;"/>
        </div>
        <h4 class="word">Login</h4>
        <q-input class="form" :input-style="{ color: '#000000' }" label-color="grey-10"  outlined label="E-mail" type="email" style="width: 30rem;  border: 1px solid rgba(0, 0, 0, 0.24);"
        />
        <q-input class="form" :input-style="{ color: '#000000' }" label-color="grey-10"  outlined type="text" label="Name" style="width: 30rem;  border: 1px solid rgba(0, 0, 0, 0.24);"
        />
        <q-input class="form" :input-style="{ color: '#000000' }" label-color="grey-10"  outlined type="password" label="Password" style="width: 30rem;  border: 1px solid rgba(0, 0, 0, 0.24);"
        />
      </q-form>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-sm">
        <q-checkbox class="check-1" color="blue" v-model="val" label="Remember my data"/>
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
  name: "TheLogin",
  components: {ButtonMain},
  data() {
    return {
      val: true,
      text: '',
      label: 'Next',
    }
  },
}
</script>


<style lang="scss" scoped>


.container {
@include container-1;
  padding: 2rem 0;

  @media (max-width: 414px){
    @include form-1;
  }
}
.form{
  @media (max-width: 414px){
    max-width: 20rem;
  }
}
.word{
  font-weight: bold;
  color: $red;
  margin: 0;
}
</style>
