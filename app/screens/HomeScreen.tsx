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
  const [news, setNews] = useState<News[]>([
    { title: "titre", content: "contenu" },
    { title: "titre2", content: "contenu2" },
  ]);

  const { data, isLoading, refresh } = useCatFact();

  // http://localhost:30000/api

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{isLoading ? "Loading..." : data?.fact}</Text>
      <Text>{isLoading ? "" : data?.length}</Text>
      <Button onPress={refresh} title="Refresh" />
      {news.map(({ title, content }) => {
        return (
          <Button
            onPress={() => readContent(content)}
            title={title}
            key={title}
          />
        );
      })}
      <Text>HOME</Text>
    </View>
  );
}

export default HomeScreen;
