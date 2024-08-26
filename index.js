const containerEl = document.querySelector(".container")

const Jesus = ["Lord", "King", "Son of God", "God", "Alpha and Omega"];

let JesusIndex = 0;

let characterIndex = 0;

updateText()

function updateText(){
    characterIndex++;
    containerEl.innerHTML = `
        <h1>Jesus  is the ${Jesus
        [JesusIndex].slice(0,characterIndex)}</h1>`;
        
        if(characterIndex === Jesus
            [JesusIndex].length){
                JesusIndex++
                characterIndex = 0
            }
        if (JesusIndex === Jesus.length) {
            JesusIndex = 0;
        }
        setTimeout(updateText, 400);



}

