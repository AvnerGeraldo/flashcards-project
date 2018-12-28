import React, { PureComponent } from 'react'
import { FlatList, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//Actions
import { GET_DECKS } from '@actions/saga-actions';

//Components
import MenuCard from '@styled-components/MenuCard'
import Loading from '@styled-components/Loading'
import ErrorContainer from '@styled-components/ErrorToShow'


class Decks extends PureComponent {
    state = {
        loading: true,
    }

    componentDidMount() {        
        this.props.searchDecks()
            .then(res => this.setState({ loading: false }))        
    }

    componentWillReceiveProps(nextProps) {
        const { navigation } = nextProps
        const index = navigation.getParam('moveFlatListTo')

        if (index) {
            this.moveFlatListTo(index)
        }
    }

    getItemLayout = (data, index) => {
        const ITEM_HEIGHT = Dimensions.get('window').height

        return {
            length: ITEM_HEIGHT, 
            offset: ITEM_HEIGHT * index, index
        }
    }

    moveFlatListTo = index => {
        this.flatListRef.scrollToIndex({
            animated: true, 
            index
        });
    }
    
    render() {
        const { loading } = this.state
        const { dataDecks, error } = this.props
        
        if (loading) {
            return <Loading />
        }

        if (error) {
            return <ErrorContainer textError={error} />
        }

        return (
            <FlatList
                ref={ref => this.flatListRef = ref}
                getItemLayout={this.getItemLayout}
                horizontal={true} 
                data={Object.keys(dataDecks)}
                extraData={Object.keys(dataDecks).length}
                listEmptyComponent={_ => <ErrorContainer textError="Não há dados para serem exibidos!" />}
                keyExtractor={(titleDeck) => String(titleDeck).toLocaleLowerCase()}
                renderItem={({ item }) => {      
                    const itemObj = dataDecks[item]
                    return <MenuCard title={itemObj.title} questions={itemObj.questions} />
                }}
            />
        )
    }
}

const mapStateToProps = ({ listDecks: { dataDecks, error } }) => ({
    dataDecks,
    error
})

const mapDispatchToProps = dispatch => ({
    searchDecks: _=> new Promise((resolve, reject) => dispatch({ 
        type: GET_DECKS, 
        payload: { resolve, reject }
    }))
})

const { func, object, string } = PropTypes

Decks.propTypes = {
    dataDecks: object.isRequired,
    error: string,
    searchDecks: func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)