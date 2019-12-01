<template>
  <v-app>
    <Bar/>

    <v-content>      
     <!-- <HelloWorld/> -->    
  <!-- <Buttonlogin/> -->
 <!-- <Profile/>  -->
 <Gamepageuser/>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Bar from './views/Bar';
//import Profile from './views/Profile';
import Gamepageuser from './components/Gamepageuser';
//import Buttonlogin from './components/Buttonlogin'
//import TEST from './components/TEST'
export default {
  name: 'App',

  components: {
    /*HelloWorld,*/Bar,/*Buttonlogin*//*Profile,*//*TEST*/Gamepageuser
  },

  data: () => ({
    //
  }),
};
</script>
