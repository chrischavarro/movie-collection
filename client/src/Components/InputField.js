import React from 'react'

const InputField = (props) => (
  <div className="form-group">
    <label htmlFor={props.data}>{props.data.charAt(0).toUpperCase() + props.data.slice(1)}</label>
    <input type="text"
      className="form-control"
      name={props.data}
      id={props.data}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
)

export default InputField;
