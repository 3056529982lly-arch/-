export type TaskPriority = "High" | "Medium" | "Low";
export type TaskStatus = "Not Started" | "In Progress" | "Done";

export type PracticeTask = {
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  estimatedTime: string;
};

export type WeeklyTasks = {
  week: string;
  focus: string;
  tasks: PracticeTask[];
};

export const weeklyTasks: WeeklyTasks[] = [
  {
    week: "Week 1",
    focus: "Platform foundation and basic listing review",
    tasks: [
      {
        title: "Map Seller Central navigation",
        description: "Identify the daily pages used for catalog, orders, inventory, advertising, and reports.",
        priority: "High",
        status: "Done",
        estimatedTime: "45 min"
      },
      {
        title: "Account health check",
        description: "Review account health sections and summarize which metrics need daily attention.",
        priority: "High",
        status: "In Progress",
        estimatedTime: "40 min"
      },
      {
        title: "Listing audit worksheet",
        description: "Audit one product page for title, images, bullets, A+ content, and reviews.",
        priority: "Medium",
        status: "Not Started",
        estimatedTime: "60 min"
      }
    ]
  },
  {
    week: "Week 2",
    focus: "Product research and listing optimization",
    tasks: [
      {
        title: "Competitor comparison",
        description: "Compare three competitor listings and capture price, content, rating, and feature gaps.",
        priority: "High",
        status: "In Progress",
        estimatedTime: "90 min"
      },
      {
        title: "Rewrite product title",
        description: "Create two compliant title options for a sample product using keyword priorities.",
        priority: "High",
        status: "Not Started",
        estimatedTime: "45 min"
      },
      {
        title: "Draft bullet points",
        description: "Write five benefit-led bullets that balance customer value, features, and search terms.",
        priority: "Medium",
        status: "Not Started",
        estimatedTime: "60 min"
      }
    ]
  },
  {
    week: "Week 3",
    focus: "Creative content, promotions, and advertising basics",
    tasks: [
      {
        title: "Image sequence brief",
        description: "Plan seven image slots covering main image, benefits, size, usage, and comparison.",
        priority: "High",
        status: "Not Started",
        estimatedTime: "75 min"
      },
      {
        title: "Keyword test plan",
        description: "Group sample keywords by match type and define what success would look like after one week.",
        priority: "High",
        status: "Not Started",
        estimatedTime: "60 min"
      },
      {
        title: "Coupon readiness check",
        description: "Confirm coupon settings, eligible SKU, margin impact, and launch date checklist.",
        priority: "Medium",
        status: "Not Started",
        estimatedTime: "35 min"
      }
    ]
  },
  {
    week: "Week 4",
    focus: "Logistics, after-sales, analytics, and weekly review",
    tasks: [
      {
        title: "Inventory status review",
        description: "Review sample inventory statuses and identify risks that require action.",
        priority: "High",
        status: "Not Started",
        estimatedTime: "50 min"
      },
      {
        title: "Refund case note",
        description: "Write a clear support note for a sample refund case with action and escalation logic.",
        priority: "Medium",
        status: "Not Started",
        estimatedTime: "40 min"
      },
      {
        title: "Weekly data summary",
        description: "Prepare a short summary of sales, sessions, conversion, ad spend, and next actions.",
        priority: "High",
        status: "Not Started",
        estimatedTime: "90 min"
      }
    ]
  }
];
