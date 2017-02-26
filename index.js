window.onload = function() {

    $('.card').on('click', function() {
        $('.ui.modal').modal('show');
    });

    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });

    $('selection.dropdown').dropdown();

    $('.ui.dropdown').dropdown({allowAdditions: true});

    $('.ui.checkbox').checkbox();

    document.getElementById("current-date").valueAsDate = new Date();

}

function submitForm() {
    var frm = document.getElementById('dishform');

    frm.reset(); // Reset
    $(".ui.form").addClass('success');
    return false; // Prevent page refresh

}
