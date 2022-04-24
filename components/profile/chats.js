import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop, LinearGradient } from "react-native-svg";
// import { LinearGradient } from 'expo-linear-gradient';
import FooterMenu from "../includes/footer_menu";


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
            auto: [
              {
                id: 1,
                name: "Аренда авто, под залог 1",
                price: 1290,
                address: "Лиговский проспект 11",
                dateCreated: "12:00",
                isWish: true,
                img: require('../../assets/images/cars_img1.png'),
              } ,
              {
                id: 2,
                name: "Аренда авто, под залог 2",
                price: 1500,
                address: "Лиговский проспект 22",
                dateCreated: "13:00",
                isWish: true,
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
                isWish: true,
                img: require('../../assets/images/cars_img4.png'),
              } ,
            ],
        };

    }

    componentDidMount() {

    }
    
    getAuto = () => {
       return this.state.auto;
    }

    changeWish = (id) => {
       let autos = this.state.auto;
       for (let i = 0; i < autos.length; i++) {
            let auto = autos[i];
            if (auto.id == id) {
                let wish = auto.isWish;
                if (wish === true) {
                     wish = false;
                } else {
                  wish = true;
                }
                autos[i].isWish = wish;
            }
       } 
       this.setState({
        auto: autos,
       })
    }
 
    render() {

        return (
            <SafeAreaView style={styles.container} >
              <View style={styles.header_title_btn}>
                   <View style={styles.search_message_input_btn_main}>
                        <TouchableOpacity>
                            <Svg
                                width={21}
                                height={21}
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                
                              >
                                <Path
                                  d="M16.031 14.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 019 18c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0016 9c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"
                                  fill="#9AA1B4"
                                />
                             </Svg>
                        </TouchableOpacity>
                        <TextInput
                             style={styles.search_message_input}
                             onChangeText={(val) => this.setState({searchMessages:val})}
                             value={this.state.searchMessages}
                             placeholder="Поиск по сообщениям"
                         />
                   </View>
                   <TouchableOpacity>
                        <Svg
                              width={4}
                              height={18}
                              viewBox="0 0 4 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <Path
                                d="M2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7C.9 7 0 7.9 0 9s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                fill="#AABACD"
                              />
                         </Svg>
                   </TouchableOpacity>
              </View>

              <ScrollView style={styles.scrollview}>

                   <TouchableOpacity style={styles.chat_item}>
                        <View>
                           <Image style={styles.chat_item_img}  source={require('../../assets/images/chat_img1.png')} />  
                        </View>
                        <View>
                            <Text style={styles.chat_item_title}>Дмитрий</Text>
                            <View style={styles.chat_item_info_price_auto}>
                                <Text style={styles.chat_item_info1}>Аренда авто, под залог</Text>
                                 <View style={styles.chat_item_line}></View>
                                <Text style={styles.chat_item_price_info}>1 290 ₽ </Text>
                            </View>
                            <Text style={styles.chat_item_info2}>Завтра в 10:00 подъеду</Text>
                        </View>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.chat_item}>
                        <View>
                           <Image style={styles.chat_item_img} source={require('../../assets/images/chat_img2.png')} />  
                        </View>
                        <View >
                            <Text style={styles.chat_item_title}>Александр</Text>
                            <View style={styles.chat_item_info_price_auto}>
                                <Text style={styles.chat_item_info1}>Аренда авто, под залог</Text>
                                <View style={styles.chat_item_line}></View>
                                <Text style={styles.chat_item_price_info}>1 290 ₽ </Text>
                            </View>
                            <Text style={styles.chat_item_info2}>Давайте завтра</Text>
                        </View>
                   </TouchableOpacity>
                
                   <TouchableOpacity style={styles.chat_item}>
                        <View>
                           <Image style={styles.chat_item_img}  source={require('../../assets/images/chat_img3.png')} />  
                        </View>
                        <View>
                            <Text style={styles.chat_item_title}>Антон</Text>
                            <View style={styles.chat_item_info_price_auto}>
                                <Text style={styles.chat_item_info1}>Аренда авто, под залог</Text>
                                <View style={styles.chat_item_line}></View>
                                <Text style={styles.chat_item_price_info}>150  290 ₽</Text>
                            </View>
                            <Text style={styles.chat_item_info2}>Подъезжаю</Text>
                        </View>
                   </TouchableOpacity>
              </ScrollView>
               
               <FooterMenu  navigation={this.props.navigation} route_name={this.props.route_name}/>



            </SafeAreaView>

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
      header_title_btn: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
          width: "100%",
          paddingLeft: 23,
          paddingRight: 23,
      },
      header_title: {
          fontSize: 24,
          color: "#424A55",
          fontWeight: "bold",
      },
      search_message_input_btn_main: {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F0F4F8", 
          borderRadius: 16,
          paddingVertical: 12,
          paddingLeft: 12,
          paddingRight: 64,

      },
      search_message_input: {
          color: "#A2ABC2",
          fontSize: 16,
          marginLeft: 16,
      },
      chat_item: {
         flexDirection: "row", 
         alignItems: "flex-start",
         borderBottomWidth: 1,
         borderBottomColor: "#F0F3F9",
        marginBottom: 15,
        paddingBottom: 15,
      },
      chat_item_img: {
          marginRight: 15,
          width: 55,
          height: 55,
          borderRadius: 100,
          overflow: "hidden",
      },
      chat_item_title: {
          fontWeight: "bold",
          fontSize: 14,
          color: "#424A55",
          marginBottom: 5,
      },
      chat_item_info_price_auto: {
          borderRadius: 8,
          borderColor: "#F0F3F9",
          borderStyle: "solid",
          borderWidth: 1,
          paddingHorizontal: 10,
          paddingVertical: 9,
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 15,
          justifyContent: "space-between",
      },
      chat_item_info1: {
          color: "#818B9B",
          fontSize: 12,
          marginRight: 10,
      },
      chat_item_price_info: {
          color: "#818B9B",
          fontSize: 12,
          borderLeftWidth: 2,
          borderLeftColor: "#CBD3E0",
          borderStyle: "solid",
      },
      chat_item_info2: {
          color: "#424A55",
          fontSize: 12,
      }
  
    });