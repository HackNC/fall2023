$(document).ready(function () {


    $('.close').on('click', function () {
        $(this).closest('.modal').css("display", "none");
    })

    window.onclick = function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
        }
    }

    $.getJSON("/static/assets/faq.json", function (data) {
        data.forEach(function (question) {
            var $header = $('<h2 class="accordion-header">')
            var $faq = $('<div>');
            var $faq_answer = $('<div class="accordion-body">');

            $header.append($('<img>', { "class": "faq-img", "src": "static/assets/images/art/fork.png", "alt": "fork and Knif" }));
            $header.append($('<p class="faq-question">').html(question['question']));
            $faq.append($header)
            $('#faq-container').append($faq);

            $faq_answer.append($('<p class="faq-answer">').html(question['answer']))
            $faq.append($faq_answer)
            $('#faq_container').append($faq)
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
