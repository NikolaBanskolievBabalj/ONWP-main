function goToBlog(e){
    const user = document.getElementById('user_name');
    const pass = document.getElementById('password');

    if(user && pass){
        window.location.href = "blog.html";
    } else{
        alert("Please enter username and password!");
    }
}  

document.getElementById('toTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
