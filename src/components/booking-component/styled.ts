import styled from "styled-components";

interface ReservationItemProps {
  background: string;
  start: number;
  dimension: number;
  duration: number;
  columnHours: number;
  day: number;
  index: number 
}

export const ReservationItem = styled.div<ReservationItemProps>`
  height: 25px;
  display: flex;
  align-items: center;
  font-size: 12px;
  position: absolute;
  background: ${({ background }) => background};
  transform: ${({ start, dimension, day, columnHours, index }) => `translate(${(start*dimension/(24/columnHours)) + (day > 0 ? (day*dimension*columnHours) : 0)}px, ${(index + 1) * 52 - 35}px)`};
  width: ${({ duration, dimension, columnHours }) => `${(duration*dimension)/(24/columnHours)}px`};
  padding: 0px 10px;
  box-sizing: border-box;
  cursor: pointer;
`;
