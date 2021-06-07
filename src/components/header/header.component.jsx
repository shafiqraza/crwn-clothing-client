import React from "react";
import { ReactComponent as Logo} from "../../assets/crown.svg";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import CartItem from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import { createStructuredSelector } from "reselect"
import { selectCurrentUser } from "../../redux/user/user-selector"
import { selectCartHidden } from "../../redux/cart/cart-selectors"
import { signOutStart } from "../../redux/user/user-action"


import { HeaderContainer, LogoContainer, OptionsContainer, OptionContainer } from "./header.styles";

const Header = ({currentUser, isHidden, signOutStart}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionContainer as={Link} to="/shop">
        SHOP
      </OptionContainer>
      
      {
        currentUser ?
          <OptionContainer onClick={signOutStart}>SIGN OUT</OptionContainer>
        :
        <OptionContainer as={Link} to='/signin'>SIGN IN</OptionContainer>
      }

      {/* <OptionContainer as={Link} to="/contact">
        CONTACT
      </OptionContainer> */}
      <CartItem />
    </OptionsContainer>
    
    { isHidden ? null : <CartDropDown /> }
    
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Header));