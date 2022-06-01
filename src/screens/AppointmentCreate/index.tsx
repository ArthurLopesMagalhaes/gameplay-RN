import {
  View,
  Text,
  ImageBackground,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { GuildProps } from "../../components/GuildItem";

export const AppointmentCreate = () => {
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const handleOpenGuilds = () => {
    setOpenGuildsModal(true);
  };

  const handleGuildSelect = (guildSelect: GuildProps) => {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <Background>
          <Header title="Agendar Partida" />
          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            setCategory={setCategory}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.icon ? <GuildIcon /> : <View style={styles.image} />}
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : "Selecione um servidor"}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.fields}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>
                <SmallInput
                  maxLength={5}
                  placeholder="dd/mm"
                  placeholderTextColor={theme.colors.heading}
                />
              </View>
              <View>
                <Text style={styles.label}>Horário</Text>
                <SmallInput
                  maxLength={5}
                  placeholder="hh/mm"
                  placeholderTextColor={theme.colors.heading}
                />
              </View>
            </View>
            <View style={[styles.fields, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.caracteresLimit}>Max 100 caracters</Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </Background>
      </ScrollView>
      <ModalView visible={openGuildsModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
};
