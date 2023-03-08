import Toast from 'react-native-toast-message';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

const getFcmToken = async() => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log("Old FCM token", fcmToken);
    if(!fcmToken){
        try{
            const fcmToken = await messaging().getToken();
            if(fcmToken){
                console.log("New FCM:", fcmToken);
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        }catch(error){
            console.log(error);
        }
    }
}
function showToast(){
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
}
export const NotificationServices = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
          console.log(
            'App opened through notification',
            remoteMessage.notification,
          );
        });
//        //foreground Message Handling
//        messaging().onMessage(async remoteMessage => {
//            console.log('Notification in foreground', remoteMessage);
//        });
        messaging()
              .getInitialNotification()
              .then(remoteMessage => {
                if (remoteMessage) {
                  console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                  );
                }
              });
}