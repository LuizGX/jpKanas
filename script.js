var hiragana = [

    ['a', 'あ'],
    ['i', 'い'],
    ['u', 'う'],
    ['e', 'え'],
    ['o', 'お'],

    ['sa', 'さ'],
    ['shi', 'し'],
    ['su', 'す'],
    ['se', 'せ'],
    ['so', 'そ'],

    ['na', 'な'],
    ['ni', 'に'],
    ['nu', 'ぬ'],
    ['ne', 'ね'],
    ['no', 'の'],

    ['ka', 'か'],
    ['ki', 'き'],
    ['ku', 'く'],
    ['ke', 'け'],
    ['ko', 'こ'],

    ['ta', 'た'],
    ['chi', 'ち'],
    ['tsu', 'つ'],
    ['te', 'て'],
    ['to', 'と'],

    ['ha', 'は'],
    ['hi', 'ひ'],
    ['fu', 'ふ'],
    ['he', 'へ'],
    ['ho', 'ほ'],

    ['ma', 'ま'],
    ['mi', 'み'],
    ['mu', 'む'],
    ['me', 'め'],
    ['mo', 'も'],

    ['ra', 'ら'],
    ['ri', 'り'],
    ['ru', 'る'],
    ['re', 'れ'],
    ['ro', 'ろ'],

    ['ya', 'や'],
    ['yu', 'ゆ'],
    ['yo', 'よ'],

    ['wa', 'わ'],
    ['wo', 'を'],
    ['n', 'ん']
];
var katakana = [

    ['a', 'ア'],
    ['i', 'イ'],
    ['u', 'ウ'],
    ['e', 'エ'],
    ['o', 'オ'],

    ['sa', 'サ'],
    ['shi', 'シ'],
    ['su', 'ス'],
    ['se', 'セ'],
    ['so', 'ソ'],

    ['na', 'ナ'],
    ['ni', 'ニ'],
    ['nu', 'ヌ'],
    ['ne', 'ネ'],
    ['no', 'ノ'],

    ['ka', 'カ'],
    ['ki', 'キ'],
    ['ku', 'ク'],
    ['ke', 'ケ'],
    ['ko', 'コ'],

    ['ta', 'タ'],
    ['chi', 'チ'],
    ['tsu', 'ツ'],
    ['te', 'テ'],
    ['to', 'ト'],

    ['ha', 'ハ'],
    ['hi', 'ヒ'],
    ['fu', 'フ'],
    ['he', 'ヘ'],
    ['ho', 'ホ'],

    ['ma', 'マ'],
    ['mi', 'ミ'],
    ['mu', 'ム'],
    ['me', 'メ'],
    ['mo', 'モ'],

    ['ra', 'ラ'],
    ['ri', 'リ'],
    ['ru', 'ル'],
    ['re', 'レ'],
    ['ro', 'ロ'],

    ['ya', 'ヤ'],
    ['yu', 'ユ'],
    ['yo', 'ヨ'],

    ['wa', 'ワ'],
    ['wo', 'ヲ'],
    ['n', 'ン']

];

var chronometer;

var currentQuestion;
var syllables = hiragana;
var showSyllable;

var syllablesList = [];

var previous_index;
var forward_index;
var index;

function startChronometer() {
    let timer = document.getElementById('intervalTimer').value * 1000;
    if (chronometer === undefined) {
        chronometer = setInterval(function () {
            setTimeout(() => {
                toggleAnswer();
            }, timer / 2);
            refreshAndUpdateHistory();
        }, timer);
    }
}

function chooseHiragana() {
    syllables = hiragana;
    refreshAndUpdateHistory();
}

function chooseKatakana() {
    syllables = katakana;
    refreshAndUpdateHistory();
}

function stopChronometer() {
    clearInterval(chronometer);
    chronometer = undefined;
}

function keyPressed(event) {
    if (event.key === " ")
        toggleAnswer();
    if (event.key === "ArrowLeft")
        navigateLeft();
    if (event.key === "ArrowRight")
        navigateRight();
}

function toggleAnswer() {
    if (showSyllable == currentQuestion[0]) {
        showSyllable = currentQuestion[1]
    } else {
        showSyllable = currentQuestion[0]
    }
    document.getElementById("selection").innerHTML = showSyllable;
}

innitializeSyllables();

function innitializeSyllables() {
    refreshAndUpdateHistory();
    previous_index = 0;
    forward_index = syllablesList.length;
}

function refreshAndUpdateHistory() {
    index = Math.floor((Math.random() * syllables.length));
    currentQuestion = syllables[index];

    syllablesList.push(currentQuestion);

    previous_index = syllablesList.length - 2;
    forward_index = syllablesList.length;

    updateSyllableOnScreen();

    console.log(syllablesList);
}

function navigateLeft() {
    if (previous_index > -1) {

        currentQuestion = syllablesList[previous_index];
        updateSyllableOnScreen();

        if (previous_index >= 0) {
            previous_index = previous_index - 1;
            forward_index = forward_index - 1;
        }
    }
}

function navigateRight() {
    if (forward_index < syllablesList.length) {
        currentQuestion = syllablesList[forward_index];
        updateSyllableOnScreen();
        previous_index = previous_index + 1;
        forward_index = forward_index + 1;

    } else {
        refreshAndUpdateHistory();
    }
}

function updateSyllableOnScreen() {
    showSyllable = currentQuestion[0];
    document.getElementById("selection").innerHTML = showSyllable;
}