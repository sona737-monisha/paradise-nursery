// Thumbnails are generated SVG data-URIs so the app works offline.
// Replace `image` with real photo URLs any time.
const thumb = (name, color) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='200' height='200' fill='${color}'/><g fill='#fff' fill-opacity='.85'><ellipse cx='100' cy='95' rx='20' ry='55'/><ellipse cx='70' cy='105' rx='16' ry='42' transform='rotate(-35 70 105)'/><ellipse cx='130' cy='105' rx='16' ry='42' transform='rotate(35 130 105)'/></g><rect x='75' y='150' width='50' height='35' rx='6' fill='#8b5a3c'/></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};
const p = (name, cost, color, description) => ({ name, cost, description, image: thumb(name, color) });

export const plantsArray = [
  { category: 'Air Purifying Plants', plants: [
    p('Snake Plant', 15, '#4f9d69', 'Produces oxygen at night and removes toxins.'),
    p('Spider Plant', 12, '#5aa876', 'Filters formaldehyde and xylene from the air.'),
    p('Peace Lily', 18, '#3f8f5e', 'Removes mold spores and purifies the air.'),
    p('Boston Fern', 20, '#68b381', 'Adds humidity and removes indoor pollutants.'),
    p('Rubber Plant', 17, '#2f7d51', 'Easy-care plant that absorbs airborne toxins.'),
    p('Aloe Vera', 14, '#7cbf8e', 'Purifies air and soothes minor burns.'),
  ]},
  { category: 'Aromatic Fragrant Plants', plants: [
    p('Lavender', 20, '#8a7fc0', 'Calming scent that promotes relaxation.'),
    p('Jasmine', 18, '#c58fb0', 'Sweet fragrance that lifts the mood.'),
    p('Rosemary', 15, '#5f9a7a', 'Fragrant herb that also flavours food.'),
    p('Mint', 12, '#4fb08a', 'Fresh scent and great for teas.'),
    p('Lemon Balm', 14, '#9bc46a', 'Citrus aroma that eases stress.'),
    p('Hyacinth', 22, '#6f8fd0', 'Bulb plant with an intense spring perfume.'),
  ]},
  { category: 'Low Maintenance Plants', plants: [
    p('ZZ Plant', 25, '#2f8a55', 'Thrives on neglect and low light.'),
    p('Pothos', 10, '#5bb56b', 'Fast-growing trailing vine, very forgiving.'),
    p('Cast Iron Plant', 24, '#276b45', 'Nearly indestructible in shade.'),
    p('Jade Plant', 13, '#70b37f', 'Succulent that stores water in its leaves.'),
    p('Ponytail Palm', 22, '#8dbd5f', 'Water only every few weeks.'),
    p('Dracaena', 19, '#4a9a78', 'Tolerates low light and irregular watering.'),
  ]},
];
