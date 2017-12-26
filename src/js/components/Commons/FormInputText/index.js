import React, { Component } from 'react';

const FormInputText = (props) => {
    return (
        <div class="form-group">
            <label class="control-label col-sm-3">{props.label}<br/><small class="note">{props.note}</small></label>
            <div class="col-sm-9">
                <input type="text" required class="form-control" value={props.value}/>
            </div>
        </div>
    )
}

export default FormInputText;