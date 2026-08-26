import React, {useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, useWindowDimensions
 } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import {songs} from '../model/data';

import color from '../theme/color';

export default function MusicPlayer() {
  const { width } = useWindowDimensions();
  const [selectIndex, setSelectIndex] = useState(0);

  const currentsong = songs [selectIndex];
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
      <View style={styles.header}>
        <Text style={styles.eyebrow}>TOCANDO AGORA</Text>
        <Text style={styles.counter}>
          {selectIndex + 1} de {songs.length}
        </Text>
        <Text style={styles.description}>
          Nosso player começa aqui
        </Text>
      </View>

      <FlatList
        data={songs}
        horizontal
        pagingEnabled
        renderItem={renderArtwork}
        keyExtractor={(item) => String(item.id)}
        showHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumEnd}
      />



      <View style={styles.metadata}>
        <Text style={styles.songTitle}>{currentsong.title}</Text>
        <Text style={styles.songArtist}>{currentsong.artist}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background
  },

  header: {
    height: 70,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

  counter: {
    color: color.textSecondary,
    fontSize: 12,
  },


  title: {
    marginTop: 8,
    color: color.text,
    fontSize: 32,
    fontWeight: 800
  },
  description: {
    marginTop: 10,
    color: color.textSecondary
  },
  artworkPage: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  artwork: {
    borderRadius: 24
  },
  metadata : {
    minHeight: 110,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  songTitle: {
    color: color.text,
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center'
  },
  songArtist: {
    marginTop: 6,
    color: color.textSecondary,
    fontSize: 14
  }
})