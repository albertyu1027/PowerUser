import React, { Component } from 'react';
// import {Bar} from 'react-chartjs-2';
import { Link } from "react-router-dom";
import Uppy from 'uppy/lib/core'
import Dashboard from 'uppy/lib/plugins/Dashboard'
import Tus from 'uppy/lib/plugins/Tus'

class Upload extends Component {

  render() {
    Uppy({autoProceed: false})
      .use(Dashboard, {trigger: '#select-files'})
      .use(Tus, {endpoint: 'https://master.tus.io/files/'})
      .run()
      .on('complete', (result) => {
        console.log('Upload result:', result)
      });

    return (
      <div className="chart">
        <h1> Upload Page! </h1>
        { /* <div id="select-files"></div> */ }
      </div>
    )
  }
}

export default Upload;
