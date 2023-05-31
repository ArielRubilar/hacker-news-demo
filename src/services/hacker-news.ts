export const getTopStories = async (page = 1, limit = 10) => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  const data = await response.json()

  const starIndex = (page - 1) * limit
  const endIndex = starIndex + limit
  const pageData = data.slice(starIndex, endIndex)

  return pageData as number[]
}

export const getArticleInfo = async (id: number) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  const data = await response.json()
  return data
}
