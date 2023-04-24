console.log("helloooooooo");

let readMoreOne = document.getElementById('read-more1');
let summaryParagraphOne = document.getElementById('summary1');

function showSummaryOne (){
    summaryParagraphOne.style.display = 'block';
};

readMoreOne.addEventListener('click', showSummaryOne);

// add a read more instead of making this super complicated lols

let readMoreTwo = document.getElementById('read-more2');
let summaryParagraphTwo = document.getElementById('summary2');

function showSummaryTwo (){
    summaryParagraphTwo.style.display = 'block';
};

readMoreTwo.addEventListener('click', showSummaryTwo);




let readMoreThree = document.getElementById('read-more3');
let summaryParagraphThree = document.getElementById('summary3');

function showSummaryThree (){
    summaryParagraphThree.style.display = 'block';
};

readMoreThree.addEventListener('click', showSummaryThree);