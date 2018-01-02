import React, { Component } from 'react';
class ContentHomePage extends Component {

    render () {
        return (
            <div className="jumbotron">
            <h1>Welcome! </h1>
            <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
            <p><button className="wfp-btn--primary xlarge" onclick="window.location.href='csp.html'">START GaM >></button> or <button className="wfp-btn--primary xlarge" onclick="window.location.href='csp.html'">Edit a previous GaM >></button></p>
        </div>
        )
      }
}    

export default ContentHomePage;