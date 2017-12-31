import React, { Component } from 'react';

const FormHeaderMultiButtons = (props) => {
    return (
<div class="row">
<div class="col-sm-6"><h2>{props.titleH2}</h2><em>{props.children}</em></div>
<div class="col-sm-6">
    <div class="pull-right">
        <button class="wfp-btn">SAVE AS DRAFT</button> <button class="wfp-btn">ADD MORE</button>
        <p><b><small class="note">last save: {props.titleSaveDate}</small></b></p>
    </div>
</div>
</div>
    )
}

export default FormHeaderMultiButtons;