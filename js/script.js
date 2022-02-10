// Question 1

const getRemainder = (a, b) => a % b;
// console.log(getRemainder(13, 2));


// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=a43a545549494a5db923a503d5dec715";

const resultsHTML = document.querySelector(".resultscontainer");
async function getGames() {

    try {
        const response = await fetch(url);
        const data = await response.json();
        const roundUp = data.results;

        // console.log(results);

        resultsHTML.innerHTML = " ";

        for (let i = 0; i < roundUp.length; i++) {
        // console.log(roundUp[i].name);
        // console.log(roundUp[i].rating);
        // console.log(roundUp[i].tags.length);
        
        if (i === 8) {
            break;
        }

        resultsHTML.innerHTML += `<div class="result"><p>Name: ${roundUp[i].name}</p>
        <p>Rating: ${roundUp[i].rating}</p>
        <p>Tags: ${roundUp[i].tags.length}</p></div>`
    }
        
    } catch (error) {
        resultsHTML.innerHTML += `An error has occured`;
    }
    
}

getGames()