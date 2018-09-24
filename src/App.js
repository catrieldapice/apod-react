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
    const response = await getNasaApod();
    const { explanation, title, url } = response;

    this.setState({
      explanation,
      title,
      url,
    });
  };

  render() {
    const { explanation, title, url } = this.state;
    return (
      <div>
        <Layout>
          <Apod url={url} explanation={explanation} title={title} />
        </Layout>
      </div>
    );
  }
}

export default App;
