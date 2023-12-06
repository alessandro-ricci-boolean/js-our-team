let team = [
    {
        name : "Wayne Barnett",
        role : "Founder & CEO",
        image : "wayne-barnett-founder-ceo.jpg",
    },
    {
        name : "Angela Caroll",
        role : "Chief Editor",
        image : "angela-caroll-chief-editor.jpg",
    },
    {
        name : "Walter Gordon",
        role : "Office Manager",
        image : "walter-gordon-office-manager.jpg",
    },
    {
        name : "Angela Lopez",
        role : "Social Media Manager",
        image : "angela-lopez-social-media-manager.jpg",
    },
    {
        name : "Scott Estrada",
        role : "Developer",
        image : "scott-estrada-developer.jpg",
    },
    {
        name : "Barbara Ramos",
        role : "Graphic Designer",
        image : "barbara-ramos-graphic-designer.jpg",
    }
]
const cards = document.getElementById("cards");
for (let i = 0; i < team.length; i++) {
    let member = team[i];
    console.log(member.name);
    console.log(member.role);
    console.log(member.image);
}

for(let i=0; i<team.length; i++){
    let member = team[i];

    const col = document.createElement("div");
    col.classList.add("col-4");
    let text = `<h2>${member.name}</h2><p>${member.role}</p>${member.image}`;
    col.innerHTML = text;
    cards.appendChild(col);
}