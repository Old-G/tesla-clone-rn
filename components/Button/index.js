import React from 'react'
import styled from 'styled-components/native'

const Button = ({ type, content, onPress }) => {
  const colorButton = type === 'primary' ? '#171a20cc' : '#ffffffa6'
  const colorText = type === 'primary' ? '#ffffff' : '#171a20'

  return (
    <Container>
      <PressableB style={{ backgroundColor: colorButton }} onPress={onPress}>
        <TextButton style={{ color: colorText }}>{content}</TextButton>
      </PressableB>
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  padding: 10px;
`

const PressableB = styled.Pressable`
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`

const TextButton = styled.Text`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`

export default Button
