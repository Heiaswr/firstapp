import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  ScrollView,
  Alert,
  Pressable,
  Modal,
} from "react-native";

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
  const [modalVisible, setModalVisible] = useState(false);
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
    <SafeAreaView style={styles.newsContainer}>
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
      {/* <ScrollView>
        {mockNews.map(({ id, title, content }) => {
          return (
            // TODO Gérer le "important" paramètre
            <Pressable
              style={styles.newsComponent}
              onPress={() => {
                pressed(title, content);
              }}
              key={id}
            >
              <View>
                <Text style={styles.newsTitle}>{title}</Text>
                <Text>{content}</Text>
              </View>
            </Pressable>
          );
        })}
        <Text>HOME</Text>
      </ScrollView> */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </SafeAreaView>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
