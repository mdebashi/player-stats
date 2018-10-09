import React, { Component } from 'react'
import axios from 'axios';

import PlayerCard from './PlayerCard';
import './App.css'
class App extends Component {
  constructor () {
    super()
    this.state = {
      playersStats: []
    }
  }

  componentDidMount () {
    axios.get('https://gist.githubusercontent.com/ldabiralai/cf1588cd80fed41661adecb2e3ca9704/raw/8df6831c33c1b0c178a533e8953a61d11434f220/headtohead.json')
      .then(response => this.setState({
        playersStats: response.data.players
      }))
  }

  render () {
    return (
      <div className="container">
        <h2>Player stats:</h2>
        <div className="cards">
          {this.state.playersStats ? this.state.playersStats.map((player, i) =>
              <div className="cards__item" key={player.shortname}>
                <PlayerCard playersStats={player} />
              </div>
            ) : null
          }
        </div>
      </div>
    )
  }
}
export default App