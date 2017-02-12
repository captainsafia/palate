window.onload = function() {

    document
        .getElementById("more")
        .onclick = function() {
        $('.ui.modal').modal('show');
    };

    document
        .getElementById("more2")
        .onclick = function() {
        $('.ui.modal').modal('show');
    };

    document
        .getElementById("more3")
        .onclick = function() {
        $('.ui.modal').modal('show');
    };

    document
        .getElementById("more4")
        .onclick = function() {
        $('.ui.modal').modal('show');
    };

    $('.message .close').on('click', function() {
        $(this)
            .closest('.message')
            .transition('fade');
    });

}
