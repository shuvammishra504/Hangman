const wordArea = document.querySelector('.word-area'); 

let letter1 = document.querySelector('.span1')
let letter2 = document.querySelector('.span2')
let letter3 = document.querySelector('.span3')
let letter4 = document.querySelector('.span4')
let letter5 = document.querySelector('.span5')
let letter6 = document.querySelector('.span6')
let letter7 = document.querySelector('.span7')
let letter8 = document.querySelector('.span8')
let letter9 = document.querySelector('.span9')
let letter10 = document.querySelector('.span10')

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


    let words =['naphtha','awkward','abruptly', 'foxglove', 'lengths', 'subway', 'absurd', 'frazzled', 'lucky', 'swivel','abyss', 'frizzled', 'luxury', 'syndrome', 'affix', 'fuchsia', 'lymph', 'thriftless', 'askew', 'funny', 'marquis', 'thumbscrew', 'avenue', 'gabby', 'matrix', 'topaz', 'galaxy', 'megahertz', 'transcript', 'axiom', 'galvanize', 'microwave', 'transgress', 'azure', 'gazebo', 'mnemonic', 'transplant', 'bagpipes', 'giaour', 'mystify', 'triphthong', 'bandwagon', 'gizmo', 'twelfth', 'banjo', 'glowworms', 'nightclub', 'twelfths', 'bayou', 'glyph']

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

    // splitting the letters
    let splitRandom = randomWordValue.split("");

    let lengthOfWords = splitRandom.length;
    if(lengthOfWords === 5){
        letter1.className = "finalBlock";
        letter2.className = "finalBlock";
        letter3.className = "finalBlock";
        letter4.className = "finalBlock";
        letter5.className = "finalBlock";
    }
    if(lengthOfWords === 6){
        letter1.className = "finalBlock";
        letter2.className = "finalBlock";
        letter3.className = "finalBlock";
        letter4.className = "finalBlock";
        letter5.className = "finalBlock";
        letter6.className = "finalBlock";
    }
    if(lengthOfWords === 7){
        letter1.className = "finalBlock";
        letter2.className = "finalBlock";
        letter3.className = "finalBlock";
        letter4.className = "finalBlock";
        letter5.className = "finalBlock";
        letter6.className = "finalBlock";
        letter7.className = "finalBlock";
    }
    if(lengthOfWords === 8){
        letter1.className = "finalBlock";
        letter2.className = "finalBlock";
        letter3.className = "finalBlock";
        letter4.className = "finalBlock";
        letter5.className = "finalBlock";
        letter6.className = "finalBlock";
        letter7.className = "finalBlock";
        letter8.className = "finalBlock";
    }
    if(lengthOfWords === 9){
        letter1.className = "finalBlock";
        letter2.className = "finalBlock";
        letter3.className = "finalBlock";
        letter4.className = "finalBlock";
        letter5.className = "finalBlock";
        letter6.className = "finalBlock";
        letter7.className = "finalBlock";
        letter8.className = "finalBlock";
        letter9.className = "finalBlock";
    }
    if(lengthOfWords === 10){
        letter1.className = "finalBlock";
        letter2.className = "finalBlock";
        letter3.className = "finalBlock";
        letter4.className = "finalBlock";
        letter5.className = "finalBlock";
        letter6.className = "finalBlock";
        letter7.className = "finalBlock";
        letter8.className = "finalBlock";
        letter9.className = "finalBlock";
        letter10.className = "finalBlock";
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
    ibtn.addEventListener('click', ClickI);
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
            var letter = "a";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    a.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    a.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    a.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    a.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    a.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6style.color = "white";
                    a.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    a.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    a.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    a.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    a.style.border = "1px solid green";
                }
                }
                else{
                    a.style.border = "1px solid red";
                }
            }
        function ClickB(){
            var letter = "b";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    b.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    b.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    b.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    b.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    b.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6style.color = "white";
                    b.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    b.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    b.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    b.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    b.style.border = "1px solid green";
                }
                }
                else{
                    b.style.border = "1px solid red";
                }
            }
        function ClickC(){
            var letter = "c";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    c.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    c.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    c.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    c.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    c.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6style.color = "white";
                    c.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    c.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    c.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    c.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    c.style.border = "1px solid green";
                }
                }
                else{
                    c.style.border = "1px solid red";
                }
            }
        function ClickD(){
            var letter = "d";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    d.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    d.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    d.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    d.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    d.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6style.color = "white";
                    d.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    d.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    d.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    d.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    d.style.border = "1px solid green";
                }
                }
                else{
                    d.style.border = "1px solid red";
                }
            }
        function ClickE(){
            var letter = "e";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    e.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    e.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    e.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    e.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    e.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6style.color = "white";
                    e.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    e.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    e.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    e.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    e.style.border = "1px solid green";
                }
                }
                else{
                    e.style.border = "1px solid red";
                }
            }
        function ClickF(){
            var letter = "f";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    f.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    f.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    f.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    f.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    f.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6style.color = "white";
                    f.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    f.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    f.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    f.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    f.style.border = "1px solid green";
                }
                }
                else{
                    f.style.border = "1px solid red";
                }
            }
        function ClickG(){
            var letter = "g";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    g.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    g.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    g.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    g.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    g.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6style.color = "white";
                    g.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    g.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    g.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    g.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    g.style.border = "1px solid green";
                }
                }
                else{
                    g.style.border = "1px solid red";
                }
            }
        function ClickH(){
            var letter = "h";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    h.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    h.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    h.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    h.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    h.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6style.color = "white";
                    h.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    h.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    h.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    h.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    h.style.border = "1px solid green";
                }
                }
                else{
                    h.style.border = "1px solid red";
                }
            }
        function ClickI(){
            var letter = "i";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    ibtn.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    ibtn.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    ibtn.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    ibtn.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    ibtn.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6style.color = "white";
                    ibtn.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    ibtn.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    ibtn.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    ibtn.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    ibtn.style.border = "1px solid green";
                }
                }
                else{
                    ibtn.style.border = "1px solid red";
                }
            }
        function ClickJ(){
            var letter = "j";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    j.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    j.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    j.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    j.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    j.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6style.color = "white";
                    j.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    j.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    j.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    j.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    j.style.border = "1px solid green";
                }
                }
                else{
                    j.style.border = "1px solid red";
                }
            }
        function ClickK(){
            var letter = "k";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    k.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    k.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    k.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    k.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    k.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6style.color = "white";
                    k.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    k.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    k.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    k.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    k.style.border = "1px solid green";
                }
                }
                else{
                    k.style.border = "1px solid red";
                }
            }
        function ClickL(){
            var letter = "l";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    l.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    l.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    l.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    l.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    l.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6style.color = "white";
                    l.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    l.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    l.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    l.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    l.style.border = "1px solid green";
                }
                }
                else{
                    l.style.border = "1px solid red";
                }
            }
        function ClickM(){
            var letter = "m";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    m.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    m.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    m.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    m.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    m.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6style.color = "white";
                    m.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    m.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    m.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    m.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    m.style.border = "1px solid green";
                }
                }
                else{
                    m.style.border = "1px solid red";
                }
            }
        function ClickN(){
            var letter = "n";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    n.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    n.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    n.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    n.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    n.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6style.color = "white";
                    n.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    n.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    n.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    n.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    n.style.border = "1px solid green";
                }
                }
                else{
                    n.style.border = "1px solid red";
                }
            }
        function ClickO(){
            var letter = "o";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    o.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    o.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    o.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    o.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    o.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    o.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    o.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    o.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    o.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    o.style.border = "1px solid green";
                }
                }
                else{
                    o.style.border = "1px solid red";
                }
            }
        function ClickP(){
            var letter = "p";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    p.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    p.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    p.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    p.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    p.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    p.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    p.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    p.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    p.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    p.style.border = "1px solid green";
                }
                }
                else{
                    p.style.border = "1px solid red";
                }
            }
        function ClickQ(){
            var letter = "q";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    q.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    q.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    q.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    q.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    q.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    q.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    q.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    q.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    q.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    q.style.border = "1px solid green";
                }
                }
                else{
                    q.style.border = "1px solid red";
                }
            }
        function ClickR(){
            var letter = "r";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    r.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    r.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    r.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    r.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    r.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    r.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    r.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    r.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    r.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    r.style.border = "1px solid green";
                }
                }
                else{
                    r.style.border = "1px solid red";
                }
            }
        function ClickS(){
            var letter = "s";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    s.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    s.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    s.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    s.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    s.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    s.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    s.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    s.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    s.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    s.style.border = "1px solid green";
                }
                }
                else{
                    s.style.border = "1px solid red";
                }
            }
        function ClickT(){
            var letter = "t";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    t.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    t.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    t.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    t.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    t.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    t.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    t.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    t.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    t.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    t.style.border = "1px solid green";
                }
                }
                else{
                    t.style.border = "1px solid red";
                }
            }
        function ClickU(){
            var letter = "u";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    u.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    u.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    u.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    u.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    u.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    u.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    u.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    u.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    u.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    u.style.border = "1px solid green";
                }
                }
                else{
                    u.style.border = "1px solid red";
                }
            }
        function ClickV(){
            var letter = "v";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    v.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    v.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    v.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    v.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    v.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    v.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    v.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    v.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    v.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    v.style.border = "1px solid green";
                }
                }
                else{
                    v.style.border = "1px solid red";
                }
            }
        function ClickW(){
            var letter = "w";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    w.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    w.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    w.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    w.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    w.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    w.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    w.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    w.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    w.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    w.style.border = "1px solid green";
                }
                }
                else{
                    w.style.border = "1px solid red";
                }
            }
        function ClickX(){
            var letter = "x";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    x.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    x.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    x.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    x.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    x.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    x.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    x.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    x.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    x.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    x.style.border = "1px solid green";
                }
                }
                else{
                    x.style.border = "1px solid red";
                }
            }
        function ClickY(){
            var letter = "y";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    y.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    y.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    y.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    y.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    y.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    y.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    y.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    y.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    y.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    y.style.border = "1px solid green";
                }
                }
                else{
                    y.style.border = "1px solid red";
                }
            }
        function ClickZ(){
            var letter = "z";
            if (splitRandom.includes(letter)){
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    z.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    z.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    z.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    z.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    z.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    z.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    z.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    z.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    z.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    z.style.border = "1px solid green";
                }
                }
                else{
                    z.style.border = "1px solid red";
                }
            }
}

checkLetter();

