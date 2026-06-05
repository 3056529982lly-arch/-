export type ModuleDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type TrainingModule = {
  title: string;
  description: string;
  difficulty: ModuleDifficulty;
  estimatedTime: string;
  keySkills: string[];
  progress: number;
};

export const modules: TrainingModule[] = [
  {
    title: "Platform Basics",
    description: "Navigate Seller Central, understand account roles, and locate core operational tools.",
    difficulty: "Beginner",
    estimatedTime: "4 hours",
    keySkills: ["Seller Central", "Account health", "Catalog basics"],
    progress: 92
  },
  {
    title: "Product Research",
    description: "Assess category demand, compare competitors, and document product opportunities.",
    difficulty: "Intermediate",
    estimatedTime: "6 hours",
    keySkills: ["Market scanning", "Competitor review", "Demand signals"],
    progress: 66
  },
  {
    title: "Listing Copywriting",
    description: "Create compliant titles, bullet points, descriptions, and keyword-rich listing copy.",
    difficulty: "Intermediate",
    estimatedTime: "5 hours",
    keySkills: ["Title writing", "Bullet structure", "Search terms"],
    progress: 58
  },
  {
    title: "Image & A+ Content",
    description: "Plan image sequences and A+ modules that explain product value clearly.",
    difficulty: "Intermediate",
    estimatedTime: "5 hours",
    keySkills: ["Main image rules", "Infographics", "A+ planning"],
    progress: 42
  },
  {
    title: "Advertising",
    description: "Learn sponsored ads structure, keyword testing, budget control, and performance checks.",
    difficulty: "Advanced",
    estimatedTime: "8 hours",
    keySkills: ["Campaign setup", "Keyword testing", "ACOS review"],
    progress: 35
  },
  {
    title: "Promotion",
    description: "Set coupons, monitor promotional pricing, and coordinate campaigns with listing readiness.",
    difficulty: "Intermediate",
    estimatedTime: "4 hours",
    keySkills: ["Coupons", "Deals", "Pricing checks"],
    progress: 48
  },
  {
    title: "Logistics",
    description: "Understand FBA shipment flow, inventory status, delivery issues, and stock planning.",
    difficulty: "Intermediate",
    estimatedTime: "6 hours",
    keySkills: ["FBA workflow", "Inventory status", "Shipment tracking"],
    progress: 31
  },
  {
    title: "After-sales",
    description: "Handle refunds, buyer messages, reviews, and issue escalation with clear documentation.",
    difficulty: "Beginner",
    estimatedTime: "3 hours",
    keySkills: ["Refund handling", "Case notes", "Buyer support"],
    progress: 54
  },
  {
    title: "Data Analysis",
    description: "Review weekly sales, traffic, conversion, advertising, and inventory health indicators.",
    difficulty: "Advanced",
    estimatedTime: "7 hours",
    keySkills: ["Business reports", "Conversion", "Trend review"],
    progress: 27
  }
];
