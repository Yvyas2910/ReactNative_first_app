import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://www.realtechnitex.com/wp-content/uploads/2022/03/Non-Woven-Fabric-1.jpg",
    "https://www.realtechnitex.com/wp-content/uploads/2022/05/IMG_20220512_151017_cleanup.jpg",
    "https://www.realtechnitex.com/wp-content/uploads/2022/05/IMG_5008-min-scaled.jpg"
  ];

  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={"#13274f"}
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{ borderRadius: 6, width: "94%" }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
