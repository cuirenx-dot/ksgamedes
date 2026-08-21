const flags = {

    ticket:false,
    bench:false,
    clock:false,
    talkedYui:false

};

function showDialogue(dialogues){

    let index = 0;

    function next(){

        if(index >= dialogues.length){

            const choices =
                document.getElementById("choices");

            if(choices){
                choices.innerHTML = "";
            }

            return;
        }

        const d = dialogues[index];

        showMessage(
            d.speaker,
            d.text
        );

        const choices =
            document.getElementById("choices");

        if(!choices){
            return;
        }

        choices.innerHTML = "";

        const btn =
            document.createElement("button");

        btn.textContent = "次へ";

        btn.onclick = () => {

            index++;

            next();

        };

        choices.appendChild(btn);
    }

    next();
}

function interact(){

    const map =
        MAPS.station_day1;

    for(const obj of map.objects){

        if(near(obj.x,obj.y)){

            runEvent(obj.id);

            return;
        }
    }

    showMessage(
        "",
        "何もない。"
    );
}

function runEvent(id){

    switch(id){

        case "yui":

            flags.talkedYui = true;

            showDialogue([

                {
                    speaker:"ユイ",
                    text:"あ、起きた。"
                },

                {
                    speaker:"ユイ",
                    text:"またベンチで寝てたでしょ。"
                },

                {
                    speaker:"ハル",
                    text:"寝てない。"
                },

                {
                    speaker:"ユイ",
                    text:"目閉じてたじゃん。"
                },

                {
                    speaker:"ハル",
                    text:"考え事してただけ。"
                },

                {
                    speaker:"ユイ",
                    text:"それを寝てたって言うんだよ。"
                },

                {
                    speaker:"ユイ",
                    text:"発車まで、あと三日だね。"
                }

            ]);

            break;

        case "ticket":

            flags.ticket = true;

            showDialogue([

                {
                    speaker:"ハル",
                    text:"古い切符だ。"
                },

                {
                    speaker:"ユイ",
                    text:"あ、それ。"
                },

                {
                    speaker:"ハル",
                    text:"知ってるのか？"
                },

                {
                    speaker:"ユイ",
                    text:"なんとなく。"
                },

                {
                    speaker:"ユイ",
                    text:"大事なものな気がする。"
                }

            ]);

            break;

        case "bench":

            flags.bench = true;

            showDialogue([

                {
                    speaker:"ハル",
                    text:"H+Y……？"
                },

                {
                    speaker:"ユイ",
                    text:"うわ。"
                },

                {
                    speaker:"ユイ",
                    text:"なんか恥ずかしい。"
                },

                {
                    speaker:"ハル",
                    text:"お前が書いたんじゃないの。"
                },

                {
                    speaker:"ユイ",
                    text:"違うし。"
                },

                {
                    speaker:"ユイ",
                    text:"……多分。"
                }

            ]);

            break;

        case "clock":

            flags.clock = true;

            showDialogue([

                {
                    speaker:"ハル",
                    text:"13:13で止まってる。"
                },

                {
                    speaker:"ユイ",
                    text:"中途半端な時間だね。"
                },

                {
                    speaker:"ハル",
                    text:"壊れてるだけだろ。"
                },

                {
                    speaker:"ユイ",
                    text:"そうかな。"
                },

                {
                    speaker:"ユイ",
                    text:"なんか待ってるみたい。"
                }

            ]);

            break;
    }
}
