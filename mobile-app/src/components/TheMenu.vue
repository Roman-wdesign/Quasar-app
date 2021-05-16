<template >
  <div class="q-pa-md" >
    <div class="q-gutter-md">
      <q-btn class="button"  label="Menu" style="z-index: 300; !important;">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable to="/" v-close-popup>
              <q-item-section>Home</q-item-section>
            </q-item>

            <q-item clickable to="/signup" v-close-popup>
              <q-item-section>Sign Up</q-item-section>
            </q-item>

            <q-item clickable to="/login" v-close-popup>
              <q-item-section>Login</q-item-section>
            </q-item>

            <q-item clickable to="/desktop" v-close-popup>
              <q-item-section>Desktop</q-item-section>
            </q-item>

          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheMenu"
}
</script>

<style lang="scss" scoped>
.q-pa-md{
  @media (max-width: 414px){
    display: none;
  }
}

.button{
  color: #ffffff;
  background-color: $menu;
}
</style>
