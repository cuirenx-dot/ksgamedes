let gameData = loadSave();

const text = document.getElementById("text");
const speaker = document.getElementById("speaker");
const choices = document.getElementById("choices");
const subtitle = document.getElementById("subtitle");

const menu = document.getElementById("menu");
const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");
const endingBtn = document.getElementById("endingBtn");

startBtn.onclick = startGame;
continueBtn.onclick = continueGame;
endingBtn.onclick = showEndings;

showTitle();

function clearChoices() {
    choices.innerHTML = "";
}

function addChoice(label, callback) {

    const btn = document.createElement("button");

    btn.textContent = label;

    btn.onclick = callback;

    choices.appendChild(btn);
}

function showTitle() {

    gameData = loadSave();

    speaker.textContent = "";
    text.textContent = "";

    menu.style.display = "block";

    subtitle.textContent =
        "回収率 " + getEndingRate() + "%";

    clearChoices();
}

function startGame() {

    gameData.ticket = false;
    gameData.promise = false;
    gameData.scene = "day1";

    saveGame(gameData);

    menu.style.display = "none";

    day1();
}

function continueGame() {

    menu.style.display = "none";

    switch(gameData.scene){

        case "day2":
            day2();
            break;

        case "day3":
            day3();
            break;

        default:
            day1();
    }
}

function showEndings() {

    menu.style.display = "none";

    speaker.textContent = "エンド一覧";

    let result = "";

    for(const key in END_NAMES){

        if(gameData.endings[key]){

            result += END_NAMES[key] + "\n";

        }else{

            result += "？？？？？\n";

        }
    }

    text.textContent = result;

    clearChoices();

    addChoice("タイトルへ", showTitle);
}

function day1() {

    gameData.scene = "day1";

    saveGame(gameData);

    speaker.textContent = "";

    text.textContent =
`【1日目】

ホームの端に古い切符が落ちている。`;

    clearChoices();

    addChoice("拾う", () => {

        gameData.ticket = true;

        saveGame(gameData);

        day2();

    });

    addChoice("拾わない", () => {

        day2();

    });
}

function day2() {

    gameData.scene = "day2";

    saveGame(gameData);

    speaker.textContent = "ユイ";

    text.textContent =
`卒業したらさ。

私たちってどうなるんだろうね。`;

    clearChoices();

    addChoice("会いに行く", () => {

        gameData.promise = true;

        saveGame(gameData);

        day3();

    });

    addChoice("きっと離れる", () => {

        day3();

    });
}

function day3() {

    gameData.scene = "day3";

    saveGame(gameData);

    speaker.textContent = "ユイ";

    text.textContent =
`私が終電に乗れば世界は残る。

乗らなければ終わる。`;

    clearChoices();

    addChoice("行かせる", () => {

        ending(true);

    });

    addChoice("行かせない", () => {

        ending(false);

    });
}

function ending(sendOff) {

    let id;
    let body;

    if(sendOff){

        if(gameData.ticket && gameData.promise){

            if(gameData.endings.end8){

                id = "trueEnd";

                body =
`TRUE END

発車の向こう側

僕は気付いた。

本当に行くべきだったのは
ユイじゃない。

僕だった。`;

            }else{

                id = "end4";

                body =
`END4

見送り

ユイは列車へ乗った。

世界は残った。`;
            }

        }else if(gameData.ticket){

            id = "end3";

            body =
`END3

忘却`;
        }

        else if(gameData.promise){

            id = "end2";

            body =
`END2

約束`;
        }

        else{

            id = "end1";

            body =
`END1

さよなら`;
        }

    }else{

        if(gameData.ticket && gameData.promise){

            id = "end8";

            body =
`END8

繰り返し

気付くと三日前へ戻っていた。`;
        }

        else if(gameData.ticket){

            id = "end7";

            body =
`END7

切符の行き先`;
        }

        else if(gameData.promise){

            id = "end6";

            body =
`END6

最後の放課後`;
        }

        else{

            id = "end5";

            body =
`END5

白`;
        }
    }

    unlockEnding(id);

    speaker.textContent = "";

    text.textContent = body;

    gameData.scene = "title";

    saveGame(gameData);

    clearChoices();

    addChoice("タイトルへ", showTitle);
}
function showMessage(name,text){

    speaker.textContent = name;

    document.getElementById("text")
        .textContent = text;
}
function renderMap(){

    const map =
        document.getElementById("map");

    document
        .querySelectorAll(".map-object")
        .forEach(e=>e.remove());

    MAPS.station_day1.objects.forEach(obj=>{

        const el =
            document.createElement("div");

        el.className =
            "map-object";

        el.textContent =
            obj.icon;

        el.style.left =
            obj.x + "px";

        el.style.top =
            obj.y + "px";

        map.appendChild(el);

    });

    renderPlayer();
}

renderMap();
