export type PlotType = "Residential" | "Commercial" | "Industrial";

export type Project = {
  slug: string;
  title: string;
  type: PlotType;
  authority: string;
  location: string;
  area: string;
  sizes: { min: number; max: number }; // sq m
  ratePerSqm: number; // demo ₹ per sq m
  status: string;
  summary: string;
  description: string;
  highlights: string[];
  landmarks: string[];
  connectivity: string[];
  images: string[];
  map: { lat: number; lng: number };
};

export const projects: Project[] = [
  {
    slug: "jewar-airport-residential-plots",
    title: "Sector 22D Residential Plots",
    type: "Residential",
    authority: "YEIDA",
    location: "Yamuna Expressway",
    area: "Sector 22D, near Jewar Airport",
    sizes: { min: 120, max: 300 },
    ratePerSqm: 34_500,
    status: "Scheme plots available",
    summary: "Planned residential plots a short drive from Noida International Airport.",
    description:
      "A YEIDA residential sector with wide internal roads, green belts and space set aside for schools and markets. It suits buyers who want to build a home over the next few years and are comfortable with an area that is still growing around the airport.",
    highlights: ["Authority-allotted plots", "Wide internal roads", "Parks and green belts planned", "Close to Film City site"],
    landmarks: ["Noida International Airport (Jewar)", "Yamuna Expressway", "Proposed Film City"],
    connectivity: [
      "About 15 min to Noida International Airport",
      "2 km from Yamuna Expressway",
      "Around 45 min to Pari Chowk, Greater Noida",
      "Proposed metro link along the expressway",
    ],
    images: ["/images/projects/residential-1.jpg", "/images/projects/township-1.jpg", "/images/projects/residential-2.jpg"],
    map: { lat: 28.2, lng: 77.62 },
  },
  {
    slug: "greater-noida-west-residential",
    title: "Greater Noida West Township Plots",
    type: "Residential",
    authority: "Greater Noida Authority",
    location: "Greater Noida West",
    area: "Near Gaur Chowk, Greater Noida West",
    sizes: { min: 100, max: 250 },
    ratePerSqm: 92_000,
    status: "Resale plots",
    summary: "A settled neighbourhood with schools, markets and metro work nearby.",
    description:
      "Resale residential plots in a well-lived-in part of Greater Noida West. Daily needs are already in place, so this is a good fit for families who want to build and move in sooner rather than wait for an area to develop.",
    highlights: ["Settled neighbourhood", "Schools and hospitals nearby", "Clear resale title checks", "Ready to build"],
    landmarks: ["Gaur City", "Gaur Chowk", "Noida Extension metro (proposed)"],
    connectivity: [
      "10 min to Noida Sector 62",
      "Close to NH-24 / Delhi–Meerut Expressway",
      "25 min to Noida City Centre",
      "Proposed Aqua Line extension",
    ],
    images: ["/images/projects/residential-2.jpg", "/images/projects/residential-1.jpg", "/images/projects/township-2.jpg"],
    map: { lat: 28.6045, lng: 77.4318 },
  },
  {
    slug: "vrindavan-residential-plots",
    title: "Vrindavan Township Plots",
    type: "Residential",
    authority: "Mathura-Vrindavan Development Authority",
    location: "Vrindavan",
    area: "Chhatikara Road, Vrindavan",
    sizes: { min: 90, max: 400 },
    ratePerSqm: 28_000,
    status: "Approved township",
    summary: "Quiet plots close to the temples, ideal for a second home.",
    description:
      "Plots in an approved township on the road between the expressway and Vrindavan. Many of our clients here are planning a peaceful second home or a place for their parents, with easy access from Delhi NCR.",
    highlights: ["Approved layout", "Gated community", "Close to temples", "Easy expressway access"],
    landmarks: ["Prem Mandir", "ISKCON Vrindavan", "Yamuna Expressway Mathura exit"],
    connectivity: [
      "10 min to Prem Mandir",
      "15 min to Yamuna Expressway",
      "About 2.5 hrs to Noida",
      "20 min to Mathura Junction railway station",
    ],
    images: ["/images/projects/township-1.jpg", "/images/projects/township-2.jpg", "/images/projects/residential-1.jpg"],
    map: { lat: 27.5706, lng: 77.6608 },
  },
  {
    slug: "yamuna-expressway-commercial",
    title: "Yamuna Expressway Commercial Plots",
    type: "Commercial",
    authority: "YEIDA",
    location: "Yamuna Expressway",
    area: "Sector 22A, Yamuna Expressway",
    sizes: { min: 200, max: 1500 },
    ratePerSqm: 68_000,
    status: "Scheme plots available",
    summary: "Shop and office plots in a growing sector beside residential pockets.",
    description:
      "Commercial plots planned to serve the residential sectors coming up around the airport. Suitable for retail, offices or a small hotel. We help you read the permitted use, FAR and building rules before you commit.",
    highlights: ["Mixed use permitted", "Main-road frontage options", "Residential catchment around", "Clear FAR rules"],
    landmarks: ["Noida International Airport (Jewar)", "Gautam Buddha University", "Buddh International Circuit"],
    connectivity: [
      "Directly off Yamuna Expressway",
      "20 min to Noida International Airport",
      "10 min to Buddh International Circuit",
      "40 min to Pari Chowk",
    ],
    images: ["/images/projects/commercial-1.jpg", "/images/projects/commercial-2.jpg", "/images/projects/township-1.jpg"],
    map: { lat: 28.35, lng: 77.55 },
  },
  {
    slug: "meerut-industrial-plots",
    title: "Meerut Industrial Area Plots",
    type: "Industrial",
    authority: "UPSIDA",
    location: "Meerut",
    area: "Partapur Industrial Area, Meerut",
    sizes: { min: 450, max: 4000 },
    ratePerSqm: 14_500,
    status: "Allotment open",
    summary: "UPSIDA industrial plots near the Delhi–Meerut Expressway.",
    description:
      "Industrial plots in an established UPSIDA area with power, water and road access already in place. A practical choice for small and medium manufacturers who want good links to Delhi.",
    highlights: ["Power and water available", "Established industrial area", "Lease from UPSIDA", "Good labour availability"],
    landmarks: ["Delhi–Meerut Expressway", "Namo Bharat (RRTS) Meerut", "Partapur Airstrip"],
    connectivity: [
      "5 min to Delhi–Meerut Expressway",
      "About 1 hr to Delhi",
      "Close to Namo Bharat (RRTS) stations",
      "Near NH-58",
    ],
    images: ["/images/projects/industrial-1.jpg", "/images/projects/industrial-2.jpg", "/images/projects/commercial-2.jpg"],
    map: { lat: 28.9396, lng: 77.6631 },
  },
  {
    slug: "unnao-industrial-plots",
    title: "Unnao Industrial Plots",
    type: "Industrial",
    authority: "UPSIDA",
    location: "Unnao",
    area: "Trans Ganga City, Unnao",
    sizes: { min: 1000, max: 10000 },
    ratePerSqm: 6_800,
    status: "Allotment open",
    summary: "Large-format industrial plots between Lucknow and Kanpur.",
    description:
      "Larger industrial plots in a planned UPSIDA area across the Ganga from Kanpur. Suits warehousing, food processing and manufacturing units that need space and access to two big cities.",
    highlights: ["Large plot sizes", "Planned industrial township", "Near Lucknow–Kanpur corridor", "UPSIDA lease"],
    landmarks: ["Kanpur city", "Lucknow–Kanpur Expressway", "Ganga Expressway (under construction)"],
    connectivity: [
      "20 min to Kanpur",
      "About 1.5 hrs to Lucknow airport",
      "Near Lucknow–Kanpur Expressway",
      "Close to Unnao railway junction",
    ],
    images: ["/images/projects/industrial-2.jpg", "/images/projects/industrial-1.jpg", "/images/projects/township-2.jpg"],
    map: { lat: 26.5, lng: 80.38 },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const mapEmbedFor = ({ lat, lng }: { lat: number; lng: number }, d = 0.03) =>
  `https://www.openstreetmap.org/export/embed.html?bbox=${lng - d}%2C${lat - d}%2C${lng + d}%2C${lat + d}&layer=mapnik&marker=${lat}%2C${lng}`;
