let currentMap = "station_day1";

const text =
    document.getElementById("text");

const speaker =
    document.getElementById("speaker");

function showMessage(name,message){

    if(speaker){
        speaker.textContent = name;
    }

    if(text){
        text.textContent = message;
    }
}

function renderMap(){

    const map =
        document.getElementById("map");

    if(!map) return;

    document
        .querySelectorAll(".map-object")
        .forEach(e => e.remove());

    const data =
        MAPS[currentMap];

    data.objects.forEach(obj => {

        const el =
            document.createElement("div");

        el.className =
            "map-object";

        el.textContent =
            obj.icon;

        el.style.position =
            "absolute";

        el.style.left =
            obj.x + "px";

        el.style.top =
            obj.y + "px";

        map.appendChild(el);

    });

    renderPlayer();
}

function nextDay(){

    if(currentMap === "station_day1"){

        currentMap = "station_day2";

        showMessage(
            "",
            "二日目になった。"
        );

    }

    else if(currentMap === "station_day2"){

        currentMap = "station_day3";

        showMessage(
            "",
            "三日目になった。"
        );

    }

    renderMap();
}

window.onload = () => {

    renderMap();

    showMessage(
        "",
        "発車まで、あと三日。"
    );

};
