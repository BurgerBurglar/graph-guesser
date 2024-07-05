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
      correctChoice: "Deaths in armed conflicts",
      wrongChoices: [
        "Sunflower seed production in kilotons",
        "Military weapon aid received in USD (millions)",
        "Iron ore export in USD (millions)",
      ],
      description:
        "In 2022, 102,860 people died in Ethiopia due to armed conflicts.",
      source: "https://ourworldindata.org/explorers/countries-in-conflict-data",
    },
  ],
  [
    "bvIiZ",
    {
      correctChoice: "Child mortality rate",
      wrongChoices: ["Birth rate", "GDP growth", "Illiteracy rate"],
      description:
        "In 2022, 11.2% of Somalian children die before the age of 5.",
      source:
        "https://ourworldindata.org/grapher/child-mortality-vs-electoral-democracy",
    },
  ],
  [
    "TcmXT",
    {
      correctChoice: "Deaths per 100,000 people from unsafe water sources",
      wrongChoices: [
        "Antibiotic use in livestock in ton",
        "Number of farmers per 1,000 people",
        "Government spending on infrastructure in USD",
      ],
      description:
        "In India, death rate from unsafe water in 2022 is 24% of what it was in 1990.",
      source: "https://ourworldindata.org/grapher/death-rates-unsafe-water",
    },
  ],
  [
    "dkdh4",
    {
      correctChoice: "Number of landline phone subscriptions",
      wrongChoices: [
        "Number of wireless pagers",
        "Number of people who go to the cinema",
        "Number of livestocks",
      ],
      description:
        "In the US, the number of landline phone subscriptions peaked in 2000, while in India it peaked in 2005.",
      source: "https://ourworldindata.org/grapher/landline-phone-subscriptions",
    },
  ],
  [
    "QGepD",
    {
      correctChoice:
        "Number of inbound international tourists who stay overnight",
      wrongChoices: [
        "Number of people working for retailers",
        "Number of people who go to the cinema",
        "Number of cars manufactured",
      ],
      description:
        "In 2020, Mexico received more international tourists than China and the US, for the first time since 1995.",
      source: "https://ourworldindata.org/grapher/international-tourist-trips",
    },
  ],
  [
    "yD3Lo",
    {
      correctChoice: "Chinese Civil War",
      wrongChoices: [
        "American Civil War",
        "Crimean War",
        "Franco-Prussian War",
      ],
      description:
        "After the most deadly civil war since 1800, the government of the Republic of China fled to Taiwan.",
      source:
        "https://ourworldindata.org/grapher/deaths-in-wars-by-war-1800-2011-bar-chart",
    },
  ],
  [
    "uXqke",
    {
      correctChoice: "Government revenues as a share of GDP",
      wrongChoices: [
        "Percentage of people with free healthcare",
        "Percentage of public schools with free meals",
        "Percentage of people who believe in evolution theory",
      ],
      description:
        "Nauru and Kiribati are the only two countries with a higher goverment revenue than GDP in 2020.",
      source:
        "https://ourworldindata.org/grapher/government-revenues-as-a-share-of-gdp-world-bank",
    },
  ],
  [
    "IV40s",
    {
      correctChoice: "Neuropsychiatric conditions and drug use disorders",
      wrongChoices: [
        "Respiratory diseases",
        "Digestive diseases",
        "Infectious and parasitic diseases",
      ],
      description:
        "In the US, in 2021, 118% more people died from neuropsychiatric conditions and drug use disorders compared to 1950.",
      source: "https://ourworldindata.org/grapher/death-rate-by-cause-who-mdb",
    },
  ],
  [
    "aluE4",
    {
      correctChoice: "Chad",
      wrongChoices: ["Bhutan", "Kenya", "North Korea"],
      description:
        "72.7% of Chadians aged 15+ cannot read or write at a basic level.",
      source:
        "https://ourworldindata.org/grapher/literate-and-illiterate-world-population",
    },
  ],
  [
    "yO4Mc",
    {
      correctChoice: "Lesotho",
      wrongChoices: ["Liberia", "Laos", "Ukraine"],
      description:
        "Lesotho's life expectancy is rapidly decreasing due to HIV/AIDS epidemic.",
      source: "https://ourworldindata.org/grapher/life-expectancy-undp",
    },
  ],
  [
    "TCa8y",
    {
      correctChoice: "East Timor",
      wrongChoices: ["Indonesia", "Malaysia", "Vietnam"],
      description:
        "The Indonesian invasion of East Timor of 1975 created many humanitarian crises, including a genocide with estimated 100,000 to 300,000 victims.",
      source: "https://ourworldindata.org/grapher/life-expectancy-undp",
    },
  ],
  [
    "tkZi1",
    {
      correctChoice: "Child marriage",
      wrongChoices: [
        "Tobacco usage under 18",
        "Working overtime without pay",
        "Prostitution",
      ],
      description:
        "In the US, as of 2024, marriage under 18 is legal in 41 states. In California, a child can marry at any age with parental consent and judicial approval.",
      source: "https://ourworldindata.org/grapher/laws-on-child-marriage",
    },
  ],
  [
    "GAYsB",
    {
      correctChoice: "Vote for government",
      wrongChoices: [
        "Go to public schools",
        "Public healthcare",
        "Immigration",
      ],
      description:
        "In the US, the women were granted the consitutional right to vote in 1920.",
      source:
        "https://ourworldindata.org/grapher/countries-with-universal-right-to-vote-lexical",
    },
  ],
  [
    "r6tkq",
    {
      correctChoice: "Disease burden from lead exposure",
      wrongChoices: [
        "CO₂ emmision in tons",
        "Water usage in tons",
        "Number of motorcycles produced",
      ],
      description:
        "A half of Indian children have unsafe blood lead levels. More than a quarter of all global deaths due to lead exposure occur in India.",
      source: "https://ourworldindata.org/grapher/disease-burden-lead",
    },
  ],
  [
    "GyxDZ",
    {
      correctChoice: "Human trafficking victims under 18 years old",
      wrongChoices: [
        "Number of paid paternal leave days",
        "Sex crime victims",
        "Software engineers per 100,000 people",
      ],
      description:
        "In Nigeria, especially in the south, children trafficking in prevalent for exploitation in sex and forced labor.",
      source:
        "https://ourworldindata.org/grapher/human-trafficking-victims-under-18-years-old-male-vs-female",
    },
  ],
  [
    "z6rfG",
    {
      correctChoice: "China",
      wrongChoices: ["Brazil", "Spain", "Germany"],
      description: "An average Chinese person eats 39.2kg of pork every year.",
      source:
        "https://ourworldindata.org/grapher/global-meat-production-by-livestock-type",
    },
  ],
  [
    "G0a1c",
    {
      correctChoice: "Iraq",
      wrongChoices: ["Syria", "France", "Yemen"],
      description:
        "Terrorist attacks have been significantly dropping since 2017 largely thanks to Iraqi Armed Forces.",
      source:
        "https://ourworldindata.org/grapher/deaths-from-terrorism-by-target",
    },
  ],
  [
    "tVVWv",
    {
      correctChoice: "Private Citizens & Property",
      wrongChoices: [
        "Religious figures",
        "Terrorists/Non-State Militia",
        "Journalists & Media",
      ],
      description:
        "India's terrorist death toll in 2021 dropped to 135 compared to 1152 in 1992.",
      source:
        "https://ourworldindata.org/grapher/deaths-from-terrorism-by-target",
    },
  ],
  [
    "LDIlA",
    {
      correctChoice: "Saudi Arabia",
      wrongChoices: ["Italy", "Japan", "Turkey"],
      description:
        "In 2015 Saudi Arabia is the Asian country with the most immigrants, primarily from India, Indonesia, Pakistan, and Bangladesh.",
      source: "https://ourworldindata.org/grapher/migrant-stock-total",
    },
  ],
  [
    "P2tuN",
    {
      correctChoice: "Historical activities of chemical and biological weapons",
      wrongChoices: [
        "War crimes committed 1800-1900 and 1900 to now",
        "Nobel Prize winners and nominatees",
        "Terrorist attacks of 50-100 and 100+ victims",
      ],
      description:
        "As of 2022, only Russia, United States, North Korea, and Iran claim to pursue biological weapons.",
      source: "https://ourworldindata.org/grapher/biological-weapons",
    },
  ],
  [
    "7u4MW",
    {
      correctChoice: "Average alcohol consumption in liters",
      wrongChoices: [
        "Average Pork consumption in kilograms",
        "Percentage of people who believe in god",
        "Obesity rate",
      ],
      description:
        "Kuwait, Saudi Arabia, Mauritania, and Somalia are the only 4 countries with 0 average alcohol consumption.",
      source:
        "https://ourworldindata.org/grapher/total-alcohol-consumption-per-capita-litres-of-pure-alcohol",
    },
  ],
  [
    "3TpFT",
    {
      correctChoice: "Alcohol-attributable fraction of mortality",
      wrongChoices: [
        "Percentage of Orthodox Christians",
        "Corruption Perception Index",
        "Sunflower production in million tons",
      ],
      description:
        "In Moldova, 26.1% of deaths will disappear if alcohol were removed.",
      source:
        "https://ourworldindata.org/grapher/alcohol-attributable-fraction-of-mortality",
    },
  ],
  [
    "jm8fg",
    {
      correctChoice: "Alcohol-attributable fraction of mortality",
      wrongChoices: [
        "Fentanyl and other Synthetic opiods",
        "Methamphetamine",
        "Amphetamine",
      ],
      description:
        "The dosage of 42% of the fentanyl pills are higher than lethal threshold.",
      source: "https://ourworldindata.org/grapher/drug-overdose-death-rates",
    },
  ],
  [
    "9JfQ3",
    {
      correctChoice: "Drug use disorder deaths per 100,000 people",
      wrongChoices: [
        "National defense budget in trillion USD",
        "Fossile fule export in million tons",
        "Percentage of cancer patients",
      ],
      description:
        "United States, Canada, and Australia are the top 3 countries in drug related death rate.",
      source:
        "https://ourworldindata.org/grapher/death-rates-from-drug-use-disorders-who",
    },
  ],
  [
    "p7M81",
    {
      correctChoice: "Australia",
      wrongChoices: ["Spain", "South Korea", "Vietnam"],
      description:
        "In 2019, Australia has the highest burdern of disease from mental illness, while Vietnam has the lowest.",
      source:
        "https://ourworldindata.org/grapher/death-rates-from-drug-use-disorders-who",
    },
  ],
]);
