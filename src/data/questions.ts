// path: src/data/questions.ts
export type MCQ = {
  prompt: string;
  options: [string, string, string, string];
  answerIndex: 0 | 1 | 2 | 3;
};

export const biologyQuestions: MCQ[] = [
  {
    prompt:
      "What is the highest level of classification in the biological hierarchy?",
    options: ["Kingdom", "Phylum", "Domain", "Species"],
    answerIndex: 2,
  },
  {
    prompt:
      "Which taxonomic rank is used to group organisms that can interbreed and produce fertile offspring?",
    options: ["Genus", "Family", "Order", "Species"],
    answerIndex: 3,
  },
  {
    prompt: "What is the scientific name for humans?",
    options: [
      "Homo sapiens",
      "Homo erectus",
      "Homo neanderthalensis",
      "Australopithecus afarensis",
    ],
    answerIndex: 0,
  },
  {
    prompt:
      "Which kingdom includes organisms that are prokaryotic and unicellular?",
    options: ["Animalia", "Plantae", "Fungi", "Monera"],
    answerIndex: 3,
  },
  {
    prompt: "What is the basis of the five-kingdom classification system?",
    options: [
      "Morphology",
      "Cell structure",
      "Mode of nutrition",
      "All of the above",
    ],
    answerIndex: 3,
  },
  {
    prompt:
      "The number of times an organism occurs within a given area of a habitat is referred to as",
    options: [
      "Population growth rate",
      "Population frequency",
      "Population growth rate",
      "Population density",
    ],
    answerIndex: 3,
  },
  {
    prompt:
      "Which of the following structures controls the activities of the living cell?",
    options: ["Nucleus", "Centrosome", "Mitochondrion", "Golgi body"],
    answerIndex: 0,
  },
  {
    prompt: "Snails belong to the phylum?",
    options: ["Annelida", "Mollusca", "Echinodermata", "Nematode"],
    answerIndex: 1,
  },
  {
    prompt: "Flatworms and roundworms are said to be invertebrates because?",
    options: [
      "they are small animals",
      "they can live inside the vertebrates",
      "some of them are unicellular",
      "they have no backbones",
    ],
    answerIndex: 3,
  },
  {
    prompt: "What is the control center of a cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Lysosome"],
    answerIndex: 0,
  },
  {
    prompt: "Which organelle is responsible for protein synthesis?",
    options: [
      "Ribosome",
      "Endoplasmic reticulum",
      "Golgi apparatus",
      "Lysosome",
    ],
    answerIndex: 0,
  },
  {
    prompt: "What is the function of the cell membrane?",
    options: [
      "To control cell growth",
      "To regulate what enters and leaves the cell",
      "To synthesize proteins",
      "To store genetic information",
    ],
    answerIndex: 1,
  },
  {
    prompt: 'Which organelle is known as the "powerhouse" of the cell?',
    options: [
      "Mitochondria",
      "Chloroplast",
      "Nucleus",
      "Endoplasmic reticulum",
    ],
    answerIndex: 0,
  },
  {
    prompt: "What is the function of lysosomes?",
    options: [
      "To synthesize proteins",
      "To store genetic information",
      "To digest and recycle cellular waste",
      "To regulate cell growth",
    ],
    answerIndex: 2,
  },
  {
    prompt: "What is the primary basis of classification in biology?",
    options: [
      "Morphology",
      "Physiology",
      "Evolutionary relationships",
      "Habitat",
    ],
    answerIndex: 0,
  },
  {
    prompt:
      "Which level of organization is a group of similar cells that work together?",
    options: ["Organ", "Tissue", "Organ system", "Organism"],
    answerIndex: 1,
  },
  {
    prompt: "What is the highest level of organization in living organisms?",
    options: ["Cell", "Tissue", "Organism", "Ecosystem"],
    answerIndex: 3,
  },
  {
    prompt: "Which taxonomic rank is more general than genus?",
    options: ["Family", "Order", "Class", "All of the above"],
    answerIndex: 3,
  },
  {
    prompt:
      "The organelle involved in the transport of substances within a cell is?",
    options: [
      "Golgi body",
      "Endoplasmic reticulum",
      "Ribosome",
      "Mitochondrion",
    ],
    answerIndex: 0,
  },
  {
    prompt: "Thyroxine and adrenaline are examples of hormones which control?",
    options: [
      "blood grouping",
      "tongue rolling",
      "behavioural patterns",
      "colour variation",
    ],
    answerIndex: 2,
  },
  {
    prompt:
      "The most important ecological factor in a terrestrial environment is?",
    options: ["rainfall", "humidity", "wind", "soil"],
    answerIndex: 3,
  },
  {
    prompt:
      "Which of the following is not a function of the mammalian skeleton?",
    options: ["Protection", "respiration", "Transportation", "Support"],
    answerIndex: 2,
  },
  {
    prompt: "One of the functions of the xylem is?",
    options: [
      "strengthening the stem",
      "manufacturing food",
      "reducing loss of water",
      "conducting manufactured food",
    ],
    answerIndex: 0,
  },
  {
    prompt: "The internal structure of a leaf that has larger air space is?",
    options: [
      "palisade mesophyll",
      "epidermis",
      "spongy mesophyll",
      "vascular bundles",
    ],
    answerIndex: 2,
  },
  {
    prompt:
      "Which of the following tissues does not provide support in flowering plants?",
    options: ["Collenchyma", "Parenchyma", "Xylem", "Phloem"],
    answerIndex: 3,
  },
  {
    prompt: "Homeostasis is best described as:",
    options: [
      "The process of converting food into energy.",
      "The regulation of internal conditions of a cell or organism to maintain optimum conditions for function.",
      "The process by which organisms grow and develop.",
      "The breakdown of complex molecules into simpler ones.",
    ],
    answerIndex: 1,
  },
  {
    prompt:
      "Which of the following is an example of a negative feedback mechanism?",
    options: [
      "A ripe apple producing ethylene gas, which causes other apples to ripen.",
      "The contraction of the uterus during childbirth, which causes the release of oxytocin to further increase contractions.",
      "The pancreas releasing insulin to lower blood glucose levels when they rise too high.",
      "A wound healing as new cells divide to replace damaged ones.",
    ],
    answerIndex: 2,
  },
  {
    prompt: "The main osmoregulatory organs in the human body are the:",
    options: ["Heart", "Liver", "Kidneys", "Lungs"],
    answerIndex: 2,
  },
  {
    prompt:
      "Which part of the brain contains osmoreceptors that detect changes in the water potential of the blood?",
    options: ["Cerebrum", "Cerebellum", "Hypothalamus", "Medulla oblongata"],
    answerIndex: 2,
  },
  {
    prompt:
      "According to the modern cell theory, all of the following are true EXCEPT:",
    options: [
      "The cell is the basic unit of life.",
      "All living organisms are composed of one or more cells.",
      "All new cells arise from pre-existing cells.",
      "Cells contain genetic material passed to daughter cells during cell division.",
    ],
    answerIndex: 3,
  },
  {
    prompt:
      "Which kingdom is made up of single-celled organisms that lack a nucleus?",
    options: ["Animalia", "Fungi", "Monera", "Protista"],
    answerIndex: 2,
  },
  {
    prompt:
      "One common feature of the fungi, algae, mosses and ferns is that they?",
    options: [
      "are photosynthetic",
      "show alternation of generation",
      "reproduce by means of conjugation",
      "have no seeds",
    ],
    answerIndex: 3, // E) have no seeds
  },
  {
    prompt: "The cell wall is a component of animal cells.",
    options: ["True", "False", "-", "-"],
    answerIndex: 1, // False
  },
  {
    prompt: "Mitochondria are found in both plant and animal cells.",
    options: ["True", "False", "-", "-"],
    answerIndex: 0, // True
  },
  {
    prompt: "Lysosomes are responsible for protein synthesis.",
    options: ["True", "False", "-", "-"],
    answerIndex: 1, // False
  },
  {
    prompt:
      "The ______________________ is a network of membranous tubules and cisternae that synthesizes proteins and lipids.",
    options: [
      "Nucleus",
      "Endoplasmic reticulum",
      "Golgi apparatus",
      "Mitochondrion",
    ],
    answerIndex: 1, // endoplasmic reticulum
  },
  {
    prompt:
      "The ______________________ is an organelle found in plant cells responsible for photosynthesis.",
    options: ["Mitochondrion", "Nucleus", "Chloroplast", "Ribosome"],
    answerIndex: 2, // chloroplast
  },
  {
    prompt: "The major function of contractile vacuole in amoeba is?",
    options: [
      "to secrete enzyme to digest food particles",
      "to store excess food materials",
      "to excrete nitrogenous waste",
      "to collect and expel water in the cytoplasm",
    ],
    answerIndex: 3, // E) to collect and expel water in the cytoplasm
  },
  {
    prompt: "The mammalian endocrine system is responsible for?",
    options: [
      "transmitting impulse",
      "regulating body temperature",
      "chemical co-ordination",
      "the manufacture of blood",
    ],
    answerIndex: 2, // D) chemical co-ordination
  },
  {
    prompt: "The basic unit of classification of living things is the",
    options: ["class", "genus", "kingdom", "species"],
    answerIndex: 3, // E) species
  },
];

