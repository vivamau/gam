import React, { Component } from 'react';

const FormHeader = (props) => {
    return (
            <div class="row">
            <div class="col-md-12">
            <footer className="wfp-footer">            
                <div className="wfp-grid wfp-wrapper pv2">
                    <div className="wfp-u-1 wfp-u-md-1-3 tc tl-md">
                        <p className="fs6 bold">2018 &copy; World Food Programme</p>
                    </div>
                    <div className="wfp-u-1 wfp-u-md-2-3 tc tr-md">
                        <ul className="nl fs6 mv2 pa0">
                        <li className="dib ma0 ml1">This is a POC with no real data</li>
                        </ul>
                    </div>
                </div>
            </footer>
            </div>
            </div>
    )
}

export default FormHeader;