const loadNews = (search) => {
    url = `https://openapi.programming-hero.com/api/news/category/${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data))
}

const displayNews = papers =>{
    // if(papers.lenght > 0){
    //     const found = document.getElementById('found');
    //     found.classList.remove('d-none');
    //     // found.innerText = `${papers.length} items found for this category`
    // }

    const newsSection = document.getElementById('news-section');
    newsSection.innerText = "";
    papers.forEach(paper => {
        
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card mb-12 g-0 " style="max-width: 100%">
            <div class="row ">
                <div class="col-md-4">
                    <img src="${paper.image_url}" class="img-fluid rounded-start m-3" height = "400px" width = "400px" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title m-3">${paper.title}</h4>
                        <p class="card-text m-3 text-secondary">${paper.details.slice(0,500)}...</p>
                        <p class="card-text"><small class="text-body-secondary"></small></p>
                    </div>
                </div>
                <div class = "d-flex details">
                    <div class = "d-flex mx-3 mb-3">
                        <div>
                            <img src = "${paper.author.img}" class = "rounded-circle" height = 50px weight = 50px>
                        </div>
                        <div class = "px-3">
                            <h6>${paper.author.name}</h6>
                            <p>${paper.author.published_date.slice(0,10)}</p>
                        </div>
                    </div>
                    <div class = "d-flex">    
                        <div>
                            <span><i class='fab fa-phabricator' style='font-size:24px color: #234567'></i></span>
                        </div>
                        <div>
                            <p>${paper.total_view}</p>
                        </div>
                    
                    </div>
                    <div>a
                    </div>
                    <div>a
                    </div>
                </div>
            </div>
        </div>
        `
        newsSection.appendChild(div);
    });

}
