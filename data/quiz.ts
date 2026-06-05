export type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  area: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Which report is most useful for reviewing sessions and conversion rate?",
    options: ["Business reports", "Coupon budget report", "Case log", "Brand story editor"],
    answer: "Business reports",
    area: "Data Analysis"
  },
  {
    question: "What should a listing title balance first?",
    options: ["Keywords and readability", "Emoji use", "All competitor brand names", "Unverified claims"],
    answer: "Keywords and readability",
    area: "Listing Optimization"
  },
  {
    question: "Why are keyword tests separated by match type?",
    options: [
      "To compare search behavior and control budget",
      "To hide campaigns from reports",
      "To avoid adding negative keywords",
      "To remove the need for bid checks"
    ],
    answer: "To compare search behavior and control budget",
    area: "Advertising"
  },
  {
    question: "What should be checked before launching a coupon?",
    options: ["Eligible SKU, discount, budget, and dates", "Only the product color", "Buyer messages", "A+ upload speed"],
    answer: "Eligible SKU, discount, budget, and dates",
    area: "Promotion"
  },
  {
    question: "What belongs in a weekly operations review?",
    options: [
      "Sales, traffic, conversion, ads, inventory, and next actions",
      "Only total revenue",
      "Only competitor screenshots",
      "Only refund messages"
    ],
    answer: "Sales, traffic, conversion, ads, inventory, and next actions",
    area: "Weekly Review"
  }
];
