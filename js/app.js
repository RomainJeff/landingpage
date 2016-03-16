$(function () {
    // Anim startup
    setTimeout(function () {
        $('.main-title').addClass('active');
        $('.main-subtitle').addClass('active');
        $('.button-container').addClass('active');
    }, 200);


    // Open side content
    $('#knowme').on('click', function () {
        $('#about-overlay').addClass('active');

        setTimeout(function () { 
            $('#about-content').addClass('active');
            $('#home').addClass('active');

            // Display item effect
            var items = $('.work .item');
            var i = 1;
            items.each(function () {
                setTimeout(function() { $(this).addClass('active'); }.bind(this), (i * 300));
                i++;
            });
        }, 200);

        // Analytics
        ga('send', 'event', 'about', 'open');
    });

    // Close side content
    $('#about-overlay').on('click', function () {
        $('#about-overlay').removeClass('active');
        $('#about-content').removeClass('active');
        $('#home').removeClass('active');
        $('.work .item').removeClass('active');

        // Analytics
        ga('send', 'event', 'about', 'close');
    });

    // projects
    $('[data-url]').on('click', function () {
        var url = $(this).attr('data-url');
        
        // Analytics
        ga('send', 'event', 'project', 'open', url);

        var win = window.open(url, '_blank');
        win.focus();
    });

    // links
    $('a').on('click', function () {
        var url = $(this).attr('href');

        // Analytics
        ga('send', 'event', 'link', 'click', url);
    })
});
