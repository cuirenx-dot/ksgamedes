function interact(){

    const objects =
        MAPS.station_day1.objects;

    for(const obj of objects){

        const dx =
            Math.abs(player.x - obj.x);

        const dy =
            Math.abs(player.y - obj.y);

        if(dx < 40 && dy < 40){

            triggerEvent(obj);

            return;
        }
    }

    showMessage(
        "",
        "特に何もない。"
    );
}

function triggerEvent(obj){

    switch(obj.id){

        case "yui":
            talkYui();
            break;

        case "ticket":
            findTicket();
            break;

        case "bench":
            checkBench();
            break;

        case "clock":
            checkClock();
            break;
    }
}

function talkYui(){

    if(!gameData.yuiTalk1){

        gameData.yuiTalk1 = true;
        saveGame(gameData);

        showMessage(
            "ユイ",
`発車まで、
あと三日だね。

なんだか
あっという間だった。`
        );

        return;
    }

    if(!gameData.yuiTalk2){

        gameData.yuiTalk2 = true;
        saveGame(gameData);

        showMessage(
            "ユイ",
`卒業したらさ。

私たち、
どうなるんだろうね。`
        );

        return;
    }

    if(!gameData.yuiTalk3){

        gameData.yuiTalk3 = true;
        saveGame(gameData);

        showMessage(
            "ユイ",
`もし、
全部やり直せるなら。

君は何を変える？`
        );

        return;
    }

    showMessage(
        "ユイ",
`また会いに来てくれたんだね。`
    );
}

function findTicket(){

    if(gameData.ticket){

        showMessage(
            "",
            "もう切符は拾っている。"
        );

        return;
    }

    gameData.ticket = true;

    saveGame(gameData);

    showMessage(
        "",
`古びた切符を拾った。

行き先は消えて読めない。`
    );
}

function checkBench(){

    showMessage(
        "",
`古いベンチ。

ここでユイと
何度も話した気がする。`
    );
}

function checkClock(){

    showMessage(
        "",
`駅の時計だ。

発車まで、
あと三日。`
    );
}
