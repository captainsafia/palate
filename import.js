window.onload = function() {

    $('.import-button')
        .click(function() {
            $(this).addClass('ui disabled black button');
            $(this).text("Success. Sync more!");
            $('rec-button').removeClass('disabled');
        });

}
