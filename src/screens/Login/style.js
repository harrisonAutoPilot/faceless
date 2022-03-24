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
        height: 40,
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
        fontSize: 15,
        fontWeight: '100',
        fontStyle: 'italic'
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
    cover: {
        alignItems: 'center',
        width: wp('100%'),
    },
    imgCover: {
        width: 333,
        height: 333,
        borderRadius: 100,
        marginTop: 70,

    },
    imgSize: {
        width: 333,
        height: 323,
        borderRadius: 333 / 2,
        overflow: 'hidden',
        resizeMode: 'cover'
    },
    textCover: {
        marginTop: 15,
    },
    welcomeCover: {
        marginTop: 70,
        width: wp('100%'),
        paddingLeft: 30,
    },
    welcomeText: {
        fontSize: 23,
        color: '#212121',
        fontWeight: '600',
    },
    btnCover: {
        top: Platform.OS === 'ios' ? hp('56.5%'): hp('70.5%'),
        position: 'absolute',
        left:wp('9%'),
        zIndex:20,

    },
    btn: {
        backgroundColor: 'violet',
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius:30,
    },
    btnText: {
        color: '#fff',
        fontWeight: '200',
    },
    inputCover:{
        marginTop:Platform.OS === 'ios' ? 50 : 30,
    },
textField:{
    borderWidth:1,
    borderColor:'#f2f3f4',
    borderStyle:'solid',
    width:330,
    height:60,
    paddingLeft:20,
    borderRadius:4,
},
labelCover:{
    marginBottom:7,
},
labelText:{
    color:'#212121',
    fontWeight:'300', 
},
passwordCover:{
    marginTop:10,
},
absImg:{
    zIndex:0,
    width:240,
    height:330,
    position:'absolute',
    marginTop:50,
    left:wp('3%')
},
abs1Img:{
    zIndex:0,
    width:400,
    height:200,
    position:'absolute',
    marginTop:180,
    right:wp('-55%'),
},
abs2Img:{
    zIndex:0,
    width:300,
    height:300,
    position:'absolute',
    marginTop:150,
    right:wp('-85%'),
}

});

export default styles;