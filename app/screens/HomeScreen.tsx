import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import News from "../models/News";
import { useCatFact } from "../config/api";
import { useNews } from "../config/api";
import useDebug from "../hooks/useDebug";
import mockNews from "../mock/news.json";
import colors from "../config/colors";

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

  // A remettre quand j'aurai corrigé l'appel API
  //const { data = [], isLoading, refresh } = useNews();
  //const { data, isLoading, refresh } = useCatFact();

  // http://localhost:30000/api

  //useDebug(data);
  return (
    <View style={styles.newsContainer}>
      {/* <Text>{isLoading ? "Loading..." : data?.fact}</Text>
      <Text>{isLoading ? "" : data?.length}</Text>
      <Button onPress={refresh} title="Refresh" /> */}
      {/* Remettre après avoir corrigé l'appel API
      {data.map(({ title, content }) => { 
        return (
          <View>
            <Text>{isLoading ? "Loading..." : title}</Text>
            <Text>{isLoading ? "" : content}</Text>
            <Button onPress={refresh} title="Refresh" key={title} />
          </View>
        );
      })}  */}
      {mockNews.map(({ title, content }) => {
        return (
          // TODO Gérer le "important" paramètre
          <View style={styles.newsComponent}>
            <Text style={styles.newsTitle}>{title}</Text>
            <Text>{content}</Text>
            <Button title="Refresh" key={title} />
          </View>
        );
      })}
      <Text>HOME</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  newsComponent: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 3,
    margin: 10,
  },
  newsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  newsContent: {},
  newsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
