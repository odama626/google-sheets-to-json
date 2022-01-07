#!/usr/bin/env bash

yarn ts-node index.ts

# Individual files
yarn quicktype out/items.json -o out/items.ts --just-types -t Item
yarn quicktype out/creatures.json -o out/creatures.ts --just-types -t Creature
yarn quicktype out/construction.json -o out/construction.ts --just-types -t Construction
yarn quicktype out/recipes.json -o out/recipes.ts --just-types -t Recipe
yarn quicktype out/achievements.json -o out/achievements.ts --just-types -t Achievement
yarn quicktype out/villagers.json -o out/villagers.ts --just-types -t Villager
yarn quicktype out/special-npcs.json -o out/special-npcs.ts --just-types -t SpecialNpc
yarn quicktype out/reactions.json -o out/reactions.ts --just-types -t Reaction
yarn quicktype out/message-cards.json -o out/message-cards.ts --just-types -t MessageCard
yarn quicktype out/season-and-events.json -o out/season-and-events.ts --just-types -t SeasonAndEvent

# Biggus Mammoth
yarn quicktype out/all.json -o out/all.ts --just-types -t Item

# Potential issue with files not being written before prettier can see them
sleep 5

yarn prettier:fix
yarn prettier "out/*.json" --write

yarn tsc -p tsconfig.types.json
