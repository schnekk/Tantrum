<template>
  <v-app>
    <v-content>
      <v-container fluid>      
        <v-row>
          <v-col cols="12">
            <div class="">
              <hl class ="display-1">Red Dead Redemption 2</hl>
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
            <v-img :src="require('@/assets/red.jpg')" aspect-ratio="2.3"></v-img>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="1">
            <v-img :src="require('@/assets/red1.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/red2.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/red3.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/red4.jpg')" aspect-ratio="2"></v-img>
          </v-col>
        </v-row>

        <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="9">
            <v-btn class="ma-1" outlined color>Action</v-btn>
            <v-btn class="ma-1" outlined color>Adventure</v-btn>
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
             Action
           </div>
             <div class="mt-4" >
            Adventure
           </div>
             <div class="mt-4" >
             Shooting
           </div>
             <div class="mt-4" >
             Open World
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
         Red Dead Redemption 2, the critically acclaimed open world epic from Rockstar Games and the highest rated game of the console generation, now enhanced for PC with new Story Mode content, visual upgrades and more.
        Red Dead Redemption 2, the critically acclaimed open world epic from Rockstar Games and the highest rated game of the console generation, now enhanced for PC with new Story Mode content, visual upgrades and more.  
            </div>
          </v-col>
          <v-col cols="2"></v-col> 
        </v-row>


        
        <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <div class="font-weight-bold"> 
        America, 1899. The end of the wild west era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him. 
            </div>
          </v-col>
          <v-col cols="2"></v-col> 
        </v-row>


           
        <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <div class="font-weight-bold"> 
        With all new graphical and technical enhancements for deeper immersion, Red Dead Redemption 2 for PC takes full advantage of the power of the PC to bring every corner of this massive, rich and detailed world to life including increased draw distances; higher quality global illumination and ambient occlusion for improved day and night lighting; improved reflections and deeper, higher resolution shadows at all distances; tessellated tree textures and improved grass and fur textures for added realism in every plant and animal.
            </div>
          </v-col>
          <v-col cols="2"></v-col> 
        </v-row>

   <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <div class="font-weight-bold"> 
       Red Dead Redemption 2 for PC also offers HDR support, the ability to run high-end display setups with 4K resolution and beyond, multi-monitor configurations, widescreen configurations, faster frame rates and more.
            </div>
          </v-col>
          <v-col cols="2"></v-col> 
        </v-row>


           <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <div class="font-weight-bold">       
            Red Dead Redemption 2 for PC also includes additional Story Mode content including Bounty Hunting Missions, Gang Hideouts, Weapons and more; plus free access to the shared living world of Red Dead Online featuring all previously released improvements and the latest content for the complete Online experience including Frontier Pursuits and the specialist Roles of The Bounty Hunter, Trader and Collector, and much more.
            Red Dead Redemption 2 for PC is the ultimate way to experience one of the most critically acclaimed games of all time, winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores.
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
                <iframe class="ml-12" width="1020" height="630" src="https://www.youtube.com/embed/Mc8ptmcCHMI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
               Red Dead Redemption 2
              </div>
              <div class="font-weight-bold"> 
                Developer : Rockstar Games
              </div>
              <div class="font-weight-bold"> 
                Platforms : PC , PS4 
              </div>
              <div class="font-weight-bold"> 
                Release Date :  6 Dec, 2019
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
              5/5
            </div>
          </v-col>
          <v-col class="m" cols="3">
            <div class="font-weight-bold">
              9/10
            </div>
          </v-col>
          <v-col class="" cols="3">
            <div class="font-weight-bold">
              95%
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
              Red Dead Redemption 2 is a masterpiece. No other game has ever tried and succeeded to capture a sense of a time and place long gone while also blending social commentary so well. The addition of a multiplayer mode that's a real step up from Rockstar's last effort makes Red Dead Redemption 2 unmissable on PC.
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
           Red Dead Redemption 2 on PC expands what we saw on consoles a year ago. It brings new content for the campaign in the form of new weapons and missions, as well as a very entertaining photo mode. Technically it's superb and the mouse+keyboard control fits like a glove.
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