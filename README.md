
Newtab
===================

This project is a simple page that aims to make our life easier organizing user's shortcuts in a beautiful way. Shortcuts are directly in HTML because the goal is a fast load page.

It is useful to access websites that you frequently use, it is easier than using "Favorites page" on the browser. In this way you save time to do others amazing stuff.

Functionalities
-------------

 - Simple and beautiful design page
 - Some useful information such as current temperature and time
 - Group your shortcuts by category
 - Change background image to one you like

Initial configuration
-------------

You just need to set up some variables

    //Initial Configuration
    config.name = "Daniel";
    config.weather.appid = "YOUR_APPID_HERE"; //Get your APPID for free on https://openweathermap.org/
    config.weather.cityId = "CITY_ID_HERE"; //Your City ID here https://openweathermap.org/city (id will be on URL when you search your city)
    config.weather.lang = "pt";//For english use 'en'

## Grunt [Important]
You can see that there is a Gruntfile.js on the project. On this file I set up Grunt Watch, CSSmin and Uglify. So you can see that in **index.html** I am using minified files, to speed up the loading time. So Grunt is the responsible for generating this files. Before you edit the JS files or CSS, you just run on the terminal insite the project's folder:

    grunt

This will execute, CSSmin, Uglify and Watch, and every change you make on files will trigger Uglify or CSSmin automatically.

 If you forgot to run **grunt** just run it now. It will make all the magic happens.


Adding a new shortcut/app
-------------

To add a new shortcut/app you must follow this syntax:

    <li class="itemList" id="item#"><!-- Change # for the id -->
       <a href="link_to_the_shortcut">
          <div class="wrapIcon"><!-- Image or icon here --></div>
          <div class="nameApp"><!-- Shortcut's name --></div>
       </a>
    </li>
You must place your shortcut inside **ul.listApps**
It will only be displayed after you set the shortcut up on the index.js. So if your new shortcut has the id as **item42** and it is related to the Developer group you wold place it into the array, like this:

    groups[2] = [3,4,5,6,7,11,8,9,14,42];//Developer group

You just need to place the number at the end of the array. You can also place it before others ID in order to show this shortcut first. If I do this:

    groups[2] = [42,3,4,5,6,7,11,8,9,14];//Developer group

My #item42 will be the first shortcut at Developer's group

<i class="icon-cog"></i>Getting Started
-------------

 1. Access extensions settings page, enable developer mode and load **manifest.json** that can be founded in the project's folder. That's it.

The extension you added will call up our page to be displayed whenever a new tab is created.

Result
----------


 If you did everything correctly, you may see something like this:
 ![página Newtab](https://i.imgur.com/x6DsfBl.png)
