import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        width:wp('100%'),
    },
    slideCover:{
        position:'absolute',
        top:hp('-5%'),
        zIndex:-5,
    },
    mainHeader: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(238, 238, 238, 1)",
        paddingLeft: 19

    },
    body: {
        backgroundColor: "#00319D",
        marginBottom: 16,
        paddingBottom: 5
    },
    headerText: {
        fontSize: 22,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#fff",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"
    },
    mainBody: {
        // paddingHorizontal: 20,
        // flex: 1,
    },
    view: {
        flex: 1,
        backgroundColor: "#fff",
        height: "100%",
         marginTop:4,
    },
    subHeader: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderColor: "#3858CF",
        borderWidth: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: '#f5f5f5',
        paddingVertical: 3,
        zIndex:90,
        // padding:1,
    },
    activeSubHeader: {
        backgroundColor: "#fff",
        borderRadius: 20,
        width: "45%",
        margin: 5,

    },
    inActiveSubHeader: {
        backgroundColor: "transparent",
        borderRadius: 20,
        width: "45%",
        margin: 5,
    },
    activeSubHeaderText: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "violet",
        letterSpacing: 0.1,
        textAlign: "center",

    },
    inActiveSubHeaderText: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#bfbfbf",
        letterSpacing: 0.1,
        textAlign: "center",
        opacity: 0.6,
    },
    miniSubHeader: {
        // paddingHorizontal: 46,
        paddingVertical: 10,
    },
    inputHolder: {
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 4,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 30,
        borderRadius: 5
    },
    inputMainHolder: {
        marginTop: Dimensions.get("window").height / 90,
    },
    labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#f3f4f5",
        paddingHorizontal: 5
    },
    label: {
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        color: "rgba(97, 97, 97, 1)",
        letterSpacing: 0.2,
    },
    innerLabel: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        // lineHeight: 24,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.3,
        fontWeight: "400",
        marginTop: 5,
        width: "70%"
    },
    errText: {
        color: "red",
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    btnCover: {
        position: "absolute",
        borderTopColor: "rgba(238, 238, 238, 1)",
        borderTopWidth: 1,
        height: "100%",
        width: "100%",
        paddingVertical: 30,
        alignItems: "center",
        top: hp("62%"),
        paddingHorizontal: 20
    },
    btnCover2: {
        top: hp("54%")
    },
    submit: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "#3858CF",
        borderRadius: 100,
        width: "100%",
    },
    btnText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    pinInputView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        // flexWrap: "wrap",
        alignItems: Platform.OS === "android" ? "center" : null
    },
    showTextPin: {
        color: "#9E9E9E",
        fontSize: 11,
        // marginTop: Platform.OS === "android" ? 16 : 5,
        fontFamily: "Urbanist-Regular",
        // lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    showCover: {
        paddingTop: 0,
        marginRight: 5,

    },
    inputOuterView: {
        marginHorizontal: 20,

    },
    sucToastCover: {
        marginTop: hp('-12%'),
        zIndex: 9000,

    },
    changeCover: {
        width: 50,
        position: 'absolute',
        right: 2,
        marginTop: 22,
    },


    // For the new profile page
  
    topCover: {
        flexDirection: 'column',
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,

    },
    img: {
        width: 64,
        height: 64,
        borderRadius: 100,
        resizeMode: 'contain'
    },
    imgCover: {
        width: 67,
        height: 67,
        borderWidth: 10,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        // marginRight:10,
    },
    cameraCover: {
        position: 'absolute',
        left: wp('10%'),
        top: 35,

    },
    camImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    topTextCover: {
        alignItems: 'center',
        paddingTop: 10
    },
    agentNameText: {
        color: "#424242",
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.2,
        textTransform: "uppercase"
    },
    agentCodeText: {
        color: "#00319D",
        fontSize: 14,
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        letterSpacing: 0.3,
        fontStyle: 'normal',
        paddingTop: 3
    },
    bottomCover: {
        alignItems: 'center',
        height: "100%"
        // backgroundColor:'#DCDCDC'
    },
    cardCover: {
        flexDirection: "row",
        width: wp('90%'),
        elevation: 0.2,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'space-between',
        padding: 20,
        marginBottom: 7,
    },
    locImgCover: {
        width: 25,
        height: 25,
    },
    locImg: {
        width: 18,
        height: 18,
        resizeMode: 'contain',



    },
    locCover: {
        flexDirection: 'row',
        width: 100,
    },
    locTextTitle: {
        color: "#616161",
        fontSize: 14,
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        letterSpacing: 0.3,
        marginLeft: 5,
    },
    locText: {
        color: "#424242",
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,
        fontWeight: "400"
    },
    bankCaption: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: wp('80%'),
        marginTop: 10
    },
    captionText: {
        color: "#424242",
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.2,
    },
    downCover: {
        marginTop: 20,
    },
    scrollContentContainer:{
        height: "115%",
        // paddingBottom: 300,

    },
    inputCover:{
        marginTop:Platform.OS === 'ios' ? 50 : 30,
    },
