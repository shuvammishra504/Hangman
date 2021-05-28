const wordArea = document.querySelector('.word-area'); 

const stand = document.getElementById('stand');
const head = document.getElementById('head');
const body = document.getElementById('body');
const hand1 = document.getElementById('hand1');
const hand2 = document.getElementById('hand2');
const foot1 = document.getElementById('foot1');
const foot2 = document.getElementById('foot2');

const a = document.querySelector('.a')
const b = document.querySelector('.b')
const c = document.querySelector('.c')
const d = document.querySelector('.d')
const e = document.querySelector('.e')
const f = document.querySelector('.f')
const g = document.querySelector('.g')
const h = document.querySelector('.h')
const ibtn = document.querySelector('.i')
const j = document.querySelector('.j')
const k = document.querySelector('.k')
const l = document.querySelector('.l')
const m = document.querySelector('.m')
const n = document.querySelector('.n')
const o = document.querySelector('.o')
const p = document.querySelector('.p')
const q = document.querySelector('.q')
const r = document.querySelector('.r')
const s = document.querySelector('.s')
const t = document.querySelector('.t')
const u = document.querySelector('.u')
const v = document.querySelector('.v')
const w = document.querySelector('.w')
const x = document.querySelector('.x')
const y = document.querySelector('.y')
const z = document.querySelector('.z')

const input = document.querySelector('.input')
const button = document.querySelector('.button')
const ptag = document.querySelector('.ptag')


    let words =['abruptly', 'foxglove', 'lengths', 'subway', 'absurd', 'frazzled', 'lucky', 'swivel','abyss', 'frizzled', 'luxury', 'syndrome', 'affix', 'fuchsia', 'lymph', 'thriftless', 'askew', 'funny', 'marquis', 'thumbscrew', 'avenue', 'gabby', 'matrix', 'topaz', 'awkward', 'galaxy', 'megahertz', 'transcript']

    // random words
    function getRandomWord(min, max){
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let randomWord = Math.floor(step2) + min;
        return randomWord;
    }
    //getting a random word
    let randomWordCalc = getRandomWord(0, words.length - 1);
    let randomWordValue = words[randomWordCalc];
    console.log(randomWordValue)

    let splitRandom = randomWordValue.split("");
    // splitting the letters
    for(var i = 0; i < splitRandom.length; i += 1) {
        var div = document.createElement("span");
        div.className = "finalBlock";
        div.innerHTML = '?';
        wordArea.appendChild(div);
    }

    getRandomWord();

function checkLetter(){
    a.addEventListener('click', ClickA);
    b.addEventListener('click', ClickB);
    c.addEventListener('click', ClickC);
    d.addEventListener('click', ClickD);
    e.addEventListener('click', ClickE);
    f.addEventListener('click', ClickF);
    g.addEventListener('click', ClickG);
    h.addEventListener('click', ClickH);
    i.addEventListener('click', ClickI);
    j.addEventListener('click', ClickJ);
    k.addEventListener('click', ClickK);
    l.addEventListener('click', ClickL);
    m.addEventListener('click', ClickM);
    n.addEventListener('click', ClickN);
    o.addEventListener('click', ClickO);
    p.addEventListener('click', ClickP);
    q.addEventListener('click', ClickQ);
    r.addEventListener('click', ClickR);
    s.addEventListener('click', ClickS);
    t.addEventListener('click', ClickT);
    u.addEventListener('click', ClickU);
    v.addEventListener('click', ClickV);
    w.addEventListener('click', ClickW);
    x.addEventListener('click', ClickX);
    y.addEventListener('click', ClickY);
    z.addEventListener('click', ClickZ);
        // checking if the letter is there
        function ClickA(){
            var letter = "s";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                console.log(indexOfLetter)
            }
        }
}

checkLetter();

