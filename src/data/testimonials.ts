export type Testimonial = { name: string; city: string; quote: string; rating: number };

// Sample reviews for the demo site.
export const testimonials: Testimonial[] = [
  {
    name: "Ritika S.",
    city: "Noida",
    quote:
      "They talked me out of the first plot I liked, and explained why. The one we finally bought had far cleaner papers.",
    rating: 5,
  },
  {
    name: "Mahesh K.",
    city: "Ghaziabad",
    quote: "Patient with every question about the YEIDA scheme. I always knew what the next step was and what it would cost.",
    rating: 5,
  },
  {
    name: "Anand & Priya",
    city: "Bengaluru",
    quote: "We live far away, so the video site visits and document checks meant a lot. It felt like family was handling it.",
    rating: 5,
  },
  {
    name: "Suresh G.",
    city: "Meerut",
    quote: "Helped us with our UPSIDA industrial allotment from application to lease deed. Calm, clear and on time.",
    rating: 4,
  },
];
