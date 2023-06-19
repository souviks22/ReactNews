import { View, Text, Button, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import fetchNews from "../store/newsThunk"

const Empty = () => {
  const dispatch = useDispatch()
  const refreshHandler = () => {
    dispatch(fetchNews(1))
  }
  return (<View style={styles.empty}>
    <Text style={styles.feedback}>No Data at the moment</Text>
    <Button onPress={refreshHandler} title='Refresh' />
  </View>)
}

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  feedback: {
    fontSize: 15,
    marginBottom: 10
  }
})

export default Empty