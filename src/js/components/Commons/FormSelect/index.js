import React from 'react';


function FormSelect(props) {
    const labels = props.values;
    const listItems = labels.map((label) =>
            <option>{label}</option>
    );
    return (
        <div class="form-group">
            <label class="control-label col-sm-3">CRF Activity Category</label>
            <div class="col-sm-9">
                <select class="form-control">
                    {listItems}
                </select>
            </div>
        </div>
    );
}

export default FormSelect;