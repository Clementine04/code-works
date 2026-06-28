// Showcase project data — real Code Works systems. Screenshots live in
// /public/projects and are rendered inside device frames.

export const categories = [
  "All",
  "Websites",
  "Business Systems",
  "Restaurant",
  "Hotel",
  "E-commerce",
];

export const projects = [
  {
    id: "bean-city",
    title: "Bean City",
    industry: "Coffee Shop",
    categories: ["Websites", "E-commerce", "Restaurant"],
    device: "desktop",
    accent: ["#a16207", "#f59e0b"],
    image: "/projects/bean-city.png",
    short:
      "An online ordering website with a full digital menu for a busy coffee shop.",
    outcome: "Online ordering",
    tags: ["React", "Tailwind", "Node", "Stripe"],
    overview:
      "Bean City needed customers to browse the menu and order online without friction. We built a fast, appetite-driven ordering website with a clean digital menu and a smooth checkout flow.",
    goals: [
      "Let customers order online with ease",
      "Showcase the full menu beautifully",
      "Reduce phone-order workload for staff",
    ],
    features: [
      "Online ordering & cart",
      "Categorised digital menu",
      "Mobile-first checkout",
      "Easy menu management",
    ],
    images: ["/projects/bean-city.png"],
  },
  {
    id: "curry-empire",
    title: "Curry Empire",
    industry: "Restaurant",
    categories: ["Websites", "Restaurant", "E-commerce"],
    device: "desktop",
    accent: ["#ef4444", "#f59e0b"],
    image: "/projects/curry-empire.jpg",
    short:
      "A full-featured restaurant website: view the menu, book a table, and order takeout.",
    outcome: "Bookings + takeout",
    tags: ["React", "Vite", "Node", "Postgres"],
    overview:
      "Curry Empire wanted one website that does it all. We delivered a rich restaurant platform where guests can explore the menu, reserve a table, and place takeout orders — all in one place.",
    goals: [
      "Enable online table reservations",
      "Support takeout ordering",
      "Present the menu in an inviting way",
    ],
    features: [
      "Table booking system",
      "Takeout ordering",
      "Dynamic menu with categories",
      "Reservation & order confirmations",
    ],
    images: ["/projects/curry-empire.jpg"],
  },
  {
    id: "dunes-cafe",
    title: "Dunes Cafe",
    industry: "Cafe",
    categories: ["Websites", "Restaurant", "E-commerce"],
    device: "desktop",
    accent: ["#0ea5e9", "#22d3ee"],
    image: "/projects/dunes-cafe.jpg",
    short:
      "A landing page, menu, and ordering website that captures the cafe's vibe.",
    outcome: "Brand + ordering",
    tags: ["React", "Tailwind", "Framer Motion"],
    overview:
      "Dunes Cafe needed an online presence that felt as warm as the cafe itself. We built a polished landing page, a beautiful menu, and an ordering experience that turns visitors into customers.",
    goals: [
      "Establish a strong online brand",
      "Showcase the menu attractively",
      "Allow customers to order online",
    ],
    features: [
      "Branded landing page",
      "Visual menu",
      "Online ordering",
      "Responsive across devices",
    ],
    images: ["/projects/dunes-cafe.jpg"],
  },
  {
    id: "hotel-andrea",
    title: "Hotel Andrea",
    industry: "Hotel",
    categories: ["Business Systems", "Hotel"],
    device: "desktop",
    accent: ["#3b6bff", "#8b5cf6"],
    image: "/projects/hotel-andrea.jpg",
    short:
      "A complete hotel management and booking system for rooms and guest operations.",
    outcome: "Full management",
    tags: ["React", "TypeScript", "Express", "Postgres"],
    overview:
      "Hotel Andrea needed to run reservations and operations from one place. We built a management and booking system that handles room availability, guest bookings, and day-to-day hotel operations.",
    goals: [
      "Centralise room booking & availability",
      "Streamline guest management",
      "Give staff a single operations dashboard",
    ],
    features: [
      "Room booking & availability",
      "Guest & reservation management",
      "Operations dashboard",
      "Role-based staff access",
    ],
    images: ["/projects/hotel-andrea.jpg"],
  },
  {
    id: "lendflow",
    title: "Lendflow",
    industry: "Finance",
    categories: ["Business Systems", "Websites"],
    device: "desktop",
    accent: ["#10b981", "#22d3ee"],
    image: "/projects/lendflow.png",
    short:
      "A loan tracking system to manage borrowers, schedules, and repayments.",
    outcome: "Loan tracking",
    tags: ["React", "Node", "Postgres", "Tailwind"],
    overview:
      "Lendflow keeps lending organised. We built a loan tracker that manages borrowers, payment schedules, and balances — giving a clear, real-time view of every loan.",
    goals: [
      "Track loans and repayments accurately",
      "Manage borrowers in one place",
      "Surface balances and due dates clearly",
    ],
    features: [
      "Borrower management",
      "Repayment schedules & tracking",
      "Real-time balance overview",
      "Clean reporting dashboard",
    ],
    images: ["/projects/lendflow.png"],
  },
];

export const stats = [
  { value: 5, suffix: "+", label: "Projects shipped" },
  { value: 100, suffix: "%", label: "Client satisfaction" },
  { value: 5, suffix: "", label: "Industries served" },
  { value: 3, suffix: "yrs", label: "Building software" },
];
