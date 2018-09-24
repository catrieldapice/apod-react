import React, { Component } from 'react';
import ApodContainer from './components/ApodContainer';
import Apod from './components/Apod';

import { getNasaApod } from './utils/api';

class App extends Component {
  state = {
    date: null,
    explanation: null,
    title: null,
    url: null,
  };

  componentDidMount() {
    this.getApodResult();
  }

  getApodResult = async () => {
    const response = await getNasaApod();
    const { date, explanation, title, url } = response;

    this.setState({
      date,
      explanation,
      title,
      url,
    });
  };

  render() {
    const { explanation, title, url } = this.state;
    return (
      <div>
        <ApodContainer
          apod={<Apod url={url} explanation={explanation} title={title} />}
        />
      </div>
    );
  }
}

export default App;
