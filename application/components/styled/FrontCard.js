import React from 'react'
import styled from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'

//Components
import Card from '@styled-components/Card'

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

const IconContent = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 180;
`
const TextIcon = styled.Text`
    font-size: 12px;
`

export default ({ actualPos, endPos, question, flipCard }) => (
    <Card>
        <FrontCard>
            <TextIndicatorCountCard>{actualPos} / {endPos}</TextIndicatorCountCard>
            <QuestionContent>
                <TextQuestion>{question}</TextQuestion>
                <IconContent>
                    <MaterialIcons
                        name='flip'
                        size={60}
                        onPress={() => flipCard()}
                    />
                    <TextIcon>Flip the card</TextIcon>
                </IconContent>
            </QuestionContent>
        </FrontCard>
    </Card>
);