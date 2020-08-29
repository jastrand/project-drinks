import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInfo } from 'reducers/drinks'
import { CommentInput } from 'components/CommentInput'
import { Comment } from 'components/Comment'
import styled from 'styled-components'

export const Details = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const details = useSelector((state) => state.drinks.drinkDetails)
  const comments = useSelector((state) => state.comments.comments)
  const errorDetails = useSelector((state) => state.drinks.errorMessage)
  const itemNotFound = errorDetails === 'could not fetch drink'

  useEffect(() => {
    dispatch(fetchInfo(id))
  }, [id, dispatch]);

  return (
    <Container>
      <StyledLink to="/">Start</StyledLink>
      {details && (
        <DetailsInfo>
          <Wrapper>
            {details.strDrinkThumb && <DrinkImage
              src={details.strDrinkThumb}
              alt={details.strDrink} />}
            <DrinkTitle>{details.strDrink} {details.strCategory}</DrinkTitle>
            <Text>
              {details.strIngredient1 && (
                <Ingridient>{details.strMeasure1}  {details.strIngredient1}</Ingridient>
              )}
              {details.strIngredient2 && (
                <Ingridient>{details.strMeasure2} {details.strIngredient2}</Ingridient>
              )}
              {details.strIngredient3 && (
                <Ingridient>{details.strMeasure3} {details.strIngredient3}</Ingridient>
              )}
              {details.strIngredient4 && (
                <Ingridient>{details.strMeasure4} {details.strIngredient4}</Ingridient>
              )}
              {details.strIngredient5 && (
                <Ingridient>{details.strMeasure5} {details.strIngredient5}</Ingridient>
              )}{details.strIngredient6 && (
                <Ingridient>{details.strMeasure6} {details.strIngredient6}</Ingridient>
              )}
              <Instructions>{details.strInstructions}</Instructions>
            </Text>
          </Wrapper>
        </DetailsInfo>
      )}
      {itemNotFound && (
        <h2>Drink not found</h2>
      )}
      <CommentWrapper>
        {comments.map((i, comment) => (
          <Comment key={comment} comment={comment} id={id} />
        ))}
        <CommentInput drinkId={id} />
      </CommentWrapper>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DetailsInfo = styled.section`
`
const CommentWrapper = styled.section`
  
`
const Wrapper = styled.section`
  position: relative;
`
const DrinkTitle = styled.p`
  position: absolute;
  font-size: 30px;
  top: 0;
  right: 0;
  left: 0;
  background-color: #F08080;
  padding: 6px;
  border: 1px dashed #fff;
  text-align: center;
  text-transform: uppercase;
  color: papayawhip;
`

const DrinkImage = styled.img`
  height: 400px;
  width: 400px;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 25px 25px 50px 0 white inset, -25px -25px 50px 0 pink inset; 

  @media (max-width: 500px) {
    width: 60%;
    height: 60%;
  }
`

const StyledLink = styled(Link)`
  align-self: flex-start;
  margin: 10px;
  text-decoration: none;
  text-transform: uppercase;
  color: #f08080;

  &:hover {
    cursor: pointer; 
    transform: scale(1.1);
  }
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FDF5E6;
  margin: 10px 0;
  border: 1px solid pink;
  width: 400px;
  padding: 10px;
`
const Ingridient = styled.p`
  font-size: 20px;
  margin: 2px;
`
const Instructions = styled.p`
  font-size: 15px;
  margin: 3px;
`