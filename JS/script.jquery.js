window.onload = function () {
    globalEpisodes.addClass('hiden');
    globalQuotes.addClass('hiden');
};

// =======================================
// NAVIGATION
// =======================================

const globalCharacters = $('#characters-container');
const globalEpisodes = $('#episodes-container');
const globalQuotes = $('#quotes-container');
let navChar = $('#nav-char');
let navEp = $('#nav-ep');
let navQuotes = $('#nav-quotes');

navChar.click(function () {
    globalEpisodes.hide();
    globalQuotes.hide();
    globalCharacters.show();
    navChar.addClass('transform');
    navEp.removeClass('transform');
    navQuotes.removeClass('transform');
    navQuotes.html("Quotes");
});

navEp.click(() => {
    globalCharacters.hide();
    globalQuotes.hide();
    globalEpisodes.show();
    navChar.removeClass('transform');
    navEp.addClass('transform');
    navQuotes.removeClass('transform');
    navQuotes.html('Quotes');
});

navQuotes.click(() => {
    globalCharacters.hide();
    globalEpisodes.hide();
    globalQuotes.show();
    navQuotes.removeClass('transform');
    navChar.removeClass('transform');
    navEp.removeClass('transform');
    navQuotes.html("RéPLIQUES");
});

// =======================================
// CHARACTERS
// =======================================

$.get("https://breakingbadapi.com/api/characters", function (data) {
    console.log(data);

    for (i = 0; i < data.length; i++) {
        var characterCard = $('<div>').attr({
            'id': data[i].char_id
        });
        characterCard.addClass('display');
        characterCard.id = data[i].char_id;
        console.log(characterCard);

        const characterImg = $('<img/>').attr({
            'src': data[i].img
        }).appendTo(characterCard);

        const characterName = $('<div>');
        characterName.addClass('name');
        characterName.html("Name : " + data[i].name).appendTo(characterCard);

        const characterNickname = $('<div>');
        characterNickname.html("NickName : " + data[i].nickname).appendTo(characterCard);

        characterCard.appendTo(globalCharacters);

    }
})
    .done(function () {
        console.log("second success");
    })
    .fail(function () {
        console.log("error");
    })
    .always(function () {
        console.log("finished");
    });
    

    characterCard.click(() => {
        
    })

//     jQUERY
// $.get('https://www.breakingbadapi.com/api/characters', function showCharacterList(characters){

//     for (let i = 0; i < characters.length; i++) {

//         const charElement = $('<div>');
//         const charImg = $('<div>');
//         const charName = $('<p>');
//         const charPseudo = $('<p>');
//         const charStatus = $('<p>');
//         const charOccupation = $('<p>');

//         $(charPseudo).text(characters[i].nickname);
//         $(charName).text(characters[i].name);
//         $(charImg).html("<img src =" + characters[i].img + ">");
//         $('#charPlusImg').append(charElement);
//         $(charElement).append(charName);
//         $(charElement).append(charImg);
//         $(charElement).append(charPseudo);
//         $(charElement).addClass("char");

//         // CLICK ON CHARACTER 

//         $(charElement).on("click", function() {

//             $(charOccupation).text(characters[i].occupation);
//             $(charStatus).text(characters[i].status);
//             $('#section4').removeClass("none");
//             $(location).attr('href', "#section4");
//             $('#section4').append(charElement);
//             $(charElement).append(charOccupation);
//             $(charElement).append(charStatus);
//             $("#section1").addClass("none");
//         });
//         $('#BUTTON').on("click", function() {

//             $('#section4').addClass("none");
//             $(location).attr('href', "#section1");
//             $('#section1').append(charElement);
//             $("#section1").removeClass("none");
//             $(charStatus).remove();
//             $(charOccupation).remove();
//         });
//     }
// });

//img

// $(document).ready(function() {

//     var img_index = 1;

//     $('#mybutton').click(function() {
//         var img = $('<img />').attr({
//             'id': 'myImage'+img_index,
//             'src': 'http://doc.jsfiddle.net/_downloads/jsfiddle-logo.png',
//             'alt': 'JSFiddle logo',
//             'title': 'JSFiddle logo',
//             'width': 250
//         }).appendTo('#container');

//         img_index++;
//     });
// });


// =======================================
// SEARCH CHARACTERS
// =======================================


let searchInput = $('<input placeholder = "Search Character...">').appendTo($('<div>')).addClass('search').appendTo(globalCharacters);
// console.log(searchInput);

searchInput.keyup(() => {
    search();
});

