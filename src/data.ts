import type { Charity, Quiz } from "~/types"

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
        "The Tigray war from 2020 to 2022 in Ethiopia has caused more than 100,000 casualties.",
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
        "In India, death rate from unsafe water dropped by 76% from 1990 to 2022.",
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
        "In the US, deaths from neuropsychiatric conditions and drug use disorders increased by 118% from 1950 to 2021.",
      source: "https://ourworldindata.org/grapher/death-rate-by-cause-who-mdb",
    },
  ],
  [
    "aluE4",
    {
      correctChoice: "Chad",
      wrongChoices: ["Bhutan", "Kenya", "North Korea"],
      description:
        "In 2022, 72.7% of Chadians aged 15+ cannot read or write at a basic level.",
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
        "Lesotho's life expectancy rapidly decreased from 1990 to 2006 due to HIV/AIDS epidemic.",
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
        "In the US, as of 2024, marriage under 18 is legal in 41 states.",
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
        "In the US, women were granted the consitutional right to vote in 1920.",
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
        "In Nigeria, especially in the south, children trafficking in prevalent for sex exploitation and forced labor.",
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
        "In 2015 Saudi Arabia has the most immigrants in Asia, primarily from India, Indonesia, Pakistan, and Bangladesh.",
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
      correctChoice: "Fentanyl and other Synthetic opiods",
      wrongChoices: ["Amphetamine", "Methamphetamine", "Ketamine"],
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
        "Fossile fuel export in million tons",
        "Percentage of cancer patients",
      ],
      description:
        "United States, Canada, and United Kingdom are the top 3 countries in drug related death rate in 2021.",
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
        "https://ourworldindata.org/grapher/burden-disease-from-each-mental-illness",
    },
  ],
  [
    "5UN0T",
    {
      correctChoice: "Human Rights Index",
      wrongChoices: [
        "GDP increase percentage",
        "Birth rate",
        "Daily meat consumption in kg",
      ],
      description:
        "In Afghanistan, the Human Rights Index dropped from 0.554 in 2020 to 0.06 in 2022.",
      source: "https://ourworldindata.org/grapher/human-rights-index-vdem",
    },
  ],
  [
    "bxlQQ",
    {
      correctChoice: "Brazil",
      wrongChoices: ["Uganda", "India", "China"],
      description:
        "Vietnam's coffee production increased from 4,100t in 1961 to 2.0 million tons in 2022",
      source: "https://ourworldindata.org/grapher/coffee-bean-production",
    },
  ],
  [
    "gdaEo",
    {
      correctChoice: "Share of population with access to electricity",
      wrongChoices: [
        "Share of population with clean water",
        "Literacy rate",
        "Human right index",
      ],
      description:
        "In Burundi, only 10.2% of the population has access to electricity providing basic lighting in 2021.",
      source:
        "https://ourworldindata.org/grapher/share-of-the-population-with-access-to-electricity",
    },
  ],
  [
    "VTgzS",
    {
      correctChoice: "Biofuels",
      wrongChoices: ["Wood", "Geothermal", "Ocean"],
      description:
        "The most common biofuels are corn ethanol, biodiesel, and biogas from organic byproducts.",
      source: "https://ourworldindata.org/grapher/global-energy-substitution",
    },
  ],
  [
    "fqk1x",
    {
      correctChoice: "Energy Consumption per Capita in kWh",
      wrongChoices: [
        "Oil exports in barrel",
        "GDP per capita in USD",
        "Average price of water per ton in USD",
      ],
      description:
        "Average energy consumption per capita in Trinidad and Tobago is 6 times higher than in South America due to its energy-intensive industries (ammonia, methanol, fertilizers, and aluminium).",
      source: "https://ourworldindata.org/grapher/per-capita-energy-use",
    },
  ],
  [
    "bM0MF",
    {
      correctChoice: "Nuclear energy consumption percentage",
      wrongChoices: [
        "Percentage of people who own personal computers",
        "Pork consumption per capita in kg",
        "Lead exposure in children in mg/dL",
      ],
      description:
        "In 2009, Lithuania closed all nuclear power plants, switching from being an exporter to an importer of electricity.",
      source: "https://ourworldindata.org/grapher/nuclear-primary-energy",
    },
  ],
  [
    "7Du94",
    {
      correctChoice: "India",
      wrongChoices: ["South Korea", "Taiwan", "France"],
      description:
        "The installed solar energy capacity in China increased from 6.72GW in  2012 to 393.03GW in 2022.",
      source: "https://ourworldindata.org/grapher/installed-solar-pv-capacity",
    },
  ],
  [
    "M0OkF",
    {
      correctChoice: "Plastic waste emitted to the ocean in tons",
      wrongChoices: [
        "Rice production in 1000 tonnes",
        "Population affected by hurricane disasters",
        "Education expenditure in USD",
      ],
      description:
        "The Philippines emits 3.3kg plastic waste into the ocean per capita, the highest in the world in 2019.",
      source: "https://ourworldindata.org/plastic-pollution",
    },
  ],
  [
    "iLR2B",
    {
      correctChoice: "Fish catch in tonnes",
      wrongChoices: [
        "Steel production in tonnes",
        "Dairy consumption in tonnes",
        "Number of sheep in stock",
      ],
      description:
        "Due to overfishing, the fish catch in the UK in 2017 was lower than 1941 when the country was at war.",
      source: "https://ourworldindata.org/grapher/fish-catch-uk",
    },
  ],
  [
    "lAWX8",
    {
      correctChoice: "Net migrants per 1,000 people",
      wrongChoices: [
        "GDP growth rate",
        "Population growth rate",
        "Environmental performance index",
      ],
      description:
        "The net migration rate in Hong Kong in 1964 was 357.14 per 1,000 people, the highest in the history ever recorded.",
      source:
        "https://ourworldindata.org/countries-measure-immigration-accurate-data",
    },
  ],
  [
    "LjuO1",
    {
      correctChoice: "Percentage of people living in urban areas",
      wrongChoices: [
        "Percentage of people with internet access",
        "Percentage of people who have more than 9 years of education",
        "Percentage of people who support gay marriage",
      ],
      description:
        "Monaco, Kuwait, Nauru, and Singapore are the only countries with 100% urbanization rate.",
      source: "https://ourworldindata.org/grapher/share-of-population-urban",
    },
  ],
  [
    "ERnRS",
    {
      correctChoice: "Percentage of urban population living in slums",
      wrongChoices: [
        "Percentage of people in extreme poverty",
        "Asylumn seekers in thousands",
        "Murder deaths per 100,000 people",
      ],
      description:
        "Rapid urbanization and post civil war population growth result in a rapid increase of slum dwellers in Angola in the 2000s.",
      source:
        "https://ourworldindata.org/grapher/share-of-urban-population-living-in-slums",
    },
  ],
  [
    "gs1PV",
    {
      correctChoice: "Nigeria",
      wrongChoices: ["Vietnam", "Angola", "Haiti"],
      description:
        "In Lagos, Nigeria, 10 million people, or 66% of the population, live in slums in extreme poverty with limited clean water and poor sanitation.",
      source: "https://ourworldindata.org/grapher/urban-pop-in-out-of-slums",
    },
  ],
])

