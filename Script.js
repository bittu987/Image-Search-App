let searchInput = document.getElementById("searchInput");
let searchbtn = document.getElementById("searchbtn");
let showData = document.querySelector(".showData");
let morebtn = document.querySelector("#morebtn");

let Acces_key = "c894PCTa_hEG5BkwYZP6PS39saCu6_MBLBbOj9d6VWE";

let page = 1;

const getData = async (searchValue,pageNo)=>{
    let fectching = await fetch(`https://api.unsplash.com/search/photos?query=${searchValue}&per_Page=28&P=${pageNo} age&client_id=${Acces_key}`);
    let jsonData = await fectching.json();

    // showData.innerHTML="";
    if(pageNo ===1){
        showData.innerHTML="";
    }
    if(searchInput.value ===""){
        showData.innerHTML = "<h1>Please enter Something<h1>"
    }
    else{
        document.querySelector(".loadMore").style.display="block";
    }

    jsonData.results.forEach((data)=>{
        console.log(data);
         
        let div = document.createElement("div");
        div.classList.add("card");
        showData.appendChild(div);

        div.innerHTML = `
        <img src=${data.urls.small} alt="">
        <a href=${data.links.html} target="_blank">${data.alt_description}</a>
        `
    })

    
   
}

searchbtn.addEventListener('click',()=>{
    let searchValue = searchInput.value;
    getData(searchValue,1);
})

morebtn.addEventListener('click',()=>{
    let searchValue = searchInput.value;
    getData(searchValue,page++);
})