export const chemistryQuestions: MCQ[] = [
  {
    prompt: "What is matter composed of?",
    options: ["Energy", "Atoms and molecules", "Forces", "Particles"],
    answerIndex: 1,
  },
  {
    prompt: "Which of the following is an example of a solid?",
    options: ["Water", "Air", "Ice", "Steam"],
    answerIndex: 2,
  },
  {
    prompt: "What is the process called when a liquid changes to a gas?",
    options: ["Melting", "Boiling", "Condensation", "Sublimation"],
    answerIndex: 1,
  },
  {
    prompt:
      "Which state of matter has particles that are widely spaced and free to move?",
    options: ["Solid", "Liquid", "Gas", "Plasma"],
    answerIndex: 2,
  },
  {
    prompt:
      "What is the smallest unit of matter that still retains the properties of an element?",
    options: ["Molecule", "Atom", "Compound", "Mixture"],
    answerIndex: 1,
  },
  {
    prompt:
      "What separation technique is used to separate a mixture of sand and water?",
    options: ["Filtration", "Decantation", "Distillation", "Crystallization"],
    answerIndex: 0,
  },
  {
    prompt:
      "Which technique is used to separate a mixture of two liquids with different boiling points?",
    options: ["Filtration", "Distillation", "Chromatography", "Decantation"],
    answerIndex: 1,
  },
  {
    prompt: "What is the principle behind chromatography?",
    options: [
      "Difference in boiling points",
      "Difference in densities",
      "Difference in adsorption or partitioning",
      "Difference in solubility",
    ],
    answerIndex: 2,
  },
  {
    prompt: "Which separation technique involves the use of a magnet?",
    options: [
      "Filtration",
      "Magnetic separation",
      "Decantation",
      "Distillation",
    ],
    answerIndex: 1,
  },
  {
    prompt: "What technique is used to separate a mixture of salt and water?",
    options: ["Filtration", "Distillation", "Crystallization", "Decantation"],
    answerIndex: 2,
  },
  {
    prompt:
      "What is the smallest unit of an element that retains its properties?",
    options: ["Molecule", "Atom", "Compound", "Mixture"],
    answerIndex: 1,
  },
  {
    prompt: "What is the mole ratio of hydrogen to oxygen in water (H2O)?",
    options: ["1:1", "2:1", "1:2", "2:2"],
    answerIndex: 1,
  },
  {
    prompt: "What is the chemical formula for ammonia?",
    options: ["NH3", "NH4", "N2H4", "HNO3"],
    answerIndex: 0,
  },
  {
    prompt: "Which equation represents the combustion of methane?",
    options: [
      "CH4 + O2 → CO2 + H2O",
      "CH4 + O2 → CO + H2O",
      "CH4 + H2O → CO + H2",
      "CH4 + CO2 → C + H2O",
    ],
    answerIndex: 0,
  },
  {
    prompt: "What is the number of atoms in one mole of carbon?",
    options: ["6.02 × 10^22", "6.02 × 10^23", "12.01 × 10^23", "1.20 × 10^24"],
    answerIndex: 1,
  },
  {
    prompt: "Atomicity of ozone is",
    options: ["1", "2", "3", "4"],
    answerIndex: 2,
  },
  {
    prompt: "There are basic particles from which matter could be made except",
    options: ["salt", "Atom", "ion", "molecules"],
    answerIndex: 0,
  },
  {
    prompt:
      "Sieving is a technique used to separate mixtures containing solid particles of",
    options: ["small sizes", "large sizes", "the same size", "different sizes"],
    answerIndex: 3,
  },
  {
    prompt: "What type of bond is formed when two atoms share electrons?",
    options: [
      "Ionic bond",
      "Covalent bond",
      "Hydrogen bond",
      "Electrostatic bond",
    ],
    answerIndex: 1,
  },
  {
    prompt: "Which type of chemical bond involves the transfer of electrons?",
    options: [
      "Covalent bond",
      "Ionic bond",
      "Hydrogen bond",
      "Van der Waals bond",
    ],
    answerIndex: 1,
  },
  {
    prompt:
      "What is the chemical formula for a compound formed between sodium (Na) and chlorine (Cl)?",
    options: ["NaCl", "Na2Cl", "NaCl2", "Na2Cl3"],
    answerIndex: 0,
  },
  {
    prompt:
      "Which of the following compounds is an example of an ionic compound?",
    options: ["H2O", "CO2", "NaCl", "CH4"],
    answerIndex: 2,
  },
  {
    prompt:
      "What type of bond is responsible for the attraction between water molecules?",
    options: [
      "Ionic bond",
      "Covalent bond",
      "Hydrogen bond",
      "Electrostatic bond",
    ],
    answerIndex: 2,
  },
  {
    prompt:
      "Covalent compounds typically have high melting and boiling points.",
    options: ["True", "False", "—", "—"],
    answerIndex: 1,
  }, // (Kept as MCQ shape; answer is 'False')
  {
    prompt: "The percentage of oxygen in Sulphur(IV) oxide (S=32, O=16) is",
    options: ["5%", "50%", "500%", "25%"],
    answerIndex: 1,
  },
  {
    prompt: "The empirical formula of C6H6 is",
    options: ["CH", "C3H3", "C6H6", "3CH"],
    answerIndex: 0,
  },
  {
    prompt: "A molecule of Neon is",
    options: ["diatomic", "Ionic", "positively charged", "monatomic"],
    answerIndex: 3,
  },
  // 6
  {
    prompt: "Matter can be created or destroyed.",
    options: ["True", "False", "-", "-"],
    answerIndex: 1, // False
  },

  // 7
  {
    prompt: "All matter is made up of atoms.",
    options: ["True", "False", "-", "-"],
    answerIndex: 0, // True
  },

  // 8 (fill-in-the-blanks → generate options)
  {
    prompt:
      "The three main states of matter are __________, __________, and __________.",
    options: [
      "solid, liquid, gas",
      "solid, gas, plasma",
      "liquid, gas, plasma",
      "solid, liquid, steam",
    ],
    answerIndex: 0,
  },

  // 9
  {
    prompt:
      "The process of a solid changing directly to a gas is called __________.",
    options: ["melting", "evaporation", "sublimation", "boiling"],
    answerIndex: 2,
  },

  // 10
  {
    prompt: "Matter is anything that has __________ and occupies space.",
    options: ["mass", "energy", "volume", "density"],
    answerIndex: 0,
  },

  // 16
  {
    prompt:
      "Decantation is a technique used to separate a mixture of two liquids with different densities.",
    options: ["True", "False", "-", "-"],
    answerIndex: 0, // True
  },

  // 17
  {
    prompt: "Filtration is used to separate a mixture of two solids.",
    options: ["True", "False", "-", "-"],
    answerIndex: 1, // False
  },

  // 18
  {
    prompt:
      "The technique of __________ is used to separate a mixture of two or more liquids based on their boiling points.",
    options: ["distillation", "filtration", "chromatography", "evaporation"],
    answerIndex: 0,
  },

  // 19
  {
    prompt:
      "__________ is a technique used to separate a mixture of colored substances.",
    options: [
      "distillation",
      "filtration",
      "chromatography",
      "crystallization",
    ],
    answerIndex: 2,
  },

  // 20
  {
    prompt:
      "A mixture of iron filings and sand can be separated using __________.",
    options: [
      "filtration",
      "decantation",
      "chromatography",
      "magnetic separation",
    ],
    answerIndex: 3,
  },

  // 26
  {
    prompt:
      "The molecular formula of a compound shows the simplest whole-number ratio of atoms.",
    options: ["True", "False", "-", "-"],
    answerIndex: 1, // False
  },

  // 27
  {
    prompt: "One mole of any substance contains the same number of particles.",
    options: ["True", "False", "-", "-"],
    answerIndex: 0, // True
  },

  // 39
  {
    prompt:
      "If the relative molecular mass of CH2O is 60, calculate its empirical formula. (C=12, H=1, O=16)",
    options: ["4", "1", "2", "3"],
    answerIndex: 2, // 2
  },
];

