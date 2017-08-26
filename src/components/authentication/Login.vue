<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h4>Login</h4>
      </v-flex>
    </v-layout>
    <form>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
            name="username"
            label="Enter your Email Address"
            id="username"
            required
            v-model="username"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
            name="password"
            label="Enter your password"
            v-model="password"
            required
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'text' : 'password'"
            counter
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 xs6 offset-xs3>
          <v-btn>Login</v-btn>
        </v-flex>
      </v-layout>
    </form>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        e1: false,
        password: ''
      }
    }
  }
</script>

<style>

</style>
