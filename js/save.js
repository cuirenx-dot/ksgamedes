const SAVE_KEY = "hasshamade3days";

function loadSave() {

    const data = localStorage.getItem(SAVE_KEY);

    if (!data) {

        return JSON.parse(JSON.stringify(DEFAULT_SAVE));

    }

    return JSON.parse(data);
}

function saveGame(saveData) {

    localStorage.setItem(
        SAVE_KEY,
        JSON.stringify(saveData)
    );
}

function resetSave() {

    localStorage.removeItem(SAVE_KEY);

    return JSON.parse(JSON.stringify(DEFAULT_SAVE));
}

function unlockEnding(id) {

    gameData.endings[id] = true;

    saveGame(gameData);
}

function getEndingRate() {

    const endings = Object.values(gameData.endings);

    const total = endings.length;

    const unlocked = endings.filter(v => v).length;

    return Math.floor(
        unlocked / total * 100
    );
}
