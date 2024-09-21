export const haversineDistance = (coords1, coords2) => {
    const toRad = (x) => (x * Math.PI) / 180;
  
    const lat1 = coords1.latitude;
    const lon1 = coords1.longitude;
    const lat2 = coords2.latitude;
    const lon2 = coords2.longitude;
  
    const R = 6371; // Earth's radius in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
  
    return distance;
  };
  
  // Example usage:
  const coord1 = { latitude: 51.5103, longitude: -0.1173 }; // London
  const coord2 = { latitude: 48.8566, longitude: 2.3522 };  // Paris
  
  const distance = haversineDistance(coord1, coord2);
  console.log(`Distance: ${distance} km`);
  