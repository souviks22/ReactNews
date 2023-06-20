import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';

const NewsTile = ({ item: newsItem }) => {
  const { title, summary, media, published_date } = newsItem
  const [date, time] = published_date.split(' ')
  return (<TouchableOpacity style={styles.container}>
    <Image
      defaultSource={require('../../assets/react-icon.png')}
      source={{ uri: media || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }}
      style={styles.image}
    />
    <View style={styles.textContainer}>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <Text style={styles.summary} numberOfLines={2}>{summary}</Text>
      <View style={styles.dateContainer}>
        <Entypo name='calendar' size={10} color='#113' />
        <Text style={styles.datetime}>{date}</Text>
        <AntDesign name='clockcircle' size={9} color='#113' />
        <Text style={styles.datetime}>{time}</Text>
      </View>
    </View>
  </TouchableOpacity>)
}

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row'
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    marginBottom: 5,
    fontWeight: 'bold'
  },
  summary: {
    color: 'grey',
    fontSize: 10,
    fontWeight: 'bold'
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  datetime: {
    color: '#113',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 3,
    marginRight: 7
  }
});

export default NewsTile