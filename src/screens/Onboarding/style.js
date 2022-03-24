import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    vontainer: {
        backgroundColor: '#fff',
        width: wp('100%'),
        height: hp('100%'),
        // justifyContent:'center',
        alignItems: 'center',
    },
    logoImg: {
        width: 40,
        height:40,
    },
    smLetter: {
        color: 'violet',
        fontSize: 35,
        fontWeight: '600',
    },
    mdLetter: {
        color: 'gray',
        fontSize: 35,
        fontWeight: '100',
    },
    appName: {
        flexDirection: 'row'
    },
    mdLetterFlip: {
        color: 'gray',
        fontSize:15,
        fontWeight: '100',
        fontStyle:'italic'
    },
    smLetterFlip: {
        color: 'violet',
        fontSize: 15,
        fontWeight: '600',
    },
    logoCover: {
        flexDirection: 'row',
        marginTop: 50,

    },
    abrevCover: {
        flexDirection: 'row'
    },
    cover:{
      alignItems: 'center',
      width: wp('100%'),
    },
    imgCover:{
        width:333,
        height:333,
        borderRadius:100,
        marginTop:70,
       
    },
    imgSize:{
        width:333,
        height:323,
        borderRadius:333 / 2,
        overflow: 'hidden',
        resizeMode:'cover'
    },
    textCover:{
      marginTop:15,
    },
    slideText:{
    fontSize:20,
    fontWeight:'100',
    lineHeight: 20,
    },
    btnCover:{
        top:Platform.OS === 'ios' ? hp('75.5%'): hp('83.5%'),
    position:'absolute',
    
       
    },
    btn:{
    backgroundColor:'violet',
    width:200,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderTopRightRadius:50,
    borderBottomRightRadius:50,
    borderBottomLeftRadius:30,
   
    },
    btnText:{
        color:'#fff',
        fontWeight:'200',
    },
    subHeading: {
        fontSize: 10,
        fontWeight: "400",
        color: "#fff",
        lineHeight: 2,
        letterSpacing: 0.2,
        opacity: 0.6,
        fontFamily: "Urbanist-Regular"
    },



});

export default styles;