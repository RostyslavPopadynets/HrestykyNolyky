$(document).ready(function() {
    $('#playWithComputer').on('click', function() {
        location.href = "html/computer.html" + '?playWithComputer'
    });

    $("#playWithFriend").on('click', function() {
        location.href = "html/friend.html" + '?playWithFriend'
    });

    $("#computerVsComputer").on('click', function() {
        location.href = "html/computerVsComputer.html" + '?computerVsComputer'
    });
});