import React, { Component } from 'react';
// import Svg, { Path, Rect, Circle, Defs, Stop } from "react-native-svg";
// import { LinearGradient } from 'expo-linear-gradient';

import {
    Text,
    Alert,
    Button,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    ActivityIndicator,
    ImageBackground
} from 'react-native';

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: null,
            password: null,

        };

    }

    componentDidMount() {

    }

    submitForm = () =>  {
        // let login_val = this.state.login;
        // let password_val = this.state.password;
        // console.log(login_val, password_val);
        // var re = /\S+@\S+\.\S+/;
        //
        //  if ( re.test(login_val) && password_val >= 6) {
        //     alert("You has been logged sucessfully");
        //  }
        this.redirectToDashboard();
    }

    registerLink = () => {
        console.log(this.props);

        this.props.navigation.navigate("Register");
    }

   redirectToDashboard = () => {
       this.props.navigation.navigate("CarsList");
   }

    render() {

        return (
            <SafeAreaView style={styles.container} >
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Вход или регистрация</Text>
                     <View style={styles.input_parent}>
                         <TextInput
                             style={[styles.input]}
                             onChangeText={(val) => this.setState({login:val})}
                             value={this.state.login}
                             placeholder="Логин"
                         />
                     </View>
                    <View style={styles.input_parent}>
                        <TextInput
                            style={[styles.input]}
                            onChangeText={(val) => this.setState({password:val})}
                            value={this.state.password}
                            placeholder="Пароль"
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.submitForm}>
                        <Text style={styles.button_text}>Войти</Text>

                    </TouchableOpacity>

                    <View style={styles.register_link_wrapper}>
                        <Text style={styles.yet_not_account_text}>Еще нет аккаунта?</Text>
                        <TouchableOpacity onPress={this.registerLink}>
                            <Text style={styles.register_link_text}>Зарегистрироваться</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                



            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,

    },

    wrapper: {
        width: '90%',

    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#424A55',
        textAlign: 'center',
        marginBottom: 40,
    },
    input_parent: {
        // width: '100%',
        marginBottom: 15,
    },
    input: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 17,
        backgroundColor: '#F0F4F8',
        borderRadius: 10,
        fontSize: 14,
        color: '#8B94A3',
    },
    button: {
        width: '100%',
        backgroundColor: '#2EB6A5',
        borderRadius: 10,
        paddingVertical: 17,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 62,
    },
    button_text: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    register_link_wrapper: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    yet_not_account_text: {
        fontSize: 14,
        marginBottom: 12,
        color: '#8B94A3',

    },
    register_link_text: {
        color: "#2EB6A5",
        fontSize: 14,
        fontWeight: "bold",
    }
});