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
          :src="require('@/assets/STREADDIT (1).png')"
          alt="Logo"
          width=""
          height=""
          style="cursor: pointer">
        </v-appbar-title>
      </v-col>
      <v-col cols="1"></v-col>
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
          prepend-inner-icon="mdi-magnify"/> 
      </v-col>
      <v-row justify="">
        <v-col cols="7"></v-col>
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
      <v-container fluid>      
        <v-row>
          <v-col cols="12">
            <div class="">
              <hl class ="display-1">Monter Hunter World : Iceborn</hl>
            <v-btn class="mb-2" text color="pink"><v-icon>mdi-heart</v-icon></v-btn>
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
            <v-img :src="require('@/assets/monsterhunter.png')" aspect-ratio="2.3"></v-img>
          </v-col>
        </v-row>
  
        
        <v-row justify="center">
          <v-col cols="1">
            <v-img :src="require('@/assets/mh1.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/mh2.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/mh4.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/mh5.jpg')" aspect-ratio="2"></v-img>
          </v-col>
        </v-row>

        <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="9">
            <v-btn class="ma-1" outlined color>Co-op</v-btn>
            <v-btn class="ma-1" outlined color>Action</v-btn>
            <v-btn class="ma-1" outlined color>Hunting</v-btn>
             <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-1" outlined color v-on="on" >MORE...</v-btn>
      </template>
      <v-card>
        <v-card-title>Game tag</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
           <div class="mt-4" >
             RPG
           </div>
             <div class="mt-4" >
             Action
           </div>
             <div class="mt-4" >
             Hunting
           </div>
             <div class="mt-4" >
             Co-op
           </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-col cols="9">
          </v-col>
          <v-btn color="blue darken-1" class="btn-left" text @click="dialog = false">Close</v-btn>
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
            Monster Hunter: World[a] is an action role-playing game developed and published by Capcom. A part of the Monster Hunter series, it was released worldwide for PlayStation 4 and Xbox One in January 2018, with a Microsoft Windows version in August 2018. In the game, the player takes the role of a Hunter, tasked to hunt down and either kill or trap monsters that roam in one of several environmental spaces. If successful, the player is rewarded through loot consisting of parts from the monster and other elements that are used to craft weapons and armor, amongst other equipment. The game's core loop has the player crafting appropriate gear to be able to hunt down more difficult monsters, which in turn provide parts that lead to more powerful gear. Players may hunt alone or in a group of up to four players via the game's online multiplayer.   
            </div>
          </v-col>
          <v-col cols="2"></v-col> 
        </v-row>

        <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <div class="font-weight-bold"> 
              Announced at E3 2017, Monster Hunter: World adopts the series' standard formulas from its older home console roots and recent handheld games to take advantage of the higher processing power provided by modern consoles and computers. Changes made in Monster Hunter: World include creating environmental spaces that are fully connected and removing the "zones" that were necessary for the PlayStation 2 and handheld games, more advanced monster artificial intelligence and physics to create seemingly living ecosystems that could be taken advantage of during hunts, a more persistent cooperative multiplayer experience, and a refinement of the game's user interface, menu systems, and tutorials to help with bringing new players into the series. These changes led Capcom to plan for the game's simultaneous release across both Japan and Western markets, since Monster Hunter as a series has generally languished in the West compared to Japan partially due to disparate release schedules. Capcom also opted to support online play between these different geographic regions for similar reasons. The delay for the Windows release was attributed to Capcom seeking to make sure its first foray into the Windows market was optimized for players on computers. 
            </div>
          </v-col>
          <v-col cols="2"></v-col> 
        </v-row>  

        <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <div class="font-weight-bold"> 
              Monster Hunter: World received critical acclaim upon release, with critics praising how Capcom was able to make the game more accessible to new players and to Western markets, without detracting from the series' core gameplay elements and enjoyable difficulty, and fully taking advantage of the computational capacity of modern consoles to create living ecosystems, with some even calling it the best in the franchise. Monster Hunter: World is the best-selling game in Capcom's history, with over 14 million copies shipped by October 2019. A large expansion pack, titled Iceborne, was released in September 2019.
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
                <iframe class="ml-12" width="1020" height="630" src="https://www.youtube.com/embed/WecYe1RFMnc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
              <v-img class="min=" :src="require('@/assets/spec1.png')" aspect-ratio="1"></v-img>
            </v-col>
            <v-col cols="8">
              <div class="headline font-weight-bold mt-5" style="width;"> 
                Monster Hunter World : Iceborne
              </div>
              <div class="font-weight-bold"> 
                Developer : capcom 
              </div>
              <div class="font-weight-bold"> 
                Platforms : PC , Xbox One , PS4
              </div>
              <div class="font-weight-bold"> 
                Release Date : 6 September 2019 ( 9th January 2020 on PC )
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
              89%
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
              Monster Hunter: World received critical acclaim upon release, with critics praising how Capcom was able to make the game more accessible to new players and to Western markets, without detracting from the series' core gameplay elements and enjoyable difficulty, and fully taking advantage of the computational capacity of modern consoles to create living ecosystems, with some even calling it the best in the franchise. Monster Hunter: World is the best-selling game in Capcom's history, with over 14 million copies shipped by October 2019. A large expansion pack, titled Iceborne, was released in September 2019.
            </div>
          </v-col>
          <v-col cols="3">
            <v-btn class="" text color><v-icon>mdi-pencil-outline</v-icon></v-btn>
            </v-col> 
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
              was released in September 2019.
            </div>
          </v-col>
          <v-col cols="3">
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