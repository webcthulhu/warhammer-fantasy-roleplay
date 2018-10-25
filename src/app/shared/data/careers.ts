import {SKILLS} from './skills';
import {SPECIES} from './species';
import {TALENTS} from './talents';

export enum CLASSES {
  ACADEMICS = 'academics',
  BURGHERS = 'burghers',
  COURTIERS = 'courtiers',
  PEASANTS = 'peasants',
  RANGERS = 'rangers',
  RIVERFOLK = 'riverfolk',
  ROGUES = 'rogues',
  WARRIORS = 'warriors'
}

export enum CAREERS {
  APOTHECARY = 'apothecary',
  ENGINEER = 'engineer',
  LAWYER = 'lawyer',
  NUN = 'nun',
  PHYSICIAN = 'physician',
  PRIEST = 'priest',
  SCHOLAR = 'scholar',
  WIZARD = 'wizard',
  AGITATOR = 'agitator',
  ARTISAN = 'artisan',
  BEGGAR = 'beggar',
  INVESTIGATOR = 'investigator',
  MERCHANT = 'merchant',
  RAT_CATCHER = 'rat catcher',
  TOWNSMAN = 'townsman',
  WATCHMAN = 'watchman',
  ADVISOR = 'advisor',
  ARTIST = 'artist',
  DUELIST = 'duelist',
  ENVOY = 'envoy',
  NOBLE = 'noble',
  SERVANT = 'servant',
  SPY = 'spy',
  WARDEN = 'warden',
  BAILIFF = 'bailiff',
  HEDGE_WITCH = 'hedge witch',
  HERBALIST = 'herbalist',
  HUNTER = 'hunter',
  MINER = 'miner',
  MYSTIC = 'mystic',
  SCOUT = 'scout',
  VILLAGER = 'villager',
  BOUNTY_HUNTER = 'bounty hunter',
  COACHMAN = 'coachman',
  ENTERTAINER = 'entertainer',
  FLAGELLANT = 'flagellant',
  MESSENGER = 'messenger',
  PEDLAR = 'pedlar',
  ROAD_WARDEN = 'road warden',
  WITCH_HUNTER = 'witch hunter',
  BOATMAN = 'boatman',
  HUFFER = 'huffer',
  RIVERWARDEN = 'riverwarden',
  RIVERWOMAN = 'riverwoman',
  SEAMAN = 'seaman',
  SMUGGLER = 'smuggler',
  STEVEDORE = 'stevedore',
  WRECKER = 'wrecker',
  BAWD = 'bawd',
  CHARLATAN = 'charlatan',
  FENCE = 'fence',
  GRAVE_ROBBER = 'grave robber',
  OUTLAW = 'outlaw',
  RACKETEER = 'racketeer',
  THIEF = 'thief',
  WITCH = 'witch',
  CAVALRYMAN = 'cavalryman',
  GUARD = 'guard',
  KNIGHT = 'knight',
  PIT_FIGHTER = 'pit fighter',
  PROTAGONIST = 'protagonist',
  SOLDIER = 'soldier',
  SLAYER = 'slayer',
  WARRIOR_PRIEST = 'warrior priest'
}

export enum STATUS {
  BRASS = 'brass',
  SILVER = 'silver',
  GOLD = 'gold'
}

export interface ICareer {
  class: CLASSES;
  name: CAREERS;
  limitations: SPECIES[];
  characteristics: number[];
  levels: string[];
  status: any;
  skills: any[][];
  talents?: string[][];
  trappings?: string[][];
}

