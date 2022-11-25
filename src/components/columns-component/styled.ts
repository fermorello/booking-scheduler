import styled from 'styled-components';
import { Table } from '../../styled';

interface HeaderContainerProps {
  marginLeft?: number;
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
  display: flex;
  margin-left: ${({ marginLeft }) => (marginLeft && (`${marginLeft}px`))};
`;

export const HeaderWhiteSpace = styled.div`
  margin-right: 70px;
`;

export const DateColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