export const economicsQuestions: MCQ[] = [
  {
    prompt:
      "What happens to the demand curve when the price of a complementary good increases?",
    options: [
      "Shifts to the right",
      "Shifts to the left",
      "Remains unchanged",
      "Becomes steeper",
    ],
    answerIndex: 1,
  },
  {
    prompt: "Which of the following is a determinant of supply?",
    options: [
      "Consumer preferences",
      "Income levels",
      "Production costs",
      "Price of substitutes",
    ],
    answerIndex: 2,
  },
  {
    prompt: "At the equilibrium price, the quantity demanded is:",
    options: [
      "Greater than the quantity supplied",
      "Less than the quantity supplied",
      "Equal to the quantity supplied",
      "Unrelated to the quantity supplied",
    ],
    answerIndex: 2,
  },
  {
    prompt:
      "What is the effect of a price ceiling set below the equilibrium price?",
    options: [
      "Surplus",
      "Shortage",
      "No change in market outcome",
      "Increase in supply",
    ],
    answerIndex: 1,
  },
  {
    prompt: "What is the primary goal of a firm in the production process?",
    options: [
      "To maximize revenue",
      "To minimize costs",
      "To maximize profits",
      "To maximize output",
    ],
    answerIndex: 2,
  },
  {
    prompt:
      "Which of the following is a characteristic of the short run in production?",
    options: [
      "All inputs are variable",
      "Some inputs are fixed",
      "Technology is changing",
      "Output is constant",
    ],
    answerIndex: 1,
  },
  {
    prompt: "The law of diminishing marginal returns states that:",
    options: [
      "As more inputs are added, output increases at an increasing rate",
      "As more inputs are added, output increases at a decreasing rate",
      "As more inputs are added, output remains constant",
      "As more inputs are added, output decreases",
    ],
    answerIndex: 1,
  },
  {
    prompt: "Which of the following is a measure of productivity?",
    options: [
      "Total output",
      "Average output per worker",
      "Marginal output",
      "Total revenue",
    ],
    answerIndex: 1,
  },
  {
    prompt: "What is the primary function of money in an economy?",
    options: [
      "Store of value",
      "Medium of exchange",
      "Unit of account",
      "All of the above",
    ],
    answerIndex: 3,
  },
  {
    prompt: "Which of the following is a characteristic of fiat money?",
    options: [
      "Backed by gold or silver",
      "Issued by commercial banks",
      "Has intrinsic value",
      "Declared legal tender by government",
    ],
    answerIndex: 3,
  },
  {
    prompt: "What is the main purpose of the central bank's monetary policy?",
    options: [
      "To control inflation",
      "To regulate commercial banks",
      "To manage government debt",
      "To stabilize exchange rates",
    ],
    answerIndex: 0,
  },
  {
    prompt: "Which of the following is a component of the money supply?",
    options: [
      "Coins and currency",
      "Demand deposits",
      "Time deposits",
      "All of the above",
    ],
    answerIndex: 3,
  },
  {
    prompt: "Which of the following is NOT a factor of production?",
    options: ["Land", "Labor", "Capital", "Money"],
    answerIndex: 3,
  },
  {
    prompt: "What is the reward for the factor of production 'Land'?",
    options: ["Wages", "Rent", "Interest", "Profit"],
    answerIndex: 1,
  },
  {
    prompt: "Which factor of production involves human effort and skill?",
    options: ["Land", "Labor", "Capital", "Entrepreneurship"],
    answerIndex: 1,
  },
  {
    prompt:
      "What is the main function of the factor of production 'Entrepreneurship'?",
    options: [
      "To manage resources",
      "To provide finance",
      "To innovate and take risks",
      "To produce goods",
    ],
    answerIndex: 2,
  },
  {
    prompt:
      "Which of the following is an example of the factor of production 'Capital'?",
    options: [
      "A factory building",
      "A skilled worker",
      "A piece of land",
      "A natural resource",
    ],
    answerIndex: 0,
  },
  {
    prompt: "What is the primary function of a commercial bank?",
    options: [
      "To manage government finances",
      "To provide loans to businesses",
      "To accept deposits and make loans",
      "To regulate monetary policy",
    ],
    answerIndex: 2,
  },
  {
    prompt: "Which of the following is a type of bank account?",
    options: [
      "Current account",
      "Savings account",
      "Fixed deposit account",
      "All of the above",
    ],
    answerIndex: 3,
  },
  {
    prompt: "What is the purpose of the reserve requirement for banks?",
    options: [
      "To ensure liquidity",
      "To control inflation",
      "To manage risk",
      "To increase profits",
    ],
    answerIndex: 0,
  },
  {
    prompt: "Which of the following is a service provided by banks?",
    options: [
      "Credit cards",
      "Debit cards",
      "Online banking",
      "All of the above",
    ],
    answerIndex: 3,
  },
  {
    prompt:
      "What is the role of a central bank in relation to commercial banks?",
    options: [
      "To regulate and supervise",
      "To provide loans to customers",
      "To manage government finances",
      "To set interest rates for loans",
    ],
    answerIndex: 0,
  },
  {
    prompt: "What is the main characteristic of a market economy?",
    options: [
      "Government control of production",
      "Private ownership and free markets",
      "Central planning of resource allocation",
      "Equal distribution of income",
    ],
    answerIndex: 1,
  },
  {
    prompt:
      "Which economic system is characterized by government ownership of the means of production?",
    options: [
      "Capitalism",
      "Socialism",
      "Mixed economy",
      "Traditional economy",
    ],
    answerIndex: 1,
  },
  {
    prompt:
      "What is the term for an economic system that combines elements of both capitalism and socialism?",
    options: [
      "Mixed economy",
      "Command economy",
      "Market economy",
      "Traditional economy",
    ],
    answerIndex: 0,
  },
  {
    prompt:
      "In which economic system are decisions made based on customs and traditions?",
    options: [
      "Market economy",
      "Command economy",
      "Traditional economy",
      "Mixed economy",
    ],
    answerIndex: 2,
  },
  {
    prompt: "What is the primary goal of a socialist economic system?",
    options: [
      "To maximize profits",
      "To promote economic growth",
      "To reduce income inequality",
      "To increase government revenue",
    ],
    answerIndex: 2,
  },
  {
    prompt: "What is the fundamental problem of economics?",
    options: ["Scarcity", "Poverty", "Inequality", "Unemployment"],
    answerIndex: 0,
  },
  {
    prompt:
      "What is the term for the value of the next best alternative given up when a choice is made?",
    options: ["Opportunity cost", "Marginal cost", "Total cost", "Fixed cost"],
    answerIndex: 0,
  },
  {
    prompt:
      "What is the concept that describes the relationship between the price of a good and the quantity demanded?",
    options: [
      "Law of demand",
      "Law of supply",
      "Law of diminishing returns",
      "Law of increasing returns",
    ],
    answerIndex: 0,
  },
  {
    prompt:
      "What is the term for the study of the behavior of individual economic units, such as households and firms?",
    options: [
      "Macroeconomics",
      "Microeconomics",
      "Econometrics",
      "International trade",
    ],
    answerIndex: 1,
  },
  {
    prompt:
      "What is the concept that describes the idea that people make decisions based on available information?",
    options: [
      "Rational self-interest",
      "Marginal analysis",
      "Opportunity cost",
      "Comparative advantage",
    ],
    answerIndex: 0,
  },
  {
    prompt: "What is the main advantage of a sole proprietorship?",
    options: [
      "Limited liability",
      "Easy to set up",
      "Access to large capital",
      "Permanent existence",
    ],
    answerIndex: 1,
  },
  {
    prompt: "Which of the following is a disadvantage of a partnership?",
    options: [
      "Shared decision-making",
      "Unlimited liability",
      "Limited capital",
      "All of the above",
    ],
    answerIndex: 3,
  },
  {
    prompt:
      "What is the term for the process of dividing profits among partners in a partnership?",
    options: [
      "Profit sharing",
      "Loss sharing",
      "Capital contribution",
      "Management sharing",
    ],
    answerIndex: 0,
  },
  {
    prompt:
      "How does a sole proprietorship differ from a partnership in terms of ownership?",
    options: [
      "Multiple owners vs one owner",
      "One owner vs multiple owners",
      "Limited vs unlimited liability",
      "Formal vs informal business",
    ],
    answerIndex: 1,
  },
  {
    prompt: "What is the primary concern of economics?",
    options: [
      "Studying human behavior",
      "Analyzing market trends",
      "Understanding the allocation of scarce resources",
      "Examining government policies",
    ],
    answerIndex: 2,
  },
  {
    prompt: "Which of the following is a reason why economics is important?",
    options: [
      "It helps individuals make informed financial decisions",
      "It provides a framework for understanding global politics",
      "It enables governments to control the economy",
      "It promotes social inequality",
    ],
    answerIndex: 0,
  },
  {
    prompt: "What is the term for the study of the economy as a whole?",
    options: [
      "Microeconomics",
      "Macroeconomics",
      "Econometrics",
      "International trade",
    ],
    answerIndex: 1,
  },
  {
    prompt: "How does economics contribute to decision-making?",
    options: [
      "By providing a framework for analyzing costs and benefits",
      "By promoting emotional decision-making",
      "By ignoring market trends",
      "By focusing solely on profits",
    ],
    answerIndex: 0,
  },
];

