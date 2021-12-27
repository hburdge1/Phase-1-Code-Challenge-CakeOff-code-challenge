

function fetchCakes() {
    fetch('http://localhost:3000/cakes')
    .then(response => response.json())
    .then(data => renderCakes(data));
    }

    function renderCakes(data) {
        const nav = document.querySelector('#cake-list');
        data.forEach((cake => { 
            const liele = document.createElement('li');
            liele.innerHTML = cake.name;
            liele.id = cake.id;
            nav.appendChild(liele);
        document.getElementById(liele.id).addEventListener("click", cakeInfo);
        }))}


    function cakeInfo() {
        let cakeId = this.id;
        fetch("http://localhost:3000/cakes")
        .then(response => response.json())
        .then(data => renderInfo(cakeId, data))
        
        }
        function renderInfo(cakeId, data) {
          
            data.forEach(yum => {
                if(yum.id == cakeId) {
                    const cakeName = document.querySelector('#cake-name');
                     cakeName.innerHTML = document.querySelector('#name')
                     cakePic = document.querySelector('#cake-image')
                     cakePic.src = yum.image_url
                     descripP = document.querySelector('#cake-description')
                     descripP.innerHTML = yum.description

                    const reviewP = document.querySelector('#review-list')
                    const intRev = document.createElement('li')
                    intRev.innerHTML = yum.reviews
                    reviewP.appendChild(intRev)
                }})
            }

    const form = document.querySelector("#review-form");
        form.addEventListener('submit', function (event){
            event.preventDefault();
            const list = document.querySelector("#review-list")
            let li = document.createElement('li')
            let review = document.querySelector('#review')
            li.innerHTML = (`${event.target.value}`)
            list.appendChild(li)

        })
       
       
document.addEventListener('DOMContentLoaded', function() {
            fetchCakes();
            })       
           