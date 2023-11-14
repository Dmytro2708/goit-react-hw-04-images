import styled from 'styled-components';

export const SearchbarHeader = styled.div`
  text-align: center;
`;

export const SearchbarForm = styled.form`
  position: relative;
  display: inline-block;
  margin: auto;
  width: 100%;
  height: 50px;
  background-color: cadetblue;
  margin-bottom: 10px;
`;

export const SearchbarBtn = styled.button`
  color: darkgray;
  position: relative;
  left: 30px;
  height: 25px;
  fill: none;
  background-color: white;
  border: white;
  cursor: pointer;
`;

export const SearchbarInput = styled.input`
  width: 300px;
  height: 29px;
  margin-top: 9px;
  padding-left: 40px;
  border: white;
`;
