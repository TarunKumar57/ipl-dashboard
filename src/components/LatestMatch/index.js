import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    //  matchStatus,
  } = latestMatchDetails
  return (
    <div className="latest-match-container">
      <div className="latest-match-mobile-container">
        <div className="latest-match-left-container">
          <p className="latest-match-para">{competingTeam}</p>
          <p className="latest-match-para2">{date}</p>
          <p className="latest-match-left-text">{venue}</p>
          <p className="latest-match-left-text">{result}</p>
        </div>
        <div className="latest-match-mobile-img-container">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match-mobile-img"
          />
        </div>
      </div>
      <hr />
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="latest-match-img"
      />
      <div className="latest-match-right-container">
        <h3>First Inninigs</h3>
        <p className="latest-match-right-text">{firstInnings}</p>
        <h3>Second Inninigs</h3>
        <p className="latest-match-right-text">{secondInnings}</p>
        <h3>Man Of The Match</h3>
        <p className="latest-match-right-text">{manOfTheMatch}</p>
        <h3>Umpires</h3>
        <p className="latest-match-right-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
