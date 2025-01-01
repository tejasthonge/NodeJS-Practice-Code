

const express = require('express');
const app = express();
app.use(express.json())

const students = [

    {
        id: 1,
        name: "Ram",
        marks: 100,
    },
    {
        id: 2,
        name: "Amar",
        marks: 35,
    },
    {
        id: 3,
        name: "Tejas",
        marks: 37,
    }
];


app.get('/api/students', (req, res) => {
    res.send(
        {
            massage: "List of Student geted Successfully",
            students: students
        }
    );
});

app.delete('/api/student/delet/:id',(req,res)=>{
    const id =  parseInt(req.params.id);
    var studentIndex =students.findIndex(st=>st.id ===id)
   if(studentIndex === -1 || !studentIndex){

    res.status(404).send(
        {
            massage:`student not of at id ${id}`
        }
    )
    return;
   }
   else{

    const deletedStudent = students.splice(studentIndex, 1); // Remove the student
    res.send({
        message: `Student with ID ${id} was deleted successfully`,
        deletedStudent: deletedStudent[0], // Show the deleted student details
        remainingStudents: students // Show the updated list of students
    });
   }

    

});

const port = process.env.PORT ||3000;
app.listen(port,()=>console.log(`server running at port : ${port}`))
