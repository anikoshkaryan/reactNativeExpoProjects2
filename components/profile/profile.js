import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop, LinearGradient } from "react-native-svg";
import {Linking} from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

import FooterMenu from '../includes/footer_menu';

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
    ScrollView,
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
             active: true,
             unactive: false,
            inactive_auto: [
              {
                id: 1,
                name: "Аренда авто, под залог 1",
                price: 1290,
                address: "Лиговский проспект 11",
                dateCreated: "12:00",
                isWish: false,
                img: require('../../assets/images/cars_img1.png'),
              } ,
              {
                id: 2,
                name: "Аренда авто, под залог 2",
                price: 1500,
                address: "Лиговский проспект 22",
                dateCreated: "13:00",
                isWish: false,
                img: require('../../assets/images/cars_img2.png'),
              } ,
              {
                id: 3,
                name: "Аренда авто, под залог 3",
                price: 2000,
                address: "Лиговский проспект 33",
                dateCreated: "14:00",
                isWish: true,
                img: require('../../assets/images/cars_img3.png'),
              } ,
              {
                id: 4,
                name: "Аренда авто, под залог 44",
                price: 3000,
                address: "Лиговский проспект 44",
                dateCreated: "15:00",
                isWish: false,
                img: require('../../assets/images/cars_img4.png'),
              } ,
            ],
            active_auto: [
                {
                    id: 1,
                    name: "Аренда авто, под залог 1",
                    price: 1290,
                    address: "Лиговский проспект 11",
                    dateCreated: "12:00",
                    isWish: false,
                    img: require('../../assets/images/cars_img1.png'),
                } ,
                {
                    id: 2,
                    name: "Аренда авто, под залог 2",
                    price: 1500,
                    address: "Лиговский проспект 22",
                    dateCreated: "13:00",
                    isWish: false,
                    img: require('../../assets/images/cars_img2.png'),
                } ,
                {
                    id: 3,
                    name: "Аренда авто, под залог 3",
                    price: 2000,
                    address: "Лиговский проспект 33",
                    dateCreated: "14:00",
                    isWish: true,
                    img: require('../../assets/images/cars_img3.png'),
                } ,
                {
                    id: 4,
                    name: "Аренда авто, под залог 44",
                    price: 3000,
                    address: "Лиговский проспект 44",
                    dateCreated: "15:00",
                    isWish: false,
                    img: require('../../assets/images/cars_img4.png'),
                } ,
            ],
        };

    }

    componentDidMount() {

    }


    render() {

        return (
            <SafeAreaView style={styles.container} >
               
               <View style={styles.header}>
                    <TouchableOpacity>
                      <Svg
                            width={20}
                            height={16}
                            viewBox="0 0 20 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <Path
                                d="M10 11H8a8.999 8.999 0 00-7.968 4.81C.011 15.54 0 15.27 0 15 0 9.477 4.477 5 10 5V0l10 8-10 8v-5z"
                                fill="url(#paint0_linear_121_479)"
                            />
                            <Defs>
                                <LinearGradient
                                id="paint0_linear_121_479"
                                x1={0}
                                y1={0}
                                x2={21.4097}
                                y2={2.18467}
                                gradientUnits="userSpaceOnUse"
                                >
                                <Stop stopColor="#34BE7C" />
                                <Stop offset={1} stopColor="#2EB6A5" />
                                </LinearGradient>
                            </Defs>
                     </Svg>
                    </TouchableOpacity>
                    <View style={styles.settings_notifications_btns_wrapper}>
                        <TouchableOpacity>
                          <Svg
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <Path
                                d="M18 15h2v2H0v-2h2V8a8 8 0 1116 0v7zM7 19h6v2H7v-2z"
                                fill="#B8BFC9"
                            />
                         </Svg>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Svg
                                width={20}
                                height={22}
                                viewBox="0 0 20 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <Path
                                    d="M7.954 1.21a9.99 9.99 0 014.091-.002A3.994 3.994 0 0014 4.07a3.993 3.993 0 003.457.261A9.99 9.99 0 0119.5 7.876 3.993 3.993 0 0018 11a3.99 3.99 0 001.502 3.124 10.041 10.041 0 01-2.046 3.543 3.993 3.993 0 00-4.76 1.468 3.993 3.993 0 00-.65 1.653 9.99 9.99 0 01-4.09.004A3.993 3.993 0 006 17.927a3.992 3.992 0 00-3.457-.26A9.99 9.99 0 01.5 14.121 3.993 3.993 0 002 11 3.993 3.993 0 00.498 7.875a10.043 10.043 0 012.046-3.543A3.993 3.993 0 006 4.072a3.993 3.993 0 001.954-2.86V1.21zM10 14a3 3 0 100-6 3 3 0 000 6z"
                                    fill="#B8BFC9"
                                />
                          </Svg>
                        </TouchableOpacity>
                    </View>
               </View>
               <View style={styles.user_img_info_wrapper}>
                     <View style={styles.user_img_parent}>
                         <Image style={styles.user_img}  source={require('../../assets/images/user_img.png')} />  
                     </View>
                     <View style={styles.user_info_main_wrapper}>
                               <Text style={styles.user_info_title}>Дмитрий Антонович</Text>
                               <View style={styles.user_info_phone_info_box}> 
                                    <Text style={styles.user_info_phone_title}>Номер профиля</Text>
                                    <Text style={styles.user_info_phone_number}>38295982</Text>
                               </View>
                     </View>
               </View>
               <View style={styles.user_gmail_phone_address_wrapper_main}>
                    <View style={styles.user_gmail_phone_address_wrapper}>
                    <TouchableOpacity style={styles.user_gmail_phone_address_item} onPress={()=>Linking.openURL(`tel:+7 928 245 15 20`)}>
                        <View style={styles.user_gmail_phone_address_item_icon}>
                            <Svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <Path
                                d="M15.5 11.683v2.947a.833.833 0 01-.775.832c-.364.025-.662.038-.892.038C6.47 15.5.5 9.53.5 2.167c0-.23.012-.528.038-.892A.833.833 0 011.37.5h2.947a.417.417 0 01.415.375c.019.192.036.344.053.46.166 1.156.505 2.28 1.007 3.334a.38.38 0 01-.123.473L3.871 6.427a10.872 10.872 0 005.703 5.703l1.284-1.795a.385.385 0 01.477-.124c1.054.5 2.178.84 3.333 1.004.116.017.269.035.459.053a.417.417 0 01.374.415H15.5z"
                                fill="#818B9B"
                            />
                            </Svg>
                        </View>
                        <Text style={styles.user_gmail_phone_address_item_title}>+7 928 245 15 20</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.user_gmail_phone_address_item} onPress={()=> Linking.openURL(`mailto:mail@gmail.com`)}>
                        <View style={styles.user_gmail_phone_address_item_icon}> 
                          <Svg
                                width={18}
                                height={16}
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <Path
                                    d="M1.5.5h15a.833.833 0 01.833.833v13.334a.833.833 0 01-.833.833h-15a.833.833 0 01-.833-.833V1.333A.833.833 0 011.5.5zm7.55 7.236L3.707 3.198l-1.08 1.27 6.434 5.463 6.317-5.467-1.09-1.26-5.237 4.532z"
                                    fill="#818B9B"
                                />
                         </Svg>
                        </View>
                        <Text style={styles.user_gmail_phone_address_item_title}>mail@gmail.com</Text>
                    </TouchableOpacity>
                    <View style={[styles.user_gmail_phone_address_item, {marginBottom:0}]}>
                        <View style={styles.user_gmail_phone_address_item_icon}>
                          <Svg
                                width={16}
                                height={19}
                                viewBox="0 0 16 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <Path
                                    d="M13.303 13.47L8 18.773 2.697 13.47a7.5 7.5 0 1110.606 0zM8 11.5a3.333 3.333 0 100-6.667A3.333 3.333 0 008 11.5zm0-1.667A1.667 1.667 0 118 6.5a1.667 1.667 0 010 3.333z"
                                    fill="#818B9B"
                                />
                           </Svg>
                        </View>
                        <Text style={styles.user_gmail_phone_address_item_title}>Сочи</Text>
                    </View>

                   </View>
               </View>


               <View style={styles.active_unactive_cars_list_main_wrapper}>
                    <View style={styles.active_unactive_cars_list_titles_wrapper}>
                        <TouchableOpacity onPress={()=>{this.setState({active: true, unactive: false})}}>
                          <Text style={styles.active_unactive_cars_list_title}>Активные</Text>
                          {this.state.active &&

                            <View style={styles.active_style}></View>
                          }

                        </TouchableOpacity>
                         <TouchableOpacity onPress={()=>{ this.setState({active: false, unactive: true}) }}>
                             <Text style={styles.active_unactive_cars_list_title}>Неактивные</Text>
                             {this.state.unactive &&

                               <View style={styles.active_style}></View>
                             }

                         </TouchableOpacity>

                    </View>
                    <ScrollView >
                        {this.state.active &&
                              <View style={styles.active_unactive_cars_lists_second_wrapper}>

                                  {this.state.active_auto.map((car, index) => {
                                      return (

                                          <TouchableOpacity key={car.id} style={styles.car_img_info_main_wrapper}>
                                              <View style={styles.car_img_box}>
                                                  <View style={styles.car_img}>
                                                      <Image style={styles.car_img_child}  source={car.img} />
                                                  </View>

                                              </View>
                                              <View style={styles.car_info_main_wrapper}>
                                                  <Text style={styles.car_info_title}>
                                                      {car.name}
                                                  </Text>
                                                  <Text style={styles.car_info_title2}> {car.price} ₽ </Text>
                                                  <View style={styles.car_info_titles}>
                                                      <Text style={styles.car_info_title3}>{car.address}</Text>
                                                      <Text style={styles.car_info_title3}>{car.dateCreated}</Text>
                                                  </View>
                                              </View>
                                          </TouchableOpacity>



                                      );
                                  })}



                          </View>

                        }

                        {this.state.unactive &&

                            <View style={styles.active_unactive_cars_lists_second_wrapper}>

                                {this.state.inactive_auto.map((car, index) => {
                                    return (

                                        <TouchableOpacity key={car.id} style={styles.car_img_info_main_wrapper}>
                                            <View style={styles.car_img_box}>
                                                <View style={styles.car_img}>
                                                    <Image style={styles.car_img_child}  source={car.img} />
                                                </View>

                                            </View>
                                            <View style={styles.car_info_main_wrapper}>
                                                <Text style={styles.car_info_title}>
                                                    {car.name}
                                                </Text>

                                                <Text style={styles.car_info_title2}> {car.price} ₽ </Text>
                                                <View style={styles.car_info_titles}>
                                                    <Text style={styles.car_info_title3}>
                                                        {car.address}
                                                    </Text>
                                                    <Text style={styles.car_info_title3}>
                                                        {car.dateCreated}
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>



                                    );
                                })}

                            </View>

                         }
                    </ScrollView>
               </View>


                <FooterMenu navigation={this.props.navigation} route_name={this.props.route_name}/>


            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
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
      header: {
          width: "100%",
          flexDirection: 'row',
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 26,
          paddingRight: 26,
          marginBottom: 20,
     },
     settings_notifications_btns_wrapper: {
         width: 88,
         flexDirection: "row",
         alignItems: "center",
          justifyContent: "space-between",
     },
     user_img_parent: {
         marginRight: 25,
     },
     user_img: {
         width: 80,
         height: 80,
         borderRadius: 100,
         overflow: "hidden",
     },
     user_img_info_wrapper: {
       flexDirection:'row',
       alignItems: "center",
       width: "100%",
       paddingLeft: 23,
       paddingRight: 23,
       marginBottom: 30
     },
     user_info_title: {
         fontWeight: "bold",
         fontSize: 18,
         color:'#424A55',
         marginBottom: 5,
     },
     user_info_phone_info_box: {
         flexDirection: "row",
         alignItems: "center",
     },
     user_info_phone_title: {
         fontSize: 14,
         color: "#818B9B",
         marginRight: 15,
     },
     user_info_phone_number: {
         color: "#424A55",
         fontSize: 14,

     },
     user_gmail_phone_address_wrapper_main: {
        width: "100%",
        paddingLeft: 23,
        paddingRight: 23,
     },
     user_gmail_phone_address_wrapper: {
          backgroundColor: "#F0F4F8",
          marginBottom: 30,
          borderRadius: 10,
          width: "100%",
          paddingLeft: 22,
          paddingRight: 22,
          paddingTop: 20,
          paddingBottom: 20,

     },
     user_gmail_phone_address_item: {
         flexDirection: "row",
         alignItems: "center",
         marginBottom: 27,
     },
     user_gmail_phone_address_item_icon: {
          marginRight: 17,
     },
     user_gmail_phone_address_item_title: {
         color: "#424A55",
         fontSize: 14,
     },
     active_unactive_cars_list_main_wrapper: {
         width: "100%",
         flex: 1,
     },
     active_unactive_cars_lists_second_wrapper: {
        paddingLeft: 23,
        paddingRight: 23,
     },
     active_unactive_cars_list_titles_wrapper: {
        marginBottom: 30,
        borderBottomColor: "#F0F3F9",
        borderBottomWidth: 1,
        // borderBottomStyle: "solid",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 67,
        paddingRight: 58,
         paddingBottom: 11,
     },
     active_unactive_cars_list_title: {
         color: "#818B9B",
         fontSize: 14,
        
     },
     active_style: {
        backgroundColor: "#2EB6A5",
        width: 40,
        height: 3,
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        position: "relative",
        top: 13,
         
     },
     
   //   car_img_info_main_wrapper: {
   //
   //    flexDirection: "row",
   //    backgroundColor: "#FFFFFF",
   //    shadowColor: "#304152",
   //  //   shadowOffset: {
   //  //     width: 0,
   //  //     height: 4,
   //  // },
   //  // shadowOpacity: 0.05,
   //  // shadowRadius: 20,
   //
   // elevation: 8,
   // borderRadius: 12,
   // width: "100%",
   // marginBottom: 20,
   // },
   // car_img_box: {
   //  width: 150,
   //  height: 125,
   // },
});