<template>
  <v-app>
    <v-content>
      <v-container fluid>      
        <v-row>
          <v-col cols="12">
            <div class="">
              <hl class ="display-1">Cyberpunk 2077</hl>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-progress-linear
            color="grey"
            rounded
            value="100"
          ></v-progress-linear>
        </v-row>

        <v-row justify="space-around">
          <v-col class="my-4" cols="8">
            <v-img :src="require('@/assets/cy2.jpg')" aspect-ratio="2.3"></v-img>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="1">
            <v-img :src="require('@/assets/cy1.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/cy4.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/cy3.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/cy5.jpg')" aspect-ratio="2"></v-img>
          </v-col>
        </v-row>

        <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="9">
            <v-btn class="ma-1" outlined color>Cyberpunk</v-btn>
            <v-btn class="ma-1" outlined color>Sci-fi</v-btn>
            <v-btn class="ma-1" outlined color>RPG</v-btn>
            <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-1" outlined color v-on="on" >MORE...</v-btn>
      </template>
      <v-card>
        <v-card-title>Game tag</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
           <div class="mt-4" >
             Cyberpunk
           </div>
             <div class="mt-4" >
             Sci-fi
           </div>
             <div class="mt-4" >
             RPG
           </div>
             <div class="mt-4" >
             Open world
           </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-col cols="9">
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
          </v-col>
        </v-row>

        <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="9">
            <div class="headline font-weight-bold" 
            style="width: 20rem;"> 
              Description
            </div>
          </v-col> 
        </v-row>  

        <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <div class="font-weight-bold">           
            Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis
            obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.   
            </div>
          </v-col>
          <v-col cols="2"></v-col> 
        </v-row>

        <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <div class="font-weight-bold"> 
             Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build
             your legend on the streets of Night City. Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth.
             Take the riskiest job of your life and go after a prototype implant that is the key to immortality.
            </div>
          </v-col>
          <v-col cols="2"></v-col> 
        </v-row>  

     


        <v-row>
          <v-col cols="12">
            <div class="">
            <hl class ="display-1">Gameplay Footage</hl>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-progress-linear
            color="grey"
            rounded
            value="100"
          ></v-progress-linear>
        </v-row>

        <v-row>
          <v-col cols="2"></v-col>
          <v-col class="ml-12" cols="8">
            <vue-plyr>
              <div class="plyr__video-embed">
                <iframe class="ml-12" width="1020" height="630" src="https://www.youtube.com/embed/RfmB1eoyzwY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </vue-plyr>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <div class="">
              <hl class ="display-1">Specification</hl>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-progress-linear
            color="grey"
            rounded
            value="100"
          ></v-progress-linear>
          <v-row class="my-4" justify="">
            <v-col cols="1"></v-col>
            <v-col cols="1">
              <v-img class="min=" :src="require('@/assets/cy8.jpg')" aspect-ratio="1"></v-img>
            </v-col>
            <v-col cols="8">
              <div class="headline font-weight-bold mt-5" style="width;"> 
                Cyberpunk 2077
              </div>
              <div class="font-weight-bold"> 
                Developer : CD PROJEKT RED
              </div>
              <div class="font-weight-bold"> 
                Platforms : PC 
              </div>
              <div class="font-weight-bold"> 
                Release Date : 16 Apr, 2020
              </div>
            </v-col> 
          </v-row> 
        </v-row>
    
      
  
   

      
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Gamepage",
  components: {
  },
  data: () => ({
  }),
}
</script>