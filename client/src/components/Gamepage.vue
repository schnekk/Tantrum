<template>
  <v-app>
    <v-app-bar
  
      app
      class="justify-center"
      color="#212121"
      dark
    >


      <img
        class ="ma-4"
        :src="require('@/assets/STREADDIT (1).png')"
        alt="Logo"
        width="auto"
        height="40%"
        style="cursor: pointer"
      >
  
       <img
        class ="ma-4"
        :src="require('@/assets/Untitled.png')"
        sm="1"
        width="auto"
        height="40%"
      >
      
  
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


  <!--<v-card
    class="ma-10"
    height="80%"
    color="white"
    width="600px"
  >
    <v-card-text class ="black--text">
      search 
      <v-icon >search</v-icon>
    </v-card-text>
    <v-icon>mdi-contact-mail</v-icon>
  </v-card> -->
   <img
        class ="ma-4"
        :src="require('@/assets/Untitled.png')"
        sm="1"
        width="auto"
        height="40%"
        
      >
      
      <v-btn class="ma" outlined color>Log in</v-btn>
      <v-btn class="ma-4" outlined color>Sign up</v-btn>

    </v-app-bar>