<template>
<nav>
  <v-app-bar
    app
    class="justify-center"
    color="#212121"
    dark
  >
    <v-app-bar-title class="headline font-weight-bold mx-6">
      <a><router-link to="home" class="link"> STREADDIT </router-link></a>
    </v-app-bar-title>
    
    <v-text-field
      class="mx-10"
      dense
      solo
      background-color="white"
      light        
      hide-details
      label=" Search"
      prepend-inner-icon="mdi-magnify"
    />

    <div class="text-center">
      <v-dialog
        v-model="login"
        width="600"
      >
        <template v-slot:activator="{ on }">
          <v-btn class="ma-2" 
            outlined 
            color 
            v-on="on">
            Log in
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
            <div class="font-weight-medium headline text-left mx-4 my-2">User account</div>
            <v-divider></v-divider>
            <div class="mt-6 mx-3 subtitle-1 font-weight-medium">Username</div>
            <v-text-field
              v-model="username"
              :rules="[rules.required]"
              solo
              class="mt-1 mx-2"
              dense
              background-color="white"
              light
              width="10px"
              label=" enter your username"        
            />        
            <div class="mt-6 mx-3 subtitle-1 font-weight-medium">Password</div>
            <v-text-field
              v-model="password"
              :rules="[rules.required]"           
              solo
              class="mt-1 mx-2"
              dense
              background-color="white"
              light
              width="10px"
              hide-details
              label=" enter your password"        
            /> 
            
            
    <v-dialog
      v-model="dialog"
      width="600"
    >
      <template v-slot:activator="{ on }">
        <v-btn
              text
              v-on="on"
              class="mt-4"        
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
            Confirm
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
  
          
           
    <v-dialog
      v-model="dialog"
      width="600"
    >
      <template v-slot:activator="{ on }">
        <v-btn
              text
              v-on="on"
              class="mt-4"        
            >
            Forget password ?
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
            Confirm
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
  
          </v-container>
          <v-divider></v-divider>
          <v-card-actions class="mt-2">
            <v-btn
              color="grey darken-1"
              outlined
              class="mx-3 mb-2"
              @click="dialog = false"
            >
            Confirm
            </v-btn>
            <v-btn
              color="grey darken-1"
              outlined
              class="mx-2 mb-2"
              @click="login = false"
            >
            Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <div class="text-center">
      <v-dialog
        v-model="register"
        width="750"
      >
        <template v-slot:activator="{ on }">
          <v-btn class="ma-2" 
            outlined 
            color 
            v-on="on">
          Sign up
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
            <div class="font-weight-medium headline text-left mx-4 my-2">User account</div>
            <v-divider></v-divider>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
            <div class="mt-6 mx-3 subtitle-1 font-weight-medium">Username</div>
            <v-text-field
              v-model="username"
              :rules="[rules.required]"
              solo
              class="mt-1 mx-2"
              dense
              background-color="white"
              light
              width="10px"
              label=" enter your username"  
            /> 
            <div class="mt-6 mx-3 subtitle-1 font-weight-medium">Display name</div>
            <v-text-field
              v-model="displayName"
              :rules="[rules.required]"
              solo
              class="mt-1 mx-2"
              dense
              background-color="white"
              light
              width="10px"
              label=" enter your display name"        
            /> 
            <div class="mt-6 mx-3 subtitle-1 font-weight-medium">Password</div>
            <v-text-field
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              :rules="[rules.required, rules.min, rules.max]"
              @click:append="show=!show"
              hint="At least 8 characters"
              solo
              class="mt-1 mx-2"
              dense
              background-color="white"
              light
              width="10px"
              label=" enter your password"
            /> 
            <div class="mt-6 mx-3 subtitle-1 font-weight-medium">Confirm password</div>
            <v-text-field
              v-model="confirmPassword"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              :rules="[rules.required]"
              @click:append="show=!show"
              :error-messages='passwordMatch()'
              hint="Must be the same as password above"
              solo
              class="mt-1 mx-2"
              dense
              background-color="white"
              light
              width="10px"
              label="re-enter your password"        
            /> 
            <div class="mt-6 mx-3 subtitle-1 font-weight-medium">E-mail address</div>
            <v-text-field
              v-model="email"
              :rules="[rules.required,rules.emailRule]"
              solo
              class="mt-1 mx-2"
              dense
              background-color="white"
              light
              width="10px"
              label=" enter your e-mail address"        
            /> 
            <div class="mt-6 mx-3 subtitle-1 font-weight-medium">Favourite Game tag</div>
              <div class="mt-1 ml-1">
                <v-dialog
                  v-model="chooseTag"
                  width="350"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn
                      color="grey darken-1"
                      outlined
                      small
                      class="mx-2 mb-2"
                      v-on="on"
                      @click="getTag();"
                    >
                      Choose here
                    </v-btn>
                  </template>
                  <v-card light>
                    <v-card-title
                      class="headline grey darken-4 white--text"
                      primary-title
                    >
                    Add favourite tag(s)
                    </v-card-title>
                    <v-container>
                      <div class="font-weight-medium headline text-left ml-1 my-2">Tag list</div>
                      <v-divider></v-divider>
                      <div v-for="item in tagList" v-bind:key="item._id">
                          <v-checkbox class="ml-1 my-3"
                            v-model="favTag" 
                            :label=item.name 
                            :value=item._id 
                            :rules="[rules.tagRule]"
                            hide-details
                          >
                          </v-checkbox>
                      </div>
                      <v-divider></v-divider>
                      <v-btn
                        color="grey darken-1"
                        outlined
                        small
                        class="ml-1 mt-4 mb-2"
                        @click="chooseTag=false"
                      >
                      Comfirm
                      </v-btn>
                      <v-btn
                        color="grey darken-1"
                        outlined
                        small
                        class="mx-5 mt-4 mb-2"
                        @click="chooseTag=false; favTag=[];"
                      >
                      Cancel
                      </v-btn>
                    </v-container>
                  </v-card>
                </v-dialog>
              </div>
            </v-form>
          </v-container>
          <v-divider class="mt-3"></v-divider>
          <v-card-actions>
            <v-btn
              :disabled="!valid"
              color="grey darken-1"
              outlined
              class="mx-3 mt-4 mb-2"
              @click="submitUser; register = false;"
            >
              Sign up
            </v-btn>
            <v-btn
              color="grey darken-1"
              outlined
              class="mx-2 mt-4 mb-2"
              @click="register = false"
            >
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>           
  </v-app-bar>
