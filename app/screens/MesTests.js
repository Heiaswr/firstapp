import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";

import colors from "../config/colors";
import Button from "../customs/Button";
import i18n from "../config/localization/i18n";
import { Picker } from "@react-native-picker/picker";
import RankingScreen from "./RankingScreen";

function MesTests(props) {
  const { t } = useTranslation();

  //const [selected, setSelected] = React.useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [lang, setLang] = useState([
    { key: "1", value: "English", short: "en" },
    { key: "2", value: "Français", short: "fr" },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Bienvenue</Text>
      <TextInput
        id="login"
        editable={true}
        placeholder={t("screens.WelcomeScreen.login")}
      />
      <TextInput
        id="password"
        editable={true}
        placeholder={t("screens.WelcomeScreen.password")}
      />
      {/* <SelectList
        search={false}
        placeholder={t("language")}
        setSelected={(val) => setSelected(val)}
        data={lang}
        save="value"
        maxHeight={(lang.length + 1) * 25}
      /> */}

      {
        <Picker
          enabled={true}
          style={styles.picker}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="EN" value="English" />
          <Picker.Item label="FR" value="French" />
        </Picker>
      }

      <View>
        <TouchableOpacity onPress={() => i18n.changeLanguage("en")}>
          <Text>English</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => i18n.changeLanguage("fr")}>
          <Text>French</Text>
        </TouchableOpacity>
      </View>
      {/* <Button style={styles.button} title="Texte" /> */}
    </SafeAreaView>
  );
}

export default MesTests;

function setSelectedLanguage(value) {
  const lang = value.toString();
  i18n.changeLanguage(lang);
}

function changeLanguage(value, lang) {
  lang.array.forEach((element) => {
    if (element.value === value) {
      i18n.changeLanguage(element.short);
    }
  });
  /* switch (lang.key) {
      case "English":
        i18n.changeLanguage("en");
        break;
      case "French":
        i18n.changeLanguage("fr");
        break;
      default:
        i18n.changeLanguage("en");
    } */
  console.log(value);
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.tertiary,
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nav: {
    flex: 1,
    height: 200,
  },
  separator: {},
  text: {
    color: colors.quaternary,
  },
});

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
