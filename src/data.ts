type Quiz = {
  correctChoice: string;
  wrongChoices: string[];
  prompt: string;
};

export const DATA = new Map<string, Quiz>([
  [
    "2jhEe",
    {
      correctChoice: "Deaths in armed conflicts in 2022",
      wrongChoices: [
        "Sunflower seed production in kilotons in 2010",
        "Military weapon aid received in USD (millions) in 2023",
        "Iron ore export in USD (millions) in 2022",
      ],
      prompt: "Peace is invaluable.",
    },
  ],
]);
