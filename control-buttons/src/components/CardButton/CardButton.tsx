
import React from 'react';
import styled from 'styled-components'
import { css } from "styled-components"
import { getAllCharactersRickAndMorty, getAllCharactersBreakingBad } from "gridmovies/movies";

const Button = styled.button`
  background: #04AA6D;
  border-radius: 5px;
  color: #FFFFFF;
  font-size:1.5rem;
  margin: 0.5em 1em;
  padding: 6px 18px;
  border: none;
  cursor:pointer;
  font-family: 'Source Sans Pro', sans-serif;
  ${(props: any) => props.primary && css`
    color: white;
  `}
  :hover{
    background-color: #059862 !important;
  }
`;

const Container = styled.div`
  text-align: center;
`


const CardButton = ({ btn1Text, btn2Text }: any) => {
  return (
    <Container>
      <Button
        onClick={() => getAllCharactersRickAndMorty()}
      >{btn1Text ? btn1Text : "Mostrar Rick and Morty"}</Button>
      <Button
        onClick={() => getAllCharactersBreakingBad()}
        color="primary">{btn2Text ? btn2Text : "Mostrar Breaking Bad"}</Button>
    </Container>
  );
};

export default CardButton;