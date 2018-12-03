import React, { Component } from 'react'
import { Animated, Dimensions, StyleSheet, Button } from 'react-native'

//Styled Components
import ContainerQuiz from '@styled-components/ContainerQuiz'
import FrontCard from '@styled-components/FrontCard'
import BackCard from '@styled-components/BackCard'

class FlipCard extends Component {

    componentWillMount() {
        this.animatedValue = new Animated.Value(0)
        this.value = 0
        this.animatedValue.addListener(({ value }) => this.value = value)

        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
        })

        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg'],
        })

        this.frontOpacity = this.animatedValue.interpolate({
            inputRange: [89, 90],
            outputRange: [1, 0]
        })

        this.backOpacity = this.animatedValue.interpolate({
            inputRange: [89, 90],
            outputRange: [0, 1]
        })
    }

    flipCard = () => {
        if (this.value >= 90) {
            Animated.spring(this.animatedValue, {
                toValue: 0,
                friction: 8,
                tension: 10
            }).start()
        } else {
            Animated.spring(this.animatedValue, {
                toValue: 180,
                friction: 8,
                tension: 10
            }).start()
        }
    }

    render() {
        const frontAnimatedStyle = {
            transform: [
              { rotateY: this.frontInterpolate }
            ]
          }

        const backAnimatedStyle = {
            transform: [
                { rotateY: this.backInterpolate }
            ]
        }

        const { question, answer, positionCard, totalCountCards, receiveAnwser } = this.props

        return (
            <ContainerQuiz>
                <Animated.View style={[styles.flipCard, frontAnimatedStyle, {opacity: this.frontOpacity}]}>
                    <FrontCard 
                        actualPos={positionCard}
                        endPos={totalCountCards} 
                        question={question} 
                        flipCard={this.flipCard}
                    />
                </Animated.View>
                <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, {opacity: this.backOpacity}]}>                    
                    <BackCard 
                        actualPos={positionCard}
                        endPos={totalCountCards}
                        answer={answer}
                        responseAnswer={receiveAnwser}
                    />
                </Animated.View>            
            </ContainerQuiz>
        )        
    }
}

const styles = StyleSheet.create({
    flipCard: {
        backfaceVisibility: 'hidden'        
    },
    flipCardBack: {      
        position: 'absolute',
        top: 0,
        bottom: 0
    },
  });

export default FlipCard