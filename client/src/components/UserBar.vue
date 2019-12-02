<template>
<nav>
  <v-app-bar
    app
    class="justify-center"
    color="#212121"
    dark
  >
      
    <v-app-bar-title class="headline font-weight-bold mx-6 ">
      <router-link to="home" class="link"> STREADDIT</router-link>
    </v-app-bar-title>
      <v-row justify="center">
      
      <v-col cols="12" md="4" lg="10">
    <v-text-field
        class=" my-1"
        dense
        solo
        background-color="white"
        light        
        hide-details
        label=" Search"
        prepend-inner-icon="mdi-magnify"
    />
      </v-col>
    <v-col cols="12" md="4" lg="1" ></v-col>
        <v-col cols="12" md="4" lg="1" >
          
        <v-avatar enabled class="profile" size="50" > 
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
    </v-col>
    </v-row>
  </v-app-bar>
</nav>
</template>

<script>
export default {
  name: "UserBar",
  components: {},
  data: () => ({
    avatar: "/Tantrum/src/image/pepe_meme.jpg",
    username: "",
    displayName: "",
    password: "",
    confirmPassword: "",
    email: "",
    favTag: [],
    local:null,
  }),
  methods: {}
}
</script>

<style scoped>
  .link { 
    text-decoration: none;
    color: #FFF
  }
</style>