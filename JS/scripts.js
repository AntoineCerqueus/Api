window.onload = function () {
    globalEpisodes.classList.add("hiden");
    globalQuotes.classList.add("hiden");
    selection.classList.add("hiden");
};


// =======================================
// NAVIGATION
// =======================================


const globalCharacters = document.getElementById('characters-container');
const globalEpisodes = document.getElementById('episodes-container');
const globalQuotes = document.getElementById('quotes-container');
const selection = document.getElementById('selection');
let navChar = document.getElementById('nav-char');
let navEp = document.getElementById('nav-ep');
let navQuotes = document.getElementById('nav-quotes');


navChar.addEventListener('click', () => {
    globalEpisodes.classList.add('hiden');
    globalQuotes.classList.add('hiden');
    globalCharacters.classList.remove('hiden');
    navChar.classList.add('transform');
    navEp.classList.remove('transform');
    navQuotes.classList.remove('transform');
    navQuotes.innerHTML = "Quotes";
});

navEp.addEventListener('click', () => {
    globalCharacters.classList.add('hiden');
    globalQuotes.classList.add('hiden');
    globalEpisodes.classList.remove('hiden');
    navChar.classList.remove('transform');
    navEp.classList.add('transform');
    navQuotes.classList.remove('transform');
    navQuotes.innerHTML = "Quotes";
});

navQuotes.addEventListener('click', () => {
    globalCharacters.classList.add('hiden');
    globalEpisodes.classList.add('hiden');
    globalQuotes.classList.remove('hiden');
    navChar.classList.remove('transform');
    navEp.classList.remove('transform');
    navQuotes.classList.add('transform');
    navQuotes.innerHTML = "RéPLIQUES";
});


// =======================================
// CHARACTERS
// =======================================


// loadCharacterList();

// function loadGlobalCharacters (){
//     let request = new XMLHttpRequest();
//     request.onreadystatechange = () => {
//         if(this.readyState === 4 && this.status === 200) {
//             console.log(request.responseText);
//             loadGlobalCharacters(JSON.parse(this.responseText));
//         }       
//     }
//     request.open("GET","https://breakingbadapi.com/api/characters", true);
//     request.send();
// }


function loadGlobalCharacters() {
    let request = new XMLHttpRequest();

    request.onload = function () {
        console.log(JSON.parse(this.responseText));
        showGlobalCharacters(JSON.parse(this.responseText));
        data = (JSON.parse(this.responseText));
        console.log(data);

    }
    request.open("GET", "https://breakingbadapi.com/api/characters", true);
    request.send();
}

loadGlobalCharacters();

let button = document.createElement('button');
button.innerHTML = "BACK";
selection.appendChild(button);


function showGlobalCharacters(characters) {
    for (let character of characters) {
        const characterCard = document.createElement('div');
        characterCard.classList.add('display');
        characterCard.id = character.char_id;

        const characterImg = document.createElement('img');
        characterImg.src = character.img;
        characterCard.appendChild(characterImg);

        const characterName = document.createElement('div');
        characterName.innerHTML = "Name : " + character.name;
        characterName.classList.add('name');
        characterCard.appendChild(characterName);

        const characterNickname = document.createElement('div');
        characterNickname.innerHTML = "NickName : " + character.nickname;
        characterCard.appendChild(characterNickname);
        // console.log(characterCard);

        globalCharacters.appendChild(characterCard);

        // let currentID = characterCard.id;


        characterCard.addEventListener('click', () => {

            const birthday = document.createElement('div');
            birthday.innerHTML = "Birthday : " + character.birthday;
            characterCard.appendChild(birthday);

            selection.classList.remove('hiden');
            globalCharacters.classList.add('hiden');
            document.location.href = '#selection';
            selection.appendChild(characterCard);

        });


        button.addEventListener('click', () => {
            selection.classList.add('hiden');
            document.location.href = '#characters-container';
            globalCharacters.append(characterCard);
            globalCharacters.classList.remove('hiden');

        });

    }

}



// +++++++++++++++++++++++++++++++++++++++++++++
// hover scale en JS (mouseover)
// function newcharacterCard avec les nouveaux paramètres demandes
// a afficher dans selection 
// linker les images
// +++++++++++++++++++++++++++++++++++++++++++++

// let data = [];



