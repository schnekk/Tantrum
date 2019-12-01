<template>
  <v-app>
  <v-app-bar  
      app
      class="justify-center"
      color="#212121"
      dark>
      
      
      <v-col cols="1">
       <v-appbar-title>
         <img
        class =""
        src="./assets/STREADDIT (1).png"
        alt="Logo"
        width="auto"
        height="10%"
        style="cursor: pointer"
      >
       </v-appbar-title>
      </v-col>

     <v-col cols="1">
      </v-col>

      <v-col cols="8">
          <v-text-field
        solo
        class="ma-4"
        dense
        background-color="white"
        light
        width="10px"
        hide-details
        label=" Search"
        prepend-inner-icon="mdi-magnify"
      /> 
      </v-col>

  
    <v-row justify="">
       <v-col cols="4">
      </v-col>
        <v-btn class="ml-4" outlined color>Log in</v-btn>
        <v-btn class="ml-3" outlined color>Sign up</v-btn>  
    </v-row>

      



  </v-app-bar>

  <v-content>
    <v-card class="mb-10">
    <v-img
      class="white--text align-end"
      height="450px"
      src="./assets/monsterhunter.png"
    >
      <v-card-title class="display-1">Monter Hunter World : Iceborn</v-card-title>
    </v-img>
      </v-card>

       <div class="ma-5">
         <hl 
         class ="display-2">Feature&Recommended</hl>
       </div>
   <v-container fluid>
    <v-row justify="space-around">
      <v-col cols="3">
        <v-img src="./assets/monsterhunter.png" aspect-ratio="2"></v-img>
        <div class="ma-2"><hl class="display-1">Monters Hunter</hl></div>
        <v-btn text class="ml-4" >INFO</v-btn>
        <v-btn text class="" >FORUM</v-btn>
      </v-col>
      <v-col cols="3">
        <v-img src="./assets/monsterhunter.png" aspect-ratio="2"></v-img>
       <div class="ma-2"><hl class="display-1">Monters Hunter</hl></div>
        <v-btn text class="ml-4" >INFO</v-btn>
        <v-btn text class="" >FORUM</v-btn>
      </v-col>
     
      <v-col cols="3">
        <v-img src="./assets/monsterhunter.png" aspect-ratio="2"></v-img>
       <div class="ma-2"><hl class="display-1">Monters Hunter</hl></div>
        <v-btn text class="ml-4" >INFO</v-btn>
        <v-btn text class="" >FORUM</v-btn>
      </v-col>
     </v-row>
       <v-row justify="space-around">
     <v-col cols="3">
        <v-img src="./assets/monsterhunter.png" aspect-ratio="2"></v-img>
       <div class="ma-2"><hl class="display-1">Monters Hunter</hl></div>
        <v-btn text class="ml-4" >INFO</v-btn>
        <v-btn text class="" >FORUM</v-btn>
      </v-col>
       <v-col cols="3">
        <v-img src="./assets/monsterhunter.png" aspect-ratio="2"></v-img>
       <div class="ma-2"><hl class="display-1">Monters Hunter</hl></div>
        <v-btn text class="ml-4" >INFO</v-btn>
        <v-btn text class="" >FORUM</v-btn>
      </v-col>
      <v-col cols="3">
        <v-img src="./assets/monsterhunter.png" aspect-ratio="2"></v-img>
       <div class="ma-2"><hl class="display-1">Monters Hunter</hl></div>
        <v-btn text class="ml-4" >INFO</v-btn>
        <v-btn text class="" >FORUM</v-btn>
      </v-col>
     </v-row>


  </v-container>
    

  
 <!--
       <img
        class ="ma-5"
        src="./assets/monsterhunter.png"
        alt="Logo"
        position = "center"
        height="10%"
        style="cursor: pointer"
      >
  
      <v-btn depressed class="pink wihte--text">
   <v-icon >mdi-search</v-icon>
   </v-btn>
   <hl>asdasdsa</hl>
   <v-btn class="ma-2" color="indigo" dark>
        <v-icon dark>mdi-cloud-upload</v-icon>
      </v-btn>

       <v-icon>fas fa-lock</v-icon>
       <div
       class=""
       >asdasdasd</div>
       <v-row align="center" justify="center">

         <div>
    <v-autocomplete
      class ="justify-center"
      label="SEARCH"
      :items="components"
    ></v-autocomplete>
  </div>
  

  </v-row>-->
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>