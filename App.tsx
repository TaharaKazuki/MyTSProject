// import { StatusBar } from 'expo-status-bar'
// import { SafeAreaProvider } from 'react-native-safe-area-context'

// import useCachedResources from './hooks/useCachedResources'
// import useColorScheme from './hooks/useColorScheme'
// import Navigation from './navigation'

// export default function App() {
// const isLoadingComplete = useCachedResources()
// const colorScheme = useColorScheme()
// if (!isLoadingComplete) {
//   return null
// } else {
// return (
//   <SafeAreaProvider>
//     <Navigation colorScheme={colorScheme} />
//     <StatusBar />
//   </SafeAreaProvider>
// )
//   return <div>Hello</div>
// }
import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native'
import { colors } from './utils/colors'

export default function App() {
  const [currentSubject, setCurrentSubject] = useState<string>('test')

  return <SafeAreaView style={styles.container}>{!cu}</SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
})
