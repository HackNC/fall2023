$(document).ready(function () {
    var tracks = document.getElementsByClassName('track');

    for (var i = 0; i < tracks.length; i++) {
        tracks[i].onclick = function () {
            if (window.innerWidth > 993) {
                var id = this.id + '-modal';
                document.getElementById(id).style.display = "block";
            } else {
                this.classList.toggle('focus');
                this.lastElementChild.classList.toggle('visible');
            }
        }
    }

    document.getElementById('mobile-get-involved').onclick = function () {
        document.getElementById('get-involved-modal').style.display = "block";
    }

    document.getElementById('get-involved').onclick = function () {
        document.getElementById('get-involved-modal').style.display = "block";
    }

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
            var $faq = $('<div>');
            var $header = $('<h2>')

            $header.append($('<img>', { "src": "static/assets/images/art/fork.png", "alt": "fork and Knif" }));
            $header.append(question['question']);
            $faq.append($header);
            $faq.append(
                $('<p>')
                    .html(question['answer'])
            )
            $('#faq-container').append($faq);
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
});
