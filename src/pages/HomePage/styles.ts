import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  width: 100vw;
  background: ${colors.background};
  display: flex;
  flex-direction: column;
`;

export const Container = styled.main`
  max-width: 1136px;
  width: 100%;
  background: ${colors.white};
`;
