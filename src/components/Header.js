import { Text, StyleSheet } from "react-native"

const Header = () => {
  return (<Text style={styles.header}>React News</Text>)
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: '700',
    marginVertical: 15,
    marginHorizontal: 10
  }
})

export default Header