import { View, ActivityIndicator, StyleSheet } from "react-native"

const Loader = () => {
  return (<View style={styles.loader}>
    <ActivityIndicator size='large' />
  </View>)
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Loader