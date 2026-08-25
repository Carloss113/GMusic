import React, {useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, useWindowDimensions
 } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import {songs} from '../model/data';

import color from '../theme/color';

export default function MusicPlayer() {
  const { width } = useWindowDimensions();
  const [selectIndex, setSelectIndex] = useState(0);

  const currentsong = songs[selectIndex];
  const artworkSize = Math.min(width - 40, 380);


  function handleMomentumEnd(event) {
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / width);
    setSelectIndex(index);
  }


  function renderArtwork({ item }) {
    return (
      <View style={[styles.artworkPage, {width }]}>
        <Image
        source={item.artwork}
          style={[styles.artwork, {width: artworkSize, height: artworkSize },
            
          ]}

        />

      </View>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>TOCANDO AGORA</Text>
        <Text style={styles.title}>GMusic</Text>
        <Text style={styles.description}>
          Nosso player começa aqui
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  eyebrow: {
    color: color.primary,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.8
  },
  title: {
    marginTop: 8,
    color: color.text,
    fontSize: 32,
    fontWeight: 800,
  },
  description: {
    marginTop: 10,
    color: color.textSecondary,
  }
})