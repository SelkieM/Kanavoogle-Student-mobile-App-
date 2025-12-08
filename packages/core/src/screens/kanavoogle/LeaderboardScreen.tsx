import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const LeaderboardScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <WebView
        style={styles.container}
        source={{
          uri: 'https://selkiem.github.io/Kanavoogle-mobile-app-/HTMLPage2.html',
        }}
        startInLoadingState
      />
    </SafeAreaView>
  )
}

export default LeaderboardScreen
