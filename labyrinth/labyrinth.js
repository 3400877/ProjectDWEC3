const labyrinth = document.getElementById("labyrinth-grid");
const labyDiv = document.getElementById("labyrinth-div");
const labyCells = document.getElementsByClassName("grid-cell");
const startCell = document.getElementById("start-cell");
const endCell = document.getElementById("end-cell");
const character = document.getElementById("character");
const labyCellsArray = [...labyCells];

/*const populateGrid = () => {
    
    const rowStart = Math.floor(Math.random() * 4);
    const rowEnd = Math.floor(Math.random() * 4);

    for (let index = 0; index < 16; index++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        labyrinth.appendChild(cell);

        if (rowStart * 4 == index) {
            cell.classList.add("start-cell");
        } else if (rowEnd * 4 + 3 == index) {
            cell.classList.add("end-cell");
        }

        if (!cell.classList.contains("end-cell") && !cell.classList.contains("start-cell") && Math.round(Math.random()) == 1 ) {
            cell.classList.add("blocked");
        }
    }

}*/

//populateGrid();

/*const addCharacter = () => {
    const character = document.createElement("div");
    character.classList.add("character");
    character.textContent = 'P';
    labyrinth.getElementsByClassName
}

addCharacter()
*/

const endX = 3;
const endY = 3;

const getCell = (x, y) => labyrinth.getElementsByClassName("grid-cell").item(y * 4 + x);
const getCoordinates = (cell) => {
    const index = labyCellsArray.findIndex((element) => element == cell);
    console.log(index);
    let y = index / 4;
    let x = index % 4;
    return { x, y };
};

const cCords = getCoordinates(startCell); // CharacterCords
console.log(cCords);
const nCords = structuredClone(cCords); // 

const events = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];

const moveCharacter = (key) => {
    switch (key) {
        case 'ArrowLeft':
            if (nCords.x - 1 >= 0) {
                nCords.x -= 1;
            }
            break;
        case 'ArrowUp':
            if (nCords.y - 1 >= 0) {
                nCords.y -= 1;
            }
            break;
        case 'ArrowRight':
            if (nCords.x + 1 <= 4) {
                nCords.x += 1;
            }
            break;
        case 'ArrowDown':
            if (nCords.y + 1 <= 4) {
                nCords.y += 1;
            }
    }
    console.log(nCords);
    if ((nCords != cCords) && !getCell(nCords.x, nCords.y).classList.contains("blocked")) {
        getCell(cCords.x, cCords.y).classList.add("blocked");
        getCell(nCords.x, nCords.y).appendChild(character);
    }
    cCords.x = nCords.x;
    cCords.y = nCords.y;
};

labyDiv.addEventListener("keydown", (event) => {
    event.preventDefault();
    moveCharacter(event.key);
    if (nCords.x == endX && nCords.y == endY) {
        validateMaze();
    }
}, true);

const validateMaze = () => {
    // Improve later
    labyrinth.remove();
    sessionStorage.setItem("validated", "true");
};

const userIsValidated = () => sessionStorage.getItem("validated") === "true";

console.log(userIsValidated());
if (userIsValidated()) {
    labyrinth.classList.toggle("hidden");
}