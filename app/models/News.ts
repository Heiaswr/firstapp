type News = {
  title: string,
  content: string,
  size?: string,
  important: boolean,
  
}

function readNews(news: News) {
  console.log(news.title)
}


//const news: News = {title: "Title", content: "Content", important: true, readNews}

export default News;