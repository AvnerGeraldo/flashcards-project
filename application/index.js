import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Container from '@styled-components/Container'

//Actions
import { SET_INITIAL_DATA } from '@actions/saga-actions'

//Routes
import Route from '@routes'

class Application extends PureComponent {
  componentDidMount() {
    this.props.dispatch({ type: SET_INITIAL_DATA })    
  }

  render() {
    return (
      <Container>
        <Route />
      </Container>
    )
  }
}

export default connect(null)(Application)