var groups = [];

groups[1] = [1,2,3,4,6,7,8,12,13];//Favoritos
groups[2] = [3,4,5,6,7,11,8,9,14,10,15,20];//Developers
groups[3] = [16,1,17,18,19];//Entretenimento
groups.activated = "0";

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
    activateGroup(document.getElementById('group1'));
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

function activateGroup(element){//Ativar a aba do grupo de icones
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

$(".groupItem").click(function(element){//Trigger para ativar as abas de icones
    if($(element.target).hasClass('mdi')){
        activateGroup($(element.target).parent());
    } else {
        activateGroup(element.target);
    }
});
