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
.button{
  color: #ffffff;
  background-color: $menu;
}
</style>
