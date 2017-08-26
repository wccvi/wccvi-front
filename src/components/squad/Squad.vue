<template>
    <v-layout>
        <v-flex xs12>
            <v-card>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-flex
                                xs12 sm4
                                v-for="item in SquadProfiles"
                                :key="item.name"
                        >
                            <v-card flat tile class="md2">
                                <v-card-media src="/public/v.png" height="200px">
                                </v-card-media>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0"><strong>{{ item.number }}</strong>.{{ item.name }}</h3>
                                        <div>Best Batting Score <strong>{{ item.bestBatting }}</strong></div>
                                        <div>Best Bowling Figures <strong>{{ item.bestBowling }}</strong></div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat class="orange--text">View</v-btn>
                                    <v-btn flat class="orange--text">Follow</v-btn>
                                    <v-spacer></v-spacer>
                                    <img src="https://www.warwickshireccvi.co.uk/s/misc/logo.jpg?t=1501594390" width="30">
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  export default {
    name: 'Squad',
    data () {
      return {
        SquadProfiles: [
          { name: 'Asif Ali', number: '10', description: 'This is description', bestBatting: '50', bestBowling: '3/0' },
          { name: 'Hassan Ali', number: '5', description: 'This is description', bestBatting: '50', bestBowling: '3/0' },
          { name: 'Luke', number: '19', description: 'This is description', bestBatting: '50', bestBowling: '3/0' },
          { name: 'Justin', number: '23', description: 'This is description', bestBatting: '50', bestBowling: '3/0' },
          { name: 'Mark', number: '41', description: 'This is description', bestBatting: '50', bestBowling: '3/0' },
          { name: 'Gerald', number: '51', description: 'This is description', bestBatting: '50', bestBowling: '3/0' }
        ]
      }
    }
  }
</script>