import React from 'react';

function FormRadio(props) {
    const labels = props.values;
    const listItems = labels.map((label) =>
    <div className="row">
        <label className="control-label col-sm-3">{label}</label>
        <div className="col-sm-9"><input className="form-control" type="radio" name="gam-checkbox" data-size="mini" data-on-text="YES" data-off-text="NO"/></div>
        <div className="col-sm-12"><hr/></div>
    </div>
    );
    return (
      <div class="form-group">{listItems}</div>
    );
  }



export default FormRadio;