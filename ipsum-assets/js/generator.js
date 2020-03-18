var xzibit_Isims = [
    "You took the Alkaholik challenge, and lost your balance You underground, we under water drinkin liquid by the gallons. ",
    "I ain't Mary, so ain't a damn thing Poppin'. ",
    "It don't make sense: either you a soldier from the start, Or a actor with a record deal tryin' to play the part. ",
    "Time flies, dreams die, people lose faith, Tryna hide behind a lie with a straight face. ",
    "Never define your success by somebody else's success. I never looked at another man's grass to tell how green mine should be. ",
    "Yo Dawg, I heard you like cars, so we put a car in your car so you can drive while you drive. ",
    "Yo Dawg, I heard you like Dogs, so we put a Dog on a Dog Dawg. ",
    "xzibit. ",
    "Yo Dawg, we heard you like Exhibits so we put XZIBIT in yo Exhibit so you can look at XZIBIT while you Exhibit your XZIBIT in yo Exhibit. ",
    "Yo Dawg, we put One Drive in your Dropbox so you can sync while you sync. ",
    "Yo Dawg, I heard you like memes, So I put a meme in your meme so you can meme while you meme. ",
    "Yo Dawg, I heard you been making fun of me, so I cut my braids off, stopped putting things into other things and decided never to laugh again. ",
    "Yo Dawg, we heard you like spoilers, so we put a spoiler on your spoiler, so you can drive while snape kills Dumbledore. ",
    "How many XZIBITs would XZIBIT Exhibit if XZIBIT could Exhibit XZIBITs. ",
    "Sup Dawg, we heard you like House, so we put House in your house So you can watch House with House. ",
    "Yo Dawg, we heard you like boats, So we put a boat on your boat so you can float while you float. ",
    "Yo Dawg, we heard you like  fish, so we put your car in the ocean. Good luck with that. ",
    "Yo Dawg, I heard you like Math and Science, So I hired Professors with thick accents so you can't Understand while you dont Understand. ",
    "Yo Dawg, I heard you like the Dark Knight. So I gave the Dark Knight a copy of the Dark Night so you can enjoy the Dark Knight Enjoying the Dark Night. ",
    "Yo Dawg, I heard you liked Camping, So we burned down you house",
    "Yo Dawg, I heard you went below your minimum balance, so we charged you a fee for not having any money, then charged a you another fee for not having any money to pay the fee we charged you for not having any money. ",
    "Yo Dawg, I heard you like to run, So we told the cops you did it. ",
    "Yo Dawg, I heard you like 3D printers! So I 3D printed a 3D printer Using your 3D printer, so you could 3d print while you 3D print 3D printers. ",
    "Now that's funny Dawg. ",
    "Yo Dawg, I heard you like keeping your data safe, So I put a hard drive in your transmission so you can back up, while you back up. ",
    "Yo Dawg, I heard you like using wikipedia as a source, so I sourced the sources inside of wikipeia's sources. ",
    "Yo Dawg, I heard you like Coffee, So I put a coffee maker in your car so you can crash while you crash. ",
];

var rand;
var randomArrayValue;
var sup = document.getElementById("supDawg");
var num;
var assignMeSomething = xzibit_Isims.slice(0);
var textCopy = document.getElementById("copy");

function quickClear() {
    sup.innerHTML = "";
    document.getElementById("paragraphs").value = "";
    textCopy.innerHTML = "";
}

function ipsum(){
    sup.innerHTML = "";
    textCopy.innerHTML = "";
	num = document.getElementById("paragraphs").value;
    
    if(100 < num){
        var newp = document.createElement("h2");
        var sumtext = "Please Pick a value that is less than 100 paragraphs long.";
        sup.append(newp);
        newp.innerText = sumtext;

    }else if(num == "" || num == null){ 
        for(var j = 0; j < 5; j++){
            newIpsum();
            assignMeSomething = [];
            assignMeSomething = xzibit_Isims.slice(0);
            if(j!=5){
                textCopy.append("\n");
                textCopy.append("\n");
            }
        }

    }else{
        for(var j = 0; j < num; j++){
            newIpsum();
            assignMeSomething = [];
            assignMeSomething = xzibit_Isims.slice(0);
            if(j!=num){
                textCopy.append("\n");
                textCopy.append("\n");
            }
        }
    }
}


function newIpsum() {
	var ptag = document.createElement("p");
	sup.append(ptag);
    randomNumb();
	for( var i = 0; i <= rand; i++){
        randomizeArrayChoice();
        ptag.append(randomArrayValue);
        textCopy.append(randomArrayValue);
    }
}

/* tools */

function randomNumb(){ 
    rand = Math.floor(Math.random()*(15 - 8 + 1) + 8); 
}

function randomizeArrayChoice(){
    console.log(assignMeSomething);
    randomArrayValue = assignMeSomething[Math.floor(Math.random() * assignMeSomething.length)];
    
    for( var i = 0; i < assignMeSomething.length; i++){
        if(randomArrayValue == assignMeSomething[i]){
            assignMeSomething.splice(i, 1);
        }
    }
}

function addToClipBoard(){
    textCopy.select();
    textCopy.setSelectionRange(0, textCopy.value.length);
    document.execCommand('copy');
}