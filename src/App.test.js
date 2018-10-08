import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import PlayerCard from './PlayerCard';

configure({ adapter: new Adapter() });
const props = [
  {
    "firstname": "Stan",
    "lastname": "Wawrinka",
    "shortname": "S.WAW",
    "sex": "M",
    "country": {
      "picture": "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png",
      "code": "SUI"
    },
    "picture": "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg",
    "data": {
      "rank": 21,
      "points": 1784,
      "weight": 81000,
      "height": 183,
      "age": 33,
      "last": [
        1,
        1,
        1,
        0,
        1
      ]
    }
  },
  {
    "firstname": "Rafael",
    "lastname": "Nadal",
    "shortname": "R.NAD",
    "sex": "M",
    "country": {
      "picture": "https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png",
      "code": "ESP"
    },
    "picture": "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
    "data": {
      "rank": 1,
      "points": 1982,
      "weight": 85000,
      "height": 185,
      "age": 33,
      "last": [
        1,
        0,
        0,
        0,
        1
      ]
    }
  }
]

describe('Home', () => {
  it('renders app with correctly', () => {
    const wrapper = mount(<App />)
    const hasHeading = wrapper.find('h2');
    expect(hasHeading.exists()).toBe(true);
  });

  it('Should not render Player card component when there are no props being passed', () => {
    const wrapper = mount(<App />)
    const hasPlayerCard = wrapper.find(PlayerCard);
    expect(hasPlayerCard.exists()).toBe(false);
  })

  it('Should render Player card component when there are props being passed', () => {
    const wrapper = mount(<App playersStats={props} />)
    wrapper.setState({ playersStats: props });
    const hasPlayerCard = wrapper.find(PlayerCard);
    expect(hasPlayerCard.exists()).toBe(true);
  })
})