export const Careers: ICareer[] = [
  {
    class: CLASSES.ACADEMICS,
    name: CAREERS.APOTHECARY,
    limitations: [SPECIES.HUMAN, SPECIES.HALFLING, SPECIES.DWARF, SPECIES.HIGH_ELF],
    characteristics: [0, 0, 0, 1, 3, 0, 1, 1, 4, 2],
    levels: ['apprentice apothecary', 'apothecary', 'master apothecary', 'apothecary-general'],
    status: [[STATUS.BRASS, 3], [STATUS.SILVER, 1], [STATUS.SILVER, 3], [STATUS.GOLD, 1]],
    skills: [
      [
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.HEAL,
        SKILLS.LANGUAGE_CLASSICAL,
        SKILLS.LORE_CHEMISTRY,
        SKILLS.LORE_MEDICINE,
        SKILLS.LORE_PLANTS,
        SKILLS.TRADE_APOTHECARY,
        SKILLS.TRADE_POISONER
      ],
      [
        SKILLS.CHARM,
        SKILLS.HAGGLE,
        SKILLS.LORE_SCIENCE,
        SKILLS.GOSSIP,
        SKILLS.LANGUAGE_GUILDER,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.INTUITION,
        SKILLS.LEADERSHIP,
        SKILLS.RESEARCH,
        SKILLS.SECRET_SIGNS_GUILDER
      ],
      [
        SKILLS.INTIMIDATE,
        SKILLS.RIDE_HORSE
      ]
    ],
    talents: [
      [
        TALENTS.CONCOCT,
        TALENTS.CRAFTSMAN_APOTHECARY,
        TALENTS.ETIQUETTE_SCHOLAR,
        TALENTS.READ_WRITE
      ],
      [
        TALENTS.CRIMINAL,
        TALENTS.DEALMAKER,
        TALENTS.ETIQUETTE_GUILDER,
        TALENTS.PHARMACIST
      ],
      [
        TALENTS.BOOKISH,
        TALENTS.MASTER_TRADESMAN_APOTHECARY,
        TALENTS.RESISTANCE_POISON,
        TALENTS.SAVVY
      ],
      [
        TALENTS.ACUTE_SENSE_TASTE,
        TALENTS.COOLHEADED,
        TALENTS.MASTER_TRADESMAN_POISONER,
        TALENTS.SAVANT_APOTHECARY
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.ACADEMICS,
    name: CAREERS.ENGINEER,
    limitations: [SPECIES.HUMAN, SPECIES.HALFLING, SPECIES.DWARF],
    characteristics: [0, 1, 0, 3, 2, 0, 1, 1, 4, 0],
    levels: ['student engineer', 'engineer', 'master engineer', 'chartered engineer'],
    status: [[STATUS.BRASS, 4], [STATUS.SILVER, 2], [STATUS.SILVER, 4], [STATUS.GOLD, 2]],
    skills: [
      [
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.COOL,
        SKILLS.ENDURANCE,
        SKILLS.LANGUAGE_CLASSICAL,
        SKILLS.LORE_ENGINEERING,
        SKILLS.PERCEPTION,
        SKILLS.RANGED_BLACKPOWDER,
        SKILLS.TRADE_ENGINEER
      ],
      [
        SKILLS.DRIVE,
        SKILLS.DODGE,
        SKILLS.NAVIGATION,
        SKILLS.RANGED_ENGINEERING,
        SKILLS.RESEARCH,
        SKILLS.LANGUAGE_GUILDER
      ],
      [
        SKILLS.LANGUAGE_KHAZALID,
        SKILLS.LEADERSHIP,
        SKILLS.RIDE_HORSE,
        SKILLS.SECRET_SIGNS_GUILDER,
      ],
      [
        SKILLS.LANGUAGE_ANY,
        SKILLS.LORE_ANY
      ]
    ],
    talents: [
      [
        TALENTS.ARTISTIC,
        TALENTS.GUNNER,
        TALENTS.READ_WRITE,
        TALENTS.TINKER
      ],
      [
        TALENTS.CRAFTSMAN_ENGINEER,
        TALENTS.ETIQUETTE_GUILDER,
        TALENTS.MARKSMAN,
        TALENTS.ORIENTATION
      ],
      [
        TALENTS.ETIQUETTE_SCHOLAR,
        TALENTS.MASTER_TRADESMAN_ENGINEER,
        TALENTS.SNIPER,
        TALENTS.SUPER_NUMERATE
      ],
      [
        TALENTS.MAGNUS_OPUS,
        TALENTS.RAPID_RELOAD,
        TALENTS.SAVANT_ENGINEERING,
        TALENTS.UNSHAKABLE
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.ACADEMICS,
    name: CAREERS.LAWYER,
    limitations: [SPECIES.HUMAN, SPECIES.DWARF, SPECIES.HALFLING, SPECIES.HIGH_ELF],
    characteristics: [0, 0, 0, 4, 1, 0, 1, 1, 3, 2],
    levels: ['student lawyer', 'lawyer', 'barrister', 'judge'],
    status: [[STATUS.BRASS, 4], [STATUS.SILVER, 3], [STATUS.GOLD, 1], [STATUS.GOLD, 2]],
    skills: [
      [
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.ENDURANCE,
        SKILLS.HAGGLE,
        SKILLS.LANGUAGE_CLASSICAL,
        SKILLS.LORE_LAW,
        SKILLS.LORE_THEOLOGY,
        SKILLS.PERCEPTION,
        SKILLS.RESEARCH
      ],
      [
        SKILLS.BRIBERY,
        SKILLS.CHARM,
        SKILLS.GOSSIP,
        SKILLS.INTUITION,
        SKILLS.LANGUAGE_GUILDER,
        SKILLS.SECRET_SIGNS_GUILDER
      ],
      [
        SKILLS.ART_WRITING,
        SKILLS.ENTERTAIN_SPEECHES,
        SKILLS.INTIMIDATE,
        SKILLS.LORE_ANY
      ],
      [
        SKILLS.COOL,
        SKILLS.LORE_ANY
      ]
    ],
    talents: [
      [
        TALENTS.BLATHER,
        TALENTS.ETIQUETTE_SCHOLAR,
        TALENTS.READ_WRITE,
        TALENTS.SPEEDREADER
      ],
      [
        TALENTS.ARGUMENTATIVE,
        TALENTS.CRIMINAL,
        TALENTS.ETIQUETTE_GUILDER,
        TALENTS.SUAVE
      ],
      [
        TALENTS.BOOKISH,
        TALENTS.CAT_TONGUED,
        TALENTS.IMPASSIONED_ZEAL,
        TALENTS.SAVVY
      ],
      [
        TALENTS.COMMANDING_PRESENCE,
        TALENTS.KINGPIN,
        TALENTS.SAVANT_LAW,
        TALENTS.WEALTHY
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.ACADEMICS,
    name: CAREERS.NUN,
    limitations: [SPECIES.HUMAN],
    characteristics: [0, 0, 0, 4, 3, 0, 1, 1, 2, 1],
    levels: ['novitiate', 'nun', 'abbess', 'prioress general'],
    status: [[STATUS.BRASS, 1], [STATUS.BRASS, 4], [STATUS.SILVER, 2], [STATUS.SILVER, 5]],
    skills: [
      [
        SKILLS.ART_CALLIGRAPHY,
        SKILLS.COOL,
        SKILLS.ENDURANCE,
        SKILLS.ENTERTAIN_STORYTELLING,
        SKILLS.GOSSIP,
        SKILLS.HEAL,
        SKILLS.LORE_THEOLOGY,
        SKILLS.PRAY
      ],
      [
        SKILLS.CHARM,
        SKILLS.MELEE_ANY,
        SKILLS.RESEARCH,
        SKILLS.TRADE_BREWER,
        SKILLS.TRADE_HERBALIST,
        SKILLS.TRADE_VINTNER
      ],
      [
        SKILLS.LEADERSHIP,
        SKILLS.LORE_LOCAL,
        SKILLS.LORE_POLITICS,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.LANGUAGE_ANY,
        SKILLS.LORE_ANY
      ]
    ],
    talents: [
      [
        TALENTS.BLESS_ANY,
        TALENTS.STONE_SOUP,
        TALENTS.PANHANDLE,
        TALENTS.READ_WRITE
      ],
      [
        TALENTS.ETIQUETTE_CULTISTS,
        TALENTS.FIELD_DRESSING,
        TALENTS.HOLY_VISIONS,
        TALENTS.INVOKE_ANY
      ],
      [
        TALENTS.RESISTANCE_ANY,
        TALENTS.ROBUST,
        TALENTS.SAVANT_THEOLOGY,
        TALENTS.STOUT_HEARTED
      ],
      [
        TALENTS.COMMANDING_PRESENCE,
        TALENTS.IRON_WILL,
        TALENTS.PURE_SOUL,
        TALENTS.STRONG_MINDED
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.ACADEMICS,
    name: CAREERS.PHYSICIAN,
    limitations: [SPECIES.HUMAN, SPECIES.DWARF, SPECIES.HALFLING, SPECIES.HIGH_ELF],
    characteristics: [0, 0, 0, 0, 3, 4, 1, 1, 1, 2],
    levels: ['physician\'s apprentice', 'physician', 'doktor', 'court physician'],
    status: [[STATUS.BRASS, 4], [STATUS.SILVER, 3], [STATUS.SILVER, 5], [STATUS.GOLD, 1]],
    skills: [
      [
        SKILLS.BRIBERY,
        SKILLS.COOL,
        SKILLS.DRIVE,
        SKILLS.ENDURANCE,
        SKILLS.GOSSIP,
        SKILLS.HEAL,
        SKILLS.PERCEPTION,
        SKILLS.SLEIGHT_OF_HAND
      ],
      [
        SKILLS.CHARM,
        SKILLS.HAGGLE,
        SKILLS.LANGUAGE_GUILDER,
        SKILLS.LORE_ANATOMY,
        SKILLS.LORE_MEDICINE,
        SKILLS.TRADE_BARBER
      ],
      [
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.INTIMIDATE,
        SKILLS.LEADERSHIP,
        SKILLS.RESEARCH
      ],
      [
        SKILLS.LORE_NOBLE,
        SKILLS.PERFORM_DANCING
      ]
    ],
    talents: [
      [
        TALENTS.BOOKISH,
        TALENTS.FIELD_DRESSING,
        TALENTS.READ_WRITE,
        TALENTS.STRIKE_TO_STUN
      ],
      [
        TALENTS.COOLHEADED,
        TALENTS.CRIMINAL,
        TALENTS.ETIQUETTE_GUILDER,
        TALENTS.SURGERY
      ],
      [
        TALENTS.ETIQUETTE_SCHOLAR,
        TALENTS.RESISTANCE_DISEASE,
        TALENTS.SAVVY,
        TALENTS.STRIKE_TO_INJURE
      ],
      [
        TALENTS.ETIQUETTE_NOBLES,
        TALENTS.NIMBLE_FINGERED,
        TALENTS.SAVANT_MEDICINE,
        TALENTS.STRONG_MINDED
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.ACADEMICS,
    name: CAREERS.PRIEST,
    limitations: [SPECIES.HUMAN],
    characteristics: [0, 0, 0, 1, 4, 1, 0, 3, 1, 2],
    levels: ['initiate', 'priest', 'high priest', 'lector'],
    status: [[STATUS.BRASS, 2], [STATUS.SILVER, 1], [STATUS.GOLD, 1], [STATUS.GOLD, 2]],
    skills: [
      [
        SKILLS.ATHLETICS,
        SKILLS.COOL,
        SKILLS.ENDURANCE,
        SKILLS.INTUITION,
        SKILLS.LORE_THEOLOGY,
        SKILLS.PERCEPTION,
        SKILLS.PRAY,
        SKILLS.RESEARCH
      ],
      [
        SKILLS.CHARM,
        SKILLS.ENTERTAIN_STORYTELLING,
        SKILLS.GOSSIP,
        SKILLS.HEAL,
        SKILLS.INTIMIDATE,
        SKILLS.MELEE_BASIC
      ],
      [
        SKILLS.ART_WRITING,
        SKILLS.ENTERTAIN_SPEECHES,
        SKILLS.LEADERSHIP,
        SKILLS.LORE_HERALDRY
      ],
      [
        SKILLS.LANGUAGE_ANY,
        SKILLS.LORE_POLITICS
      ]
    ],
    talents: [
      [
        TALENTS.BLESS_ANY,
        TALENTS.HOLY_VISIONS,
        TALENTS.READ_WRITE,
        TALENTS.SUAVE
      ],
      [
        TALENTS.BLATHER,
        TALENTS.BOOKISH,
        TALENTS.ETIQUETTE_CULTISTS,
        TALENTS.INVOKE_ANY
      ],
      [
        TALENTS.ACUTE_SENSE_ANY,
        TALENTS.HATRED_ANY,
        TALENTS.IMPASSIONED_ZEAL,
        TALENTS.STRONG_MINDED
      ],
      [
        TALENTS.MASTER_ORATOR,
        TALENTS.PURE_SOUL,
        TALENTS.RESISTANCE_ANY,
        TALENTS.SAVANT_THEOLOGY
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.ACADEMICS,
    name: CAREERS.SCHOLAR,
    limitations: [SPECIES.HUMAN, SPECIES.DWARF, SPECIES.HALFLING, SPECIES.HIGH_ELF, SPECIES.WOOD_ELF],
    characteristics: [0, 0, 0, 1, 2, 0, 4, 1, 1, 3],
    levels: ['student', 'scholar', 'fellow', 'professor'],
    status: [[STATUS.BRASS, 3], [STATUS.SILVER, 2], [STATUS.SILVER, 5], [STATUS.GOLD, 1]],
    skills: [
      [
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.ENTERTAIN_STORYTELLING,
        SKILLS.GAMBLE,
        SKILLS.GOSSIP,
        SKILLS.HAGGLE,
        SKILLS.LANGUAGE_CLASSICAL,
        SKILLS.LORE_ANY,
        SKILLS.RESEARCH
      ],
      [
        SKILLS.ART_WRITING,
        SKILLS.INTUITION,
        SKILLS.LANGUAGE_ANY,
        SKILLS.LORE_ANY,
        SKILLS.PERCEPTION,
        SKILLS.TRADE_ANY
      ],
      [
        SKILLS.ENTERTAIN_LECTURE,
        SKILLS.INTIMIDATE,
        SKILLS.LANGUAGE_ANY,
        SKILLS.LORE_ANY
      ],
      [
        SKILLS.ENTERTAIN_RHETORIC,
        SKILLS.LORE_ANY
      ]
    ],
    talents: [
      [
        TALENTS.CAROUSER,
        TALENTS.READ_WRITE,
        TALENTS.SAVVY,
        TALENTS.SUPER_NUMERATE
      ],
      [
        TALENTS.BOOKISH,
        TALENTS.ETIQUETTE_SCHOLAR,
        TALENTS.SPEEDREADER,
        TALENTS.SUAVE
      ],
      [
        TALENTS.LINGUISTICS,
        TALENTS.PUBLIC_SPEAKER,
        TALENTS.SAVANT_ANY,
        TALENTS.TOWER_OF_MEMORIES
      ],
      [
        TALENTS.MAGNUS_OPUS,
        TALENTS.MASTER_ORATOR,
        TALENTS.SAVANT_ANY,
        TALENTS.SHARP
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.ACADEMICS,
    name: CAREERS.WIZARD,
    limitations: [],
    characteristics: [1, 0, 0, 0, 3, 2, 0, 1, 1, 4],
    levels: ['wizard\'s apprentice', 'wizard', 'master wizard', 'wizard lord'],
    status: [[STATUS.BRASS, 3], [STATUS.SILVER, 3], [STATUS.GOLD, 1], [STATUS.GOLD, 2]],
    /* TODO: check channelling and arcane magic */
    skills: [
      [
        SKILLS.CHANNELLING_ANY,
        SKILLS.DODGE,
        SKILLS.INTUITION,
        SKILLS.LANGUAGE_MAGICK,
        SKILLS.LORE_MAGIC,
        SKILLS.MELEE_BASIC,
        SKILLS.MELEE_POLEARM,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.CHARM,
        SKILLS.COOL,
        SKILLS.GOSSIP,
        SKILLS.INTIMIDATE,
        SKILLS.LANGUAGE_BATTLE,
        SKILLS.LANGUAGE_ANY
      ],
      [
        SKILLS.ANIMAL_CARE,
        SKILLS.EVALUATE,
        SKILLS.LORE_WARFARE,
        SKILLS.RIDE_HORSE
      ],
      [
        SKILLS.LANGUAGE_ANY,
        SKILLS.LORE_ANY
      ]
    ],
    talents: [
      [
        TALENTS.AETHYRIC_ATTUNEMENT,
        TALENTS.PETTY_MAGIC,
        TALENTS.READ_WRITE,
        TALENTS.SECOND_SIGHT
      ],
      [
        TALENTS.ARCANE_MAGIC_ANY,
        TALENTS.DETECT_ARTIFACT,
        TALENTS.FAST_HANDS,
        TALENTS.SIXTH_SENSE
      ],
      [
        TALENTS.DUAL_WIELDER,
        TALENTS.INSTINCTIVE_DICTION,
        TALENTS.MAGICAL_SENSE,
        TALENTS.MENACING
      ],
      [
        TALENTS.COMBAT_AWARE,
        TALENTS.FRIGHTENING,
        TALENTS.IRON_WILL,
        TALENTS.WAR_WIZARD
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.BURGHERS,
    name: CAREERS.AGITATOR,
    limitations: [],
    characteristics: [3, 1, 0, 0, 4, 2, 0, 1, 0, 1],
    levels: ['pamphleteer', 'agitator', 'rabble rouser', 'demagogue'],
    status: [[STATUS.BRASS, 1], [STATUS.BRASS, 2], [STATUS.BRASS, 3], [STATUS.BRASS, 5]],
    skills: [
      [
        SKILLS.ART_WRITING,
        SKILLS.BRIBERY,
        SKILLS.CHARM,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.GOSSIP,
        SKILLS.HAGGLE,
        SKILLS.LORE_POLITICS,
        SKILLS.TRADE_PRINTING
      ],
      [
        SKILLS.COOL,
        SKILLS.DODGE,
        SKILLS.ENTERTAIN_STORYTELLING,
        SKILLS.GAMBLE,
        SKILLS.INTUITION,
        SKILLS.LEADERSHIP
      ],
      [
        SKILLS.ATHLETICS,
        SKILLS.INTIMIDATE,
        SKILLS.MELEE_BRAWLING,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.LORE_HERALDRY,
        SKILLS.RIDE_HORSE
      ]
    ],
    talents: [
      [
        TALENTS.BLATHER,
        TALENTS.GREGARIOUS,
        TALENTS.PANHANDLE,
        TALENTS.READ_WRITE
      ],
      [
        TALENTS.ALLEY_CAT,
        TALENTS.ARGUMENTATIVE,
        TALENTS.IMPASSIONED_ZEAL,
        TALENTS.PUBLIC_SPEAKER
      ],
      [
        TALENTS.CAT_TONGUED,
        TALENTS.DIRTY_FIGHTING,
        TALENTS.FLEE,
        TALENTS.STEP_ASIDE
      ],
      [
        TALENTS.ETIQUETTE_ANY,
        TALENTS.MASTER_ORATOR,
        TALENTS.SCHEMER,
        TALENTS.SUAVE
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.BURGHERS,
    name: CAREERS.ARTISAN,
    limitations: [],
    characteristics: [0, 0, 1, 1, 0, 0, 1, 4, 3, 2],
    levels: ['apprentice artisan', 'artisan', 'master artisan', 'guildmaster'],
    status: [[STATUS.BRASS, 2], [STATUS.SILVER, 1], [STATUS.SILVER, 3], [STATUS.GOLD, 1]],
    skills: [
      [
        SKILLS.ATHLETICS,
        SKILLS.COOL,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.DODGE,
        SKILLS.ENDURANCE,
        SKILLS.EVALUATE,
        SKILLS.STEALTH_URBAN,
        SKILLS.TRADE_ANY
      ],
      [
        SKILLS.CHARM,
        SKILLS.HAGGLE,
        SKILLS.LORE_LOCAL,
        SKILLS.GOSSIP,
        SKILLS.LANGUAGE_GUILDER,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.INTUITION,
        SKILLS.LEADERSHIP,
        SKILLS.RESEARCH,
        SKILLS.SECRET_SIGNS_GUILDER
      ],
      [
        SKILLS.BRIBERY,
        SKILLS.INTIMIDATE
      ]
    ],
    talents: [
      [
        TALENTS.ARTISTIC,
        TALENTS.CRAFTSMAN_ANY,
        TALENTS.STRONG_BACK,
        TALENTS.VERY_STRONG
      ],
      [
        TALENTS.DEALMAKER,
        TALENTS.ETIQUETTE_GUILDER,
        TALENTS.NIMBLE_FINGERED,
        TALENTS.STURDY
      ],
      [
        [TALENTS.ACUTE_SENSE_TASTE, TALENTS.ACUTE_SENSE_TOUCH ].join(' or '),
        TALENTS.MASTER_TRADESMAN_ANY,
        TALENTS.READ_WRITE,
        TALENTS.TINKER
      ],
      [
        TALENTS.BRIBER,
        TALENTS.MAGNUS_OPUS,
        TALENTS.PUBLIC_SPEAKER,
        TALENTS.SCHEMER
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.BURGHERS,
    name: CAREERS.BEGGAR,
    limitations: [],
    characteristics: [3, 0, 0, 1, 4, 1, 0, 0, 2, 1],
    levels: ['pauper', 'beggar', 'master beggar', 'beggar king'],
    status: [[STATUS.BRASS, 0], [STATUS.BRASS, 2], [STATUS.BRASS, 4], [STATUS.SILVER, 2]],
    skills: [
      [
        SKILLS.ATHLETICS,
        SKILLS.CHARM,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.COOL,
        SKILLS.DODGE,
        SKILLS.ENDURANCE,
        SKILLS.INTUITION,
        SKILLS.STEALTH_URBAN
      ],
      [
        SKILLS.ENTERTAIN_ACTING,
        SKILLS.ENTERTAIN_ANY,
        SKILLS.GOSSIP,
        SKILLS.HAGGLE,
        SKILLS.PERCEPTION,
        SKILLS.SLEIGHT_OF_HAND
      ],
      [
        SKILLS.CHARM_ANIMAL,
        SKILLS.LEADERSHIP,
        SKILLS.LORE_LOCAL,
        SKILLS.SECRET_SIGNS_VAGABOND
      ],
      [
        SKILLS.BRIBERY,
        SKILLS.INTIMIDATE
      ]
    ],
    talents: [
      [
        TALENTS.PANHANDLE,
        TALENTS.RESISTANCE_DISEASE,
        TALENTS.STONE_SOUP,
        TALENTS.VERY_RESILIENT
      ],
      [
        TALENTS.ALLEY_CAT,
        TALENTS.BENEATH_NOTICE,
        TALENTS.CRIMINAL,
        TALENTS.ETIQUETTE_CRIMINALS
      ],
      [
        TALENTS.BLATHER,
        TALENTS.DIRTY_FIGHTING,
        TALENTS.HARDY,
        TALENTS.STEP_ASIDE
      ],
      [
        TALENTS.CAT_TONGUED,
        TALENTS.FEARLESS_WATCHMEN,
        TALENTS.KINGPIN,
        TALENTS.SUAVE
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.BURGHERS,
    name: CAREERS.INVESTIGATOR,
    limitations: [],
    characteristics: [0, 0, 0, 0, 1, 1, 3, 1, 4, 2],
    levels: ['sleuth', 'investigator', 'master investigator', 'detective'],
    status: [[STATUS.SILVER, 1], [STATUS.SILVER, 2], [STATUS.SILVER, 3], [STATUS.SILVER, 5]],
    skills: [
      [
        SKILLS.CHARM,
        SKILLS.CLIMB,
        SKILLS.COOL,
        SKILLS.GOSSIP,
        SKILLS.INTUITION,
        SKILLS.PERCEPTION,
        SKILLS.STEALTH_URBAN,
        SKILLS.TRACK
      ],
      [
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.DODGE,
        SKILLS.LORE_LAW,
        SKILLS.MELEE_BRAWLING,
        SKILLS.PICK_LOCK,
        SKILLS.SLEIGHT_OF_HAND
      ],
      [
        SKILLS.BRIBERY,
        SKILLS.EVALUATE,
        SKILLS.LEADERSHIP,
        SKILLS.LORE_ANY
      ],
      [
        SKILLS.INTIMIDATE,
        SKILLS.LORE_ANY
      ]
    ],
    talents: [
      [
        TALENTS.ALLEY_CAT,
        TALENTS.BENEATH_NOTICE,
        TALENTS.READ_WRITE,
        TALENTS.SHARP
      ],
      [
        TALENTS.ETIQUETTE_ANY,
        TALENTS.SAVVY,
        TALENTS.SHADOW,
        TALENTS.TENACIOUS
      ],
      [
        TALENTS.BOOKISH,
        TALENTS.BREAK_AND_ENTER,
        TALENTS.SIXTH_SENSE,
        TALENTS.SUAVE
      ],
      [
        TALENTS.ACUTE_SENSE_ANY,
        TALENTS.SAVANT_ANY,
        TALENTS.SPEEDREADER,
        TALENTS.TOWER_OF_MEMORIES
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.BURGHERS,
    name: CAREERS.MERCHANT,
    limitations: [],
    characteristics: [1, 0, 0, 0, 3, 1, 0, 2, 4, 1],
    levels: ['trader', 'merchant', 'master merchant', 'merchant prince'],
    status: [[STATUS.SILVER, 2], [STATUS.SILVER, 5], [STATUS.GOLD, 1], [STATUS.GOLD, 3]],
    skills: [
      [
        SKILLS.ANIMAL_CARE,
        SKILLS.BRIBERY,
        SKILLS.CHARM,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.DRIVE,
        SKILLS.GAMBLE,
        SKILLS.GOSSIP,
        SKILLS.HAGGLE
      ],
      [
        SKILLS.EVALUATE,
        SKILLS.INTUITION,
        SKILLS.LANGUAGE_ANY,
        SKILLS.LANGUAGE_GUILDER,
        SKILLS.LORE_LOCAL,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.COOL,
        SKILLS.LANGUAGE_CLASSICAL,
        SKILLS.NAVIGATION,
        SKILLS.SECRET_SIGNS_GUILDER
      ],
      [
        SKILLS.LORE_ANY,
        SKILLS.INTIMIDATE
      ]
    ],
    talents: [
      [
        TALENTS.BLATHER,
        TALENTS.DEALMAKER,
        TALENTS.READ_WRITE,
        TALENTS.SUAVE
      ],
      [
        TALENTS.BRIBER,
        TALENTS.EMBEZZLE,
        TALENTS.ETIQUETTE_GUILDER,
        TALENTS.SAVVY
      ],
      [
        TALENTS.CAT_TONGUED,
        TALENTS.ETIQUETTE_ANY,
        TALENTS.NUMISMATICS,
        TALENTS.SHARP
      ],
      [
        TALENTS.IRON_WILL,
        TALENTS.LUCK,
        TALENTS.SCHEMER,
        TALENTS.WEALTHY
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.BURGHERS,
    name: CAREERS.RAT_CATCHER,
    limitations: [],
    characteristics: [1, 1, 4, 2, 3, 0, 0, 0, 1, 0],
    levels: ['rat hunter', 'rat catcher', 'sewer jack', 'exterminator'],
    status: [[STATUS.BRASS, 3], [STATUS.SILVER, 1], [STATUS.SILVER, 2], [STATUS.SILVER, 3]],
    skills: [
      [
        SKILLS.ATHLETICS,
        SKILLS.ANIMAL_TRAINING_DOG,
        SKILLS.CHARM_ANIMAL,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.ENDURANCE,
        SKILLS.MELEE_BASIC,
        SKILLS.RANGED_SLING,
        [SKILLS.STEALTH_UNDERGROUND, SKILLS.STEALTH_URBAN].join(' or ')
      ],
      [
        SKILLS.ANIMAL_CARE,
        SKILLS.GOSSIP,
        SKILLS.HAGGLE,
        SKILLS.LORE_POISON,
        SKILLS.PERCEPTION,
        SKILLS.SET_TRAP
      ],
      [
        SKILLS.CLIMB,
        SKILLS.COOL,
        SKILLS.DODGE,
        SKILLS.RANGED_CROSSBOW
      ],
      [
        SKILLS.LEADERSHIP,
        SKILLS.TRACK
      ]
    ],
    talents: [
      [
        TALENTS.NIGHT_VISION,
        TALENTS.RESISTANCE_DISEASE,
        TALENTS.STRIKE_MIGHTY_BLOW,
        TALENTS.STRIKE_TO_STUN
      ],
      [
        TALENTS.ENCLOSED_FIGHTER,
        TALENTS.ETIQUETTE_GUILDER,
        TALENTS.FEARLESS_RATS,
        TALENTS.VERY_RESILIENT
      ],
      [
        TALENTS.HARDY,
        TALENTS.STOUT_HEARTED,
        TALENTS.STRONG_LEGS,
        TALENTS.TUNNEL_RAT
      ],
      [
        TALENTS.FEARLESS_SKAVEN,
        TALENTS.MENACING,
        TALENTS.ROBUST,
        TALENTS.STRONG_MINDED
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.BURGHERS,
    name: CAREERS.TOWNSMAN,
    limitations: [],
    characteristics: [0, 0, 0, 0, 2, 1, 3, 1, 4, 1],
    levels: ['clerk', 'townsman', 'town councillor', 'burgomeister'],
    status: [[STATUS.SILVER, 1], [STATUS.SILVER, 2], [STATUS.SILVER, 5], [STATUS.GOLD, 1]],
    skills: [
      [
        SKILLS.CHARM,
        SKILLS.CLIMB,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.DRIVE,
        SKILLS.DODGE,
        SKILLS.GAMBLE,
        SKILLS.GOSSIP,
        SKILLS.HAGGLE
      ],
      [
        SKILLS.BRIBERY,
        SKILLS.EVALUATE,
        SKILLS.INTUITION,
        SKILLS.LORE_LOCAL,
        SKILLS.MELEE_BRAWLING,
        SKILLS.PLAY_ANY
      ],
      [
        SKILLS.COOL,
        SKILLS.LORE_LAW,
        SKILLS.PERCEPTION,
        SKILLS.RESEARCH
      ],
      [
        SKILLS.LORE_POLITICS,
        SKILLS.INTIMIDATE
      ]
    ],
    talents: [
      [
        TALENTS.ALLEY_CAT,
        TALENTS.BENEATH_NOTICE,
        TALENTS.ETIQUETTE_SERVANTS,
        TALENTS.STURDY
      ],
      [
        TALENTS.DEALMAKER,
        TALENTS.EMBEZZLE,
        TALENTS.ETIQUETTE_ANY,
        TALENTS.GREGARIOUS
      ],
      [
        TALENTS.BRIBER,
        TALENTS.PUBLIC_SPEAKER,
        TALENTS.READ_WRITE,
        TALENTS.SUPPORTIVE
      ],
      [
        TALENTS.COMMANDING_PRESENCE,
        TALENTS.MASTER_ORATOR,
        TALENTS.SCHEMER,
        TALENTS.SUAVE
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.BURGHERS,
    name: CAREERS.WATCHMAN,
    limitations: [],
    characteristics: [1, 0, 1, 0, 3, 0, 0, 4, 2, 1],
    levels: ['watch recruit', 'watchman', 'watch sergeant', 'watch captain'],
    status: [[STATUS.BRASS, 3], [STATUS.SILVER, 1], [STATUS.SILVER, 3], [STATUS.GOLD, 1]],
    skills: [
      [
        SKILLS.ATHLETICS,
        SKILLS.CLIMB,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.DODGE,
        SKILLS.ENDURANCE,
        SKILLS.GAMBLE,
        SKILLS.MELEE_ANY,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.CHARM,
        SKILLS.COOL,
        SKILLS.GOSSIP,
        SKILLS.INTIMIDATE,
        SKILLS.INTUITION,
        SKILLS.LORE_LOCAL
      ],
      [
        SKILLS.ENTERTAIN_STORYTELLING,
        SKILLS.HAGGLE,
        SKILLS.LEADERSHIP,
        SKILLS.LORE_LAW
      ],
      [
        SKILLS.LORE_POLITICS,
        SKILLS.RIDE_HORSE
      ]
    ],
    talents: [
      [
        TALENTS.DRILLED,
        TALENTS.HARDY,
        TALENTS.STRIKE_TO_STUN,
        TALENTS.TENACIOUS
      ],
      [
        TALENTS.BREAK_AND_ENTER,
        TALENTS.CRIMINAL,
        TALENTS.NIGHT_VISION,
        TALENTS.SPRINTER
      ],
      [
        TALENTS.DISARM,
        TALENTS.ETIQUETTE_SOLDIERS,
        TALENTS.FEARLESS_CRIMINALS,
        TALENTS.NOSE_FOR_TROUBLE
      ],
      [
        TALENTS.PUBLIC_SPEAKER,
        TALENTS.ROBUST,
        TALENTS.KINGPIN,
        TALENTS.SCHEMER
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.COURTIERS,
    name: CAREERS.ADVISOR,
    limitations: [],
    characteristics: [0, 0, 0, 1, 1, 1, 0, 3, 4, 2],
    levels: ['aide', 'advisor', 'counsellor', 'chancellor'],
    status: [[STATUS.SILVER, 2], [STATUS.SILVER, 4], [STATUS.GOLD, 1], [STATUS.GOLD, 3]],
    skills: [
      [
        SKILLS.BRIBERY,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.ENDURANCE,
        SKILLS.GOSSIP,
        SKILLS.HAGGLE,
        SKILLS.LANGUAGE_CLASSICAL,
        SKILLS.LORE_POLITICS,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.CHARM,
        SKILLS.COOL,
        SKILLS.EVALUATE,
        SKILLS.GAMBLE,
        SKILLS.INTUITION,
        SKILLS.LORE_LOCAL
      ],
      [
        SKILLS.ENTERTAIN_STORYTELLING,
        SKILLS.LEADERSHIP,
        SKILLS.LANGUAGE_ANY,
        SKILLS.LORE_ANY
      ],
      [
        SKILLS.LORE_HERALDRY,
        SKILLS.RIDE_HORSE
      ]
    ],
    talents: [
      [
        TALENTS.BENEATH_NOTICE,
        TALENTS.ETIQUETTE_ANY,
        TALENTS.GREGARIOUS,
        TALENTS.READ_WRITE
      ],
      [
        TALENTS.BLATHER,
        TALENTS.CRIMINAL,
        TALENTS.SCHEMER,
        TALENTS.SUPPORTIVE
      ],
      [
        TALENTS.ARGUMENTATIVE,
        TALENTS.BRIBER,
        TALENTS.CAROUSER,
        TALENTS.CAT_TONGUED
      ],
      [
        TALENTS.COMMANDING_PRESENCE,
        TALENTS.EMBEZZLE,
        TALENTS.KINGPIN,
        TALENTS.SUAVE
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.COURTIERS,
    name: CAREERS.ARTIST,
    limitations: [],
    characteristics: [0, 0, 1, 0, 1, 0, 1, 4, 3, 2],
    levels: ['apprentice artist', 'artist', 'master artist', 'maestro'],
    status: [[STATUS.SILVER, 1], [STATUS.SILVER, 3], [STATUS.SILVER, 5], [STATUS.GOLD, 2]],
    skills: [
      [
        SKILLS.ART_ANY,
        SKILLS.COOL,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.EVALUATE,
        SKILLS.ENDURANCE,
        SKILLS.GOSSIP,
        SKILLS.PERCEPTION,
        SKILLS.STEALTH_URBAN
      ],
      [
        SKILLS.CLIMB,
        SKILLS.GAMBLE,
        SKILLS.HAGGLE,
        SKILLS.INTUITION,
        SKILLS.LANGUAGE_CLASSICAL,
        SKILLS.SLEIGHT_OF_HAND,
        SKILLS.TRADE_ART_SUPPLIES
      ],
      [
        SKILLS.CHARM,
        SKILLS.LEADERSHIP,
        SKILLS.LORE_ART,
        SKILLS.LORE_HERALDRY
      ],
      [
        SKILLS.RESEARCH,
        SKILLS.RIDE_HORSE
      ]
    ],
    talents: [
      [
        TALENTS.ARTISTIC,
        TALENTS.SHARP,
        TALENTS.STRONG_BACK,
        TALENTS.TENACIOUS
      ],
      [
        TALENTS.CAROUSER,
        TALENTS.CRIMINAL,
        TALENTS.GREGARIOUS,
        TALENTS.NIMBLE_FINGERED
      ],
      [
        TALENTS.ACUTE_SENSE_ANY,
        TALENTS.DEALMAKER,
        TALENTS.ETIQUETTE_ANY,
        TALENTS.NOSE_FOR_TROUBLE
      ],
      [
        TALENTS.AMBIDEXTROUS,
        TALENTS.KINGPIN,
        TALENTS.MAGNUS_OPUS,
        TALENTS.READ_WRITE
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.COURTIERS,
    name: CAREERS.DUELIST,
    limitations: [],
    characteristics: [1, 2, 3, 0, 1, 1, 0, 0, 4, 0],
    levels: ['fencer', 'duellist', 'duelmaster', 'judicial champion'],
    status: [[STATUS.SILVER, 3], [STATUS.SILVER, 5], [STATUS.GOLD, 1], [STATUS.GOLD, 3]],
    skills: [
      [
        SKILLS.ATHLETICS,
        SKILLS.DODGE,
        SKILLS.ENDURANCE,
        SKILLS.HEAL,
        SKILLS.INTUITION,
        SKILLS.LANGUAGE_CLASSICAL,
        SKILLS.MELEE_ANY,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.CHARM,
        SKILLS.COOL,
        SKILLS.GAMBLE,
        SKILLS.MELEE_PARRY,
        SKILLS.RANGED_BLACKPOWDER,
        SKILLS.TRADE_GUNSMITH
      ],
      [
        SKILLS.INTIMIDATE,
        SKILLS.LEADERSHIP,
        SKILLS.MELEE_BASIC,
        SKILLS.PERFORM_ACROBATICS
      ],
      [
        SKILLS.LORE_LAW,
        SKILLS.MELEE_ANY
      ]
    ],
    talents: [
      [
        TALENTS.BEAT_BLADE,
        TALENTS.DISTRACT,
        TALENTS.FEINT,
        TALENTS.STEP_ASIDE
      ],
      [
        TALENTS.COMBAT_REFLEXES,
        TALENTS.ETIQUETTE_ANY,
        TALENTS.FAST_SHOT,
        TALENTS.REVERSAL
      ],
      [
        TALENTS.AMBIDEXTROUS,
        TALENTS.DISARM,
        TALENTS.DUAL_WIELDER,
        TALENTS.RIPOSTE
      ],
      [
        TALENTS.COMBAT_MASTER,
        TALENTS.MENACING,
        TALENTS.REACTION_STRIKE,
        TALENTS.STRIKE_TO_INJURE
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.COURTIERS,
    name: CAREERS.ENVOY,
    limitations: [],
    characteristics: [0, 0, 0, 1, 3, 1, 0, 2, 4, 1],
    levels: ['herald', 'envoy', 'diplomat', 'ambassador'],
    status: [[STATUS.SILVER, 2], [STATUS.SILVER, 4], [STATUS.GOLD, 2], [STATUS.GOLD, 5]],
    skills: [
      [
        SKILLS.ATHLETICS,
        SKILLS.CHARM,
        SKILLS.DRIVE,
        SKILLS.DODGE,
        SKILLS.ENDURANCE,
        SKILLS.INTUITION,
        SKILLS.RIDE_HORSE,
        SKILLS.ROW
      ],
      [
        SKILLS.ART_WRITING,
        SKILLS.BRIBERY,
        SKILLS.COOL,
        SKILLS.GOSSIP,
        SKILLS.HAGGLE,
        SKILLS.LORE_POLITICS
      ],
      [
        SKILLS.INTIMIDATE,
        SKILLS.LANGUAGE_ANY,
        SKILLS.LEADERSHIP,
        SKILLS.NAVIGATION
      ],
      [
        SKILLS.LANGUAGE_ANY,
        SKILLS.LORE_ANY
      ]
    ],
    talents: [
      [
        TALENTS.BLATHER,
        TALENTS.ETIQUETTE_NOBLES,
        TALENTS.READ_WRITE,
        TALENTS.SUAVE
      ],
      [
        TALENTS.ATTRACTIVE,
        TALENTS.CAT_TONGUED,
        TALENTS.ETIQUETTE_ANY,
        TALENTS.SEASONED_TRAVELLER
      ],
      [
        TALENTS.CAROUSER,
        TALENTS.DEALMAKER,
        TALENTS.GREGARIOUS,
        TALENTS.SCHEMER
      ],
      [
        TALENTS.BRIBER,
        TALENTS.COMMANDING_PRESENCE,
        TALENTS.NOBLE_BLOOD,
        TALENTS.SAVVY
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.COURTIERS,
    name: CAREERS.NOBLE,
    limitations: [],
    characteristics: [1, 0, 0, 0, 1, 0, 1, 3, 4, 2],
    levels: ['scion', 'noble', 'magnate', 'noble lord'],
    status: [[STATUS.GOLD, 1], [STATUS.GOLD, 3], [STATUS.GOLD, 5], [STATUS.GOLD, 7]],
    skills: [
      [
        SKILLS.BRIBERY,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.GAMBLE,
        SKILLS.INTIMIDATE,
        SKILLS.LEADERSHIP,
        SKILLS.LORE_HERALDRY,
        SKILLS.MELEE_FENCING,
        SKILLS.PLAY_ANY
      ],
      [
        SKILLS.CHARM,
        SKILLS.GOSSIP,
        SKILLS.LANGUAGE_CLASSICAL,
        SKILLS.LORE_LOCAL,
        SKILLS.RIDE_HORSE,
        SKILLS.MELEE_PARRY
      ],
      [
        SKILLS.LANGUAGE_ANY,
        SKILLS.INTUITION,
        SKILLS.LORE_POLITICS,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.LORE_ANY,
        SKILLS.TRACK
      ]
    ],
    talents: [
      [
        TALENTS.ETIQUETTE_NOBLES,
        TALENTS.LUCK,
        TALENTS.NOBLE_BLOOD,
        TALENTS.READ_WRITE
      ],
      [
        TALENTS.ATTRACTIVE,
        TALENTS.BRIBER,
        TALENTS.CAROUSER,
        TALENTS.SUAVE
      ],
      [
        TALENTS.COOLHEADED,
        TALENTS.DEALMAKER,
        TALENTS.PUBLIC_SPEAKER,
        TALENTS.SCHEMER
      ],
      [
        TALENTS.COMMANDING_PRESENCE,
        TALENTS.IRON_WILL,
        TALENTS.WAR_LEADER,
        TALENTS.WEALTHY
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.COURTIERS,
    name: CAREERS.SERVANT,
    limitations: [],
    characteristics: [0, 0, 1, 1, 2, 1, 0, 3, 0, 4],
    levels: ['menial', 'servant', 'attendant', 'steward'],
    status: [[STATUS.SILVER, 1], [STATUS.SILVER, 3], [STATUS.SILVER, 5], [STATUS.GOLD, 1]],
    skills: [
      [
        SKILLS.ATHLETICS,
        SKILLS.CLIMB,
        SKILLS.DRIVE,
        SKILLS.DODGE,
        SKILLS.ENDURANCE,
        SKILLS.INTUITION,
        SKILLS.PERCEPTION,
        SKILLS.STEALTH_ANY
      ],
      [
        SKILLS.ANIMAL_CARE,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.EVALUATE,
        SKILLS.GAMBLE,
        SKILLS.GOSSIP,
        SKILLS.HAGGLE
      ],
      [
        SKILLS.CHARM,
        SKILLS.COOL,
        SKILLS.INTIMIDATE,
        SKILLS.LORE_LOCAL
      ],
      [
        SKILLS.LEADERSHIP,
        SKILLS.MELEE_BASIC
      ]
    ],
    talents: [
      [
        TALENTS.BENEATH_NOTICE,
        TALENTS.STRONG_BACK,
        TALENTS.STRONG_MINDED,
        TALENTS.STURDY
      ],
      [
        TALENTS.ETIQUETTE_SERVANTS,
        TALENTS.SHADOW,
        TALENTS.TENACIOUS,
        TALENTS.WELL_PREPAIRED
      ],
      [
        TALENTS.EMBEZZLE,
        TALENTS.RESISTANCE_POISON,
        TALENTS.SUAVE,
        TALENTS.SUPPORTIVE
      ],
      [
        TALENTS.ETIQUETTE_ANY,
        TALENTS.NUMISMATICS,
        TALENTS.READ_WRITE,
        TALENTS.SAVVY
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.COURTIERS,
    name: CAREERS.SPY,
    limitations: [],
    characteristics: [2, 0, 0, 0, 3, 1, 0, 4, 1, 1],
    levels: ['informer', 'spy', 'agent', 'spymaster'],
    status: [[STATUS.BRASS, 3], [STATUS.SILVER, 3], [STATUS.GOLD, 1], [STATUS.GOLD, 4]],
    skills: [
      [
        SKILLS.BRIBERY,
        SKILLS.CHARM,
        SKILLS.COOL,
        SKILLS.GAMBLE,
        SKILLS.GOSSIP,
        SKILLS.HAGGLE,
        SKILLS.PERCEPTION,
        SKILLS.STEALTH_ANY
      ],
      [
        SKILLS.CLIMB,
        SKILLS.ENTERTAIN_ACT,
        SKILLS.INTUITION,
        SKILLS.MELEE_BASIC,
        SKILLS.SECRET_SIGNS_ANY,
        SKILLS.SLEIGHT_OF_HAND
      ],
      [
        SKILLS.ANIMAL_CARE,
        SKILLS.ANIMAL_TRAINING_PIGEON,
        SKILLS.LANGUAGE_ANY,
        SKILLS.LEADERSHIP
      ],
      [
        SKILLS.LORE_ANY,
        SKILLS.RESEARCH
      ]
    ],
    talents: [
      [
        TALENTS.BLATHER,
        TALENTS.CAROUSER,
        TALENTS.GREGARIOUS,
        TALENTS.SHADOW
      ],
      [
        TALENTS.ETIQUETTE_ANY,
        TALENTS.LIP_READING,
        TALENTS.READ_WRITE,
        TALENTS.SECRET_IDENTITY
      ],
      [
        TALENTS.ATTRACTIVE,
        TALENTS.CAT_TONGUED,
        TALENTS.MASTER_OF_DISGUISE,
        TALENTS.MIMIC
      ],
      [
        TALENTS.BRIBER,
        TALENTS.SCHEMER,
        TALENTS.SUAVE,
        TALENTS.TOWER_OF_MEMORIES
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.COURTIERS,
    name: CAREERS.WARDEN,
    limitations: [],
    characteristics: [2, 0, 1, 1, 0, 0, 0, 4, 1, 3],
    levels: ['custodian', 'warden', 'seneschal', 'governor'],
    status: [[STATUS.SILVER, 1], [STATUS.SILVER, 3], [STATUS.GOLD, 1], [STATUS.GOLD, 3]],
    skills: [
      [
        SKILLS.ATHLETICS,
        SKILLS.CHARM_ANIMAL,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.COOL,
        SKILLS.ENDURANCE,
        SKILLS.INTUITION,
        SKILLS.LORE_LOCAL,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.ANIMAL_CARE,
        SKILLS.MELEE_BASIC,
        SKILLS.OUTDOOR_SURVIVAL,
        SKILLS.RANGED_BOW,
        SKILLS.RIDE_HORSE,
        SKILLS.SWIM
      ],
      [
        SKILLS.BRIBERY,
        SKILLS.CHARM,
        SKILLS.GOSSIP,
        SKILLS.LEADERSHIP
      ],
      [
        SKILLS.EVALUATE,
        SKILLS.LANGUAGE_ANY
      ]
    ],
    talents: [
      [
        TALENTS.MENACING,
        TALENTS.NIGHT_VISION,
        TALENTS.SHARP,
        TALENTS.STRIKE_TO_STUN
      ],
      [
        TALENTS.ANIMAL_AFFINITY,
        TALENTS.ETIQUETTE_SERVANTS,
        TALENTS.STRIDER_ANY,
        TALENTS.ROVER
      ],
      [
        TALENTS.EMBEZZLE,
        TALENTS.NUMISMATICS,
        TALENTS.READ_WRITE,
        TALENTS.SUPPORTIVE
      ],
      [
        TALENTS.COMMANDING_PRESENCE,
        TALENTS.ETIQUETTE_ANY,
        TALENTS.SAVANT_LOCAL,
        TALENTS.SUAVE
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.PEASANTS,
    name: CAREERS.BAILIFF,
    limitations: [],
    characteristics: [1, 0, 0, 0, 1, 3, 0, 4, 1, 2],
    levels: ['tax collector', 'bailiff', 'reeve', 'magistrate'],
    status: [[STATUS.SILVER, 1], [STATUS.SILVER, 5], [STATUS.GOLD, 1], [STATUS.GOLD, 3]],
    skills: [
      [
        SKILLS.COOL,
        SKILLS.DODGE,
        SKILLS.ENDURANCE,
        SKILLS.GOSSIP,
        SKILLS.HAGGLE,
        SKILLS.INTIMIDATE,
        SKILLS.MELEE_BASIC,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.BRIBERY,
        SKILLS.CHARM,
        SKILLS.EVALUATE,
        SKILLS.INTUITION,
        SKILLS.LEADERSHIP,
        SKILLS.LORE_LOCAL
      ],
      [
        SKILLS.ANIMAL_CARE,
        SKILLS.LORE_HERALDRY,
        SKILLS.NAVIGATION,
        SKILLS.RIDE_HORSE
      ],
      [
        SKILLS.LANGUAGE_CLASSICAL,
        SKILLS.LORE_LAW
      ]
    ],
    talents: [
      [
        TALENTS.EMBEZZLE,
        TALENTS.NUMISMATICS,
        TALENTS.STRONG_BACK,
        TALENTS.TENACIOUS
      ],
      [
        TALENTS.BREAK_AND_ENTER,
        TALENTS.CRIMINAL,
        TALENTS.PUBLIC_SPEAKER,
        TALENTS.STRIKE_TO_STUN
      ],
      [
        TALENTS.KINGPIN,
        TALENTS.MENACING,
        TALENTS.NOSE_FOR_TROUBLE,
        TALENTS.READ_WRITE
      ],
      [
        TALENTS.COMMANDING_PRESENCE,
        TALENTS.IRON_WILL,
        TALENTS.SAVVY,
        TALENTS.SCHEMER
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.PEASANTS,
    name: CAREERS.HEDGE_WITCH,
    limitations: [],
    characteristics: [0, 0, 0, 1, 1, 0, 1, 2, 4, 3],
    levels: ['hedge apprentice', 'hedge witch', 'hedge master', 'hedgewise'],
    status: [[STATUS.BRASS, 1], [STATUS.BRASS, 2], [STATUS.BRASS, 3], [STATUS.BRASS, 5]],
    skills: [
      [
        SKILLS.CHANNELLING_ANY,
        SKILLS.ENDURANCE,
        SKILLS.INTUITION,
        SKILLS.LANGUAGE_MAGICK,
        SKILLS.LORE_FOLKLORE,
        SKILLS.LORE_HERBS,
        SKILLS.OUTDOOR_SURVIVAL,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.COOL,
        SKILLS.GOSSIP,
        SKILLS.HEAL,
        SKILLS.LORE_LOCAL,
        SKILLS.TRADE_CHARMS,
        SKILLS.TRADE_HERBALIST
      ],
      [
        SKILLS.HAGGLE,
        SKILLS.LORE_GENEALOGY,
        SKILLS.LORE_MAGIC,
        SKILLS.LORE_SPIRITS
      ],
      [
        SKILLS.INTIMIDATE,
        SKILLS.PRAY
      ]
    ],
    talents: [
      [
        TALENTS.FAST_HANDS,
        TALENTS.PETTY_MAGIC,
        TALENTS.ROVER,
        TALENTS.STRIDER_WOODLANDS
      ],
      [
        TALENTS.AETHYRIC_ATTUNEMENT,
        TALENTS.ANIMAL_AFFINITY,
        TALENTS.ARCANE_MAGIC_HEDGECRAFT,
        TALENTS.SIXTH_SENSE
      ],
      [
        TALENTS.CRAFTSMAN_HERBALIST,
        TALENTS.MAGICAL_SENSE,
        TALENTS.PURE_SOUL,
        TALENTS.RESISTANCE_DISEASE
      ],
      [
        TALENTS.ACUTE_SENSE_ANY,
        TALENTS.MASTER_TRADESMAN_HERBALIST,
        TALENTS.NIGHT_VISION,
        TALENTS.STRONG_MINDED
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.PEASANTS,
    name: CAREERS.HERBALIST,
    limitations: [],
    characteristics: [0, 0, 0, 1, 1, 1, 2, 4, 0, 3],
    levels: ['herb gatherer', 'herbalist', 'herb master', 'herbwise'],
    status: [[STATUS.BRASS, 2], [STATUS.BRASS, 4], [STATUS.SILVER, 1], [STATUS.SILVER, 3]],
    skills: [
      [
        SKILLS.CHARM_ANIMAL,
        SKILLS.CLIMB,
        SKILLS.ENDURANCE,
        SKILLS.LORE_HERBS,
        SKILLS.OUTDOOR_SURVIVAL,
        SKILLS.PERCEPTION,
        SKILLS.SWIM,
        SKILLS.TRADE_HERBALIST
      ],
      [
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.COOL,
        SKILLS.GOSSIP,
        SKILLS.HAGGLE,
        SKILLS.HEAL,
        SKILLS.LORE_LOCAL
      ],
      [
        SKILLS.INTUITION,
        SKILLS.LEADERSHIP,
        SKILLS.LORE_MEDICINE,
        SKILLS.TRADE_POISONER
      ],
      [
        SKILLS.DRIVE,
        SKILLS.NAVIGATION
      ]
    ],
    talents: [
      [
        TALENTS.ACUTE_SENSE_TASTE,
        TALENTS.ORIENTATION,
        TALENTS.ROVER,
        TALENTS.STRIDER_ANY
      ],
      [
        TALENTS.DEALMAKER,
        TALENTS.NIMBLE_FINGERED,
        TALENTS.SHARP,
        TALENTS.STURDY
      ],
      [
        TALENTS.CRAFTSMAN_HERBALIST,
        TALENTS.FIELD_DRESSING,
        TALENTS.HARDY,
        TALENTS.SAVVY
      ],
      [
        TALENTS.CONCOCT,
        TALENTS.MASTER_TRADESMAN_HERBALIST,
        TALENTS.RESISTANCE_POISON,
        TALENTS.SAVANT_HERBS
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.PEASANTS,
    name: CAREERS.HUNTER,
    limitations: [],
    characteristics: [0, 2, 1, 1, 3, 0, 1, 4, 0, 0],
    levels: ['trapper', 'hunter', 'tracker', 'huntsmaster'],
    status: [[STATUS.BRASS, 2], [STATUS.BRASS, 4], [STATUS.SILVER, 1], [STATUS.SILVER, 3]],
    skills: [
      [
        SKILLS.CHARM_ANIMAL,
        SKILLS.CLIMB,
        SKILLS.ENDURANCE,
        SKILLS.LORE_BEASTS,
        SKILLS.OUTDOOR_SURVIVAL,
        SKILLS.PERCEPTION,
        SKILLS.RANGED_BOW,
        SKILLS.SET_TRAP
      ],
      [
        SKILLS.COOL,
        SKILLS.INTUITION,
        SKILLS.MELEE_BASIC,
        SKILLS.RANGED_SLING,
        SKILLS.SECRET_SIGNS_HUNTER,
        SKILLS.STEALTH_RURAL
      ],
      [
        SKILLS.NAVIGATION,
        SKILLS.RIDE_HORSE,
        SKILLS.SWIM,
        SKILLS.TRACK
      ],
      [
        SKILLS.ANIMAL_CARE,
        SKILLS.ANIMAL_TRAINING_ANY
      ]
    ],
    talents: [
      [
        TALENTS.HARDY,
        TALENTS.ROVER,
        TALENTS.STRIDER_ANY,
        TALENTS.TRAPPER
      ],
      [
        TALENTS.ACCURATE_SHOT,
        TALENTS.FAST_SHOT,
        TALENTS.HUNTERS_EYE,
        TALENTS.MARKSMAN
      ],
      [
        TALENTS.ACUTE_SENSE_ANY,
        TALENTS.DEADEYE_SHOT,
        TALENTS.FEARLESS_ANIMALS,
        TALENTS.SHARPSHOOTER
      ],
      [
        TALENTS.FEARLESS_MONSTERS,
        TALENTS.ROBUST,
        TALENTS.SNIPER,
        TALENTS.SURE_SHOT
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.PEASANTS,
    name: CAREERS.MINER,
    limitations: [],
    characteristics: [2, 0, 1, 1, 3, 0, 0, 0, 1, 4],
    levels: ['prospector', 'miner', 'master miner', 'mine foreman'],
    status: [[STATUS.BRASS, 2], [STATUS.BRASS, 4], [STATUS.BRASS, 5], [STATUS.SILVER, 4]],
    skills: [
      [
        SKILLS.COOL,
        SKILLS.ENDURANCE,
        SKILLS.INTUITION,
        SKILLS.LORE_LOCAL,
        SKILLS.MELEE_TWOHANDED,
        SKILLS.OUTDOOR_SURVIVAL,
        SKILLS.PERCEPTION,
        SKILLS.SWIM
      ],
      [
        SKILLS.CLIMB,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.EVALUATE,
        SKILLS.MELEE_BASIC,
        SKILLS.SECRET_SIGNS_MINER,
        SKILLS.TRADE_EXPLOSIVES
      ],
      [
        SKILLS.GOSSIP,
        SKILLS.LORE_GEOLOGY,
        SKILLS.STEALTH_UNDERGROUND,
        SKILLS.TRADE_ENGINEER
      ],
      [
        SKILLS.CHARM,
        SKILLS.LEADERSHIP
      ]
    ],
    talents: [
      [
        TALENTS.ROVER,
        TALENTS.STRIDER_ROCKY,
        TALENTS.STURDY,
        TALENTS.TENACIOUS
      ],
      [
        TALENTS.NIGHT_VISION,
        TALENTS.STRIKE_MIGHTY_BLOW,
        TALENTS.STRONG_BACK,
        TALENTS.VERY_STRONG
      ],
      [
        TALENTS.CAREFUL_STRIKE,
        TALENTS.CRAFTSMAN_EXPLOSIVES,
        TALENTS.TINKER,
        TALENTS.TUNNEL_RAT
      ],
      [
        TALENTS.ARGUMENTATIVE,
        TALENTS.STRONG_MINDED,
        TALENTS.EMBEZZLE,
        TALENTS.READ_WRITE
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.PEASANTS,
    name: CAREERS.MYSTIC,
    limitations: [],
    characteristics: [0, 0, 0, 0, 1, 3, 1, 4, 2, 1],
    levels: ['fortune teller', 'mystic', 'sage', 'seer'],
    status: [[STATUS.BRASS, 1], [STATUS.BRASS, 2], [STATUS.BRASS, 3], [STATUS.BRASS, 4]],
    skills: [
      [
        SKILLS.CHARM,
        SKILLS.ENTERTAIN_FORTUNE_TELLING,
        SKILLS.DODGE,
        SKILLS.GOSSIP,
        SKILLS.HAGGLE,
        SKILLS.INTUITION,
        SKILLS.PERCEPTION,
        SKILLS.SLEIGHT_OF_HAND
      ],
      [
        SKILLS.BRIBERY,
        SKILLS.COOL,
        SKILLS.ENTERTAIN_PROPHECY,
        SKILLS.EVALUATE,
        SKILLS.INTIMIDATE,
        SKILLS.LORE_ASTROLOGY
      ],
      [
        SKILLS.CHARM_ANIMAL,
        SKILLS.ENTERTAIN_STORYTELLING,
        SKILLS.LANGUAGE_ANY,
        SKILLS.TRADE_WRITING
      ],
      [
        SKILLS.LORE_PROPHECY,
        SKILLS.CHANNELLING_AZYR
      ]
    ],
    talents: [
      [
        TALENTS.ATTRACTIVE,
        TALENTS.LUCK,
        TALENTS.SECOND_SIGHT,
        TALENTS.SUAVE
      ],
      [
        TALENTS.DETECT_ARTIFACT,
        TALENTS.HOLY_VISIONS,
        TALENTS.SIXTH_SENSE,
        TALENTS.WELL_PREPAIRED
      ],
      [
        TALENTS.NOSE_FOR_TROUBLE,
        TALENTS.PETTY_MAGIC,
        TALENTS.READ_WRITE,
        TALENTS.WITCH
      ],
      [
        TALENTS.ARCANE_MAGIC_CELESTIAL,
        TALENTS.MAGICAL_SENSE,
        TALENTS.MENACING,
        TALENTS.STRONG_MINDED
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.PEASANTS,
    name: CAREERS.SCOUT,
    limitations: [],
    characteristics: [0, 2, 0, 1, 1, 1, 4, 3, 0, 0],
    levels: ['guide', 'scout', 'pathfinder', 'explorer'],
    status: [[STATUS.BRASS, 3], [STATUS.BRASS, 5], [STATUS.SILVER, 1], [STATUS.SILVER, 5]],
    skills: [
      [
        SKILLS.CHARM_ANIMAL,
        SKILLS.CLIMB,
        SKILLS.ENDURANCE,
        SKILLS.GOSSIP,
        SKILLS.LORE_LOCAL,
        SKILLS.MELEE_BASIC,
        SKILLS.OUTDOOR_SURVIVAL,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.ATHLETICS,
        SKILLS.NAVIGATION,
        SKILLS.RANGED_BOW,
        SKILLS.RIDE_HORSE,
        SKILLS.STEALTH_RURAL,
        SKILLS.TRACK
      ],
      [
        SKILLS.ANIMAL_CARE,
        SKILLS.HAGGLE,
        SKILLS.SECRET_SIGNS_HUNTER,
        SKILLS.SWIM
      ],
      [
        SKILLS.LANGUAGE_ANY,
        SKILLS.TRADE_CARTOGRAPHER
      ]
    ],
    talents: [
      [
        TALENTS.ORIENTATION,
        TALENTS.ROVER,
        TALENTS.SHARP,
        TALENTS.STRIDER_ANY
      ],
      [
        TALENTS.COMBAT_AWARE,
        TALENTS.NIGHT_VISION,
        TALENTS.NOSE_FOR_TROUBLE,
        TALENTS.SEASONED_TRAVELLER
      ],
      [
        TALENTS.ACUTE_SENSE_SIGHT,
        TALENTS.SIXTH_SENSE,
        TALENTS.STRONG_LEGS,
        TALENTS.VERY_RESILIENT
      ],
      [
        TALENTS.HARDY,
        TALENTS.LINGUISTICS,
        TALENTS.SAVANT_LOCAL,
        TALENTS.TENACIOUS
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.PEASANTS,
    name: CAREERS.VILLAGER,
    limitations: [],
    characteristics: [2, 0, 1, 1, 0, 1, 0, 4, 0, 3],
    levels: ['peasant', 'villager', 'councillor', 'village elder'],
    status: [[STATUS.BRASS, 2], [STATUS.BRASS, 3], [STATUS.BRASS, 4], [STATUS.SILVER, 2]],
    skills: [
      [
        SKILLS.ANIMAL_CARE,
        SKILLS.ATHLETICS,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.ENDURANCE,
        SKILLS.GOSSIP,
        SKILLS.MELEE_BRAWLING,
        SKILLS.LORE_LOCAL,
        SKILLS.OUTDOOR_SURVIVAL
      ],
      [
        SKILLS.DRIVE,
        SKILLS.ENTERTAIN_STORYTELLING,
        SKILLS.HAGGLE,
        SKILLS.MELEE_BASIC,
        SKILLS.TRADE_ANY
      ],
      [
        SKILLS.BRIBERY,
        SKILLS.CHARM,
        SKILLS.INTIMIDATE,
        SKILLS.LEADERSHIP
      ],
      [
        SKILLS.INTUITION,
        SKILLS.LORE_HISTORY
      ]
    ],
    talents: [
      [
        TALENTS.ROVER,
        TALENTS.STRONG_BACK,
        TALENTS.STRONG_MINDED,
        TALENTS.STONE_SOUP
      ],
      [
        TALENTS.ANIMAL_AFFINITY,
        TALENTS.HARDY,
        TALENTS.TENACIOUS,
        TALENTS.VERY_STRONG
      ],
      [
        TALENTS.CRAFTSMAN_ANY,
        TALENTS.DEALMAKER,
        TALENTS.STOUT_HEARTED,
        TALENTS.VERY_RESILIENT
      ],
      [
        TALENTS.MASTER_TRADESMAN_ANY,
        TALENTS.NIMBLE_FINGERED,
        TALENTS.PUBLIC_SPEAKER,
        TALENTS.SAVANT_LOCAL
      ]
    ],
    trappings: [[], [], [], []]
  },
  {
    class: CLASSES.RANGERS,
    name: CAREERS.BOUNTY_HUNTER,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.RANGERS,
    name: CAREERS.COACHMAN,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.RANGERS,
    name: CAREERS.ENTERTAINER,
    limitations: [SPECIES.HUMAN, SPECIES.DWARF, SPECIES.HALFLING, SPECIES.HIGH_ELF, SPECIES.WOOD_ELF],
    characteristics: [2, 3, 0, 4, 0, 1, 1, 0, 0, 1],
    levels: ['busker', 'entertainer', 'troubadour', 'troupe leader'],
    status: [[STATUS.BRASS, 3], [STATUS.BRASS, 5], [STATUS.SILVER, 3], [STATUS.GOLD, 1]],
    skills: [
      [
        SKILLS.ATHLETICS,
        SKILLS.CHARM,
        SKILLS.ENTERTAIN_ANY,
        SKILLS.GOSSIP,
        SKILLS.HAGGLE,
        SKILLS.PERFORM_ANY,
        SKILLS.PLAY_ANY,
        SKILLS.SLEIGHT_OF_HAND
      ],
      [
        SKILLS.ENTERTAIN_ANY,
        SKILLS.RIDE_ANY,
        SKILLS.MELEE_BASIC,
        SKILLS.PERFORM_ANY,
        SKILLS.PLAY_ANY,
        SKILLS.RANGED_THROWN
      ],
      [
        SKILLS.ANIMAL_CARE,
        SKILLS.ANIMAL_TRAINING_ANY,
        SKILLS.ART_WRITING,
        SKILLS.LANGUAGE_ANY
      ],
      [
        SKILLS.DRIVE,
        SKILLS.LEADERSHIP
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.RANGERS,
    name: CAREERS.FLAGELLANT,
    limitations: [SPECIES.HUMAN],
    characteristics: [1, 0, 1, 1, 3, 0, 0, 0, 2, 4],
    levels: ['zealot', 'flagellant', 'penitent', 'prophet of doom'],
    status: [[STATUS.BRASS, 0], [STATUS.BRASS, 0], [STATUS.BRASS, 0], [STATUS.BRASS, 0]],
    skills: [
      [
        SKILLS.DODGE,
        SKILLS.ENDURANCE,
        SKILLS.HEAL,
        SKILLS.INTIMIDATE,
        SKILLS.INTUITION,
        SKILLS.LORE_SIGMAR,
        SKILLS.MELEE_FLAIL,
        SKILLS.OUTDOOR_SURVIVAL
      ],
      [
        SKILLS.ART_ICONS,
        SKILLS.ATHLETICS,
        SKILLS.COOL,
        SKILLS.LANGUAGE_CLASSICAL,
        SKILLS.LORE_EMPIRE,
        SKILLS.RANGED_SLING
      ],
      [
        SKILLS.CHARM,
        SKILLS.LANGUAGE_ANY,
        SKILLS.LORE_THEOLOGY,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.ENTERTAIN_SPEECHES,
        SKILLS.LEADERSHIP
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.RANGERS,
    name: CAREERS.MESSENGER,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.RANGERS,
    name: CAREERS.PEDLAR,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.RANGERS,
    name: CAREERS.ROAD_WARDEN,
    limitations: [SPECIES.HUMAN, SPECIES.HALFLING],
    characteristics: [2, 1, 0, 1, 1, 0, 0, 4, 0, 3],
    levels: ['toll keeper', 'road warden', 'road sergeant', 'road captain'],
    status: [[STATUS.BRASS, 5], [STATUS.SILVER, 2], [STATUS.SILVER, 4], [STATUS.GOLD, 1]],
    skills: [
      [
        SKILLS.BRIBERY,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.GAMBLE,
        SKILLS.GOSSIP,
        SKILLS.HAGGLE,
        SKILLS.MELEE_BASIC,
        SKILLS.PERCEPTION,
        SKILLS.RANGED_CROSSBOW
      ],
      [
        SKILLS.ANIMAL_CARE,
        SKILLS.ENDURANCE,
        SKILLS.INTIMIDATE,
        SKILLS.INTUITION,
        SKILLS.OUTDOOR_SURVIVAL,
        SKILLS.RIDE_HORSE
      ],
      [
        SKILLS.ATHLETICS,
        SKILLS.CHARM,
        SKILLS.LEADERSHIP,
        SKILLS.RANGED_BLACKPOWDER
      ],
      [
        SKILLS.LORE_EMPIRE,
        SKILLS.NAVIGATION
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.RANGERS,
    name: CAREERS.WITCH_HUNTER,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.RIVERFOLK,
    name: CAREERS.BOATMAN,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.RIVERFOLK,
    name: CAREERS.HUFFER,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.RIVERFOLK,
    name: CAREERS.RIVERWARDEN,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.RIVERFOLK,
    name: CAREERS.RIVERWOMAN,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.RIVERFOLK,
    name: CAREERS.SEAMAN,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.RIVERFOLK,
    name: CAREERS.SMUGGLER,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.RIVERFOLK,
    name: CAREERS.STEVEDORE,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.RIVERFOLK,
    name: CAREERS.WRECKER,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.ROGUES,
    name: CAREERS.BAWD,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.ROGUES,
    name: CAREERS.CHARLATAN,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.ROGUES,
    name: CAREERS.FENCE,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.ROGUES,
    name: CAREERS.GRAVE_ROBBER,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.ROGUES,
    name: CAREERS.OUTLAW,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.ROGUES,
    name: CAREERS.RACKETEER,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.ROGUES,
    name: CAREERS.THIEF,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.ROGUES,
    name: CAREERS.WITCH,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.WARRIORS,
    name: CAREERS.CAVALRYMAN,
    limitations: [SPECIES.HUMAN, SPECIES.HIGH_ELF, SPECIES.WOOD_ELF],
    characteristics: [1, 2, 1, 0, 3, 1, 0, 0, 0, 4],
    levels: ['horseman', 'cavalryman', 'cavalry sergeant', 'cavalry officer'],
    status: [[STATUS.SILVER, 2], [STATUS.SILVER, 4], [STATUS.GOLD, 1], [STATUS.GOLD, 2]],
    skills: [
      [
        SKILLS.ANIMAL_CARE,
        SKILLS.CHARM_ANIMAL,
        SKILLS.ENDURANCE,
        SKILLS.LANGUAGE_BATTLE,
        SKILLS.MELEE_BASIC,
        SKILLS.OUTDOOR_SURVIVAL,
        SKILLS.PERCEPTION,
        SKILLS.RIDE_HORSE
      ],
      [
        SKILLS.CHARM,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.COOL,
        SKILLS.GOSSIP,
        SKILLS.MELEE_CAVALRY,
        SKILLS.RANGED_BLACKPOWDER
      ],
      [
        SKILLS.INTIMIDATE,
        SKILLS.INTUITION,
        SKILLS.LEADERSHIP,
        SKILLS.LORE_WARFARE
      ],
      [
        SKILLS.GAMBLE,
        SKILLS.LORE_HERALDRY
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.WARRIORS,
    name: CAREERS.GUARD,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.WARRIORS,
    name: CAREERS.KNIGHT,
    limitations: [SPECIES.HUMAN, SPECIES.HIGH_ELF, SPECIES.WOOD_ELF],
    characteristics: [2, 0, 1, 0, 1, 1, 0, 0, 3, 4],
    levels: ['squire', 'knight', 'first knight', 'knight of the inner circle'],
    status: [[STATUS.SILVER, 3], [STATUS.SILVER, 5], [STATUS.GOLD, 2], [STATUS.GOLD, 4]],
    skills: [
      [
        SKILLS.ATHLETICS,
        SKILLS.ANIMAL_CARE,
        SKILLS.CHARM_ANIMAL,
        SKILLS.HEAL,
        SKILLS.LORE_HERALDRY,
        SKILLS.MELEE_CAVALRY,
        SKILLS.RIDE_HORSE,
        SKILLS.TRADE_FARRIER
      ],
      [
        SKILLS.COOL,
        SKILLS.DODGE,
        SKILLS.ENDURANCE,
        SKILLS.INTIMIDATE,
        SKILLS.LANGUAGE_BATTLE,
        SKILLS.MELEE_ANY
      ],
      [
        SKILLS.CHARM,
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.LEADERSHIP,
        SKILLS.LORE_WARFARE
      ],
      [
        SKILLS.LORE_ANY,
        SKILLS.SECRET_SIGNS_KNIGHTLY_ORDER
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.WARRIORS,
    name: CAREERS.PIT_FIGHTER,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.WARRIORS,
    name: CAREERS.PROTAGONIST,
    limitations: [],
    characteristics: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    levels: ['', '', '', ''], status: [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]],
    skills: [
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.,
        SKILLS.,
        SKILLS.
      ],
      [
        SKILLS.,
        SKILLS.
      ]
    ],
    talents: [
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ],
      [
        TALENTS.,
        TALENTS.,
        TALENTS.,
        TALENTS.
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.WARRIORS,
    name: CAREERS.SOLDIER,
    limitations: [SPECIES.HUMAN, SPECIES.DWARF, SPECIES.HALFLING, SPECIES.HIGH_ELF, SPECIES.WOOD_ELF],
    characteristics: [1, 2, 0, 1, 3, 0, 0, 0, 1, 4],
    levels: ['recruit', 'soldier', 'sergeant', 'officer'],
    status: [[STATUS.SILVER, 1], [STATUS.SILVER, 3], [STATUS.SILVER, 5], [STATUS.GOLD, 1]],
    skills: [
      [
        SKILLS.ATHLETICS,
        SKILLS.CLIMB,
        SKILLS.COOL,
        SKILLS.DODGE,
        SKILLS.ENDURANCE,
        SKILLS.LANGUAGE_BATTLE,
        SKILLS.MELEE_BASIC,
        [SKILLS.PLAY_DRUM, SKILLS.PLAY_FIFE].join(' or ')
      ],
      [
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.GAMBLE,
        SKILLS.GOSSIP,
        SKILLS.MELEE_ANY,
        SKILLS.RANGED_ANY,
        SKILLS.OUTDOOR_SURVIVAL
      ],
      [
        SKILLS.HEAL,
        SKILLS.INTUITION,
        SKILLS.LEADERSHIP,
        SKILLS.PERCEPTION
      ],
      [
        SKILLS.LORE_WARFARE,
        SKILLS.NAVIGATION
      ]
    ],
    talents: [
      [
        TALENTS.DICEMAN,
        TALENTS.MARKSMAN,
        TALENTS.STRONG_BACK,
        TALENTS.WARRIOR_BORN
      ],
      [
        TALENTS.DRILLED,
        TALENTS.ETIQUETTE_SOLDIERS,
        TALENTS.RAPID_RELOAD,
        TALENTS.SHIELDSMAN
      ],
      [
        TALENTS.COMBAT_MASTER,
        TALENTS.ENCLOSED_FIGHTER,
        TALENTS.UNSHAKABLE,
        TALENTS.WAR_LEADER,
      ],
      [
        TALENTS.INSPIRING,
        TALENTS.PUBLIC_SPEAKER,
        TALENTS.SEASONED_TRAVELLER,
        TALENTS.STOUT_HEARTED
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.WARRIORS,
    name: CAREERS.SLAYER,
    limitations: [SPECIES.DWARF],
    characteristics: [1, 0, 1, 2, 4, 3, 0, 0, 1, 0],
    levels: ['troll slayer', 'giant slayer', 'dragon slayer', 'daemon slayer'],
    status: [[STATUS.BRASS, 2], [STATUS.BRASS, 2], [STATUS.BRASS, 2], [STATUS.BRASS, 2]],
    skills: [
      [
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.COOL,
        SKILLS.DODGE,
        SKILLS.ENDURANCE,
        SKILLS.GAMBLE,
        SKILLS.HEAL,
        SKILLS.LORE_TROLLS,
        SKILLS.MELEE_BASIC
      ],
      [
        SKILLS.EVALUATE,
        SKILLS.INTIMIDATE,
        SKILLS.LANGUAGE_BATTLE,
        SKILLS.LORE_GIANTS,
        SKILLS.MELEE_TWOHANDED,
        SKILLS.OUTDOOR_SURVIVAL
      ],
      [
        SKILLS.ENTERTAIN_STORYTELLING,
        SKILLS.LORE_DRAGONS,
        SKILLS.PERCEPTION,
        SKILLS.RANGED_THROWN
      ],
      [
        SKILLS.INTUITION,
        SKILLS.LORE_CHAOS
      ]
    ],
    talents: [
      [
        TALENTS.DUAL_WIELDER,
        TALENTS.FEARLESS_EVERYTHING,
        TALENTS.FRENZY,
        TALENTS.SLAYER
      ],
      [
        TALENTS.HARDY,
        TALENTS.IMPLACABLE,
        TALENTS.MENACING,
        TALENTS.REVERSAL
      ],
      [
        TALENTS.AMBIDEXTROUS,
        TALENTS.FURIOUS_ASSAULT,
        TALENTS.RELENTLESS,
        TALENTS.ROBUST
      ],
      [
        TALENTS.COMBAT_MASTER,
        TALENTS.FRIGHTENING,
        TALENTS.STRIKE_MIGHTY_BLOW,
        TALENTS.VERY_STRONG
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  },
  {
    class: CLASSES.WARRIORS,
    name: CAREERS.WARRIOR_PRIEST,
    limitations: [SPECIES.HUMAN],
    characteristics: [1, 0, 2, 1, 3, 0, 0, 0, 1, 4],
    levels: ['novitiate', 'warrior priest', 'priest sergeant', 'priest captain'],
    status: [[STATUS.BRASS, 2], [STATUS.SILVER, 2], [STATUS.SILVER, 3], [STATUS.SILVER, 4]],
    skills: [
      [
        SKILLS.COOL,
        SKILLS.DODGE,
        SKILLS.ENDURANCE,
        SKILLS.HEAL,
        SKILLS.LEADERSHIP,
        SKILLS.LORE_THEOLOGY,
        SKILLS.MELEE_ANY,
        SKILLS.PRAY
      ],
      [
        SKILLS.CHARM,
        SKILLS.ENTERTAIN_SPEECHES,
        SKILLS.INTIMIDATE,
        SKILLS.LANGUAGE_BATTLE,
        SKILLS.MELEE_ANY,
        SKILLS.RANGED_ANY
      ],
      [
        SKILLS.ANIMAL_CARE,
        SKILLS.INTUITION,
        SKILLS.PERCEPTION,
        SKILLS.RIDE_HORSE
      ],
      [
        SKILLS.CONSUME_ALCOHOL,
        SKILLS.LORE_WARFARE
      ]
    ],
    talents: [
      [
        TALENTS.BLESS_ANY,
        TALENTS.ETIQUETTE_CULTISTS,
        TALENTS.READ_WRITE,
        TALENTS.STRONG_MINDED
      ],
      [
        TALENTS.DUAL_WIELDER,
        TALENTS.INSPIRING,
        TALENTS.INVOKE_ANY,
        TALENTS.SEASONED_TRAVELLER
      ],
      [
        TALENTS.COMBAT_AWARE,
        TALENTS.HOLY_VISIONS,
        TALENTS.PURE_SOUL,
        TALENTS.STOUT_HEARTED
      ],
      [
        TALENTS.FEARLESS_ANY,
        TALENTS.FURIOUS_ASSAULT,
        TALENTS.HOLY_HATRED,
        TALENTS.WAR_LEADER
      ]
    ],
    trappings: [
      [],
      [],
      [],
      []
    ]
  }
];
