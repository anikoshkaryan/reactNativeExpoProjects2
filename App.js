import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


import LoginComponent from './components/auth/login';
import RegisterComponent from './components/auth/register';
import CarsListComponent from './components/profile/cars_list';
import FavoritesComponent from './components/profile/favorites';
import ChatsComponent from './components/profile/chats';
import ProfileComponent from './components/profile/profile';
import CardComponent from  './components/profile/card';



function LoginScreen({ navigation }) {
  return (
      <LoginComponent navigation={navigation}  />
  );
}


function RegisterScreen({ navigation }) {
  return (
      <RegisterComponent navigation={navigation}  />
  );
}


function CarsListScreen ({navigation}) {
  return (
      <CarsListComponent route_name='CarsList'  navigation={navigation} />
  );
}



function FavoritesScreen ({navigation}) {
  return (
      <FavoritesComponent route_name="Favorites" navigation={navigation} />
  );
}

function ChatsScreen ({navigation}) {
  return (
      <ChatsComponent route_name="Chats" navigation={navigation} />
  );
}

function ProfileScreen ({navigation}) {
  return (
      <ProfileComponent route_name ="Profile" navigation={navigation} />
  );
}


function CardScreen ({navigation}) {
  return (
      <CardComponent route_name="Card" navigation={navigation} />
  );
}

export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
              headerShown: false
            }}

        >


          <Stack.Screen name="Login" component={LoginScreen}
                        options={({route}) => ({
                          tabBarButton: () => null,
                          tabBarStyle: {display: 'none'},
                        })}
          />

          <Stack.Screen name="Register" component={RegisterScreen}
                        options={({route}) => ({
                          tabBarButton: () => null,
                          tabBarStyle: {display: 'none'},
                        })}
          />
          <Stack.Screen name="CarsList" component={CarsListScreen}
                        options={({route}) => ({
                          tabBarButton: () => null,
                          tabBarStyle: {display: 'none'},
                        })}
          />
          <Stack.Screen name="Favorites" component={FavoritesScreen}
                        options={({route}) => ({
                          tabBarButton: () => null,
                          tabBarStyle: {display: 'none'},
                        })}
          />

          <Stack.Screen name="Chats" component={ChatsScreen}
                        options={({route}) => ({
                          tabBarButton: () => null,
                          tabBarStyle: {display: 'none'},
                        })}
          />
          <Stack.Screen name="Profile" component={ProfileScreen}
                        options={({route}) => ({
                          tabBarButton: () => null,
                          tabBarStyle: {display: 'none'},
                        })}
          />

          <Stack.Screen name="Card" component={CardScreen}
                        options={({route}) => ({
                          tabBarButton: () => null,
                          tabBarStyle: {display: 'none'},
                        })}
          />


        </Stack.Navigator>



      </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },



});