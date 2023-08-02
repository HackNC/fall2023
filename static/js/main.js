$(document).ready(function () {


    $('.close').on('click', function () {
        $(this).closest('.modal').css("display", "none");
    })

    window.onclick = function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
        }
    }

    var i = -1;     //index of each question in faq.json
    $.getJSON("/static/assets/faq.json", function (data) {
        data.forEach(function (question) {
            
            i++;
            var $header = $('<h2 class="accordion-header">');
            var $faq = $('<div>');
            var $faq_answer = $('<div class="accordion-body">');

            $header.append($('<img>', { "class": "faq-img", "src": "static/assets/images/halloween-art/moon.svg", "alt": "moon" }));
            $header.append($('<p class="faq-question">').html(question['question'+(i%2+1)]));   //gets either question1 or question2 according to the index
            $faq.append($header);

            $faq_answer.append($('<p class="faq-answer">').html(question['answer'+(i%2+1)]));   //similarly gets answer1 or answer2
            $faq.append($faq_answer);

            if(i%2==0){
                $('#faq-column-1').append($faq);
            }
            else{
                $('#faq-column-2').append($faq);
            }

        });
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    //functionality for FAQ accordion dropdown
    $('#faq-container').on('click','.accordion-header', function() {   //selecting #faq-container here since its a parent static element, click() has issues working with dynamic elements
        $(this).next('.accordion-body').slideToggle();
        $('.accordion-body').not($(this).next('.accordion-body')).slideUp();
        $(this).children("img").toggleClass('spin');
        $(this).toggleClass('active');
        $('.accordion-header').not($(this)).removeClass('active');
    });
});
