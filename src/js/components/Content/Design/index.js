import React, { Component } from 'react';
import FormInputText from '../../Commons/FormInputText';
import FormHeader from '../../Commons/FormHeaders/FormHeader'; 

class ContentDesign extends Component {
    render () {
        return ( 
        <div className="row">
            <div className="col-md-12">
                <h1>Design</h1>
                <hr/>
                <p className="lead">Some text to explain what is the design phase.<br/> Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                <hr/>
            </div>
            <div className="col-md-12">
                <form className="form-horizontal">
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <button className="wfp-btn--primary xlarge">Gender Analysis</button>
                        </div>
                        <div className="col-md-3 text-center">
                            <button className="wfp-btn--primary xlarge">Tailored Activities</button>
                        </div>
                        <div className="col-md-3 text-center">
                            <button className="wfp-btn--primary xlarge">Participation</button>
                        </div>
                        <div className="col-md-3 text-center">
                            <button className="wfp-btn--primary xlarge">Benefits</button>
                        </div>
                        <br/><br/><br/><br/><br/><br/><br/>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
export default ContentDesign;