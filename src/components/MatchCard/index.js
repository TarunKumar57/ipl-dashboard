import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    // umpires,
    result,
    // manOfTheMatch,
    // date,
    // venue,
    competingTeam,
    competingTeamLogo,
    // firstInnings,
    // secondInnings,
    matchStatus,
  } = matchCardDetails

  const color = matchStatus === 'Won' ? 'win-para' : 'lost-para'

  return (
    <li className="match-card-list-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-img"
      />
      <p className="match-card-heading">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`match-card-win-lost ${color}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
