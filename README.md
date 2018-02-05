# Adwidget
Embeddable JavaScript advertising widget with customizable configurations.

## Setup
Download JavaScript file and add script tag:

`<script src="adwidget.js" async></script>`

Include HTML where the ad will be displayed:

`<div id="ireloWidget"></div>`

*The widget with center itself inside containter for #ireloWidget.*

## Configuration
adwidget.js can use the following settings:
```
widgetConfig = {  
//leaderboard (728x90) or medium(300x250)
adStyle: 'medium',  
//CSS background shorthand 
background: 'lightblue',
//Final thank you message string
successMessage: 'Thank you!'}
```
