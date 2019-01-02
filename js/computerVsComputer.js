let fields = [2, 2, 2, 2, 2, 2, 2, 2, 2];
let useMethod = 2;
let win1 = 0;
let win2 = 0;
let startPlayer = 0;
let restart = false;
let gameOver = false;
let k = 1;

$(document).ready(function() {
    $('.back').on('click', function() {
        location.href = "../index.html"
    });

    $("#nich").hide();

    $('.nul').on('click', function() {
        win1 = 0;
        win2 = 0;
        $('#computer1Score').html("0");
        $('#computer2Score').html("0");
        $('#nich').hide();
    });

    $('.play').on('click', function() {

        $('.play').hide();
        k = 1;
        restart = false;
        gameOver = false;
        if (useMethod == 1) {
            startPlayer = 2;
            $('#computer2Name').css('color', 'red');
            $('#computer1Name').css('color', 'black');
            computer2First();
        } else {
            startPlayer = 1;
            $('#computer2Name').css('color', 'black');
            $('#computer1Name').css('color', 'red');
            computer1First();
        }
    });

    $('#computer1Name').on('click', function() {
        $('#computer2Name').css('color', 'black');
        $('#computer1Name').css('color', 'red');
        useMethod = 0;
        startPlayer = 1;
        $('#nich').hide();
    });

    $('#computer2Name').on('click', function() {
        $('#computer1Name').css('color', 'black');
        $('#computer2Name').css('color', 'red');
        useMethod = 1;
        startPlayer = 2;
        $('#nich').hide();
    });

    $('.clear').on('click', function() {
        if (useMethod == 0) {
            $('#computer2Name').css('color', 'black');
            $('#computer1Name').css('color', 'red');
            startPlayer = 1;
            computer1First();
        } else {
            $('#computer1Name').css('color', 'black');
            $('#computer2Name').css('color', 'red');
            startPlayer = 2;
            computer2First();
        }
        gameOver = false;
        $('#nich').hide();
    });

});

function computer1First() {
    do {
        setTimeout(autoHrestyk, k++ * 1000);
        checkWiner(true);
        setTimeout(autoNolyk, k++ * 1000);
        checkWiner(false);
    } while (k < 10);
    setTimeout(function() {
        $("#nich").hide();
    }, 1000);
}


function computer2First() {
    do {
        setTimeout(autoHrestyk, k++ * 1000);
        checkWiner(true);
        setTimeout(autoNolyk, k++ * 1000);
        checkWiner(false);
    } while (k < 10);
    setTimeout(function() {
        $("#nich").hide();
    }, 1000);
}


function clearField() {
    $('#field1').html("<img src='../images/default.png'>");
    $('#field2').html("<img src='../images/default.png'>");
    $('#field3').html("<img src='../images/default.png'>");
    $('#field4').html("<img src='../images/default.png'>");
    $('#field5').html("<img src='../images/default.png'>");
    $('#field6').html("<img src='../images/default.png'>");
    $('#field7').html("<img src='../images/default.png'>");
    $('#field8').html("<img src='../images/default.png'>");
    $('#field9').html("<img src='../images/default.png'>");
    fields = [2, 2, 2, 2, 2, 2, 2, 2, 2];
    $("#nich").hide();
}

function autoHrestyk() {
    let freePosition;
    for (var i = 0; i < fields.length; i++) {
        if (fields[i] == 2) {
            freePosition = true;
            break;
        }
    }
    while (freePosition && !restart) {
        let num = Math.floor(Math.random() * 9) + 1;
        let id = '#field' + num;
        if (fields[num - 1] == 2) {
            $(id).html("<img src='../images/hrestyk.png'>");
            fields[num - 1] = 1;
            freePosition = false;
        }
        restart = false;
    }
    checkWiner(false);
}

function autoNolyk() {
    let freePosition;
    for (var i = 0; i < fields.length; i++) {
        if (fields[i] == 2) {
            freePosition = true;
            break;
        }
    }
    while (freePosition && !restart) {
        let num = Math.floor(Math.random() * 9) + 1;
        let id = '#field' + num;
        if (fields[num - 1] == 2) {
            $(id).html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
            fields[num - 1] = 0;
            freePosition = false;
        }
        restart = false;
    }
    checkWiner(true);
}

function res(h) {
    let winer = h;
    switch (winer) {
        case false:
            if (startPlayer == 1) {
                $('#computer1Score').html(++win1);
            } else if (startPlayer == 2) {
                $('#computer2Score').html(++win2);
            }
            break;
        case true:
            if (startPlayer == 1) {
                $('#computer2Score').html(++win2);
            } else if (startPlayer == 2) {
                $('#computer1Score').html(++win1);
            }
            break;
    }
    setTimeout(clearField, 1000);
    restart = true;
    $('.play').show();
}

