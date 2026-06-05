export type SopItem = {
  title: string;
  description: string;
  category: string;
  owner: string;
  steps: number;
  updated: string;
};

export const sopItems: SopItem[] = [
  {
    title: "Amazon title writing",
    description: "Rules for creating readable, keyword-aware titles that follow category requirements.",
    category: "Listing",
    owner: "Content",
    steps: 7,
    updated: "Jun 2026"
  },
  {
    title: "Bullet point writing",
    description: "Structure benefit-led bullet points with features, proof, use cases, and compliance checks.",
    category: "Listing",
    owner: "Content",
    steps: 6,
    updated: "Jun 2026"
  },
  {
    title: "Main image optimization",
    description: "Checklist for image clarity, product scale, white background rules, and review feedback.",
    category: "Creative",
    owner: "Design",
    steps: 8,
    updated: "May 2026"
  },
  {
    title: "A+ content planning",
    description: "Plan modules, comparison charts, brand story blocks, and design requirements.",
    category: "Creative",
    owner: "Design",
    steps: 9,
    updated: "May 2026"
  },
  {
    title: "Competitor analysis",
    description: "Capture competitor pricing, reviews, images, copy, feature gaps, and ranking indicators.",
    category: "Research",
    owner: "Operations",
    steps: 10,
    updated: "Jun 2026"
  },
  {
    title: "Advertising keyword testing",
    description: "Set test groups, evaluate search terms, control budget, and record optimization decisions.",
    category: "Advertising",
    owner: "PPC",
    steps: 8,
    updated: "Jun 2026"
  },
  {
    title: "Coupon setup",
    description: "Prepare coupon type, discount range, eligible SKUs, budget cap, and launch verification.",
    category: "Promotion",
    owner: "Operations",
    steps: 6,
    updated: "May 2026"
  },
  {
    title: "Refund handling",
    description: "Review refund reason, confirm order details, document case notes, and escalate when needed.",
    category: "After-sales",
    owner: "Support",
    steps: 5,
    updated: "Jun 2026"
  },
  {
    title: "Weekly data review",
    description: "Review sales, sessions, conversion, advertising, inventory, and next-week action owners.",
    category: "Analytics",
    owner: "Operations",
    steps: 9,
    updated: "Jun 2026"
  }
];
