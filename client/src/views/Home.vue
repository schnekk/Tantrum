<template>
<v-app>
  <v-content>
    <v-card class="mb-10">


      <router-link to="monsterhunterinfo"
      class="link1">
      <v-img
        class="white--text align-end"
        height="450px"
        src="@/assets/monsterhunter.png"
      >
        <v-card-title class="display-1 ">Monter Hunter World : Iceborn</v-card-title>
      </v-img>
      </router-link>
    </v-card>
    
    <div class="ma-5">
      <hl class ="display-2">Feature&Recommended</hl> 
    </div>
    <v-container fluid>
      <v-row justify="space-around">
        <v-col cols="3">
           <router-link to="deathinfo">
           <v-img :src="require('@/assets/DeathStrading.jpg')" aspect-ratio="2"></v-img></router-link>
           
          <div class="ma-2">
            <router-link to="deathinfo" class="link1 display-1"> Death Strading </router-link>
            
            </div>
         <router-link to="deathinfo" class="link1">  <v-btn text class="ml-4" >INFO</v-btn></router-link>
          <v-btn text class="" >FORUM</v-btn>
        </v-col>

         
        <v-col cols="3">
          <router-link to="antheminfo">
          <v-img src="@/assets/anthem.jpg" aspect-ratio="2"></v-img>
          </router-link>
          <div class="ma-2"><router-link to="deathinfo" class="link1 display-1"> Anthem </router-link></div>
          <router-link to="antheminfo" class="link1"> <v-btn text class="ml-4" >INFO</v-btn></router-link>
          <v-btn text class="" >FORUM</v-btn>   
        </v-col>         

          
        <v-col cols="3">    
          <router-link to="assassininfo">      
          <v-img src="@/assets/AssassinOdyssey.png" aspect-ratio="2"></v-img>
         </router-link>
          <div class="ma-2"><router-link to="deathinfo" class="link1 display-1"> Assassin Creed Odyssey</router-link></div>
          <router-link to="assassininfo" class="link1"> <v-btn text class="ml-4" >INFO</v-btn> </router-link>
          <v-btn text class="" >FORUM</v-btn>
        </v-col>
      </v-row>

      <v-row justify="space-around">
        <v-col cols="3">
          <router-link to="cyberinfo">
          <v-img src="@/assets/cyber.png" aspect-ratio="2"></v-img>
          </router-link>
          <div class="ma-2"><router-link to="deathinfo" class="link1 display-1"> The Division 2 </router-link></div>
          <router-link to="cyberinfo" class="link1"> <v-btn text class="ml-4" >INFO</v-btn></router-link>
          <v-btn text class="" >FORUM</v-btn>
        </v-col>


        <v-col cols="3">
          <router-link to="gtainfo">
          <v-img src="@/assets/gta5.jpg" aspect-ratio="2"></v-img>
          </router-link>
          <div class="ma-2"><router-link to="deathinfo" class="link1 display-1"> GTA V </router-link></div>
          <router-link to="gtainfo" class="link1"> <v-btn text class="ml-4" >INFO</v-btn></router-link>
          <v-btn text class="" >FORUM</v-btn>
        </v-col>


        <v-col cols="3">
          <router-link to="reddeadinfo">
          <v-img src="@/assets/reddead2.jpg" aspect-ratio="2"></v-img>
          </router-link>
          <div class="ma-2"><router-link to="deathinfo" class="link1 display-1"> Red Dead Redemption 2 </router-link></div>
          <router-link to="deathinfo" class="link1"> <v-btn text class="ml-4" >INFO</v-btn> </router-link>        
          <v-btn text class="" >FORUM</v-btn>
        </v-col>
      </v-row>   
    </v-container>
  </v-content>
</v-app>
</template>

<script>

export default {
  name: "Home",
  components: {
  },
  data: () => ({
    
  }),
}
</script>
<style scoped>
  .link1 {    
    text-decoration: none; 
    color:black
  }  
</style>
