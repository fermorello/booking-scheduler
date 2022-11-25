import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: auto;
`;

export const DataContainer = styled.div`
  display: flex;
  position: relative;
`;

export const BookingContainer = styled.div`
  position: absolute;
  top: 0;
`;

interface WrapperProps {
  width: number;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ width }) => `${width}px`};
  padding: 0px;
`;

export const DataWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
`;