export const governmentQuestions: MCQ[] = [
  {
    prompt: "What is the concept of sovereignty referring to?",
    options: [
      "The power of individuals to make decisions",
      "The authority of a state to govern itself independently",
      "The legitimacy of a government's actions",
      "The influence of international organizations on domestic policies",
    ],
    answerIndex: 1,
  },
  {
    prompt: "Which of the following is a characteristic of legitimate power?",
    options: [
      "It is based on coercion and force",
      "It is based on the consent and acceptance of those being governed",
      "It is based on the wealth and resources of the ruler",
      "It is based on the ruler's personal charisma",
    ],
    answerIndex: 1,
  },
  {
    prompt: "What is the main difference between power and authority?",
    options: [
      "Power is based on force, while authority is based on legitimacy",
      "Power is based on influence, while authority is based on coercion",
      "Power is a broader concept than authority",
      "Authority is a type of power that is widely accepted and recognized",
    ],
    answerIndex: 3,
  },
  {
    prompt:
      "Which of the following is a source of legitimacy for a government?",
    options: [
      "Democratic elections",
      "Traditional monarchies",
      "Charismatic leadership",
      "All of the above",
    ],
    answerIndex: 3,
  },
  {
    prompt: "What is the primary purpose of a government?",
    options: [
      "To promote economic growth",
      "To protect individual rights and freedoms",
      "To provide public goods and services",
      "To maintain law and order and ensure public welfare",
    ],
    answerIndex: 3,
  },
  {
    prompt: "Which of the following is a function of government?",
    options: [
      "Regulating private businesses",
      "Providing public education",
      "Maintaining national defense",
      "All of the above",
    ],
    answerIndex: 3,
  },
  {
    prompt: "What is the scope of government activities?",
    options: [
      "Limited to national defense and foreign policy",
      "Limited to economic regulation and public services",
      "Encompasses all aspects of public life, including economy, society, and individual rights",
      "Limited to law enforcement and justice",
    ],
    answerIndex: 2,
  },
  {
    prompt:
      "Which of the following is an example of a government's protective function?",
    options: [
      "Providing subsidies to farmers",
      "Regulating environmental pollution",
      "Maintaining a police force to prevent crime",
      "Promoting economic development through investment",
    ],
    answerIndex: 2,
  },
  {
    prompt: "What is the key characteristic of a capitalist economic system?",
    options: [
      "Government ownership of the means of production",
      "Private ownership of the means of production and free markets",
      "Central planning of resource allocation",
      "Equal distribution of income",
    ],
    answerIndex: 1,
  },
  {
    prompt:
      "Which economic system aims to reduce income inequality through government intervention?",
    options: [
      "Capitalism",
      "Socialism",
      "Mixed economy",
      "Traditional economy",
    ],
    answerIndex: 1,
  },
  {
    prompt:
      "What is the term for an economic system that combines elements of both capitalism and socialism?",
    options: [
      "Mixed economy",
      "Command economy",
      "Market economy",
      "Traditional economy",
    ],
    answerIndex: 0,
  },
  {
    prompt:
      "Which of the following countries is an example of a mixed economy?",
    options: [
      "United States (capitalist)",
      "China (socialist)",
      "Sweden (social democratic)",
      "Nigeria",
    ],
    answerIndex: 3,
  },
  {
    prompt: "What is the characteristic of a unitary system of government?",
    options: [
      "Power is divided between central and regional governments",
      "Power is concentrated in the central government",
      "Power is held by regional governments",
      "Power is shared between the president and parliament",
    ],
    answerIndex: 1,
  },
  {
    prompt:
      "Which system of government has a loose alliance of states with a weak central government?",
    options: ["Unitary", "Federal", "Confederal", "Presidential"],
    answerIndex: 2,
  },
  {
    prompt:
      "What is the form of government in which the head of state is not a monarch, but an elected or appointed official?",
    options: ["Monarchical", "Republican", "Authoritarian", "Totalitarian"],
    answerIndex: 1,
  },
  {
    prompt:
      "Which system of government has a directly elected president who serves as both head of state and head of government?",
    options: ["Parliamentary", "Presidential", "Unitary", "Confederal"],
    answerIndex: 1,
  },
  {
    prompt: "Which organ of government is responsible for making laws?",
    options: ["Executive", "Legislature", "Judiciary", "Bureaucracy"],
    answerIndex: 1,
  },
  {
    prompt:
      "Which organ of government is headed by the president or prime minister?",
    options: ["Legislature", "Executive", "Judiciary", "Administration"],
    answerIndex: 1,
  },
  {
    prompt: "What is the primary function of the judiciary?",
    options: [
      "To make laws",
      "To enforce laws",
      "To interpret laws",
      "To implement policies",
    ],
    answerIndex: 2,
  },
  {
    prompt:
      "Which organ of government is responsible for implementing policies and administering the government?",
    options: ["Executive", "Legislature", "Judiciary", "Civil Service"],
    answerIndex: 0,
  },
  {
    prompt:
      "What is the term for the legal status of being a member of a particular country?",
    options: ["Nationality", "Citizenship", "Residency", "Alienage"],
    answerIndex: 1,
  },
  {
    prompt: "Which of the following is a fundamental right of citizens?",
    options: [
      "Right to vote",
      "Right to work",
      "Right to education",
      "All of the above",
    ],
    answerIndex: 3,
  },
  {
    prompt: "What is an example of an obligation of citizens?",
    options: [
      "Paying taxes",
      "Voting in elections",
      "Serving in the military",
      "All of the above",
    ],
    answerIndex: 3,
  },
  {
    prompt: "Which of the following is a way to acquire citizenship?",
    options: ["Birth", "Naturalization", "Descent", "All of the above"],
    answerIndex: 3,
  },
  {
    prompt:
      "What is the term for the sphere of voluntary associations, organizations, and movements that exist between the state and the market?",
    options: [
      "Civil society",
      "Pressure group",
      "Interest group",
      "Social movement",
    ],
    answerIndex: 0,
  },
  {
    prompt: "Which of the following is an example of a pressure group?",
    options: [
      "Trade union",
      "Business association",
      "Non-governmental organization (NGO)",
      "All of the above",
    ],
    answerIndex: 3,
  },
  {
    prompt: "What is the primary goal of pressure groups?",
    options: [
      "To influence government policy",
      "To provide public services",
      "To promote economic growth",
      "To educate the public",
    ],
    answerIndex: 0,
  },
  {
    prompt: "Which of the following is a function of civil society?",
    options: [
      "Promoting civic engagement",
      "Providing social services",
      "Advocating for human rights",
      "All of the above",
    ],
    answerIndex: 3,
  },
  {
    prompt: "What is the primary role of INEC in Nigeria?",
    options: [
      "To conduct elections",
      "To appoint government officials",
      "To make laws",
      "To enforce laws",
    ],
    answerIndex: 0,
  },
  {
    prompt: "Which of the following is an example of electoral malpractice?",
    options: [
      "Voter registration",
      "Vote buying",
      "Campaign financing",
      "Election observation",
    ],
    answerIndex: 1,
  },
  {
    prompt: "What is the term for the process of voting in an election?",
    options: ["Polling", "Campaigning", "Registration", "Accreditation"],
    answerIndex: 0,
  },
  {
    prompt:
      "Which of the following is a responsibility of INEC in ensuring free and fair elections?",
    options: [
      "Conducting voter registration",
      "Announcing election results",
      "Investigating electoral malpractices",
      "All of the above",
    ],
    answerIndex: 3,
  },
  {
    prompt:
      "What is the principle of separating power among different branches of government intended to achieve?",
    options: [
      "Concentration of power",
      "Checks and balances",
      "Efficient decision-making",
      "Reduced accountability",
    ],
    answerIndex: 1,
  },
  {
    prompt: "Which of the following is a key aspect of the rule of law?",
    options: [
      "Arbitrary exercise of power",
      "Equality before the law",
      "Disregard for individual rights",
      "Lack of transparency",
    ],
    answerIndex: 1,
  },
  {
    prompt:
      "In a system with separation of powers, which branch is responsible for interpreting laws?",
    options: ["Executive", "Legislative", "Judicial", "Administrative"],
    answerIndex: 2,
  },
  {
    prompt:
      "What is a consequence of the rule of law being upheld in a society?",
    options: [
      "Increased corruption",
      "Protection of individual rights",
      "Reduced accountability",
      "Arbitrary governance",
    ],
    answerIndex: 1,
  },
  {
    prompt: "What is a characteristic of a military system of government?",
    options: [
      "Elected representatives",
      "Rule by the armed forces",
      "Separation of powers",
      "Protection of individual rights",
    ],
    answerIndex: 1,
  },
  {
    prompt:
      "Which system of government is typically associated with democratic principles?",
    options: ["Military", "Authoritarian", "Civilian", "Totalitarian"],
    answerIndex: 2,
  },
  {
    prompt: "In a civilian system of government, who typically holds power?",
    options: [
      "Military officers",
      "Elected representatives",
      "Traditional leaders",
      "Religious leaders",
    ],
    answerIndex: 1,
  },
  {
    prompt: "What is a potential advantage of a civilian system of government?",
    options: [
      "Increased stability through force",
      "Protection of individual rights and freedoms",
      "Rapid decision-making",
      "Reduced accountability",
    ],
    answerIndex: 1,
  },
];

