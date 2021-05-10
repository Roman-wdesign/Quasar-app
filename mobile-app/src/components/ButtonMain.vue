<template>
  <div class="block">
    <slot>
      <q-btn class="signup" label="Sign Up">
      </q-btn>
    </slot>
  </div>
</template>

<script>
export default {
  name: "ButtonMain"
}
</script>

<style lang="scss" scoped>
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
</style>
