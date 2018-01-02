import React from 'react';

const FormHeader = (props) => {
    return (
        <div className="row">
            <div className="col-sm-6"><h2>{props.titleH2}</h2><em>{props.children}</em></div>
            <div className="col-sm-6">
                <div className="pull-right">
                    <button className="wfp-btn">SAVE AS DRAFT</button>
                    <p><b><small className="note">last save: {props.titleSaveDate}</small></b></p>
                </div>
            </div>
        </div>
    )
}

export default FormHeader;