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

function talkYui(function talkYui(){

    if(!gameData.yuiCount){
        gameData.yuiCount = 0;
    }

    const talks = [

`発車まで、
あと三日だね。

なんだか
あっという間だった。`,

`ねぇ。

卒業したら
みんなバラバラになるんだね。`,

`君はさ。

未来って
楽しみ？`,

`私は少しだけ怖い。

変わることって
怖くない？`,

`この駅。

昔から何も変わらないよね。`,

`でも私たちは
変わっていく。`,

`小さい頃はさ。

大人になるのが
楽しみだった。`,

`なのに今は。

このままでも
いいかなって思う。`,

`このホーム。

夕方になると
綺麗なんだよ。`,

`今度一緒に
見ようよ。`,

`君といると
時間が早い。`,

`それって
いいことなのかな。`,

`もしさ。

明日が来なかったら
どうする？`,

`やり残したこと
たくさんあるよね。`,

`私はね。

もっと君と
話したかった。`,

`みんな忘れても。

私は覚えていたい。`,

`この駅の匂いとか。

空の色とか。`,

`帰り道とか。`,

`全部。`,

`ねぇ。

君は覚えていてくれる？`,

`もし私が
いなくなっても。`,

`また会えると
思う？`,

`なんだろうね。

最近変な夢を見るんだ。`,

`同じ三日間を
繰り返してる夢。`,

`何回も。

何回も。`,

`その夢の中で
君はずっと探してた。`,

`何を探してたのかは
わからないけど。`,

`でもね。

最後だけ覚えてる。`,

`列車が来るんだ。`,

`そして誰かが
乗る。`,

`その先は
思い出せない。`,

`ねぇ。

もし全部やり直せるなら。`,

`君は何を変える？`

    ];

    let index = gameData.yuiCount;

    if(index >= talks.length){

        showMessage(
            "ユイ",
            "また来てくれたんだね。"
        );

        return;
    }

    showMessage(
        "ユイ",
        talks[index]
    );

    gameData.yuiCount++;

    saveGame(gameData);
}){

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
