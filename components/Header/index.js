import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const Header = () => {
  return (
    <Container>
      <ImageLogo source={require('../../assets/images/logo.png')} />
      <ImageMenu source={require('../../assets/images/menu.png')} />
    </Container>
  )
}

const Container = styled.View`
  position: absolute;
  top: 50px;
  z-index: 100;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-horizontal: 20px;
`

const ImageLogo = styled.Image`
  width: 100px;
  height: 20px;
  resize-mode: contain;
`

const ImageMenu = styled.Image`
  width: 25px;
  height: 25px;
  resize-mode: contain;
`

export default Header
