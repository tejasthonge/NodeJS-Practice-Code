const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log("Connecting to db"))
    .catch(error => console.log(error.message));

// Define the schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    isPublished: Boolean,
    date: { type: Date, default: Date.now }
});

// Create the model once
const Course = mongoose.model("Course", courseSchema);

async function createCourse({name,tagas,isPublished,author}) {
    const course = new Course({
        name: name,
        tags: tagas,
        isPublished:isPublished,
        author: author
    });

    // Save the course to the database
    await course.save();
    console.log("Course created");
}

async function getCourses() {
    const courses = await Course.find();
    console.log("Courses:", courses);
}

async function run() {
    await createCourse({
        name:"Flutter",
        tagas:["mobile Development,Ios,Android"],
        isPublished:false,
        author:"Shashi Bagal"
    });
    await getCourses();
}
run();