export const CHARITIES: Charity[] = [
  {
    link: "https://www.globalgiving.org/",
    imgSrc: "/charities/global-giving.png",
    imgAlt: "GlobalGiving",
    description:
      "GlobalGiving is a nonprofit that supports other nonprofits by connecting them to donors and companies.",
  },
  {
    link: "https://www.savethechildren.org/",
    imgSrc: "/charities/save-the-children.svg",
    imgAlt: "Save the Children",
    description:
      "Save the Children protects and supports worldwide by providing health, education, and emergency aid.",
  },
  {
    link: "https://www.warchild.net/",
    imgSrc: "/charities/war-child.svg",
    imgAlt: "War Child",
    description:
      "War Child supports children affected by war through education, protection, and psychosocial assistance.",
  },
  {
    link: "https://www.doctorswithoutborders.org/",
    imgSrc: "/charities/doctors-without-borders.svg",
    imgAlt: "Doctors Without Borders",
    description:
      "Doctors Without Borders provides emergency medical care to people affected by crises, regardless of race, religion, or politics.",
  },
  {
    link: "https://www.wfp.org/",
    imgSrc: "/charities/world-food-programme.svg",
    imgAlt: "World Food Programme",
    description:
      "World Food Programme addresses hunger and promotes food security globally.",
  },
  {
    link: "https://water.org/",
    imgSrc: "/charities/water-org.svg",
    imgAlt: "Water.org",
    description:
      "Water.org focuses on providing access to clean water and sanitation.",
  },
  {
    link: "https://www.heifer.org/",
    imgSrc: "/charities/heifer-international.svg",
    imgAlt: "Heifer International",
    description:
      "Heifer International aims to end hunger and poverty through sustainable agriculture.",
  },
  {
    link: "https://www.malarianomore.org/",
    imgSrc: "/charities/malaria-no-more.svg",
    imgAlt: "Malaria No More",
    description:
      "Malaria No More aims to end malaria in Africa and other regions by raising awareness and supporting prevention programs.",
  },
  {
    link: "https://www.roomtoread.org/",
    imgSrc: "/charities/room-to-read.png",
    imgAlt: "Room to Read",
    description:
      "Room to Read promotes literacy and gender equality in education.",
  },
  {
    link: "https://onesky.org/",
    imgSrc: "/charities/one-sky.png",
    imgAlt: "One Sky",
    description:
      "OneSky provides care, education, and advocacy for children and orphanages across China, Vietnam, and Mongolia.",
  },
  {
    link: "https://www.habitat.org/",
    imgSrc: "/charities/habitat-for-humanity.svg",
    imgAlt: "Habitat for Humanity",
    description:
      "Habitat for Humanity builds affordable housing for families in need.",
  },
  {
    link: "https://www.care.org/",
    imgSrc: "/charities/care.svg",
    imgAlt: "CARE",
    description:
      "CARE works on humanitarian aid and development programs, especially for women and children.",
  },
]
