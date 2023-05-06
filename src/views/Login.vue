<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-20" variant="tonal">
            <v-card variant="outlined" color="#B8B8F3">
              <v-card-title class="text-center">Login</v-card-title>
            </v-card>
            <v-card-text>
              <v-form>
                <v-text-field v-model="email" label="Email"></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text v-on:click="login">Login</v-btn>
              <v-btn color="blue draken-2" text v-on:click="reRegister"
                >Register</v-btn
              >
            </v-card-actions>
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
</script>
