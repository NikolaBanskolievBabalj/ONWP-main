const commentList = document.getElementById("comment-list");
const commentText = document.getElementById("comment-text");
const post = document.getElementById("post");
const comments = [];

function renderComments(){
    commentList.innerHTML = "";

    comments.forEach((text) =>{
        const div = document.createElement("div");
        div.classList.add("comment");

        const span = document.createElement("span");
        span.textContent = text;

        const btn = document.createElement("button");
        btn.textContent = "🗸"
        btn.style.marginLeft = "20px";

        btn.addEventListener("click", () =>{
            if(span.style.textDecoration === "line-through"){
                span.style.textDecoration = "none";
            } else{
                span.style.textDecoration = "line-through";
            }
        });

        div.appendChild(span);
        div.appendChild(btn);
        commentList.appendChild(div);
        
    });
}

post.addEventListener("click", () =>{
    const text = commentText.value.trim();
    if(text !== ""){
        comments.push(text);
        commentText.value = "";
        renderComments();
    }
});

var clicks = 0;
const p = document.createElement("p");

post.addEventListener("click", ()=>{
    clicks++;
    p.textContent = clicks;
});
document.body.appendChild(p);

renderComments();