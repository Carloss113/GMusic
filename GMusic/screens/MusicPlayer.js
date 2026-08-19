import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import color from '../theme/color';

export default function MusicPlayer() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.eyebrown}>Tocando Agora</Text>
        <Text style={styles.title}>GMusic</Text>
        <Text style={styles.description}> 
            Nosso player começa aqui
        </Text>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})