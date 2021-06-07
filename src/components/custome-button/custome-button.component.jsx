import React  from "react";
import "./custome-button.styles.scss";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, type, handleClick, ...otherProps }) => (
  <CustomButtonContainer 
    type={type}
    onClick={handleClick}
    {...otherProps}
  >
    {children}
  </CustomButtonContainer>
);

export default React.memo(CustomButton);