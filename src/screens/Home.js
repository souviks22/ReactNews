import { useState, useEffect } from 'react'
import { SafeAreaView, FlatList, StatusBar, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import fetchNews from '../store/newsThunk'
import Loader from '../components/Loader'
import NewsTile from '../components/NewsTile'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Empty from '../components/Empty'
import Error from '../components/Error'

const Home = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch()
  const { newsData, isNewsEnd, isLoading, isMoreLoading, loadingError } = useSelector(state => state.news)

  useEffect(() => {
    dispatch(fetchNews(page))
  }, [page, fetchNews])

  const fetchMoreData = () => {
    if (!isNewsEnd && !isMoreLoading) {
      setPage(page => page + 1)
    }
  }

  return (<SafeAreaView style={styles.container}>
    {loadingError ? <Error message={loadingError.message} /> :
      isLoading ? <Loader /> :
        <FlatList
          data={newsData}
          renderItem={NewsTile}
          contentContainerStyle={styles.flatlist}
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
          ListEmptyComponent={Empty}
          onEndReached={fetchMoreData}
          onEndReachedThreshold={0.3}
        />
    }
  </SafeAreaView>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  flatlist: {
    flexGrow: 1
  }
})

export default Home