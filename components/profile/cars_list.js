import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop, LinearGradient } from "react-native-svg";
// import { LinearGradient } from 'expo-linear-gradient';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import FooterMenu from "../includes/footer_menu";
import RangeSlider, { Slider } from 'react-native-range-slider-expo';

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
    Modal,
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
            showFilter: false,
            categoriesItems: [{
                 value: 'BMW',
             }, {
                 value: 'FERRARI',
             }, {
                 value: 'Bentley',
             }],
            citiesItems: [{
                value: 'Moscow',
            }, {
                value: 'Sankt Petersburg',
            }, {
                value: 'Sochi',
            }],
            sort_by_default: true,
            sort_by_date: false,
            sort_by_cheaper: false,
            sort_by_expensive: false,
            cityInput: null,
            streetInput: null,
            priceInput: null,
            priceInput2: null,
            setFromValue: 1,
            setToValue: 5,
            fromValue: 0,
            toValue: 100,
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

    redirectToCard = () => {
        this.props.navigation.navigate("Card");
    }

    render() {

        return (
            <SafeAreaView style={styles.container} >

                <Modal animationType="slide"
                       transparent={true}
                       visible={this.state.showFilter}
                       onRequestClose={() => {
                           Alert.alert('Modal has been closed.');

                       }}>
                      <View style={styles.filter_modal_parent}>
                           <View style={styles.filter_modal_title_close_btn_wrapper}>
                               <Text style={styles.filter_modal_title}>Фильтры</Text>
                               <TouchableOpacity style={styles.filter_modal_close_btn} onPress={()=>{this.setState({showFilter: false})}}>
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
                          <ScrollView style={styles.scrollView_second_box}>
                              <View style={styles.dropdown}>
                              <Dropdown
                                  // icon='chevron-down'
                                  icon={() => {
                                      return (
                                          <Svg
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
                                  data={this.state.categoriesItems}
                                  style={styles.autos_categories_dropdown_menu}
                                  underlineColor='transparent'
                                  baseColor="transparent"


                              />
                              </View>
                              <View style={styles.address_info_inputs_range_main_wrapper}>
                                 <View style={styles.city_dropdown_wrapper}>
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
                                         label='Город'
                                         data={this.state.citiesItems}
                                         style={styles.cities_dropdown_menu}
                                         underlineColor='transparent'
                                         baseColor="transparent"


                                     />
                                 </View>
                                  <View style={styles.street_input_wrapper}>
                                      <TextInput
                                          style={styles.street_input}
                                          onChangeText={(val) => this.setState({streetInput:val})}
                                          value={this.state.streetInput}
                                          placeholder="Улица"
                                          keyboardType="text"
                                          placeholderTextColor="#8B94A3"
                                      />
                                  </View>
                                  <View style={styles.range_slider_title_wrapper}>

                                      <Text style={styles.range_slider_title}>Радиус поиска</Text>
                                      <Slider min={0} max={100}
                                              valueOnChange={value => this.setState({
                                                  fromValue:value
                                              })}
                                              knobColor="#2EB6A5"

                                              styleSize='small'
                                              showRangeLabels ={false}
                                              showValueLabels ={false}
                                              valueLabelsBackgroundColor='black'
                                              inRangeBarColor='#CCD4E2'
                                              outOfRangeBarColor='#34BE7E'
                                              style={styles.range_slider_box}
                                      />
                                      <Text> {this.state.fromValue} км</Text>
                                  </View>
                              </View>
                               <View style={styles.price_inputs_wrapper}>
                                    <View style={styles.price_from_input_wrapper}>
                                        <TextInput
                                            style={styles.price_from_input}
                                            onChangeText={(val) => this.setState({priceInput:val})}
                                            value={this.state.priceInput}
                                            placeholder="Цена от"
                                            keyboardType="text"
                                            placeholderTextColor="#8B94A3"
                                        />
                                    </View>
                                   <View style={styles.price_to_input_wrapper}>
                                       <TextInput
                                           style={styles.price_to_input}
                                           onChangeText={(val) => this.setState({priceInput2:val})}
                                           value={this.state.priceInput2}
                                           placeholder="Цена до"
                                           keyboardType="text"
                                           placeholderTextColor="#8B94A3"
                                       />
                                   </View>
                               </View>
                            <View style={styles.sort_radio_inputs_wrapper}>
                               <Text style={styles.sort_radio_inputs_title}>Сортировать</Text>
                                <View style={styles.sort_radio_input}>
                                    <TouchableOpacity
                                        style={[styles.inputRadio, this.state.sort_by_default ? styles.activeInputRadioBorder : {}]}
                                        onPress={()=> {
                                            this.setState({
                                                sort_by_default: true,
                                                sort_by_date: false,
                                                sort_by_cheaper: false,
                                                sort_by_expensive: false,
                                            })
                                        }}>
                                        {this.state.sort_by_default &&
                                        <View style={styles.activeRadioRound}>

                                        </View>
                                        }
                                    </TouchableOpacity>
                                    <Text style={styles.sort_radio_input_title}>По умолчанию</Text>

                                </View>
                                <View style={styles.sort_radio_input}>
                                    <TouchableOpacity
                                        style={[styles.inputRadio, this.state.sort_by_date ? styles.activeInputRadioBorder : {}]}
                                        onPress={()=> {
                                            this.setState({
                                                sort_by_default: false,
                                                sort_by_date: true,
                                                sort_by_cheaper: false,
                                                sort_by_expensive: false,
                                            })
                                        }}>
                                        {this.state.sort_by_date &&
                                        <View style={styles.activeRadioRound}>

                                        </View>
                                        }
                                    </TouchableOpacity>
                                    <Text style={styles.sort_radio_input_title}>По дате</Text>

                                </View>
                                <View style={styles.sort_radio_input}>
                                    <TouchableOpacity
                                        style={[styles.inputRadio, this.state.sort_by_cheaper ? styles.activeInputRadioBorder : {}]}
                                        onPress={()=> {
                                            this.setState({
                                                sort_by_default: false,
                                                sort_by_date: false,
                                                sort_by_cheaper: true,
                                                sort_by_expensive: false,
                                            })
                                        }}>
                                        {this.state.sort_by_cheaper &&
                                        <View style={styles.activeRadioRound}>

                                        </View>
                                        }
                                    </TouchableOpacity>
                                    <Text style={styles.sort_radio_input_title}>Дешевле</Text>

                                </View>
                                <View style={styles.sort_radio_input}>
                                    <TouchableOpacity
                                        style={[styles.inputRadio, this.state.sort_by_expensive ? styles.activeInputRadioBorder : {}]}
                                        onPress={()=> {
                                            this.setState({
                                                sort_by_default: false,
                                                sort_by_date: false,
                                                sort_by_cheaper: false,
                                                sort_by_expensive: true,
                                            })
                                        }}>
                                        {this.state.sort_by_expensive &&
                                        <View style={styles.activeRadioRound}>

                                        </View>
                                        }
                                    </TouchableOpacity>
                                    <Text style={styles.sort_radio_input_title}>
                                        Дороже
                                    </Text>

                                </View>
                            </View>
                          <TouchableOpacity style={styles.show_more_listings_btn}>
                                 <Text style={styles.show_more_listings_btn_text}>Показать 120 объявлени</Text>
                              </TouchableOpacity>

                      </ScrollView>



                      </View>
                </Modal>

              <View style={styles.search_btns_input_second_main_wrapper}>
                  <View style={styles.search_btns_input_main_wrapper}>
                    <View style={styles.search_btn_input}>
                     <TouchableOpacity style={styles.search_btn}>
                       <Svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" width={21} height={21} >
                             <Path d="M16.031 14.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 019 18c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0016 9c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"   fill="#9AA1B4"/>
                       </Svg>
                     </TouchableOpacity>
                     <TextInput
                             style={styles.search_input}
                             onChangeText={(val) => this.setState({searchAuto:val})}
                             value={this.state.searchAuto}
                             placeholder="Поиск авто"
                         />
                   </View>
                     <View>
                         <TouchableOpacity onPress={() => {this.setState({showFilter:true})}} style={styles.filter_btn}>
                               <Svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={18}
                                    viewBox="0 0 20 18"
                                    fill="none"
                                  >
                                    <Path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M6.878 3.379c0 1.866-1.54 3.38-3.44 3.38C1.54 6.758 0 5.244 0 3.378 0 1.513 1.54 0 3.439 0c1.9 0 3.439 1.513 3.439 3.379zm11.615-1.48c.832 0 1.507.663 1.507 1.48s-.675 1.48-1.507 1.48h-6.575c-.832 0-1.508-.663-1.508-1.48s.676-1.48 1.508-1.48h6.575zM1.508 12.957h6.575c.833 0 1.508.664 1.508 1.481 0 .817-.675 1.482-1.508 1.482H1.508C.676 15.92 0 15.256 0 14.439s.676-1.481 1.508-1.481zm15.053 4.82c1.9 0 3.439-1.513 3.439-3.379s-1.539-3.38-3.439-3.38c-1.899 0-3.439 1.514-3.439 3.38 0 1.866 1.54 3.379 3.44 3.379z"
                                      fill="url(#paint0_linear_121_7)"
                                    />
                                    <Defs>
                                      <LinearGradient
                                        id="paint0_linear_121_7"
                                        x1={0}
                                        y1={0}
                                        x2={21.4517}
                                        y2={1.97006}
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <Stop stopColor="#34BE7C" />
                                        <Stop offset={1} stopColor="#2EB6A5" />
                                      </LinearGradient>
                                    </Defs>
                               </Svg>
                         </TouchableOpacity>
                     </View>
                 </View>
              </View>

              <ScrollView style={styles.scrollview_box}>

                  {this.getAuto().map((car, index) => {
                      return (

                        <TouchableOpacity style={styles.car_img_info_main_wrapper} key={car.id} onPress={this.redirectToCard}>
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

              <FooterMenu navigation={this.props.navigation} route_name={this.props.route_name} />

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
      scrollview_box: {
         width: "100%",
         flex: 1,
         paddingLeft: 23,
         paddingRight: 23,
      },
      car_img_box: {
         width: 150,
         height: 125,
      },
    filter_modal_parent: {
       backgroundColor: "#FFFFFF",
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
    filter_modal_title_close_btn_wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 35,
    },
    filter_modal_title: {
        color: "#424A55",
        fontWeight: "bold",
        fontSize: 18,
    },

     inputRadio: {
       borderColor: "#8B94A3",
         borderWidth: 1,
         width: 20,
         height: 20,
         borderRadius: 100,
         justifyContent: "center",
         alignItems: "center",
     },

    activeRadioRound:{
        width: 4,
        height: 4,
        backgroundColor: "#2EB6A5",
        borderRadius: 100,
    },
    activeInputRadioBorder: {
        borderColor: "#2EB6A5",
    },

    autos_categories_dropdown_menu: {
        backgroundColor: "#F0F4F8",
        borderRadius: 10,
         marginBottom: 20,
        color: "#8B94A3",
        fontSize: 14,

    },
    address_info_inputs_range_main_wrapper: {
       backgroundColor: "#F0F4F8",
        borderRadius: 10,
        paddingVertical: 17,
        paddingHorizontal: 15,
        marginBottom:20,
    },
    cities_dropdown_menu: {
        height: 60,
        backgroundColor: "transparent",
        paddingHorizontal: 0,
    },
    city_dropdown_wrapper: {
        borderBottomColor: "#a2abc259",
        borderBottomWidth: 1,
        marginBottom: 17,
        color: "#8B94A3",
        fontSize: 14,
        position:"relative",
    },

   icon_dropdown: {
        position: "absolute",
       right: -17,

   },
    street_input: {
      width: "100%",
        color: "#8B94A3",
        fontSize: 14,
        paddingBottom: 17,


        
    },
    street_input_wrapper: {
        borderBottomColor: "#a2abc259",
        borderBottomWidth: 1,
        marginBottom: 17,
    },
    price_from_input_wrapper: {
        borderBottomColor: "#a2abc259",
        borderBottomWidth: 1,
        marginBottom: 17,
    },
    price_from_input: {
        width: "100%",
        color: "#8B94A3",
        fontSize: 14,
        paddingBottom: 17,
    },
    price_inputs_wrapper: {
        backgroundColor: "#F0F4F8",
        borderRadius: 10,
        paddingVertical: 17,
        paddingHorizontal: 15,
        marginBottom:20,
    },
    sort_radio_inputs_title: {
        color: "#A7AEBA",
        fontSize: 11,
        marginBottom: 17,
    },
    sort_radio_inputs_wrapper: {
        backgroundColor: "#F0F4F8",
        borderRadius: 10,
        paddingTop: 17,
        paddingHorizontal: 15,
        marginBottom: 59,
    },
    sort_radio_input: {
       flexDirection: "row",
        marginBottom: 17,
    },
    sort_radio_input_title: {
        color: "#8B94A3",
        fontSize: 14,
        marginLeft: 12,
    },
    show_more_listings_btn: {
        backgroundColor: "#2EB6A5",
        borderRadius: 8,
        width: "100%",
        paddingVertical: 17,
    },
    show_more_listings_btn_text: {
        textAlign: "center",
       justifyContent: "center",
        alignItems: "center",
        color: "#FFFFFF",
        fontSize: 16,
    },
    scrollView_second_box: {
      flex: 1,
      height: "100%",
      width: "100%",
    },
    range_slider_title_wrapper: {
        flexDirection: "row",
        alignItems: "center",
        height: 25,
        width: "100%",
    },
    range_slider_title: {
        color: "#8B94A3",
        fontSize: 14,
    },
    range_slider_box: {
       width: "100%",
    },
});