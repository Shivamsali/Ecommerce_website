const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
        <img src="images/main-logo.png" class="brand-logo" alt="">
        <div class="nav-items">
           <div class="search">
               <input type="text" class="search-box" placeholder="search brand, product">
              <button class="search-btn"><a href="search.html">search</a></button>
          </div>
          <a href="#"><img src="images/user.png" alt=""></a>
         <a href="#"><img src="images/cart.png" alt=""></a>

         <a >
            <i class="bi bi-geo-alt-fill" onload="geolocation()"></i>
            <p id="location"></p>
            <p id="weatherOut"></p>
         </a>

         <a >
            <i class="bi bi-brightness-high-fill" id="toggleDark"></i>
         </a>

        </div>
        </div>

        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">men</a></li>
            <li class="link-item"><a href="#" class="link">kids</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>
    `;
}

createNav();


let x = document.getElementById('location');
let y = document.getElementById('weatherOut');
window.onload = geolocation()
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        x.innerText = 'Geo Not supported';
    }
}
function showPosition(data){
    console.log(data)
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
                //api calling
                fetch(url,{method:'GET'})
                //return promise
                .then((res) => res.json())
                //resolve promise
                .then((data) => {
                    console.log(data)
                    let cityName = data.city.name
                    let temp = data.list[0].temp.day
                    x.innerText = `${temp}°C`
                    y.innerText = `${cityName}`
                })
}
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})