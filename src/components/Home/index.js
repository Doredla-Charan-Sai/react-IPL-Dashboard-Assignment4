// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {homeList: [], isLoading: true}

  componentDidMount() {
    this.fetchHomeList()
  }

  fetchHomeList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teams = await response.json()

    const updatedHomeList = teams.teams.map(eachHomeItem => ({
      id: eachHomeItem.id,
      name: eachHomeItem.name,
      teamImageUrl: eachHomeItem.team_image_url,
    }))

    this.setState({homeList: updatedHomeList, isLoading: false})
  }

  render() {
    const {isLoading, homeList} = this.state
    return (
      <div className="bg-cont">
        <div className="title-cont">
          <img
            className="title-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="main-home-head">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader" className="home-load not-found-cont">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teams-list-cont">
            {homeList.map(eachItem => (
              <TeamCard teamDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