export const civicEducationQuestions: MCQ[] = [
  {
    prompt: "The head of the House of Representatives is _____.",
    options: ["President", "Speaker", "Governor", "Councillor"],
    answerIndex: 1,
  },
  {
    prompt: "The nearest government to the grassroots is ___.",
    options: [
      "Federal Government",
      "Local government",
      "State government",
      "Central government",
    ],
    answerIndex: 1,
  },
  {
    prompt: "The head of the judiciary in Nigeria is known as ____. ",
    options: ["Chief Justice", "Chief judge", "Magistrate", "Registrar"],
    answerIndex: 0,
  },
  {
    prompt:
      "The head of the ministry in civil service at the state level is known as __.",
    options: ["Minister", "Governor", "Judge", "Commissioner"],
    answerIndex: 3,
  },
  {
    prompt: "One of the following is not an attribute of courage.",
    options: ["Boldness", "Bravery", "Determination", "Callous"],
    answerIndex: 3,
  },
  {
    prompt: "How many tiers of government are in Nigeria?",
    options: ["2", "10", "36", "3"],
    answerIndex: 3,
  },
  {
    prompt: "The act of truancy among students is an act of _____.",
    options: ["Homogeneity", "Heterogeneity", "Indiscipline", "Discipline"],
    answerIndex: 2,
  },
  {
    prompt:
      "The quality of being satisfied and happy over personal achievement is called ___.",
    options: ["Integrity", "Confederation", "Contentment", "Pride"],
    answerIndex: 2,
  },
  {
    prompt: "People of integrity promote all except one.",
    options: [
      "To promote good governance",
      "To promote development",
      "To promote disintegration",
      "To promote success",
    ],
    answerIndex: 2,
  },
  {
    prompt: "One of the following is not an attribute of integrity.",
    options: ["Honesty", "Discipline", "Fair-play", "Lie"],
    answerIndex: 3,
  },
  {
    prompt:
      "Conflict among people from the same ethnic group, town and state refers to ___.",
    options: [
      "Inter-ethnic conflict",
      "Organized conflict",
      "Perfect conflict",
      "Intra-ethnic conflict",
    ],
    answerIndex: 3,
  },
  {
    prompt:
      "A neutral person who is used to settle disputes among people or groups is called ____. ",
    options: ["Mediator", "Policeman", "Eze", "Lawyer"],
    answerIndex: 0,
  },
  {
    prompt:
      "Unlawful behavior displayed by some people in the society is known as ___.",
    options: ["Respect", "Abuse", "Common crime", "Pressure"],
    answerIndex: 2,
  },
  {
    prompt: "Causes of conflict involve the following except ____. ",
    options: [
      "Lack of information",
      "Breach of agreement",
      "Lack of human and material resources",
      "Mutual understanding",
    ],
    answerIndex: 3,
  },
  {
    prompt: "The worth, importance and usefulness of a thing refer to ____. ",
    options: ["Generalization", "Attitude", "Value", "Skill"],
    answerIndex: 2,
  },
  {
    prompt: "Nigeria got her independence on ____. ",
    options: [
      "1st Oct, 1960",
      "1st Oct, 1959",
      "1st Oct, 1950",
      "1st Oct, 1970",
    ],
    answerIndex: 0,
  },
  {
    prompt:
      "______ means showing more interest in the welfare of other people.",
    options: [
      "Dishonesty",
      "Unfaithfulness",
      "Selflessness",
      "Untrustworthiness",
    ],
    answerIndex: 2,
  },
  {
    prompt: "All are importance of honesty except _____.",
    options: [
      "Honesty makes a man honorable",
      "Honesty brings favor",
      "Honesty leads to reliability",
      "It leads to selfishness",
    ],
    answerIndex: 3,
  },
  {
    prompt: "Which of the following is a civic responsibility of a citizen?",
    options: [
      "Paying taxes",
      "Disobeying laws",
      "Causing conflict",
      "Avoiding elections",
    ],
    answerIndex: 0,
  },
  {
    prompt:
      "Members of a society are expected to adhere to societal values for the ____. ",
    options: [
      "Enhancement of development",
      "Empowerment of self dignity",
      "Reduction of social vices",
      "Relegation of morality",
    ],
    answerIndex: 0,
  },
  {
    prompt: "An attribute of honesty is all except ____. ",
    options: ["Tolerance", "Justice", "Compromise", "Liberty"],
    answerIndex: 2,
  },
  {
    prompt: "Discipline is described as the _____.",
    options: [
      "Ability to show hospitality",
      "State or quality of being brave",
      "Tendency to fight",
      "Ability to behave in a controlled manner",
    ],
    answerIndex: 3,
  },
  {
    prompt:
      "The saying “ask for what you can do for your country and not what your country can do for you” denotes that ____. ",
    options: [
      "The country owes you no obligation",
      "The country has both rights and obligations",
      "Fundamental rights are to be safeguarded",
      "Service and reward do not go together",
    ],
    answerIndex: 1,
  },
  {
    prompt:
      "In the contemporary society, youths can display nationalistic roles by showing the following attitudes except ____. ",
    options: [
      "Discouraging corrupt practices",
      "Exploiting the environment",
      "Contributing to development",
      "Showing indifference to national issues",
    ],
    answerIndex: 3,
  },
  {
    prompt:
      "The quality of a person who is more concerned about the needs, joy and happiness of others than his own is called ____. ",
    options: ["Honesty", "Obedience", "Selflessness", "Punctuality"],
    answerIndex: 2,
  },
  {
    prompt: "Which of the following is not a right?",
    options: ["Punctuality", "Discipline", "Honesty", "Disrespect"],
    answerIndex: 3,
  },
  {
    prompt: "Citizenship can be attained in the following ways except ____. ",
    options: ["Naturalization", "By birth", "By registration", "By conversion"],
    answerIndex: 3,
  },
  {
    prompt:
      "Every citizen has the following duties and obligations except ____. ",
    options: [
      "Voting",
      "Payment of taxes",
      "Obedience to laws",
      "Violation of others’ rights",
    ],
    answerIndex: 3,
  },
  {
    prompt:
      "When a person is upright in performing his duties, we say he is ____. ",
    options: ["Honest", "Selfless", "Punctual", "Committed"],
    answerIndex: 3,
  },
  {
    prompt:
      "The act of not hiding what one is doing from others is known as ____. ",
    options: ["Discipline", "Honesty", "Punctuality", "Transparency"],
    answerIndex: 3,
  },
  {
    prompt: "In democracy, ultimate power belongs to the ____. ",
    options: ["Leader", "Representative", "Lawyer", "People"],
    answerIndex: 3,
  },
  {
    prompt: "All these are qualification for voting in Nigeria except ___.",
    options: ["Citizenship", "Age", "Residence", "Sex"],
    answerIndex: 3,
  },
  {
    prompt: "The best thing to do when your right is violated is to ___.",
    options: ["Go to media", "Feel bad", "Form electorate", "Go to court"],
    answerIndex: 3,
  },
  {
    prompt:
      "In Nigeria, for a single term, the president is constitutionally required to spend ___.",
    options: ["6 years", "5 years", "3 years", "4 years"],
    answerIndex: 3,
  },
  {
    prompt: "The national anthem has ____ stanzas.",
    options: ["3", "4", "5", "2"],
    answerIndex: 3,
  },
  {
    prompt: "The minimum voting age in Nigeria is ____. ",
    options: ["18 years", "15 years", "30 years", "23 years"],
    answerIndex: 0,
  },
  {
    prompt: "Which of these is not an arm of government?",
    options: ["Legislature", "Judiciary", "Executive", "Trade Union"],
    answerIndex: 3,
  },
  {
    prompt: "Which is a quality of a good leader?",
    options: ["Disciplined", "Dishonest", "Arrogant", "Selfish"],
    answerIndex: 0,
  },
  {
    prompt: "Nigeria is practicing _____ party system.",
    options: ["Multi", "One", "Two", "Ten"],
    answerIndex: 0,
  },
  {
    prompt: "Which is not a quality of a good leader?",
    options: [
      "Obey rules and regulations",
      "Humility",
      "Violent in nature",
      "Kindhearted",
    ],
    answerIndex: 2,
  },
];

