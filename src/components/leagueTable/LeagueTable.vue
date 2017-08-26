<template>
    <div>
        <table>
            <tr>
                <th>Position</th>
                <th></th>
                <th>Team</th>
                <th>Played</th>
                <th>Won</th>
                <th>Drew</th>
                <th>Lost</th>
                <th>Batting Points</th>
                <th>Bowling Points</th>
                <th>Points</th>
            </tr>
            <tr v-for="(item,i) in LeagueTableItems">
                <td>{{ i }}</td>
                <td><img src="https://www.warwickshireccvi.co.uk/s/cc_images/teaserbox_2454694020.png?t=1422037276"></td>
                <td>{{ item.team }}</td>
                <td>{{ item.played }}</td>
                <td>{{ item.won }}</td>
                <td>{{ item.drawn }}</td>
                <td>{{ item.lost }}</td>
                <td>{{ item.battingPoints }}</td>
                <td>{{ item.bowlingPoints }}</td>
                <td>{{ item.points }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    name: 'League-Table',
    data () {
      return {
        LeagueTableItems: [
          { team: 'Warwickshire CCVI', points: '100', played: '6', won: '6', lost: '0', drawn: '0', battingPoints: '24', bowlingPoints: '24' },
          { team: 'Sussex', points: '100', played: '6', won: '6', lost: '0', drawn: '0', battingPoints: '24', bowlingPoints: '24' },
          { team: 'Northants CCVI', points: '100', played: '6', won: '6', lost: '0', drawn: '0', battingPoints: '24', bowlingPoints: '24' },
          { team: 'Sommerset CCVI', points: '100', played: '6', won: '6', lost: '0', drawn: '0', battingPoints: '24', bowlingPoints: '24' },
          { team: 'Lancashire CCVI', points: '100', played: '6', won: '6', lost: '0', drawn: '0', battingPoints: '24', bowlingPoints: '24' },
          { team: 'Metro CCVI', points: '100', played: '6', won: '6', lost: '0', drawn: '0', battingPoints: '24', bowlingPoints: '24' },
          { team: 'Yorkshire CCVI', points: '100', played: '6', won: '6', lost: '0', drawn: '0', battingPoints: '24', bowlingPoints: '24' },
          { team: 'Nottingham CCVI', points: '100', played: '6', won: '6', lost: '0', drawn: '0', battingPoints: '24', bowlingPoints: '24' }
        ]
      }
    }
  }
</script>

<style scoped>
    table{
        width:100%;
        font-size:18px;
    }
    th{
        text-align: center;
    }
    td{
        text-align: center;
        padding-bottom:6px;
        padding-top:4px;
    }
    img{
        width:25px;
    }
</style>