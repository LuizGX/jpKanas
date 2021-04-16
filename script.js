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
var syllables = hiragana;
var chronometer;
var currentQuestion;
var showSyllable;

function startChronometer() {
    let timer = document.getElementById('intervalTimer').value * 1000;
    if (chronometer === undefined) {
        chronometer = setInterval(function () { refresh() }, timer);
    }
}

function chooseHiragana() {
    syllables = hiragana;
    refresh();
}

function chooseKatakana() {
    syllables = katakana;
    refresh();
}

function stopChronometer() {
    clearInterval(chronometer);
    chronometer = undefined;
}

function keyPressed(event) {
    if (event.key === " ")
        toggleAnswer();
    if (event.key === "ArrowRight")
        refresh();
}

function toggleAnswer() {
    if (showSyllable == currentQuestion[0]) {
        showSyllable = currentQuestion[1]
    } else {
        showSyllable = currentQuestion[0]
    }
    document.getElementById("selection").innerHTML = showSyllable;
}

refresh();

function refresh() {
    let index = Math.floor((Math.random() * syllables.length));
    currentQuestion = syllables[index];
    showSyllable = currentQuestion[0];
    document.getElementById("selection").innerHTML = showSyllable;
}