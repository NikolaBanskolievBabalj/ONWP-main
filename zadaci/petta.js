const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", () =>{
    document.body.style.backgroundImage = 'url(china-neon-city-skyscraper-lights-w2l9khmjvdbzdaq4.jpg)';
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
});

btn2.addEventListener("click", () =>{
    document.body.style.backgroundImage = 'url(shutterstock_329662223_ss_non-editorial_3_csm8lw.jpg)';
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
});