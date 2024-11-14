# MY RECIPE APPLICATION

The Recipe Application is a React-based web application that fetches recipes from an API and allows users to search for recipes using keywords or ingredients. Users can save their favorite recipes to a db.json file, filter search results, and delete saved recipes. The application is designed to be user-friendly and interactive, providing a smooth and efficient way to explore various culinary options.

**Features**

- Fetch Recipes: The application retrieves data from a public API and displays the results using cards that feature images, recipe names, and a link to detailed information.
- Search Functionality: Users can search for recipes using specific ingredients or keywords.
- Save Recipes: Users can save their favorite recipes, which are persisted to a db.json file for local storage.
- Filter Search Results: Filtering options are available to help users narrow down their search.
- Delete Saved Recipes: Users can remove saved recipes from the db.json file when they are no longer needed.
- Interactive UI: A well-designed and responsive user interface ensures an excellent user experience.

**Technologies Used**

1.  React: Frontend library for building user interfaces.
2.  JavaScript : Programming language used for the core functionality.
3.  HTML & CSS: For structuring and styling the application.
4.  JSON Server: Used for local persistence of saved recipes.

**Getting Started**
To get a local copy of the project up and running, follow these simple steps.

**Prerequisites**
Ensure you have the following installed:

1. Node.js: Download and install Node.js
2. npm: Node package manager (comes with Node.js)

**Installation**

1.  Clone the repository:

- git clone https://github.com/koskei-kipkoech/Recipe-App.git

2.  Navigate to the project directory:

- cd Recipe-App

3.  install the necessary dependencies.

- npm install

4. Start a json server.

- npx json-server --watch db.json --port 3004

5.  run react application:

- npm start

**Usage**

- Search for Recipes: Use the search bar to find recipes based on keywords or ingredients.
- View Recipe Details: Click on a recipe card to see detailed information, including ingredients, steps, and preparation time.
- Save Your Favorite Recipes: Click the "Save" button on a recipe to store it in your local database.
- Delete Recipes: Go to your saved recipes and click the "Delete" button to remove any recipe you no longer want.

**API Information**

The application fetches recipes from:
Endpoints Used:

- Recipes : www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
  \_ Home Page: https://dummyjson.com/recipes

**Contributing**
Contributions are welcome! Please follow these steps:

1. Fork the project.
2. Create a feature branch (git checkout -b feature/NewFeature).
3. Commit your changes (git commit -m 'Add some NewFeature').
4. Push to the branch (git push origin feature/NewFeature).
5. Open a Pull Request.
