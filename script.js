let generateBtn = document.querySelector("#btn");
let memeIMg = document.querySelector("img");
let memeTitle = document.querySelector(".meme-title");
let memeAuthor = document.querySelector(".meme-author");

const updateDetails = (url,title,author) => {
    memeIMg.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
}

const generateMeme = () => {
    fetch(" https://meme-api.com/gimme/wholesomememes")
    .then((res) => {
        if(res.ok){
            res.json()
            .then(data => {
                updateDetails(data.url, data.title, data.author);
            });
        }else{
            console.log("Error:" + res.status);
        }
    })
    .catch(error => {
        console.log("Error:" + error)
    })
}

generateBtn.addEventListener('click', generateMeme);

generateMeme();