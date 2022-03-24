import React from "react";
import { View, ImageBackground, Text, LogBox, Image, StatusBar } from "react-native";
import FadingSlides from 'react-native-fading-slides';
import styles from "./style";


const slides = [
    {
      image: require('../../../assets/love.jpg'),
      imageWidth: 300,
      imageHeight: 150,
      resizeMode:"contain",
      title: 'Welcome to our world',
      subtitle: 'Dealing with abuse',
      titleColor: '#212121',
      subtitleColor: '#fff',
    },
    {
      image: require('../../../assets/family.jpg'),
      imageWidth: 300,
      imageHeight: 180,
      resizeMode:"contain",
      title: 'We are one',
      subtitle: 'We are one',
      titleColor: '#212121',
      subtitleColor: '#fff',
    },
    {
        image: require('../../../assets/alone.jpg'),
        imageWidth: 300,
        imageHeight: 180,
        resizeMode:"contain",
        title: 'You are never alone',
        subtitle: 'This is a see you soon',
        titleColor: '#212121',
        subtitleColor: '#fff',
      },
      {
        image: require('../../../assets/addictions.jpg'),
        imageWidth: 300,
        imageHeight: 180,
        resizeMode:"contain",
        title: 'Dealing with addictions?',
        subtitle: 'Dealing with addictions?',
        titleColor: '#212121',
        subtitleColor: '#fff',
      },
      {
        image: require('../../../assets/abuses.jpg'),
        imageWidth: 300,
        imageHeight: 200,
        resizeMode:"contain",
        title: 'Abused?',
        subtitle: 'Abused?',
        titleColor: '#212121',
        subtitleColor: '#fff',
      },
      {
        image: require('../../../assets/health.jpg'),
        imageWidth: 300,
        imageHeight: 180,
        resizeMode:"contain",
        title: 'Health / Medical',
        subtitle: 'Abused?',
        titleColor: '#212121',
        subtitleColor: '#fff',
      },
      {
        image: require('../../../assets/hope.jpg'),
        imageWidth: 300,
        imageHeight: 200,
        resizeMode:"contain",
        title: 'There is hope',
        subtitle: 'Abused?',
        titleColor: '#212121',
        subtitleColor: '#fff',
      },
      {
        image: require('../../../assets/hand.jpg'),
        imageWidth: 300,
        imageHeight: 200,
        resizeMode:"contain",
        title: 'Take my hands',
        subtitle: 'Abused?',
        titleColor: '#212121',
        subtitleColor: '#fff',
      },
      {
        image: require('../../../assets/back.jpg'),
        imageWidth: 300,
        imageHeight: 180,
        resizeMode:"contain",
        title: 'We got your back',
        subtitle: 'Abused?',
        titleColor: '#212121',
        subtitleColor: '#fff',
      }
  ];
const Slide = ({ item }) => {
   

    return (
        <View style={styles.cover}>
          
                <FadingSlides
                    slides={slides}
                    fadeDuration={1000}
                    stillDuration={1500}
                    height={200}
                    startAnimation={true}
                />
              
        </View>
  


    );
};

export default Slide;