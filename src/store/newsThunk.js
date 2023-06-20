import { newsActions } from "./newsSlice"

const fetchNews = (page) => {
  return (dispatch) => {
    const fetchArticles = async () => {
      dispatch(newsActions.request({ page }))
      const response = await fetch(`https://api.newscatcherapi.com/v2/latest_headlines?lang=en&page_size=20&page=${page}`, {
        headers: {
          'x-api-key': 'I5L0g27wxzfUuLRFnB7MK_ZQRHQEWmsD_ywZ-8ogv2Y'
        }
      })
      const { articles, message } = await response.json()
      if (!articles) {
        dispatch(newsActions.failure({ error: { message } }))
      }
      else if (articles.length) {
        dispatch(newsActions.success({ articles }))
      } else {
        dispatch(newsActions.endNews())
      }
    }
    try {
      fetchArticles()
    } catch (error) {
      dispatch(newsActions.failure({ error }))
    }
  }
}

export default fetchNews