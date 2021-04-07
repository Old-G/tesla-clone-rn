import React from 'react'
import styled from 'styled-components/native'
import { View, StyleSheet, Dimensions } from 'react-native'
import Button from '../Button'

const CarItem = (props) => {
  const { title, subtitle, subtitleCTA, image } = props.car

  return (
    <View style={styles.carContainer}>
      <ImageBg source={image} />
      <TitleWrapper>
        <Title>{title}</Title>
        <SubTitle>
          {subtitle} <SubTitleCta>{subtitleCTA}</SubTitleCta>
        </SubTitle>
      </TitleWrapper>

      <ButtonsContainer>
        <Button
          type='primary'
          content={'Custom Order'}
          onPress={() => {
            console.warn('Custom Order was Pressed')
          }}
        />
        <Button
          type='secondary'
          content={'Existing Inventory'}
          onPress={() => {
            console.warn('Existing Inventory was Pressed')
          }}
        />
      </ButtonsContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
})

const CarContainer = styled.View`
  width: 100%;
  height: 100%;
`

const ImageBg = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
  position: absolute;
`

const TitleWrapper = styled.View`
  margin-top: 30%;
  width: 100%;
  align-items: center;
`

const Title = styled.Text`
  font-size: 40px;
  font-weight: 500;
`

const SubTitle = styled.Text`
  font-size: 16px;
  color: #5c5e62;
`

const SubTitleCta = styled.Text`
  text-decoration: underline;
`

const ButtonsContainer = styled.View`
  position: absolute;
  width: 100%;
  bottom: 50px;
`

export default CarItem
