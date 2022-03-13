import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get("window");
const ITEM_WIDTH = width * 1 - 15;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f3f4',
    },
    contentContainer: {
      marginTop: 50,
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    title: {
      fontSize: 20,
      color: '#fff',
    },
    scrollContainer: {
      flex: 1,
    },
    scrollContentContainer: {
      alignItems: 'center',
    },
    descCover:{
      width: ITEM_WIDTH,
      height:90,
      backgroundColor:'#fff',
      padding:10,
      },
      titleText:{
        fontSize:15,
        color:'#212121',
        textTransform:'capitalize',
        fontWeight:'700'
      },
      descText:{
        fontSize:12,
        color:'#757575',
        textTransform:'capitalize',
        marginTop:8,
        lineHeight:20,
      },
    imageContainer: {
      marginBottom: 14,
      borderRadius: 4,
      backgroundColor: '#fff',
      padding: 5,
    },
    imageCard: {
      borderRadius: 4,
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
    },
    bottomCover: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      width: ITEM_WIDTH,
  
    },
    items: {
      color: '#414141',
      fontSize: 12,
    },
    smImg: {
      width: 15,
      height: 15,
  
    },
    bottomInner: {
      alignItems: 'center',
    },
    touchStyle: {
      alignItems: 'center',
    },
    aboveCover: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 30,
    },
    posterImgCover: {
      width: 90,
      height: 90,
      backgroundColor: '#fff',
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      position: 'absolute',
      top: -60,
      alignItems: 'center',
    },
    posterImg: {
      width: 80,
      height: 80,
      borderRadius: 100,
      marginTop: 5,
  
    },
    posterDetails: {
      width: 250,
      position: 'absolute',
      left: 90,
      padding: 4,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop:3,
    },
    posterNameCover: {
      fontSize: 6,
    },
    posterName: {
      fontSize: 12
    },
    subBtn: {
      backgroundColor: '#ee82ee',
      padding: 4,
      borderRadius: 4,
    },
    subText: {
      fontSize: 9,
      color: '#fff'
    },
    postDate: {
  
    },
    dateText: {
      fontSize: 12
    },
    statCover: {
      width: 100,
      height: 30,
      backgroundColor: '#f3f4f5',
      position: 'absolute',
      borderRadius: 50,
      margin: 10,
      right: 10,
      flexDirection: 'row',
      justifyContent:'space-around',
    },
    likeStat: {
      flexDirection: 'row',
      paddingTop:5,
     
    },
    likeImg: {
      width: 12,
      height: 12,
      marginTop:4,
    },
    countText: {
      fontSize: 7,
      marginTop:3,
     
    },
    playBtn:{
      alignItems:'center',
      position:'absolute',
      justifyContent:'center',
      backgroundColor:'pink',
      width:60,
      height:60,
      top:hp('27%'),
      left:wp('45%'),
      borderRadius:100,
    },
    mediaPlayer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'black',
      justifyContent: 'center',
    },
    topCover:{
      width:wp('100%'),
      height:80,
      backgroundColor:'#fff',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    topInner:{
      flexDirection:'row',
      marginTop:5,
      // justifyContent:'space-around',

    },
    profileCover:{
      borderWidth:1,
      borderColor:'#f2f3f4',
      borderStyle:'solid',
      borderRadius:100,
      width:50,
      height:50,
      marginTop:20,
      marginLeft:20,
      marginRight:10,

    },
    profileName:{
      marginTop:35,
      color:'violet'
    },
    profileImg:{
      width:48,
      height:48,
      borderRadius:100,
    },
    searchImg:{
      width:24,
      height:24,
      marginTop:3,
      // borderRadius:100,
    },
    searchCover:{
      marginTop:30,
      marginRight:40,
      flexDirection:'row',
    },
    noteImg:{
      width:20,
      height:20,
      marginleft:10,
      marginLeft:20,
      marginTop:5,
    },
  });

export default styles;