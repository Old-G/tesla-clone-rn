import { StatusBar } from 'expo-status-bar'
import React from 'react'
import styled from 'styled-components/native'
import CarsList from './components/CarsList'
import Header from './components/Header'

export default function App() {
  return (
    <Container>
      <Header />
      <CarsList />
      <StatusBar style='auto' />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`
