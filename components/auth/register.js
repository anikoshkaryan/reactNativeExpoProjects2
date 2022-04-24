import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop } from "react-native-svg";
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
            name: null,
            email: null,
            password: null,
            confirmPassword: null,
        };

    }

    componentDidMount() {

    }

    // submitForm = () =>  {
    //     let login_val = this.state.login;
    //     let password_val = this.state.password;
    //     console.log(login_val, password_val);
    //     var re = /\S+@\S+\.\S+/;
        
    //      if ( re.test(login_val) && password_val >= 6) {
    //         alert("You has been logged sucessfully");
    //      }
    // }
    registerForm = () => {
        let name_val = this.state.name;
        let email_val = this.state.email;
        let password_val = this.state.password;
        let confirmPassword_val = this.state.confirmPassword;
        var re = /\S+@\S+\.\S+/;
        // console.log(email_val, name_val, password_val, confirmPassword_val);
        if  ( name_val.length >= 3 && re.test(email_val) && password_val.length >= 6  && confirmPassword_val == password_val) {
            alert("You has been registered sucessfully");
        }
    }

    loginLink = () => {
        this.props.navigation.navigate("Login");
    }
    render() {

        return (
            <SafeAreaView style={styles.container} >
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Регистрация</Text>
                     <View style={styles.input_parent}>
                         <TextInput
                             style={[styles.input]}
                             onChangeText={(val) => this.setState({name:val})}
                             value={this.state.name}
                             placeholder="Имя"
                         />
                     </View>
                    <View style={styles.input_parent}>
                        <TextInput
                            style={[styles.input]}
                            onChangeText={(val) => this.setState({email:val})}
                            value={this.state.email}
                            placeholder="Email"
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
                    <View style={styles.input_parent}>
                        <TextInput
                            style={[styles.input]}
                            onChangeText={(val) => this.setState({confirmPassword:val})}
                            value={this.state.confirmPassword}
                            placeholder="Повторите пароль"
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.registerForm}>
                        <Text style={styles.button_text}>Регистрация</Text>

                    </TouchableOpacity>

                    <View style={styles.register_link_wrapper}>
                        <Text style={styles.yet_not_account_text}>У вас уже есть аккаунт?</Text>
                        <TouchableOpacity onPress={this.loginLink}>
                            <Text style={styles.register_link_text}>Войти</Text>
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