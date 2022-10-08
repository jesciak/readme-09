var requestUrl = 'https://api.github.com/licenses';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then (function(data){
    console.log (data)
    for (var i=0; i < data.length; i++){

    }

  });