// function showNewCharacterCard ()
// {
//     for (i=0; i<data.length; i++)
//     {
//         const characterCard = document.createElement('div');
//         characterCard.classList.add('display');
//         characterCard.id = data[i].char_id;

//         const characterImg = document.createElement('img');
//         characterImg.src = data[i].img;
//         characterCard.appendChild(characterImg);

//         const characterName = document.createElement('div');
//         characterName.innerHTML = "Name : " + data[i].name;
//         characterName.classList.add('name');
//         characterCard.appendChild(characterName);

//         const characterNickname = document.createElement('div');
//         characterNickname.innerHTML = "NickName : " + data[i].nickname;
//         characterCard.appendChild(characterNickname);
//         // console.log(characterCard);

//         const birthday = document.createElement('div');
//         birthday.innerHTML = "Birthday : " + data[i].birthday;
//         characterCard.appendChild(birthday);

//         for(j=0; j<occupation.length; j++)
//         {
//             const occupation = document.createElement('div');
//             occupation = data[j].occupation;
//             characterCard.appendChild(occupation);

//             selection.appendChild(characterCard);
//             console.log(selection);
//         }


//     }
// }

// showNewCharacterCard();

// function showCharacterList (characters) {

//     characters.forEach(character => {
//         const characterElement = document.createElement('div');

//         characterElement.classList.add('char');
//         characterElement.innerHTML = character.name;

//         characterElement.id = character.char_id;
//         characterList.appendChild(characterElement);

//         let imgSrc = character.img;
//         let newImage = document.createElement('img');
//         let nicknameElement = document.createElement('div');

//         characterListArray.forEach(character => {
//             if (character.char_id == currentId) {
//                 imgSrc = character.img;
//             }
//         })
//         newImage.src = imgSrc;
//         nicknameElement.innerHTML = character.nickname;
//         characterElement.append(newImage);
//         characterElement.append(nicknameElement);

//         // CLICK ON CHARACTER 
//         characterElement.addEventListener("click", function(){
//             document.getElementById('section4').classList.remove("none"); 
//             document.location.href = '#section4';
//             section4.append(characterElement);
//             document.getElementById("section1").classList.add("none");

//         });
//         btn.addEventListener("click", function(){
//             document.getElementById('section4').classList.add("none"); 
//             document.location.href = '#section1';
//             section1.append(characterElement);
//             document.getElementById("section1").classList.remove("none");

//         });
//     }
//     )
// }

// =======================================
// SELECTION
// =======================================


// const showSelection = document.createElement('div');
// selection.appendChild(showSelection);

// function hideandshow(characters) {

//     for (let character of characters) {
//         const characterCard = document.createElement('div');
//         characterCard.classList.add('display');
//         characterCard.id = character.char_id;
//         characterCard.id.addEventListener('click',)
//     }
// }


// let card = document.querySelectorAll(".display");
// console.log(card);
// globalCharacters.append(card);

// let characterCard = document.querySelectorAll(".display");
// console.log(characterCard);

// function hideandshow()
// {
//     characterCard.append(selection);
//     globalCharacters.classList.add('hiden');
// }



// +++++++++++++++++++++++++++++++++ To Do ++++++++++++++++++++++++++++++++++++++++++
// - Pouvoir sortir characterCard de la boucle pour ne faire que le target sur elle 
// et non sur chaque élément
// - Ajouter les éléments demandés à la nouvelle carte personnage selectionnée
// - Remettre la carte au bon endroit après le click retour (annuler l'event target?)
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// =======================================
// SEARCH
// =======================================


let inputText = document.createElement('input');
let divSearch = document.createElement('div');
divSearch.appendChild(inputText);
// console.log(divSearch);
inputText.setAttribute('placeholder', 'Search Character...');
divSearch.classList.add('search');
globalCharacters.appendChild(divSearch);
// globalEpisodes.appendChild(divSearch);


inputText.addEventListener('keyup', () => { // Déclenche la fonction search dès que l'on appuie sur une touche 
    search();
});

function search() {
    var filter = inputText.value.toUpperCase() //Majuscules ou caractères spéciaux il n'y aura pas de problème
    var searchDisplay;
    let characterCard = document.querySelectorAll(".display");
    console.log(characterCard);

    for (i = 0; i < characterCard.length; i++) {
        let userSearch = characterCard[i];
        searchDisplay = userSearch.innerText;
        if (searchDisplay.toUpperCase().indexOf(filter) > -1) {
            characterCard[i].style.display = "";

        } else {
            characterCard[i].style.display = "none";

        }
    }
};


