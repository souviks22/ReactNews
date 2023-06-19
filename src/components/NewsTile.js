import { View, Image, Text, StyleSheet } from 'react-native';

const NewsTile = ({ item: newsItem }) => {
  const { title, summary, media, published_date } = newsItem
  return (<View style={styles.container}>
    <Image
      defaultSource={require('../../assets/react-icon.png')}
      source={{ uri: media ? media : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }}
      style={styles.image}
    />
    <View style={styles.textContainer}>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <Text style={styles.summary} numberOfLines={2}>{summary}</Text>
      <Text style={styles.date}>{published_date}</Text>
    </View>
  </View>)
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
    paddingHorizontal: 10
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  summary: {
    color: 'grey',
    fontSize: 10
  },
  date: {
    fontSize: 10,
    marginTop: 10
  }
});

export default NewsTile