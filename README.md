# Adwidget
Embeddable JavaScript advertising widget with customizable configurations.

## Setup
Download JavaScript file and add script tag:

`<script src="adwidget.js" async></script>`

Include HTML where the ad will be displayed:

`<div id="ireloWidget"></div>`

*The widget with center itself inside containter for #ireloWidget.*

## Configuration
In adwidget.js widgetConfig can use the following settings:
```
let widgetConfig = {  
adStyle: 'medium',  
background: 'lightblue',
successMessage: 'Thank you!'}
```
### adStyle
Provides two settings for the widget format, medium rectangle (300x250) and leaderboard (728x90). 
### background
Using CSS background shorthand property the widget's base background can be modified.
### successMessage
The final success message displayed after the user has successfully submit their information can be modified to any string.
