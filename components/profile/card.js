
import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop, LinearGradient } from "react-native-svg";
import {Linking, Modal} from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Carousel from 'react-native-snap-carousel';


import { SliderBox } from "react-native-image-slider-box";


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
import {Dropdown} from "react-native-material-dropdown-v2-fixed";



export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchAuto: null,
             active: true,
             unactive: false,
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
            current_image: 1,
           slider_images: [
               require('../../assets/images/slider_img1.png'),
               require('../../assets/images/slider_img2.jpg'),
               require('../../assets/images/slider_img3.jpg')
           ],
            editAdModal: false,
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

    }
    

   
    sliderImages = () => {
        return this.state.slider_images;
    }

    redirectToCarsList = () => {
        this.props.navigation.navigate("CarsList");
    }
    render() {

        return (
            <SafeAreaView style={styles.container} >

            <View style={styles.slider_wrapper}>
                <View style={styles.slider_length}>
                     <Text style={styles.slider_text}>{this.state.current_image}</Text>
                     <Text style={styles.slider_text}>-</Text>
                     <Text style={styles.slider_text}>{this.state.slider_images.length}</Text>


                </View>
                <SliderBox
                    // dotStyle={{
                    //     width:16,
                    //     height:16,
                    //     borderRadius:60,
                    //     backgroundColor:'#00000099'
                    //
                    // }}
                    style={styles.slider_images}
                    // inactiveDotColor="#EDDAD4"
                    // dotColor="#9F9EAE"
                    // sliderBoxHeight={235}

                    paginationBoxStyle={{
                        // alignItems: "center",
                        // alignSelf: "center",
                        // justifyContent: "center",
                        // paddingVertical: 10,
                        // backgroundColor:"#00000099"
                        display: "none",
                    }}
                    images={this.sliderImages()}
                    onCurrentImagePressed={index => console.log(index)}
                    currentImageEmitter={index => this.setState({current_image: index+1})}
                />
                <View style={styles.slider_header_wrapper}>
                      <TouchableOpacity onPress={this.redirectToCarsList}>
                          <Svg
                              width={22}
                              height={22}
                              viewBox="0 0 18 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <Path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.165 6.007l-.002.354c-.012 1.404-.096 2.657-.242 3.451 0 .015-.16.802-.261 1.064-.16.38-.447.701-.808.905a2 2 0 01-.91.219c-.25-.012-.661-.137-.955-.242l-.244-.094C5.126 11.022 2.036 8.924.852 7.64l-.087-.09-.39-.42A1.856 1.856 0 010 5.992c0-.379.116-.758.347-1.064.07-.099.18-.226.28-.334l.379-.397C2.31 2.876 5.135 1.022 6.599.407c0-.013.91-.393 1.343-.407H8c.664 0 1.285.379 1.602.991.087.168.17.496.233.784l.114.544c.13.874.216 2.216.216 3.688zm6.332-1.525c.83 0 1.503.68 1.503 1.518a1.51 1.51 0 01-1.503 1.517l-3.7-.327c-.65 0-1.179-.532-1.179-1.19 0-.658.528-1.191 1.18-1.191l3.699-.327z"
                                  fill="#fff"
                              />
                          </Svg>
                      </TouchableOpacity>
                    <View style={styles.messages_favorites_icons_wrapper}>
                         <TouchableOpacity>
                             <Svg
                                 width={22}
                                 height={22}
                                 viewBox="0 0 20 20"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"

                             >
                                 <Path
                                     d="M19.435.582a1.933 1.933 0 00-1.93-.503L1.408 4.759A1.92 1.92 0 00.024 6.282c-.142.75.355 1.704 1.003 2.102l5.033 3.094a1.304 1.304 0 001.61-.194l5.763-5.799a.734.734 0 011.06 0c.29.292.29.765 0 1.067l-5.773 5.8c-.428.43-.508 1.1-.193 1.62l3.075 5.083c.36.604.98.946 1.66.946.08 0 .17 0 .251-.01.78-.1 1.4-.634 1.63-1.39l4.773-16.075c.21-.685.02-1.43-.48-1.943z"
                                     fill="#fff"
                                 />
                             </Svg>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => {this.setState({editAdModal:true})}} >
                             <Svg
                                 width={22}
                                 height={22}
                                 viewBox="0 0 20 20"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"

                             >
                                 <Path
                                     d="M7.702 15.833H17.5V17.5h-15v-3.536l8.25-8.25 3.535 3.537-6.583 6.582zm4.226-11.296l1.768-1.769a.833.833 0 011.178 0l2.358 2.358a.833.833 0 010 1.178l-1.769 1.768-3.535-3.535z"
                                     fill="#ffffff"
                                 />
                             </Svg>

                         </TouchableOpacity>
                    </View>


                    <Modal animationType="slide"
                           transparent={true}
                           visible={this.state.editAdModal}
                           onRequestClose={() => {
                               Alert.alert('Modal has been closed.');

                           }}>
                        <View style={styles.edit_an_ad_modal_wrapper}>
                            <View style={styles.edit_an_ad_modal_title_close_btn_wrapper}>
                                <Text style={styles.edit_an_ad_modal_title}>Редактирование объявления</Text>
                                <TouchableOpacity style={styles.edit_an_ad_modal_close_btn} onPress={()=>{this.setState({editAdModal: false})}}>
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
                            <ScrollView style={styles.edit_scrollView_box}>

                                <View style={styles.edit_an_ad_modal_first_inputs_wrapper}>
                                    <View style={styles.edit_an_ad_modal_first_input}>
                                        <TextInput
                                            style={styles.edit_an_ad_modal_first_input_field}
                                            onChangeText={(val) => this.setState({headlineInput:val})}
                                            value={this.state.headlineInput}
                                            placeholder="Заголовок объявления"
                                            keyboardType="text"
                                            placeholderTextColor="#424A55"
                                        />
                                    </View>
                                    <View style={styles.edit_an_ad_modal_first_input}>
                                        <TextInput
                                            style={styles.edit_an_ad_modal_first_input_field}
                                            onChangeText={(val) => this.setState({adDescriptionInput:val})}
                                            value={this.state.adDescriptionInput}
                                            placeholder="Описание объявления"
                                            keyboardType="text"
                                            placeholderTextColor="#424A55"
                                        />
                                    </View>
                                    <View style={styles.edit_an_ad_modal_first_input}>
                                        <TextInput
                                            style={styles.edit_an_ad_modal_first_input_field}
                                            onChangeText={(val) => this.setState({priceInput:val})}
                                            value={this.state.priceInput}
                                            placeholder="Стоимость"
                                            keyboardType="text"
                                            placeholderTextColor="#424A55"
                                        />
                                    </View>
                                    <View style={[styles.edit_an_ad_modal_first_input, {marginBottom:0}]}>
                                        <TextInput
                                            style={styles.edit_an_ad_modal_first_input_field}
                                            onChangeText={(val) => this.setState({addressInput:val})}
                                            value={this.state.addressInput}
                                            placeholder="Адрес"
                                            keyboardType="text"
                                            placeholderTextColor="#424A55"
                                        />
                                    </View>
                                    <View style={styles.edit_an_ad_modal_car_model_dropdown}>
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
                                    <View style={styles.edit_an_ad_modal_first_input}>
                                        <TextInput
                                            style={styles.edit_an_ad_modal_first_input_field}
                                            onChangeText={(val) => this.setState({adDescriptionInput2:val})}
                                            value={this.state.adDescriptionInput2}
                                            placeholder="Описание объявления"
                                            keyboardType="text"
                                            placeholderTextColor="#424A55"
                                        />
                                    </View>
                                </View>
                                <Text style={styles.edit_an_ad_modal_second_inputs_characteristics_title}>Характеристики</Text>
                                <View style={styles.edit_an_ad_modal_second_inputs_characteristics_wrapper}>

                                    <View style={styles.edit_an_ad_modal_first_input}>
                                        <TextInput
                                            style={styles.edit_an_ad_modal_first_input_field}
                                            onChangeText={(val) => this.setState({headlineInput2:val})}
                                            value={this.state.headlineInput2}
                                            placeholder="Заголовок объявления"
                                            keyboardType="text"
                                            placeholderTextColor="#424A55"
                                        />
                                    </View>
                                    <View style={styles.edit_an_ad_modal_first_input}>
                                        <TextInput
                                            style={styles.edit_an_ad_modal_first_input_field}
                                            onChangeText={(val) => this.setState({adDescriptionInput3:val})}
                                            value={this.state.adDescriptionInput3}
                                            placeholder="Описание объявления"
                                            keyboardType="text"
                                            placeholderTextColor="#424A55"
                                        />
                                    </View>
                                    <View style={styles.edit_an_ad_modal_first_input}>
                                        <TextInput
                                            style={styles.edit_an_ad_modal_first_input_field}
                                            onChangeText={(val) => this.setState({priceInput2:val})}
                                            value={this.state.priceInput2}
                                            placeholder="Стоимость"
                                            keyboardType="text"
                                            placeholderTextColor="#424A55"
                                        />
                                    </View>
                                    <View style={styles.edit_an_ad_modal_first_input}>
                                        <TextInput
                                            style={styles.edit_an_ad_modal_first_input_field}
                                            onChangeText={(val) => this.setState({addressInput2:val})}
                                            value={this.state.addressInput2}
                                            placeholder="Адрес"
                                            keyboardType="text"
                                            placeholderTextColor="#424A55"
                                        />
                                    </View>

                                </View>
                                <TouchableOpacity style={styles.save_an_ad_btn}>
                                    <Text style={styles.save_an_ad_btn_title}>Сохранить</Text>

                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </Modal>
                </View>
            </View>    

             <View style={styles.slider_cars_info_main_wrapper}>
                  <View style={styles.white_box}></View>
                 <View style={styles.slider_cars_info_items_wrapper}>
                      <ScrollView style={styles.slider_cars_info_item1}>

                           <Text style={styles.slider_cars_info_item1_title}>Аренда авто, под залог</Text>
                          <Text style={styles.slider_cars_info_item1_price}>1 290 ₽</Text>
                           <Text style={styles.slider_cars_info_item1_info2}>Лиговский проспект 11</Text>
                          <Text style={[styles.slider_cars_info_item1_info2, {marginBottom: 20}]}>Сегодня в 12:00</Text>
                          <Text style={styles.slider_cars_info_item1_info3}>
                              Идейные соображения высшего порядка,
                              а также укрепление и развитие структуры
                              играет важную роль в формировании
                              модели развития.
                          </Text>
                          <View style={styles.slider_cars_more_details_items_wrapper}>
                              <View style={styles.slider_cars_more_details_item}>
                                  <Text style={styles.slider_cars_more_details_item_title}>
                                      Марка автомобиля
                                  </Text>
                                  <Text style={styles.slider_cars_more_details_item_name}>
                                      Vollkswagen
                                  </Text>
                              </View>
                              <View style={styles.slider_cars_more_details_item}>
                                  <Text style={styles.slider_cars_more_details_item_title}>
                                      Тип кузова
                                  </Text>
                                  <Text style={styles.slider_cars_more_details_item_name}>
                                      Седан
                                  </Text>
                              </View>
                              <View style={styles.slider_cars_more_details_item}>
                                  <Text style={styles.slider_cars_more_details_item_title}>
                                      Год выпуска
                                  </Text>
                                  <Text style={styles.slider_cars_more_details_item_name}>
                                      2021
                                  </Text>
                              </View>
                              <View style={styles.slider_cars_more_details_item}>
                                  <Text style={styles.slider_cars_more_details_item_title}>
                                      Коробка передач
                                  </Text>
                                  <Text style={styles.slider_cars_more_details_item_name}>
                                      Автоматическая
                                  </Text>
                              </View>
                              <View style={styles.slider_cars_more_details_item}>
                                  <Text style={styles.slider_cars_more_details_item_title}>
                                      Руль
                                  </Text>
                                  <Text style={styles.slider_cars_more_details_item_name}>
                                      Левый
                                  </Text>
                              </View>
                          </View>
                          <View style={styles.profile_user_img_info_box}>
                              <View style={styles.profile_user_img_box}>
                                  <Image style={styles.profile_user_img}  source={require('../../assets/images/profile_user_img.png')} />
                              </View>
                              <View style={styles.profile_user_info}>
                                   <Text style={styles.profile_user_name}>Дмитрий</Text>
                                  <Text style={styles.profile_user_notifications}>
                                      17 объявлений
                                  </Text>
                              </View>
                          </View>
                      </ScrollView>

                 </View>
             </View>

                <View style={styles.slider_cars_info_footer}>
                       <TouchableOpacity style={styles.call_btn} onPress={()=>Linking.openURL(`tel:+7 928 245 15 20`)}>
                             <View>
                                 <Svg
                                     width={20}
                                     height={20}
                                     viewBox="0 0 20 20"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg"

                                 >
                                     <Path
                                         fillRule="evenodd"
                                         clipRule="evenodd"
                                         d="M12.356.008a.817.817 0 00-.626.176.853.853 0 00-.322.584.86.86 0 00.757.95 6.912 6.912 0 016.125 6.139.857.857 0 101.704-.192C19.54 3.607 16.4.459 12.356.008zm.062 3.482a.854.854 0 00-1.004.68.862.862 0 00.677 1.01 3.462 3.462 0 012.744 2.75.86.86 0 001.006.681.865.865 0 00.677-1.01 5.174 5.174 0 00-4.1-4.111zM14 13.09c.451-.26.961-.554 1.605-.417.582.123 2.568 1.735 3.112 2.293.356.366.555.744.585 1.122.054 1.482-1.96 3.174-2.326 3.384a2.825 2.825 0 01-1.69.528c-.65 0-1.375-.185-2.166-.554C8.83 17.656 2.276 11.231.543 6.974-.177 5.389-.181 4.082.53 3.1.815 2.639 2.433.713 3.88.774c.386.033.76.231 1.128.59.556.545 2.128 2.537 2.249 3.122.134.65-.16 1.166-.422 1.62a7.681 7.681 0 01-.214.34c-.313.48-.73 1.121-.582 1.53 1.057 2.594 3.498 4.858 6.093 5.921.401.146 1.042-.274 1.521-.588a7.89 7.89 0 01.335-.212L14 13.09z"
                                         fill="#fff"
                                     />
                                 </Svg>
                             </View>
                            <Text style={styles.call_btn_title}>Позвонить</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={styles.chat_btn}>

                               <View>
                                   <Svg
                                       width={20}
                                       height={20}
                                       viewBox="0 0 20 20"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"

                                   >
                                       <Path
                                           fillRule="evenodd"
                                           clipRule="evenodd"
                                           d="M0 10.015C0 4.747 4.21 0 10.02 0 15.7 0 20 4.657 20 9.985 20 16.165 14.96 20 10 20c-1.64 0-3.46-.44-4.92-1.302-.51-.31-.94-.54-1.49-.36l-2.02.6c-.51.16-.97-.24-.82-.78l.67-2.244c.11-.31.09-.641-.07-.902C.49 13.43 0 11.697 0 10.015zm8.7 0c0 .711.57 1.282 1.28 1.292.71 0 1.28-.58 1.28-1.282 0-.711-.57-1.282-1.28-1.282-.7-.01-1.28.571-1.28 1.272zm4.61.01c0 .701.57 1.282 1.28 1.282.71 0 1.28-.58 1.28-1.282 0-.711-.57-1.282-1.28-1.282-.71 0-1.28.571-1.28 1.282zm-7.94 1.282c-.7 0-1.28-.58-1.28-1.282 0-.711.57-1.282 1.28-1.282.71 0 1.28.571 1.28 1.282a1.29 1.29 0 01-1.28 1.282z"
                                           fill="#fff"
                                       />
                                   </Svg>
                               </View>
                               <Text style={styles.chat_btn_title}>Написать</Text>



                       </TouchableOpacity>
                </View>



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

    },
  slider_wrapper: {
     width: "100%",
      height: 268,
      position: "relative",
  },
    slider_images: {
        width: "100%",
        height: "100%",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    slider_length: {
      position: "absolute",
        bottom: 25,
        alignSelf: "center",
        backgroundColor: "#00000099",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 4,
        zIndex: 9,
        flexDirection: "row",
        alignItems: "center",

    },
    slider_text: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 12,
    },
    slider_header_wrapper: {
        width: "100%",
      flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        zIndex: 9,
        paddingTop: 22,
        paddingRight: 24,
        paddingLeft: 26,
    },
    messages_favorites_icons_wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 72,
    },
    slider_cars_info_main_wrapper: {
        flex: 1,
        width: "100%",
        backgroundColor: "#FFFFFF",
    },
    white_box: {
      position: "absolute",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width: "100%",
        backgroundColor: "#FFFFFF",
        height: 30,
        top: -10,
    },
    slider_cars_info_item1_title: {
        color: "#424A55",
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 15,
    },
    slider_cars_info_item1: {
       paddingHorizontal: 23,
        paddingTop: 20,
   },
    slider_cars_info_item1_price: {
        color: "#424A55",
        fontSize: 20,
        marginBottom: 20,
    },
    slider_cars_info_item1_info2: {
        color: "#8B94A3",
        fontSize: 14,
    },
    slider_cars_info_item1_info3: {
        color: "#424A55",
        fontSize: 16,
        marginBottom: 40,
      width: 303,
    },
    slider_cars_more_details_items_wrapper: {
       paddingBottom: 20,
       marginBottom: 20,
        borderBottomColor: "#F0F3F9",
        borderBottomWidth: 1,
    },
    slider_cars_more_details_item: {
       flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
        width: "100%",
    },
    slider_cars_more_details_item_title: {
        fontSize: 16,
        color: "#8B94A3",
       width: "50%",

    },
    slider_cars_more_details_item_name: {
        color: "#424A55",
        fontSize: 16,
        width: "50%",
    },
    profile_user_img_info_box: {
       flexDirection: "row",
        alignItems: "center",
        paddingBottom: 20,
        marginBottom: 30,
        borderBottomColor: "#F0F3F9",
        borderBottomWidth: 1,
    },
    profile_user_img_box: {
       marginRight: 15,
        width: 50,
        height: 50,
        borderRadius: 100,
        overflow: "hidden",
    },
    profile_user_img: {
       width: "100%",
       height: "100%",

    },
    profile_user_name: {
      color: "#424A55",
      fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    profile_user_notifications: {
        color: "#2EB6A5",
        fontWeight: "bold",
        fontSize: 12,
    },
    slider_cars_info_footer: {
        backgroundColor: "#ffffffe6",
        shadowColor: "#304152",
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,

        elevation: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: "100%",
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
    call_btn: {
       borderRadius: 8,
        backgroundColor: "#2EB6A5",
        paddingVertical: 15,
        paddingLeft: 28,
        paddingRight: 26,
        flexDirection: "row",
        alignItems: "center",
       width: "48%",


    },
    chat_btn: {
        borderRadius: 8,
        backgroundColor: "#33B5FF",
        paddingVertical: 15,
        paddingLeft: 34,
        paddingRight: 31,
        flexDirection: "row",
        alignItems: "center",
        width: "48%",

    },
    call_btn_title: {
      color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 12,
    },
    chat_btn_title: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 12,
    },
    edit_an_ad_modal_wrapper: {
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
    edit_an_ad_modal_title_close_btn_wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 23,
        paddingTop: 10,
    },
    edit_an_ad_modal_title: {
        color: "#424A55",
        fontWeight: "bold",
        fontSize: 18,
    },
    edit_an_ad_modal_first_input: {
        borderBottomColor: "#a2abc259",
        borderBottomWidth: 1,
        marginBottom: 17,
        width: "100%",
    },
    edit_an_ad_modal_first_input_field: {
        paddingBottom: 17,
        color: "#424A55",
        fontSize: 14,
    },
    edit_an_ad_modal_first_inputs_wrapper: {
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
    edit_an_ad_modal_car_model_dropdown: {
        borderBottomColor: "#a2abc259",
        borderBottomWidth: 1,
        marginBottom: 17,
        width: "100%",
    },
    edit_an_ad_modal_second_inputs_characteristics_wrapper: {
        width: "100%",
        paddingTop: 15,
        paddingHorizontal: 17,
        marginBottom: 40,
        backgroundColor: "#F0F4F8",
        borderRadius: 10,
    },
    edit_an_ad_modal_second_inputs_characteristics_title: {
        color: "#424A55",
        fontSize: 14,
        marginBottom: 10,
    },
    save_an_ad_btn: {
        backgroundColor: "#2EB6A5",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 17,
        width: "100%",
    },

    save_an_ad_btn_title: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
    icon_dropdown: {
        position: "absolute",
        right: -17,

    },
    edit_scrollView_box: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
});