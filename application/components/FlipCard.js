import React, { Component } from 'react'

//Styled Components
import ContainerQuiz from '@styled-components/ContainerQuiz'
import FrontCard from '@styled-components/FrontCard'
import BackCard from '@styled-components/BackCard'

class FlipCard extends Component {
    state = {
        showBackCard: false
    }

    flipCard = () => {
        const { showBackCard } = this.state
        this.setState({ showBackCard: !showBackCard })
    }

    completeCard = (answered) => {
        this.props.receiveAnwser(answered);

        //Virar o novo card para front
        this.setState({
            showBackCard: false
        })
    }

    render() {
        const { question, answer, positionCard, totalCountCards } = this.props
        const { showBackCard } = this.state

        return (
            <ContainerQuiz>
                {
                    !showBackCard 
                    ? (
                        <FrontCard 
                            actualPos={positionCard}
                            endPos={totalCountCards} 
                            question={question} 
                            flipCard={this.flipCard}
                        />
                    )
                    :
                    (
                        <BackCard 
                            actualPos={positionCard}
                            endPos={totalCountCards}
                            answer={answer}
                            responseAnswer={this.completeCard}
                        />
                    )
                }           
            </ContainerQuiz>
        )        
    }
}

export default FlipCard