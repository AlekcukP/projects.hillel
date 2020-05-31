let chooseColor = document.querySelector('#color'),
    circle = document.querySelector('#figureCircle'),
    square =  document.querySelector('#figureSquare'),
    triangle =  document.querySelector('#figureTriangle'),
    typeOfFigure = document.querySelector('#figure');
    
let sizeOfMove = 10,
    units = 'px',
    positionX = Number(),
    positionY = Number();


chooseColor.addEventListener('change', selectFigure);
document.addEventListener('keydown', selectFigure);
typeOfFigure.addEventListener('change', displayFigure); 

function selectFigure (e){

    switch(typeOfFigure.value){
    
        case 'circle':
            paintFigure(circle); 
            moveFigure(e, circle); 
        break;

        case 'square': 
            paintFigure(square); 
            moveFigure(e, square);
        break;

        case 'triangle': 
            paintFigure(triangle); 
            moveFigure(e, triangle);
        break;
    }
}

function displayFigure (){
    
let pickedFigure;
let figureDisabled1;
let figureDisabled2;

    switch(typeOfFigure.value){
        
        case 'circle':
            pickedFigure = circle;
            figureDisabled1 = square;
            figureDisabled2 = triangle;
        break;

        case 'square': 
            pickedFigure = square;
            figureDisabled1 = circle;
            figureDisabled2 = triangle;
        break;

        case 'triangle': 
            pickedFigure = triangle;
            figureDisabled1 = square;
            figureDisabled2 = circle;
        break;
    }

pickedFigure.classList.remove('hidden');
figureDisabled1.classList.add('hidden');
figureDisabled2.classList.add('hidden');
}


function paintFigure (figure){
    figure.style.backgroundColor = chooseColor.value;
    figure.style.borderColor = chooseColor.value;
}

function moveFigure (e, figure){

    switch (e.code) {
        case 'ArrowRight': figure.style.left = changePosition(true, true) ; break;
        case 'ArrowLeft': figure.style.left = changePosition(true, false) ; break;
        case 'ArrowUp': figure.style.top = changePosition(false, false) ; break;
        case 'ArrowDown': figure.style.top = changePosition(false, true) ; break;
        default:
    }
}

function changePosition (axisY, move){

    let result;

    if (axisY){

        if(move){
            positionY += sizeOfMove;
        } 
        else {
            positionY -=sizeOfMove;
        }

        result = positionY + units;

    } else{

        if(move){
        positionX += sizeOfMove;
        } 
        else {
        positionX -=sizeOfMove;
        }

        result = positionX + units;
    }


    return result;
}
