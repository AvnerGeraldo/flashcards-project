import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'flashcards-project:notification'

export const clearLocalNotifications = _=> AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync())

createNotification = _=> ({
    title: 'Start a quiz!',
    body: "Don't forget to playcards today!",
    ios: {
        sound: true,
    },
    android: {
        sound: true,
        priority: 'medium',
        sticky: false,
        vibrate: true,
    }
})


export const setLocalNotifications = _=> {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((res) => res === null && Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                if (status === 'granted') {
                    //Set when notification occurs
                    let tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(19)
                    tomorrow.setMinutes(0)

                    //Clear all notifications still remain
                    Notifications.cancelAllScheduledNotificationsAsync()

                    //Create a notification
                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(),
                        {
                            time: tomorrow,
                            repeat: 'day',
                        }
                    )

                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        )
            
}