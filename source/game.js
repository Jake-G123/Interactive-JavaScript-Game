let score=0;
let pointsPerClick=1;

const upgrades = [
  { id: 1, name: "Emberroot Extract",    cost: 10,  bonus: 1  },
  { id: 2, name: "Glimmerdew Vial",      cost: 75,  bonus: 5  },
  { id: 3, name: "Crushed Moonpetal",    cost: 300, bonus: 20 },
  { id: 4, name: "Arcane Sap Flask",     cost: 500,  bonus: 30  },
  { id: 5, name: "Frostcap Essence",     cost: 750,  bonus: 50  },
  { id: 6, name: "Dragonspice Infusion", cost: 1000, bonus: 100 },
];

function renderUpgrades() {
    const container = document.getElementById('upgrades');
    container.innerHTML = '';

   upgrades.forEach(upgrade => {
  const div = document.createElement('div');

  const button = document.createElement('button');
  button.textContent = 'Buy';
  button.onclick = () => buyUpgrade(upgrade.id);
  button.disabled = score < upgrade.cost;

  div.innerHTML = `
    <strong>${upgrade.name}</strong>
    Cost: ${upgrade.cost} | +${upgrade.bonus} per click
  `;
  div.appendChild(button);
  container.appendChild(div);
}); 
}


function updateDisplay() {
    document.getElementById('score-display').textContent = 'Positions: ' + score;
    document.getElementById('rate-display').textContent = 'Positions per brew: ' + pointsPerClick;
    

}

document.getElementById('click-btn').addEventListener('click', function() {
    score += pointsPerClick;
    updateDisplay();
    renderUpgrades();
});

function buyUpgrade(id) {
  const upgrade = upgrades.find(u => u.id === id);

  if (score >= upgrade.cost) {
    score -= upgrade.cost;
    pointsPerClick += upgrade.bonus;
    updateDisplay();
    renderUpgrades();
  }
}