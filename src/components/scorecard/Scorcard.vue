<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-layout row>
          <v-flex xs12 sm6>
            <p>23th September 2017</p>
          </v-flex>
          <v-flex xs12 sm6>
            <p>Hindridth T20 Cup Finals Day</p>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-btn class="primary" to="/scorecard/new">Create New Scorecard</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-card>
              <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Warwickshire CCVI vs Sussex Sharks VICC</h3>
                  <div><strong>Start Time:</strong> 11:00</div>
                  <div><strong>Toss:</strong> Warwickshire won the toss and chose to boll</div>
                  <div><strong>Venue:</strong> Offchurch</div>
                  <div><strong>Officials:</strong> Some people</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>

          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        tabs: ['tab-1', 'tab-2', 'tab-3'],
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    methods: {
      next () {
        this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length]
      }
    }
  }
</script>
