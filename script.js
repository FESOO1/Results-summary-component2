const summaryContainer = document.querySelector('.main-itself-right-summary');

// RETRIEVING THE DATA

async function retrievingTheData() {
    try {
        const request = new Request('./data.json');

        const response = await fetch(request);

        if (!response.ok) {
            throw new Error(response.status);
        };

        const data = await response.json();

        displayingTheData(data);
    }
    catch(error) {
        console.log(error);
    };
};

retrievingTheData();

// DISPLAYING THE DATA

function displayingTheData(data) {
    for (let i = 0; i < data.length; i++) {
        // SUMMARY 
        const summaryItself = document.createElement('div');
        summaryItself.classList.add('main-itself-right-summary-itself');
        
        // SUMMARY LEFT
        const summaryItselfLeft = document.createElement('div');
        summaryItselfLeft.classList.add('main-itself-right-summary-itself-left');
        const summaryItselfLeftImage = document.createElement('img');
        summaryItselfLeftImage.classList.add('main-itself-right-summary-itself-left-image');
        summaryItselfLeftImage.src = data[i].icon;
        const summaryItselfLeftText = document.createElement('h4');
        summaryItselfLeftText.classList.add('main-itself-right-summary-itself-left-text');
        summaryItselfLeftText.textContent = data[i].category;

        summaryItselfLeft.appendChild(summaryItselfLeftImage);
        summaryItselfLeft.appendChild(summaryItselfLeftText);

        // SUMMARY RIGHT
        const summaryItselfRight = document.createElement('div');
        summaryItselfRight.classList.add('main-itself-right-summary-itself-right');
        const summaryItselfRightText = document.createElement('h4');
        summaryItselfRightText.classList.add('main-itself-right-summary-itself-right-text');
        summaryItselfRightText.textContent = data[i].score;
        const summaryItselfRightTextTwo = document.createElement('h4');
        summaryItselfRightTextTwo.classList.add('main-itself-right-summary-itself-right-text');
        summaryItselfRightTextTwo.textContent = '/ 100';

        summaryItselfRight.appendChild(summaryItselfRightText);
        summaryItselfRight.appendChild(summaryItselfRightTextTwo);

        // APPENDING
        summaryItself.appendChild(summaryItselfLeft);
        summaryItself.appendChild(summaryItselfRight);
        summaryContainer.appendChild(summaryItself);
    };
};