function search() {
    var filter = searchInput.val().toUpperCase();

    var searchDisplay;
    var card = globalCharacters.find('.display');

    for (i = 0; i < card.length; i++) {
        let userSearch = card[i];
        searchDisplay = userSearch.innerText;
        if (searchDisplay.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";

        } else {
            card[i].style.display = "none";
        }
    }
};


// =======================================
// EPISODES
// =======================================

$.get("https://breakingbadapi.com/api/episodes", function (data) {
    // console.log(data);
    for (i = 0; i < data.length; i++) {
        const episodeCard = $('<div>').attr({
            'id' : data[i].episode_id
        });
        const titleBloc = $('<div>');
        const characterBloc = $('<div>');

        const episodeTitle = $('<h3>');
        episodeTitle.html(data[i].title);
        titleBloc.append(episodeTitle);

        const episodeNumber = $('<div>');
        episodeNumber.html("Episode n° : " + data[i].episode);
        titleBloc.append(episodeNumber);

        const episodeSeasonNumber = $('<div>');
        episodeSeasonNumber.html("Saison n° : " + data[i].season);
        titleBloc.append(episodeSeasonNumber);

        const episodeCharacterTitle = $('<h3>');
        episodeCharacterTitle.html("CHARACTERS");
        characterBloc.append(episodeCharacterTitle);

        const episodeName = $('<div>');
        episodeName.html(data[i].characters);
        characterBloc.append(episodeName);

        episodeCard.append(titleBloc);
        episodeCard.append(characterBloc);
        globalEpisodes.append(episodeCard);
        episodeCard.addClass('display-title');
        characterBloc.addClass('display-character');
        episodeCard.addClass('display-episode');
    }
})
    .done(function () {
        console.log("second success");
    })
    .fail(function () {
        console.log("error");
    })
    .always(function () {
        console.log("finished");
    });

// =======================================
// SEARCH EPISODES
// =======================================

let searchInputEp = $('<input placeholder = "Search Episodes...">').appendTo($('<div>')).addClass('search').appendTo(globalEpisodes);
// console.log(searchInput);

// searchInputEp.keyup(() => {
//     searchEp();
// });

// // ou

searchInputEp.keyup(searchEp);

function searchEp() {
    var filter = searchInputEp.val().toUpperCase();

    var searchDisplay;
    var card = globalEpisodes.find('.display-episode');

    for (i = 0; i < card.length; i++) {
        let userSearch = card[i];
        searchDisplay = userSearch.innerText;
        if (searchDisplay.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";

        } else {
            card[i].style.display = "none";
        }
    }
};


// =======================================
// RANDOM QUOTES
// =======================================


// $.get("https://breakingbadapi.com/api/quote/random", function(quotes) {
//     // console.log(quotes);

//     for (quote of quotes) {
//         const randomCard = $('<div>');
//         randomCard.addClass('random-card');

//         const randomQuotesTitle = $('<h3>');
//         randomQuotesTitle.html("Quotes of the Day");
//         randomCard.append(randomQuotesTitle);

//         const randomQuote = $('<div>');
//         randomQuote.html(quote.quote);
//         console.log(randomQuote);
//         randomCard.append(randomQuote);

//         const randomQuoteAuthor = $('<p>');
//         randomQuoteAuthor.html(quote.author);
//         randomCard.append(randomQuoteAuthor);
//         globalQuotes.append(randomCard);

//     }

// })
//     .done(function () {
//         console.log("second success");
//     })
//     .fail(function () {
//         console.log("error");
//     })
//     .always(function () {
//         console.log("finished");
//     });


// =======================================
// RANDOM QUOTES
// =======================================


$.get("https://breakingbadapi.com/api/quotes", function (quotes) {
    console.log(quotes);

    const quotesTitle = $('<h3>');
    quotesTitle.addClass('quote-title');
    quotesTitle.html("Characters Quotes");
    globalQuotes.append(quotesTitle);

    const select = $('<select>');
    globalQuotes.append(select);

    for (quote of quotes) {
        const quoteCard = $('<div>').attr({
            'id': quote.quote_id
        });
        quoteCard.addClass('quote-card');
        console.log(quoteCard);

        const characterQuote = $('<div>');
        characterQuote.html(quote.quote);
        quoteCard.append(characterQuote);

        const show = $('<div>');
        show.addClass('show');
        show.html(quote.series);
        quoteCard.append(show);
        globalQuotes.append(quoteCard);

        // const option = $('<option>');
        // option.html(quote.author);
        // select.append(option);

    }

})
    .done(function () {
        console.log("second success");
    })
    .fail(function () {
        console.log("error");
    })
    .always(function () {
        console.log("finished");
    });

// =====================================
// SELECT
// =====================================

