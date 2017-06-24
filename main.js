import Expo from 'expo'
import React, {Component} from 'react'
import {View} from 'react-native'
import Card from './components/card'

class App extends Component {

  state = {
    jobIndex: 0
  }

  nextCard = () => {
    this.setState({jobIndex: this.state.jobIndex + 1})
  }

  render() {
    const {jobIndex} = this.state
    return (
      <View style={{flex:1}}>
        {jobs.slice(jobIndex, jobIndex + 3).reverse().map((job) => {
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

const jobs = [
  {
    id: '4',
    title: 'UI & UX Designer Required',
    desc: 'Need to design an upcoming socialmedia app.',
  },
  {
    id: '6',
    title: 'App Developer Required',
    desc: 'Need a mobile app for an IOT based project.',
  },  
  {
    id: '5',
    title: 'Designer Required',
    desc: 'Need a logo design for upcoming ecommerce portal.',
  },
  {
    id: '7',
    title: 'Mobile Developer Required',
    desc: 'Need a mobile app for grocerry delivery.',
  },  
  {
    id: '4',
    title: 'Article Writer required',
    desc: 'Need bulk articles from a ghost writer for my new blog.',
  },
  {
    id: '6',
    title: 'iOS App Developer Required',
    desc: 'Need a developer to redevelop my app for iOS.',
  },  
  {
    id: '5',
    title: 'Social Media Expert Required',
    desc: 'Need a social media expert for optimizing my socials.',
  },
  {
    id: '7',
    title: 'Business Expert Required',
    desc: 'Need a business expert who will advice about my business.',
  },
]

Expo.registerRootComponent(App)