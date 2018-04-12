// var heroes;
// window.onload = async function() {
//     const resp = await fetchHeroes();
//     heroes = resp.data.heroes;
//     init();
// }


// const init = () => {
//     heroes.forEach(createHeroElement);
// };

// HEROES
let selectedHero;

const heroesCard = document.querySelector('.heroes-card');

const heroes = [
    {
        name: 'Antimage',
        role: 'carry',
        damage: 29,
        skills: {
            first: {
                name: 'Mana Break',
                manacost: 0,
            },
            second: {
                name: 'Blink',
                manacost: 60,
            },
            third: {
                name: 'Spell Shield',
                manacost: 0,
            },
            ultimate: {
                name: 'Mana Void',
                manacost: 275,
            }
        },
    },
    {
        name: 'Juggernaut',
        role: 'carry',
        damage: 24,
        skills: {
            first: {
                name: 'Bladefury',
                manacost: 90,
            },
            second: {
                name: 'Healing Ward',
                manacost: 140,
            },
            third: {
                name: 'Blade Dance',
                manacost: 0,
            },
            ultimate: {
                name: 'Omnislash',
                manacost: 350,
            }
        },
    },
];

// const fetchHeroes = () => fetch("http://10.0.240.57")
//                             .then(res => res.json());

const heroesList = document.getElementById("heroes-list");
const title = document.querySelector("h1");
const heroSkills = document.querySelector('#hero-skills');

const onHeroClick = (hero) => {
    selectedHero = hero;
    title.textContent = `Hello, ${selectedHero.name}!`;
    
    heroSkills.innerHTML = `${selectedHero.name}'s skills are: ${showHeroSkills(selectedHero)}`;

    if (selectedItem != null) {
        showTotalDamage();
    }
};

// Show hero skills
const showHeroSkills = (hero) => {
    const ul = document.createElement('ul');
    const firstLi = document.createElement('li');
    const secondLi = document.createElement('li');
    const thirdLi = document.createElement('li');
    const ultimateLi = document.createElement('li');

    firstLi.textContent = hero.skills.first.name;
    secondLi.textContent = hero.skills.second.name;
    thirdLi.textContent = hero.skills.third.name;
    ultimateLi.textContent = hero.skills.ultimate.name;

    ul.appendChild(firstLi);
    ul.appendChild(secondLi);
    ul.appendChild(thirdLi);
    ul.appendChild(ultimateLi);
    document.querySelector('#hero-skills').appendChild(ul);

    console.log(hero.skills.first.name);
    console.log(ul);
     
};

const createHeroElement = (hero) => {
    const li = document.createElement("li");
    li.textContent = hero.name;
    li.onclick = () => onHeroClick(hero);
    // li.addEventListener('click', onHeroClick);
    li.className = "hero";
    heroesList.appendChild(li);
};

heroes.forEach(createHeroElement);


// ITEMS
let selectedItem;

const itemsCard = document.querySelector('.items-card');

const items = [ 
    {
        name: 'Battlefury',
        cost: 4200,
        damage: 45,
    },
    {
        name: 'Yasha',
        cost: 1950,
        damage: 16,
    },
];

const itemsList = document.querySelector('#items-list');
const itemHeading = document.querySelector('#selected-items');

items.forEach(function(item) {
    const li = document.createElement('li');
    
    li.setAttribute('style', 'white-space: pre');
    
    li.textContent = `${item.name} \r\n`;
    li.textContent += `Cost: ${item.cost}`;

    li.onclick = () => {
        selectedItem = item;
        itemHeading.textContent = `You have chosen ${selectedItem.name}`;
        if (selectedHero != null) {
            showTotalDamage();
        }
    };
    li.className = 'item';
    itemsList.appendChild(li);
});



// Show total damage (hero + item)
function showTotalDamage() {
    const heroDamage = selectedHero.damage;
    const itemDamage = selectedItem.damage;
    let totalDamage = heroDamage + itemDamage;
    
    const damageHeading = document.querySelector('#damage');

    damageHeading.textContent = `${selectedHero.name}'s total damage with ${selectedItem.name} is: ${totalDamage}`;

}
