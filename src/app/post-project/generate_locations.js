const fs = require('fs');
const path = require('path');

const districtsPath = path.join(__dirname, 'india_districts.json');
const outputPath = path.join(__dirname, 'locations.json');

const raw = fs.readFileSync(districtsPath, 'utf-8');
const data = JSON.parse(raw);

const locationsSet = new Set();

// Add all states
for (const d of data.districts) {
  locationsSet.add(d.state);
}

// Add all districts ("District, State")
for (const d of data.districts) {
  locationsSet.add(`${d.district}, ${d.state}`);
}

// Add all headquarters ("Headquarters, District, State")
for (const d of data.districts) {
  if (d.headquarters && d.headquarters !== d.district) {
    locationsSet.add(`${d.headquarters}, ${d.district}, ${d.state}`);
  }
}

const locations = Array.from(locationsSet);
locations.sort((a, b) => a.localeCompare(b));

fs.writeFileSync(outputPath, JSON.stringify(locations, null, 2), 'utf-8');

console.log(`Generated ${locations.length} unique locations.`); 