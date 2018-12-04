import React from 'react'
import styled from 'styled-components'

//Components
import Card from '@styled-components/Card'
import ButtonCard from '@styled-components/ButtonCard'
import ButtonText from '@styled-components/ButtonText'

const BackCard = styled.View`
    flex: 1;
    justify-content: space-around;
    align-items: stretch;
    padding: 10px;
`

const TextIndicatorCountCard = styled.Text`
    font-size: 14;
    font-weight: bold;
`
const AnswerContent = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 15px;
`

const TextAnswer = styled.Text`
    font-size: 26;
    font-weight: bold;
    font-style: italic;
    margin-top: 20;
`

const ContainerButton = styled.View`
    flex: 1;
    justify-content: center;
`

export default ({ actualPos, endPos, answer, responseAnswer }) => (
    <Card>
        <BackCard>
            <TextIndicatorCountCard>{actualPos} / {endPos}</TextIndicatorCountCard>
            <AnswerContent>
                <TextAnswer>{answer}</TextAnswer>
                <ContainerButton>
                    <ButtonCard 
                        backgroundColor='#3CB371' 
                        borderColor='#2E8B57' 
                        onPress={() => responseAnswer('C')}>
                        <ButtonText colorText='#FFF'>Correct</ButtonText>
                    </ButtonCard>
                    <ButtonCard 
                        backgroundColor='#CD4F39' 
                        borderColor='#EE5C42' 
                        onPress={() => responseAnswer('I')}>
                        <ButtonText colorText='#FFF'>Incorrect</ButtonText>
                    </ButtonCard>
                </ContainerButton>
            </AnswerContent>            
        </BackCard>
    </Card>
);