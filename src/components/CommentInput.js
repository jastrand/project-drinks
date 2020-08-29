import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { comments } from 'reducers/comments'
import styled from 'styled-components'

export const CommentInput = ({ drinkId }) => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(comments.actions.addComment({ comment: text, drink: drinkId }))
    setText('')
  }

  return (
    <Container>
      <Form onSubmit={(e) => handleOnSubmit(e)}>
        <Label>Have you tried this cocktail...?</Label>
        <Input
          type="text"
          value={text}
          maxLength="140"
          minLength="5"
          onChange={(e) => { setText(e.target.value) }} />
        <MessageLength color={text.length !== 0 && text.length <= 4 ? 'red' : 'black'}>{text.length}/140</MessageLength>
      </Form>
      <Button
        type="submit"
        onClick={handleOnSubmit}
        disabled={text.length < 5 || text.length > 140}>
        Post
      </Button>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #FDF5E6;
  margin: 10px 0;
  border: 1px solid pink;
  width: 400px;
  padding: 10px;

  @media (max-width: 400px) {
    width: 290px;
  }  
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  font-size: 20px;
`
const Input = styled.input`
  height: 50px;
  border: 2px solid whitesmoke;
  font-size: 15px;
  margin: 3px;
  border-radius: 3px;
`

const MessageLength = styled.p`
  font-size: 11px;
  margin: 0;
  color: ${(props) => props.color || '#000'};
`

const Button = styled.button`
  height: 40px;
  align-self: center;
  text-transform: uppercase;
  background-color: ${(props) => props.color || '#f08080'};
  border: none;
  border-radius: 10px;
  color: #fff;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  &:disabled {
    display: none;
  }
`