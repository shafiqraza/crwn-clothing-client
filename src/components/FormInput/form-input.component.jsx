import React from "react";
// import "./form-input.styles.scss";
import {GroupContainer, InputField, InputLabel} from "./form-input.styles";

const FormInput = ({name, type, label, handleChange, value, required}) => (
  <GroupContainer>
    <InputField 
      className="form-input" 
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      required={required !== undefined ? true : false}
    />

    {
      label ? 
        (
          <InputLabel value={value}>{label}</InputLabel>
        ) 
      : null
    }
  </GroupContainer>
);

export default React.memo(FormInput);