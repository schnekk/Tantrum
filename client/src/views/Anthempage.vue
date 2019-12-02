<template>
  <v-app>
    <v-content>
      <v-container fluid>      
        <v-row>
          <v-col cols="12">
            <div class="">
              <hl class ="display-1">Anthem</hl>
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
            <v-img :src="require('@/assets/an1.jpg')" aspect-ratio="2.3"></v-img>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="1">
            <v-img :src="require('@/assets/an6.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/an3.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/an4.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/an5.jpg')" aspect-ratio="2"></v-img>
          </v-col>
        </v-row>

        <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="9">
            <v-btn class="ma-1" outlined color>Co-op</v-btn>
            <v-btn class="ma-1" outlined color>Action</v-btn>
            <v-btn class="ma-1" outlined color>Shooting</v-btn>
            <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-1" outlined color v-on="on" >MORE...</v-btn>
      </template>
      <v-card>
        <v-card-title>Game tag</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
           <div class="mt-4" >
             Co-op
           </div>
             <div class="mt-4" >
             Action
           </div>
             <div class="mt-4" >
             Shooting
           </div>
             <div class="mt-4" >
             RPG
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
            Anthem is an online multiplayer action role-playing video game developed by BioWare and published by Electronic Arts. The game was released worldwide for Microsoft Windows, PlayStation 4 and Xbox One on February 22, 2019.
           Set on an unnamed planet, players assume the role of Freelancers, heroic adventurers who wear powerful exosuits to defend humanity from the threats beyond their cities' walls. The game's title refers to the Anthem of Creation, a powerful and mysterious force responsible for most of the extraordinary technology, phenomena, and threats in the world. In the main narrative, the player's Freelancer is tasked with stopping the villainous Monitor from seizing control of the Anthem.
             Anthem received mixed reviews from critics, who criticized it for its grind, technical aspects, and story, contributing to an experience that felt repetitive and shallow, although its combat, flight controls, and visuals received some praise. Despite some positive sales achievements, the game failed to meet Electronic Arts' commercial expectations.   
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
                <iframe class="ml-12" width="1020" height="630" src="https://www.youtube.com/embed/SCQzhupGrvk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
             
            </v-col>
            <v-col cols="8">
              <div class="headline font-weight-bold mt-5" style="width;"> 
                Anthem 
              </div>
              <div class="font-weight-bold"> 
                Developer : BioWare
              </div>
              <div class="font-weight-bold"> 
                Platforms : PC , PS4 , X box 1
              </div>
              <div class="font-weight-bold"> 
                Release Date :  February 22, 2019
              </div>
            </v-col> 
          </v-row> 
        </v-row>
    
        <v-row>
          <v-col cols="12">
            <div class="">
              <hl class ="display-1">Reviews</hl>
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

        <v-row class="my-4">
          <v-col cols="1"></v-col>
          <v-col  cols="3">
            <v-img :src="require('@/assets/Trusted.png')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col class="mx-10" cols="3">
            <v-img class="my-12" :src="require('@/assets/Meta.png')" aspect-ratio="4"></v-img>
          </v-col>
          <v-col cols="3">
            <v-img :src="require('@/assets/IGN.png')" aspect-ratio="2"></v-img>
          </v-col>
        </v-row>  

        <v-row justify="space-around">
          <v-col cols="2"></v-col>
          <v-col class="" cols="3">
            <div class="font-weight-bold">
              3/5
            </div>
          </v-col>
          <v-col class="m" cols="3">
            <div class="font-weight-bold">
              7/10
            </div>
          </v-col>
          <v-col class="" cols="3">
            <div class="font-weight-bold">
              75%
            </div>
          </v-col>
        </v-row>

        <v-row class="mt-4" justify="">
          <v-col cols="2"></v-col>
          <v-col cols="9">
            <div class="headline font-weight-bold" style="width: 20rem;"> 
              Your Review
            </div>
          </v-col> 
        </v-row>  
   
        <v-row class="">
          <v-col cols ="2"></v-col>
          <v-col cols = "8" > 
            <v-textarea
              solo
              auto-grow
              name="input-7-4"
              label="Post a review"
              row-height="50"
              hide-details
            ></v-textarea>
          </v-col>
        </v-row>  

        <v-row class="">
          <v-col class="mx-7" cols ="9"></v-col>
          <v-col cols = "" > 
            <v-btn class="ma" outlined color>Post</v-btn>
          </v-col>
        </v-row> 

        <v-row>
          <v-progress-linear
            color="grey"
            rounded
            value="100"
          ></v-progress-linear>
        </v-row>

        <v-row class="ma-4">
          <v-col cols ="3"></v-col>
          <v-col cols = "1" > 
            <v-avatar class="profile" > 
                <img class="ml-5"
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
              <v-list-item > 
                <v-list-item-content >
                  <v-list-item-title class="title mt-8">Marcus Obrien</v-list-item-title>
                  <v-list-item-subtitle>6 day ago</v-list-item-subtitle>
                  <div class="text-center">
                    <v-rating color="yellow darken-3"
                      v-model="rating"
                      half-increments>
                    </v-rating>
                  </div>
                </v-list-item-content>
              </v-list-item>
              <div class="font-weight-bold" style="width: 20rem;"></div>
            </v-avatar>
          </v-col>
          <v-col cols="5">
            <div class="font-weight-bold ml-5"> 
              That's the problem with Anthem: It coasts entirely on the momentum of its stunning first impression. Once that new game smell began to fade, I started to see Anthem as a derivative, buggy, and at times exasperatingly soulless world that fails to weave BioWare's unique storytelling with a co-op RPG shooter.
            </div>
          </v-col>
          <v-col cols="3"></v-col> 
        </v-row>

        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <v-divider></v-divider>
          </v-col>
        </v-row>

        <v-row class="ma-4">
          <v-col cols ="3"></v-col>
          <v-col cols = "1" > 
            <v-avatar class="profile" > 
              <img class="ml-5"
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
              <v-list-item > 
                <v-list-item-content >
                  <v-list-item-title class="title mt-8">Marcus</v-list-item-title>
                  <v-list-item-subtitle>6 day ago</v-list-item-subtitle>
                  <div class="text-center">
                    <v-rating color="yellow darken-3"
                      v-model="rating"
                      half-increments>
                    </v-rating>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-avatar>
          </v-col>
          <v-col cols="5">
            <div class="font-weight-bold ml-5"> 
            Anthem is a deceptive game. From the first moment I stepped into its world and started meeting its characters, I was stunned by how gorgeous everything and everyone is. The jungles of Bastion are jaw-dropping, an alien landscape full of fantastic vistas and wondrous ruins. Likewise, Anthem's characters are alluring at first glance. When I first met them, I was fascinated by how lifelike their expressions were, and the voice acting for most of the main characters is charming and expressive. They're a likeable group of people that I was excited to get to know.
            </div>
          </v-col>
          <v-col cols="3"></v-col> 
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