
  function toRadians(degrees: number): number {
    const pi = Math.PI;
    return degrees * (pi / 180);
  }


  function calculateDistance_(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371e3; // meters (Earth's radius)
  
    const φ1 = toRadians(lat1);
    const φ2 = toRadians(lat2);
    const Δφ = φ2 - φ1;
    const λ1 = toRadians(lon1);
    const λ2 = toRadians(lon2);
    const Δλ = λ2 - λ1;
  
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  
    const c = 2 * Math.asin(Math.sqrt(a));
  
    const distance = R * c;
  
    return distance;
  }