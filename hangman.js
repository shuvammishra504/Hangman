let gameSection = document.querySelector(".gameSection");

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

const stand = document.querySelector('.stand')
const head = document.querySelector('.head');
const body = document.querySelector('.body');
const hand1 = document.querySelector('.hand1');
const hand2 = document.querySelector('.hand2');
const foot1 = document.querySelector('.foot1');
const foot2 = document.querySelector('.foot2');

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


    let words =['naphtha','awkward','abruptly', 'foxglove', 'lengths', 'subway', 'absurd', 'frazzled', 'lucky', 'swivel','abyss', 'frizzled', 'luxury', 'syndrome', 'affix', 'fuchsia', 'lymph', 'thriftless', 'askew', 'funny', 'marquis', 'thumbscrew', 'avenue', 'gabby', 'matrix', 'topaz', 'galaxy', 'megahertz', 'transcript', 'axiom', 'galvanize', 'microwave', 'transgress', 'azure', 'gazebo', 'mnemonic', 'transplant', 'bagpipes', 'giaour', 'mystify', 'triphthong', 'bandwagon', 'gizmo', 'twelfth', 'banjo', 'glowworms', 'nightclub', 'twelfths', 'bayou', 'glyph', 'nowadays', 'known', 'beekeeper', 'gnarly', 'numbskull', 'unworthy', 'gnostic',   'nymph', 'unzip', 'blitz', 'gossip', 'onyx', 'uptown', 'blizzard', 'grogginess', 'ovary', 'vaporize', 'boggle', 'haiku', 'oxidize', 'vixen', 'book', 'hazard', 'oxygen', 'vodka', 'boxcar', 'hyphen', 'boxful', 'iatrogenic', 'peekaboo', 'vortex', 'buckaroo', 'icebox', 'phlegm', 'voyeurism', 'buffalo', 'injury', 'pixel', 'walkway', 'buffoon','ivory', 'pizza', 'waltz', 'buxom', 'ivy', 'pneumonia', 'wave', 'buzzard', 'jackpot', 'polka', 'wavy', 'buzzing', 'jaundice', 'pshaw', 'waxy', 'buzzwords', 'jawbreaker', 'psyche', 'wellspring', 'caliph', 'jaywalk', 'wheezy', 'cobweb', 'jazziest', 'puzzling', 'whiskey', 'cockiness', 'jazzy', 'quartz', 'whizzing', 'croquet', 'jelly', 'queue', 'whomever', 'crypt', 'jigsaw', 'quips', 'wimpy', 'curacao', 'jinx', 'quixotic', 'witchcraft', 'cycle', 'jiujitsu', 'quiz', 'wizard', 'jockey', 'quizzes', 'woozy', 'dirndl', 'ogging', 'quorum', 'wristwatch', 'disavow', 'joking', 'wyvern', 'dizzying', 'jovial', 'rhubarb', 'xylophone', 'duplex', 'joyful', 'rhythm', 'yachtsman', 'dwarves', 'juicy', 'rickshaw', 'yippee', 'embezzle', 'jukebox', 'schnapps', 'yoked', 'equip', 'jumbo', 'scratch', 'youthful', 'espionage', 'kayak', 'shiv', 'yummy', 'euouae', 'kazoo', 'snazzy', 'zephyr', 'exodus', 'keyhole', 'sphinx', 'zigzag', 'faking', 'khaki', 'spritz', 'zigzag', 'fishhook', 'kilobyte', 'squawk', 'zilch', 'fixable', 'kiosk', 'staff', 'zipper', 'fjord', 'kitsch', 'strength', 'zodiac', 'flapjack', 'kiwifruit', 'strengths', 'zombie', 'flopping', 'klutz', 'stretch', 'fluffiness', 'knapsack', 'stronghold', 'flyby', 'larynx', 'stymied']

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
    console.log(randomWordValue);

    // splitting the letters
    let splitRandom = randomWordValue.split("");

    let lengthOfWords = splitRandom.length;
    console.log(lengthOfWords);
    if(lengthOfWords ===4){
        letter1.className = "finalBlock";
        letter2.className = "finalBlock";
        letter3.className = "finalBlock";
        letter4.className = "finalBlock";
    }
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

    let correctLetters = 0;
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
                a.classList.add('greenA');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    a.style.border = "1px solid green";
                    letter1.setAttribute("right", "win");  
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";
                            letter2.setAttribute("right", "win");   
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                            letter3.setAttribute("right", "win");  
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                            letter4.setAttribute("right", "win");      
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                            letter5.setAttribute("right", "win");      
                        }
                        if(anotherIndex == 5){
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                            letter6.setAttribute("right", "win");  
                            correctLetters += 1;
                            console.log(correctLetters)
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                            letter7.setAttribute("right", "win");  
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                            letter8.setAttribute("right", "win");      
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                            letter9.setAttribute("right", "win");      
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                            letter10.setAttribute("right", "win");  
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    a.style.border = "1px solid green";
                    letter2.setAttribute("right", "win");  
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                            letter3.setAttribute("right", "win");  
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                            letter4.setAttribute("right", "win");  
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                            letter5.setAttribute("right", "win");  
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                            letter6.setAttribute("right", "win");  
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                            letter7.setAttribute("right", "win");  
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                            letter8.setAttribute("right", "win");  
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                            letter9.setAttribute("right", "win");  
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                            letter10.setAttribute("right", "win");  
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    a.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    a.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    a.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6style.color = "white";
                    a.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    a.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    a.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    a.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    a.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    a.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    a.classList.add('newA');
                }
                else if(head.classList.contains('head')){
                    a.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    a.classList.add('newA');
                }
                else if(body.classList.contains('body')){
                    a.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    a.classList.add('newA');
                }
                else if(hand1.classList.contains('hand1')){
                    a.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    a.classList.add('newA');
                }
                else if(hand2.classList.contains('hand2')){
                    a.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    a.classList.add('newA');
                }
                else if(foot1.classList.contains('foot1')){
                    a.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    a.classList.add('newA');
                }
                else if(foot2.classList.contains('foot2')){
                    a.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    a.classList.add('newA');
                }
            }
        function ClickB(){
            var letter = "b";
            if (splitRandom.includes(letter)){
                b.classList.add('greenB');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    b.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    b.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    b.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    b.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    b.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    b.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    b.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    b.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    b.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    b.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    b.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    b.classList.add('newB');
                }
                else if(head.classList.contains('head')){
                    b.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    b.classList.add('newB');
                }
                else if(body.classList.contains('body')){
                    b.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    b.classList.add('newB');
                }
                else if(hand1.classList.contains('hand1')){
                    b.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    b.classList.add('newB');
                }
                else if(hand2.classList.contains('hand2')){
                    b.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    b.classList.add('newB');
                }
                else if(foot1.classList.contains('foot1')){
                    b.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    b.classList.add('newB');
                }
                else if(foot2.classList.contains('foot2')){
                    b.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    b.classList.add('newB');
                }
            }
        function ClickC(){
            var letter = "c";
            if (splitRandom.includes(letter)){
                c.classList.add('greenC');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    c.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    c.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    c.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    c.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    c.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    c.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    c.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    c.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    c.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    c.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    c.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    c.classList.add('newC');
                }
                else if(head.classList.contains('head')){
                    c.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    c.classList.add('newC');
                }
                else if(body.classList.contains('body')){
                    c.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    c.classList.add('newC');
                }
                else if(hand1.classList.contains('hand1')){
                    c.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    c.classList.add('newC');
                }
                else if(hand2.classList.contains('hand2')){
                    c.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    c.classList.add('newC');
                }
                else if(foot1.classList.contains('foot1')){
                    c.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    c.classList.add('newC');
                }
                else if(foot2.classList.contains('foot2')){
                    c.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    c.classList.add('newC');
                }
            }
        function ClickD(){
            var letter = "d";
            if (splitRandom.includes(letter)){
                d.classList.add('greenD');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    d.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    d.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    d.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    d.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    d.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    d.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    d.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    d.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    d.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    d.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    d.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    d.classList.add('newD');
                }
                else if(head.classList.contains('head')){
                    d.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    d.classList.add('newD');
                }
                else if(body.classList.contains('body')){
                    d.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    d.classList.add('newD');
                }
                else if(hand1.classList.contains('hand1')){
                    d.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    d.classList.add('newD');
                }
                else if(hand2.classList.contains('hand2')){
                    d.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    d.classList.add('newD');
                }
                else if(foot1.classList.contains('foot1')){
                    d.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    d.classList.add('newD');
                }
                else if(foot2.classList.contains('foot2')){
                    d.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    d.classList.add('newD');
                }
            }
        function ClickE(){
            var letter = "e";
            if (splitRandom.includes(letter)){
                e.classList.add('greenE');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    e.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    e.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    e.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    e.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    e.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                            console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    e.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                            console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    e.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    e.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    e.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    e.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    e.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    e.classList.add('newE');
                }
                else if(head.classList.contains('head')){
                    e.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    e.classList.add('newE');
                }
                else if(body.classList.contains('body')){
                    e.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    e.classList.add('newE');
                }
                else if(hand1.classList.contains('hand1')){
                    e.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    e.classList.add('newE');
                }
                else if(hand2.classList.contains('hand2')){
                    e.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    e.classList.add('newE');
                }
                else if(foot1.classList.contains('foot1')){
                    e.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    e.classList.add('newE');
                }
                else if(foot2.classList.contains('foot2')){
                    e.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    e.classList.add('newE');
                }
            }
        function ClickF(){
            var letter = "f";
            if (splitRandom.includes(letter)){
                f.classList.add('greenF');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    f.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    f.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    f.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    f.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    f.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    f.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    f.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    f.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    f.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    f.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    f.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    f.classList.add('newF');
                }
                else if(head.classList.contains('head')){
                    f.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    f.classList.add('newF');
                }
                else if(body.classList.contains('body')){
                    f.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    f.classList.add('newF');
                }
                else if(hand1.classList.contains('hand1')){
                    f.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    f.classList.add('newF');
                }
                else if(hand2.classList.contains('hand2')){
                    f.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    f.classList.add('newF');
                }
                else if(foot1.classList.contains('foot1')){
                    f.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    f.classList.add('newF');
                }
                else if(foot2.classList.contains('foot2')){
                    f.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    f.classList.add('newF');
                }
            }
        function ClickG(){
            var letter = "g";
            if (splitRandom.includes(letter)){
                g.classList.add('greenG');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    g.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    g.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    g.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    g.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    g.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    g.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                            console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    g.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    g.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    g.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    g.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    g.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    g.classList.add('newG');
                }
                else if(head.classList.contains('head')){
                    g.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    g.classList.add('newG');
                }
                else if(body.classList.contains('body')){
                    g.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    g.classList.add('newG');
                }
                else if(hand1.classList.contains('hand1')){
                    g.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    g.classList.add('newG');
                }
                else if(hand2.classList.contains('hand2')){
                    g.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    g.classList.add('newG');
                }
                else if(foot1.classList.contains('foot1')){
                    g.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    g.classList.add('newG');
                }
                else if(foot2.classList.contains('foot2')){
                    g.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    g.classList.add('newG');
                }
            }
        function ClickH(){
            var letter = "h";
            if (splitRandom.includes(letter)){
                h.classList.add('greenH');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    h.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    h.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    h.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    h.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    h.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    h.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    h.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    h.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    h.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    h.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    h.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    h.classList.add('newH');
                }
                else if(head.classList.contains('head')){
                    h.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    h.classList.add('newH');
                }
                else if(body.classList.contains('body')){
                    h.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    h.classList.add('newH');
                }
                else if(hand1.classList.contains('hand1')){
                    h.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    h.classList.add('newH');
                }
                else if(hand2.classList.contains('hand2')){
                    h.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    h.classList.add('newH');
                }
                else if(foot1.classList.contains('foot1')){
                    h.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    h.classList.add('newH');
                }
                else if(foot2.classList.contains('foot2')){
                    h.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    h.classList.add('newH');
                }
            }
        function ClickI(){
            var letter = "i";
            if (splitRandom.includes(letter)){
                ibtn.classList.add('greenI');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    ibtn.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    ibtn.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    ibtn.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    ibtn.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    ibtn.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    ibtn.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    ibtn.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    ibtn.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    ibtn.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                        if(anotherIndex8 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    ibtn.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    ibtn.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    ibtn.classList.add('newI');
                }
                else if(head.classList.contains('head')){
                    ibtn.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    ibtn.classList.add('newI');
                }
                else if(body.classList.contains('body')){
                    ibtn.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    ibtn.classList.add('newI');
                }
                else if(hand1.classList.contains('hand1')){
                    ibtn.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    ibtn.classList.add('newI');
                }
                else if(hand2.classList.contains('hand2')){
                    ibtn.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    ibtn.classList.add('newI');
                }
                else if(foot1.classList.contains('foot1')){
                    ibtn.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    ibtn.classList.add('newI');
                }
                else if(foot2.classList.contains('foot2')){
                    ibtn.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    ibtn.classList.add('newI');
                }
            }
        function ClickJ(){
            var letter = "j";
            if (splitRandom.includes(letter)){
                j.classList.add('greenJ');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    j.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    j.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    j.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    j.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    j.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    j.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    j.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    j.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    j.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                        if(anotherIndex8 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    j.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    j.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    j.classList.add('newJ');
                }
                else if(head.classList.contains('head')){
                    j.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    j.classList.add('newJ');
                }
                else if(body.classList.contains('body')){
                    j.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    j.classList.add('newJ');
                }
                else if(hand1.classList.contains('hand1')){
                    j.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    j.classList.add('newJ');
                }
                else if(hand2.classList.contains('hand2')){
                    j.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    j.classList.add('newJ');
                }
                else if(foot1.classList.contains('foot1')){
                    j.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    j.classList.add('newJ');
                }
                else if(foot2.classList.contains('foot2')){
                    j.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    j.classList.add('newJ');
                }
            }
        function ClickK(){
            var letter = "k";
            if (splitRandom.includes(letter)){
                k.classList.add('greenK');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    k.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    k.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    k.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    k.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    k.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    k.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    k.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    k.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    k.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                        if(anotherIndex8 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    k.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    k.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    k.classList.add('newK');
                }
                else if(head.classList.contains('head')){
                    k.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    k.classList.add('newK');
                }
                else if(body.classList.contains('body')){
                    k.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    k.classList.add('newK');
                }
                else if(hand1.classList.contains('hand1')){
                    k.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    k.classList.add('newK');
                }
                else if(hand2.classList.contains('hand2')){
                    k.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    k.classList.add('newK');
                }
                else if(foot1.classList.contains('foot1')){
                    k.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    k.classList.add('newK');
                }
                else if(foot2.classList.contains('foot2')){
                    k.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    k.classList.add('newK');
                }
            }
        function ClickL(){
            var letter = "l";
            if (splitRandom.includes(letter)){
                l.classList.add('greenL');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    l.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    l.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    l.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    l.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    l.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    l.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    l.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    l.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    l.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                        if(anotherIndex8 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    l.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    l.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    l.classList.add('newL');
                }
                else if(head.classList.contains('head')){
                    l.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    l.classList.add('newL');
                }
                else if(body.classList.contains('body')){
                    l.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    l.classList.add('newL');
                }
                else if(hand1.classList.contains('hand1')){
                    l.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    l.classList.add('newL');
                }
                else if(hand2.classList.contains('hand2')){
                    l.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    l.classList.add('newL');
                }
                else if(foot1.classList.contains('foot1')){
                    l.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    l.classList.add('newL');
                }
                else if(foot2.classList.contains('foot2')){
                    l.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    l.classList.add('newL');
                }
            }
        function ClickM(){
            var letter = "m";
            if (splitRandom.includes(letter)){
                m.classList.add('greenM');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    m.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    m.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    m.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    m.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    m.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    m.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    m.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    m.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    m.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                        if(anotherIndex8 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    m.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    m.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    m.classList.add('newM');
                }
                else if(head.classList.contains('head')){
                    m.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    m.classList.add('newM');
                }
                else if(body.classList.contains('body')){
                    m.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    m.classList.add('newM');
                }
                else if(hand1.classList.contains('hand1')){
                    m.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    m.classList.add('newM');
                }
                else if(hand2.classList.contains('hand2')){
                    m.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    m.classList.add('newM');
                }
                else if(foot1.classList.contains('foot1')){
                    m.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    m.classList.add('newM');
                }
                else if(foot2.classList.contains('foot2')){
                    m.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    m.classList.add('newM');
                }
            }
        function ClickN(){
            var letter = "n";
            if (splitRandom.includes(letter)){
                n.classList.add('greenN');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    n.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    n.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    n.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    n.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    n.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    n.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    n.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    n.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    n.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    n.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    n.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    n.classList.add('newN');
                }
                else if(head.classList.contains('head')){
                    n.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    n.classList.add('newN');
                }
                else if(body.classList.contains('body')){
                    n.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    n.classList.add('newN');
                }
                else if(hand1.classList.contains('hand1')){
                    n.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    n.classList.add('newN');
                }
                else if(hand2.classList.contains('hand2')){
                    n.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    n.classList.add('newN');
                }
                else if(foot1.classList.contains('foot1')){
                    n.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    n.classList.add('newN');
                }
                else if(foot2.classList.contains('foot2')){
                    n.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    n.classList.add('newN');
                }
            }
        function ClickO(){
            var letter = "o";
            if (splitRandom.includes(letter)){
                o.classList.add('greenO');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    o.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    o.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    o.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    o.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    o.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    o.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    o.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    o.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    o.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                        if(anotherIndex8 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    o.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    o.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    o.classList.add('newO');
                }
                else if(head.classList.contains('head')){
                    o.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    o.classList.add('newO');
                }
                else if(body.classList.contains('body')){
                    o.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    o.classList.add('newO');
                }
                else if(hand1.classList.contains('hand1')){
                    o.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    o.classList.add('newO');
                }
                else if(hand2.classList.contains('hand2')){
                    o.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    o.classList.add('newO');
                }
                else if(foot1.classList.contains('foot1')){
                    o.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    o.classList.add('newO');
                }
                else if(foot2.classList.contains('foot2')){
                    o.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    o.classList.add('newO');
                }
            }
        function ClickP(){
            var letter = "p";
            if (splitRandom.includes(letter)){
                p.classList.add('greenP');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    p.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    p.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    p.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    p.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    p.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    p.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    p.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    p.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    p.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                            console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    p.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    p.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    p.classList.add('newP');
                }
                else if(head.classList.contains('head')){
                    p.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    p.classList.add('newP');
                }
                else if(body.classList.contains('body')){
                    p.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    p.classList.add('newP');
                }
                else if(hand1.classList.contains('hand1')){
                    p.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    p.classList.add('newP');
                }
                else if(hand2.classList.contains('hand2')){
                    p.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    p.classList.add('newP');
                }
                else if(foot1.classList.contains('foot1')){
                    p.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    p.classList.add('newP');
                }
                else if(foot2.classList.contains('foot2')){
                    p.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    p.classList.add('newP');
                }
            }
        function ClickQ(){
            var letter = "q";
            if (splitRandom.includes(letter)){
                q.classList.add('greenQ');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    q.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    q.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    q.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    q.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    q.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    q.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    q.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    q.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    q.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    q.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    q.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    q.classList.add('newQ');
                }
                else if(head.classList.contains('head')){
                    q.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    q.classList.add('newQ');
                }
                else if(body.classList.contains('body')){
                    q.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    q.classList.add('newQ');
                }
                else if(hand1.classList.contains('hand1')){
                    q.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    q.classList.add('newQ');
                }
                else if(hand2.classList.contains('hand2')){
                    q.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    q.classList.add('newQ');
                }
                else if(foot1.classList.contains('foot1')){
                    q.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    q.classList.add('newQ');
                }
                else if(foot2.classList.contains('foot2')){
                    q.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    q.classList.add('newQ');
                }
            }
        function ClickR(){
            var letter = "r";
            if (splitRandom.includes(letter)){
                r.classList.add('greenR');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    r.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    r.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    r.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    r.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    r.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    r.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    r.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    r.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    r.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    r.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    r.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    r.classList.add('newR');
                }
                else if(head.classList.contains('head')){
                    r.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    r.classList.add('newR');
                }
                else if(body.classList.contains('body')){
                    r.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    r.classList.add('newR');
                }
                else if(hand1.classList.contains('hand1')){
                    r.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    r.classList.add('newR');
                }
                else if(hand2.classList.contains('hand2')){
                    r.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    r.classList.add('newR');
                }
                else if(foot1.classList.contains('foot1')){
                    r.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    r.classList.add('newR');
                }
                else if(foot2.classList.contains('foot2')){
                    r.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    r.classList.add('newR');
                }
            }
        function ClickS(){
            var letter = "s";
            if (splitRandom.includes(letter)){
                s.classList.add('greenS');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    s.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    s.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    s.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    s.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    s.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    s.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    s.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    s.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    s.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    s.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    s.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    s.classList.add('newS');
                }
                else if(head.classList.contains('head')){
                    s.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    s.classList.add('newS');
                }
                else if(body.classList.contains('body')){
                    s.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    s.classList.add('newS');
                }
                else if(hand1.classList.contains('hand1')){
                    s.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    s.classList.add('newS');
                }
                else if(hand2.classList.contains('hand2')){
                    s.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    s.classList.add('newS');
                }
                else if(foot1.classList.contains('foot1')){
                    s.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    s.classList.add('newS');
                }
                else if(foot2.classList.contains('foot2')){
                    s.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    s.classList.add('newS');
                }
            }
        function ClickT(){
            var letter = "t";
            if (splitRandom.includes(letter)){
                t.classList.add('greenT');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    t.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    t.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    t.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    t.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    t.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    t.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    t.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    t.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    t.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    t.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    t.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    t.classList.add('newT');
                }
                else if(head.classList.contains('head')){
                    t.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    t.classList.add('newT');
                }
                else if(body.classList.contains('body')){
                    t.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    t.classList.add('newT');
                }
                else if(hand1.classList.contains('hand1')){
                    t.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    t.classList.add('newT');
                }
                else if(hand2.classList.contains('hand2')){
                    t.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    t.classList.add('newT');
                }
                else if(foot1.classList.contains('foot1')){
                    t.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    t.classList.add('newT');
                }
                else if(foot2.classList.contains('foot2')){
                    t.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    t.classList.add('newT');
                }
            }
        function ClickU(){
            var letter = "u";
            if (splitRandom.includes(letter)){
                u.classList.add('greenU');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    u.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    u.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    u.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    u.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    u.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    u.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    u.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    u.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    u.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    u.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    u.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    u.classList.add('newU');
                }
                else if(head.classList.contains('head')){
                    u.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    u.classList.add('newU');
                }
                else if(body.classList.contains('body')){
                    u.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    u.classList.add('newU');
                }
                else if(hand1.classList.contains('hand1')){
                    u.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    u.classList.add('newU');
                }
                else if(hand2.classList.contains('hand2')){
                    u.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    u.classList.add('newU');
                }
                else if(foot1.classList.contains('foot1')){
                    u.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    u.classList.add('newU');
                }
                else if(foot2.classList.contains('foot2')){
                    u.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    u.classList.add('newU');
                }
            }
        function ClickV(){
            var letter = "v";
            if (splitRandom.includes(letter)){
                v.classList.add('greenV');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    v.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    v.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    v.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    v.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    v.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    v.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    v.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    v.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    v.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    v.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    v.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    v.classList.add('newV');
                }
                else if(head.classList.contains('head')){
                    v.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    v.classList.add('newV');
                }
                else if(body.classList.contains('body')){
                    v.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    v.classList.add('newV');
                }
                else if(hand1.classList.contains('hand1')){
                    v.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    v.classList.add('newV');
                }
                else if(hand2.classList.contains('hand2')){
                    v.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    v.classList.add('newV');
                }
                else if(foot1.classList.contains('foot1')){
                    v.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    v.classList.add('newV');
                }
                else if(foot2.classList.contains('foot2')){
                    v.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    v.classList.add('newV');
                }
            }
        function ClickW(){
            var letter = "w";
            if (splitRandom.includes(letter)){
                w.classList.add('greenW');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    w.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    w.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    w.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    w.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    w.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    w.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    w.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    w.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    w.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    w.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    w.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    w.classList.add('newW');
                }
                else if(head.classList.contains('head')){
                    w.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    w.classList.add('newW');
                }
                else if(body.classList.contains('body')){
                    w.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    w.classList.add('newW');
                }
                else if(hand1.classList.contains('hand1')){
                    w.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    w.classList.add('newW');
                }
                else if(hand2.classList.contains('hand2')){
                    w.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    w.classList.add('newW');
                }
                else if(foot1.classList.contains('foot1')){
                    w.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    w.classList.add('newW');
                }
                else if(foot2.classList.contains('foot2')){
                    w.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    w.classList.add('newW');
                }
            }
        function ClickX(){
            var letter = "x";
            if (splitRandom.includes(letter)){
                x.classList.add('greenX');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    x.style.border = "1px solid green";
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    x.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    x.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    x.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    x.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    x.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    x.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    x.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    x.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    x.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    x.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    x.classList.add('newX');
                }
                else if(head.classList.contains('head')){
                    x.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    x.classList.add('newX');
                }
                else if(body.classList.contains('body')){
                    x.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    x.classList.add('newX');
                }
                else if(hand1.classList.contains('hand1')){
                    x.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    x.classList.add('newW');
                }
                else if(hand2.classList.contains('hand2')){
                    x.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    x.classList.add('newW');
                }
                else if(foot1.classList.contains('foot1')){
                    x.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    x.classList.add('newW');
                }
                else if(foot2.classList.contains('foot2')){
                    x.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    x.classList.add('newW');
                }
            }
        function ClickY(){
            var letter = "y";
            if (splitRandom.includes(letter)){
                y.classList.add('greenY');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    y.style.border = "1px solid green";
                    y.classList.add('greenY');
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    y.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    y.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    y.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    y.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    y.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    y.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    y.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    y.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    y.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    y.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    y.classList.add('newY');
                }
                else if(head.classList.contains('head')){
                    y.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    y.classList.add('newY');
                }
                else if(body.classList.contains('body')){
                    y.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    y.classList.add('newY');
                }
                else if(hand1.classList.contains('hand1')){
                    y.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    y.classList.add('newY');
                }
                else if(hand2.classList.contains('hand2')){
                    y.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    y.classList.add('newY');
                }
                else if(foot1.classList.contains('foot1')){
                    y.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    y.classList.add('newY');
                }
                else if(foot2.classList.contains('foot2')){
                    y.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    y.classList.add('newY');
                }
            }
        function ClickZ(){
            var letter = "z";
            if (splitRandom.includes(letter)){
                z.classList.add('greenZ');
                let indexOfLetter = splitRandom.indexOf(letter);
                if(indexOfLetter == 0){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter1.innerHTML = letter;
                    letter1.style.color = "white";
                    z.style.border = "1px solid green";
                    z.classList.add('greenZ');
                    let anotherIndex = splitRandom.indexOf(letter, 1);
                    console.log(anotherIndex)
                        if(anotherIndex == 1){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter2.innerHTML = letter;
                            letter2.style.color = "white";    
                        }
                        if(anotherIndex == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";    
                        }
                        if(anotherIndex == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";    
                        }
                        if(anotherIndex == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";    
                        }
                        if(anotherIndex == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";    
                        }
                        if(anotherIndex == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";    
                        }
                        if(anotherIndex == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";    
                        }
                        if(anotherIndex == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";    
                        }
                        if(anotherIndex == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";    
                        }
                    
                }
                if(indexOfLetter == 1){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter2.innerHTML = letter;
                    letter2.style.color = "white";
                    z.style.border = "1px solid green";
                    let anotherIndex1 = splitRandom.indexOf(letter, 2);
                        if(anotherIndex1 == 2){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter3.innerHTML = letter;
                            letter3.style.color = "white";
                        }
                        if(anotherIndex1 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex1 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex1 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex1 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex1 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex1 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex1 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 2){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter3.innerHTML = letter;
                    letter3.style.color = "white";
                    z.style.border = "1px solid green";
                    let anotherIndex2 = splitRandom.indexOf(letter, 3);
                        if(anotherIndex2 == 3){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter4.innerHTML = letter;
                            letter4.style.color = "white";
                        }
                        if(anotherIndex2 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex2 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex2 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex2 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex2 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex2 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 3){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter4.innerHTML = letter;
                    letter4.style.color = "white";
                    z.style.border = "1px solid green";
                    let anotherIndex3 = splitRandom.indexOf(letter, 4);
                        if(anotherIndex3 == 4){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter5.innerHTML = letter;
                            letter5.style.color = "white";
                        }
                        if(anotherIndex3 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex3 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex3 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex3 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex3 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 4){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter5.innerHTML = letter;
                    letter5.style.color = "white";
                    z.style.border = "1px solid green";
                    let anotherIndex4 = splitRandom.indexOf(letter, 5);
                        if(anotherIndex4 == 5){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter6.innerHTML = letter;
                            letter6.style.color = "white";
                        }
                        if(anotherIndex4 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex4 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex4 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex4 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 5){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter6.innerHTML = letter;
                    letter6.style.color = "white";
                    z.style.border = "1px solid green";
                     let anotherIndex5 = splitRandom.indexOf(letter, 6);
                        if(anotherIndex5 == 6){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter7.innerHTML = letter;
                            letter7.style.color = "white";
                        }
                        if(anotherIndex5 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex5 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex5 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 6){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter7.innerHTML = letter;
                    letter7.style.color = "white";
                    z.style.border = "1px solid green";
                    let anotherIndex6 = splitRandom.indexOf(letter, 7);
                        if(anotherIndex6 == 7){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter8.innerHTML = letter;
                            letter8.style.color = "white";
                        }
                        if(anotherIndex6 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex6 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 7){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter8.innerHTML = letter;
                    letter8.style.color = "white";
                    z.style.border = "1px solid green";
                     let anotherIndex7 = splitRandom.indexOf(letter, 8);
                        if(anotherIndex7 == 8){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter9.innerHTML = letter;
                            letter9.style.color = "white";
                        }
                        if(anotherIndex7 == 9){
                            correctLetters += 1;
                            console.log(correctLetters)
                            letter10.innerHTML = letter;
                            letter10.style.color = "white";
                        }
                }
                if(indexOfLetter == 8){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter9.innerHTML = letter;
                    letter9.style.color = "white";
                    z.style.border = "1px solid green";
                    let anotherIndex8 = splitRandom.indexOf(letter, 9);
                    if(anotherIndex8 == 9){
                        correctLetters += 1;
                        console.log(correctLetters)
                        letter10.innerHTML = letter;
                        letter10.style.color = "white";
                    }
                }
                if(indexOfLetter == 9){
                    correctLetters += 1;
                    console.log(correctLetters)
                    letter10.innerHTML = letter;
                    letter10.style.color = "white";
                    z.style.border = "1px solid green";
                }
                }
                else if(stand.classList.contains('stand')){
                    z.style.border = "1px solid red";
                    stand.classList.add('newStand');
                    stand.classList.remove('stand');
                    z.classList.add('newZ');
                }
                else if(head.classList.contains('head')){
                    z.style.border = "1px solid red"
                    head.classList.add('newhead');
                    head.classList.remove('head');
                    z.classList.add('newZ');
                }
                else if(body.classList.contains('body')){
                    z.style.border = "1px solid red";
                    body.classList.add('newBody');
                    body.classList.remove('body');
                    z.classList.add('newZ');
                }
                else if(hand1.classList.contains('hand1')){
                    z.style.border = "1px solid red";
                    hand1.classList.add('newHand1');
                    hand1.classList.remove('hand1');
                    z.classList.add('newZ');
                }
                else if(hand2.classList.contains('hand2')){
                    z.style.border = "1px solid red";
                    hand2.classList.add('newHand2');
                    hand2.classList.remove('hand2');
                    z.classList.add('newZ');
                }
                else if(foot1.classList.contains('foot1')){
                    z.style.border = "1px solid red";
                    foot1.classList.add('newFoot1');
                    foot1.classList.remove('foot1');
                    z.classList.add('newZ');
                }
                else if(foot2.classList.contains('foot2')){
                    z.style.border = "1px solid red";
                    foot2.classList.add('newFoot2');
                    foot2.classList.remove('foot2');
                    z.classList.add('newZ');
                }
            }
            function winWinWin(){
                if(correctLetters === lengthOfWords){
                    gameSection.style.display = "none";
                    correctLetters = 0;
                }
            }
            setInterval(winWinWin, 1000)

}   

checkLetter();
