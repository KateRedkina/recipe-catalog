var alcoholInputEl = document.querySelector('#alcoholInput');
var nameSearchEl = document.querySelector('#nameSearch');
var beerTitle = document.querySelector('#beerTitle');
var beerImage = document.querySelector('#beerImage');
var beerDescription = document.querySelector('#beerDescription');
var randomSearchButton = document.querySelector('#randomSearchButton');
var cocktailSearchResult = document.getElementById('cocktailResults');
var searchResultSectionEl = document.getElementById("searchResultSection");


document.querySelector('form.cocktailSearchInput').addEventListener('submit', function (e) {
    e.preventDefault();
    runCocktailSearch();
});

    

function runCocktailSearch () { 
var alcoholSearchParam = alcoholInputEl.value; 
var alcoholURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + alcoholSearchParam; 
var nameSearchParam = nameSearchEl.value; 
var nameURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + nameSearchParam;  

    fetch(alcoholURL)
        .then(function (response) {
            return response.json();     
        })
        .then(function (alcoholResponse) {
            fetch(nameURL)
            .then (function (response) {
            return response.json();   
            })
            .then (function (nameResponse) {
                displayRepos (alcoholResponse);
                displayReposName (nameResponse);
            })
        })
    }


randomSearchButton.addEventListener('click', function (event) {
    event.preventDefault();
    runRandomSearchButton();
    
});

function displayRepos (alcoholResponse) {
    if (alcoholResponse.drinks.length === 0) {
        return;
      }
      else {
      for (var i = 0; i < 10; i++) {
        var cocktailIDUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + alcoholResponse.drinks[i].idDrink;
        fetch(cocktailIDUrl)
            .then(function(response) {
                return response.json();})
            .then (function (URLresponse) {
                    finalDisplay(URLresponse);
                })
        
      }}
    }
      function displayReposName (nameResponse) {
        if (nameResponse.drinks.length === 0) {
            return;
          }
          else {
          for (var z = 0; z < 10; z++) {
            var cocktailIDUrlName = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + nameResponse.drinks[z].idDrink;;
            fetch(cocktailIDUrlName)
                .then(function(response) {
                    return response.json();})
                .then (function (URLresponseName) {
                        finalDisplayName(URLresponseName);
                    })
            
          }}
        }

    function finalDisplay (URLresponse) {
        if (URLresponse.length === 0) {
            searchResultSectionEl.textContent = "No results for alcohol type.";
            return;
        }
        else {
            for (var x = 0; x < URLresponse.drinks.length; x++) {
                var imageThumbnail = URLresponse.drinks[x].strDrinkThumb;
                var cocktailNameResult = URLresponse.drinks[x].strDrink;
                var ResultItem = document.createElement("div");
                ResultItem.setAttribute("class","card tile-is-parent");
                var subResultItem = document.createElement("div");
                subResultItem.setAttribute("class", "card-content tile-is-parent")
                ResultItem.appendChild(subResultItem);
                var mediaResultItem = document.createElement("div");
                mediaResultItem.setAttribute("class", "media tile-is-parent");
                subResultItem.appendChild(mediaResultItem);
                var contResultImage = document.createElement("div");
                contResultImage.setAttribute("class", "media-content");
                contResultImage.setAttribute("style", "display:left;");
                mediaResultItem.appendChild(contResultImage);
                var ResultImage = document.createElement("figure");
                contResultImage.appendChild(ResultImage);
                var ResultActImage = document.createElement("img");
                ResultActImage.setAttribute("src",imageThumbnail);
                ResultActImage.setAttribute("style", "width: 100px; length: 100px;");
                ResultActImage.setAttribute("class", "tile is-4")
                contResultImage.appendChild(ResultActImage);
                var MediaContent = document.createElement("div");
                MediaContent.setAttribute("class", "media-right");
                MediaContent.setAttribute("style", "float:right");
                mediaResultItem.appendChild(MediaContent);
                var cocktailName = document.createElement("a");
                cocktailName.textContent = cocktailNameResult;
                MediaContent.appendChild(cocktailName);
                searchResultSection.appendChild(ResultItem);
<<<<<<< HEAD
                var addToFavoritesButton = document.createElement('button');
                addToFavoritesButton.textContent = "+";
                addToFavoritesButton.setAttribute("class", "favorite-btn");
                addToFavoritesButton.appendChild(addToFavoritesButton);
=======
>>>>>>> 717a4951cf84eb0f49d89d35158c0ef70224d38e
            }
        }
    }

    function finalDisplayName (URLresponseName) {
        if (URLresponseName.length === 0) {
            return;
        }
        else {
            for (var y = 0; y < URLresponseName.drinks.length; y++) {
                var imageThumbnailName = URLresponseName.drinks[y].strDrinkThumb;
                var cocktailNameResultname = URLresponseName.drinks[y].strDrink;
                var ResultItem = document.createElement("div");
                ResultItem.setAttribute("class","card ");
                var subResultItem = document.createElement("div");
                subResultItem.setAttribute("class", "card-content")
                ResultItem.appendChild(subResultItem);
                var mediaResultItem = document.createElement("div");
                mediaResultItem.setAttribute("class", "media");
                subResultItem.appendChild(mediaResultItem);
                var contResultImage = document.createElement("div");
                contResultImage.setAttribute("class", "media-content  tile-is-parent");
                contResultImage.setAttribute("style", "display:left;");
                mediaResultItem.appendChild(contResultImage);
                var ResultImage = document.createElement("figure");
                contResultImage.appendChild(ResultImage);
                var ResultActImage = document.createElement("img");
                ResultActImage.setAttribute("src",imageThumbnailName);
                ResultActImage.setAttribute("style", "width: 100px; length: 100px;");
                ResultActImage.setAttribute("class", "tile is-4")
                contResultImage.appendChild(ResultActImage);
                var MediaContent = document.createElement("div");
                MediaContent.setAttribute("class", "media-right");
                MediaContent.setAttribute("style", "float:right");
                mediaResultItem.appendChild(MediaContent);
                var cocktailName = document.createElement("a");
                cocktailName.textContent = cocktailNameResultname;
                MediaContent.appendChild(cocktailName);
                searchResultSection.appendChild(ResultItem);
            }
        }
    }
      
      

