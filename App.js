import React, { Component } from 'react';
import { Provider } from 'react-redux'

//Store
import store from '@application/store'

//Components
import Application from '@application'

//Notifications
import { setLocalNotifications } from '@utils/notifications'

class App extends Component {
    componentDidMount() {
        setLocalNotifications()
    }

    render() {
        return (
            <Provider store={store}>
              <Application />
            </Provider>
        )
    }
}

export default App