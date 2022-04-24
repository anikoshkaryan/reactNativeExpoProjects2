import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop, LinearGradient } from "react-native-svg";
// import { LinearGradient } from 'expo-linear-gradient';
import {Dropdown} from "react-native-material-dropdown-v2-fixed";


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
    ImageBackground,
    ScrollView, Modal,
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
            searchAuto: null,
            createAdModal: false,
            headlineInput: null,
            headlineInput2: null,
            adDescriptionInput: null,
            adDescriptionInput2: null,
            adDescriptionInput3: null,
            priceInput: null,
            priceInput2: null,
            addressInput: null,
            addressInput2: null,
            carModelsItems: [{
                value: 'BMW',
            }, {
                value: 'FERRARI',
            }, {
                value: 'Bentley',
            }],
        };

    }

    componentDidMount() {
      
      
      console.log(this.props.route_name, 'footer')

    }
    
    getAuto = () => {
       return this.state.auto;
    }

   redirectToCarsList = () => {
       this.props.navigation.navigate("CarsList");
   }

    redirectToFavorites = () => {
       this.props.navigation.navigate("Favorites");
    }

    redirectToChats = () => {
        this.props.navigation.navigate("Chats");
    }

    redirectToProfile = () => {
        this.props.navigation.navigate("Profile");
    }
    render() {

        return (
                
            <View style={styles.footer_nav}>

                      
                      
              <TouchableOpacity onPress={this.redirectToCarsList}>

                  {this.props.route_name == 'CarsList' ?

                      <Svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"

                      >
                          <Path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M.333 10.448C.333 4.862 4.813.333 10.341.333c2.654 0 5.199 1.066 7.076 2.963a10.17 10.17 0 012.93 7.152c0 5.587-4.48 10.115-10.007 10.115-5.526 0-10.007-4.528-10.007-10.115zm19.85 8.149l2.98 2.406h.051c.603.61.603 1.597 0 2.207-.603.61-1.58.61-2.183 0l-2.474-2.835a1.262 1.262 0 010-1.778 1.15 1.15 0 011.625 0z"
                              fill="url(#paint0_linear_121_79)"
                          />
                          <Defs>
                              <LinearGradient
                                  id="paint0_linear_121_79"
                                  x1={0.333252}
                                  y1={0.333496}
                                  x2={25.4043}
                                  y2={2.38011}
                                  gradientUnits="userSpaceOnUse"
                              >
                                  <Stop stopColor="#34BE7C" />
                                  <Stop offset={1} stopColor="#2EB6A5" />
                              </LinearGradient>
                          </Defs>
                      </Svg>
                  : 

                    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <Path  fillRule="evenodd"  clipRule="evenodd"  d="M.333 10.448C.333 4.862 4.813.333 10.341.333c2.654 0 5.199 1.066 7.076 2.963a10.17 10.17 0 012.93 7.152c0 5.587-4.48 10.115-10.007 10.115-5.526 0-10.007-4.528-10.007-10.115zm19.85 8.149l2.98 2.406h.051c.603.61.603 1.597 0 2.207-.603.61-1.58.61-2.183 0l-2.474-2.835a1.262 1.262 0 010-1.778 1.15 1.15 0 011.625 0z"  fill="#D1DAE5"/>
                    </Svg> 
                  
                  }
                
              </TouchableOpacity>
                          
            <TouchableOpacity onPress={this.redirectToFavorites}>

                {this.props.route_name == 'Favorites' ?
                    <Svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"

                    >
                        <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.491.918c.736 0 1.471.104 2.17.338 4.306 1.4 5.858 6.125 4.562 10.255a14.848 14.848 0 01-3.51 5.61 44.868 44.868 0 01-7.387 5.787l-.291.176-.304-.188a44.44 44.44 0 01-7.43-5.786A15.088 15.088 0 01.788 11.51c-1.318-4.13.233-8.855 4.586-10.28A5.273 5.273 0 016.411.989h.14c.328-.048.654-.07.98-.07h.129c.735.022 1.446.15 2.136.385h.069a.407.407 0 01.105.069c.257.082.501.176.735.304l.443.198c.107.057.227.145.331.22.066.048.125.091.17.119.02.01.04.022.059.034.1.058.204.119.292.186A7.307 7.307 0 0116.49.918zm3.104 8.4a.96.96 0 00.921-.888V8.29c.035-1.635-.955-3.115-2.461-3.687a.934.934 0 00-1.179.584.954.954 0 00.584 1.2 1.953 1.953 0 011.248 1.832v.036c-.022.267.058.525.222.723a.978.978 0 00.665.339z"
                            fill="url(#paint0_linear_121_209)"
                        />
                        <Defs>
                            <LinearGradient
                                id="paint0_linear_121_209"
                                x1={0.333008}
                                y1={0.91748}
                                x2={25.3864}
                                y2={3.0703}
                                gradientUnits="userSpaceOnUse"
                            >
                                <Stop stopColor="#34BE7C" />
                                <Stop offset={1} stopColor="#2EB6A5" />
                            </LinearGradient>
                        </Defs>
                    </Svg>
                  :
                    <Svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"

                    >
                        <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.491.918c.736 0 1.471.104 2.17.338 4.306 1.4 5.858 6.125 4.562 10.255a14.848 14.848 0 01-3.51 5.61 44.868 44.868 0 01-7.387 5.787l-.291.176-.304-.188a44.44 44.44 0 01-7.43-5.786A15.088 15.088 0 01.788 11.51c-1.318-4.13.233-8.855 4.586-10.28A5.273 5.273 0 016.411.989h.14c.328-.048.654-.07.98-.07h.129c.735.022 1.446.15 2.136.385h.069a.407.407 0 01.105.069c.257.082.501.176.735.304l.443.198c.107.057.227.145.331.22.066.048.125.091.17.119.02.01.04.022.059.034.1.058.204.119.292.186A7.307 7.307 0 0116.49.918zm3.104 8.4a.96.96 0 00.921-.888V8.29c.035-1.635-.955-3.115-2.461-3.687a.934.934 0 00-1.179.584.954.954 0 00.584 1.2 1.953 1.953 0 011.248 1.832v.036c-.022.267.058.525.222.723a.978.978 0 00.665.339z"
                            fill="#D1DAE5"
                        />
                    </Svg>
                }
                
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {this.setState({createAdModal:true})}} style={styles.plus_btn}>
                <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <Path
                        d="M14.417 8v6.416H8a1.583 1.583 0 000 3.167h6.417V24a1.583 1.583 0 103.166 0v-6.417H24a1.583 1.583 0 000-3.166h-6.417V8a1.583 1.583 0 00-3.166 0z"
                        fill="#fff"
                        stroke="#fff"
                        strokeWidth={0.5}
                      />
                </Svg>
            </TouchableOpacity>


                <Modal animationType="slide"
                       transparent={true}
                       visible={this.state.createAdModal}
                       onRequestClose={() => {
                           Alert.alert('Modal has been closed.');

                       }}>
                    <View style={styles.create_an_ad_modal_wrapper}>
                        <View style={styles.create_an_ad_modal_title_close_btn_wrapper}>
                            <Text style={styles.create_an_ad_modal_title}>Создание объявления</Text>
                            <TouchableOpacity style={styles.create_an_ad_modal_close_btn} onPress={()=>{this.setState({createAdModal: false})}}>
                                <Svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"

                                >
                                    <Path
                                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"
                                        fill="#9AA1B4"
                                    />
                                </Svg>
                            </TouchableOpacity>
                        </View>
                       <ScrollView style={styles.scrollView_box3}>

                        <View style={styles.create_an_ad_modal_first_inputs_wrapper}>
                            <View style={styles.create_an_ad_modal_first_input}>
                                <TextInput
                                    style={styles.create_an_ad_modal_first_input_field}
                                    onChangeText={(val) => this.setState({headlineInput2:val})}
                                    value={this.state.headlineInput2}
                                    placeholder="Заголовок объявления"
                                    keyboardType="text"
                                    placeholderTextColor="#8B94A3"
                                />
                            </View>
                            <View style={styles.create_an_ad_modal_first_input}>
                                <TextInput
                                    style={styles.create_an_ad_modal_first_input_field}
                                    onChangeText={(val) => this.setState({adDescriptionInput:val})}
                                    value={this.state.adDescriptionInput}
                                    placeholder="Описание объявления"
                                    keyboardType="text"
                                    placeholderTextColor="#8B94A3"
                                />
                            </View>
                            <View style={styles.create_an_ad_modal_first_input}>
                                <TextInput
                                    style={styles.create_an_ad_modal_first_input_field}
                                    onChangeText={(val) => this.setState({priceInput:val})}
                                    value={this.state.priceInput}
                                    placeholder="Стоимость"
                                    keyboardType="text"
                                    placeholderTextColor="#8B94A3"
                                />
                            </View>
                            <View style={[styles.create_an_ad_modal_first_input, {marginBottom:0}]}>
                                <TextInput
                                    style={styles.create_an_ad_modal_first_input_field}
                                    onChangeText={(val) => this.setState({addressInput:val})}
                                    value={this.state.addressInput}
                                    placeholder="Адрес"
                                    keyboardType="text"
                                    placeholderTextColor="#8B94A3"
                                />
                            </View>
                            <View style={styles.create_an_ad_modal_car_model_dropdown}>
                                <Dropdown
                                    // icon='chevron-down'
                                    icon={() => {
                                        return (
                                            <Svg style={styles.icon_dropdown}
                                                width={10}
                                                height={6}
                                                viewBox="0 0 10 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"

                                            >
                                                <Path
                                                    d="M5 3.879L8.713.167l1.06 1.06L5 6 .227 1.227l1.06-1.06L5 3.879z"
                                                    fill="#8B94A3"
                                                />
                                            </Svg>
                                        )
                                    }}

                                    // iconColor='#E1E1E1'
                                    label='Категория'
                                    data={this.state.carModelsItems}
                                    style={styles.car_models_dropdown_menu}
                                    underlineColor='transparent'
                                    baseColor="transparent"


                                />
                            </View>
                            <View style={styles.create_an_ad_modal_first_input}>
                                <TextInput
                                    style={styles.create_an_ad_modal_first_input_field}
                                    onChangeText={(val) => this.setState({adDescriptionInput2:val})}
                                    value={this.state.adDescriptionInput2}
                                    placeholder="Описание объявления"
                                    keyboardType="text"
                                    placeholderTextColor="#8B94A3"
                                />
                            </View>
                        </View>
                        <Text style={styles.create_an_ad_modal_second_inputs_characteristics_title}>Характеристики</Text>
                        <View style={styles.create_an_ad_modal_second_inputs_characteristics_wrapper}>

                            <View style={styles.create_an_ad_modal_first_input}>
                                <TextInput
                                    style={styles.create_an_ad_modal_first_input_field}
                                    onChangeText={(val) => this.setState({headlineInput:val})}
                                    value={this.state.headlineInput}
                                    placeholder="Заголовок объявления"
                                    keyboardType="text"
                                    placeholderTextColor="#8B94A3"
                                />
                            </View>
                            <View style={styles.create_an_ad_modal_first_input}>
                                <TextInput
                                    style={styles.create_an_ad_modal_first_input_field}
                                    onChangeText={(val) => this.setState({adDescriptionInput3:val})}
                                    value={this.state.adDescriptionInput3}
                                    placeholder="Описание объявления"
                                    keyboardType="text"
                                    placeholderTextColor="#8B94A3"
                                />
                            </View>
                            <View style={styles.create_an_ad_modal_first_input}>
                                <TextInput
                                    style={styles.create_an_ad_modal_first_input_field}
                                    onChangeText={(val) => this.setState({priceInput2:val})}
                                    value={this.state.priceInput2}
                                    placeholder="Стоимость"
                                    keyboardType="text"
                                    placeholderTextColor="#8B94A3"
                                />
                            </View>
                            <View style={styles.create_an_ad_modal_first_input}>
                                <TextInput
                                    style={styles.create_an_ad_modal_first_input_field}
                                    onChangeText={(val) => this.setState({addressInput2:val})}
                                    value={this.state.addressInput2}
                                    placeholder="Адрес"
                                    keyboardType="text"
                                    placeholderTextColor="#8B94A3"
                                />
                            </View>

                        </View>
                        <TouchableOpacity style={styles.place_an_ad_btn}>
                            <Text style={styles.place_an_ad_btn_title}>Разместить объявление</Text>

                        </TouchableOpacity>
                    </ScrollView>
            </View>
                </Modal>


                <TouchableOpacity onPress={this.redirectToChats}>
              {this.props.route_name == "Chats" ?

                  <Svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"

                  >
                      <Path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M.333 12.018C.333 5.872 5.245.333 12.023.333c6.627 0 11.644 5.434 11.644 11.65 0 7.209-5.88 11.684-11.667 11.684-1.913 0-4.037-.514-5.74-1.52-.595-.361-1.096-.63-1.738-.42l-2.357.701c-.595.187-1.131-.28-.957-.911L1.99 18.9c.129-.362.105-.748-.081-1.052C.905 16.002.333 13.981.333 12.018zm10.15 0c0 .83.665 1.495 1.494 1.507.828 0 1.493-.678 1.493-1.496a1.49 1.49 0 00-1.493-1.495 1.487 1.487 0 00-1.494 1.484zm5.379.011c0 .818.665 1.496 1.493 1.496.828 0 1.494-.678 1.494-1.496a1.49 1.49 0 00-1.494-1.495 1.49 1.49 0 00-1.493 1.495zm-9.264 1.496a1.505 1.505 0 01-1.493-1.496c0-.83.665-1.495 1.493-1.495a1.49 1.49 0 011.494 1.495c0 .818-.665 1.484-1.494 1.496z"
                          fill="url(#paint0_linear_121_253)"
                      />
                      <Defs>
                          <LinearGradient
                              id="paint0_linear_121_253"
                              x1={0.333496}
                              y1={0.333496}
                              x2={25.4045}
                              y2={2.38011}
                              gradientUnits="userSpaceOnUse"
                          >
                              <Stop stopColor="#34BE7C" />
                              <Stop offset={1} stopColor="#2EB6A5" />
                          </LinearGradient>
                      </Defs>
                  </Svg>
                  :

                  <Svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"

                  >
                      <Path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M.333 12.018C.333 5.872 5.245.333 12.023.333c6.627 0 11.644 5.434 11.644 11.65 0 7.209-5.88 11.684-11.667 11.684-1.913 0-4.037-.514-5.74-1.52-.595-.361-1.096-.63-1.738-.42l-2.357.701c-.595.187-1.131-.28-.957-.911L1.99 18.9c.129-.362.105-.748-.081-1.052C.905 16.002.333 13.981.333 12.018zm10.15 0c0 .83.665 1.495 1.494 1.507.828 0 1.493-.678 1.493-1.496a1.49 1.49 0 00-1.493-1.495 1.487 1.487 0 00-1.494 1.484zm5.379.011c0 .818.665 1.496 1.493 1.496.828 0 1.494-.678 1.494-1.496a1.49 1.49 0 00-1.494-1.495 1.49 1.49 0 00-1.493 1.495zm-9.264 1.496a1.505 1.505 0 01-1.493-1.496c0-.83.665-1.495 1.493-1.495a1.49 1.49 0 011.494 1.495c0 .818-.665 1.484-1.494 1.496z"
                          fill="#D1DAE5"
                      />
                  </Svg>
              }
                        
            </TouchableOpacity>

               

            <TouchableOpacity onPress={this.redirectToProfile}>

              {this.props.route_name == "Profile" ?

                  <Svg
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"

                  >
                      <Path
                          d="M14 2.333a5.547 5.547 0 00-5.542 5.542c0 2.998 2.345 5.425 5.402 5.53a.939.939 0 01.257 0h.081a5.528 5.528 0 005.344-5.53A5.547 5.547 0 0014 2.333z"
                          fill="url(#paint0_linear_121_335)"
                      />
                      <Path
                          d="M19.927 16.508c-3.255-2.17-8.564-2.17-11.842 0-1.482.992-2.298 2.334-2.298 3.769s.816 2.765 2.286 3.745c1.634 1.096 3.78 1.645 5.927 1.645s4.293-.549 5.927-1.645c1.47-.992 2.286-2.322 2.286-3.769-.011-1.435-.816-2.765-2.286-3.745z"
                          fill="url(#paint1_linear_121_335)"
                      />
                      <Defs>
                          <LinearGradient
                              id="paint0_linear_121_335"
                              x1={8.45825}
                              y1={2.3335}
                              x2={20.3668}
                              y2={3.30665}
                              gradientUnits="userSpaceOnUse"
                          >
                              <Stop stopColor="#34BE7C" />
                              <Stop offset={1} stopColor="#2EB6A5" />
                          </LinearGradient>
                          <LinearGradient
                              id="paint1_linear_121_335"
                              x1={5.78662}
                              y1={14.8809}
                              x2={23.2838}
                              y2={17.0562}
                              gradientUnits="userSpaceOnUse"
                          >
                              <Stop stopColor="#34BE7C" />
                              <Stop offset={1} stopColor="#2EB6A5" />
                          </LinearGradient>
                      </Defs>
                  </Svg>
                  :

                  <Svg
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"

                  >
                      <Path
                          d="M14 2.333a5.547 5.547 0 00-5.542 5.542c0 2.998 2.345 5.425 5.402 5.53a.939.939 0 01.257 0h.081a5.528 5.528 0 005.344-5.53A5.547 5.547 0 0014 2.333zM19.927 16.508c-3.255-2.17-8.564-2.17-11.842 0-1.482.992-2.298 2.334-2.298 3.769s.816 2.765 2.286 3.745c1.634 1.096 3.78 1.645 5.927 1.645s4.293-.549 5.927-1.645c1.47-.992 2.286-2.322 2.286-3.769-.011-1.435-.816-2.765-2.286-3.745z"
                          fill="#D1DAE6"
                      />
                  </Svg>
              }
                           
            </TouchableOpacity>
                    
                     
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        paddingTop: 30,

    },
 
    search_btns_input_second_main_wrapper: {
        width: "100%",
       paddingLeft: 23,
       paddingRight: 23,
        marginBottom: 30,
    },
    
    search_btns_input_main_wrapper: {
         width: "100%",
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 16,
        backgroundColor: "#F0F4F8",
       
        height:44,
       paddingTop: 12,
       paddingBottom: 12,
       paddingLeft: 12, 
       paddingRight: 15,
      
    },
   
    search_btn_input: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        

    },
    search_btn: {
        marginRight: 17,
    }, 
    filter_btn: {
        borderLeftWidth: 2,
        borderLeftColor: "#DAE1EC",
        borderStyle: "solid",
        paddingLeft: 17,
    },

    search_input: {
       color: "#B5BBCB",
       fontSize: 16,
    },

    footer_nav: {

        width: "100%",
        flexDirection: "row",
        position: "relative",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffffe6",
        shadowColor: "#304152",
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        
        elevation: 8,
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 41,
        paddingRight:44,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        height: 60,
    },
    plus_btn: {
        width: 56,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#30B999",
        backgroundColor: "#2EB6A5",
        position: "relative",
        top: -30,
        borderRadius: 100,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 30,
        
        elevation: 8,
    },

    btn_box: {
        width: 88,
        flexDirection: "row", 
        justifyContent: "space-between",
    },
  
     car_img_info_main_wrapper: {
     
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        shadowColor: "#304152",
        shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.05,
      shadowRadius: 20,
      
     elevation: 8,
     borderRadius: 12,
     width: "100%",
     marginBottom: 20,
     },

     car_img: {
       width: 150,
       height: 125,
       position: "relative",
     },

     car_img_child: {
       width: 150,
       height: 125,
     },

     car_img_heart: {
        position: "absolute",
        zIndex: 1,
        width: 28,
        height: 28,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        opacity: 0.4,
        bottom: 10,
        right: 10,
     },
      car_info_main_wrapper: {
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 16,
        flex: 1,
      },

      car_info_title: {
        color: "#424A55",
        fontWeight: "bold", 
        fontSize: 14,
        marginBottom: 10,
        width: "100%",
        
      },
      car_info_title2: {
         color: "#424A55",
         fontSize: 12,
         marginBottom: 15,
      },
      car_info_title3: {
        color: "#8B94A3",
        fontSize: 10,
        
      },
      scrollview: {
         width: "100%",
         flex: 1,
         paddingLeft: 23,
         paddingRight: 23,
      },
      car_img_box: {
         width: 150,
         height: 125,
      },
    create_an_ad_modal_wrapper: {
        backgroundColor: "#ffffff",
        borderRadius: 16,
        paddingTop: 40,
        paddingBottom: 10,
        paddingLeft: 23,
        paddingRight: 23,
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 9,

    },
    create_an_ad_modal_title_close_btn_wrapper: {
       flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 23,
        paddingTop: 10,
    },
    create_an_ad_modal_title: {
      color: "#424A55",
      fontWeight: "bold",
      fontSize: 18,
    },
     create_an_ad_modal_first_input: {
        borderBottomColor: "#a2abc259",
        borderBottomWidth: 1,
       marginBottom: 17,
        width: "100%",
    },
    create_an_ad_modal_first_input_field: {
      paddingBottom: 17,
        color: "#8B94A3",
        fontSize: 14,
    },
    create_an_ad_modal_first_inputs_wrapper: {
        width: "100%",
        paddingTop: 15,
        paddingHorizontal: 17,
        marginBottom: 20,
        backgroundColor: "#F0F4F8",
        borderRadius: 10,
    },
    car_models_dropdown_menu: {
        backgroundColor: "transparent",
        paddingHorizontal: 0,
        height: 60,
         justifyContent: "flex-start",
        color: "#8B94A3",
        fontSize: 14,
    },
    create_an_ad_modal_car_model_dropdown: {
        borderBottomColor: "#a2abc259",
        borderBottomWidth: 1,
        marginBottom: 17,
        width: "100%",
    },
    create_an_ad_modal_second_inputs_characteristics_wrapper: {
        width: "100%",
        paddingTop: 15,
        paddingHorizontal: 17,
        marginBottom: 40,
        backgroundColor: "#F0F4F8",
        borderRadius: 10,
    },
    create_an_ad_modal_second_inputs_characteristics_title: {
        color: "#424A55",
        fontSize: 14,
        marginBottom: 10,
    },
    place_an_ad_btn: {
        backgroundColor: "#2EB6A5",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 17,
        width: "100%",
    },

    place_an_ad_btn_title: {
      color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
    icon_dropdown: {
        position: "absolute",
        right: -17,

    },
    scrollView_box3: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
});