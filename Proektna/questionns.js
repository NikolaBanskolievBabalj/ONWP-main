

const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria",
  "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
  "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi",
  "Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia",
  "Comoros","Congo (DRC)","Congo (Republic)","Costa Rica","Côte d’Ivoire","Croatia","Cuba","Cyprus",
  "Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador",
  "Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia",
  "Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti",
  "Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica",
  "Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon",
  "Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia",
  "Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova",
  "Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands",
  "New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan","Palau","Panama",
  "Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda",
  "Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino",
  "São Tomé and Príncipe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia",
  "Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka",
  "Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste",
  "Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine",
  "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City",
  "Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];

const cities = [
  "Kabul","Tirana","Algiers","Andorra la Vella","Luanda","Buenos Aires","Yerevan","Canberra","Vienna",
  "Baku","Nassau","Manama","Dhaka","Bridgetown","Minsk","Brussels","Belmopan","Porto-Novo","Thimphu",
  "Sucre / La Paz","Sarajevo","Gaborone","Brasília","Bandar Seri Begawan","Sofia","Ouagadougou","Gitega",
  "Phnom Penh","Yaoundé","Ottawa","Praia","Bangui","N'Djamena","Santiago","Beijing","Bogotá",
  "Moroni","Kinshasa","Brazzaville","San José","Yamoussoukro","Zagreb","Havana","Nicosia",
  "Prague","Copenhagen","Djibouti","Roseau","Santo Domingo","Quito","Cairo","San Salvador",
  "Malabo","Asmara","Tallinn","Mbabane","Addis Ababa","Suva","Helsinki","Paris","Libreville","Banjul",
  "Tbilisi","Berlin","Accra","Athens","St. George's","Guatemala City","Conakry","Bissau","Georgetown","Port-au-Prince",
  "Tegucigalpa","Budapest","Reykjavik","New Delhi","Jakarta","Tehran","Baghdad","Dublin","Jerusalem","Rome","Kingston",
  "Tokyo","Amman","Astana (Nur-Sultan)","Nairobi","Tarawa","Kuwait City","Bishkek","Vientiane","Riga","Beirut",
  "Maseru","Monrovia","Tripoli","Vaduz","Vilnius","Luxembourg City","Antananarivo","Lilongwe","Kuala Lumpur",
  "Malé","Bamako","Valletta","Majuro","Nouakchott","Port Louis","Mexico City","Palikir","Chișinău",
  "Monaco","Ulaanbaatar","Podgorica","Rabat","Maputo","Naypyidaw","Windhoek","Yaren","Kathmandu","Amsterdam",
  "Wellington","Managua","Niamey","Abuja","Skopje","Oslo","Muscat","Islamabad","Ngerulmud","Panama City",
  "Port Moresby","Asunción","Lima","Manila","Warsaw","Lisbon","Doha","Bucharest","Moscow","Kigali",
  "Basseterre","Castries","Kingstown","Apia","San Marino","São Tomé","Riyadh","Dakar","Belgrade","Victoria",
  "Freetown","Singapore","Bratislava","Ljubljana","Honiara","Mogadishu","Pretoria","Seoul","Juba","Madrid","Colombo",
  "Khartoum","Paramaribo","Stockholm","Bern","Damascus","Taipei","Dushanbe","Dodoma","Bangkok","Dili",
  "Lomé","Nukuʻalofa","Port of Spain","Tunis","Ankara","Ashgabat","Funafuti","Kampala","Kyiv",
  "Abu Dhabi","London","Washington, D.C.","Montevideo","Tashkent","Port Vila","Vatican City",
  "Caracas","Hanoi","Sana’a","Lusaka","Harare"
];

const select = document.getElementById("country");
countries.forEach(c =>{
    const o = document.createElement("option");
    o.value = c;
    o.textContent = c;
    select.appendChild(o);
});

const selectCity = document.getElementById("city");
cities.forEach(x=>{
    const y = document.createElement("option");
    y.value = x;
    y.textContent = x;
    selectCity.appendChild(y);
});

const commentText = document.getElementById("commentText");
const commentList = document.getElementById("commentList");
const commentPost = document.getElementById("postComment");
const usernameEl  = document.getElementById("username");
const comments = [];

function escapeHTML(s){
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

function fmt(ts){
  const d = new Date(ts);
  return d.toLocaleString();
}

function renderComments(){
    commentList.innerHTML = "";
    comments.forEach(text =>{
        const div = document.createElement("div");
        div.classList.add("comment");
        div.innerHTML = `<strong>${escapeHTML(text.user)}</strong>: ${escapeHTML(text.text)} <span style="opacity:.6;font-size:12px;">· ${fmt(text.ts)}</span>`;
        commentList.appendChild(div);
    })
}

commentPost.addEventListener("click", () =>{
    const user = usernameEl.value.trim() || "Anonymous";
    const text = commentText.value.trim();
    if(text !== ""){
        comments.push({ user, text, ts: Date.now() });
        commentText.value = "";
        renderComments();
    }
});

renderComments();

document.getElementById('toTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
