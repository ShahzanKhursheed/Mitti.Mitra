document.getElementById('calculate-btn').addEventListener('click', calculateFertilizer);

function calculateFertilizer() {
    let ph = parseFloat(document.getElementById('ph').value);
    let area = parseFloat(document.getElementById('area').value);
    let recommendation = '';

    // Get nutrient values
    let nutrients = {
        nitrogen: parseFloat(document.getElementById('nitrogen').value),
        phosphate: parseFloat(document.getElementById('phosphate').value),
        potassium: parseFloat(document.getElementById('potassium').value),
        carbon: parseFloat(document.getElementById('carbon').value),
        boron: parseFloat(document.getElementById('boron').value),
        iron: parseFloat(document.getElementById('iron').value),
        manganese: parseFloat(document.getElementById('manganese').value),
        zinc: parseFloat(document.getElementById('zinc').value),
        molybdenum: parseFloat(document.getElementById('molybdenum').value),
        copper: parseFloat(document.getElementById('copper').value),
        chloride: parseFloat(document.getElementById('chloride').value),
        sulphur: parseFloat(document.getElementById('sulphur').value),
        calcium: parseFloat(document.getElementById('calcium').value),
        sodium: parseFloat(document.getElementById('sodium').value),
        magnesium: parseFloat(document.getElementById('magnesium').value)
    };

    // Determine soil type
    let soilType = '';
    if (ph < 6.5) {
        soilType = 'Acidic';
    } else if (ph >= 6.5 && ph <= 7.5) {
        soilType = 'Neutral';
    } else {
        soilType = 'Alkaline';
    }

    for (let nutrient in nutrients) {
        let value = nutrients[nutrient];
        if (soilType === 'Acidic') {
            if (nutrient === 'nitrogen') {
                recommendation += `Nutrient: Nitrogen, Fertilizer: Ammonium Sulphate, Total Required: ${(120 * area / 0.21).toFixed(2)} kg\n`;
            } else if (nutrient === 'phosphate') {
                recommendation += `Nutrient: Phosphate, Fertilizer: Diammonium Phosphate (DAP), Total Required: ${(60 * area / 0.46).toFixed(2)} kg\n`;
            } else if (nutrient === 'potassium') {
                recommendation += `Nutrient: Potassium, Fertilizer: Potassium Chloride, Total Required: ${(50 * area / 0.60).toFixed(2)} kg\n`;
            } else if (nutrient === 'carbon') {
                recommendation += `Nutrient: Carbon, Fertilizer: Compost (organic matter), Total Required: ${(3 * area / 0.21).toFixed(2)} kg\n`;
            } else if (nutrient === 'boron') {
                recommendation += `Nutrient: Boron, Fertilizer: Borax, Total Required: ${(2 * area / 0.11).toFixed(2)} kg\n`;
            } else if (nutrient === 'iron') {
                recommendation += `Nutrient: Iron, Fertilizer: Ferrous Sulphate, Total Required: ${(5 * area / 0.20).toFixed(2)} kg\n`;
            } else if (nutrient === 'manganese') {
                recommendation += `Nutrient: Manganese, Fertilizer: Zinc Sulphate, Total Required: ${(5 * area / 0.31).toFixed(2)} kg\n`;
            } else if (nutrient === 'zinc') {
                recommendation += `Nutrient: Zinc, Fertilizer: Ammonium Molybdate, Total Required: ${(3 * area / 0.35).toFixed(2)} kg\n`;
            } else if (nutrient === 'molybdenum') {
                recommendation += `Nutrient: Molybdenum, Fertilizer: Ammonium Molybdate, Total Required: ${(0.25 * area / 0.54).toFixed(2)} kg\n`;
            } else if (nutrient === 'copper') {
                recommendation += `Nutrient: Copper, Fertilizer: Copper Chloride, Total Required: ${(2 * area / 0.25).toFixed(2)} kg\n`;
            } else if (nutrient === 'chloride') {
                recommendation += `Nutrient: Chloride, Fertilizer: Magnesium Sulphate, Total Required: ${(25 * area / 0.30).toFixed(2)} kg\n`;
            } else if (nutrient === 'sulphur') {
                recommendation += `Nutrient: Sulphur, Fertilizer: Ammonium Sulphate, Total Required: ${(20 * area / 0.24).toFixed(2)} kg\n`;
            } else if (nutrient === 'calcium') {
                recommendation += `Nutrient: Calcium, Fertilizer: Gypsum, Total Required: ${(500 * area / 0.25).toFixed(2)} kg\n`;
            } else if (nutrient === 'sodium') {
                recommendation += `Nutrient: Sodium, Fertilizer: Sodium Nitrate, Total Required: ${(50 * area / 0.16).toFixed(2)} kg\n`;
            } else if (nutrient === 'magnesium') {
                recommendation += `Nutrient: Magnesium, Fertilizer: Magnesium Sulphate, Total Required: ${(40 * area / 0.10).toFixed(2)} kg\n`;
            }
        } else if (soilType === 'Neutral') {
            if (nutrient === 'nitrogen') {
                recommendation += `Nutrient: Nitrogen, Fertilizer: Urea, Total Required: ${(110 * area / 0.46).toFixed(2)} kg\n`;
            } else if (nutrient === 'phosphate') {
                recommendation += `Nutrient: Phosphate, Fertilizer: Monoammonium Phosphate, Total Required: ${(50 * area / 0.52).toFixed(2)} kg\n`;
            } else if (nutrient === 'potassium') {
                recommendation += `Nutrient: Potassium, Fertilizer: Potassium Chloride, Total Required: ${(40 * area / 0.55).toFixed(2)} kg\n`;
            } else if (nutrient === 'carbon') {
                recommendation += `Nutrient: Carbon, Fertilizer: Humic Acid, Total Required: ${(25 * area / 0.21).toFixed(2)} kg\n`;
            } else if (nutrient === 'boron') {
                recommendation += `Nutrient: Boron, Fertilizer: Sodium Tetraborate, Total Required: ${(2 * area / 0.20).toFixed(2)} kg\n`;
            } else if (nutrient === 'iron') {
                recommendation += `Nutrient: Iron, Fertilizer: Iron Oxide, Total Required: ${(2.5 * area / 0.30).toFixed(2)} kg\n`;
            } else if (nutrient === 'manganese') {
                recommendation += `Nutrient: Manganese, Fertilizer: Manganese Sulphate, Total Required: ${(4 * area / 0.24).toFixed(2)} kg\n`;
            } else if (nutrient === 'zinc') {
                recommendation += `Nutrient: Zinc, Fertilizer: Zinc Sulphate, Total Required: ${(2 * area / 0.35).toFixed(2)} kg\n`;
            } else if (nutrient === 'molybdenum') {
                recommendation += `Nutrient: Molybdenum, Fertilizer: Ammonium Molybdate, Total Required: ${(0.3 * area / 0.54).toFixed(2)} kg\n`;
            } else if (nutrient === 'copper') {
                recommendation += `Nutrient: Copper, Fertilizer: Copper Sulphate, Total Required: ${(1 * area / 0.25).toFixed(2)} kg\n`;
            } else if (nutrient === 'chloride') {
                recommendation += `Nutrient: Chloride, Fertilizer: Ammonium Chloride, Total Required: ${(20 * area / 0.70).toFixed(2)} kg\n`;
            } else if (nutrient === 'sulphur') {
                recommendation += `Nutrient: Sulphur, Fertilizer: Ammonium Sulphate, Total Required: ${(30 * area / 0.2).toFixed(2)} kg\n`;
            } else if (nutrient === 'calcium') {
                recommendation += `Nutrient: Calcium, Fertilizer: Gypsum, Total Required: ${(500 * area / 0.25).toFixed(2)} kg\n`;
            } else if (nutrient === 'sodium') {
                recommendation += `Nutrient: Sodium, Fertilizer: Sodium Sulphate, Total Required: ${(4 * area / 0.21).toFixed(2)} kg\n`;
            } else if (nutrient === 'magnesium') {
                recommendation += `Nutrient: Magnesium, Fertilizer: Magnesium Sulphate, Total Required: ${(30 * area / 0.16).toFixed(2)} kg\n`;
            }
        } else if (soilType === 'Alkaline') {
            if (nutrient === 'nitrogen') {
                recommendation += `Nutrient: Nitrogen, Fertilizer: Urea, Total Required: ${(110 * area / 0.46).toFixed(2)} kg\n`;
            } else if (nutrient === 'phosphate') {
                recommendation += `Nutrient: Phosphate, Fertilizer: Triple Super Phosphate (TSP), Total Required: ${(50 * area / 0.20).toFixed(2)} kg\n`;
            } else if (nutrient === 'potassium') {
                recommendation += `Nutrient: Potassium, Fertilizer: Potassium Chloride, Total Required: ${(40 * area / 0.55).toFixed(2)} kg\n`;
            } else if (nutrient === 'carbon') {
                recommendation += `Nutrient: Carbon, Fertilizer: Compost/Manure/Peat Mass, Total Required: ${(25 * area / 0.21).toFixed(2)} kg\n`;
            } else if (nutrient === 'boron') {
                recommendation += `Nutrient: Boron, Fertilizer: Sodium Tetraborate, Total Required: ${(2 * area / 0.20).toFixed(2)} kg\n`;
            } else if (nutrient === 'iron') {
                recommendation += `Nutrient: Iron, Fertilizer: Iron Sulphate, Total Required: ${(2.5 * area / 0.20).toFixed(2)} kg\n`;
            } else if (nutrient === 'manganese') {
                recommendation += `Nutrient: Manganese, Fertilizer: Manganese Sulphate, Total Required: ${(2.5 * area / 0.25).toFixed(2)} kg\n`;
            } else if (nutrient === 'zinc') {
                recommendation += `Nutrient: Zinc, Fertilizer: Zinc Sulphate, Total Required: ${(3 * area / 0.35).toFixed(2)} kg\n`;
            } else if (nutrient === 'molybdenum') {
                recommendation += `Nutrient: Molybdenum, Fertilizer: Ammonium Molybdate, Total Required: ${(1.5 * area / 0.54).toFixed(2)} kg\n`;
            } else if (nutrient === 'copper') {
                recommendation += `Nutrient: Copper, Fertilizer: Copper Sulphate, Total Required: ${(2 * area / 0.25).toFixed(2)} kg\n`;
            } else if (nutrient === 'chloride') {
                recommendation += `Nutrient: Chloride, Fertilizer: Calcium Chloride, Total Required: ${(15 * area / 0.35).toFixed(2)} kg\n`;
            } else if (nutrient === 'sulphur') {
                recommendation += `Nutrient: Sulphur, Fertilizer: Elemental Sulphur (Slow Release), Total Required: ${(25 * area / 0.90).toFixed(2)} kg\n`;
            } else if (nutrient === 'calcium') {
                recommendation += `Nutrient: Calcium, Fertilizer: Limesoda, Total Required: ${(250 * area / 0.20).toFixed(2)} kg\n`;
            } else if (nutrient === 'sodium') {
                recommendation += `Nutrient: Sodium, Fertilizer: Sodium Nitrate, Total Required: ${(35 * area / 0.16).toFixed(2)} kg\n`;
            } else if (nutrient === 'magnesium') {
                recommendation += `Nutrient: Magnesium, Fertilizer: Magnesium Sulphate, Total Required: ${(45 * area / 0.15).toFixed(2)} kg\n`;
            }
        }
    }

    // Display recommendations
    document.getElementById('recommendation').innerText = recommendation;
}