function runRandomSearchButton() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(results => results.json())
        .then(apiData => {
        });
}

function randomBeer(){
    var randomBeerUrl = "https://api.punkapi.com/v2/beers/random"
    fetch(randomBeerUrl)
        .then(function(response) {
        return response.json();
    })
    .then(function (data) {
          beerTitle.textContent = data[0].name;
          beerImage.setAttribute("src", data[0].image_url);
          beerDescription.textContent = data[0].description;
    });
}
randomBeer();  

<<<<<<< HEAD
// Saved Favorites
 function saveToFavorites() {
    //Get image source and name
    var imageElement = document.getElementById('image');
    var imageSrc = imageElement.src;
    var imageName = imageElement.alt;

    //Create a list item
    var listItem = document.createElement('li');
    listItem.innerHTML = '<img src="' + imageSrc + '" alt="' + imageName + '"> ' + imageName;

    //append the list item to the favorites list

    document.getElementById('Favorites').appendChild(listItem);


// event listener for mouseenter effect    
    listItem.addEventListener('mouseenter',
    function() {
        showRemoveButton(listItem);
    });

    listItem.addEventListener('mouseLeave',
    function() {
        hideRemoveButton(listItem);
    });
    favoriteList.appendChild(listItem);
    saveToFavorites(newFavorite);
}




// saves to favorites
function saveToFavorites(favorite) {
   let favorites = localStorage.getItem('favoritesList') ?
   JSON.parse(localStorage.getItem('favoritesList')) : [];
   favorites.push(favorite);
   localStorage.setItem('favoritesList', JSON.stringify(favorites));
}




// button icon gets event listener for click
function showRemoveButton(item) {
    var removeButton = document.createElement('button');
    removeButton.textContent = '❤️';
    removeButton.addEventListener('click',
    function() {
        removeFavorite(item);
    });
    item.appendChild(removeButton);
}




function hideRemoveButton(item) {
    item.removeChild(item.lastChild);
}


// removes item from localStorage
function removeFavorite(item) {
    var favoriteList = document.getElementById('favoritesList');
    var favorites = JSON.parse(localStorage.getItem('Favorites'));
    var text = item.textContent;
    var index = favorites.indexOf(text);
    if (index > -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favoritesList',
        JSON.stringify(favorites));
    }
    favoriteList.removeChild(item);
}




// items stay when page is refreshed
window.onload = function() {
    let favorites = localStorage.getItem('favorites') ?
    JSON.parse(localStorage.getItem('Favorites')) : [];
    var favoriteList = document.getElementById('favoritesList');
    favorites.forEach(function(favorite) {
        var listItem = document.createElement('li');


        listItem.appendChild(document.createTextNode(favorite));


        listItem.addEventListener('mouseenter',
        function() {
            showRemoveButton(listItem);
        });


        listItem.addEventListener('mouseleave',
        function() {
            hideRemoveButton(listItem);
        });


        favoriteList.appendChild(listItem);


    });


};
=======
// ===Modal Box===
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  });
>>>>>>> 717a4951cf84eb0f49d89d35158c0ef70224d38e
