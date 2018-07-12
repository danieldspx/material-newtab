var groups = [];
var config = [];
config.weather = [];

//Initial Configuration
config.name = "Daniel";
config.weather.appid = "YourAPIKeyHere"; //Get your APPID for free on https://openweathermap.org/
config.weather.cityId = "3455161"; //Your City ID here https://openweathermap.org/city (id will be on URL when you search your city)
config.weather.lang = "pt";//For english use 'en'

//Add the item id, in HTML you have #item1 so its id here is just 1
groups[1] = [1,2,3,4,6,7,8,12,13,22];//Starred group
groups[2] = [3,4,5,6,7,11,8,9,14,10,15,20];//Developer group
groups[3] = [16,1,17,18,19];//Entertainment group
groups.activated = "0";


$(document).ready(function(){
    weather();//Update the weather
    $('#search-input').focus();
    var seed = Math.floor((Math.random() * 10) + 1);
    if(seed%2 == 0){
        $('.salutations').text("Glad you're back "+config.name+"!");
    } else {
        $('.salutations').text("Welcome back "+config.name+"!");
    }
    var el = document.querySelector('.appsContainer');
    SimpleScrollbar.initEl(el);//Initialize scrollbar
    activateGroup(document.getElementById('group1'));//Activate first group when page is loaded
});

$('#search-input').keypress(function(event){//Start searching with enter key
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
        data: {APPID: config.weather.appid,id: config.weather.cityId, lang: config.weather.lang},
        success: function(response){
            var temperature = Math.round(parseFloat(response.main.temp) - 273.15);//Kelvin to Celsius
            $('#tempValue').text(temperature);
            json = response;
        }
    });
}

function activateGroup(element){//Enable icon group tab
    $(".groupActivated").removeClass('groupActivated');
    $(element).toggleClass('groupActivated');
    var id = $(element).attr('id').replace('group','');
    console.log(groups);
    if(groups.activated != id){
        if(groups.activated != 0){
            groups[groups.activated].forEach(function(entry){//Old group, set to display none
                $('#item'+entry).css('display','none');
            });
        }
        groups[id].forEach(function(entry){//New group, set to display block
            $('#item'+entry).css('display','block');
        });
        groups.activated = id;
    }
}

$(".groupItem").click(function(element){//Trigger to activate icon group tab
    if($(element.target).hasClass('mdi')){
        activateGroup($(element.target).parent());
    } else {
        activateGroup(element.target);
    }
});
//ola
