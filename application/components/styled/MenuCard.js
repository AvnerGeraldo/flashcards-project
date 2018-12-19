import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'

//Components
import Card from './Card'
import ContainerButton from './ContainerButton'
import ButtonCard from './ButtonCard'
import ButtonText from './ButtonText'

const ContainerMenuCard = styled.View`
    flex: 1;
    justify-content: center;
    align-items: stretch;  
    background-color: #ADD8E6;
    width: ${Dimensions.get('window').width};
`

const ContentCard = styled.View`
    align-items: center;
`

const Title = styled.Text`
    font-size: 24px;
`
const SubTitle = styled.Text`
    font-size: 15px;
    color: #FF4500;
`

const MenuCard = ({ navigation, title, questions }) => {
    const counterQuestions = questions.length

    return (
        <ContainerMenuCard>
            <Card>
                <ContentCard>
                    <Title>{title}</Title>
                    <SubTitle>{counterQuestions} Cards</SubTitle>
                    <ContainerButton>
                        <ButtonCard>
                            <ButtonText>Add Card</ButtonText>
                        </ButtonCard>
                        <ButtonCard borderColor='#87CEFA' onPress={() => navigation.navigate('Score', { deck: title })}>
                            <ButtonText colorText='#87CEEB'>Score of Deck</ButtonText>
                        </ButtonCard>
                        <ButtonCard backgroundColor='#000' onPress={() => navigation.navigate('Quiz', {
                            title,
                            questions
                        })}>
                            <ButtonText colorText='#FFF'>Start Quiz</ButtonText>
                        </ButtonCard>
                    </ContainerButton>
                </ContentCard>               
            </Card>
        </ContainerMenuCard>
    )
}

const { string, array, object } = PropTypes

MenuCard.propTypes = {
    navigation: object,
    title: string.isRequired,
    questions: array.isRequired
}

export default withNavigation(MenuCard);