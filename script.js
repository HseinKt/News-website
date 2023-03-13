

// console.log("data first");




$(document).ready(() => {
    $.ajax({
        url: "http://localhost/News-website/news-website-backend/index_api.php",
        type: "GET",
        datatype: "JSON",
        success: (data) => {
            let box = $('#box');
            $.each(data,(index,news)=>{
                const title = $('<h2></h2>').text(news.title);
                const body = $('<p></p>').text(news.body);
                const author = $('<h4>created by </h4>').text(news.author_name);
                box.append(title,body,author);
            })
        },
        error: (xhr, status, error) => {
			console.log(error);
		}
    });
})


{/* <h2>title</h2>
            <p>Short paragraph about sport contains all the important and useful information about sport and its importance to the individual and society . Here we will offer you a short paragraph about sport that contains all the information you are looking for.</p>
            <h4>created by <span>hsein</span></h4> */}
