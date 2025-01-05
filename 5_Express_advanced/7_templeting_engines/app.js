

//if we want show some html in given path that time we are use the html this
// pug is populare one

const express = require('express');
const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug'); // By default, it will load files from the ./views folder
app.set('views', './views'); // Optional: Specifies the directory for view templates, defaults to './views'

// Define a route for the root path
app.get('/', (req, res) => {
    // Render the 'index.pug' template and pass an object with values to be used in the template
    res.render('index.pug', {
        title: 'My App',
        message: "This is my Express App"
    });
});

// Set the port to listen on (default to 3000 if not specified in environment variables)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening at port ${port}`));