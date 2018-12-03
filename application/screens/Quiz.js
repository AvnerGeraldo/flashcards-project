import React, { PureComponent } from 'react'
import { Text } from 'react-native'

//Components
import FlipCard from '@components/FlipCard'

/*
- Preciso receber parametros: 
    - Questions(Array)
    - Nº da questao atual(Caso não passe será igual a 0)
    - Ao clicar em (Correct / Incorrect) passar parametros:
        - Questions(Array)(Atualizado com a informação de correto ou incorreto da questao)
        - Nº da proxima questão

- Quando Nº da questão atual == total de questões:
    - Link do botão (Correct / Incorrect) irá direcionar para a tela de score
*/

class Quiz extends PureComponent {
    state = {
        actualPosQuis: 1
    }
    
    receiveAnwser = (posQuestion, answer) => {
        //Tratar answer
        //this.setState({ actualPosQuis: posQuestion + 1 })
        console.log(posQuestion, answer)
    }

    render() {
        const { actualPosQuis } = this.state
        const data = this.props.navigation.getParam('questions')
        const totalCountCards = data.length
        const { question, answer } = data[actualPosQuis - 1]

        return (
            <FlipCard 
                question={question} 
                answer={answer} 
                positionCard={actualPosQuis} 
                totalCountCards={totalCountCards} 
                receiveAnwser={(answered) => this.receiveAnwser(actualPosQuis, answered)}
            />
        )
    }
}

export default Quiz
