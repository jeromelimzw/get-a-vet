const vetLocations = [
  {
    name: "Singapore Turf Club Equine Hospital",
    fax_office: "68791010",
    postal_code: "738078",
    address: "1 Turf Club Avenue Singapore Racecourse",
    _id: 1,
    type: "Hospital",
    tel_office_2: "na",
    tel_office_1: "68791000"
  },
  {
    name: "AAVC - Animal & Avian Veterinary Clinic",
    fax_office: "68533949",
    postal_code: "760716",
    address: "716 Yishun Street 71 #01-254",
    _id: 2,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "68539397"
  },
  {
    name: "Acacia Veterinary Clinic",
    fax_office: "na",
    postal_code: "560338",
    address: "338 Ang Mo Kio Avenue 1 #01-1671",
    _id: 3,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64816889"
  },
  {
    name: "Allpets & Aqualife Vets Pte Ltd ",
    fax_office: "64816990",
    postal_code: "809041",
    address: "24 Jalan Kelulut",
    _id: 4,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64813700"
  },
  {
    name: "Amber Veterinary Practice Pte Ltd",
    fax_office: "62452334",
    postal_code: "459837",
    address: "50 Burnfoot Terrace, Frankel Estate",
    _id: 5,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62455543"
  },
  {
    name: "AMK Veterinary Surgery (2009) Pte Ltd",
    fax_office: "64514001",
    postal_code: "779391",
    address: "5 Mandai Road",
    _id: 6,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64515242"
  },
  {
    name: "Animal Ark Veterinary Group (Animal Ark Binjai)",
    fax_office: "64623319",
    postal_code: "589823",
    address: "11 Binjai Park",
    _id: 7,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "61006000"
  },
  {
    name: "Animal Ark Veterinary Group (Animal Ark Greendale)",
    fax_office: "64637144",
    postal_code: "289498",
    address: "3 Greendale Avenue",
    _id: 8,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64637100"
  },
  {
    name: "Animal Ark Veterinary Group (Animal Ark Tampines)",
    fax_office: "67864506",
    postal_code: "521139",
    address: "139 Tampines Street 11 #01-42",
    _id: 9,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "65871797"
  },
  {
    name: "Animal Ark Veterinary Group (TCM)",
    fax_office: "67820416",
    postal_code: "521139",
    address: "139 Tampines Street 11 #01-62",
    _id: 10,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "67893578"
  },
  {
    name: "Animal Infirmary",
    fax_office: "63582629",
    postal_code: "307590",
    address: "74 Thomson Road",
    _id: 11,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "63582663"
  },
  {
    name: "Animal Medical Centre (VET@RV) Pte Ltd",
    fax_office: "62710171",
    postal_code: "161078",
    address: "78 Indus Road #01-487, Indus Garden",
    _id: 12,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62710665"
  },
  {
    name: "Animal Practice Pte Ltd",
    fax_office: "62881823",
    postal_code: "534753",
    address: "1015 Upper Serangoon Road #01-00",
    _id: 13,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62883929"
  },
  {
    name: "Animal Recovery Veterinary Referral Center Pte Ltd",
    fax_office: "62522836",
    postal_code: "218225",
    address: "466 Serangoon Road",
    _id: 14,
    type: "Clinic",
    tel_office_2: "62522284",
    tel_office_1: "62522623"
  },
  {
    name: "Animal World Veterinary Clinic Pte Ltd",
    fax_office: "62860959",
    postal_code: "545527",
    address: "16 Yio Chu Kang Road",
    _id: 15,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62860929"
  },
  {
    name: "Brighton Vet Care Pte Ltd",
    fax_office: "62822434",
    postal_code: "555970",
    address: "74 Serangoon Garden Way, Serangoon Garden Estate",
    _id: 16,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62822484"
  },
  {
    name: "Care Veterinary Clinic Pte Ltd",
    fax_office: "62500626",
    postal_code: "310124",
    address: "124 Lorong 1 Toa Payoh #01-473",
    _id: 17,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62500535"
  },
  {
    name: "Clinic For Pets",
    fax_office: "67457383",
    postal_code: "389730",
    address: "1015 Geylang East Avenue 3 #01-141",
    _id: 18,
    type: "Clinic",
    tel_office_2: "67487105",
    tel_office_1: "67451337"
  },
  {
    name: "Companion Animal Surgery Pte Ltd",
    fax_office: "62511910",
    postal_code: "329586",
    address: "12 Boon Teck Road #01-04/05, Shaw Corner",
    _id: 19,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62557950"
  },
  {
    name: "Defu Veterinary Clinic",
    fax_office: "62848412",
    postal_code: "539214",
    address: "37 Defu Lane 10 #01-79",
    _id: 20,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62848411"
  },
  {
    name: "Edmond Tan Veterinary Surgery",
    fax_office: "62848601",
    postal_code: "550151",
    address: "151 Serangoon North Avenue 2 #01-65",
    _id: 21,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62821581"
  },
  {
    name: "Frankel Veterinary Centre",
    fax_office: "68761219",
    postal_code: "458224",
    address: "101 Frankel Avenue",
    _id: 22,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "68761212"
  },
  {
    name: "Gentle Oak Veterinary Clinic",
    fax_office: "62508003",
    postal_code: "270021",
    address: "21 Ghim Moh Road #01-225A",
    _id: 23,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62508001"
  },
  {
    name: "Heart2Heart Veterinary Centre",
    fax_office: "68585884",
    postal_code: "545564",
    address: "58 Yio Chu Kang Road",
    _id: 24,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "68585885"
  },
  {
    name: "Island Veterinary Clinic (Northeast) Pte Ltd",
    fax_office: "64484082",
    postal_code: "460123",
    address: "123 Bedok North Street 2 #01-154",
    _id: 25,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64404491"
  },
  {
    name: "Island Veterinary Clinic Pte Ltd",
    fax_office: "65605619",
    postal_code: "600114",
    address: "114 Jurong East Street 13 #01-404",
    _id: 26,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "65605991"
  },
  {
    name: "James Tan Veterinary Centre Pte Ltd",
    fax_office: "62507168",
    postal_code: "297823",
    address: "230 Whitley Road",
    _id: 27,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62531122"
  },
  {
    name: "Jireh Veterinary Clinic Pte Ltd",
    fax_office: "65560269",
    postal_code: "574302",
    address: "15 Venus Road Windsor Park Estate",
    _id: 28,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "65560268"
  },
  {
    name: "Landon Veterinary Specialists",
    fax_office: "64683501",
    postal_code: "599013",
    address: "41 Eng Kong Terrace",
    _id: 29,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64637228"
  },
  {
    name: "Light of Life Veterinary Clinic and Services",
    fax_office: "64487268",
    postal_code: "470703",
    address: "703 Bedok Reservoir Road #01-3508",
    _id: 30,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62433282"
  },
  {
    name: "Maranatha Veterinary Clinic Pte Ltd",
    fax_office: "na",
    postal_code: "100077",
    address: "77 Telok Blangah Drive #01-234",
    _id: 31,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62730100"
  },
  {
    name: "Monster Pet Vet",
    fax_office: "63279147",
    postal_code: "80006",
    address: "6 Everton Park #01-14/16",
    _id: 32,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "63279148"
  },
  {
    name: "Mount Pleasant Animal Clinic (North)",
    fax_office: "64874106",
    postal_code: "550151",
    address: "151 Serangoon North Avenue 2 #01-59",
    _id: 33,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62871190"
  },
  {
    name: "Mount Pleasant Animal Clinic East (2008) Pte Ltd",
    fax_office: "63487161",
    postal_code: "428855",
    address: "152 East Coast Road",
    _id: 34,
    type: "Clinic",
    tel_office_2: "63486746",
    tel_office_1: "64488153"
  },
  {
    name: "Mount Pleasant Animal Medical Centre (2004) Pte Ltd",
    fax_office: "67761678",
    postal_code: "120105",
    address: "105 Clementi Street 12 #01-18/20",
    _id: 35,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "67768858"
  },
  {
    name: "Mount Pleasant Animal Medical Centre (Bedok) Pte Ltd",
    fax_office: "64442787",
    postal_code: "460158",
    address: "158 Bedok South Avenue 3 #01-577",
    _id: 36,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64443561"
  },
  {
    name: "Mount Pleasant Animal Medical Centre (Farrer) Pte Ltd",
    fax_office: "62711073",
    postal_code: "260003",
    address: "3 Queen's Road #02-141",
    _id: 37,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62711132"
  },
  {
    name: "Mount Pleasant Referral Clinic Pte Ltd",
    fax_office: "62518797",
    postal_code: "297824",
    address: "232 Whitley Road",
    _id: 38,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62508333"
  },
  {
    name: "Mount Pleasant Veterinary Centre (2008) Pte Ltd",
    fax_office: "62569151",
    postal_code: "578187",
    address: "2 Jalan Gelenggang",
    _id: 39,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62517666"
  },
  {
    name: "Mount Pleasant Veterinary Centre (Changi) Pte Ltd",
    fax_office: "65465881",
    postal_code: "507667",
    address: "969A Upper Changi Road North",
    _id: 40,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "65460166"
  },
  {
    name: "My Family Vet Clinic and Surgery Pte Ltd",
    fax_office: "na",
    postal_code: "650265",
    address: "265 Bukit Batok East Avenue 4, #01-403",
    _id: 41,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "65660448"
  },
  {
    name: "Nam Sang Veterinary Clinic Pte Ltd",
    fax_office: "na",
    postal_code: "320002",
    address: "2 Balestier Road, #01-697 Balestier Shopping Center",
    _id: 42,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62548138"
  },
  {
    name: "Namly Animal Clinic Pte Ltd",
    fax_office: "64694844",
    postal_code: "267223",
    address: "74 Namly Place",
    _id: 43,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64694744"
  },
  {
    name: "P.A.W. (People Animal Wellness) Veterinary Centre Pte Ltd",
    fax_office: "62787576",
    postal_code: "90112",
    address: "112 Bukit Purmei Road #01-207",
    _id: 44,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62737573"
  },
  {
    name: "Passion Veterinary Clinic Pte Ltd",
    fax_office: "66358726",
    postal_code: "730111",
    address: "111 Woodlands Street 13 #01-86",
    _id: 45,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "66358725"
  },
  {
    name: "Pet Care Centre & Clinic Pte Ltd",
    fax_office: "64444735",
    postal_code: "416318",
    address: "4 Waringin Park Sin Chuan Garden",
    _id: 46,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64485835"
  },
  {
    name: "Pet Clinic Pte Ltd",
    fax_office: "62807717",
    postal_code: "550211",
    address: "211 Serangoon Avenue 4 #01-12",
    _id: 47,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62885565"
  },
  {
    name: "Pets Avenue Veterinary Clinic",
    fax_office: "64710154",
    postal_code: "260008",
    address: "8 Empress Road #01-11",
    _id: 48,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64710111"
  },
  {
    name: "Point Veterinary Surgery",
    fax_office: "64256773",
    postal_code: "640541",
    address: "541 Jurong West Avenue 1 #01-1044",
    _id: 49,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64256772"
  },
  {
    name: "Point Veterinary Surgery (Telok Blangah)",
    fax_office: "62742177",
    postal_code: "90038",
    address: "38 Telok Blangah Rise #01-339",
    _id: 50,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62741677"
  },
  {
    name: "Queen's Veterinary Surgery (Queen's Vets)",
    fax_office: "64750262",
    postal_code: "260003",
    address: "3 Queen's Road #02-155",
    _id: 51,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64750038"
  },
  {
    name: "Republic Veterinary Clinic Pte Ltd",
    fax_office: "na",
    postal_code: "648886",
    address: "1 Jurong West Central 2 #01-17A",
    _id: 52,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "67908748"
  },
  {
    name: "Singapore Veterinary Animal Clinic",
    fax_office: "63620602",
    postal_code: "730768",
    address: "768 Woodlands Avenue 6 #01-11",
    _id: 53,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "63650308"
  },
  {
    name: "Singapore Veterinary Animal Clinic (Jurong East)",
    fax_office: "68975180",
    postal_code: "600353",
    address: "353 Jurong East Street 31 #01-105",
    _id: 54,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "68970180"
  },
  {
    name: "Society for the Prevention of Cruelty to Animals (SPCA)",
    fax_office: "63824162",
    postal_code: "699012",
    address: "50 Sungei Tengah Road",
    _id: 55,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62875355"
  },
  {
    name: "Spring Veterinary Care",
    fax_office: "62800160",
    postal_code: "530123",
    address: "123 Hougang Avenue 1 #01-1412",
    _id: 56,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62863313"
  },
  {
    name: "Stars Veterinary Clinic Pte Ltd",
    fax_office: "na",
    postal_code: "530211",
    address: "211 Hougang Street 21 #01-301",
    _id: 57,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64524576"
  },
  {
    name: "The Animal Clinic Pte Ltd",
    fax_office: "67735003",
    postal_code: "120109",
    address: "109 Clementi Street 11 #01-19",
    _id: 58,
    type: "Clinic",
    tel_office_2: "67746626",
    tel_office_1: "67744464"
  },
  {
    name: "The Animal Clinic Pte Ltd",
    fax_office: "67746950",
    postal_code: "120109",
    address: "109 Clementi Street 11 #01-31",
    _id: 59,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "67770273"
  },
  {
    name: "The Animal Clinic Pte Ltd (Katong)",
    fax_office: "64401812",
    postal_code: "425500",
    address: "55 Lorong L, Telok Kurau #01-63",
    _id: 60,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64404767"
  },
  {
    name: "The Animal Doctors Pte Ltd",
    fax_office: "64517531",
    postal_code: "560108",
    address: "108 Ang Mo Kio Avenue 4 #01-94/96",
    _id: 61,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64514531"
  },
  {
    name: "The Cat Clinic",
    fax_office: "na",
    postal_code: "120109",
    address: "109 Clementi Street 11 #01-33",
    _id: 62,
    type: "Clinic",
    tel_office_2: "68735550",
    tel_office_1: "68730014"
  },
  {
    name: "The Joyous Vet Pte Ltd",
    fax_office: "67697353",
    postal_code: "680475",
    address: "475 Choa Chu Kang Ave 3 #01-30A Sunshine Place",
    _id: 63,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "67690304"
  },
  {
    name: "The Joyous Vet Pte Ltd",
    fax_office: "62674139",
    postal_code: "618640",
    address: "1 Yuan Ching Road #03-03",
    _id: 64,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62674137"
  },
  {
    name: "The Pet Doctors (Tiong Bahru) Veterinary Clinic Pte Ltd",
    fax_office: "62533645",
    postal_code: "161011",
    address: "11A Boon Tiong Road #02-07",
    _id: 65,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62533023"
  },
  {
    name: "The Pet Doctors Veterinary Clinic Pte Ltd",
    fax_office: "na",
    postal_code: "597627",
    address: "3 Pandan Valley #01-311 Pandan Valley Condominium",
    _id: 66,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64387779"
  },
  {
    name: "The Veterinary Clinic @ Tampines Pte Ltd",
    fax_office: "67832648",
    postal_code: "520476",
    address: "476 Tampines Street 44 #01-201",
    _id: 67,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "67842048"
  },
  {
    name: "The Veterinary Clinic Pte Ltd (Holland Village)",
    fax_office: "64686257",
    postal_code: "277742",
    address: "31A & 33A Lorong Liput",
    _id: 68,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64686312"
  },
  {
    name: "The Visiting Vets Clinic",
    fax_office: "na",
    postal_code: "257720",
    address: "8 Taman Serasi #01-09 Botanic Garden",
    _id: 69,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "64753405"
  },
  {
    name: "Toa Payoh Vets (Toa Payoh Veterinary Surgery)",
    fax_office: "62560501",
    postal_code: "319074",
    address: "1002 Toa Payoh Lorong 8 #01-1477",
    _id: 70,
    type: "Clinic",
    tel_office_2: "na",
    tel_office_1: "62543326"
  }
];

export default vetLocations;
