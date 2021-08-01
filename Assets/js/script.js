var searchForCity = document.getElementById("searchForCity");
var searchButton = document.getElementById("button");
var key = 'e6d96c29eb6048fbecb24716e7031c31';
var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+searchForCity+'&appid='+key+'';

var responseInfo = document.getElementById("responseInfo");



function getApi (requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            console.log(response);
            if (response.status === 200) {
                response.json().then(function(data) {
                    console.log(data);
                    displayWeather(data, response)

            });
        } return response.json();
    });
}

getApi(requestUrl);

searchButton.addEventListener('click', getApi);

