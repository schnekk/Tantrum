<template>
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="600"
    >
      <template v-slot:activator="{ on }">
        <v-btn class="ma-2" 
          outlined 
          color 
          v-on="on">Log in</v-btn>
      </template>

      <v-card>
        <v-card-title
          
          class="headline grey darken-4 white--text"
          primary-title
        >
          STREADDIT
        </v-card-title>
        <v-container>

        <div class="font-weight-medium headline text-left mx-4 my-2">User account</div>
        <v-divider></v-divider>

        <div class="mt-6 mx-3 subtitle-1 font-weight-medium">User name</div>
        <v-text-field
        solo
        class="mt-1 mx-2"
        dense
        background-color="white"
        light
        width="10px"
        hide-details
        label=" enter your username"        
      /> 
        <div class="mt-6 mx-3 subtitle-1 font-weight-medium">Display name</div>
        <v-text-field
        solo
        class="mt-1 mx-2"
        dense
        background-color="white"
        light
        width="10px"
        hide-details
        label=" enter your display name"        
      /> 
        <div class="mt-6 mx-3 subtitle-1 font-weight-medium">Password</div>
        <v-text-field
        solo
        class="mt-1 mx-2"
        dense
        background-color="white"
        light
        width="10px"
        hide-details
        label=" enter your password"        
      /> 
        <div class="mt-6 mx-3 subtitle-1 font-weight-medium">Confirm password</div>
        <v-text-field
        solo
        class="mt-1 mx-2"
        dense
        background-color="white"
        light
        width="10px"
        hide-details
        label=" enter your password"        
      /> 
        <div class="mt-6 mx-3 subtitle-1 font-weight-medium">E-mail address</div>
        <v-text-field
        solo
        class="mt-1 mx-2"
        dense
        background-color="white"
        light
        width="10px"
        hide-details
        label=" enter your e-mail address"        
      /> 
        <div class="mt-6 mx-3 subtitle-1 font-weight-medium">Game tag</div>
        <v-text-field
        solo
        class="mt-1 mx-2"
        dense
        background-color="white"
        light
        width="10px"
        hide-details
        label=" pick your game tag"        
      /> 

        </v-container>
        <v-divider class="mt-3"></v-divider>

        <v-card-actions>
          
          <v-btn
            color="grey darken-1"
            outlined
            class="mx-3 mb-2"
            @click="dialog = false"
          >
            Sign up
          </v-btn>
          <v-btn
            color="grey darken-1"
            outlined
            class="mx-2 mb-2"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>