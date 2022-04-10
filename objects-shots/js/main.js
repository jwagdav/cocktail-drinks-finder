//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let n = 0;
      const drinksArr = data.drinks;
      console.log(drinksArr);

      document.querySelector('h2').innerText = drinksArr[n].strDrink
      document.querySelector('img').src = drinksArr[n].strDrinkThumb
      document.querySelector('h3').innerText = drinksArr[n].strInstructions

      document.querySelector('.rotate-forward').addEventListener('click', () => {
        ++n;
        document.querySelector('h2').innerText = drinksArr[n].strDrink
        document.querySelector('img').src = drinksArr[n].strDrinkThumb
        document.querySelector('h3').innerText = drinksArr[n].strInstructions
      });

      document.querySelector('.rotate-back').addEventListener('click', () => {
        --n;
        document.querySelector('h2').innerText = drinksArr[n].strDrink
        document.querySelector('img').src = drinksArr[n].strDrinkThumb
        document.querySelector('h3').innerText = drinksArr[n].strInstructions
      });
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

