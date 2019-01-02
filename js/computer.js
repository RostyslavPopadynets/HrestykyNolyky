let fields = [2, 2, 2, 2, 2, 2, 2, 2, 2];
let useMethod = 2;
let win1 = 0;
let win2 = 0;
let startPlayer = 0;
let restart = false;
let gameOver = false;

$(document).ready(function() {
    $('.back').on('click', function() {
        location.href = "../index.html"
    });

    $('.nul').on('click', function() {
        win1 = 0;
        win2 = 0;
        $('#gamerScore').html("0");
        $('#computerScore').html("0");
        $('#nich').hide();
    });

    $('#human').on('click', function() {
        creatGame();
        $('#robot').css('color', 'black');
        $('#human').css('color', 'red');
        useMethod = 0;
        startPlayer = 1;
        $('#nich').hide();
        humenFirst();
    });

    $('#robot').on('click', function() {
        creatGame();
        $('#human').css('color', 'black');
        $('#robot').css('color', 'red');
        useMethod = 1;
        startPlayer = 2;
        $('#nich').hide();
        robotFirst();
    });

    $('.clear').on('click', function() {
        if (useMethod == 0) {
            $('#robot').css('color', 'black');
            $('#human').css('color', 'red');
            startPlayer = 1;
            creatGame();
            humenFirst();
        } else {
            $('#human').css('color', 'black');
            $('#robot').css('color', 'red');
            startPlayer = 2;
            creatGame();
            robotFirst();
        }
        gameOver = false;
        $('#nich').hide();
    });

});

function humenFirst() {
    clearField();
    $('#field1').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            $('#nich').hide();
        } else if (fields[0] == 2) {
            $('#field1').html("<img src='../images/hrestyk.png'>");
            fields[0] = 1;
            checkWiner(false);
            if (!gameOver) {
                autoNolyk();
            }
        }
    });
    $('#field2').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            $('#nich').hide();
        } else if (fields[1] == 2) {
            $('#field2').html("<img src='../images/hrestyk.png'>");
            fields[1] = 1;
            checkWiner(false);
            if (!gameOver) {
                autoNolyk();
            }
        }
    });
    $('#field3').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            $('#nich').hide();
        } else if (fields[2] == 2) {
            $('#field3').html("<img src='../images/hrestyk.png'>");
            fields[2] = 1;
            checkWiner(false);
            if (!gameOver) {
                autoNolyk();
            }
        }
    });
    $('#field4').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            $('#nich').hide();
        } else if (fields[3] == 2) {
            $('#field4').html("<img src='../images/hrestyk.png'>");
            fields[3] = 1;
            checkWiner(false);
            if (!gameOver) {
                autoNolyk();
            }
        }
    });
    $('#field5').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            $('#nich').hide();
        } else if (fields[4] == 2) {
            $('#field5').html("<img src='../images/hrestyk.png'>");
            fields[4] = 1;
            checkWiner(false);
            if (!gameOver) {
                autoNolyk();
            }
        }
    });
    $('#field6').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            $('#nich').hide();
        } else if (fields[5] == 2) {
            $('#field6').html("<img src='../images/hrestyk.png'>");
            fields[5] = 1;
            checkWiner(false);
            if (!gameOver) {
                autoNolyk();
            }
        }
    });
    $('#field7').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            $('#nich').hide();
        } else if (fields[6] == 2) {
            $('#field7').html("<img src='../images/hrestyk.png'>");
            fields[6] = 1;
            checkWiner(false);
            if (!gameOver) {
                autoNolyk();
            }
        }
    });
    $('#field8').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            $('#nich').hide();
        } else if (fields[7] == 2) {
            $('#field8').html("<img src='../images/hrestyk.png'>");
            fields[7] = 1;
            checkWiner(false);
            if (!gameOver) {
                autoNolyk();
            }
        }
    });
    $('#field9').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            $('#nich').hide();
        } else if (fields[8] == 2) {
            $('#field9').html("<img src='../images/hrestyk.png'>");
            fields[8] = 1;
            checkWiner(false);
            if (!gameOver) {
                autoNolyk();
            }
        }
    });
}


