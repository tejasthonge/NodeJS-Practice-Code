

const express = require("express");
const app = express();

const posts = [
    {
        id: 1,
        url: "https://cdn.magicdecor.in/com/2024/02/03172240/Manmohak-Shri-Ram-Lalla-HD-Wallpaper-for-Wall.jpg"
    },
    {
        id: 2,
        url: "https://cdn.magicdecor.in/com/2024/02/03172240/Manmohak-Shri-Ram-Lalla-HD-Wallpaper-for-Wall.jpg"
    },
    {
        id: 3,
        url: "https://cdn.magicdecor.in/com/2024/02/03172240/Manmohak-Shri-Ram-Lalla-HD-Wallpaper-for-Wall.jpg"
    },
    {
        id: 4,
        url: "https://cdn.magicdecor.in/com/2024/02/03172240/Manmohak-Shri-Ram-Lalla-HD-Wallpaper-for-Wall.jpg"
    },
];

app.get('/', (req, res) => {
    res.send("Jay Shree Ram");

})

app.get('/api/posts', (req, res) => {
    res.send(posts);
});

app.get('/api/post/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const postAtID = posts.find(post => post.id === id);
    if (!postAtID) {
        res.status(404).send(
            {
                "message": `The Post at id: ${id} is not Preset`
            }
        )
    }
    else {
        res.send(postAtID);
    }



});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server listening at port ${port}`));