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
        width="auto"
        height="10%"
        style="cursor: pointer"
      >
       </v-appbar-title>
      </v-col>

     <v-col cols="1">
      </v-col>

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
        prepend-inner-icon="mdi-magnify"
      /> 
      </v-col>

  
    <v-row justify="">
       <v-col cols="7">
      </v-col>
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
          <v-btn class="ml-5" outlined color >Change</v-btn>
        </v-col>
         </v-row>
         
        <v-row>  
       <v-col cols="6">
        <v-btn class="mr-2" outlined color>RPG</v-btn>
        <v-btn class="mr-2" outlined color>Action</v-btn>
        <v-btn class="mr-2" outlined color>Simulator</v-btn>
        <v-btn class="mr-2" outlined color>More...</v-btn>
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
          <v-btn class="ml-6" outlined color >MORE...</v-btn>
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
          <v-btn class="" outlined color >MORE...</v-btn>
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
          <v-btn class="" outlined color >MORE...</v-btn>
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
    //
  }),
};
</script>