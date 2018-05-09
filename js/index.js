$(document).ready(function(){
    weather();//Update the weather
    $('#search-input').focus();
    var seed = Math.floor((Math.random() * 10) + 1);
    if(seed%2 == 0){
        $('.salutations').text("Glad you're back Daniel!");
    } else {
        $('.salutations').text("Welcome back Daniel!");
    }
    var el = document.querySelector('.appsContainer');
    SimpleScrollbar.initEl(el);
});

$('#search-input').keypress(function(event){
    if(event.which == 13){
        search();
    }
});

$('#go_search').click(search);

function search(){
    var term = encodeURIComponent($('#search-input').val());
    var url = "https://www.google.com/search?q="+term;
    window.location = url;
}

var json;

function weather(){
    $.ajax({
        dataType: "json",
        url: "http://api.openweathermap.org/data/2.5/weather",
        data: {APPID: '9f47d6183a09519ee3d17a5e1f679c4b',id: '3455161', lang: 'pt'},
        success: function(response){
            var temperature = Math.round(parseFloat(response.main.temp) - 273.15);//Kelvin to Celsius
            $('#tempValue').text(temperature);
            json = response;
        }
    });
}
