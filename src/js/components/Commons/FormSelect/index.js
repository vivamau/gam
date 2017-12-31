import React, { Component } from 'react';

const FormSelect = (props) => {
    return (
<div class="form-group">
<label class="control-label col-sm-3">Activity Category<br/><small class="note">Possibly a list of functional areas to use<br/>If this person is the CD or DCD there's no need of the list of functions</small></label>
<div class="col-sm-9">
    <select class="form-control">
        <option>Programme</option>
        <option>SupplyChain</option>
        <option>ICT</option>
        <option>Finance</option>
    </select>
</div>
</div>
    )
}

export default FormSelect;