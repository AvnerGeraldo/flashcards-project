import React, { PureComponent } from 'react'
import { FlatList } from 'react-native'
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
                horizontal={true} 
                data={Object.keys(dataDecks)}
                keyExtractor={(item, index) => item}
                renderItem={({ item }) => {
                    const itemObj = dataDecks[item]
                    return <MenuCard title={itemObj.title} questions={itemObj.questions} />
                }}
            />
        )
    }
}

const mapStateToProps = ({ deck: { dataDecks, error } }) => ({
    dataDecks,
    error
})

const mapDispatchToProps = dispatch => ({
    searchDecks: _=> new Promise((resolve, reject) => dispatch({ type: GET_DECKS, payload: { resolve, reject }}))
})

const { func, object, string } = PropTypes

Decks.propTypes = {
    dataDecks: object.isRequired,
    error: string,
    searchDecks: func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)