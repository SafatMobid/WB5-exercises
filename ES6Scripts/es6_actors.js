let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];
   
let memberId = whomemidis187();

function whomemidis187()
{
    let memId187 = academyMembers.filter(member)
    return memId187;
}

function member(value)
{
    return(value.memID =="187");
}

console.log(memberId)
//Technically works but display all info about memID 187

//-------------------------------------------------------------------------------------------------------------------------------------------//

let member3Films = academyMembers.filter(actor => actor.films.length >= 3);
console.log(member3Films);
//Again technically works but display all info on people who has 3 or more films

//-------------------------------------------------------------------------------------------------------------------------------------------//

/* let findAfilm =  */