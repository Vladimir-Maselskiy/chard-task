import styled from 'styled-components';
import { Form, Field } from 'formik';
import { TbEyeOff } from 'react-icons/tb';

export const StyledModal = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 480px;
  padding: 64px 40px;
  color: #134267;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 5px 20px rgba(108, 117, 139, 0.2);
`;

export const StyledForm = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const Input = styled(Field)`
  width: 400px;
  height: 45px;
  padding: 10px 10px 10px 17px;
  background: #f8f9fc;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
  color: #c3cad5;
  margin-top: 8px;
  ::placeholder {
    font-style: normal;
    line-height: 1.5;
  }
`;
export const Label = styled.label`
  position: relative;
  margin-top: 24px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #4f637d;
`;
export const StyledTbEyeOff = styled(TbEyeOff)`
  position: absolute;
  right: 15px;
  top: 40px;
  &:hover {
    cursor: pointer;
  }
`;
