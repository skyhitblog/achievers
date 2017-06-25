import React, {Component} from 'react'
import {View} from 'react-native'
import * as firebase from 'firebase'

import Card from '../components/card'

export default class Home extends Component {

  state = {
    jobIndex: 0,
    jobs: [],
  }

  componentWillMount() {
    firebase.database().ref().child('jobs').once('value', (snap) => {
      let jobs = []
      snap.forEach((job) => {
        const {title, desc, id} = job.val()
        jobs.push({title, desc, id})
      })
      this.setState({jobs})
    })
  }

  nextCard = () => {
    this.setState({jobIndex: this.state.jobIndex + 1})
  }

  render() {
    const {jobIndex} = this.state
    return (
      <View style={{flex:1}}>
        {this.state.jobs.slice(jobIndex, jobIndex + 3).reverse().map((job) => {
          return (
            <Card
              key={job.id}
              job={job}
              onSwipeOff={this.nextCard}
            />
          )
        })}
      </View>
    )
  }
}