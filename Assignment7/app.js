const months = ["January", "February", "March", "April", 'May', "June", "July", 'August', 'September', "October", 'November', "December"]
const weatherText = document.querySelector('.weatherText');

weatherText.addEventListener('keypress', function (e) {
    if (e.which === 13) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherText.value}&units=metric&appid=a1f19373d5db7ea4f02e6e13e614c592`)
            .then((data) => {
                return data.json();
            }).then((data) => {
                if (data.name !== undefined) {
                    let curr = new Date().getDate() + " " + months[new Date().getMonth()] + " ,2021";
                    let temp = `<span class="temp">${data.main.temp} &#176;C</span>`

                    document.querySelector('.city_name').innerHTML = data.name;
                    document.querySelector('.curr_date').innerHTML = curr;
                    document.querySelector('.curr_temp').innerHTML = temp;
                    document.querySelector('.desc').innerHTML = data.weather[0].description;
                    document.querySelector('.icon').src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";;
  
                    let newUrl;
                    switch (data.weather[0].main) {
                        case 'Drizzle':
                            newUrl = "https://images.unsplash.com/photo-1576234699886-7eb7f11aecb7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpenpsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        case 'Clouds':
                            newUrl = "https://images.unsplash.com/photo-1525776759712-7b066ce45de0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGNsb3VkeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        case 'Rain':
                            newUrl = "https://images.unsplash.com/photo-1496034663057-6245f11be793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
                            break;
                        case 'Snow':
                            newUrl = "https://images.unsplash.com/photo-1575631159272-9bc1189389a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c25vd2ZhbGx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        case 'Clear':
                            newUrl = "https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        case 'Thunderstom':
                            newUrl = "https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bmRlcnN0b3JtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        default:
                            newUrl = "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlciUyMHNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                    }
                    document.querySelector('.bg-image').style.backgroundImage = `url("${newUrl}")`
                } else {
                    let curr = `<span>No such Place</span>`;
                    document.querySelector('.card-title').innerHTML = curr;
                }
            }).catch((err) => {
                console.log(err.message);
            })
    }
})