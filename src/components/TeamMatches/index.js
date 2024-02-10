import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    matchData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedMatchData = {
      teamBannerUrl: data.team_banner_url,

      latestMatchDetails: {
        id: data.latest_match_details.id,
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },

      recentMatches: data.recent_matches.map(each => ({
        id: each.id,
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }
    this.setState({
      matchData: updatedMatchData,
      isLoading: false,
    })
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamMatches = () => {
    const {matchData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchData
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team-mates-container ${id}`}>
        <img src={teamBannerUrl} alt="team banner" className="banner" />
        <h2 className="latest-matches">Latest matches</h2>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="match-card-list-container">
          {recentMatches.map(each => (
            <MatchCard key={each.id} matchCardDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return <>{isLoading ? this.renderLoader() : this.renderTeamMatches()}</>
  }
}
export default TeamMatches

// {
//   "team_banner_url": "https://assets.ccbp.in/frontend/react-js/kkr-team-img.png",
//   "latest_match_details": {
//     "umpires": "CB Gaffaney, VK Sharma",
//     "result": "Kolkata Knight Riders Won by 7 wickets",
//     "man_of_the_match": "Shubman Gill",
//     "id": "1216545",
//     "date": "2020-09-26",
//     "venue": "At Sheikh Zayed Stadium, Abu Dhabi",
//     "competing_team": "Sunrisers Hyderabad",
//     "competing_team_logo": "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png",
//     // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
//     "first_innings": "Sunrisers Hyderabad",
//     "second_innings": "Kolkata Knight Riders",
//     "match_status": "Won",
//   },
//   "recent_matches": [
//     {
//       "umpires": "RK Illingworth, K Srinivasan",
//       "result": "Royal Challengers Bangalore Won by 82 runs",
//       "man_of_the_match": "AB de Villiers",
//       "id": "1216540",
//       "date": "2020-10-12",
//       "venue": "At Sharjah Cricket Stadium, Sharjah",
//       "competing_team": "Royal Challengers Bangalore",
//       "competing_team_logo": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png",
//       // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
//       "first_innings": "Royal Challengers Bangalore",
//       "second_innings": "Kolkata Knight Riders",
//       "match_status": "Lost",
//     },
//     ...
//   ],
// }
