let fields = [2, 2, 2, 2, 2, 2, 2, 2, 2];
let useMethod = 2;
let hn = true;
let startPlayer = 2;
let win1 = 0;
let win2 = 0;
let restart = false;

$(document).ready(function() {
    $('.back').on('click', function() {
        location.href = "../index.html";
    });

    $('.nul').on('click', function() {
        win1 = 0;
        win2 = 0;
        $('#gamer1Score').html("0");
        $('#gamer2Score').html("0");
        $('#nich').hide();
    });

    $('#player1').on('click', function() {
        creatGame();
        $('#player2').css('color', 'black');
        $('#player1').css('color', 'red');
        useMethod = 0;
        startPlayer = 1;
        hn = true;
        $('#nich').hide();
        playerFirst();
    });

    $('#player2').on('click', function() {
        creatGame();
        $('#player1').css('color', 'black');
        $('#player2').css('color', 'red');
        startPlayer = 2;
        useMethod = 1;
        hn = true;
        $('#nich').hide();
        playerFirst();
    });

    $('.clear').on('click', function() {
        hn = true;
        if (useMethod == 0) {
            $('#player2').css('color', 'black');
            $('#player1').css('color', 'red');
            startPlayer = 1;
            creatGame();
            playerFirst();
        } else if (useMethod == 1) {
            $('#player1').css('color', 'black');
            $('#player2').css('color', 'red');
            startPlayer = 2;
            creatGame();
            playerFirst();
        }
        $('#nich').hide();
    });
});

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
    hn = true;
}

function playerFirst() {
    clearField();
    $('#field1').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            $('#nich').hide();
        } else if (fields[0] == 2) {
            if (hn) {
                $('#field1').html("<img src='../images/hrestyk.png'>");
                hn = false;
                fields[0] = 1;
            } else {
                $('#field1').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                hn = true;
                fields[0] = 0;
            }
        }
        checkWiner(hn);
    });
    $('#field2').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            $('#nich').hide();
        } else if (fields[1] == 2) {
            if (hn) {
                $('#field2').html("<img src='../images/hrestyk.png'>");
                hn = false;
                fields[1] = 1;
            } else {
                $('#field2').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                hn = true;
                fields[1] = 0;
            }
        }
        checkWiner(hn);
    });

    $('#field3').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            $('#nich').hide();
        } else if (fields[2] == 2) {
            if (hn) {
                $('#field3').html("<img src='../images/hrestyk.png'>");
                hn = false;
                fields[2] = 1;
            } else {
                $('#field3').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                hn = true;
                fields[2] = 0;
            }
        }
        checkWiner(hn);
    });
    $('#field4').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            $('#nich').hide();
        } else if (fields[3] == 2) {
            if (hn) {
                $('#field4').html("<img src='../images/hrestyk.png'>");
                hn = false;
                fields[3] = 1;
            } else {
                $('#field4').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                hn = true;
                fields[3] = 0;
            }
        }
        checkWiner(hn);
    });
    $('#field5').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            $('#nich').hide();
        } else if (fields[4] == 2) {
            if (hn) {
                $('#field5').html("<img src='../images/hrestyk.png'>");
                hn = false;
                fields[4] = 1;
            } else {
                $('#field5').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                hn = true;
                fields[4] = 0;
            }
        }
        checkWiner(hn);
    });
    $('#field6').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            $('#nich').hide();
        } else if (fields[5] == 2) {
            if (hn) {
                $('#field6').html("<img src='../images/hrestyk.png'>");
                hn = false;
                fields[5] = 1;
            } else {
                $('#field6').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                hn = true;
                fields[5] = 0;
            }
        }
        checkWiner(hn);
    });
    $('#field7').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            $('#nich').hide();
        } else if (fields[6] == 2) {
            if (hn) {
                $('#field7').html("<img src='../images/hrestyk.png'>");
                hn = false;
                fields[6] = 1;
            } else {
                $('#field7').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                hn = true;
                fields[6] = 0;
            }
        }
        checkWiner(hn);
    });
    $('#field8').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            $('#nich').hide();
        } else if (fields[7] == 2) {
            if (hn) {
                $('#field8').html("<img src='../images/hrestyk.png'>");
                hn = false;
                fields[7] = 1;
            } else {
                $('#field8').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                hn = true;
                fields[7] = 0;
            }
        }
        checkWiner(hn);
    });
    $('#field9').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            $('#nich').hide();
        } else if (fields[8] == 2) {
            if (hn) {
                $('#field9').html("<img src='../images/hrestyk.png'>");
                hn = false;
                fields[8] = 1;
            } else {
                $('#field9').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
                hn = true;
                fields[8] = 0;
            }
        }
        checkWiner(hn);
    });
}

function res(h) {
    let winer = h;
    if (!winer) {
        if (startPlayer == 1) {
            $('#gamer1Score').html(++win1);
        } else if (startPlayer == 2) {
            $('#gamer2Score').html(++win2);
        }
    }
    if (winer) {
        if (startPlayer == 1) {
            $('#gamer2Score').html(++win2);
        } else if (startPlayer == 2) {
            $('#gamer1Score').html(++win1);
        }
    }
    hn = true;
    restart = true;
}

function checkWiner(h) {

    let hrestyk = h;
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
        res(hrestyk);
    } else if (fields[0] != 2 && fields[1] != 2 && fields[2] != 2 && fields[3] != 2 && fields[4] != 2 && fields[5] != 2 &&
        fields[6] != 2 && fields[7] != 2 && fields[8] != 2) {
        restart = true;
        $('#nich').show();
    }
}

function creatGame() {
    $('.game').html(`
    			<div class="fields" id="field1">
				<img src="../images/default.png">
				</div>
				<div class="fields" id="field2">
					<img src="../images/default.png">
				</div>
				<div class="fields" id="field3">
					<img src="../images/default.png">
				</div>
				<div class="fields" id="field4">
					<img src="../images/default.png">
				</div>
				<div class="fields" id="field5">
					<img src="../images/default.png">
				</div>
				<div class="fields" id="field6">
					<img src="../images/default.png">
				</div>
				<div class="fields" id="field7">
					<img src="../images/default.png">
				</div>
				<div class="fields" id="field8">
					<img src="../images/default.png">
				</div>
				<div class="fields" id="field9">
				
				</div>
				<h1 id='nich' style='text-align:center;color:blue;'>Нічія</h1>
    		`);
}