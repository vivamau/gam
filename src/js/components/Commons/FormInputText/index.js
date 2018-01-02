import React from 'react';

const FormInputText = (props) => {
    return (
        <div class="form-group">
            <label class="control-label col-sm-3">{props.label}<br/><small class="note">{props.note}</small></label>
            <div class="col-sm-9">
                <input class="form-control" value={props.value} disabled={props.status} type={props.type}/>
            </div>
        </div>
    )
}

export default FormInputText;