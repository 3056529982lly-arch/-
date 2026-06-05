export type RoadmapStage = {
  stage: number;
  title: string;
  description: string;
  outcome: string;
  status: "Completed" | "In Progress" | "Upcoming";
};

export const roadmap: RoadmapStage[] = [
  {
    stage: 1,
    title: "Platform Basics",
    description: "Learn Seller Central layout, navigation, account health, catalog tools, and team workflows.",
    outcome: "Can locate daily operating tools without assistance.",
    status: "Completed"
  },
  {
    stage: 2,
    title: "Product Research",
    description: "Analyze products, competitors, reviews, ranking signals, and category opportunities.",
    outcome: "Can prepare a simple product research brief.",
    status: "In Progress"
  },
  {
    stage: 3,
    title: "Listing Optimization",
    description: "Draft titles, bullets, descriptions, search terms, and listing improvement notes.",
    outcome: "Can audit and improve a product detail page.",
    status: "Upcoming"
  },
  {
    stage: 4,
    title: "Product Images & A+ Content",
    description: "Plan main images, lifestyle images, comparison graphics, and A+ module structure.",
    outcome: "Can create an image and A+ content brief.",
    status: "Upcoming"
  },
  {
    stage: 5,
    title: "Advertising Basics",
    description: "Understand sponsored ads, keyword match types, budgets, bids, and performance metrics.",
    outcome: "Can review a basic campaign report.",
    status: "Upcoming"
  },
  {
    stage: 6,
    title: "Promotion & Pricing",
    description: "Coordinate coupons, deals, price checks, discount timing, and promotional readiness.",
    outcome: "Can prepare a promotion checklist.",
    status: "Upcoming"
  },
  {
    stage: 7,
    title: "Orders, Logistics & After-sales",
    description: "Track order issues, FBA inventory, buyer messages, refund requests, and support cases.",
    outcome: "Can document and resolve standard operational issues.",
    status: "Upcoming"
  },
  {
    stage: 8,
    title: "Data Analysis",
    description: "Read business reports, traffic trends, conversion shifts, advertising results, and inventory data.",
    outcome: "Can summarize weekly performance drivers.",
    status: "Upcoming"
  },
  {
    stage: 9,
    title: "Weekly Review",
    description: "Turn learning notes and operating data into next-week priorities and action items.",
    outcome: "Can lead a structured weekly review.",
    status: "Upcoming"
  }
];