</nav>
</template>

<script>
export default {
  name: "Bar",
  components: {
  },
  data: () => ({
    login: false,
    register: false,
    show: false,
    chooseTag:false,
    valid:true,
    tagList: [],

    avatar: "/Tantrum/src/image/pepe_meme.jpg",
    username: "",
    displayName: "",
    password: "",
    confirmPassword: "",
    email: "",
    favTag: [],
    rules: {
      required: value => !!value || 'Required',
      min: v => v.length >= 8 || 'Min 8 characters',
      max: v => v.length <= 16 || 'Max 16 characters',
      emailRule: v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      tagRule: v=>v.length > 0 || 'Please select at least 1 tag'
    }
  }),
  methods: {
    passwordMatch () { 
    return (this.password === this.confirmPassword) ? '' : 'Password must match'
    },
    getTag(){
      this.$http.get("/tag").then(response => (this.tagList = response.data))
    }
    ,
    submitUser(){
        this.$http.post("/user",
          {
            avatar: this.avatar,
            username: this.username,
            displayName: this.displayName,
            password: this.password,
            email: this.email,
            favTag: this.favTag
          }).then(response => (response))
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        return 1
    }else{
      return 0
    }
    }
  }
}
</script>

<style scoped>
  .link { 
    text-decoration: none;
    color: #FFF
  }
</style>