export const physicsQuestions = [
  {
    prompt: "The rate of change of displacement is:",
    options: ["Speed", "Velocity", "Acceleration", "Momentum"],
    answerIndex: 1,
  },
  {
    prompt: "The S.I. unit of acceleration is:",
    options: ["m/s", "m/s²", "N", "J"],
    answerIndex: 1,
  },
  {
    prompt: "An object's inertia is fundamentally measured by its:",
    options: ["Velocity", "Mass", "Density", "Volume"],
    answerIndex: 1,
  },
  {
    prompt: "Newton's first law of motion is also known as the law of:",
    options: [
      "Action and Reaction",
      "Inertia",
      "Momentum",
      "Universal Gravitation",
    ],
    answerIndex: 1,
  },
  {
    prompt: "The force that opposes motion between two surfaces in contact is:",
    options: ["Tension", "Normal Force", "Gravity", "Friction"],
    answerIndex: 3,
  },
  {
    prompt: "In uniform circular motion, which quantity remains constant?",
    options: ["Velocity", "Displacement", "Speed", "Acceleration"],
    answerIndex: 2,
  },
  {
    prompt: "The force pairs in Newton's Third Law act on:",
    options: [
      "The same body",
      "Different bodies",
      "The same point",
      "Only solid bodies",
    ],
    answerIndex: 1,
  },
  {
    prompt:
      "The mathematical expression F = ma represents which of Newton's laws?",
    options: ["First Law", "Second Law", "Third Law", "Law of Gravitation"],
    answerIndex: 1,
  },
  {
    prompt: "Which of these is a vector quantity?",
    options: ["Speed", "Distance", "Displacement", "Time"],
    answerIndex: 2,
  },
  {
    prompt:
      "The point through which the entire weight of an object appears to act is called the:",
    options: ["Centre of Mass", "Centre of Gravity", "Pivot", "Fulcrum"],
    answerIndex: 1,
  },
  {
    prompt:
      "For a body to be in equilibrium, the vector sum of all external forces acting on it must be:",
    options: ["1", "-1", "0", "Constant"],
    answerIndex: 2,
  },
  {
    prompt: "A body is in dynamic equilibrium when it is:",
    options: [
      "At rest",
      "Rotating",
      "Accelerating",
      "Moving with constant velocity",
    ],
    answerIndex: 3,
  },
  {
    prompt: "The turning effect of a force about a pivot is called:",
    options: ["Impulse", "Pressure", "Work", "Moment"],
    answerIndex: 3,
  },
  {
    prompt: "A ball resting at the bottom of a hemisphere is an example of:",
    options: [
      "Unstable equilibrium",
      "Stable equilibrium",
      "Neutral equilibrium",
      "Dynamic equilibrium",
    ],
    answerIndex: 1,
  },
  {
    prompt:
      "To increase the stability of an object, you should aim for a low centre of gravity and a:",
    options: [
      "Small base area",
      "Zero base area",
      "Large base area",
      "High centre of mass",
    ],
    answerIndex: 2,
  },
  {
    prompt:
      "In the Principle of Moments, the sum of clockwise moments equals the sum of:",
    options: [
      "Total force",
      "Net force",
      "Anti-clockwise moments",
      "Total weight",
    ],
    answerIndex: 2,
  },
  {
    prompt:
      "Which principle states that energy can be neither created nor destroyed, only transformed?",
    options: [
      "Law of Gravity",
      "Newton's Second Law",
      "Law of Conservation of Energy",
      "Law of Conservation of Mass",
    ],
    answerIndex: 2,
  },
  {
    prompt: "The ability to do work is defined as:",
    options: ["Power", "Force", "Momentum", "Energy"],
    answerIndex: 3,
  },
  {
    prompt:
      "The total linear momentum of an isolated system remains constant. This is the Law of Conservation of:",
    options: ["Energy", "Mass", "Linear Momentum", "Angular Momentum"],
    answerIndex: 2,
  },
  {
    prompt:
      "When a pendulum is at the peak of its swing, its kinetic energy is:",
    options: ["Maximum", "Zero", "Half of its potential energy", "Constant"],
    answerIndex: 1,
  },
  {
    prompt: "In an elastic collision, which form of energy is conserved?",
    options: [
      "Chemical Energy",
      "Thermal Energy",
      "Kinetic Energy",
      "Potential Energy",
    ],
    answerIndex: 2,
  },
  {
    prompt: "The formula E = mc² relates:",
    options: [
      "Force and acceleration",
      "Work and distance",
      "Power and time",
      "Mass and energy",
    ],
    answerIndex: 3,
  },
  {
    prompt:
      "When a book falls from a shelf, its potential energy is converted into:",
    options: [
      "Thermal energy",
      "Sound energy",
      "Kinetic energy",
      "Chemical energy",
    ],
    answerIndex: 2,
  },
  {
    prompt: "The S.I. unit of work and energy is the:",
    options: ["Watt", "Newton", "Volt", "Joule"],
    answerIndex: 3,
  },
  {
    prompt: "Power is defined as the rate of doing:",
    options: ["Force", "Energy", "Work", "Velocity"],
    answerIndex: 2,
  },
  {
    prompt:
      "A rocket's motion (propulsion) is an application of the principle of conservation of:",
    options: ["Energy", "Angular Momentum", "Linear Momentum", "Mass"],
    answerIndex: 2,
  },
  {
    prompt: "The mechanical energy of a system is the sum of its:",
    options: [
      "Heat and Work",
      "Mass and Velocity",
      "Kinetic and Potential energy",
      "Force and Acceleration",
    ],
    answerIndex: 2,
  },
  {
    prompt: "The first equation of motion gives the relation between:",
    options: [
      "Position and time",
      "Position and velocity",
      "Velocity and time",
      "Velocity and acceleration",
    ],
    answerIndex: 2,
  },
  {
    prompt: "What is the formula for calculating momentum (p)?",
    options: ["p = F × t", "p = F/a", "p = m × v", "p = 1/2 mv²"],
    answerIndex: 2,
  },
  {
    prompt:
      "The force of attraction between any two objects in the universe is described by the Law of:",
    options: [
      "Electromagnetism",
      "Conservation of Energy",
      "Universal Gravitation",
      "Relativity",
    ],
    answerIndex: 2,
  },
  {
    prompt: "Which of the following is a vector quantity?",
    options: ["Speed", "Distance", "Displacement", "Time"],
    answerIndex: 2,
  },
  {
    prompt: "The rate of change of momentum is equal to the applied:",
    options: ["Work", "Energy", "Power", "Force"],
    answerIndex: 3,
  },
  {
    prompt: "In uniformly accelerated motion, the acceleration is:",
    options: ["Zero", "Increasing", "Decreasing", "Constant"],
    answerIndex: 3,
  },
  {
    prompt: "A projectile follows a path that is:",
    options: ["Straight line", "Elliptical", "Circular", "Parabolic"],
    answerIndex: 3,
  },
  {
    prompt: "The force that causes an object to move in a circle is called:",
    options: [
      "Centrifugal force",
      "Centripetal force",
      "Frictional force",
      "Gravitational force",
    ],
    answerIndex: 1,
  },
  {
    prompt:
      "The property of a body to resist a change in its state of motion or rest is called:",
    options: ["Momentum", "Inertia", "Force", "Acceleration"],
    answerIndex: 1,
  },
  {
    prompt: "What is the S.I. unit for angular velocity?",
    options: ["m/s", "N·m", "rad/s", "Hz"],
    answerIndex: 2,
  },
  {
    prompt:
      "Which concept states that an object immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced?",
    options: [
      "Newton's Law of Motion",
      "Law of Gravitation",
      "Bernoulli's Principle",
      "Principle of Archimedes",
    ],
    answerIndex: 3,
  },
  {
    prompt: "Resonance occurs when the driving frequency matches the system's:",
    options: [
      "Damping coefficient",
      "Applied force",
      "Natural frequency",
      "Amplitude",
    ],
    answerIndex: 2,
  },
  {
    prompt: "The S.I. unit of power is the:",
    options: ["Ampere", "Joule", "Watt", "Kilogram"],
    answerIndex: 2,
  },
];

