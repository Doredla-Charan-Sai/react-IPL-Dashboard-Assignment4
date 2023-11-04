// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentDetails} = props
  const {
    competingTeam,
    competingTeamLogo,

    matchStatus,
    result,
  } = recentDetails
  return (
    <li className="match-card-cont">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-logo"
      />
      <p className="latest-first">{competingTeam}</p>
      <p className="latest-first first">{result}</p>
      <p style={{color: matchStatus === 'Won' ? 'green' : 'red'}}>
        {matchStatus}
      </p>
    </li>
  )
}
export default MatchCard
