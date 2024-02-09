type News = {
  id: number,
  title: string,
  content: string,
  size?: string,
  important: boolean,
  
}

function createShort(text: String){
  var returnText = text
  if(text.length>20){
    returnText = text.substring(0,20) + "(...)"
  }

  return returnText

}

function readNews(news: News) {
  console.log(news.title)
}


//const news: News = {title: "Title", content: "Content", important: true, readNews}

export default News;