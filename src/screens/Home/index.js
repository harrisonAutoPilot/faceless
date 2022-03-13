import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { data } from '../../util/data';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width } = Dimensions.get('screen');
import styles from './style'
import Video from "react-native-video";
import HeaderWithGradient from '../../components/HeaderWithGradient';

import Button from '../../components/Btn'

const ITEM_WIDTH = width * 1 - 15;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;
const Home = ({ navigation }) => {
  const tabBarheight = useBottomTabBarHeight();
  const [isPlaying, setIsPlaying] = React.useState("1");  
  const videoPlayer = useRef(null);
  // const [currentTime, setCurrentTime] = useState(0);
  // const [duration, setDuration] = useState(0);
  // const [isFullScreen, setIsFullScreen] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const [paused, setPaused] = useState(false);
  vlcplayer = React.createRef();

  // const onSeek = (seek) => {
  //   //Handler for change in seekbar
  //   videoPlayer.current.seek(seek);
  // };

  // const onPaused = (playerState) => {
  //   //Handler for Video Pause
  //   setPaused(!paused);
  //   setPlayerState(playerState);
  // };

  // const onReplay = () => {
  //   //Handler for Replay
  //   setPlayerState(PLAYER_STATES.PLAYING);
  //   videoPlayer.current.seek(0);
  // };

  // const onProgress = (data) => {
  //   // Video Player will progress continue even if it ends
  //   if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
  //     setCurrentTime(data.currentTime);
  //   }
  // };

  // const onLoad = (data) => {
  //   setDuration(data.duration);
  //   setIsLoading(false);
  // };

  // const onLoadStart = (data) => setIsLoading(true);

  // const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

  // const onError = () => alert('Oh! ', error);

  // const exitFullScreen = () => {
  //   alert('Exit full screen');
  // };

  // const enterFullScreen = () => {};

  // const onFullScreen = () => {
  //   setIsFullScreen(isFullScreen);
  //   if (screenType == 'content') setScreenType('cover');
  //   else setScreenType('content');
  // };

  // const renderToolbar = () => (
  //   <View>
  //     <Text style={styles.toolbar}> toolbar </Text>
  //   </View>
  // );

  // const onSeeking = (currentTime) => setCurrentTime(currentTime);






  return ( 

    <View style={styles.container}>
      <HeaderWithGradient
      username="@Odimnobi"
       />



      {/* Scrollable Content */}
      <View style={styles.scrollContainer}>
        <ScrollView
          indicatorStyle="white"
          contentContainerStyle={[
            styles.scrollContentContainer,
            { paddingBottom: tabBarheight },
          ]}>
          {data.map((item) => (
            <View key={item.id} style={styles.imageContainer}>
              {item.type ===  "video" ? 
            <>
              <View style={styles.descCover}> 
                  <Text style={styles.titleText}>{item.post_title}</Text>
                  <Text style={styles.descText} numberOfLines={2}>{item.post_desc}</Text>
                </View>
              
                    <Video
                    ref={(ref) => {
                      player = ref
                      }}
                     style={styles.imageCard}
                     resizeMode="cover"
                      source={item.video}
                      controls={true}
                      paused={true}
                      playInBackground={false}
                    />
                
             
                     
              <View style={styles.statCover}>
                <View style={styles.likeStat}>
                  <Image source={require("../../assets/like.png")} style={styles.likeImg} />
                  <Text>{item.post_like}k</Text>
                </View>
                <View style={styles.likeStat}>
                  <Image source={require("../../assets/relations.png")} style={styles.likeImg} />
                  <Text>{item.post_relate}k</Text>
                </View>
              </View>
              <View style={styles.aboveCover}>
                
                <View style={styles.posterDetails}>
                  <View style={styles.posterNameCover}>
                    <Text style={styles.posterName}>{item.poster}</Text>
                  </View>
                  <TouchableOpacity>
                  <View style={styles.subBtn}>
                    <Text style={styles.subText}>Subscribe</Text>
                  </View>
                  </TouchableOpacity>
                  <View style={styles.postDate}>
                    <Text style={styles.dateText}>{item.post_date}</Text>
                  </View>
                </View>
                {/* <View style={styles.posterImgCover}>
                  <Image source={item.poster_img} style={styles.posterImg} />
                </View> */}
              </View>
              <View style={styles.bottomCover}>
                <View style={styles.bottomInner}>
                  <TouchableOpacity style={styles.touchStyle}>
                    <Image source={require("../../assets/like.png")} style={styles.smImg} />
                    <Text style={styles.items}>like</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomInner}>
                  <TouchableOpacity style={styles.touchStyle}>
                    <Image source={require("../../assets/message.png")} style={styles.smImg} />
                    <Text style={styles.items}>Comment</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomInner}>
                  <TouchableOpacity style={styles.touchStyle}>
                    <Image source={require("../../assets/relations.png")} style={styles.smImg} />
                    <Text style={styles.items}>Relations</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomInner}>
                  <TouchableOpacity style={styles.touchStyle}>
                    <Image source={require("../../assets/share.png")} style={styles.smImg} />
                    <Text style={styles.items}>Share</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </>  
            :
            <>
              <View style={styles.descCover}> 
                  <Text style={styles.titleText}>{item.post_title}</Text>
                  <Text style={styles.descText} numberOfLines={2}>{item.post_desc}</Text>
                </View>
              <Image
                style={styles.imageCard}
                source={item.image_url}
                resizeMode="cover"
                
              />
              <View style={styles.statCover}>
                <View style={styles.likeStat}>
                  <Image source={require("../../assets/like.png")} style={styles.likeImg} />
                  <Text>{item.post_like}k</Text>
                </View>
                <View style={styles.likeStat}>
                  <Image source={require("../../assets/relations.png")} style={styles.likeImg} />
                  <Text>{item.post_relate}k</Text>
                </View>
              </View>
              <View style={styles.aboveCover}>
                <View style={styles.posterImgCover}>
                  <Image source={item.poster_img} style={styles.posterImg} />
                </View>
                <View style={styles.posterDetails}>
                  <View style={styles.posterNameCover}>
                    <Text style={styles.posterName}>{item.poster}</Text>
                  </View>
                  <TouchableOpacity>
                  <View style={styles.subBtn}>
                    <Text style={styles.subText}>Subscribe</Text>
                  </View>
                  </TouchableOpacity>
                  <View style={styles.postDate}>
                    <Text style={styles.dateText}>{item.post_date}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.bottomCover}>
                <View style={styles.bottomInner}>
                  <TouchableOpacity style={styles.touchStyle}>
                    <Image source={require("../../assets/like.png")} style={styles.smImg} />
                    <Text style={styles.items}>like</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomInner}>
                  <TouchableOpacity style={styles.touchStyle}>
                    <Image source={require("../../assets/message.png")} style={styles.smImg} />
                    <Text style={styles.items}>Comment</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomInner}>
                  <TouchableOpacity style={styles.touchStyle}>
                    <Image source={require("../../assets/relations.png")} style={styles.smImg} />
                    <Text style={styles.items}>Relations</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomInner}>
                  <TouchableOpacity style={styles.touchStyle}>
                    <Image source={require("../../assets/share.png")} style={styles.smImg} />
                    <Text style={styles.items}>Share</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </>
            }
            </View>

          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
