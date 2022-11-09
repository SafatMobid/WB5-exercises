//pg-1-10

// When does the PROG200 course start?
// What is the title of the PROJ500 course?
// What are the titles of the courses that cost $50 or less?
// What classes meet in "Classroom 1"?

let courses = 
[
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
];

let a1 = whenDoesPROG200CourseStart();

function whenDoesPROG200CourseStart() 
{
    let theCourse = courses.find(prog200); // Arrayname.find(DataInArray) finds the data we are looking for in array
    //find is a for loop, returns binary(yes, no)
    return theCourse.StartDate; //Returns data we want (i.e startdate)
}
function prog200(value)                    
{
    return(value.CourseId =="PROG200"); //Calls the conditions(i.e value = "Data trying to locate" used to implement in find condition)
}

console.log(a1);


//---------------------------------------------------------------------------------//
let a2 = titleofthePROJ500course();

function titleofthePROJ500course()
{
    let theCourse = courses.find(proj500);
    return theCourse.Title;
}

function proj500(value)
{
    return(value.CourseId =="PROJ500");
}

console.log(a2);

//--------------------------------------------------------------------------------------//
let a3 = Titlesofcourses50orless();

function Titlesofcourses50orless()
{
    let theCourse = courses.filter(under50)
    return theCourse;
}

function under50(value)
{
    return(Number(value.Fee) <= 50)
}

console.log(a3) /* Returning all courses with 50 or less, not just courseID  */
//---------------------------------------------------------------------------------------//
let a4 = WhatclassesmeetinClassroom1();

function WhatclassesmeetinClassroom1()
{
    let theCourse = courses.filter(classroomOne)
    return theCourse;
}

function classroomOne(value)
{
    return(value.Location =="Classroom 1");
}

console.log(a4) //also showing all details 