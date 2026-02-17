const wc3_build_orders = [
  {
  "name": "Beginner Rifle Caster",
  "faction": "Humans",
  "author": "Unknown",
  "content": {
    "name": "Beginner Rifle Caster",
    "race": "Humans",
    "opponent_race": "Any",
    "source": "https://warcraft-gym.com/human-beginner-rifle-caster/",
    "build_order": [
      {
        "food": 10,
        "gold": 5,
        "lumber": 5,
        "notes": [
          "4 @human_unit/peasant.png@ mine @resource/gold.png@ | 1 @human_unit/peasant.png@ builds @human_building/altar_of_kings.png@",
          "Next 4 @human_unit/peasant.png@: @human_building/barracks.png@ => @human_building/farm.png@ => @resource/gold.png@ => @human_building/farm.png@",
          "@human_hero/archmage.png@ (once @human_building/altar_of_kings.png@ is finished)"
        ]
      },
      {
        "food": 16,
        "notes": [
          "Constantly produce @human_unit/footman.png@"
        ]
      },
      {
        "food": 18,
        "notes": [
          "@human_building/farm.png@"
        ]
      },
      {
        "food": 21,
        "notes": [
          "Scout opponent with @human_unit/footman.png@ | @human_building/scout_tower.png@"
        ]
      },
      {
        "food": 22,
        "notes": [
          "Pause @human_unit/peasant.png@ production",
          "When @human_hero/archmage.png@ | Call 5 @human_special/militia.png@ & creep"
        ]
      },
      {
        "food": 25,
        "gold": 5,
        "lumber": 9,
        "notes": [
          "Upgrade @human_building/scout_tower.png@ to arcane tower",
          "Make 1 last @human_unit/peasant.png@ (14 total)"
        ]
      },
      {
        "time": "3:10",
        "food": 29,
        "notes": [
          "Stop making @human_unit/footman.png@ (5 total)",
          "Upgrade @human_building/town_hall.png@ to Keep"
        ]
      }
    ]
  },
  "opponent_faction": "Any"
}
];
