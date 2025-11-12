const arrayImg = [
    "sliki/9db064b010e3780023ce12f2b143847c-AdobeStock_141426708.jpeg",
    "sliki/best-time-of-year-to-visit-prague-prague-castle-scaled.jpeg",
    "sliki/76-EDB1-scaled.jpg",
    "sliki/china-neon-city-skyscraper-lights-w2l9khmjvdbzdaq4.jpg",
    "sliki/Mosques-in-Istanbul.jpg"
];

let index = 0;
const gallery = document.getElementById("galleryImg");

function nextImg(){
    index++;
    if(index>= arrayImg.length) index = 0;
    gallery.style.opacity = 0;
    setTimeout(() =>{
        gallery.src = arrayImg[index];
        gallery.style.opacity = 1;
    }, 500);
}

setInterval(nextImg, 3000);

const photos = [
    {
        src: "sliki2/01thing-to-do-berlin-top-bmwg-videoSixteenByNine3000.jpg",
        title: "Berlin",
        desc: "Berlin's high view",
        like: 3,
        comments: []
    },
    {
        src: "sliki2/csm_LU_Tourismus_Winter_05_9af3664a48.jpg",
        title: "Lucern",
        desc: "Lucern's winter beauty",
        like: 6,
        comments: []
    },
    {
        src: "sliki2/best-things-to-do-in-skopje-main-image-hd-op.jpg",
        title: "Skopje",
        desc: "Skopje's squre town",
        like: 19,
        comments: [] 
    },
    {
        src: "sliki2/switzerland-ticino-ascona.jpg",
        title: "Ascona",
        desc: "Ascona's colorful buildings",
        like: 22,
        comments: [] 
    },
    {
        src: "sliki2/0922pom-16-scaled.jpg",
        title: "Budapest",
        desc: "Budapest's city tram",
        like: 34,
        comments: []
    }

];

let current = 0;

const imgElement = document.getElementById("Imgs");
const titleElement = document.getElementById("imgTitle");
const discElement = document.getElementById("imgDesc");
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");
const btnPrev = document.getElementById("prevBtn");
const btnNext = document.getElementById("nextBtn");
const commentInput = document.getElementById("commentText");
const commentList = document.getElementById("commentList");
const postComment = document.getElementById("postComment");

function renderComments(){
    commentList.innerHTML = "";
    photos[current].comments.forEach(c => {
        const div = document.createElement("div");
        div.classList.add("comment");
        div.textContent = c;
        commentList.appendChild(div);
    });
}

function showPhoto(index){
    const photo = photos[index];
    imgElement.src = photo.src;
    likeCount.textContent = photos.likes;
    if (titleElement) titleElement.textContent = photo.title;
    if (discElement) discElement.textContent = photo.desc;
    renderComments();
}

postComment.addEventListener("click", () =>{
    const text = commentInput.value.trim();
    if(text !== ""){
        photos[current].comments.push(text);
        commentInput.value = "";
        renderComments();
    }
});

showPhoto(current);

btnNext.addEventListener("click", () => {
    current++;
    if(current >= photos.length) current = 0;
    showPhoto(current);
});

btnPrev.addEventListener("click", () => {
    current--;
    if(current < 0) current = photos.length;
    showPhoto(current);
});

likeBtn.addEventListener("click", () =>{
    photos[current].like++;
    likeCount.textContent = photos[current].like;
});

document.getElementById('toTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });






