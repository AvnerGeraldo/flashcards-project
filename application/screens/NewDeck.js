import React, { PureComponent } from 'react'
import { View, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

//Actions
import { SAVE_DECK, GET_DECKS } from '@actions/saga-actions'

//Styled components
import Container from '@styled-components/Container'
import ContentNewDeck from '@styled-components/ContentNewDeck'
import ContainerButton from '@styled-components/ContainerButton'
import TextCenter from '@styled-components/TextCenter'
import TextInput from '@styled-components/TextInput'
import ButtonCard from '@styled-components/ButtonCard'
import BoxResponseMessage from '@styled-components/BoxResponseMessage'


class NewDeck extends PureComponent {
    state = {
        textTitle: '',
        success: false,
        error: ''
    }

    handleTextTitle = (textTitle) => this.setState({ textTitle })

    saveNewDeck = () => {
        const { textTitle } = this.state

        this.props.saveDeckTitle(textTitle)        
        .then(res => {
            this.props.getDecks()
            .then(res => {
                if (this.props.error) {
                    this.setState({
                        error: this.props.error,
                        textTitle: ''
                    })
                    return
                }

                this.setState({
                    success: true,
                    textTitle: '',
                    error: ''
                })
            })
        })
        .catch(error => this.setState({ error:error.message }))
    }

    setTimeToHideMessage = () => {
        setTimeout(() => this.setState({ 
            success: false,
            error: ''
        }), 5000)
    }

    render() {
        const { textTitle, success, error } = this.state
        let typeAlert, textToShow
        let component = null

        if (success) {
            typeAlert ='success'
            textToShow = 'Deck title saved with success!'
        }

        if (error) {
            typeAlert ='danger'
            textToShow = error
        }

       if (success || error) {
            component = <BoxResponseMessage typeAlert={typeAlert} textToShow={textToShow} />
            this.setTimeToHideMessage()
       }

        return (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding">
                {component || null}
                <ContentNewDeck>
                    <View style={{ marginBottom: 25 }}>
                        <TextCenter fontSize={45}>What is the title of your new deck ?</TextCenter>
                    </View>                   
                    <TextInput
                        placeholder='Deck title'
                        value={textTitle}
                        onChangeText={(text) => this.handleTextTitle(text)} 
                        borderColor='#ADD8E6'
                        />
                    <ContainerButton>
                        <ButtonCard 
                            backgroundColor='#ADD8E6' 
                            borderColor='#F5F5F5'
                            onPress={() => this.saveNewDeck()}
                            style={{ alignSelf: 'center'}}>
                            <TextCenter color='#FFF'>Submit</TextCenter>
                        </ButtonCard>
                    </ContainerButton>
                </ContentNewDeck>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = ({ listDecks: { error } }) => ({
    error
})

const mapDispatchToProps = dispatch => ({
    saveDeckTitle: title => new Promise((resolve, reject) => dispatch({
        type: SAVE_DECK,
        payload: {
            resolve,
            reject,
            title,
        }
    })),
    getDecks: _=> new Promise((resolve, reject) => dispatch({
        type: GET_DECKS,
        payload: {
            resolve,
            reject
        }
    }))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)