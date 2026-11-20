export const site = {
  name: "Aarohan Land Advisors",
  shortName: "Aarohan",
  tagline: "Your advisor, never your seller.",
  description:
    "Independent advisory for buying residential, commercial and industrial plots on the Yamuna Expressway, Jewar Airport belt and UP development-authority schemes.",
  address: "Office 4B, Sector 18, Noida, Uttar Pradesh 201301 (demo address)",
  phone: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  whatsappNumber: "919000000000",
  whatsappMessage: "Hi Aarohan, I would like some advice on buying a plot.",
  email: "hello@aarohan-demo.in",
  rera: "UPRERAAGT00000 (demo)",
  hours: "Mon–Sat, 10:00 am – 7:00 pm",
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=77.3160%2C28.5640%2C77.3340%2C28.5760&layer=mapnik&marker=28.5700%2C77.3250",
};

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Plots", href: "/projects/" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const authorities = ["YEIDA", "UPSIDA", "Noida Authority", "Greater Noida Authority"];

export const stats = [
  { value: 500, suffix: "+", label: "Investors advised" },
  { value: 200, suffix: "+", label: "Plots facilitated" },
  { value: 23, suffix: "", label: "Years of experience" },
  { value: 100, suffix: "%", label: "Documentation support" },
];

export const categories = [
  {
    type: "Residential",
    image: "/images/categories/residential.jpg",
    text: "Authority and approved township plots to build the home you have in mind.",
  },
  {
    type: "Commercial",
    image: "/images/categories/commercial.jpg",
    text: "Shop, office and mixed-use plots along busy roads and planned sectors.",
  },
  {
    type: "Industrial",
    image: "/images/categories/industrial.jpg",
    text: "UPSIDA and YEIDA industrial plots for factories, warehouses and units.",
  },
];

export const whyUs = [
  {
    title: "Right plot & location",
    text: "We shortlist plots that suit your budget, timeline and purpose, not the ones we need to sell.",
  },
  {
    title: "Clear paperwork",
    text: "Title, approvals, allotment letters and lease deeds checked line by line before you pay.",
  },
  {
    title: "Honest growth outlook",
    text: "We talk plainly about infrastructure plans, timelines and risks, including the slow parts.",
  },
  {
    title: "Support after purchase",
    text: "Registry, mutation, possession and map approvals: we stay with you after the deal is done.",
  },
];

export const steps = [
  { title: "Consultation", text: "A relaxed call or office meeting to understand what you need and what you can spend." },
  { title: "Site visit", text: "We visit shortlisted plots with you and walk through the area, roads and surroundings." },
  { title: "Paperwork & allotment", text: "We check documents, guide scheme applications and handle the allotment steps with you." },
  { title: "After-purchase support", text: "Registry, possession and building approvals, with someone you know on the phone." },
];

export const locations = ["Yamuna Expressway", "Greater Noida West", "Vrindavan", "Meerut", "Unnao"];

export const plotTypes = ["Residential", "Commercial", "Industrial"];

// Budget is matched against the cost of the smallest plot (min size × rate).
export const budgets = [
  { value: "under-50", label: "Under ₹50 lakh", min: 0, max: 5_000_000 },
  { value: "50-100", label: "₹50 lakh – ₹1 crore", min: 5_000_000, max: 10_000_000 },
  { value: "100-300", label: "₹1 – 3 crore", min: 10_000_000, max: 30_000_000 },
  { value: "above-300", label: "Above ₹3 crore", min: 30_000_000, max: Infinity },
];
