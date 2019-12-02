

 <template>
  <v-app>
   

   <v-content >

    <v-container fluid>      
     <v-row>
        <v-col cols="12">
        <div class="">
      <hl class ="display-1">User Account</hl>
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
   
        <v-row class="mt-12" justify="">
         <v-col cols ="3">
       </v-col>
        <v-col cols="2">
         <v-avatar size="250" class="profile" > 
      <img class=""
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >       
    </v-avatar> 
       <v-row class="mt-1">
            <v-col cols ="2">
       </v-col>
       <v-col>
          <v-btn class="ml-4" outlined color>Change</v-btn>
        </v-col>
       </v-row>
     </v-col>

     <v-col cols = "6" >  
         <div class="headline font-weight-bold " 
         style="width: 20rem;"
         > Display Name</div>
        <v-row>  
       <v-col cols="6">
       <v-text-field
          solo
          name="input-7-4"
           value ="Marcus Obrien"
          hide-details
        ></v-text-field>
         </v-col>
          <v-col>
          <v-btn class="mt-1" outlined color>Change</v-btn>
        </v-col>
         </v-row>

          <div class="headline font-weight-bold " 
         style="width: 20rem;"
         > E-mail</div>
        <v-row>  
       <v-col cols="6">
       <v-text-field
          solo
          name="input-7-4"
           value ="yosapake-p@hotmail.com"
          hide-details
        ></v-text-field>
         </v-col>
          <v-col>
          <v-btn class="mt-1" outlined color>Change</v-btn>
        </v-col>
         </v-row>
         <v-row> 
           <v-col cols="2">
           <div class="headline font-weight-bold ml-1 " 
         style="width: 20rem;" 
         > Favourite game tag (s) </div>
           </v-col>
           <v-col  cols="1">
           </v-col>
           <v-col >
          <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn  class="ml-5" outlined color v-on="on" >CHANGe</v-btn>
      </template>
      <v-card>
        <v-card-title>Game tag</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">               
            <v-checkbox
              v-model="ex4"
              label="RPG"
              color="indigo"
              value="RPG"
              hide-details
            ></v-checkbox>
         
            <v-checkbox
              v-model="ex4"
              label="Action"
              color="indigo"
              value="Action"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="Advanture"
              color="indigo"
              value="Advanture"
              hide-details
            ></v-checkbox>
          
            <v-checkbox
              v-model="ex4"
              label="Horror"
              color="indigo"
              value="Horror"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="Side Scrolling"
              color="indigo"
              value="Side Scrolling"
              hide-details
            ></v-checkbox>            
            <v-checkbox
              v-model="ex4"
              label="Open World"
              color="indigo"
              value="Open World"
              hide-details
            ></v-checkbox>
         
            <v-checkbox
              v-model="ex4"
              label="Arcade"
              color="indigo"
              value="Arcade"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="Board Game"
              color="indigo"
              value="Board Game"
              hide-details
            ></v-checkbox>
          
            <v-checkbox
              v-model="ex4"
              label="Racing"
              color="indigo"
              value="Racing"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="Turn Based"
              color="indigo"
              value="Turn Based"
              hide-details
            ></v-checkbox>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
           <v-col cols="6">
          </v-col>
          <v-btn color="blue darken-1" class="btn-left" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" class="btn-left" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </v-col>
         </v-row>
         
        <v-row>  
       <v-col cols="6">
        <v-btn  class="mr-2" outlined color>RPG</v-btn>
        <v-btn class="mr-2" outlined color>Action</v-btn>
         <v-btn class="mr-2" outlined color>Simulator</v-btn>
           <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn class="mr-2" outlined color v-on="on" >MORE...</v-btn>
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
             Simlator
           </div>
             <div class="mt-4" >
             Shooting
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
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="3">
      </v-col>
         <v-col cols="1">
           <div class="headline font-weight-bold ml-1 " 
         style="width: 20rem;" 
         > Favourite game</div>
           </v-col>
           <v-col >
           <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn class="ml-6" outlined color v-on="on" >MORE...</v-btn>
      </template>
      <v-card>
        <v-card-title>Favourite Game</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
           <div class="mt-4" >
             Planet Coaster
           </div>
             <div class="mt-4" >
             Tekken 7
           </div>
             <div class="mt-4" >
             Cyberpunk
           </div>
          
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
           <v-col cols="9">
          </v-col>
          <v-btn  color="blue darken-1" class="btn-right" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </v-col>
    </v-row>

     
     
     <v-row justify="center">
     <v-col cols="2">
        <v-img :src="require('@/assets/Pla.png')" aspect-ratio="2"></v-img>
      
      </v-col>
       <v-col cols="2">
        <v-img :src="require('@/assets/TeKKen.png')" aspect-ratio="2"></v-img>
       
      </v-col>
      <v-col cols="2">
        <v-img :src="require('@/assets/cyber.png')" aspect-ratio="2"></v-img>
      </v-col>
     
      </v-row>



         <v-row>
      <v-col cols="3">
      </v-col>
         <v-col cols="1">
           <div class="headline font-weight-bold ml-1 " 
         style="width: 20rem;" 
         > Follower (s) </div>
           </v-col>
           <v-col >
            <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn class="ml-6" outlined color v-on="on" >MORE...</v-btn>
      </template>
      <v-card>
        <v-card-title>Follower</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
           <div class="mt-4" >
             james
           </div>
             <div class="mt-4" >
             james james
           </div>
             <div class="mt-4" >
             aksdasdasdames
           </div>
             <div class="mt-4" >
             alsdlasdlad
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
       <v-col cols="3">
      </v-col>
      <v-col cols="1">
       <v-avatar size="100"  class="profile" >      
      <img class="ml-12"
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
      </v-col>
        <v-col cols="1">
     <div class="mt-10">Marsdc </div>
     </v-col>
       <v-col cols="1">
       <v-avatar size="100"  class="profile" >      
      <img class="ml-12"
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
      </v-col>
        <v-col cols="1">
     <div class="mt-10">Marcus Obrien</div>
     </v-col>
       <v-col cols="1">
       <v-avatar size="100"  class="profile" >      
      <img class="ml-12"
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
      </v-col>
        <v-col cols="1">
     <div class="mt-10">Marcus Obrien</div>
     </v-col>
    </v-row>

    <v-row>
      <v-col cols="3">
      </v-col>
         <v-col cols="1">
           <div class="headline font-weight-bold ml-1 " 
         style="width: 20rem;" 
         > Following </div>
           </v-col>
             <v-col>
            <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn class="ml-6" outlined color v-on="on" >MORE...</v-btn>
      </template>
      <v-card>
        <v-card-title>Following</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
           <div class="mt-4" >
             james
           </div>
             <div class="mt-4" >
             james james
           </div>
             <div class="mt-4" >
             aksdasdasdames
           </div>
             <div class="mt-4" >
             alsdlasdlad
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
       <v-col cols="3">
      </v-col>
      <v-col cols="1">
       <v-avatar size="100"  class="profile" >      
      <img class="ml-12"
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
      </v-col>
        <v-col cols="1">
     <div class="mt-10">Marsdc </div>
     </v-col>
       <v-col cols="1">
       <v-avatar size="100"  class="profile" >      
      <img class="ml-12"
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
      </v-col>
        <v-col cols="1">
     <div class="mt-10">Marcus Obrien</div>
     </v-col>
       <v-col cols="1">
       <v-avatar size="100"  class="profile" >      
      <img class="ml-12"
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
      </v-col>
        <v-col cols="1">
     <div class="mt-10">Marcus Obrien</div>
     </v-col>
    </v-row>

    <v-row>
      <v-col>
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
    
  }),
};
</script>