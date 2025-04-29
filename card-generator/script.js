function updateCard() {
    // Get form input values
    const pokemonName = document.getElementById('pokemonName').value;
    const pokemonType = document.getElementById('pokemonType').value;
    const hp = document.getElementById('hp').value;
    const pokemonImageUrl = document.getElementById('pokemonImage').value;
    const attackName = document.getElementById('attackName').value;
    const attackCost = document.getElementById('attackCost').value;
    const attackDamage = document.getElementById('attackDamage').value;
    const attackDesc = document.getElementById('attackDesc').value;
    const weakness = document.getElementById('weakness').value;
    const resistance = document.getElementById('resistance').value;
    const retreatCost = document.getElementById('retreatCost').value;
    const setSymbol = document.getElementById('setSymbol').value;
    const rarity = document.getElementById('rarity').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const templateStyle = document.getElementById('templateStyle').value;
    
    // Get card elements
    const card = document.getElementById('pokemonCard');
    const nameElement = card.querySelector('.pokemon-name');
    const typeElement = card.querySelector('.pokemon-type');
    const hpElement = card.querySelector('.hp');
    const imageElement = card.querySelector('#pokemonImageDisplay');
    const attackCostElement = card.querySelector('.attack-cost');
    const attackNameElement = card.querySelector('.attack-name');
    const attackDamageElement = card.querySelector('.attack-damage');
    const attackDescElement = card.querySelector('.attack-desc');
    const weaknessTypeElement = card.querySelector('.weakness-type');
    const resistanceTypeElement = card.querySelector('.resistance-type');
    const retreatIconsElement = card.querySelector('.retreat-icons');
    const setSymbolElement = card.querySelector('.set-symbol');
    const rarityElement = card.querySelector('.rarity');
    const cardNumberElement = card.querySelector('.card-number');
    
    // Get position and scale inputs
    const headerXPos = document.getElementById('headerXPos').value + 'px';
    const headerYPos = document.getElementById('headerYPos').value + 'px';
    const imageXPos = document.getElementById('imageXPos').value + 'px';
    const imageYPos = document.getElementById('imageYPos').value + 'px';
    const bodyXPos = document.getElementById('bodyXPos').value + 'px';
    const bodyYPos = document.getElementById('bodyYPos').value + 'px';
    const footerXPos = document.getElementById('footerXPos').value + 'px';
    const footerYPos = document.getElementById('footerYPos').value + 'px';
    const infoXPos = document.getElementById('infoXPos').value + 'px';
    const infoYPos = document.getElementById('infoYPos').value + 'px';
    const imageScale = document.getElementById('imageScale').value / 100; // Scale as a decimal
    const nameXPos = document.getElementById('nameXPos').value + 'px';
    const nameYPos = document.getElementById('nameYPos').value + 'px';
    const typeXPos = document.getElementById('typeXPos').value + 'px';
    const typeYPos = document.getElementById('typeYPos').value + 'px';
    const hpXPos = document.getElementById('hpXPos').value + 'px';
    const hpYPos = document.getElementById('hpYPos').value + 'px';
    
    // Update card content
    nameElement.textContent = pokemonName;
    hpElement.textContent = `HP ${hp}`;
    imageElement.src = pokemonImageUrl;
    attackNameElement.textContent = attackName;
    attackDamageElement.textContent = attackDamage;
    attackDescElement.textContent = attackDesc;
    cardNumberElement.textContent = cardNumber;
    
    // Update card style based on template selection
    card.className = `card ${templateStyle}`;
    
    // Update Pokémon type
    typeElement.className = 'pokemon-type';
    if (pokemonType !== 'none') {
        typeElement.classList.add(`type-${pokemonType}`);
    }
    
    // Update attack cost
    attackCostElement.innerHTML = '';
    if (attackCost === '1colorless') {
        const energyIcon = document.createElement('div');
        energyIcon.className = 'energy-icon type-colorless';
        attackCostElement.appendChild(energyIcon);
    } else if (attackCost === '2colorless') {
        for (let i = 0; i < 2; i++) {
            const energyIcon = document.createElement('div');
            energyIcon.className = 'energy-icon type-colorless';
            attackCostElement.appendChild(energyIcon);
        }
    } else if (attackCost === '1type') {
        const energyIcon = document.createElement('div');
        energyIcon.className = `energy-icon type-${pokemonType}`;
        attackCostElement.appendChild(energyIcon);
    } else if (attackCost === '1type1colorless') {
        const typeIcon = document.createElement('div');
        typeIcon.className = `energy-icon type-${pokemonType}`;
        attackCostElement.appendChild(typeIcon);
        
        const colorlessIcon = document.createElement('div');
        colorlessIcon.className = 'energy-icon type-colorless';
        attackCostElement.appendChild(colorlessIcon);
    } else if (attackCost === '2type') {
        for (let i = 0; i < 2; i++) {
            const energyIcon = document.createElement('div');
            energyIcon.className = `energy-icon type-${pokemonType}`;
            attackCostElement.appendChild(energyIcon);
        }
    }
    
    // Update weakness
    weaknessTypeElement.className = 'weakness-type';
    if (weakness !== 'none') {
        weaknessTypeElement.classList.add(`type-${weakness}`);
    }
    
    // Update resistance
    resistanceTypeElement.className = 'resistance-type';
    if (resistance !== 'none') {
        resistanceTypeElement.classList.add(`type-${resistance}`);
    }
    
    // Update retreat cost
    retreatIconsElement.innerHTML = '';
    for (let i = 0; i < parseInt(retreatCost); i++) {
        const retreatIcon = document.createElement('div');
        retreatIcon.className = 'retreat-icon type-colorless';
        retreatIconsElement.appendChild(retreatIcon);
    }
    
    // Update set symbol
    setSymbolElement.className = 'set-symbol';
    setSymbolElement.classList.add(`set-symbol-${setSymbol}`);
    
    // Update rarity
    rarityElement.className = 'rarity';
    rarityElement.classList.add(`rarity-${rarity}`);
    
    // Apply position and scale updates
    const cardHeader = card.querySelector('.card-header');
    cardHeader.style.position = 'absolute';
    cardHeader.style.left = headerXPos;
    cardHeader.style.top = headerYPos;
    
    const cardImage = card.querySelector('.card-image');
    cardImage.style.position = 'absolute';
    cardImage.style.left = imageXPos;
    cardImage.style.top = imageYPos;
    imageElement.style.transform = 'scale(' + imageScale + ')';
    
    const cardBody = card.querySelector('.card-body');
    cardBody.style.position = 'absolute';
    cardBody.style.left = bodyXPos;
    cardBody.style.top = bodyYPos;
    
    const cardFooter = card.querySelector('.card-footer');
    cardFooter.style.position = 'absolute';
    cardFooter.style.left = footerXPos;
    cardFooter.style.top = footerYPos;
    
    const cardInfo = card.querySelector('.card-info');
    cardInfo.style.position = 'absolute';
    cardInfo.style.left = infoXPos;
    cardInfo.style.top = infoYPos;
    
    nameElement.style.position = 'absolute';
    nameElement.style.left = nameXPos;
    nameElement.style.top = nameYPos;
    
    typeElement.style.position = 'absolute';
    typeElement.style.left = typeXPos;
    typeElement.style.top = typeYPos;
    
    hpElement.style.position = 'absolute';
    hpElement.style.left = hpXPos;
    hpElement.style.top = hpYPos;
}

// Initialize the card preview on page load
document.addEventListener('DOMContentLoaded', updateCard);