<template>
  <v-dialog v-model="dialog" max-width="800px" max-height="800px">
    <template v-slot:activator="{ on }">
      <v-btn flat small fab slot="activator" color="grey" class="mr-0 ml-0" v-on="on">
        <v-icon color="blue_accent">settings</v-icon>
      </v-btn>
    </template>
    <v-card flat>
      <v-container fluid class="project done">
        <v-card-title>
          <h1 class="grey--text text--darken-1">Settings</h1>
        </v-card-title>
        <v-layout row wrap justify-center>
          <v-flex sm10>
            <div class="title grey--text mb-2">Vuetorrent</div>
            <v-card flat class="grey lighten-4 settings-form">
              <v-text-field v-model="settings.vuetorrent.username" label="Username"></v-text-field>
              <v-text-field v-model="settings.vuetorrent.password" label="Password"></v-text-field>
            </v-card>
          </v-flex>
          <v-flex sm10>
            <div class="title grey--text mt-4 mb-2">Qbittorrent</div>
            <v-card flat class="grey lighten-4 settings-form">
              <v-text-field v-model="settings.qbittorrent.host" label="Host Url"></v-text-field>
              <v-text-field v-model="settings.qbittorrent.username" label="Username"></v-text-field>
              <v-text-field v-model="settings.qbittorrent.password" label="Password"></v-text-field>
            </v-card>
          </v-flex>
          <v-flex sm10>
            <div class="title grey--text mt-4 mb-2">Transmission</div>
            <v-card flat class="grey lighten-4 settings-form">
              <v-text-field v-model="settings.transmission.host" label="Host Url"></v-text-field>
              <v-text-field v-model="settings.transmission.username" label="Username"></v-text-field>
              <v-text-field v-model="settings.transmission.password" label="Password"></v-text-field>
            </v-card>
          </v-flex>
          <v-flex sm12 class="mt-3">
            <v-card-actions class="justify-center">
              <v-btn class="blue_accent white--text">Save</v-btn>
              <v-btn class="error white--text" @click="dialog = false">Cancel</v-btn>
            </v-card-actions>
          </v-flex>
          <div class="mt-5">
            <v-card-actions class="justify-center">
              <v-btn target="blank" href="https://paypal.me/Dwijns" class="blue_accent white--text">
                <v-icon>attach_money</v-icon>support me on paypal (or dont)
              </v-btn>
            </v-card-actions>
          </div>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.settings-form {
  max-width: 400px;
  margin-left: 30px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 0px;
  padding-top: 5px;
}
</style>


<script>
export default {
  data() {
    return {
      dialog: true,
      settings: {
        vuetorrent: {
          username: "Daan",
          password: ""
        },
        qbittorrent: {
          host: "https://qbit.wdaan.me",
          userame: "",
          password: ""
        },
        transmission: {
          host: "",
          username: "",
          password: ""
        }
      }
    };
  }
};
</script>