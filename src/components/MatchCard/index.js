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
    <div className="match-card-cont">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-logo"
      />
      <p className="latest-first">{competingTeam}</p>
      <p className="latest-first first">{result}</p>
      {matchStatus === 'Won' && <p style={{color: 'green'}}>{matchStatus}</p>}
      {matchStatus === 'Lost' && <p style={{color: 'red'}}>{matchStatus}</p>}
    </div>
  )
}
export default MatchCard
