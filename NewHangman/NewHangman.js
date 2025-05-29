    let stand = document.querySelector('.stand');
    let head = document.querySelector('.head');
    let hand1 = document.querySelector('.hand1');
    let hand2 = document.querySelector('.hand2');
    let foot1 = document.querySelector('.foot1');
    let foot2 = document.querySelector('.foot2');
    let body = document.querySelector('.body');
    
    let spans = document.querySelector('.spans');
    let words = ['transplant', 'naphtha','awkward','abruptly', 'foxglove', 'lengths', 'subway', 'absurd', 'frazzled', 'lucky', 'swivel','abyss', 'frizzled', 'luxury', 'syndrome', 'affix', 'fuchsia', 'lymph', 'thriftless', 'askew', 'funny', 'marquis', 'thumbscrew', 'avenue', 'gabby', 'matrix', 'topaz', 'galaxy', 'megahertz', 'transcript', 'axiom', 'galvanize', 'microwave', 'transgress', 'azure', 'gazebo', 'mnemonic', 'bagpipes', 'giaour', 'mystify', 'triphthong', 'bandwagon', 'gizmo', 'twelfth', 'banjo', 'glowworms', 'nightclub', 'twelfths', 'bayou', 'glyph', 'nowadays', 'known', 'beekeeper', 'gnarly', 'numbskull', 'unworthy', 'gnostic',   'nymph', 'unzip', 'blitz', 'gossip', 'onyx', 'uptown', 'blizzard', 'grogginess', 'ovary', 'vaporize', 'boggle', 'haiku', 'oxidize', 'vixen', 'book', 'hazard', 'oxygen', 'vodka', 'boxcar', 'hyphen', 'boxful', 'iatrogenic', 'peekaboo', 'vortex', 'buckaroo', 'icebox', 'phlegm', 'voyeurism', 'buffalo', 'injury', 'pixel', 'walkway', 'buffoon','ivory', 'pizza', 'waltz', 'buxom', 'ivy', 'pneumonia', 'wave', 'buzzard', 'jackpot', 'polka', 'wavy', 'buzzing', 'jaundice', 'pshaw', 'waxy', 'buzzwords', 'jawbreaker', 'psyche', 'wellspring', 'caliph', 'jaywalk', 'wheezy', 'cobweb', 'jazziest', 'puzzling', 'whiskey', 'cockiness', 'jazzy', 'quartz', 'whizzing', 'croquet', 'jelly', 'queue', 'whomever', 'crypt', 'jigsaw', 'quips', 'wimpy', 'curacao', 'jinx', 'quixotic', 'witchcraft', 'cycle', 'jiujitsu', 'quiz', 'wizard', 'jockey', 'quizzes', 'woozy', 'dirndl', 'ogging', 'quorum', 'wristwatch', 'disavow', 'joking', 'wyvern', 'dizzying', 'jovial', 'rhubarb', 'xylophone', 'duplex', 'joyful', 'rhythm', 'yachtsman', 'dwarves', 'juicy', 'rickshaw', 'yippee', 'jukebox', 'schnapps', 'yoked', 'equip', 'jumbo', 'scratch', 'youthful', 'espionage', 'kayak', 'shiv', 'yummy', 'euouae', 'kazoo', 'snazzy', 'zephyr', 'exodus', 'keyhole', 'sphinx', 'zigzag', 'faking', 'khaki', 'spritz', 'zigzag', 'fishhook', 'kilobyte', 'squawk', 'zilch', 'fixable', 'kiosk', 'staff', 'zipper', 'fjord', 'kitsch', 'strength', 'zodiac', 'flapjack', 'kiwifruit', 'strengths', 'zombie', 'flopping', 'klutz', 'stretch', 'fluffiness', 'knapsack', 'stronghold', 'flyby', 'larynx', 'stymied'];

    // random words
    function getRandomWord(min, max){
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let randomWord = Math.floor(step2) + min;
        return randomWord;
    }
    //getting a random word
    let randomWordCalc = getRandomWord(0, words.length - 1);
    // console.log(randomWordCalc);
    let randomWordValue = words[randomWordCalc];
    // console.log(randomWordValue);

    //splitting word
    let splitWord = randomWordValue.split("");
    let wordLength = splitWord.length;

    //Creating Span
    for(let i = 0; i < wordLength; i++){
        let newSpan = document.createElement(`span`);
        newSpan.classList.add('span');
        newSpan.classList.add(`span${i}`);
        spans.appendChild(newSpan);
        newSpan.innerHTML = "?";
    }

    //Hints
    let firstHintLetter;
    let secondHintLetter;
    let thirdHintLetter;

    let firstLetterRepitionInSplitWord = 0;
    let secondLetterRepitionInSplitWord = 0;
    let thirdLetterRepitionInSplitWord = 0;

    let firstLetterRepitionInCorrectWord = 0;
    let secondLetterRepitionInCorrectWord = 0;
    let thirdLetterRepitionInCorrectWord = 0;

    let correctArr = [];
    if(4 < randomWordValue.length){
        let hintArr = [];
        let firstHintIndex;
        let secondHintIndex;

        for(let i = 0; i < 2; i++){
            let aVar =  getRandomWordForHint(0, splitWord.length - 1);
            let updatedHintArr = hintArr.push(aVar);
            if(hintArr[0] === hintArr[1]){
                if(hintArr[1] !== splitWord.length - 1){
                    hintArr[1] += 1;
                }
                if(hintArr[1] === splitWord.length - 1){
                    hintArr[1] -= 1;
                }
            }

            firstHintIndex = hintArr[0];
            secondHintIndex = hintArr[1];
        }
        firstHintLetter = splitWord[firstHintIndex];
        secondHintLetter = splitWord[secondHintIndex];

        let variable = document.querySelector(`.span${firstHintIndex}`);
        variable.innerHTML = firstHintLetter;
        variable.style.color = "#ADEFD1FF";
        correctArr.push(firstHintLetter);
        
        let variable1 = document.querySelector(`.span${secondHintIndex}`);
        variable1.innerHTML = secondHintLetter;
        variable1.style.color = "#ADEFD1FF";
        correctArr.push(secondHintLetter);

        for(let i = 0; i < splitWord.length; i++){
            if(splitWord[i] == firstHintLetter){
                firstLetterRepitionInSplitWord++
            }
        }
        
        for(let i = 0; i < splitWord.length; i++){
            if(splitWord[i] == secondHintLetter){
                secondLetterRepitionInSplitWord++
            }
        }

        for(let i = 0; i < correctArr.length; i++){
            if(correctArr[i] == firstHintLetter){
                firstLetterRepitionInCorrectWord++
            }
        }
        
        for(let i = 0; i < correctArr.length; i++){
            if(correctArr[i] == secondHintLetter){
                secondLetterRepitionInCorrectWord++
            }
        }

        // console.log(firstHintLetter, secondHintLetter)
        // console.log(firstLetterRepitionInSplitWord, secondLetterRepitionInSplitWord)
        // console.log(firstLetterRepitionInCorrectWord, secondLetterRepitionInCorrectWord)
        // console.log(firstHintIndex);
        // console.log(secondHintIndex);
    }

    function getRandomWordForHint(minNum, maxNum){
        let step1 = maxNum - minNum + 1;
        let step2 = Math.random() * step1;
        let randomWord = Math.floor(step2) + minNum;
        return randomWord;
    }
    
    //button Functions
    let hangmanVar = 1;
    let timesBtn = 0;

    let a = document.querySelector('.a').addEventListener('click', aBtn);
    let b = document.querySelector('.b').addEventListener('click', bBtn);
    let c = document.querySelector('.c').addEventListener('click', cBtn);
    let d = document.querySelector('.d').addEventListener('click', dBtn);
    let e = document.querySelector('.e').addEventListener('click', eBtn);
    let f = document.querySelector('.f').addEventListener('click', fBtn);
    let g = document.querySelector('.g').addEventListener('click', gBtn);
    let h = document.querySelector('.h').addEventListener('click', hBtn);
    let i = document.querySelector('.i').addEventListener('click', iBtn);
    let j = document.querySelector('.j').addEventListener('click', jBtn);
    let k = document.querySelector('.k').addEventListener('click', kBtn);
    let l = document.querySelector('.l').addEventListener('click', lBtn);
    let m = document.querySelector('.m').addEventListener('click', mBtn);
    let n = document.querySelector('.n').addEventListener('click', nBtn);
    let o = document.querySelector('.o').addEventListener('click', oBtn);
    let p = document.querySelector('.p').addEventListener('click', pBtn);
    let q = document.querySelector('.q').addEventListener('click', qBtn);
    let r = document.querySelector('.r').addEventListener('click', rBtn);
    let s = document.querySelector('.s').addEventListener('click', sBtn);
    let t = document.querySelector('.t').addEventListener('click', tBtn);
    let u = document.querySelector('.u').addEventListener('click', uBtn);
    let v = document.querySelector('.v').addEventListener('click', vBtn);
    let w = document.querySelector('.w').addEventListener('click', wBtn);
    let x = document.querySelector('.x').addEventListener('click', xBtn);
    let y = document.querySelector('.y').addEventListener('click', yBtn);
    let z = document.querySelector('.z').addEventListener('click', zBtn);

    //keyboard input
    let keyInput = document.getElementById("keyboardInput");
    let keyInputValue = document.getElementById("keyInputVal"); 
    keyInput.oninput = myFunction;
    function myFunction(){
        keyInputValue.innerText = keyInput.value;
        let KeyboardInput = keyInputValue.innerText;
        let inputValue = KeyboardInput.toLocaleLowerCase();
        console.log(inputValue);
        let funcCallVar = inputValue + "Btn";
        let asci = inputValue.charCodeAt(0);
        if(asci >= 97 && asci <= 122){
            window[funcCallVar]();
            keyInput.value = "";
        }
        else{
            keyInput.focus();
            keyInput.value = "";
        }
    }


    function aBtn(){
        let aButton = document.querySelector('.a');
        let letter = "a";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            aButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            aButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            aButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            aButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            aButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            aButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            aButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            aButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        aButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function bBtn(){
        let bButton = document.querySelector('.b');
        let letter = "b";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            bButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            bButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            bButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            bButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            bButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            bButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            bButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            bButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        bButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function cBtn(){
        let cButton = document.querySelector('.c');
        let letter = "c";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            cButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            cButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            cButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            cButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            cButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            cButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            cButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            cButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        cButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function dBtn(){
        let dButton = document.querySelector('.d');
        let letter = "d";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
        dButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            dButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            dButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            dButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            dButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            dButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            dButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
        }
        dButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function eBtn(){
        let eButton = document.querySelector('.e');
        let letter = "e";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
        eButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            eButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            eButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            eButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            eButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            eButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            eButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            eButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        eButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function fBtn(){
        let fButton = document.querySelector('.f');
        let letter = "f";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
        fButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            fButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            fButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            fButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            fButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            fButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            fButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            fButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        fButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function gBtn(){
        let gButton = document.querySelector('.g');
        let letter = "g";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            gButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            gButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            gButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            gButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            gButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            gButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            gButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            gButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        gButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function hBtn(){
        let hButton = document.querySelector('.h');
        let letter = "h";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            hButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            hButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            hButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            hButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            hButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            hButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            hButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            hButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        hButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function iBtn(){
        let iButton = document.querySelector('.i');
        let letter = "i";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    correctArr.push(letter);
                }
            }
            iButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            iButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            iButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            iButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            iButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            iButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            iButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            iButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        iButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function jBtn(){
        let jButton = document.querySelector('.j');
        let letter = "j";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            jButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            jButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            jButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            jButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            jButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            jButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            jButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            jButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        jButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function kBtn(){
        let kButton = document.querySelector('.k');
        let letter = "k";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            kButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            kButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            kButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            kButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            kButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            kButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            kButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            kButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        kButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function lBtn(){
        let lButton = document.querySelector('.l');
        let letter = "l";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            lButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            lButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            lButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            lButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            lButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            lButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            lButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            lButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        lButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function mBtn(){
        let mButton = document.querySelector('.m');
        let letter = "m";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            mButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            mButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            mButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            mButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            mButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            mButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            mButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            mButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        mButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function nBtn(){
        let nButton = document.querySelector('.n');
        let letter = "n";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
                                
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            nButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            nButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            nButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            nButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            nButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            nButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            nButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            nButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        nButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function oBtn(){
        let oButton = document.querySelector('.o');
        let letter = "o";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            oButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            oButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            oButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            oButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            oButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            oButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            oButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            oButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        oButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function pBtn(){
        let pButton = document.querySelector('.p');
        let letter = "p";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            pButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            pButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            pButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            pButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            pButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            pButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            pButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            pButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        pButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function qBtn(){
        let qButton = document.querySelector('.q');
        let letter = "q";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            qButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            qButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            qButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            qButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            qButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            qButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            qButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            qButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        qButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function rBtn(){
        let rButton = document.querySelector('.r');
        let letter = "r";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            rButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            rButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            rButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            rButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            rButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            rButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            rButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            rButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        rButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function sBtn(){
        let sButton = document.querySelector('.s');
        let letter = "s";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            sButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            sButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            sButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            sButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            sButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            sButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            sButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            sButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        sButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function tBtn(){
        let tButton = document.querySelector('.t');
        let letter = "t";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            tButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            tButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            tButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            tButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            tButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            tButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            tButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            tButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        tButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function uBtn(){
        let uButton = document.querySelector('.u');
        let letter = "u";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            uButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            uButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            uButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            uButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            uButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            uButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            uButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            uButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        uButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function vBtn(){
        let vButton = document.querySelector('.v');
        let letter = "v";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            vButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            vButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            vButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            vButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            vButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            vButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            vButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            vButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        vButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function wBtn(){
        let wButton = document.querySelector('.w');
        let letter = "w";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            wButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            wButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            wButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            wButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            wButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            wButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            wButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            wButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        wButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function xBtn(){
        let xButton = document.querySelector('.x');
        let letter = "x";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            xButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            xButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            xButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            xButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            xButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            xButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            xButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            xButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        xButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function yBtn(){
        let yButton = document.querySelector('.y');
        let letter = "y";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            yButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            yButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            yButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            yButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            yButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            yButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            yButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            yButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        yButton.style.pointerEvents = "none";
        keyInput.focus();
    }
    function zBtn(){
        let zButton = document.querySelector('.z');
        let letter = "z";
        let endLet = 1;
        if(splitWord.includes(letter)){
            for(let i = 0; i < wordLength; i++){
                indLet = randomWordValue.slice(i, endLet);
                endLet = endLet + 1;
                if(indLet === letter){
                    let variable = document.querySelector(`.span${i}`);
                    variable.innerHTML = letter;
                    variable.style.color = "#ADEFD1FF";
                    if(letter === firstHintLetter || letter === secondHintLetter){
                        if(firstHintLetter === letter){
                            if(firstLetterRepitionInSplitWord === firstLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    firstLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
    
                        if(secondHintLetter === letter){
                            if(secondLetterRepitionInSplitWord === secondLetterRepitionInCorrectWord){
    
                            }
                            else{
                                for(let i = 1; i <= secondLetterRepitionInSplitWord - secondLetterRepitionInCorrectWord; i++){
                                    correctArr.push(letter);
                                    secondLetterRepitionInCorrectWord += 1;
                                    console.log(firstLetterRepitionInSplitWord - firstLetterRepitionInCorrectWord)
                                }
                            }
                        }
                    }
                    else{
                        correctArr.push(letter);
                    }
                }
            }
            zButton.style.border = "1px solid rgb(55, 224, 148)";
        }
        else if(hangmanVar === 1){
            stand.style.display = "block";
            hangmanVar = 2;
            zButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 2){
            head.style.display = "block";
            hangmanVar = 3;
            zButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 3){
            body.style.display = "block";
            hangmanVar = 4;
            zButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 4){
            hand1.style.display = "block";
            hangmanVar = 5;
            zButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 5){
            hand2.style.display = "block";
            hangmanVar = 6;
            zButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 6){
            foot1.style.display = "block";
            hangmanVar = 7;
            zButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        else if(hangmanVar === 7){
            foot2.style.display = "block";
            hangmanVar = 8;
            zButton.style.border = "1px solid rgb(255, 48, 48)";
        }
        zButton.style.pointerEvents = "none";
        keyInput.focus();
    }

    //Win or Lose
    setInterval(loseFunction, 1000);
    setInterval(winFunction, 1000);
    function winFunction(){
        let sortedWord = splitWord.sort()
        let sortedCorr = correctArr.sort();
        // console.log(sortedCorr)
        for(let i = 0; i < splitWord.length; i++){
            if(sortedCorr.length === sortedWord.length && sortedWord[i] === sortedCorr[i]){
                document.querySelector('.game-section').style.display = "none";
                document.querySelector('.win-section').style.display = "block";
            }
        }
    }
    function loseFunction(){
        if(hangmanVar === 8){
            document.querySelector('.game-section').style.display = "none";
            document.querySelector('.lose-section').style.display = "block";
        }
    }

    let correction = document.querySelector('.winCorrectWord').innerHTML += " " + randomWordValue;
    let correction1 = document.querySelector('.loseCorrectWord').innerHTML += " " + randomWordValue;