import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userComments } from 'reducers/usercomments'
import styled from 'styled-components'

export const CommentInput = ({ drinkId }) => {
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(userComments.actions.addComment({ message: comment, drink: drinkId }))
    setComment('')
  }

  return (
    <Container>
      <Form onSubmit={(e) => handleOnSubmit(e)}>
        <Label>Have you tried this cocktail...?</Label>
        <Input
          type="text"
          value={comment}
          maxLength="140"
          minLength="5"
          onChange={(e) => { setComment(e.target.value) }} />
        <MessageLength color={comment.length !== 0 && comment.length <= 4 ? 'red' : 'black'}>{comment.length}/140</MessageLength>
      </Form>
      <Button
        type="submit"
        onClick={handleOnSubmit}
        disabled={comment.length < 5 || comment.length > 140}>
        Post
      </Button>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color || '#fff'};
  border: 2px solid ${(props) => props.border || '#6495ED'}; 
  padding: 10px;
  width: 320px;

  @media (max-width: 400px) {
    width: 290px;
  }  
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  font-size: 25px;
`
const Input = styled.input`
  height: 50px;
  border: 2px solid whitesmoke;
  font-size: 15px;
  margin: 3px;
  border-radius: 3px;
`

const MessageLength = styled.p`
  font-size: 17px;
  margin: 0;
  color: ${(props) => props.color || '#000'};
`

const Button = styled.button`
  height: 40px;
  margin: 3px 3px 3px 13px;
  text-transform: uppercase;
  background-color: ${(props) => props.color || '#6495ED'};
  border: none;
  border-radius: 10px;
  color: #fff;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  &:disabled {
    background-color: lightgrey;
  }
`