<template>
<v-app>
  <v-content>
    <v-card class="mb-10">
      <router-link to="info">
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
      <hl class ="display-2">Feature&Recommended</hl>  <hl>toAdminCreate  </hl> <hl>toAdminGamepage  </hl> <hl>toAdminHome  </hl> <hl>toAdminProfile  </hl>
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
          <v-img src="@/assets/anthem.jpg" aspect-ratio="2"></v-img>
          <div class="ma-2"><hl class="display-1">Anthem</hl></div>
          <v-btn text class="ml-4" >INFO</v-btn>
          <v-btn text class="" >FORUM</v-btn>
        </v-col>
        <v-col cols="3">
          <v-img src="@/assets/AssassinOdyssey.png" aspect-ratio="2"></v-img>
          <div class="ma-2"><hl class="display-1">Assassin Creed Odyssey</hl></div>
          <v-btn text class="ml-4" >INFO</v-btn>
          <v-btn text class="" >FORUM</v-btn>
        </v-col>
      </v-row>

      <v-row justify="space-around">
        <v-col cols="3">
          <v-img src="@/assets/tomclancy.jpg" aspect-ratio="2"></v-img>
          <div class="ma-2"><hl class="display-1">The Division 2</hl></div>
          <v-btn text class="ml-4" >INFO</v-btn>
          <v-btn text class="" >FORUM</v-btn>
        </v-col>
        <v-col cols="3">
          <v-img src="@/assets/gta5.jpg" aspect-ratio="2"></v-img>
          <div class="ma-2"><hl class="display-1">GTA V</hl></div>
          <v-btn text class="ml-4" >INFO</v-btn>
          <v-btn text class="" >FORUM</v-btn>
        </v-col>
        <v-col cols="3">
          <v-img src="@/assets/reddead2.jpg" aspect-ratio="2"></v-img>
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
  name: "Home",
  components: {
  },
  data: () => ({
    
  }),
}
</script>
<style scoped>
  .link {    
    text-decoration: none;
    color: #FFFF  
  }
  
</style>