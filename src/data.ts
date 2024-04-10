export type Quiz = {
  correctChoice: string;
  wrongChoices: string[];
  description: string;
  source: string;
};

export const DATA = new Map<string, Quiz>([
  [
    "2jhEe",
    {
      correctChoice: "Deaths in armed conflicts in 2022",
      wrongChoices: [
        "Sunflower seed production in kilotons in 2021",
        "Military weapon aid received in USD (millions) in 2023",
        "Iron ore export in USD (millions) in 2022",
      ],
      description:
        "In 2022, 102,860 people died in Ethiopia due to armed conflicts.",
      source: "https://ourworldindata.org/explorers/countries-in-conflict-data",
    },
  ],
  [
    "8Pwpx",
    {
      correctChoice: "Child mortality rate in 2022",
      wrongChoices: [
        "Birth rate in 2022",
        "GDP growth in 2023",
        "Illiteracy rate in 2022",
      ],
      description:
        "In 2022, 11.2% of Somalian children die before the age of 5.",
      source: "https://ourworldindata.org/explorers/countries-in-conflict-data",
    },
  ],
]);
