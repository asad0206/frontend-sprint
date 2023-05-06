<!-- <template>
  <v-app>
    <v-container fluid>
      <v-row justify="center">
        <v-col sm="8" lg="6" align-self="center">
          <v-card>
            <v-card>
              <v-card-title primary-title class="justify-center"
                >Welcome Back</v-card-title
              >
            </v-card>
            <v-spacer></v-spacer>
            <v-card-text>
              <v-form>
                <v-text-field v-model="email" label="Email"></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                ></v-text-field>
              </v-form>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text v-on:click="login"
                  >Login</v-btn
                >
                <v-btn color="blue draken-2" text v-on:click="reRegister"
                  >Register</v-btn
                >
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        // Send login request to server
        const response = await axios.post("/api/login", {
          email: this.email,
          password: this.password,
        });

        // Check if login was successful
        if (response.data.success) {
          // Redirect to home page
          this.$router.push({
            path: "/",
            replace: false,
          });
        } else {
          // Display error message
          this.$vuetify.snackbar({
            color: "red",
            message: response.data.message,
          });
        }
      } catch (error) {
        // Display error message
        this.$vuetify.snackbar({
          color: "red",
          message: error.message,
        });
      }
    },
    reRegister() {
      this.$router.replace({
        name: "register",
      });
    },
  },
};
</script> -->

<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-card dark color="purple">
                <v-card-title primary-title class="justify-center"
                  >Welcome Back</v-card-title
                >
              </v-card>
              <v-card varient="tonal">
                <v-card-text>
                  <v-form>
                    <v-text-field
                      name="login"
                      label="Login"
                      type="text"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
              </v-card>
              <v-spacer></v-spacer>
              <v-card varient="outlined">
                <v-card-text>
                  <v-form>
                    <v-text-field
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
              </v-card>
              <!-- <v-card-text>
                <v-form>
                  <v-text-field
                    name="login"
                    label="Login"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text> -->
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="purple">Login</v-btn>
                <v-btn>Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  props: {
    source: String,
  },
};
</script>

<style></style>
