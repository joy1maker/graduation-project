import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'white';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 20px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: black;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300% !important;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 20px 0;
  margin-left:-115px;
  &:focus {
    outline: none;
  }
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
  
`;

export const Group = styled.div`
  position: relative;
  margin: 20px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;