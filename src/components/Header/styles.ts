import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.header`
  width: 100%;
  background: ${colors.grayLight};
  height: 96px;
  display: flex;
  
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1136px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    min-width: 148px;
    max-width: 155px;
    min-height: 40px;
    max-height: 50px;
  }
`;

export const Buttons = styled.div`
  width: 368px;
  height: 18px;
  display: flex;
  justify-content: space-between;

    div {
      width: 176px;
      height: 16px;
      background: ${colors.grayMid};
      border-radius: 32px;
    }
`;
