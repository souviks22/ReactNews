import { View, Text, ActivityIndicator, StatusBar, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

const Footer = () => {
  const { isNewsEnd, isMoreLoading } = useSelector(state => state.news)
  return (<View style={styles.footer}>
    {isMoreLoading && <ActivityIndicator />}
    {isNewsEnd && <Text>No more articles at the moment</Text>}
  </View>)
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: StatusBar.currentHeight
  }
})

export default Footer