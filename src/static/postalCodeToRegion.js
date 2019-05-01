const postalCodeToRegion = [
  {
    Zone: "City",
    District: 1,
    BeginsWith: [1, 2, 3, 4, 5, 6]
  },
  {
    Zone: "City",
    District: 2,
    BeginsWith: [7, 8]
  },
  {
    Zone: "South",
    District: 3,
    BeginsWith: [14, 15, 16]
  },
  {
    Zone: "City",
    District: 4,
    BeginsWith: [9, 10]
  },

  {
    Zone: "West",
    District: 5,
    BeginsWith: [11, 12, 13]
  },
  {
    Zone: "City",
    District: 6,
    BeginsWith: [17]
  },
  {
    Zone: "City",
    District: 7,
    BeginsWith: [18, 19]
  },
  {
    Zone: "Central",
    District: 8,
    BeginsWith: [20, 21]
  },
  {
    Zone: "Central",
    District: 9,
    BeginsWith: [22, 23]
  },
  {
    Zone: "Central",
    District: 10,
    BeginsWith: [24, 25, 26, 27]
  },
  {
    Zone: "Central",
    District: 11,
    BeginsWith: [28, 29, 30]
  },
  {
    Zone: "Central",
    District: 12,
    BeginsWith: [31, 32, 33]
  },
  {
    Zone: "East",
    District: 13,
    BeginsWith: [34, 35, 36, 37]
  },
  {
    Zone: "East",
    District: 14,
    BeginsWith: [38, 39, 40, 41]
  },
  {
    Zone: "East",
    District: 15,
    BeginsWith: [42, 43, 44, 45]
  },
  {
    Zone: "East",
    District: 16,
    BeginsWith: [46, 47, 48]
  },
  {
    Zone: "East",
    District: 17,
    BeginsWith: [49, 50, 81]
  },
  {
    Zone: "East",
    District: 18,
    BeginsWith: [51, 52]
  },
  {
    Zone: "North",
    District: 19,
    BeginsWith: [53, 54, 55, 82]
  },
  {
    Zone: "North",
    District: 20,
    BeginsWith: [56, 57]
  },
  {
    Zone: "West",
    District: 21,
    BeginsWith: [58, 59]
  },
  {
    Zone: "West",
    District: 22,
    BeginsWith: [60, 61, 62, 63, 64]
  },
  {
    Zone: "West",
    District: 23,
    BeginsWith: [65, 66, 67, 68]
  },
  {
    Zone: "West",
    District: 24,
    BeginsWith: [69, 70, 71]
  },
  {
    Zone: "North",
    District: 25,
    BeginsWith: [72, 73]
  },
  {
    Zone: "North",
    District: 26,
    BeginsWith: [77, 78]
  },
  {
    Zone: "North",
    District: 27,
    BeginsWith: [75, 76]
  },
  {
    Zone: "North",
    District: 28,
    BeginsWith: [79, 80]
  }
];

export function getZone(code) {
  return postalCodeToRegion.filter(a =>
    a.BeginsWith.includes(parseInt(code.toString().substring(0, 2)))
  )[0].Zone;
}

export function getDistrict(code) {
  return postalCodeToRegion.filter(a =>
    a.BeginsWith.includes(parseInt(code.toString().substring(0, 2)))
  )[0].District;
}
