const songs =  ["Luna Muerta", "La Palmera", "¿Que sentís, corazón mio?","Arroyuelo del molino", "Villancico","Chiquilla",  "Por el montecico sola", "Gritos daba la morenica...","Mal ferida iba la garza", "La flor de la villa", "¿Con qué la lavaré?", "De los álamos vengo, Madre", "Imperceptile", "Noria vieja", "Lluvia", "Caracolera", "Farsa", "Farol", "Elegia al caballero del olmedo", "Tonadilla", "Chove", "La virgen va caminando", "Partida", "No me habléis, Conde (I)", "Ya no más(II)", "Avila(I)", "Montesa(II)"]
const generateStarts = () => {
    const mask = document.querySelector('.mask');
    songs.map((song, index) => {
        const action = document.createElement('div');
        const point = document.createElement('span');
        const randomAnimationDuration = 3 + Math.random() * 3;
        const randomTopPercentage =5 + Math.random() * 100 - 5;
        const randomLeftPercentage = Math.random() < 0.5 ? Math.random() * 30 : 60 + Math.random() * 30;
        
        action.classList.add('action');
        point.classList.add('point');
        point.id=`point${index}`;
        point.style.animation = `blink ${randomAnimationDuration}s infinite`;
        point.style.top = randomTopPercentage + '%';
        point.style.left = randomLeftPercentage + '%';

        action.style.top = randomTopPercentage + '%';
        action.style.left = randomLeftPercentage + '%';
        action.setAttribute('onclick', `showSong(${index}, 'point${index}')`);
        
        action.appendChild(point);
        mask.appendChild(action);
    })
    };

    const showSong = (index, id) => {
    const myPoint = document.getElementById(id);
    myPoint.classList.remove('point')
    myPoint.classList.add('point_text__show');
    myPoint.textContent = `"${songs[index]}"`;
    setTimeout(function() {
    myPoint.textContent = '';
    myPoint.classList.remove('point_text__show');
    myPoint.classList.add('point')
    }, 5000);
}

generateStarts();