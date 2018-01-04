import React from 'react';

const FormInputText = (props) => {
    return (
        <div className="form-group">
            <label className="control-label col-sm-3">{props.label}<br/><small className="note">{props.note}</small></label>
            <div className="col-sm-9">
                <input className="form-control" value={props.value} disabled={props.status} type={props.type}/>
            </div>
        </div>
    )
}

export default FormInputText;