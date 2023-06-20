import { View, Text, Button, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import fetchNews from "../store/newsThunk"

const Error = ({ message }) => {
  const dispatch = useDispatch()
  const refreshHandler = () => {
    dispatch(fetchNews(1))
  }
  return (<View style={styles.error}>
    <Text style={styles.feedback}>{message}</Text>
    <Button onPress={refreshHandler} title='Retry' />
  </View>)
}

const styles = StyleSheet.create({
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  feedback: {
    fontSize: 15,
    marginBottom: 10
  }
})

export default Error