function robotFirst() {
    clearField();
    autoHrestyk();

    $('#field1').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            autoHrestyk();
            $('#nich').hide();
        } else if (fields[0] == 2) {
            $('#field1').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
            fields[0] = 0;
            checkWiner(true);
            if (!gameOver) {
                autoHrestyk();
            }
        }
    });
    $('#field2').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            autoHrestyk();
            $('#nich').hide();
        } else if (fields[1] == 2) {
            $('#field2').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
            fields[1] = 0;
            checkWiner(true);
            if (!gameOver) {
                autoHrestyk();
            }

        }
    });
    $('#field3').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            autoHrestyk();
            $('#nich').hide();
        } else if (fields[2] == 2) {
            $('#field3').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
            fields[2] = 0;
            checkWiner(true);
            if (!gameOver) {
                autoHrestyk();
            }
        }
    });
    $('#field4').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            autoHrestyk();
            $('#nich').hide();
        } else if (fields[3] == 2) {
            $('#field4').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
            fields[3] = 0;
            checkWiner(true);
            if (!gameOver) {
                autoHrestyk();
            }
        }
    });
    $('#field5').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            autoHrestyk();
            $('#nich').hide();
        } else if (fields[4] == 2) {
            $('#field5').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
            fields[4] = 0;
            checkWiner(true);
            if (!gameOver) {
                autoHrestyk();
            }
        }
    });
    $('#field6').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            autoHrestyk();
            $('#nich').hide();
        } else if (fields[5] == 2) {
            $('#field6').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
            fields[5] = 0;
            checkWiner(true);
            if (!gameOver) {
                autoHrestyk();
            }
        }
    });
    $('#field7').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            autoHrestyk();
            $('#nich').hide();
        } else if (fields[6] == 2) {
            $('#field7').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
            fields[6] = 0;
            checkWiner(true);
            if (!gameOver) {
                autoHrestyk();
            }
        }
    });
    $('#field8').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            autoHrestyk();
            $('#nich').hide();
        } else if (fields[7] == 2) {
            $('#field8').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
            fields[7] = 0;
            checkWiner(true);
            if (!gameOver) {
                autoHrestyk();
            }
        }
    });
    $('#field9').on('click', function() {
        if (restart) {
            clearField();
            restart = false;
            gameOver = false;
            autoHrestyk();
            $('#nich').hide();
        } else if (fields[8] == 2) {
            $('#field9').html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
            fields[8] = 0;
            checkWiner(true);
            if (!gameOver) {
                autoHrestyk();
            }
        }
    });
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
}

function autoHrestyk() {
    let freePosition;
    for (var i = 0; i < fields.length; i++) {
        if (fields[i] == 2) {
            freePosition = true;
            break;
        }
    }
    while (freePosition) {
        let num = Math.floor(Math.random() * 9) + 1;
        let id = '#field' + num;
        if (fields[num - 1] == 2) {
            $(id).html("<img src='../images/hrestyk.png'>");
            fields[num - 1] = 1;
            freePosition = false;
        }
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
    while (freePosition) {
        let num = Math.floor(Math.random() * 9) + 1;
        let id = '#field' + num;
        if (fields[num - 1] == 2) {
            $(id).html("<img src='../images/nolyk.png' style='width: 108px; height: 108px; margin:10px 10px 10px 10px;'>");
            fields[num - 1] = 0;
            freePosition = false;
        }
    }
    checkWiner(true);
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

function res(h) {
    let winer = h;
    if (!winer) {
        if (startPlayer == 1) {
            $('#gamerScore').html(++win1);
        } else if (startPlayer == 2) {
            $('#computerScore').html(++win2);
        }
    }
    if (winer) {
        if (startPlayer == 1) {
            $('#computerScore').html(++win2);
        } else if (startPlayer == 2) {
            $('#gamerScore').html(++win1);
        }
    }
    restart = true;
}

function checkWiner(n) {
    let hrestyk = n;
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
    }
}