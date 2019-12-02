<template>
  
  <v-app>
   
  <v-content>
    <v-container >  
      
      <v-row class="mt-4">
         <v-col>
           <v-text-field
      
        class=""
        dense
        background-color="white"
        outlined
        hide-details
        label=" Title"
      
      /> 
        </v-col>
        <v-col>
          <v-btn class="" outlined color v-on="on" >Add title</v-btn>
        </v-col>
      </v-row>    

      <v-progress-linear
      color="grey"
      rounded
      value="100"
      class="my-4"
        ></v-progress-linear>


        <v-row class="mt-4">
          <v-col cols="2">
          </v-col>
          <v-col cols="8">
            <v-textarea
          value ="Add photos"
          background-color="white"
          auto-grow
          outlined
          rows="32"
          row-height="15"
        ></v-textarea>
          </v-col>
        </v-row>
   
      <v-row  justify="center">
      <v-btn  outlined color v-on="on" >Add  photo series</v-btn>
      </v-row>  


        <v-row  class="mt-6" justify="">
          <v-col cols="3">
          </v-col>
      <v-btn class="mr-2" outlined color></v-btn>
      <v-btn class="mr-2" outlined color></v-btn>
      <v-btn class="mr-2" outlined color></v-btn>
      </v-row>    

        <v-row  class="mt-6" justify="center">
          <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn outlined color v-on="on" >Add tag</v-btn>
      </template>
      <v-card>
        <v-card-title>Game tag</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group  v-model="dialogm1" column>
            <v-radio label="RPG" value="RPG"></v-radio>
            <v-radio label="Action" value="Action"></v-radio>
            <v-radio label="Adventure" value="Adventure"></v-radio>
            <v-radio label="Horror" value="Horror"></v-radio>
            <v-radio label="Side Scrolling" value="Side Scrolling"></v-radio>
            <v-radio label="Open World" value="Open World"></v-radio>
            <v-radio label="Arcade" value="Arcade"></v-radio>
            <v-radio label="Board Game" value="Board Game"></v-radio>
            <v-radio label="Racing" value="Racing"></v-radio>
            <v-radio label="Turn Baesd" value="Turn Baesd"></v-radio>
            <v-radio label="Strategy" value="Strategy"></v-radio>
            <v-radio label="Puzzle" value="Puzzle"></v-radio>
            <v-radio label="Shooting" value="Shooting"></v-radio>
            <v-radio label="Sport" value="Sport"></v-radio>
          </v-radio-group>
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
      </v-row>  

        <v-row justify="">
     <v-col cols="2">
     </v-col>
     <v-col cols="9">
         <div class="headline font-weight-bold" 
         style="width: 20rem;"
         > Description</div>
     </v-col> 
     </v-row>  




     <v-row class="mt-4">
          <v-col cols="2">
          </v-col>
          <v-col cols="8">
            <v-textarea
          value ="Add a game description"
          background-color="white"
          auto-grow
          outlined
          rows="32"
          row-height="15"
        ></v-textarea>
          </v-col>
        </v-row>

  <v-row  justify="center">
      <v-btn  outlined color v-on="on" >Add description&photo</v-btn>
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


    <v-row class="mt-4">
          <v-col cols="2">
          </v-col>
          <v-col cols="8">
            <v-textarea
          value ="Add a video game"
          background-color="white"
          auto-grow
          outlined
          rows="32"
          row-height="15"
        ></v-textarea>
          </v-col>
        </v-row>


          <v-row  class="" justify="center">
      <v-btn  outlined color v-on="on" >Add video</v-btn>
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
    </v-row>

    <v-row class="mt-4">
          <v-col cols="2">
          </v-col>
          <v-col cols="2">
                <v-textarea
          value ="Add photos"
          background-color="white"
          auto-grow
          outlined
          rows="15"
          row-height="15"
        >
        </v-textarea>
        <v-btn class="ml-9"  outlined color v-on="on" >Add photo 128x128</v-btn>
          
          </v-col>
          <v-col cols="6">
            <v-textarea
          value ="Add game information"
          background-color="white"
          auto-grow
          outlined
          rows="32"
          row-height="15"
        ></v-textarea>
          </v-col>
        </v-row>
        

          <v-row  class="" justify="center">
            <v-col cols="2">
            </v-col>
      <v-btn class="ml-10"  outlined color v-on="on" >Add information</v-btn>
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

    <v-row class="mt-4">
          <v-col cols="2">
          </v-col>
          <v-col cols="8">
            <v-textarea
          value ="Add game review sites’ logo & review scores"
          background-color="white"
          auto-grow
          outlined
          rows="32"
          row-height="15"
        ></v-textarea>
          </v-col>
        </v-row>


            <v-row  class="" justify="center">
      <v-btn  outlined color v-on="on" >Add information</v-btn>
      </v-row> 

       <v-row>
        <v-col>
        </v-col>
      </v-row> 


         <v-row  class="" justify="end">
      <v-btn  class="mr-2" outlined color v-on="on" >Delete this game info</v-btn>
       <v-btn  class="mr-2" outlined color v-on="on" >Cancel</v-btn>
        <v-btn  class="mr-2" outlined color v-on="on" >Save</v-btn>
      </v-row> 


      <v-row>
        <v-col>
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
    //
  }),
};
</script> 