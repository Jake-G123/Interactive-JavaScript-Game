let score=0;
let pointsPerClick=1;

const upgrades = [
  { id: 1, name: "Better Mouse",    cost: 10,  bonus: 1  },
  { id: 2, name: "Click Farm",      cost: 75,  bonus: 5  },
  { id: 3, name: "Robot Assistant", cost: 300, bonus: 20 },
  { id: 4, name: "test",            cost: 500,  bonus: 30  },
  { id: 5, name: "test2",           cost: 750,  bonus: 50  },
  { id: 6, name: "test3",           cost: 1000, bonus: 100 },
];

function renderUpgrades() {
    const container = document.getElementById('upgrades');
    container.innerHTML = '';

    upgrades.forEach(upgrade => {
        const div = document.createElement('div');
        div.innerHTML = `
        <strong>${upgrade.name}</strong>
        const: ${upgrade.cost} | +${upgrade.bonus} per click
        <button onclick="buyUpgrade(${upgrade.id})">Buy</button>
        `;
        container.appendChild(div);
    });
}

renderUpgrades();

function updateDisplay() {
    document.getElementById('score-display').textContent = 'Positions: ' + score;
    document.getElementById('rate-display').textContent = 'Positions per brew: ' + pointsPerClick;
}

document.getElementById('click-btn').addEventListener('click', function() {
    score += pointsPerClick;
    updateDisplay();
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