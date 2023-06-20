import { Text, StyleSheet, View } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (<View style={styles.header}>
    <FontAwesome5 name="react" size={30} color="black" />
    <Text style={styles.headerText}>React News</Text>
  </View>)
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 10
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 5
  }
})

export default Header