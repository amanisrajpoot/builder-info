import fs from 'fs';

const districtsData = JSON.parse(fs.readFileSync('./src/app/post-project/india_districts.json', 'utf8'));
const districts = districtsData.districts;

const statesSet = new Set();
const districtsSet = new Set();
const headquartersSet = new Set();

for (const d of districts) {
  if (d.state) statesSet.add(d.state);
  if (d.district && d.state) districtsSet.add(`${d.district}, ${d.state}`);
  if (d.headquarters && d.district && d.state) headquartersSet.add(`${d.headquarters}, ${d.district}, ${d.state}`);
}

const locations = [
  ...Array.from(statesSet),
  ...Array.from(districtsSet),
  ...Array.from(headquartersSet),
];

// Remove duplicates (in case of overlap)
const uniqueLocations = Array.from(new Set(locations)).sort();

fs.writeFileSync('./src/app/post-project/locations.json', JSON.stringify(uniqueLocations, null, 2));

console.log(`Generated locations.json with ${uniqueLocations.length} entries.`); 