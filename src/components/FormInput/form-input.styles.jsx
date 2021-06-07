import styled, { css } from "styled-components";

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

const shrinkStyles = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;

const labelShrink = props => props.value.length ? shrinkStyles : null;

export const InputLabel = styled.label`
  color: $sub-color;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${labelShrink}
`;

export const InputField = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &[type='password'] {
    letter-spacing: 0.3em;
  }

  &:focus ~ ${InputLabel} {
    ${shrinkStyles}
  }
`;