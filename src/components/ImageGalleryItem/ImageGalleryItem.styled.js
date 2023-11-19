import styled from 'styled-components';

export const InageItem = styled.img`
  width: 285px;
  height: 200px;
  padding: 5px;
  border-radius: 20px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;
