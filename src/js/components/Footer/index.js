import React from 'react';

const FormHeader = (props) => {
    return (
      <div class="container">
        <hr/>
        <footer className="wfp-footer">  
            <div class="row">
                <div class="col-md-6">          
                    <p className="fs6 bold">2018 &copy; World Food Programme</p>
                </div>
                <div className="col-md-6">
                    <p className="fs6 bold text-right">This is a POC with no real data</p>
                </div>
            </div>
        </footer>
    </div>
    )
}

export default FormHeader;