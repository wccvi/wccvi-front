<template>
  <v-container>
    <v-layout>
      <v-flex xs12 md6 offset-md3>
        <v-layout row wrap>
          <v-flex xs12 md6 offset-md3>
            <h3>Create New Scorecard</h3>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6>
            <v-text-field
              name="team1"
              label="Team 1"
              id="team1"
              v-model="team1"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              name="team2"
              label="Team 2"
              id="team2"
              v-model="team2"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-select
              label="Who won the toss?"
              v-bind:items="[team1, team2]"
              v-model="wonToss"
              single-line
              bottom
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-select
              label="And elected to ?"
              v-bind:items="['Bat', 'Bowl']"
              v-model="tossChoice"
              single-line
              bottom
            ></v-select>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      team1: '',
      team2: '',
      wonToss: 'Who Won Toss?',
      tossChoice: 'And elected to?'
    })
  }
</script>
