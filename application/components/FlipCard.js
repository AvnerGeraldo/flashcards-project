import React, { Component } from 'react'
import FlipCardNative from 'react-native-flip-card'

//Styled Components
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
            <FlipCardNative
                friction={8}
                perspective={1}
                flipHorizontal={true}
                flipVertical={false}
                flip={showBackCard}
                clickable={false}
                style={{
                    backgroundColor: '#FFF',
                    borderWidth: 0
                }}
                >
                <FrontCard 
                    actualPos={positionCard}
                    endPos={totalCountCards} 
                    question={question}
                    flipCard={this.flipCard}
                />
                <BackCard 
                    actualPos={positionCard}
                    endPos={totalCountCards}
                    answer={answer}
                    responseAnswer={this.completeCard}
                />
            </FlipCardNative>
        )        
    }
}

export default FlipCard