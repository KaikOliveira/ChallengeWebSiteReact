import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  border-radius: 32px;
  border: 0.5px solid ${colors.grayMid};
  padding: 8px;
  color: ${colors.textLight};
  width: 464px;
  max-height: 48px;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${colors.textLight};
    &::placeholder {
      color: #666;
    }
  }
  &:focus-within {
    box-shadow: 0 0 3px 0px #126b67;
    border-color: ${colors.white};
    outline: none;
  }
  svg {
    margin-right: 16px;
  }
`;
