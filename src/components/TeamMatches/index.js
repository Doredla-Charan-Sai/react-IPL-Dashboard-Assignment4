// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchList: {}}

  componentDidMount() {
    this.fetchTeamMatchList()
  }

  fetchTeamMatchList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const eachMatch = await response.json()

    const updatedTeamMatchList = {
      latestMatchDetails: {
        competingTeam: eachMatch.latest_match_details.competing_team,
        competingTeamLogo: eachMatch.latest_match_details.competing_team_logo,
        date: eachMatch.latest_match_details.date,
        id: eachMatch.latest_match_details.id,
        result: eachMatch.latest_match_details.result,
        umpires: eachMatch.latest_match_details.umpires,
        venue: eachMatch.latest_match_details.venue,
        firstInnings: eachMatch.latest_match_details.first_innings,
        secondInnings: eachMatch.latest_match_details.second_innings,
        matchStatus: eachMatch.latest_match_details.match_status,
        manOfTheMatch: eachMatch.latest_match_details.man_of_the_match,
      },
      recentMatches: eachMatch.recent_matches.map(item => ({
        competingTeam: item.competing_team,
        competingTeamLogo: item.competing_team_logo,
        date: item.date,
        id: item.id,
        result: item.result,
        umpires: item.umpires,
        venue: item.venue,
        firstInnings: item.first_innings,
        secondInnings: item.second_innings,
        matchStatus: item.match_status,
        manOfTheMatch: item.man_of_the_match,
      })),
      teamBannerUrl: eachMatch.team_banner_url,
    }

    this.setState({isLoading: false, teamMatchList: updatedTeamMatchList})
  }

  render() {
    const {isLoading, teamMatchList} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = teamMatchList
    console.log(latestMatchDetails, recentMatches, teamBannerUrl)
    return (
      <div className="team-matches">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div className="home-load" testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-match-content">
            <img
              className="banner-img"
              src={teamBannerUrl}
              alt="team banner url"
            />
            <p className="latest-para">Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="recent-matches-list">
              {recentMatches.map(recentMatch => (
                <MatchCard recentDetails={recentMatch} key={recentMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
