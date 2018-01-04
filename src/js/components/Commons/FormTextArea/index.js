import React from 'react';

const FormTextArea = (props) => {
    return (
        <div className="form-group">
            <label className="control-label col-sm-3">{props.label}<br/><small className="note">{props.note}</small></label>
            <div className="col-sm-9">
                <textarea name="message" id="message" className="form-control" rows={props.rows}></textarea>
            </div>
        </div>
    )
}

export default FormTextArea;