export const mathQuestions: MCQ[] = [
  {
    prompt: "Find x if logx 8 = 3.",
    options: ["2", "4", "3", "1"],
    answerIndex: 0,
  },
  {
    prompt: "_____ is an angle between 0° and 90°.",
    options: ["right angle", "acute angle", "straight angle", "reflex angle"],
    answerIndex: 1,
  },
  {
    prompt: "The sum of angles at a point is",
    options: ["90°", "60°", "360°", "180°"],
    answerIndex: 2,
  },
  {
    prompt: "Solve the equation (x − 4)(x + 9) = 0.",
    options: ["4, -9", "4, 9", "-4, -9", "-4, 9"],
    answerIndex: 0,
  },
  {
    prompt: "Write the number in standard form: 5000.",
    options: ["5×10³", "5.0×10⁴", "5.0×10²", "5×10²"],
    answerIndex: 0,
  },
  {
    prompt: "Calculate √(0.36)² + (0.54)² to 2 s.f.",
    options: ["0.65", "6.80", "7.0", "−6.80"],
    answerIndex: 0,
  },
  {
    prompt:
      "The antilog of {-2}.3869 is? (Note that the characteristic is negative and the mantissa is positive)",
    options: ["0.002437", "0.02437", "0.2437", "2.437"],
    answerIndex: 1,
  },
  {
    prompt: "Express 0.0078 in standard form.",
    options: ["7.8×10⁻³", "7.8×10⁻²", "7.8×10⁰", "7.8×10²"],
    answerIndex: 0,
  },
  {
    prompt: "Express 4081.0392 to 2 significant figures.",
    options: ["4100", "4081.04", "4081.02", "4080"],
    answerIndex: 0,
  },
  {
    prompt:
      "The length of a wall is 20 m to 1 s.f. Calculate possible percentage error in this measurement.",
    options: ["±0.25", "±25", "25", "5"],
    answerIndex: 1,
  },
  {
    prompt: "Estimate which has least value:",
    options: ["0.256/48", "2.56/0.48", "2.56/4.8", "49"],
    answerIndex: 0,
  },
  {
    prompt: "Express 36.8761 correct to 2 d.p.",
    options: ["36.88", "36.87", "36.90", "36.876"],
    answerIndex: 0,
  },
  {
    prompt: "Express 36.8761 correct to 2 s.f.",
    options: ["37", "36.9", "36", "30"],
    answerIndex: 0,
  },
  {
    prompt:
      "If πr² = 27π, calculate r to a suitable degree of accuracy. Take π = 3.1.",
    options: ["3.1", "9.3", "9.4", "9.1"],
    answerIndex: 0,
  },
  {
    prompt: "The logarithm of 1000 base 10 is",
    options: ["3", "5", "6", "9"],
    answerIndex: 0,
  },
  {
    prompt: "Given log₁₀2 = 0.3010, find log₁₀8.",
    options: ["0.9030", "0.9130", "0.9140", "0.8103"],
    answerIndex: 0,
  },
  {
    prompt: "Simplify 10² × 10³.",
    options: ["10⁵", "10⁶", "10⁷", "10⁸"],
    answerIndex: 0,
  },
  {
    prompt: "If log x = 2, what is x?",
    options: ["100", "10", "0", "501"],
    answerIndex: 0,
  },
  {
    prompt: "Find the characteristic of log₁₀0.045.",
    options: ["−2", "2", "7", "−5"],
    answerIndex: 0,
  },
  {
    prompt: "A line segment in a circle is a",
    options: ["chord", "diameter", "arc", "none"],
    answerIndex: 0,
  },
  {
    prompt: "What is the sum of opposite angles in a cyclic quadrilateral?",
    options: ["90°", "180°", "60°", "360°"],
    answerIndex: 1,
  },
  {
    prompt: "A quadrilateral inscribed in a circle is called",
    options: ["cyclic", "cyclic quadrilateral", "chord", "none"],
    answerIndex: 1,
  },
  {
    prompt: "A chord through center is called",
    options: ["chord", "diameter", "arc", "none"],
    answerIndex: 1,
  },
  {
    prompt: "An angle in a semicircle is always",
    options: ["60°", "right angle", "straight line", "180°"],
    answerIndex: 1,
  },
  {
    prompt: "General form of quadratic equation is",
    options: ["ax + b = 0", "ax² + bx + c = 0", "ax² − c = 0", "none"],
    answerIndex: 1,
  },
  {
    prompt: "Solve x² = 9.",
    options: ["x = ±5", "x = ±3", "x = ±7", "x = ±9"],
    answerIndex: 1,
  },
  {
    prompt: "What must be added to x² + 6x to complete the square?",
    options: ["6", "9", "10", "4"],
    answerIndex: 1,
  },
  {
    prompt: "Simplify √50.",
    options: ["10", "5√2", "10√2", "3√2"],
    answerIndex: 1,
  },
  {
    prompt: "Rationalize the denominator of 1/√3.",
    options: ["5/2", "√3/3", "√3/2", "2/√3"],
    answerIndex: 1,
  },
  {
    prompt: "Evaluate √8 + √18.",
    options: ["3", "5√2", "2", "1"],
    answerIndex: 1,
  },
  {
    prompt: "Multiply (√5 + 2)(√5 − 2).",
    options: ["2", "3", "1", "0"],
    answerIndex: 2,
  },
  {
    prompt: "If log₂x = 5 find x.",
    options: ["2", "5", "32", "30"],
    answerIndex: 2,
  },
  {
    prompt: "Simplify (x²)³.",
    options: ["4", "8", "x⁶", "x⁵"],
    answerIndex: 2,
  },
  {
    prompt: "Evaluate 16½.",
    options: ["1", "2", "4", "3"],
    answerIndex: 2,
  },
  {
    prompt: "Evaluate 5⁰.",
    options: ["2", "3", "1", "4"],
    answerIndex: 2,
  },
  {
    prompt: "Solve 3x − 5 = 10.",
    options: ["x = 2", "x = 3", "x = 5", "x = 6"],
    answerIndex: 2,
  },
  {
    prompt: "Find roots of x² − 4 = 0.",
    options: ["x = ±1", "x = ±3", "x = ±2", "x = ±4"],
    answerIndex: 2,
  },
  {
    prompt:
      "If a number is doubled and 3 is added, the result is 15, what is the number?",
    options: ["4", "7", "6", "5"],
    answerIndex: 2,
  },
  {
    prompt: "Convert XCIV to a standard number.",
    options: ["104", "114", "94", "100"],
    answerIndex: 2,
  },
  {
    prompt: "How many decimal places are in 0.0075?",
    options: ["2", "3", "4", "5"],
    answerIndex: 2,
  },
];

