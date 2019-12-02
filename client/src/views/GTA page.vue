<template>
  <v-app>
    <v-content>
      <v-container fluid>      
        <v-row>
          <v-col cols="12">
            <div class="">
              <hl class ="display-1">Grand Thefr Auto V</hl>
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
            <v-img :src="require('@/assets/gta.jpg')" aspect-ratio="2.3"></v-img>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="1">
            <v-img :src="require('@/assets/gta1.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/gta2.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/gta3.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/gta4.jpg')" aspect-ratio="2"></v-img>
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
            When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.
            Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.   
            </div>
          </v-col>
          <v-col cols="2"></v-col> 
        </v-row>

        <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <div class="font-weight-bold"> 
              The game offers players a huge range of PC-specific customization options, including over 25 separate configurable settings for texture quality, shaders, tessellation, anti-aliasing and more, as well as support and extensive customization for mouse and keyboard controls. Additional options include a population density slider to control car and pedestrian traffic, as well as dual and triple monitor support, 3D compatibility, and plug-and-play controller support. 
            </div>
          </v-col>
          <v-col cols="2"></v-col> 
        </v-row>  

        <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <div class="font-weight-bold"> 
             Grand Theft Auto V for PC also includes Grand Theft Auto Online, with support for 30 players and two spectators. Grand Theft Auto Online for PC will include all existing gameplay upgrades and Rockstar-created content released since the launch of Grand Theft Auto Online, including Heists and Adversary modes.
             The PC version of Grand Theft Auto V and Grand Theft Auto Online features First Person Mode, giving players the chance to explore the incredibly detailed world of Los Santos and Blaine County in an entirely new way.
            </div>
          </v-col>
            <v-col cols="2"></v-col> 
        </v-row>

         <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <div class="font-weight-bold"> 
            Grand Theft Auto V for PC also brings the debut of the Rockstar Editor, a powerful suite of creative tools to quickly and easily capture, edit and share game footage from within Grand Theft Auto V and Grand Theft Auto Online. The Rockstar Editor’s Director Mode allows players the ability to stage their own scenes using prominent story characters, pedestrians, and even animals to bring their vision to life. Along with advanced camera manipulation and editing effects including fast and slow motion, and an array of camera filters, players can add their own music using songs from GTAV radio stations, or dynamically control the intensity of the game’s score. Completed videos can be uploaded directly from the Rockstar Editor to YouTube and the Rockstar Games Social Club for easy sharing.
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
                <iframe class="ml-12" width="1020" height="630" src="https://www.youtube.com/embed/wrFZ3NNyKtE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
              <v-img class="min=" :src="require('@/assets/gta6.jpg')" aspect-ratio="1"></v-img>
            </v-col>
            <v-col cols="8">
              <div class="headline font-weight-bold mt-5" style="width;"> 
                Grand Theft Auto V
              </div>
              <div class="font-weight-bold"> 
                Developer : Rockstar North 
              </div>
              <div class="font-weight-bold"> 
                Platforms : PC , PS4
              </div>
              <div class="font-weight-bold"> 
                Release Date : 14 Apr, 2015
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
              8.3/10
            </div>
          </v-col>
          <v-col class="" cols="3">
            <div class="font-weight-bold">
              93%
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
              Don't get the game to play only online, i got banned once becasue my hard drive failed reinstalled the game and windows and got banned for 4 weeks no modds or cheating, rockstar support says i just gotta wait even tho i had video proof.I got banned again from modders/cheatters giving me money and doing things to my online guy witch froze my PC a few times or the game. Now im banned till the year 2035 still no help from supportThe new anti-cheat system rockstar has seems to banned players even tho they dont cheatYes the game is great for story mode only, online is messed up with all the cheaters, and rockstar support and anti cheat system chances are will banned you and wont help you.
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
              
3 YEARS AGO
Something EVERYBODY who owns this game on PC should do. Run the game then Alt-Tab out of it. Open task manager, find GTA5.exe under the applications tab. Then right click it and set priority to high (Win10 users right click gta5.exe then "show details" then right click gta5.exe and set priority to high). Then alt-tab back into the gta5 window (sometimes you have to alt-return to make it go back to full screen).On both of my systems this has made a big difference in how the game runs. For me it's the difference between regular dips to 40fps or constant 60fps. You have to do it every time you run the game or if the game restarts due to changes to gfx settings. Both my i7 930 system and my i7 6700k system both see improvements doing this.
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