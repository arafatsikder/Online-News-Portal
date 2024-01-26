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
        <div class="card mb-12 my-5 " style="max-width: 100%">
            <div class="row ">
                <div class="col-md-4">
                    <img src="${paper.image_url}" class="img-fluid rounded-start m-3" height = "400px" width = "400px" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body m-1">
                        <h4 class="card-title ">${paper.title}</h4>
                        <p class="card-text m-3 text-secondary">${paper.details.slice(0,500)}...</p>
                        <p class="card-text"><small class="text-body-secondary"></small></p>
                    </div>
                </div>
                <div class = "d-flex details ">
                    <div class = "d-flex">
                        <div>
                            <img src = "${paper.author.img}" class = "rounded-circle" height = 50px weight = 50px>
                        </div>
                        <div class = "px-3">
                            <h6>${paper.author.name}</h6>
                            <p>${paper.author.published_date.slice(0,10)}</p>
                        </div>
                    </div>
                    <div class = "d-flex g-2">    
                        <div>
                            <p><i class='fab fa-phabricator' style='font-size:24px'></i></p>
                        </div>
                        <div class = "px-2">
                            <p> ${paper.total_view}</p>
                        </div>
                    
                    </div>
                    <div>
                        <b>Rating</b>: 4.5
                    </div>
                    <div class = "mx-5">
                        <a href = "#" class = "arrow" onclick = "displayModal()"><i  data-bs-toggle="modal" data-bs-target="#staticBackdrop" class='fas fa-arrow-right' style='font-size:24px'></i></a>
                    </div>
                </div>
            </div>
        </div>
        `
        newsSection.appendChild(div);
    });

}

const displayModal = () =>{
console.log("button clicked");
}