textField:{
    borderWidth:1,
    borderColor:'#f5f5f5',
    borderStyle:'solid',
    width:350,
    height:50,
    paddingLeft:20,
    borderRadius:50,
    // elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor:'#f5f5f5'
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
    width:wp('100%'),
    alignItems:'center'
},
searchImg:{
    width:25,
    height:25,
    resizeMode:'contain',
    position:'absolute',
    marginTop:12,
    right:wp('10%'),
    opacity:0.5
},
happenCover:{
    width:wp('100%'),
    paddingLeft:30,
    paddingTop:15,
    paddingBottom:15,
    marginTop:180,
},
happenCover1:{
    width:wp('100%'),
    paddingLeft:30,
    paddingTop:15,
    paddingBottom:15,
    // marginTop:180,
},
happenText:{
    color: "#424242",
    fontSize: 23,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 24,
    letterSpacing: 0.2,
    fontWeight:"700",
},
spCard:{
    width:wp('95%'),
    height:190,
    borderWidth:1,
    borderRadius:10,
    borderColor:'#bfbfbf',
    borderStyle:'solid',
    alignSelf:'center',
    //  elevation: 2,
    //  shadowColor: '#000',
    //  shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 0.1,
     shadowRadius: 1,
     opacity:0.8,
     
  
     
     marginBottom:5,
     marginTop:2,
},
spTopCover:{
    flexDirection:'row',
    padding:10,
    justifyContent:'space-between',
   
},
spTopPlatformText:{
    color: "#212121",
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 24,
    letterSpacing: 0.2,
    fontWeight:"600",
    textTransform:'uppercase'
},
spTopTitleText:{
    color: "#212121",
    fontSize: 18,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 24,
    letterSpacing: 0.2,
    fontWeight:"700",
    textTransform:'capitalize',
    flexWrap:'wrap',
},
platformCover:{
    flexDirection:'row',

},
badgeImg:{
    width:25,
    height:25,
    resizeMode:'contain',
    margin:2,
},
titleCover:{
    padding:10, 
    marginTop:-22,
    paddingLeft:12
},
cardBottom:{
    width:wp('95%'),
    alignSelf:'center',
    borderTopWidth:0,
    borderColor:'#f3f4f5',
    marginTop:6,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    // opacity:0.8,
    
  },
  hostCover:{
      flexDirection:'row',
      marginTop:5,
      paddingLeft:15,
  },
  hostSticker:{
      padding:1,
      paddingLeft:7,
      paddingRight:7,
      borderRadius:2,
    //   backgroundColor:'#00b300',
      marginLeft:5,
  },
  hostLabel:{
    color: "#fff",
  },
  hostName:{
    color: "#fff",
    fontSize: 16,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 24,
    letterSpacing: 0.2,
    fontWeight:"700",
    textTransform:'capitalize'
  },
  userCover:{
flexDirection:'row',
paddingLeft:20,
padding:10,
  },
users:{
    width:40,
    height:40,
    borderRadius:100,
    // backgroundColor:"#f4f5f7",
    marginLeft:-10,
},
userImg:{
    width:40,
    height:40,
    borderRadius:100,
},
dots:{
    fontSize:30,
    marginTop:-20,
},
audienceContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
},
userCountCover:{
    marginTop:0,
    paddingRight:20,
},
userCount:{
    color:'#fff',
    fontSize:16,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 24,
    letterSpacing: 0.2,
    fontWeight:"700",
    textTransform:'capitalize'
}
})