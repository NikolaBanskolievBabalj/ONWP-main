const commentText = document.getElementById("comment-text");
const post = document.getElementById("addItem");
const commentList = document.getElementById("comment-list");
const comments = [];

function renderComments(){
    commentList.innerHTML = "";

    comments.forEach((text) => {
        const div = document.createElement("div");
        div.classList.add("comment");

        const span = document.createElement("span");

        const btn = document.createElement("button");
        btn.textContent = "🗸";
        btn.style.marginLeft = "10px";

        btn.addEventListener("click", () => {
            if (span.style.textDecoration === "line-through") {
                span.style.textDecoration = "none";
            } else {
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
    if (text !== ""){
        comments.push(text);
        commentText.value = "";
        renderComments();
    }
});

renderComments();
