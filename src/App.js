import React, { Component } from 'react';
import Layout from './components/Layout';
import Apod from './components/Apod';

import { getNasaApod } from './utils/api';

class App extends Component {
  state = {
    explanation: null,
    title: null,
    url: null,
  };

  componentDidMount() {
    this.getApodResult();
  }

  getApodResult = async () => {
    const { explanation, title, url } = await getNasaApod();
    this.setState({
      explanation,
      title,
      url,
    });
  };

  render() {
    const { explanation, title, url } = this.state;
    return (
      <Layout>
        <Apod url={url} explanation={explanation} title={title} />
      </Layout>
    );
  }
}

export default App;
