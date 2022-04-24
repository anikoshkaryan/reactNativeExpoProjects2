import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop, LinearGradient } from "react-native-svg";
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
                   <View>
                       <Text style={styles.header_title}>Избранное</Text>
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

                  {this.getAuto().map((car, index) => {
                      return (

                        <TouchableOpacity style={styles.car_img_info_main_wrapper} key={car.id} >
                          <View style={styles.car_img_box}>
                            <View style={styles.car_img}>
                                  <Image style={styles.car_img_child}  source={car.img} />   
                              </View>
                              <TouchableOpacity style={styles.car_img_heart} onPress={() => this.changeWish(car.id)}>

                                    {car.isWish && 
                                    
                                      <Svg  width={18}  height={18}  viewBox="0 0 18 18"  fill="none"  xmlns="http://www.w3.org/2000/svg">
                                        <Path  fillRule="evenodd"  clipRule="evenodd"  d="M11.887 1.876c.473 0 .946.066 1.395.217 2.768.9 3.766 3.938 2.933 6.593a9.546 9.546 0 01-2.257 3.606 28.84 28.84 0 01-4.748 3.72l-.188.114-.195-.121a28.57 28.57 0 01-4.776-3.72 9.7 9.7 0 01-2.259-3.6c-.847-2.654.15-5.692 2.949-6.608a3.39 3.39 0 01.666-.156h.09c.211-.031.42-.045.63-.045h.083c.472.014.93.096 1.373.247h.044c.03.014.053.03.068.044.166.054.322.114.472.196l.285.128c.07.036.146.092.213.141.043.03.08.058.11.076l.037.022c.064.037.131.077.188.12a4.697 4.697 0 012.887-.974zm1.995 5.4a.617.617 0 00.593-.571v-.09a2.475 2.475 0 00-1.583-2.37.6.6 0 00-.757.376c-.105.315.06.66.375.771.48.18.802.654.802 1.178v.023a.644.644 0 00.143.465.629.629 0 00.427.218z"  fill="#FF4141"/>
                                      </Svg>
                                    
                                    }
                                       
                                   {!car.isWish &&
                                     
                                    <Svg  xmlns="http://www.w3.org/2000/svg"  width={18}  height={18}  viewBox="0 0 18 18"  fill="none">
                                        <Path  fillRule="evenodd"  clipRule="evenodd"  d="M11.887 1.876c.473 0 .946.066 1.395.217 2.768.9 3.766 3.938 2.933 6.593a9.546 9.546 0 01-2.257 3.606 28.84 28.84 0 01-4.748 3.72l-.188.114-.195-.121a28.57 28.57 0 01-4.776-3.72 9.7 9.7 0 01-2.259-3.6c-.847-2.654.15-5.692 2.949-6.608a3.39 3.39 0 01.666-.156h.09c.211-.031.42-.045.63-.045h.083c.472.014.93.096 1.373.247h.044c.03.014.053.03.068.044.166.054.322.114.472.196l.285.128c.07.036.146.092.213.141.043.03.08.058.11.076l.037.022c.064.037.131.077.188.12a4.697 4.697 0 012.887-.974zm1.995 5.4a.617.617 0 00.593-.571v-.09a2.475 2.475 0 00-1.583-2.37.6.6 0 00-.757.376c-.105.315.06.66.375.771.48.18.802.654.802 1.178v.023a.644.644 0 00.143.465.629.629 0 00.427.218z"  fill="#fff"  opacity={0.7}/>
                                    </Svg>
                                   
                                   }


                                   


                              </TouchableOpacity>
                          </View>
                          <View style={styles.car_info_main_wrapper}>
                              <Text style={styles.car_info_title} >
                                   {car.name}
                            </Text>
                              <Text style={styles.car_info_title2}> {car.price} ₽ </Text>
                              <View style={styles.car_info_titles}>
                                  <Text style={styles.car_info_title3}> {car.address} </Text>
                                  <Text style={styles.car_info_title3}> {car.dateCreated} </Text>
                              </View>
                          </View>
                        </TouchableOpacity>

                          

                      );
                  })}
                 
                
              </ScrollView>
               
                <FooterMenu navigation={this.props.navigation} route_name={this.props.route_name}/>


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
          marginBottom: 30,
          width: "100%",
          paddingLeft: 23,
          paddingRight: 23,
      },
      header_title: {
          fontSize: 24,
          color: "#424A55",
          fontWeight: "bold",
      }
    });