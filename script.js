

$.ajax({
    url: 'http://localhost/News-website/news-website-backend/index_api.php',
    method: 'GET',
    dataType: 'json',
    success: (response) => {
        const DATA = response;
        console.log("data entered");
        console.log(DATA);
        let box = $('#box');

        $.each(DATA, (i, data) => {
        let h2 = $('<h2>').text(data.title);
        let p = $('<p>').text(data.body);
        let h4 = $('<h4>').html('Created by <span>' + data.author_name + '</span>');
        box.append(h2, p, h4);
        });
      
        console.log("data finished");
    },
    error: function(error) {
        console.log(error);
    }
  });
  


