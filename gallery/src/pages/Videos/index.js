import React, { useState, useEffect } from "react";
import api from "../../services/index";
import { Image, View, FlatList, Dimensions } from "react-native";
import { Video } from "expo-av";

const Videos = () => {
  const [data, setData] = useState([]);
  const { width } = Dimensions.get("window");

  useEffect(() => {
    async function getData() {
      const response = await api.get("videos/search?query=nature");
      const { videos } = response.data;
      setData(videos[0].video_files);
      console.log(videos[0].video_files);
    }
    getData();
  }, []);

  if (!data) return <Text>Carregando...</Text>;

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Video
            source={{ uri: item.link }}
            shouldPlay
            resizeMode="cover"
            style={{ width, height: 300 }}
          />
        )}
      />
    </View>
  );
};

export default Videos;
