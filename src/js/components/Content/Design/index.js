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
                    <FormHeader titleH2="Planning" titleSaveDate="yesterday">Is this the Country Director?</FormHeader>
                    <FormInputText label="Planning Document" note="Title of planning document (TICSP, ICSP, CSP)"/>
                    <FormInputText label="Document Upload" note="Upload document or provide link" status="disabled" value="select a file"/>
                    <FormInputText label="Date" note="What does date mean?" type="date"/>
                    <h2>Phases</h2>
                    <hr/>
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <button className="wfp-btn--primary xlarge">Gender Analysis</button>
                        </div>
                        <div className="col-md-3 text-center">
                            <button className="wfp-btn--primary xlarge">Taylored Activities</button>
                        </div>
                        <div className="col-md-3 text-center">
                            <button className="wfp-btn--primary xlarge">Participations</button>
                        </div>
                        <div className="col-md-3 text-center">
                            <button className="wfp-btn--primary xlarge">Benefits</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
export default ContentDesign;