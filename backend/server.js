const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);

// Custom DELETE route for removing a recipe by idMeal
server.delete('/savedRecipes/:idMeal', (req, res) => {
    const { idMeal } = req.params;
    const db = router.db; // Access the lowdb database instance used by json-server
    const savedRecipes = db.get('savedRecipes'); // Access the savedRecipes collection

    // Find and remove the recipe
    const recipe = savedRecipes.find({ idMeal }).value();
    if (recipe) {
        savedRecipes.remove({ idMeal }).write(); // Remove the recipe from the db
        res.status(200).json({ message: 'Recipe deleted successfully' });
    } else {
        res.status(404).json({ message: 'Recipe not found' });
    }
});

// Use the default routes provided by json-server (GET, POST, PUT, PATCH, DELETE)
server.use('/', router);

// Start the server
server.listen(process.env.PORT || 3004, () => {
    console.log('JSON Server is running');
});
