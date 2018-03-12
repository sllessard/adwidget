(function () { 

  //Sample configurable options for widget to be set by client. 
  let widgetConfig = {
    //adStyle Options: leaderboard (728x90), medium(300x250)
    adStyle: 'medium',
    background: 'lightblue',
    successMessage: 'Thank you. You will receive your quotes within one business day.'
  };

  const container = document.getElementById('ireloWidget');
  const widgetAdStyle = widgetConfig.adStyle;

  //Inline styles for elements integrated into the DOM.
  let styles = {
    //Style settings for the basic configuration.
    widgetFoundation: 'position: relative; margin: auto; border: 1px solid black; overflow: auto; padding: 1.25%; background: ' + widgetConfig.background + '',
    //Style settings for the leaderboard configuration.
    leaderboard: {
      base: 'width: 728px; height: 90px;',
      divs: 'width: 25%; display: block; float: left; height: 100%;',
      paragraph: 'display: none;',
      logo: 'display: block; width: 75%; margin: 0 2.5% 0 0; height: auto; position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%);',
      button: 'display: block; position: relative; top: 50%; transform: translateY(-50%); cursor: pointer;',
      form: 'display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(248, 248, 255, 1); padding: 1.25%;',
      label: 'display: inline-block;',
      inputs: 'margin: 0 1.25% 0 0; display: inline-block;',
      submit: 'display: inline-block; position: relative; cursor: pointer;'
    },
    //Style settings for the medium configuration.
    medium: {
      base: 'width: 300px; height: 250px;',
      divs: 'padding: 2.5%;',
      paragraph: 'display: inline-block; width: 63%; font: normal 12px sans-serif;',
      logo: 'display: block; float: left; width: 30%; margin: 0 2.5% 0 0; height: auto;',
      button: 'display: block; margin: 10% auto 0 auto; cursor: pointer;',
      form: 'display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(248, 248, 255, 1); padding: 3.75%;',
      label: 'display: block;',
      inputs: 'margin: auto; display: block;',
      submit: 'display: block; position: relative; margin: 10% auto 0 auto; cursor: pointer;'
    },
  };

  let widgetHtml = //Create initial layout with button and form.
    '<button id="ireloWidgetButton" style="' + styles[widgetAdStyle].button + '"">' +
      'Get More Quotes'+
    '</button>' +
    '<form id="ireloWidgetForm" style="' + styles[widgetAdStyle].form + '" method="post">' +
      '<p id="form__directions" style="font-size: 12px;">' +
        'Enter your email or telephone to receive your quotes' +
      '</p>' +
      '<label for="form__email" style="'+ styles[widgetAdStyle].label + '">Email:</label>' +
      '<input id="form__email" type="email" placeholder="name@example.com" style="' + styles[widgetAdStyle].inputs + '">' +
      '<label for="form__telephone" style="' + styles[widgetAdStyle].label + '">Telephone:</label>' +
      '<input id="form__telephone" type="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" style="' + styles[widgetAdStyle].inputs + '">' +
      '<input style="' + styles[widgetAdStyle].submit + '" type="submit" value="Request quotes" style="margin: auto; display: block;">' +
    '</form>';

  //Sample transporter array for test use.
  let transporters = [
  {
    company: 'Atlas',
    description: 'With Atlas, there are several ways to begin your move.',
    src: 'https://www.atlasvanlines.com/App_Themes/AVL/images/header-logo.png'
  },
  {
    company: 'Allied',
    description: 'We\'ll save you money and stress when it comes to moving.',
    src: 'https://moving.allied.com/assets/global/logos/_logo-allied.svg'
  },
  {
    company: 'North American Moving Services',
    description: 'We\'ve helped people who move for 80 years. Now, let us help you.',
    src: 'https://moving.northamerican.com/assets/global/logos/NAVL_MS_logo.svg'
  }
  ];

  //Initializ div update when #ireloWidget exists.
  (function initialize() {
    let containerStyle = styles[widgetAdStyle].base + styles.widgetFoundation;

    if (container) {
      container.setAttribute('style', containerStyle);
      container.innerHTML = widgetHtml;
      displayTransporters();
      document.getElementById('ireloWidgetButton').addEventListener('click', function(){
        document.getElementById('ireloWidgetForm').style.display = 'block';
        document.getElementById('ireloWidgetForm').addEventListener('submit', sendData);
      });
    }
  })();

  function displayTransporters () {
    transporters.forEach(function(transporter){

      let transporterDiv = document.createElement('div');
      transporterDiv.setAttribute('style', styles[widgetAdStyle].divs);

      let logoTag = document.createElement('img');
      logoTag.setAttribute('src', transporter.src);
      logoTag.setAttribute('alt', transporter.company + ' logo');
      logoTag.setAttribute('style', styles[widgetAdStyle].logo);


      let descriptionTag = document.createElement('p');
      let descriptionContent = document.createTextNode(transporter.description);
      descriptionTag.appendChild(descriptionContent);
      descriptionTag.setAttribute('style', styles[widgetAdStyle].paragraph);

      container.prepend(transporterDiv);
      container.firstChild.appendChild(logoTag);
      container.firstChild.appendChild(descriptionTag);
      
    });
  }

  function submissionComplete() {
    container.innerHTML = widgetConfig.successMessage;
  }

  function sendData(e) {
    e.preventDefault();
    let emailEntry = e.target[0].value;
    let telEntry = e.target[1].value;
    let telSubmit = telEntry.replace(/-/g, "");
    let $accessUrl = 'https://www.example.com';
    let $authKey = 'your authorization';
    let request = new XMLHttpRequest();
    request.open('POST', $accessUrl, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.setRequestHeader('Authorization', $authKey);

    if (emailEntry) {
      console.log('Email: ' + emailEntry);
      let data = 'verify=' + emailEntry;
      request.send(data);
    } else if (telEntry) {
      console.log('Telephone: ' + telSubmit);
      let data ='&verify=' + telSubmit;
      request.send(data);
    } else {
      document.getElementById('form__directions').style.color = 'red';
    }

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var response = request.responseText;
        console.log(response);
        submissionComplete();
      } else {
        // We reached our target server, but it returned an error
        console.log('error: ' + response);
      }
    };

    request.onerror = function() {
      // There was a connection error
      console.log('Connection error');
    };
  }
})();