function checkWiner(n) {
    let hrestyk = n;
    if (!gameOver) {
        if (fields[0] == fields[1] && fields[0] == fields[2] && fields[1] == fields[2] && fields[0] != 2 && fields[1] != 2 && fields[2] != 2) {
            if (hrestyk) {
                $('#field1').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field2').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field3').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
            } else {
                $('#field1').html("<img src='../images/hrestykWin.png'>");
                $('#field2').html("<img src='../images/hrestykWin.png'>");
                $('#field3').html("<img src='../images/hrestykWin.png'>");

            }
            gameOver = true;
            res(hrestyk);
        } else if (fields[3] == fields[4] && fields[3] == fields[5] && fields[4] == fields[5] && fields[3] != 2 && fields[4] != 2 && fields[5] != 2) {
            if (hrestyk) {
                $('#field4').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field5').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field6').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
            } else {
                $('#field4').html("<img src='../images/hrestykWin.png'>");
                $('#field5').html("<img src='../images/hrestykWin.png'>");
                $('#field6').html("<img src='../images/hrestykWin.png'>");

            }
            gameOver = true;
            res(hrestyk);
        } else if (fields[6] == fields[7] && fields[6] == fields[8] && fields[7] == fields[8] && fields[6] != 2 && fields[7] != 2 && fields[8] != 2) {
            if (hrestyk) {
                $('#field7').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field8').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field9').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");

            } else {
                $('#field7').html("<img src='../images/hrestykWin.png'>");
                $('#field8').html("<img src='../images/hrestykWin.png'>");
                $('#field9').html("<img src='../images/hrestykWin.png'>");

            }
            gameOver = true;
            res(hrestyk);
        } else if (fields[0] == fields[3] && fields[0] == fields[6] && fields[3] == fields[6] && fields[0] != 2 && fields[3] != 2 && fields[6] != 2) {
            if (hrestyk) {
                $('#field1').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field4').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field7').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");

            } else {
                $('#field1').html("<img src='../images/hrestykWin.png'>");
                $('#field4').html("<img src='../images/hrestykWin.png'>");
                $('#field7').html("<img src='../images/hrestykWin.png'>");

            }
            gameOver = true;
            res(hrestyk);
        } else if (fields[1] == fields[4] && fields[1] == fields[7] && fields[4] == fields[7] && fields[1] != 2 && fields[4] != 2 && fields[7] != 2) {
            if (hrestyk) {
                $('#field2').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field5').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field8').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");

            } else {
                $('#field2').html("<img src='../images/hrestykWin.png'>");
                $('#field5').html("<img src='../images/hrestykWin.png'>");
                $('#field8').html("<img src='../images/hrestykWin.png'>");

            }
            gameOver = true;
            res(hrestyk);
        } else if (fields[2] == fields[5] && fields[2] == fields[8] && fields[5] == fields[8] && fields[2] != 2 && fields[5] != 2 && fields[8] != 2) {
            if (hrestyk) {
                $('#field3').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field6').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field9').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");

            } else {
                $('#field3').html("<img src='../images/hrestykWin.png'>");
                $('#field6').html("<img src='../images/hrestykWin.png'>");
                $('#field9').html("<img src='../images/hrestykWin.png'>");

            }
            gameOver = true;
            res(hrestyk);
        } else if (fields[0] == fields[4] && fields[0] == fields[8] && fields[4] == fields[8] && fields[0] != 2 && fields[4] != 2 && fields[8] != 2) {
            if (hrestyk) {
                $('#field1').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field5').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field9').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");

            } else {
                $('#field1').html("<img src='../images/hrestykWin.png'>");
                $('#field5').html("<img src='../images/hrestykWin.png'>");
                $('#field9').html("<img src='../images/hrestykWin.png'>");

            }
            gameOver = true;
            res(hrestyk);
        } else if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2] == fields[6] && fields[2] != 2 && fields[4] != 2 && fields[6] != 2) {
            if (hrestyk) {
                $('#field3').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field5').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                $('#field7').html("<img src='../images/nolykWin.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");

            } else {
                $('#field3').html("<img src='../images/hrestykWin.png'>");
                $('#field5').html("<img src='../images/hrestykWin.png'>");
                $('#field7').html("<img src='../images/hrestykWin.png'>");

            }
            gameOver = true;
            res(hrestyk);
        } else if (fields[0] != 2 && fields[1] != 2 && fields[2] != 2 && fields[3] != 2 && fields[4] != 2 && fields[5] != 2 &&
            fields[6] != 2 && fields[7] != 2 && fields[8] != 2) {
            restart = true;
            $("#nich").show();
            setTimeout(clearField, 1000);
            gameOver = true;
            $('.play').show();
        }
    }
}