export const englishQuestions: MCQ[] = [
  // 3
  {
    prompt:
      "Due to poor visibility, all aircrafts were grounded at the Kano airport for two days. This means that:",
    options: [
      "All aircrafts had mechanical problems",
      "The runway of Kano airport was damaged",
      "No aircraft could take off",
      "There was a visible disturbance at Kano airport",
    ],
    answerIndex: 2,
  },
  // 4
  {
    prompt:
      "Getting six distinctions in your mock examination is praiseworthy, but do not allow it to get into your head. This means that the good result:",
    options: [
      "Has made you mad",
      "Has not bothered you",
      "Could be better",
      "Should not make you conceited",
    ],
    answerIndex: 3,
  },
  // 5
  {
    prompt:
      "Segun held the audience spell bound with his performance. This means that:",
    options: [
      "The play was a good one",
      "All the actors put up a good performance",
      "All the actors except Segun performed very well",
      "Members of the audience were captivated by Segun’s performance",
    ],
    answerIndex: 3,
  },
  // 6
  {
    prompt:
      "Matters came to a head when the man accused his wife of infidelity. This means that the:",
    options: [
      "Accusation worsened the relationship between the couple",
      "Couple were living peacefully before the accusation",
      "Husband hit the wife on the head because of her misbehaviour",
      "Wife had been proved to be unfaithful by the husband",
    ],
    answerIndex: 0,
  },
  // 7
  {
    prompt:
      "The way the young pupils were chasing the poor mad woman made my blood boil. This means that:",
    options: [
      "The pupils were made to chase the poor woman",
      "I was agitated about the actions of the pupils",
      "The mad woman was angry with the pupils",
      "My boil was actually boiling because the pupils maltreated the mad woman",
    ],
    answerIndex: 1,
  },
  // 8
  {
    prompt:
      "The former chairman has no moral right to criticize the present chairman because he also has a skeleton in his cupboard. This means that:",
    options: [
      "The former chairman has an unpleasant secret that is hidden",
      "The present chairman has not done anything wrong so far",
      "The former chairman maintained a moral standard during his last tenure",
      "The former chairman left a very terrifying skeleton in a large wardrobe",
    ],
    answerIndex: 0,
  },
  // 9
  {
    prompt: "The Supreme Court __overturned__ the ruling of the high court.",
    options: ["Upheld", "Nullified", "Agreed", "Justified"],
    answerIndex: 1,
  },
  // 10 (5 options → keep A,B,C,E)
  {
    prompt: "The ornament should be handled with care because it is __fragile__.",
    options: ["Expensive", "Uncommon", "Golden", "Delicate"],
    answerIndex: 3,
  },
  // 11 (5 options → keep A–D, correct is C)
  {
    prompt:
      "The minister announced that the government would soon make a law to prohibit the showing of __obscene__ films.",
    options: ["Violent", "Dangerous", "Immoral", "Frightful"],
    answerIndex: 2,
  },
  // 12 (5 options → keep A–D)
  {
    prompt: "Her eloping with a man is a __stigma__ to the family.",
    options: ["Disgrace", "Pride", "Calamity", "Disappointment"],
    answerIndex: 0,
  },
  // 13 (5 options → keep A–D, correct C)
  {
    prompt: "His approach to work is rather __perfunctory__.",
    options: ["Careful", "Serious", "Careless", "Encouraging"],
    answerIndex: 2,
  },
  // 14 (5 options → keep A–D)
  {
    prompt:
      "The retiring officer’s contribution towards the growth of the company was __invaluable__.",
    options: ["Inestimable", "Unnoticeable", "Negligible", "Inconsequential"],
    answerIndex: 0,
  },
  // 15 (5 options → keep A,B,C,E)
  {
    prompt:
      "The general’s response to the question on whether he would retire from the army was __evasive__.",
    options: ["Clear", "Undecided", "Definite", "Elusive"],
    answerIndex: 3,
  },
  // 16 (5 options → keep A–D)
  {
    prompt:
      "He poured a lot of __invectives__ in a speech that was supposed to be a vote of thanks.",
    options: ["Praises", "Requests", "Denials", "Curses"],
    answerIndex: 3,
  },
  // 17 (5 options → keep A–D)
  {
    prompt:
      "The politician was given a __tumultuous__ welcome when he came to address the rally.",
    options: ["Pleasant", "Noisy", "Discouraging", "Well organized"],
    answerIndex: 1,
  },
  // 18
  {
    prompt: "Everyone must be ____ bed by 9 pm.",
    options: ["On", "Over", "Inside", "In"],
    answerIndex: 3,
  },
  // 19
  {
    prompt: "Tekena was told not to allow pleasure to interfere ____ his duty.",
    options: ["On", "Over", "With", "Beside"],
    answerIndex: 2,
  },
  // 20
  {
    prompt: "The pupils were advised not to laugh ____ mad people.",
    options: ["At", "On", "Over", "In"],
    answerIndex: 0,
  },
  // 21
  {
    prompt:
      "If you want to succeed in life, you will have to shake ______ your lazy habits.",
    options: ["Against", "If", "Over", "Off"],
    answerIndex: 3,
  },
  // 22
  {
    prompt: "It is high time you ________ smoking.",
    options: ["Stopped", "Should stop", "Must stop", "Stop"],
    answerIndex: 0,
  },
  // 23
  {
    prompt: "The office ______ he works is fully air-conditioned.",
    options: ["To which", "By which", "Where", "That"],
    answerIndex: 2,
  },
  // 24
  {
    prompt:
      "I do not like to flatter people, but I must say that Boma is _______ beautiful girl in the school.",
    options: ["A", "A more", "Very", "The most"],
    answerIndex: 3,
  },
  // 25
  {
    prompt: "He has stopped drinking, _______?",
    options: ["Does he?", "Hasn’t he?", "Doesn’t he?", "Did he?"],
    answerIndex: 1,
  },
  // 26
  {
    prompt: "_________ in his right senses will give shelter to a known thief.",
    options: ["Somebody", "Everybody", "Nobody", "Someone"],
    answerIndex: 2,
  },
  // 27
  {
    prompt: "The dress he wore was ____ praise.",
    options: ["Quite", "-", "Much", "More"],
    answerIndex: 0,
  },
  // 28
  {
    prompt: "cantEEn",
    options: ["Seen", "Ebb", "Leaf", "Receive"],
    answerIndex: 3,
  },
  // 29
  {
    prompt: "sAW",
    options: ["Sow", "Low", "Woo", "Hawk"],
    answerIndex: 3,
  },
  // 30 (D is blank in doc → pad with “-”)
  {
    prompt: "bOIl",
    options: ["Cow", "Coy", "Buoyancy", "-"],
    answerIndex: 1,
  },
  // 31
  {
    prompt: "hOUse",
    options: ["Cow", "Hour", "Tower", "Sour"],
    answerIndex: 0,
  },
  // 32
  {
    prompt: "CHagrin",
    options: ["Challenge", "Chemistry", "Shelf", "Catch"],
    answerIndex: 2,
  },
  // 33
  {
    prompt: "PLait",
    options: ["Lump", "Apply", "Police", "Prank"],
    answerIndex: 3,
  },
  // 34
  {
    prompt: "sheLF",
    options: ["Halves", "Cough", "Shell", "Shears"],
    answerIndex: 3,
  },
  // 35 (only 3 options → pad with “-”)
  {
    prompt: "It's high time you ______ seeing her.",
    options: ["Stop", "Will stop", "Stopping", "-"],
    answerIndex: 0,
  },
  // 36
  {
    prompt: "Idawari enjoys _____ soccer.",
    options: ["To play", "Play", "Playing", "To be playing"],
    answerIndex: 2,
  },
  // 37
  {
    prompt:
      "The teacher warned the students not to take her kindness for granted. This means that:",
    options: [
      "She is very strict",
      "They should not abuse her kindness",
      "She dislikes all the students",
      "They should help her more",
    ],
    answerIndex: 1,
  },
  // 38
  {
    prompt:
      "The workers decided to down tools because of poor wages. This means that they:",
    options: [
      "Collected new tools",
      "Refused to work",
      "Broke the tools",
      "Changed their work place",
    ],
    answerIndex: 1,
  },
  // 39
  {
    prompt:
      "A good citizen must obey the laws of the country. This means that a good citizen should:",
    options: [
      "Refuse to pay taxes",
      "Disobey authorities",
      "Respect the rules of the nation",
      "Travel out of the country",
    ],
    answerIndex: 2,
  },
  // 40
  {
    prompt:
      "The pupils applauded the principal for his __magnanimity__. The underlined word means:",
    options: ["Wickedness", "Generosity", "Laziness", "Pride"],
    answerIndex: 1,
  },
];

// Optional: export grouped by subject code used in backend
export const questionBank = {
  BIO: biologyQuestions,
  CHE: chemistryQuestions,
  ECO: economicsQuestions,
  GOV: governmentQuestions,
  CIV: civicEducationQuestions,
  PHY: physicsQuestions,
  MTH: mathQuestions,
  ENG: englishQuestions,
};
export default questionBank;
