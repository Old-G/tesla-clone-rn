import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import CarItem from '../CarItem'
import cars from './cars'

const CarsList = () => {
  return (
    <Container>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
`

export default CarsList
