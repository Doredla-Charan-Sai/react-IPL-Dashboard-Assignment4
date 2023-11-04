// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    umpires,
    venue,
    firstInnings,
    secondInnings,
    result,
    manOfTheMatch,
  } = latestMatchDetails
  return (
    <div className="latest-cont">
      <div className="name-result">
        <p className="main-title latest-head">{competingTeam}</p>
        <p className="latest-date">{date}</p>
        <p className="latest-venue">{venue}</p>
        <p className="latest-result">{result}</p>
      </div>
      <img
        className="latest-logo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="innings-cont">
        <p className="latest-first">First Innings</p>
        <p className="latest-first first">{firstInnings}</p>
        <p className="latest-first">Second Innings</p>
        <p className="latest-first first">{secondInnings}</p>
        <p className="latest-first">Man of the Match</p>
        <p className="latest-first first">{manOfTheMatch}</p>
        <p className="latest-first">Umpires</p>
        <p className="latest-first first">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
