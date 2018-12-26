import React from 'react'
import styled from 'styled-components'

//Components
import Card from '@styled-components/Card'
import ButtonCard from '@styled-components/ButtonCard'
import ButtonText from '@styled-components/ButtonText'

const FrontCard = styled.View`
    flex: 1;
    justify-content: flex-start;
    padding: 10px;
`

const TextIndicatorCountCard = styled.Text`
    font-size: 14;
    font-weight: bold;
`

const QuestionContent = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const TextQuestion = styled.Text`
    font-size: 35;
    font-weight: bold;
    font-style: italic;
    margin-top: 20;
`

const ContentButton = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
export default ({ actualPos, endPos, question, flipCard }) => (
    <Card>
        <FrontCard>
            <TextIndicatorCountCard>{actualPos} / {endPos}</TextIndicatorCountCard>
            <QuestionContent>
                <TextQuestion>{question}</TextQuestion>
                <ContentButton>
                    <ButtonCard
                        backgroundColor="#ADD8E6"
                        borderColor="#ADD8E6"
                        onPress={_=>flipCard()}>
                        <ButtonText colorText="#FFF">Show Answer</ButtonText>
                    </ButtonCard>
                </ContentButton>
            </QuestionContent>
        </FrontCard>
    </Card>
);