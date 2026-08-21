const flags = {

    ticket:false,

    bench:false,

    clock:false,

    talkedYui:false
};

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

        case "ticket":

            flags.ticket = true;

            showMessage(
                "切符",
                "古い切符を拾った。"
            );

            break;

        case "bench":

            flags.bench = true;

            showMessage(
                "ベンチ",
                "H+Yと刻まれている。"
            );

            break;

        case "clock":

            flags.clock = true;

            showMessage(
                "時計",
                "13:13で止まっている。"
            );

            break;

        case "yui":

            flags.talkedYui = true;

            showMessage(
                "ユイ",
                "発車まで、あと三日だね。"
            );

            break;
    }
}
