import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails, onTeamCard} = props
  const {id, name, teamImageUrl} = teamCardDetails
  const onClickTeamCard = () => {
    onTeamCard(id)
  }
  return (
    <li>
      <Link to={`/team-matches/${id}`} className="link">
        <button type="button" className="team-btn" onClick={onClickTeamCard}>
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </button>
      </Link>
    </li>
  )
}
export default TeamCard
