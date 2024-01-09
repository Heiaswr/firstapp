import React, { useState } from "react";
import { View, Text, Button } from "react-native";

import News from "../models/News";
import { useCatFact } from "../config/api";
import { useNews } from "../config/api";

function readContent(content: string) {
  console.log(content);
}
function NewsComponent({ title, content }: News) {
  return <Button onPress={() => readContent(content)} title={title} />;
}

/* const useMatthState = () => {
  let value;
  const set = (val) => value = val
  return [value, set]
} */

function HomeScreen(props) {
  /* const [news, setNews] = useState<News[]>([
    { title: "titre", content: "contenu" },
    { title: "titre2", content: "contenu2" },
  ]); */

  const { data, isLoading, refresh } = useNews();
  //const { data, isLoading, refresh } = useCatFact();

  // http://localhost:30000/api

  console.log(data);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text>{isLoading ? "Loading..." : data?.fact}</Text>
      <Text>{isLoading ? "" : data?.length}</Text>
      <Button onPress={refresh} title="Refresh" /> */}
      {data.map(({ title, content }) => {
        return (
          <View>
            <Text>{isLoading ? "Loading..." : title}</Text>
            <Text>{isLoading ? "" : content}</Text>
            <Button onPress={refresh} title="Refresh" key={title} />
          </View>
        );
      })}
      <Text>HOME</Text>
    </View>
  );
}

export default HomeScreen;
