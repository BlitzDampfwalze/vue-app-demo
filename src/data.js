const cityCoords = {
  'New York': [-74.006, 40.7128],
  'Los Angeles': [-118.2437, 34.0522],
  'Chicago': [-87.6298, 41.8781],
  'Houston': [-95.3698, 29.7604],
  'Phoenix': [-112.074, 33.4484],
  'Philadelphia': [-75.1652, 39.9526],
  'San Antonio': [-98.4936, 29.4241],
  'San Diego': [-117.1611, 32.7157],
  'Dallas': [-96.797, 32.7767],
  'Miami': [-80.1918, 25.7617],
  'Seattle': [-122.3321, 47.6062],
  'Denver': [-104.9903, 39.7392],
  'Atlanta': [-84.388, 33.749],
  'Boston': [-71.0589, 42.3601]
}

export const getDemoData = (dateStr) => {
  const month = new Date(dateStr).getMonth() + 1 //+1 as .getMonth() is zero indexed
  const baseDemand = month > 5 && month < 10 ? 70 : 40

  return Object.keys(cityCoords).map(cityName => ({
    name: cityName,
    value: [...cityCoords[cityName], baseDemand + Math.random() * 40]
  }))
}

// connections from city to city
export const getConnections = () => {
  const connections = [
    ['New York', 'Chicago'],
    ['Chicago', 'Denver'],
    ['Denver', 'Seattle'],
    ['Denver', 'Los Angeles'],
    ['Los Angeles', 'Phoenix'],
    ['Houston', 'Dallas'],
    ['Dallas', 'Chicago'],
    ['Atlanta', 'Miami'],
    ['Atlanta', 'New York'],
    ['Boston', 'New York']
  ]

  return connections.map(link => ({
    coords: [cityCoords[link[0]], cityCoords[link[1]]]
  }))
}