// =======================================
// EPISODES
// =======================================


function loadGlobalEpisodes() {
    let request = new XMLHttpRequest();

    request.onload = function () {
        console.log(JSON.parse(this.responseText));
        showGlobalEpisodes(JSON.parse(request.responseText));
    }
    request.open("GET", "https://breakingbadapi.com/api/episodes", true);
    request.send();
}

loadGlobalEpisodes();

function showGlobalEpisodes(episodes) {

    for (let episode of episodes) {
        const episodeCard = document.createElement('div');
        episodeCard.id = episode.episode_id;
        const titleCard = document.createElement('div');
        const characterCard = document.createElement('div');

        const episodeTitle = document.createElement('h3');
        episodeTitle.innerHTML = episode.title;
        titleCard.appendChild(episodeTitle);

        const episodeNumber = document.createElement('div');
        episodeNumber.innerHTML = "Episode n° : " + episode.episode;
        titleCard.appendChild(episodeNumber);

        const episodeSeasonNumber = document.createElement('div');
        episodeSeasonNumber.innerHTML = "Saison n° : " + episode.season;
        titleCard.appendChild(episodeSeasonNumber);

        const episodeCharacterTitle = document.createElement('h3');
        episodeCharacterTitle.innerHTML = "CHARACTERS";
        characterCard.appendChild(episodeCharacterTitle);

        const episodeName = document.createElement('div');
        episodeName.innerHTML = episode.characters;
        characterCard.appendChild(episodeName);

        episodeCard.appendChild(titleCard);
        episodeCard.appendChild(characterCard);
        globalEpisodes.appendChild(episodeCard);
        episodeCard.classList.add('display-title');
        characterCard.classList.add('display-character');
        episodeCard.classList.add('display-episode');

    }

}

// =======================================
// QUOTES
// =======================================


function loadRandomQuotes() {
    let request = new XMLHttpRequest();

    request.onload = function () {
        console.log(JSON.parse(this.responseText));
        showRandomQuotes(JSON.parse(request.responseText));
    }

    request.open("GET", "https://breakingbadapi.com/api/quote/random", true);
    console.log(request);
    request.send();
}

loadRandomQuotes()

function showRandomQuotes(quotes) {
    for (quote of quotes) {
        const randomCard = document.createElement('div');
        randomCard.classList.add('random-card');

        const randomQuotesTitle = document.createElement('h3');
        randomQuotesTitle.innerHTML = "Quotes of the Day";
        randomCard.appendChild(randomQuotesTitle);

        const randomQuote = document.createElement('div');
        randomQuote.innerHTML = quote.quote;
        console.log(randomQuote);
        randomCard.appendChild(randomQuote);

        const randomQuoteAuthor = document.createElement('div');
        randomQuoteAuthor.innerHTML = quote.author;
        randomCard.appendChild(randomQuoteAuthor);
        globalQuotes.appendChild(randomCard);

    }

}


function loadGlobalQuotes() {
    let request = new XMLHttpRequest();

    request.onload = function () {
        console.log(JSON.parse(this.responseText));
        showGlobalQuotes(JSON.parse(request.responseText));
    }

    request.open("GET", "https://breakingbadapi.com/api/quotes", true);
    request.send();
}


loadGlobalQuotes();

function showGlobalQuotes(quotes) {
    const quotesTitle = document.createElement('h3');
    quotesTitle.classList.add('quote-title');
    quotesTitle.innerHTML = "Characters Quotes";
    globalQuotes.appendChild(quotesTitle);

    const select = document.createElement('select');

    // globalQuotes.appendChild(select);

    for (quote of quotes) {
        const quoteCard = document.createElement('div');
        quoteCard.classList.add('quote-card');
        quoteCard.id = quote.quote_id;

        const characterQuote = document.createElement('div');
        characterQuote.innerHTML = quote.quote;
        quoteCard.appendChild(characterQuote);

        const show = document.createElement('div');
        show.classList.add('show');
        show.innerHTML = quote.series;
        quoteCard.appendChild(show);
        globalQuotes.appendChild(quoteCard);

        // const option = document.createElement('option');
        // option.innerHTML = quote.author;
        // select.appendChild(option);

    }

}


