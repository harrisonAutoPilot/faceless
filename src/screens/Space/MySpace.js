import React, {useState, useRef} from 'react';
import {
  View,Text, Image, StatusBar, Dimensions,TouchableOpacity,TextInput,Keyboard,TextInputField 
} from 'react-native';
import styles from "./style";
import {useForm, Controller} from 'react-hook-form'
import Slide from "./Slide"
import { ScrollView } from 'react-native-gesture-handler';
import { group } from '../../util/group';

const MySpace = () => {
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [status, setStatus] = useState(false);

    const {
        control, 
          handleSubmit,
          formState: {errors, isValid,}
        } = useForm({mode: 'onBlur'})
        
        const submit = () => {
           navigation.navigate('TabNavigator', { screen: 'Home' })
        }
        // handleSubmit(onSubmit)
        const onSubmit = data => console.log(data)
    // const dispatch = useDispatch();
    const [activeId, setActiveId] = useState(1);
    const goBack = () => props.navigation.navigate("Home");


    const dismissKeyboard = () => Keyboard.dismiss();
    const showPin = () => setPinVisibility(!pinVisibility)

    const getRandomColor = (id) => {
        let ids = parseInt(id)
        let shade;
        if (ids % 2 === 0) {
            shade = "rgb(0, 0, " + (Math.floor(Math.random() * 255)) + ")";
        } else {
            shade = `rgb(255, ${(Math.floor(Math.random() * 150))}, 0)`;
        }
        return shade
    }
 
    return (
        <View style={styles.container}>
       
           
            <View style={styles.passwordCover}>
         
        <Controller        
         control={control}        
         password="password"        
         render={({field: {onChange, password,  onBlur}}) => (            
           <TextInput
           style={styles.textField}           
             iconName="person"            
             iconType="MaterialIcons"            
             placeholder="Search for group"            
             value={password}  
             secureTextEntry={false}          
             onBlur={onBlur}            
             onChangeText={password => onChange(password)}          
           />   
                
         )}
         
         rules={{
           required: {
              password :true,
             message: 'Field is required!'
           }
         }}
         
      />
      <Image source={require("../../assets/magnifying-glass.png")} style={styles.searchImg} />
         </View>
<View style={styles.happenCover1}>
    <Text style={styles.happenText}>Happening Now</Text>
</View>
        <ScrollView>
            <View>
            {group.map((item) => (
                <View style={styles.spCard} >
                    <View style={styles.spTopCover}>
                       <View style={styles.platformCover}> 
                           <Text style={styles.spTopPlatformText}> {item.organization}</Text>
                           <Image source={require("../../assets/awareness-day1.png")} style={styles.badgeImg} />
                           </View>
                        <Text style={styles.dots}>...</Text>
                    </View>
                    <View style={styles.titleCover}>
                    <Text style={styles.spTopTitleText}>{item.title}</Text>
                    </View>
                    <View  style={[styles.cardBottom, { backgroundColor: getRandomColor(item.id) }]}>
                        <View style={styles.hostCover}>
                            <Text style={styles.hostName}>{item.host}</Text>
                            <View style={[styles.hostSticker, { backgroundColor: getRandomColor(item.id) }]}>
                            <Text style={styles.hostLabel}>Host</Text>
                            </View>
                        </View>
                        <View style={styles.audienceContainer}>
                           <View style={styles.userCover}>
                              <View style={styles.users}>
                                <Image source={require("../../assets/13fd344331122ef5.png")} style={styles.userImg} />
                                </View>
                                <View style={styles.users}>
                                <Image source={require("../../assets/kid.jpeg")} style={styles.userImg} />
                                </View>
                                <View style={styles.users}>
                                <Image source={require("../../assets/abraham.jpeg")} style={styles.userImg} />
                                </View>
                             </View>

                             <View style={styles.userCountCover}>
                                 <Text style={styles.userCount}>{item.users} Listening</Text>
                             </View>
                        </View>
                    </View>
                </View>
            ))}
            </View>
        </ScrollView>

     

        </View>
    )
};

export default MySpace;