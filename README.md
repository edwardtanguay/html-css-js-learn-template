# Rick And Morty charakters API

# Description

Let's "hack" the Citadel server and get the secret character data from the Rick and Morty universe!
To do that, we need to write a program that will download the database from an external [Rick and Morty API](https://rickandmortyapi.com/documentation) and display the data in our browser.

# Instructions:

- The program should fetch the data of a random character from provided API.
- A picture of the character should be displayed on the browser, as well with a `characters-name`.
- Read the [documentation](https://rickandmortyapi.com/documentation) carefully.
- To complete this task use asynchronous function.
- Modify the `index.html` file only with DOM elements!

## Task 1:

- Create an `index.html` and a `script.js` file. Link them.

## Task 2:

- Inside the `script.js` file create an expression that will contain link with information about the character. A list of all characters in JSON format can be downloaded from here: [Rick and Morty characters API](https://rickandmortyapi.com/api/character)

## Task 3:

- Create an asynchronous function `rickAndMortyCharacters`.
- Use `fetch` to load the list of characters data and use the `.json()` method of the response object to convert the JSON into an object.
- Analyze the object and find out how to get the number of characters

## Task 4:

- Inside the `rickAndMortyCharacters` function generate a random number between 1 and the number of characters plus 200 (check the number of available characters in the database by reading the [documentation](https://rickandmortyapi.com/documentation))
- Get a character's data with a random number from the list of characters in the object
- Analyze the character object and find out how to get the url for the character's picture

## Task 5:

- Inside the `rickAndMortyCharacters` function write a statement, that will check if response from the server is different then `ok` - if yes, you should create an error message: `Error: The Database was compromised. No data under the code [here show the generated number] `.
- If error will be returned, use DOM elements to display an error message in the browser window.

## Task 6:

- Create a function `renderCharacters` - when called it should render fetched data in the browser: image and text.
- Modify the HTML with DOM to display the image and character's name on the page.

## Task 7:

- Inside the `rickMortyCharacters` function call the `renderCharacters` function, that will receive fetched data as an parameter.

## Task 8:

- Now call the `rickMortyCharacters` function to run the program!

### BONUS task:

- If you finished the tasks earlier, you can add some extra styling and/or display more data.

#### GOOD LUCK! 😉
