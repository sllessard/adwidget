# Adwidget
Embeddable JavaScript advertising widget with customizable configurations.

## Setup
Download JavaScript file and add script tag:

`<script src="adwidget.js" async></script>`

Include HTML where the ad will be displayed:

`<div id="ireloWidget"></div>`

*The widget with center itself inside containter for #ireloWidget.

## Configuration
adwidget.js can use the following settings:
```
widgetConfig = {  
adStyle: 'medium', //Options: leaderboard (728x90), medium(300x250)  
background: 'lightblue', //Control widget background using css background shorthand  
successMessage: 'Thank you!' //Customize the final thank you message displayed upon user submission}
```
