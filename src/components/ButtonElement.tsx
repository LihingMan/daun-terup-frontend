import styled from 'styled-components';
import { Link } from 'react-scroll';
import { ArrowRightOutlined, RightOutlined } from '@ant-design/icons';

interface IButtonStyle {
  $primary?: boolean;
  $dark?: boolean;
  fontBig?: boolean;
  big?: boolean;
}

export const Button = styled(Link)<IButtonStyle>`
  border-radius: 50px;
  background: ${({ $primary }) => ($primary ? '#d5962a' : '#010606')};
  color: ${({ $dark }) => ($dark ? '#010606' : '#fff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14 48px' : '12px 30px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ $primary }) => ($primary ? '#fff' : '#01bf71')};
  }
`;

export const ArrowForward = styled(ArrowRightOutlined)`
  margin-top: 2px;
  margin-left: 13px;
  font-size: 13px;
`;

export const ArrowRight = styled(RightOutlined)`
  margin-top: 2px;
  margin-left: 13px;
  font-size: 13px;
`;
