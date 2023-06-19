import { newsActions } from "./newsSlice"

const fetchNews = (page) => {
  return (dispatch) => {
    const fetchArticles = async () => {
      dispatch(newsActions.request({ page }))
      const response = await fetch(`https://api.newscatcherapi.com/v2/latest_headlines?lang=en&page_size=20&page=${page}`, {
        headers: {
          'x-api-key': 'xUI3ZLVSWgDA1T_cevBcBvoKknty-FFIKgcKEhY47Nk'
        }
      })
      const { articles } = await response.json()
      if (articles.length) {
        dispatch(newsActions.success({ articles }))
      } else {
        dispatch(newsActions.endNews())
      }
    }
    try {
      fetchArticles()
    } catch (err) {
      dispatch(newsActions.failure({ err }))
    }
  }
}

export default fetchNews