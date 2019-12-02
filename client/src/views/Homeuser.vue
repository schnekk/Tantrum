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
        src="@/assets/STREADDIT (1).png"
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
       <v-col cols="7">
      </v-col>
         <v-avatar enabled class="profile" > 
      <img class=""
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
     <v-list-item > 
       <v-list-item-content >
              <v-list-item-title class="title m">Marcus Obrien</v-list-item-title>
              <v-list-item-subtitle>
                <v-btn text x-small Lowercase>Log out</v-btn>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
         
    </v-avatar> 
    </v-row>
  </v-app-bar>

  <v-content>
    <v-card class="mb-10">
    <v-img
      class="white--text align-end"
      height="450px"
      src="@/assets/monsterhunter.png"
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
          <v-img :src="require('@/assets/DeathStrading.jpg')" aspect-ratio="2"></v-img>
        <div class="ma-2"><hl class="display-1">Death Strading</hl></div>
        <v-btn text class="ml-4" >INFO</v-btn>
        <v-btn text class="" >FORUM</v-btn>
      </v-col>
      <v-col cols="3">
          <v-img :src="require('@/assets/anthem.jpg')" aspect-ratio="2"></v-img>
       <div class="ma-2"><hl class="display-1">Anthem</hl></div>
        <v-btn text class="ml-4" >INFO</v-btn>
        <v-btn text class="" >FORUM</v-btn>
      </v-col>
     
      <v-col cols="3">
          <v-img :src="require('@/assets/AssassinOdyssey.png')" aspect-ratio="2"></v-img>
       <div class="ma-2"><hl class="display-1">Assassin Creed Odyssey</hl></div>
        <v-btn text class="ml-4" >INFO</v-btn>
        <v-btn text class="" >FORUM</v-btn>
      </v-col>
     </v-row>
       <v-row justify="space-around">
     <v-col cols="3">
          <v-img :src="require('@/assets/tomclancy.jpg')" aspect-ratio="2"></v-img>
       <div class="ma-2"><hl class="display-1">The Division 2</hl></div>
        <v-btn text class="ml-4" >INFO</v-btn>
        <v-btn text class="" >FORUM</v-btn>
      </v-col>
       <v-col cols="3">
          <v-img :src="require('@/assets/gta5.jpg')" aspect-ratio="2"></v-img>
       <div class="ma-2"><hl class="display-1">GTA V</hl></div>
        <v-btn text class="ml-4" >INFO</v-btn>
        <v-btn text class="" >FORUM</v-btn>
      </v-col>
      <v-col cols="3">
          <v-img :src="require('@/assets/reddead2.jpg')" aspect-ratio="2"></v-img>
       <div class="ma-2"><hl class="display-1">Red Dead Redemption 2</hl></div>
        <v-btn text class="ml-4" >INFO</v-btn>
        <v-btn text class="" >FORUM</v-btn>
      </v-col>
     </v-row>


  </v-container>
    
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