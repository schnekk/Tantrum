<template>
    <v-container>
      
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="600"
    >
      <template v-slot:activator="{ on }">
        <v-btn
              text
              v-on="on"
              class="mt-3"        
            >
            Forget username ?
            </v-btn>
      </template>

      <v-card>
        <v-card-title
          
          class="headline grey darken-4 white--text"
          primary-title
        >
          STREADDIT
        </v-card-title>
        <v-container>

        <div class="font-weight-medium headline text-left mx-4 my-2">Forget username</div>
        <v-divider></v-divider>

        <div class="mt-6 mx-3 subtitle-1 font-weight-medium">Enter your e-mail</div>
        <v-text-field
        solo
        class="mt-1 mx-2 mb-3"
        dense
        background-color="white"
        light
        width="10px"
        hide-details
        label=" enter your e-mail"        
      />             
       
        </v-container>
        <v-divider class=""></v-divider>

        <v-card-actions class="mt-2">
          
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
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>