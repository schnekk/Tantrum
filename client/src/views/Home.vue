<template>
<v-app>
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
      <hl class ="display-2">Feature&Recommended</hl>
    </div>
    <v-container fluid>
      <v-row justify="space-around">
        <v-col cols="3">
          <v-img src="@/assets/monsterhunter.png" aspect-ratio="2"></v-img>
          <div class="ma-2"><hl class="display-1">Monters Hunter</hl></div>
          <v-btn text class="ml-4" >INFO</v-btn>
          <v-btn text class="" >FORUM</v-btn>
        </v-col>
        <v-col cols="3">
          <v-img src="@/assets/monsterhunter.png" aspect-ratio="2"></v-img>
          <div class="ma-2"><hl class="display-1">Monters Hunter</hl></div>
          <v-btn text class="ml-4" >INFO</v-btn>
          <v-btn text class="" >FORUM</v-btn>
        </v-col>
        <v-col cols="3">
          <v-img src="@/assets/monsterhunter.png" aspect-ratio="2"></v-img>
          <div class="ma-2"><hl class="display-1">Monters Hunter</hl></div>
          <v-btn text class="ml-4" >INFO</v-btn>
          <v-btn text class="" >FORUM</v-btn>
        </v-col>
      </v-row>

      <v-row justify="space-around">
        <v-col cols="3">
          <v-img src="@/assets/monsterhunter.png" aspect-ratio="2"></v-img>
          <div class="ma-2"><hl class="display-1">Monters Hunter</hl></div>
          <v-btn text class="ml-4" >INFO</v-btn>
          <v-btn text class="" >FORUM</v-btn>
        </v-col>
        <v-col cols="3">
          <v-img src="@/assets/monsterhunter.png" aspect-ratio="2"></v-img>
          <div class="ma-2"><hl class="display-1">Monters Hunter</hl></div>
          <v-btn text class="ml-4" >INFO</v-btn>
          <v-btn text class="" >FORUM</v-btn>
        </v-col>
        <v-col cols="3">
          <v-img src="@/assets/monsterhunter.png" aspect-ratio="2"></v-img>
          <div class="ma-2"><hl class="display-1">Monters Hunter</hl></div>
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