const loadNews = (search) =>{
    url = `https://openapi.programming-hero.com/api/news/category/${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

loadNews('01');