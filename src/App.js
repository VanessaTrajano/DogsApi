import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Image = styled.img`
  max-width: 70vw;
  max-height: 70vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #E1E5F2;
`

const Title = styled.h1`
  font-size: 40px;
  color: #1F7A8C;
  font-variant: small-caps;
  text-align: center;
  width: 70vw;
  text-shadow: 2.5px 2.5px 4px #022B3A;
`

const Button = styled.button`
  height: 40px;
  width: 100px;
  font-size: 20px;
  font-variant: small-caps;
  text-shadow: 2px 2px 3px #BFDBF7;
  border: none;
  border-radius: 6px;
  background-color: #1F7A8C;
  color: #FFFFFF;
  transition: transform 0.2s;

  &:hover{
    transform: translateY(-2px);
    border: 0.5px solid #BFDBF7;
    box-shadow: 3px 3px 8px #022B3A;
  }

  &:active{
    box-shadow: 1.5px 1.5px 4px #022B3A;
    transform: translateY(1px);
  }
`

export default function DogApi() {

  const [image, setImage] = useState()
  const [mostrar, setMostrar] = useState(false)

  const GetApi = () => {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
      setImage(response.data.message)
      setMostrar(true)
    })

  }

  return (
    <Container>
      <GlobalStyle/>
      {mostrar ? <Title>E aí? Melhor agora?</Title> : <Title>Tendo um dia ruim? Veja fotos de dogs!</Title>}
      {mostrar && <Image src={image} alt="doguinho aleatório muito fofo" />}
      <Button onClick={() => { GetApi() }}>Clica ae</Button>
    </Container>
  )
}