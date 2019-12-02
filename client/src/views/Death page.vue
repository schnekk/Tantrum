<template>
  <v-app>
    <v-content>
      <v-container fluid>      
        <v-row>
          <v-col cols="12">
            <div class="">
              <hl class ="display-1">Death Stranding</hl>
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
            <v-img :src="require('@/assets/De.jpg')" aspect-ratio="2.3"></v-img>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="1">
            <v-img :src="require('@/assets/de1.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/de3.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/de2.jpg')" aspect-ratio="2"></v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/de5.jpg')" aspect-ratio="2"></v-img>
          </v-col>
        </v-row>

        <v-row justify="">
          <v-col cols="2"></v-col>
          <v-col cols="9">
            <v-btn class="ma-1" outlined color>Walking Simulaytor</v-btn>
            <v-btn class="ma-1" outlined color>Sci-fi</v-btn>
            <v-btn class="ma-1" outlined color>Stoty Rich</v-btn>
            <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-1" outlined color v-on="on" >MORE...</v-btn>
      </template>
      <v-card>
        <v-card-title>Game tag</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
           <div class="mt-4" >
             Walking Simulaytor
           </div>
             <div class="mt-4" >
             Sci-fi
           </div>
             <div class="mt-4" >
             Stoty Rich
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
          From legendary game creator Hideo Kojima comes an all-new, genre-defying experience.
          Sam Bridges must brave a world utterly transformed by the Death Stranding. Carrying the disconnected remnants of our future in his hands, he embarks on a journey to reconnect the shattered world one step at a time.
          Starring Norman Reedus, Mads Mikkelsen, Léa Seydoux, and Lindsay Wagner.  
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
                <iframe class="ml-12" width="1020" height="630" src="https://www.youtube.com/embed/KevFGaS298s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
               Death Stranding 
              </div>
              <div class="font-weight-bold"> 
                Developer : Kojima Productions
              </div>
              <div class="font-weight-bold"> 
                Platforms : PC , PS4 
              </div>
              <div class="font-weight-bold"> 
                Release Date :  Summer 2020
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
              5.2/10
            </div>
          </v-col>
          <v-col class="" cols="3">
            <div class="font-weight-bold">
              73%
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
              Hideo Kojima’s latest creation might not be his best ever, although some may argue, but it is definitely his most unique work yet. Death Stranding requires time to show you what it has to offer, and no matter if you love them or hate them, you’ll see many other developers use them in the next generation of video games.
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
           Amazing thank you kojime fo this beautiful game amazing the sound track the world its amazing
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