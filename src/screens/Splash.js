import React, {Component} from 'react';
 
import { Animated, StyleSheet, View,Text,Image, TouchableWithoutFeedback, Easing } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default class Splash extends Component {
 
  constructor(props){
    super();
    this.state={
      animationValue : new Animated.Value(0)

    }
  }
 
componentDidMount = ()=> {
    this.startAnimation()
    this.timeoutHandle = setTimeout(()=>{
        // Add your logic for the transition
        this.props.navigation.navigate("Onboarding")
   }, 5000);
}
// componentWillUnmount(){
//     this.timeoutHandle = setTimeout(()=>{
//         // Add your logic for the transition
//         this.props.navigation.navigate("Onboarding")
//    }, 5000);
// }

  startAnimation=()=>{
 
    Animated.timing(this.state.animationValue,{
      toValue : 128,
      duration : 5000,
   // easing: Easing.bounce,
   // easing : Easing.back(10),
   // easing : Easing.elastic(5),
    easing : Easing.bezier(.03, 1, .33, .89),
   // easing : Easing.ease(20)
    
    }).start();
    
  }
 
  render() {
    const {navigation}= this.props
    const animatedStyle = {
     transform: [{ translateX : this.state.animationValue }],
    }
 
    return (
     
        <View style={styles.MainContainer}>
          <Image source={require("../assets/mee.jpg")} style={{width: 80, height: 80, borderRadius:100,marginBottom:-1, zIndex:90, backgroundColor:'pink'}} />
      <View style={styles.cover}>
          <View style={styles.top}>
          <Text style={styles.mdLetterFlip}>Faceless |</Text>
          </View>
      <Animated.View style={[styles.animatedBox, animatedStyle]} >
      <Text style={styles.mdLetter}>Counsel</Text>
           </Animated.View>
      </View>
 
           
           
      
 
        </View>
    );
  }
};
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center',
    padding: 12,
    width:"99%",
 
  },
  animatedBox:{
     width : 200,
     height: 100,
     left:wp('5%'),
    zIndex:3,
    marginTop: Platform.OS === 'ios' ? 0 : -5,
     
   
  },
  top:{
zIndex:3,
backgroundColor:'#f2f3f4',
  },
  cover:{
width:wp('80%'),
paddingRight:50,
marginLeft:50


  },
  mdLetterFlip: {
    color: 'gray',
    fontSize:35,
    fontWeight: '100',
},
mdLetter: {
    color: 'violet',
    fontSize:35,
    fontWeight: '100',
    marginTop:-40,
},
});