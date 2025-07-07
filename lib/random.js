//random picker function (gives a random index from 0 to max - 1)

export function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

//Advantages of outsourcing this function to lib:

//Reusable/scalable — can use getRandomIndex() anywhere (Spotlight, Favorites, etc.)
//keeps page files clean — page only focuses on what it renders, not how it works
//dev best practice — splitting logic into lib/ is common in professional React/Next projects
//Easier to test later

//

//lib is good to use for:
//Utility functions (random, sorting, formatting dates, etc)
//Business logic helpers (like calculating something from API data)
//Code that is needed in multiple components or pages
