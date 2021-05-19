<template>
  <div class="main">
    <div class="imgMain">
      <q-img class="img-3" alt="Main" src="Union.png"/>
      <q-img class="img-4" alt="Main" src="Team.png"/>
    </div>

    <div class="content">
      <h2>MelodyCam</h2>
      <h4>
        Find new friends by video chatting with <br> people from all over the world!
      </h4>
      <h6 style="opacity: 50%; margin: 1rem 0; z-index: 2;">
        *All featres are free for our user. You will <br> need to be logged to use our cam site.
      </h6>
      <button-main></button-main>
      <p style="padding: 0.7rem 0 0 0">Don’t have account?</p>
      <a href="#" style="color: #0E5979; text-decoration: none;">Create it now!</a>

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
h4{
  z-index: 3;
  @media (max-width: 414px){
    margin: 1rem 0;
  }
}


.img-4{
  right: 50px;
  height: 35%;
  width: 35%;
  position: relative;
  float: right;
  z-index: 1;
  @media (max-width: 414px){
    bottom: -700px;
    right: -170px;
    height: 65%;
    width: 65%;
    position: relative;
    float: right;
    z-index: -1;

  }
}

.img-3{

  height: 35%;
  width:35%;
  float: left;
  position: relative;
  bottom: 340px;
  margin-right: -180px;
  left:0;
  z-index: 1;


  @media (max-width: 414px){
    height: 65%; width: 65%;
    bottom: 0;
    float: left; position: relative;
    top: -15px;
    left: -130px;
    transform: rotate(17deg);
    margin-bottom: -250px;
    z-index: -1;

  }
}


p {
  font-size: 1rem;
  z-index: 2;
  margin: 1rem 0;
}

.content {
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  @media (max-width: 414px){
    margin-top:  -120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    margin-bottom: -300px;
  }

}

h2 {

  font:{
    size: 4.5rem;
    family: Montserrat-ExtraBold;
    weight: bold;
  }

  z-index: 2;
  color: $red;
  margin: 5rem 0 0 0;
  @media (max-width: 414px){
    font:{
      size: 3rem;
      family: Montserrat-ExtraBold;
      weight: bold;
    }
  }
}

</style>
