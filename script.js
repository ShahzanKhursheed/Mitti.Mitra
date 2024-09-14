document.getElementById('fertilizerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const ph = parseFloat(document.getElementById('ph').value);
    const area = parseFloat(document.getElementById('area').value);
    const nutrients = {
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
        magnesium: parseFloat(document.getElementById('magnesium').value),
        sulphur: parseFloat(document.getElementById('sulphur').value),
        calcium: parseFloat(document.getElementById('calcium').value),
        sodium: parseFloat(document.getElementById('sodium').value),
    };

    let soilType = determineSoilType(ph);
    let recommendations = generateRecommendations(soilType, nutrients, area);

    document.getElementById('soilType').textContent = `Soil Type: ${soilType}`;
    document.getElementById('fertilizerSuggestions').innerHTML = recommendations;
});

function determineSoilType(ph) {
    if (ph < 6.3) return 'Acidic';
    if (ph > 7.7) return 'Alkaline';
    return 'Neutral';
}

function generateRecommendations(soilType, nutrients, area) {
    const fertilizerInfo = getFertilizerInfo(soilType);
    let recommendations = '';

    for (const nutrient in nutrients) {
        const level = nutrients[nutrient];
        const { range, fertilizer, rate, factor } = fertilizerInfo[nutrient];
        if (level < range[0]) {
            const requiredFertilizer = ((rate * area) / factor).toFixed(2);
            recommendations += `<p>${nutrient}: Deficient - Recommend ${fertilizer}, Amount Needed: ${requiredFertilizer} kg</p>`;
        }
    }
    return recommendations;
}

function getFertilizerInfo(soilType) {
    const baseInfo = {
        nitrogen: { range: [20, 50], fertilizer: 'Ammonium Sulphate', rate: 120, factor: 0.21 },
        phosphate: { range: [5, 20], fertilizer: 'Diammonium Phosphate (DAP)', rate: 60, factor: 0.46 },
        potassium: { range: [50, 200], fertilizer: 'Potassium Chloride', rate: 50, factor: 0.60 },
        carbon: { range: [3000, 30000], fertilizer: 'Compost', rate: 3, factor: 0.21 },
        boron: { range: [1.5, 15], fertilizer: 'Borax', rate: 2, factor: 0.11 },
        iron: { range: [10, 1500], fertilizer: 'Ferrous Sulphate', rate: 5, factor: 0.20 },
        manganese: { range: [60, 600], fertilizer: 'Manganese Sulphate', rate: 5, factor: 0.31 },
        zinc: { range: [3, 30], fertilizer: 'Zinc Sulphate', rate: 3, factor: 0.35 },
        molybdenum: { range: [0.03, 1.5], fertilizer: 'Ammonium Molybdate', rate: 0.25, factor: 0.54 },
        copper: { range: [3, 30], fertilizer: 'Copper Sulphate', rate: 2, factor: 0.25 },
        chloride: { range: [15, 600], fertilizer: 'Potassium Chloride', rate: 25, factor: 0.30 },
        magnesium: { range: [150, 600], fertilizer: 'Magnesium Sulphate', rate: 40, factor: 0.10 },
        sulphur: { range: [30, 150], fertilizer: 'Ammonium Sulphate', rate: 20, factor: 0.24 },
        calcium: { range: [600, 2400], fertilizer: 'Gypsum', rate: 500, factor: 0.25 },
        sodium: { range: [10, 50], fertilizer: 'Sodium Chloride', rate: 50, factor: 0.16 },
    };
    return baseInfo;
}
function sendEmail() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var mailto_link = 'mailto:mittimitra786@gmail.com?subject=Query from ' + email + '&body=' + encodeURIComponent(message);
  
    window.location.href = mailto_link;
  }