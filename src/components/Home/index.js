import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {teamData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamItemData()
  }

  getTeamItemData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamData: updatedData, isLoading: false})
  }

  onTeamCard = () => {}

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderHome = () => {
    const {teamData} = this.state
    return (
      <div className="container">
        <div className="main-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <ul>
          {teamData.map(each => (
            <TeamCard
              key={each.id}
              teamCardDetails={each}
              onTeamCard={this.onTeamCard}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return <>{isLoading ? this.renderLoader() : this.renderHome()}</>
  }
}

export default Home
