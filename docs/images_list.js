// Most functions were copied from RTS Overlay

/**
 * Get the images available for AoE2, sorted by sub-folder.
 *
 * @returns Dictionary with all the images per sub-folder.
 */
function getImagesAoE2() {
  // This is obtained using the 'python/utilities/list_images.py' script.
  let imagesDict = {
    age: "AgeUnknown.png#CastleAgeIconDE.png#CastleAgeIconDE_alpha.png#DarkAgeIconDE.png#DarkAgeIconDE_alpha.png#FeudalAgeIconDE.png#FeudalAgeIconDE_alpha.png#ImperialAgeIconDE.png#ImperialAgeIconDE_alpha.png",
    animal:
      "AoE2DE_ingame_goose_icon.png#AoE2DE_ingame_ibex_icon.png#AoE2_DE_box_turtles_icon.png#AoE2_DE_dolphin_icon.png#AoE2_DE_dorado_icon.png#AoE2_DE_marlin_icon.png#AoE2_DE_perch_icon.png#AoE2_DE_salmon_icon.png#AoE2_DE_shore_fish_icon.png#AoE2_DE_snapper_icon.png#AoE2_DE_tuna_icon.png#Boar_aoe2DE.png#CowDE.png#Deer_aoe2DE.png#Elephant_aoe2DE.png#Goat_aoe2DE.png#Llama_aoe2DE.png#Ostrich_icon_aoe2de.png#Pig_aoe2DE.png#Rhinoceros_aoe2DE.png#Sheep_aoe2DE.png#Turkey_aoe2DE.png#Wild_Chicken.png#Yak_aoe2DE.png#Zebra_aoe2DE.png",
    archery_range:
      "Aoe2de_DOI_elephant_archer_icon.png#ArbalestDE.png#Arbalester_aoe2DE.png#Archery_range_aoe2DE.png#Archer_aoe2DE.png#Cavalryarcher_aoe2DE.png#Crossbowman_aoe2DE.png#ElephantArcherIcon-DE.png#Elite_skirmisher_aoe2DE.png#Hand_cannoneer_aoe2DE.png#Heavycavalryarcher_aoe2de.png#ImperialSkirmisherUpgDE.png#ParthianTacticsDE.png#Skirmisher_aoe2DE.png#ThumbRingDE.png#Heavy-cavalry-archer-resear.jpg",
    barracks:
      "Aoe2-infantry-2-pikeman.png#ArsonDE.png#Barracks_aoe2DE.png#ChampionUpgDE.png#Champion_aoe2DE.png#Eaglescout_aoe2DE.png#EagleWarriorUpgDE.png#Eaglewarrior_aoe2DE.png#EliteEagleWarriorUpgDE.png#EliteEaglewarrior_aoe2DE.png#Elite_Fire_Lancer.png#Fire_Lancer.png#GambesonsDE.png#HalberdierDE.png#Halberdier_aoe2DE.png#LongSwordmanUpgDE.png#Longswordsman_aoe2DE.png#ManAtArmsUpgDE.png#Manatarms_aoe2DE.png#MilitiaDE.png#PikemanUpDE.png#Spearman_aoe2DE.png#SquiresDE.png#Suplliesicon.png#TwoHandedSwordsmanUpgDE.png#Twohanded_aoe2DE.png",
    blacksmith:
      "Blacksmith_aoe2de.png#BlastFurnaceDE.png#BodkinArrowDE.png#BracerDE.png#ChainBardingDE.png#ChainMailArmorDE.png#FletchingDE.png#Forging_aoe2de.png#IronCastingDE.png#LeatherArcherArmorDE.png#PaddedArcherArmorDE.png#PlateBardingArmorDE.png#PlateMailArmorDE.png#RingArcherArmorDE.png#ScaleBardingArmorDE.png#ScaleMailArmorDE.png",
    castle:
      "CastleAgeUnique.png#Castle_aoe2DE.png#ConscriptionDE.png#HoardingsDE.png#Petard_aoe2DE.png#SapperDE.png#SpiesDE.png#Trebuchet_aoe2DE.png#Unique-tech-imperial.jpg",
    civilization:
      "CivIcon-Armenians.png#CivIcon-Aztecs.png#CivIcon-Bengalis.png#CivIcon-Berbers.png#CivIcon-Bohemians.png#CivIcon-Britons.png#CivIcon-Bulgarians.png#CivIcon-Burgundians.png#CivIcon-Burmese.png#CivIcon-Byzantines.png#CivIcon-Celts.png#CivIcon-Chinese.png#CivIcon-Cumans.png#CivIcon-Dravidians.png#CivIcon-Ethiopians.png#CivIcon-Franks.png#CivIcon-Georgians.png#CivIcon-Goths.png#CivIcon-Gurjaras.png#CivIcon-Hindustanis.png#CivIcon-Huns.png#CivIcon-Incas.png#CivIcon-Indians.png#CivIcon-Italians.png#CivIcon-Japanese.png#CivIcon-Jurchens.png#CivIcon-Khitans.png#CivIcon-Khmer.png#CivIcon-Koreans.png#CivIcon-Lithuanians.png#CivIcon-Magyars.png#CivIcon-Malay.png#CivIcon-Malians.png#CivIcon-Mayans.png#CivIcon-Mongols.png#CivIcon-Persians.png#CivIcon-Poles.png#CivIcon-Portuguese.png#CivIcon-Romans.png#CivIcon-Saracens.png#CivIcon-Shu.png#CivIcon-Sicilians.png#CivIcon-Slavs.png#CivIcon-Spanish.png#CivIcon-Tatars.png#CivIcon-Teutons.png#CivIcon-Turks.png#CivIcon-Vietnamese.png#CivIcon-Vikings.png#CivIcon-Wei.png#CivIcon-Wu.png#question_mark.png#question_mark_black.png",
    defensive_structures:
      "Bombard_tower_aoe2DE.png#Donjon_aoe2DE.png#FortifiedWallDE.png#Gate_aoe2de.png#Krepost_aoe2de.png#Outpost_aoe2de.png#Palisade_gate_aoe2DE.png#Palisade_wall_aoe2de.png#Stone_wall_aoe2de.png#Tower_aoe2de.png",
    dock: "Cannon_galleon_aoe2DE.png#CareeningDE.png#Demoraft_aoe2DE.png#Demoship_aoe2DE.png#Dock_aoe2de.png#Dragonship.png#DryDockDE.png#Elite-cannon-galleon-resear.png#Elite_cannon_galleon_aoe2de.png#Fastfireship_aoe2DE.png#Fireship_aoe2DE.png#Fire_galley_aoe2DE.png#FishingShipDE.png#Fish_trap_aoe2DE.png#GalleonUpgDE.png#Galleon_aoe2DE.png#Galley_aoe2DE.png#GillnetsDE.png#Heavydemoship_aoe2de.png#Lou_Chuan.png#ShipwrightDE.png#Trade_cog_aoe2DE.png#Transportship_aoe2DE.png#WarGalleyDE.png#War_galley_aoe2DE.png",
    hero: "Cao_Cao.png#Liu_Bei.png#Sun_Jian.png",
    lumber_camp: "BowSawDE.png#DoubleBitAxe_aoe2DE.png#Lumber_camp_aoe2de.png#TwoManSawDE.png",
    market:
      "BankingDE.png#CaravanDE.png#CoinageDE.png#GuildsDE.png#Market_aoe2DE.png#Tradecart_aoe2DE.png",
    mill: "Aoe2-icon--folwark.png#CropRotationDE.png#Domestication.png#FarmDE.png#HeavyPlowDE.png#HorseCollarDE.png#Mill_aoe2de.png#Pastoralism.png#Pasture.png#Transhumance.png",
    mining_camp:
      "GoldMiningDE.png#GoldShaftMiningDE.png#Mining_camp_aoe2de.png#StoneMiningDE.png#StoneShaftMiningDE.png",
    monastery:
      "AtonementDE.png#BlockPrintingDE.png#FaithDE.png#FervorDE.png#FortifiedChurch.png#HerbalDE.png#HeresyDE.png#IlluminationDE.png#MonasteryAoe2DE.png#Monk_aoe2DE.png#RedemptionDE.png#SanctityDE.png#TheocracyDE.png",
    other:
      "Ao2de_caravanserai_icon.png#Feitoria_aoe2DE.png#House_aoe2DE.png#MuleCart.png#Wonder_aoe2DE.png",
    resource:
      "Aoe2de_food.png#Aoe2de_gold.png#Aoe2de_hammer.png#Aoe2de_stone.png#Aoe2de_wood.png#BerryBushDE.png#MaleVillDE_alpha.png#tree.png#FEMALEVILLDE.jpg#MaleVillDE.jpg#villager.jpg",
    siege_workshop:
      "AoE2DE_Armored_Elephant_icon.png#AoE2DE_Siege_Elephant_icon.png#Battering_ram_aoe2DE.png#Bombard_cannon_aoe2DE.png#CappedRamDE.png#Capped_ram_aoe2DE.png#HeavyScorpionDE.png#Heavyscorpion_aoe2DE.png#Heavy_Rocket_Cart.png#Mangonel_aoe2DE.png#OnagerDE.png#Onager_aoe2DE.png#Rocket_Cart.png#Scorpion_aoe2DE.png#SiegeOnagerDE.png#Siegetower_aoe2DE.png#Siege_onager_aoe2DE.png#Siege_ram_aoe2DE.png#Siege_workshop_aoe2DE.png#Traction_Trebuchet.png#Siege-ram-research.jpg",
    stable:
      "Aoe2de_camel_scout.png#Aoe2_heavycamelriderDE.png#Battle_elephant_aoe2DE.png#BloodlinesDE.png#Camelrider_aoe2DE.png#Cavalier_aoe2DE.png#EliteBattleElephantUpg.png#Elitesteppelancericon.png#EliteSteppeLancerUpgDE.png#Elite_battle_elephant_aoe2DE.png#HeavyCamelUpgDE.png#Heavy_Hei_Guang_Cavalry.png#Hei_Guang_Cavalry.png#HusbandryDE.png#Hussar_aoe2DE.png#Hussar_upgrade_aoe2de.png#Knight_aoe2DE.png#Lightcavalry_aoe2DE.png#Paladin_aoe2DE.png#Scoutcavalry_aoe2DE.png#Stable_aoe2DE.png#Steppelancericon.png#Winged-hussar_upgrade.png#Cavalier-research.jpg#Light-cavalry-research.jpg#Paladin-research.jpg",
    town_center:
      "HandcartDE.png#LoomDE.png#Towncenter_aoe2DE.png#TownPatrolDE.png#TownWatchDE.png#WheelbarrowDE.png",
    unique_unit:
      "Aoe2-icon--houfnice.png#Aoe2-icon--obuch.png#Aoe2-icon-coustillier.png#Aoe2-icon-flemish-militia.png#Aoe2-icon-hussite-wagon.png#Aoe2-icon-serjeant.png#Aoe2de_camel_scout.png#Aoe2de_Chakram.png#Aoe2de_Ghulam.png#Aoe2de_ratha_ranged.png#Aoe2de_shrivamsha_rider.png#Aoe2de_Thirisadai.png#Aoe2de_Urumi.png#Arambaiicon-DE.png#Ballistaelephanticon-DE.png#BerserkIcon-DE.png#BoyarIcon-DE.png#CamelArcherIcon-DE.png#CaravelIcon-DE.png#CataphractIcon-DE.png#Centurion-DE.png#ChukoNuIcon-DE.png#CompositeBowman.png#CondottieroIcon-DE.png#ConquistadorIcon-DE.png#Dromon-DE.png#Fire_Archer.png#Flaming_camel_icon.png#GbetoIcon-DE.png#GenitourIcon-DE.png#GenoeseCrossbowmanIcon-DE.png#Grenadier.png#HuskarlIcon-DE.png#ImperialCamelRiderIcon-DE.png#Imperialskirmishericon-DE.png#Iron_Pagoda.png#JaguarWarriorIcon-DE.png#JanissaryIcon-DE.png#Jian_Swordsman_strong.png#KamayukIcon-DE.png#Karambitwarrioricon-DE.png#Keshikicon.png#Kipchakicon.png#Konnikicon.png#Legionary-DE.png#Leitisicon.png#Liao_Dao.png#LongboatIcon-DE.png#LongbowmanIcon-DE.png#MagyarHuszarIcon-DE.png#MamelukeIcon-DE.png#MangudaiIcon-DE.png#MissionaryIcon-DE.png#Mounted_Trebuchet.png#OrganGunIcon-DE.png#PlumedArcherIcon-DE.png#Rattanarchericon-DE.png#SamuraiIcon-DE.png#Shotelwarrioricon-DE.png#SlingerIcon-DE.png#TarkanIcon-DE.png#TeutonicKnightIcon-DE.png#ThrowingAxemanIcon-DE.png#Tiger_Cavalry.png#TurtleShipIcon-DE.png#WarElephantIcon-DE.png#WarWagonIcon-DE.png#War_Chariot.png#White_Feather_Guard.png#WoadRaiderIcon-DE.png#Xianbei_Raider.png#Monaspa.jpg#WarriorPriest.jpg",
    university:
      "ArchitectureDE.png#ArrowSlitsDE.png#BallisticsDE.png#BombardTower_aoe2DE.png#ChemistryDE.png#FortifiedWallDE.png#HeatedShotDE.png#Masonry_aoe2de.png#MurderHolesDE.png#SiegeEngineersDE.png#Tower_aoe2de.png#TreadmillCraneDE.png#University_AoE2_DE.png",
  };

  // Split each string (e.g. 'image_0#image_1#image_2') in a list of images.
  for (const [key, value] of Object.entries(imagesDict)) {
    imagesDict[key] = value.split("#");
  }

  return imagesDict;
}

/**
 * Get the images available for AoE4, sorted by sub-folder.
 *
 * @returns Dictionary with all the images per sub-folder.
 */
function getImagesAoE4() {
  // This is obtained using the 'python/utilities/list_images.py' script.
  let imagesDict = {
    age: "age_unknown.png#age_1.webp#age_2.webp#age_3.webp#age_4.webp#goldenagetier1.webp#goldenagetier2.webp#goldenagetier3.webp#goldenagetier4.webp#goldenagetier5.webp#vizier_point.webp",
    civilization_flag:
      "CivIcon-AbbasidAoE4.png#CivIcon-AbbasidAoE4_spacing.png#CivIcon-AyyubidsAoE4.png#CivIcon-AyyubidsAoE4_spacing.png#CivIcon-ByzantinesAoE4.png#CivIcon-ByzantinesAoE4_spacing.png#CivIcon-ChineseAoE4.png#CivIcon-ChineseAoE4_spacing.png#CivIcon-DelhiAoE4.png#CivIcon-DelhiAoE4_spacing.png#CivIcon-EnglishAoE4.png#CivIcon-EnglishAoE4_spacing.png#CivIcon-FrenchAoE4.png#CivIcon-FrenchAoE4_spacing.png#CivIcon-GoldenHordeAoE4.png#CivIcon-GoldenHordeAoE4_spacing.png#CivIcon-HouseofLancasterAoE4.png#CivIcon-HouseofLancasterAoE4_spacing.png#CivIcon-HREAoE4.png#CivIcon-HREAoE4_spacing.png#CivIcon-JapaneseAoE4.png#CivIcon-JapaneseAoE4_spacing.png#CivIcon-JeanneDArcAoE4.png#CivIcon-JeanneDArcAoE4_spacing.png#CivIcon-KnightsTemplarAoE4.png#CivIcon-KnightsTemplarAoE4_spacing.png#CivIcon-MacedonianDynastyAoE4.png#CivIcon-MacedonianDynastyAoE4_spacing.png#CivIcon-MaliansAoE4.png#CivIcon-MaliansAoE4_spacing.png#CivIcon-MongolsAoE4.png#CivIcon-MongolsAoE4_spacing.png#CivIcon-OrderOfTheDragonAoE4.png#CivIcon-OrderOfTheDragonAoE4_spacing.png#CivIcon-OttomansAoE4.png#CivIcon-OttomansAoE4_spacing.png#CivIcon-RusAoE4.png#CivIcon-RusAoE4_spacing.png#CivIcon-SengokuDaimyoAoE4.png#CivIcon-SengokuDaimyoAoE4_spacing.png#CivIcon-TughlaqDynastyAoE4.png#CivIcon-TughlaqDynastyAoE4_spacing.png#CivIcon-ZhuXiLegacyAoE4.png#CivIcon-ZhuXiLegacyAoE4_spacing.png#abb.webp#ang.webp#ant.webp#ayy.webp#byz.webp#chi.webp#del.webp#dra.webp#eng.webp#fre.webp#gen.webp#goh.webp#hol.webp#hos.webp#hre.webp#jap.webp#jda.webp#koc.webp#kof.webp#kte.webp#mac.webp#mal.webp#mon.webp#ott.webp#pol.webp#rus.webp#sen.webp#teu.webp#tug.webp#ven.webp#zxl.webp",
    abilities: "attack-move.webp#repair.webp#ronin_hire_single.webp",
    ability_chinese: "collect_tax.webp#supervise.webp",
    ability_golden_horde:
      "debuff_arrow.webp#defensive_edict.webp#healing_aura.webp#khan_guard.webp#khan_warcry.webp#kharash_edict.webp#kipchak_bleed.webp#production_edict.webp#relic_for_ovoo.webp#rus_tributes.webp#stockyard_edict.webp",
    ability_jeanne:
      "ability-champion-companions-1.webp#ability-consecrate-1.webp#ability-divine-arrow-1.webp#ability-divine-restoration-1.webp#ability-field-commander-1.webp#ability-gunpowder-monarch-1.webp#ability-holy-wrath-1.webp#ability-path-of-the-archer-1.webp#ability-path-of-the-warrior-1.webp#ability-rider-companions-1.webp#ability-riders-ready-1.webp#ability-strength-of-heaven-1.webp#ability-to-arms-men-1.webp#ability-valorous-inspiration-1.webp",
    ability_lancaster:
      "call_to_arms.webp#earls_guard.webp#hammer_throw.webp#lancaster_patronage.webp#lord_of_lancaster_aura.webp#manor_ability.webp#platemail_puncturing_projectile.webp#shire_levy_2.webp#shire_levy_3.webp#silver_prospecting.webp",
    ability_macedonian:
      "cavalry_berserking.webp#champion_spawner.webp#cistern_favor.webp#free_unit_spawning_buff.webp#galata_crossbowman_spawner.webp#grand_winery_byz_mac_ha.webp#horseman_champion_aura.webp#ranged_berserking.webp#riddari_champion_aura.webp#runestone_buff.webp#scout_champion_aura.webp#stronger_together.webp#stronghold_weapons_active.webp",
    ability_sengoku:
      "castle_of_the_crow_aura.webp#daimyo_aura.webp#daimyo_rally_cry.webp#hojo.webp#hojo_clan.webp#matsuri_aura.webp#oda.webp#oda_clan.webp#redirect_yatai.webp#sake_brewery_aura.webp#shinobi_ambush.webp#shinobi_scout.webp#takeda.webp#takeda_clan.webp#yatai_gathering.webp",
    ability_templar:
      "battle_glory.webp#castille_aura.webp#confrere_aura.webp#gunpowder_resistance.webp#knightly_brotherhood.webp#landscape_preservation.webp#pilgrim_ability.webp#pilgrim_loan_lrg.webp#pilgrim_loan_med.webp#pilgrim_loan_sml.webp#spearman_aura.webp#szlachta_atk_speed_reduction.webp#teutonic_wrath.webp",
    ability_tughluq:
      "ajmer.webp#bhakkar.webp#governor.webp#governor_armor.webp#governor_cavalry.webp#governor_food.webp#governor_panel.webp#jalor.webp#multan.webp#sehwan.webp#uch.webp",
    building_byzantines: "aqueduct-1.webp#cistern-1.webp#mercenary-house-2.webp#olive-grove-1.webp",
    building_chinese: "granary.webp#pagoda.webp#village.webp",
    building_defensive:
      "keep.webp#outpost.webp#palisade-gate.webp#palisade-wall.webp#stone-wall-gate.webp#stone-wall-tower.webp#stone-wall.webp",
    building_economy:
      "farm.webp#house.webp#lumber-camp.webp#market.webp#mill.webp#mining-camp.webp#town-center.webp",
    building_golden_horde: "fortified_outpost.webp#stockyard.webp",
    building_japanese:
      "buddhist-temple-3.webp#castle-4.webp#farmhouse-1.webp#forge-1.webp#shinto-shrine-3.webp",
    building_lancaster: "manor.webp",
    building_macedonian:
      "runestones.webp#silver_deposit.webp#varangian_arsenal.webp#varangian_stronghold.webp#varangian_warcamp.webp",
    building_malians: "cattle-ranch-2.webp#pit-mine-1.webp#toll-outpost-1.webp",
    building_military: "archery-range.webp#barracks.webp#dock.webp#siege-workshop.webp#stable.webp",
    building_mongols: "ger.webp#ovoo.webp#pasture.webp#prayer-tent.webp",
    building_ottomans: "military-school-1.webp",
    building_poi:
      "forgotten_ruins.webp#koth_site.webp#merchant_camp.webp#point_of_interest.webp#ronin_building.webp#ruined_outpost.webp#wolf_den.webp",
    building_religious: "monastery.webp#mosque.webp",
    building_rus:
      "fortified-palisade-gate.webp#fortified-palisade-wall.webp#hunting-cabin.webp#wooden-fortress.webp",
    building_sengoku: "daimyo.webp#matsuri.webp#towncenter.webp",
    building_technology: "blacksmith.webp#madrasa.webp#university.webp",
    building_tughluq: "tughluqabad_fort.webp",
    landmark_abbasid:
      "culture-wing.webp#economic-wing.webp#house-of-wisdom.webp#military-wing.webp#prayer-hall-of-uqba.webp#trade-wing.webp",
    landmark_byzantines:
      "cathedral-of-divine-wisdom-4.webp#cistern-of-the-first-hill-2.webp#foreign-engineering-company-3.webp#golden-horn-tower-2.webp#grand-winery-1.webp#imperial-hippodrome-1.webp#palatine-school-3.webp",
    landmark_chinese:
      "astronomical-clocktower.webp#barbican-of-the-sun.webp#enclave-of-the-emperor.webp#great-wall-gatehouse.webp#imperial-academy.webp#imperial-palace.webp#spirit-way.webp",
    landmark_delhi:
      "compound-of-the-defender.webp#dome-of-the-faith.webp#great-palace-of-agra.webp#hisar-academy.webp#house-of-learning.webp#palace-of-the-sultan.webp#tower-of-victory.webp",
    landmark_english:
      "abbey-of-kings.webp#berkshire-palace.webp#cathedral-of-st-thomas.webp#council-hall.webp#kings-palace.webp#the-white-tower.webp#wynguard-palace.webp",
    landmark_french:
      "chamber-of-commerce.webp#college-of-artillery.webp#guild-hall.webp#notre-dame.webp#red-palace.webp#royal-institute.webp#school-of-cavalry.webp",
    landmark_golden_horde: "golden_tent.webp",
    landmark_hre:
      "aachen-chapel.webp#burgrave-palace.webp#elzbach-palace.webp#great-palace-of-flensburg.webp#meinwerk-palace.webp#palace-of-swabia.webp#regnitz-cathedral.webp",
    landmark_japanese:
      "castle-of-the-crow-4.webp#floating-gate-2.webp#koka-township-1.webp#kura-storehouse-1.webp#tanegashima-gunsmith-3.webp#temple-of-equality-2.webp#tokugawa-shrine-4.webp",
    landmark_lancaster: "kings_college.webp#lancaster_castle.webp",
    landmark_malians:
      "farimba-garrison-2.webp#fort-of-the-huntress-3.webp#grand-fulani-corral-2.webp#great-mosque-4.webp#griot-bara-3.webp#mansa-quarry-2.webp#saharan-trade-network-1.webp",
    landmark_mongols:
      "deer-stones.webp#khaganate-palace.webp#kurultai.webp#monument-of-the-great-khan.webp#steppe-redoubt.webp#the-silver-tree.webp#the-white-stupa.webp",
    landmark_ottomans:
      "azure-mosque-4.webp#istanbul-imperial-palace-2.webp#istanbul-observatory-3.webp#mehmed-imperial-armory-2.webp#sea-gate-castle-3.webp#sultanhani-trade-network-1.webp#twin-minaret-medrese-1.webp",
    landmark_rus:
      "abbey-of-the-trinity.webp#cathedral-of-the-tsar.webp#high-armory.webp#high-trade-house.webp#kremlin.webp#spasskaya-tower.webp#the-golden-gate.webp",
    landmark_sengoku: "ryokan.webp#sake_brewery.webp#sword_hunt_statue.webp",
    landmark_templar: "fortress.webp",
    landmark_zhuxi:
      "jiangnan-tower-2.webp#meditation-gardens-1.webp#mount-lu-academy-1.webp#shaolin-monastery-2.webp#temple-of-the-sun-3.webp#zhu-xis-library-3.webp",
    resource:
      "berrybush.webp#boar.webp#bounty.webp#cattle.webp#deer.webp#fish.webp#gaiatreeprototypetree.webp#oliveoil.webp#rally.webp#relics.webp#repair.webp#resource_food.webp#resource_gold.webp#resource_stone.webp#resource_wood.webp#sacred_sites.webp#sheep.webp#time.webp#wolf.webp",
    technology_abbasid:
      "agriculture.webp#armored-caravans.webp#boot-camp.webp#camel-handling.webp#camel-rider-barding-4.webp#camel-rider-shields.webp#camel-support.webp#composite-bows.webp#faith.webp#fertile-crescent-2.webp#fresh-foodstuffs.webp#grand-bazaar.webp#improved-processing.webp#medical-centers.webp#phalanx.webp#preservation-of-knowledge.webp#public-library.webp#spice-roads.webp#teak-masts.webp",
    technology_ayyubids:
      "culture-wing-advancement-1.webp#culture-wing-logistics-1.webp#economic-wing-growth-1.webp#economic-wing-industry-1.webp#infantry-support-4.webp#military-wing-master-smiths-1.webp#military-wing-reinforcement-1.webp#phalanx-2.webp#siege-carpentry-3.webp#sultans-mamluks-3.webp#trade-wing-advisors-1.webp#trade-wing-bazaar-1.webp",
    technology_byzantines:
      "border-settlements-2.webp#eastern-mercenary-contract-1.webp#elite-mercenaries-4.webp#expilatores-2.webp#ferocious-speed-4.webp#greek-fire-projectiles-4.webp#heavy-dromon-3.webp#liquid-explosives-3.webp#numeri-4.webp#silk-road-mercenary-contract-1.webp#teardrop-shields-3.webp#trapezites-2.webp#veteran-mercenaries-3.webp#western-mercenary-contract-1.webp",
    technology_chinese:
      "ancient-techniques.webp#battle-hardened.webp#extra-hammocks.webp#extra-materials.webp#handcannon-slits.webp#imperial-examination.webp#pyrotechnics.webp#reload-drills.webp#reusable-barrels.webp#thunderclap-bombs-4.webp",
    technology_defensive:
      "arrow-slits.webp#boiling-oil.webp#cannon-emplacement.webp#court-architects.webp#fortify-outpost.webp#springald-emplacement.webp",
    technology_delhi:
      "all-seeing-eye.webp#armored-beasts.webp#efficient-production.webp#forced-march.webp#hearty-rations.webp#honed-blades.webp#lookout-towers.webp#mahouts.webp#manuscript-trade-1.webp#paiks.webp#reinforced-foundations.webp#salvaged-materials.webp#sanctity.webp#siege-elephant.webp#slow-burning-defenses.webp#swiftness.webp#tranquil-venue.webp#village-fortresses.webp#zeal.webp",
    technology_dragon:
      "bodkin-bolts-4.webp#dragon-fire-2.webp#dragon-scale-leather-3.webp#golden-cuirass-2.webp#war-horses-4.webp#zornhau-3.webp",
    technology_economy:
      "acid-distilization.webp#crosscut-saw.webp#cupellation.webp#double-broadaxe.webp#drift-nets.webp#extended-lines.webp#fertilization.webp#forestry.webp#horticulture.webp#lumber-preservation.webp#precision-cross-breeding.webp#professional-scouts.webp#shaft-mining.webp#specialized-pick.webp#survival-techniques.webp#textiles.webp#wheelbarrow.webp",
    technology_english:
      "admiralty-2.webp#armor-clad.webp#arrow-volley.webp#enclosures.webp#network-of-citadels.webp#setup-camp.webp#shattering-projectiles.webp",
    technology_french:
      "cantled-saddles.webp#chivalry.webp#crossbow-stirrups.webp#enlistment-incentives.webp#gambesons.webp#long-guns.webp#merchant-guilds-4.webp#royal-bloodlines.webp",
    technology_golden_horde:
      "archery-range-reinforcements-3.webp#barracks-reinforcements-3.webp#battlefield-salvage-3.webp#bechhead_ram.webp#earthen-core-walls-3.webp#glorious_charge.webp#golden_tent_building_carts_age2.webp#golden_tent_horde_rally_age3.webp#golden_tent_khan_age2.webp#golden_tent_lumber_shields_age3.webp#golden_tent_relic_ovoos_age3.webp#golden_tent_stone_armies_age4.webp#golden_tent_yam_network_trade_age4.webp#horseman_rally.webp#increased_supplies.webp#over_grazing.webp#ovoo-ceremony-4.webp#ovoo-offering-3.webp#ovoo-tithe-4.webp#padded_armor.webp#reinforcements.webp#rotation_grazing.webp#stables-reinforcements-3.webp#triple_shot.webp",
    technology_hre:
      "awl-pike.webp#benediction.webp#cistercian-churches.webp#devoutness.webp#fire-stations.webp#heavy-maces.webp#inspired-warriors.webp#marching-drills.webp#reinforced-defenses.webp#riveted-chain-mail-2.webp#slate-and-stone-construction.webp#steel-barding-3.webp#two-handed-weapon.webp",
    technology_japanese:
      "bunrei.webp#copper-plating-3.webp#daimyo-manor-1.webp#daimyo-palace-2.webp#do-maru-armor-4.webp#explosives-4.webp#five_ministries.webp#fudasashi-3.webp#gion_festival.webp#heated-shot-4.webp#hizukuri-2.webp#kabura-ya-whistling-arrow-3.webp#kobuse-gitae-3.webp#nagae-yari-4.webp#nehan.webp#oda-tactics-4.webp#odachi-3.webp#shinto_rituals.webp#shogunate-castle-3.webp#swivel-cannon-4.webp#takezaiku-2.webp#tatara-1.webp#towara-1.webp#yaki-ire-4.webp#zen.webp",
    technology_jeanne: "companion-equipment-3.webp#ordinance-company-3.webp",
    technology_lancaster:
      "billmen.webp#burgundian_imports.webp#collar_of_esses.webp#condensed_land_practices.webp#earlguardupgrade.webp#hill_land_training.webp#hobelar_upgrade_age3.webp#hobelar_upgrade_age4.webp#modern_military_tactics.webp#open_field_system.webp#padded_jack.webp#scutage.webp#ships_of_the_crown.webp#synchronized_shot.webp#warwolf_trebuchet.webp#yeoman_upgrade_age3.webp#yeoman_upgrade_age4.webp",
    technology_macedonian:
      "blade-inlaying-2.webp#butted-chainmail-2.webp#decree_of_the_akalouthos.webp#fortifications-2.webp#iron-fittings-2.webp#lamellar-armor-2.webp#pattern-welding-2.webp#prolonged-siege-4.webp#rhomphaia-3.webp#roman-fire-4.webp#ruinous-blinding-2.webp#scale-barding-2.webp#sharpening-stones-2.webp",
    technology_malians:
      "banco-repairs-2.webp#canoe-tactics-2.webp#farima-leadership-4.webp#imported-armor-3.webp#local-knowledge-4.webp#poisoned-arrows-3.webp#precision-training-4.webp",
    technology_military:
      "angled-surfaces.webp#balanced-projectiles.webp#biology.webp#bloomery.webp#chemistry.webp#damascus-steel.webp#decarbonization.webp#elite-army-tactics.webp#fitted-leatherwork.webp#geometry.webp#greased-axles.webp#incendiary-arrows.webp#insulated-helm.webp#iron-undermesh.webp#master-smiths.webp#military-academy.webp#platecutter-point.webp#serpentine-powder.webp#siege-engineering.webp#siege-works.webp#silk-bowstrings.webp#steeled-arrow.webp#wedge-rivets.webp",
    technology_mongols:
      "additional-torches.webp#improved_production.webp#monastic-shrines.webp#piracy.webp#raid-bounty.webp#siha-bow-limbs.webp#steppe-lancers.webp#stone-bounty.webp#stone-commerce.webp#superior-mobility.webp#whistling-arrows.webp#yam-network.webp",
    technology_naval:
      "additional-sails.webp#armored-hull.webp#chaser-cannons.webp#explosives.webp#extra-ballista.webp#incendiaries-3.webp#naval-arrow-slits.webp#navigator-lookout.webp#shipwrights-4.webp#springald-crews-3.webp",
    technology_ottomans:
      "advanced-academy-1.webp#anatolian-hills-1.webp#extensive-fortifications.webp#fast-training-1.webp#field-work-1.webp#great-bombard-emplacement.webp#great-bombard-vizier.webp#imperial-fleet-4.webp#janissary-company-1.webp#janissary-guns-4.webp#mehter-drums-1.webp#military-campus-1.webp#pax-ottomana.webp#siege-crews-1.webp#timariots.webp#trade-bags-1.webp",
    technology_religious: "herbal-medicine.webp#piety.webp#tithe-barns.webp",
    technology_rus:
      "adaptable-hulls-3.webp#banded-arms.webp#blessing-duration.webp#boyars-fortitude.webp#castle-turret.webp#castle-watch.webp#cedar-hulls.webp#clinker-construction.webp#double-time.webp#fine-tuned-guns.webp#improved-blessing.webp#knight-sabers.webp#mounted-training.webp#saints-reach.webp#saints-veneration-4.webp#siege-crew-training.webp#wandering-town.webp#warrior_scout_2.webp",
    technology_sengoku:
      "higoyumi.webp#hojo_daimyo_1.webp#hojo_daimyo_2.webp#hojo_daimyo_3.webp#horse_training.webp#ikko_ikki_healing.webp#ikko_ikki_health_and_damage.webp#ikko_ikki_move_speed.webp#improved_yari.webp#oda_daimyo_1.webp#oda_daimyo_2.webp#oda_daimyo_3.webp#ranged_armor.webp#samurai_odachi.webp#samurai_yumi.webp#takeda_daimyo_1.webp#takeda_daimyo_2.webp#takeda_daimyo_3.webp#tanegashima_tate.webp#toko_koji_mat.webp#yari_training.webp#yatai_farm_gathering.webp",
    technology_templar:
      "brigandine.webp#cavalier_confrere_upgrade_age3.webp#cavalier_confrere_upgrade_age4.webp#counterweight_defenses.webp#cranequins.webp#crusader_fleets.webp#desert_citadel.webp#desert_outpost.webp#fanaticism.webp#genitour_upgrade_age4.webp#genoese_crossbowman_age4.webp#heavy_spearman_age4.webp#iron_clamps.webp#knighthospitaller_age3.webp#knighthospitaller_age4.webp#lettre_de_change.webp#ruleoftemplar.webp#safepassage.webp#sanctuary.webp#serjeant_age3_up.webp#serjeant_age4_up.webp#templarbrother_age4.webp#treasure_tower.webp#trebuchet_emplacement.webp",
    technology_tughluq:
      "ballista_elephant_age4.webp#collateral_damage.webp#curse_of_auliya.webp#elephant_caretakers.webp#elephant_economics_1.webp#elephant_economics_2.webp#elephant_economics_3.webp#elephant_wisdom.webp#fort_dock_support_upgrade.webp#healer_elephant_age_4.webp#infantry_improved_charge.webp#siege_supplies_upgrade.webp#spearman_cavalry_damage_production_speed.webp#tughluqabad_fort_tier2.webp#tughluqabad_fort_tier3.webp#tughluqabad_fort_tier4_ajmer.webp#tughluqabad_fort_tier4_bhakkar.webp#tughluqabad_fort_tier4_jalor.webp#tughluqabad_fort_tier4_multan.webp#tughluqabad_fort_tier4_sehwan.webp#tughluqabad_fort_tier4_uch.webp",
    technology_units:
      "adjustable-crossbars.webp#lightweight-beams-4.webp#roller-shutter-triggers.webp#spyglass-4.webp",
    technology_zhuxi:
      "10000-bolts-4.webp#advanced-administration-4.webp#bolt-magazines.webp#cloud-of-terror-4.webp#dali-horses.webp#dynastic-protectors-4.webp#hard-cased-bombs.webp#imperial-red-seals-3.webp#military-affairs-bureau-1.webp#roar-of-the-dragon-4.webp",
    unit_abbasid:
      "camel-archer-2.webp#camel-rider-3.webp#ghulam-3.webp#imam.webp#trade-caravan-1.webp",
    unit_ayyubids:
      "atabeg-1.webp#bedouin-skirmisher-2.webp#bedouin-swordsman-1.webp#camel-lancer-3.webp#dervish-3.webp#desert-raider-2.webp#manjaniq-3.webp#tower-of-the-sultan-3.webp",
    unit_byzantines:
      "arbaletrier-3.webp#camel-archer-2.webp#camel-rider-3.webp#cataphract-3.webp#cheirosiphon-3.webp#desert-raider-2.webp#dromon-2.webp#ghulam-3.webp#grenadier-4.webp#horse-archer-3.webp#javelin-thrower-2.webp#keshik-2.webp#landsknecht-3.webp#limitanei-1.webp#longbowman-2.webp#mangudai.webp#musofadi-warrior-2.webp#royal-knight-2.webp#sipahi-2.webp#streltsy.webp#tower-elephant-3.webp#tower-of-the-sultan-3.webp#varangian-guard-3.webp#war-elephant.webp#zhuge-nu-2.webp",
    unit_cavalry: "horseman-1.webp#knight-2.webp#lancer-3.webp#lancer-4.webp#scout.webp",
    unit_chinese:
      "fire-lancer-3.webp#grenadier-4.webp#imperial-official.webp#junk.webp#nest-of-bees.webp#palace-guard-3.webp#zhuge-nu-2.webp",
    unit_delhi:
      "ghazi-raider-2.webp#scholar.webp#sultans-elite-tower-elephant-4.webp#tower-elephant-3.webp#war-elephant.webp",
    unit_dragon:
      "dragon-handcannoneer-4.webp#gilded-archer-2.webp#gilded-crossbowman-3.webp#gilded-horseman-2.webp#gilded-knight-3.webp#gilded-landsknecht-3.webp#gilded-man-at-arms-2.webp#gilded-spearman-1.webp",
    unit_english:
      "king-2.webp#longbowman-2.webp#wynguard-army-1.webp#wynguard-footmen-1.webp#wynguard-raiders-1.webp#wynguard-ranger-4.webp",
    unit_events: "land_monster.webp#water_monster.webp",
    unit_french:
      "arbaletrier-3.webp#cannon-4.webp#galleass.webp#royal-cannon-4.webp#royal-culverin-4.webp#royal-knight-2.webp#royal-ribauldequin-4.webp#war-cog.webp",
    unit_golden_horde:
      "khan.webp#kharash.webp#kipchak_age3.webp#rus_tribute_age3.webp#torguud.webp",
    unit_hre: "black-rider-1.webp#landsknecht-3.webp#prelate.webp",
    unit_infantry:
      "archer-2.webp#crossbowman-3.webp#handcannoneer-4.webp#man-at-arms-1.webp#ronin_unit.webp#spearman-1.webp",
    unit_japanese:
      "atakebune-4.webp#buddhist-monk-3.webp#katana-bannerman-2.webp#mounted-samurai-3.webp#onna-bugeisha-2.webp#onna-musha-3.webp#ozutsu-4.webp#samurai-1.webp#shinobi-2.webp#shinto-priest-3.webp#uma-bannerman-2.webp#yumi-ashigaru-2.webp#yumi-bannerman-2.webp",
    unit_jeanne:
      "jeanne-darc-blast-cannon-4.webp#jeanne-darc-hunter-2.webp#jeanne-darc-knight-3.webp#jeanne-darc-markswoman-4.webp#jeanne-darc-mounted-archer-3.webp#jeanne-darc-peasant-1.webp#jeanne-darc-woman-at-arms-2.webp#jeannes-champion-3.webp#jeannes-rider-3.webp",
    unit_lancaster:
      "champion.webp#demilancer.webp#earlretinue.webp#elitechampion.webp#garrisoncommand.webp#gunpowder_contingent.webp#hobelar_age2.webp#hobelar_age3.webp#hobelar_age4.webp#lord_lancaster.webp#yeoman_age2.webp#yeoman_age3.webp#yeoman_age4.webp",
    unit_macedonian:
      "atgeir-1.webp#bogmadr-2.webp#hippodrome_horseman.webp#hippodrome_riddari.webp#hippodrome_scout.webp#palatine_cataphracts.webp#riddari-3.webp#varangian-2.webp",
    unit_malians:
      "donso-1.webp#freeborn-mansa.webp#hunting-canoe-2.webp#javelin-thrower-2.webp#javelin-thrower-mansa.webp#musofadi-gunner-4.webp#musofadi-mansa.webp#musofadi-warrior-2.webp#sofa-2.webp#war-canoe-2.webp#warrior-scout-2.webp",
    unit_mongols:
      "huihui-pao-1.webp#keshik-2.webp#khan-1.webp#khans-hunter.webp#light-junk.webp#mangudai.webp#shaman.webp#traction-trebuchet.webp",
    unit_ottomans:
      "grand-galley-4.webp#great-bombard-4.webp#janissary-3.webp#mehter-2.webp#scout-ship-2.webp#sipahi-2.webp",
    unit_religious: "imam-3.webp#monk-3.webp",
    unit_rus:
      "horse-archer-3.webp#lodya-attack-ship.webp#lodya-demolition-ship.webp#lodya-fishing-boat.webp#lodya-galley-3.webp#lodya-trade-ship.webp#lodya-transport-ship.webp#militia-2.webp#streltsy.webp#warrior-monk.webp",
    unit_sengoku:
      "daimyo.webp#ikko_ikki.webp#kanabo-2.webp#ozutsu_age3.webp#tanegashima_ashigaru-3.webp#yari-2.webp#yatai.webp",
    unit_ship:
      "baghlah.webp#baochuan.webp#carrack.webp#demolition-ship.webp#dhow.webp#explosive-dhow.webp#explosive-junk.webp#fishing-boat.webp#galley.webp#hulk.webp#junk-3.webp#light-junk-2.webp#trade-ship.webp#transport-ship.webp#war-junk.webp#xebec.webp",
    unit_siege:
      "battering-ram.webp#bombard.webp#culverin-4.webp#mangonel-3.webp#ribauldequin-4.webp#siege-tower.webp#springald.webp#trebuchet.webp",
    unit_templar:
      "chevalier_confrere_age_2.webp#chevalier_confrere_age_3.webp#chevalier_confrere_age_4.webp#condottiere.webp#genitour_age_3.webp#genitour_age_4.webp#genoese_crossbowman_age_3.webp#genoese_crossbowman_age_4.webp#heavy_spearman_age_3.webp#heavy_spearman_age_4.webp#hospitaller_knight_age_2.webp#hospitaller_knight_age_3.webp#hospitaller_knight_age_4.webp#king_baldwin_iv.webp#odo_of_st_amand.webp#pilgrim.webp#serjeant_age_2.webp#serjeant_age_3.webp#serjeant_age_4.webp#szlachta_age_4.webp#templar_brother_age_3.webp#templar_brother_age_4.webp#teutonic_knight.webp#venetian_galley.webp",
    unit_tughluq:
      "amir_warrior.webp#ballista_elephant.webp#elephant_raider_age2.webp#healer_elephant.webp#worker_elephant.webp",
    unit_worker:
      "monk-3.webp#trader.webp#villager-abbasid.webp#villager-china.webp#villager-delhi.webp#villager-japanese.webp#villager-malians.webp#villager-mongols.webp#villager-ottomans.webp#villager.webp",
    unit_zhuxi: "imperial-guard-1.webp#shaolin-monk-3.webp#yuan-raider-4.webp",
  };

  // Split each string (e.g. 'image_0#image_1#image_2') in a list of images.
  for (const [key, value] of Object.entries(imagesDict)) {
    imagesDict[key] = value.split("#");
  }

  return imagesDict;
}

/**
 * Get the images available for AoM, sorted by sub-folder.
 *
 * @returns Dictionary with all the images per sub-folder.
 */
function getImagesAoM() {
  // This is obtained using the 'python/utilities/list_images.py' script.
  let imagesDict = {
    age: "age_unknown.png#archaic_age.png#classical_age.png#heroic_age.png#mythic_age.png#wonder_age.png",
    animal:
      "arctic_wolf.png#aurochs.png#baboon.png#bear.png#boar.png#caribou.png#chicken.png#cow.png#crocodile.png#crowned_crane.png#deer.png#elephant.png#elk.png#fish.png#gazelle.png#giraffe.png#goat.png#hippopotamus.png#hyena.png#lion.png#monkey.png#pig.png#polar_bear.png#rhinoceros.png#tiger.png#walrus.png#water_buffalo.png#wolf.png#zebra.png",
    armory:
      "armory.png#ballistics.png#bronze_armor.png#bronze_shields.png#bronze_weapons.png#burning_pitch.png#copper_armor.png#copper_shields.png#copper_weapons.png#iron_armor.png#iron_shields.png#iron_weapons.png",
    atlanteans_building:
      "counter-barracks.png#economic_guild.png#manor.png#military_barracks.png#mirror_tower.png#palace.png#sky_passage.png#time_shift.png#town_center_atlantean.png",
    atlanteans_civilian: "caravan_atlantean.png#citizen.png",
    atlanteans_hero:
      "arcus_hero.png#cheiroballista_hero.png#citizen_hero.png#contarius_hero.png#destroyer_hero.png#fanatic_hero.png#katapeltes_hero.png#murmillo_hero.png#oracle_hero.png#turma_hero.png",
    atlanteans_human:
      "arcus.png#contarius.png#destroyer.png#fanatic.png#katapeltes.png#murmillo.png#oracle_unit.png#turma.png",
    atlanteans_minor_god:
      "atlas.png#hekate.png#helios.png#hyperion.png#leto.png#oceanus.png#prometheus.png#rheia.png#theia.png",
    atlanteans_myth:
      "argus.png#atlantean_titan.png#automaton.png#behemoth.png#caladria.png#centimanus.png#dryad.png#lampades.png#man_o_war.png#nereid.png#promethean.png#satyr.png#servant.png#stymphalian_bird.png",
    atlanteans_power:
      "carnivora_power.png#chaos.png#deconstruction.png#gaia_forest.png#hesperides.png#implode.png#shockwave.png#spider_lair.png#tartarian_gate_power.png#traitor.png#valor.png#vortex.png",
    atlanteans_ship:
      "bireme.png#fire_ship.png#fishing_ship_atlantean.png#siege_bireme.png#transport_ship_atlantean.png",
    atlanteans_siege: "cheiroballista.png#fire_siphon.png",
    atlanteans_tech:
      "alluvial_clay.png#asper_blood.png#bite_of_the_shark.png#celerity.png#channels.png#conscript_counter_soldiers.png#conscript_mainline_soldiers.png#conscript_palace_soldiers.png#empyrian_speed.png#eyes_of_atlas.png#focus.png#gemini.png#guardian_of_io.png#halo_of_the_sun.png#heart_of_the_titans.png#hephaestus_revenge.png#heroic_renewal.png#horns_of_consecration.png#lance_of_stone.png#lemuriandescendants.png#levy_counter_soldiers.png#levy_mainline_soldiers.png#levy_palace_soldiers.png#mythic_rejuvenation.png#orichalcum_mail.png#petrification.png#poseidons_secret.png#rheias_gift.png#safe_passage.png#temporal_chaos.png#titan_shield.png#volcanic_forge.png#weightless_mace.png",
    chinese_blessing: "creator_auspice.png#shennong_gift_all.png#yang.png#yin.png#yin_yang.png",
    chinese_building:
      "baolei.png#camp_tower.png#camp_trainingyard.png#crossbow_tower.png#great_wall.png#guard_tower_chinese.png#imperial_academy.png#machine_workshop.png#military_camp.png#silo.png#watch_tower_chinese.png",
    chinese_civilian:
      "clay_peasant.png#kuafu.png#mechanical_ox_caravan.png#peasant.png#sky_lantern.png",
    chinese_hero:
      "jiang_ziya.png#li_jing.png#nezha.png#nezha_child.png#nezha_youth.png#pioneer.png#sage.png#wen_zhong.png#yang_jian.png",
    chinese_human:
      "chu_ko_nu.png#dao_swordsman.png#fire_archer.png#ge_halberdier.png#summon_terracotta_riders.png#terracotta_rider.png#tiger_cavalry.png#white_horse_cavalry.png#wuzu_javelineer.png",
    chinese_minor_god:
      "chiyou.png#gonggong.png#goumang.png#houtu.png#huangdi.png#nuba.png#rushou.png#xuannu.png#zhurong.png",
    chinese_myth:
      "baihu.png#chiwen.png#hundun.png#pixiu.png#qilin.png#qinglong.png#qiongqi.png#taotie.png#taowu.png#titan_chinese.png#xuanwu.png#yazi.png#zhuque.png",
    chinese_power:
      "blazing_prairie.png#creation.png#drought.png#earth_wall_power.png#fei_beasts.png#forest_protection.png#great_flood.png#lightning_weapons.png#peachblossomspring_power.png#prosperous_seeds.png#vanish.png#yinglongs_wrath.png",
    chinese_ship: "doujian.png#louchuan.png#mengchong.png",
    chinese_siege: "axe_cart.png#siege_crossbow.png",
    chinese_tech:
      "abundance.png#advanced_defenses.png#autumn_of_abundance.png#bottomless_stomach.png#celestial_weapons.png#champion_infantry_chinese.png#chasing_the_sun.png#conscript_baolei_soldiers.png#divine_books.png#divine_judgement.png#divine_light.png#drought_ships.png#east_wind.png#flaming_blood.png#frenzied_dash.png#gilded_shields.png#heavy_infantry_chinese.png#herbal_medicine.png#hooves_of_the_wind.png#imperial_order.png#kuafu_chieftain.png#last_stand.png#leizu's_silk.png#levy_baolei_soldiers.png#maelstrom.png#master_of_weaponry.png#medium_infantry_chinese.png#mountainous_might.png#peach_of_immortality.png#power_of_chaos.png#qilin's_blessing.png#rage_of_slaughter.png#red_cliffs_fleet.png#reincarnation.png#rising_tide.png#rock_solid.png#scorching_feathers.png#shaker_of_heaven.png#silk_road.png#sinister_defiance.png#sky_fire.png#slash_and_burn.png#song_of_midsummer.png#son_of_loong.png#southern_fire.png#spoils_of_war.png#summon_terracotta_riders.png#tai_chi.png#tempestuous_storm.png#vibrant_land.png#xuanyuan's_bloodline.png",
    defensive:
      "boiling_oil.png#bronze_wall.png#carrier_pigeons.png#citadel_wall.png#crenellations.png#fortified_wall.png#guard_tower_upgrade.png#improvement_ballista_tower.png#improvement_watch_tower.png#iron_wall.png#orichalkos_wall.png#sentry_tower.png#signal_fires.png#stone_wall.png#wooden_wall.png",
    dock: "arrowship_cladding.png#champion_warships.png#conscript_sailors.png#dock.png#enclosed_deck.png#heavy_warships.png#heroic_fleet.png#naval_oxybeles.png#purse_seine.png#reinforced_ram.png#salt_amphora.png",
    economy:
      "bow_saw.png#carpenters.png#flood_control.png#hand_axe.png#husbandry.png#irrigation.png#pickaxe.png#plow.png#quarry.png#shaft_mine.png#survival_equipment.png",
    egyptians_building:
      "barracks.png#granary.png#lighthouse.png#lumber_camp.png#migdol_stronghold.png#mining_camp.png#monument_to_villagers.png#obelisk.png#siege_works.png#town_center_egyptian.png",
    egyptians_civilian: "caravan_egyptian.png#laborer.png",
    egyptians_hero: "pharaoh.png#priest.png",
    egyptians_human:
      "axeman.png#camel_rider.png#chariot_archer.png#mercenary.png#mercenary_cavalry.png#slinger.png#spearman.png#war_elephant.png",
    egyptians_minor_god:
      "anubis.png#bast.png#horus.png#nephthys.png#osiris.png#ptah.png#sekhmet.png#sobek.png#thoth.png",
    egyptians_myth:
      "anubite.png#avenger.png#egyptian_titan.png#leviathan.png#mummy.png#petsuchos.png#phoenix.png#roc.png#scarab.png#scorpion_man.png#son_of_osiris.png#sphinx.png#wadjet.png#war_turtle.png",
    egyptians_power:
      "ancestors.png#citadel_power.png#eclipse.png#locust_swarm.png#meteor.png#plague_of_serpents.png#prosperity.png#rain.png#shifting_sands.png#son_of_osiris_power.png#tornado.png#vision.png",
    egyptians_ship:
      "fishing_ship_egyptian.png#kebenit.png#ramming_galley.png#transport_ship_egyptian.png#war_barge.png",
    egyptians_siege: "catapult.png#siege_tower.png",
    egyptians_tech:
      "adze_of_wepwawet.png#atef_crown.png#axe_of_vengeance.png#bone_bow.png#book_of_thoth.png#champion_axemen.png#champion_camel_riders.png#champion_chariot_archers.png#champion_slingers.png#champion_spearmen.png#champion_war_elephants.png#clairvoyance.png#conscript_barracks_soldiers.png#conscript_migdol_soldiers.png#crimson_linen.png#criosphinx.png#crocodilopolis.png#dark_water.png#desert_wind.png#electrum_bullets.png#feet_of_the_jackal.png#feral.png#flood_of_the_nile.png#force_of_the_west_wind.png#funeral_barge.png#funeral_rites.png#greatest_of_fifty.png#hands_of_the_pharaoh.png#heavy_axemen.png#heavy_camel_riders.png#heavy_chariot_archers.png#heavy_slingers.png#heavy_spearmen.png#heavy_war_elephants.png#hieracosphinx.png#leather_frame_shield.png#levy_barracks_soldiers.png#levy_migdol_soldiers.png#medium_axemen.png#medium_slingers.png#medium_spearmen.png#nebty.png#necropolis.png#new_kingdom.png#sacred_cats.png#scalloped_axe.png#serpent_spear.png#shaduf.png#skin_of_the_rhino.png#slings_of_the_sun.png#solar_barque - copy.png#solar_barque.png#spear_of_horus.png#spirit_of_maat.png#stones_of_red_linen.png#sundried_mud_brick.png#tusks_of_apedemak.png#valley_of_the_kings.png#city_of_the_dead.jpg",
    greeks_building:
      "archery_range.png#fortress.png#granary.png#military_academy.png#stable.png#storehouse.png#town_center_greek.png#village_center_greeks.png",
    greeks_civilian: "caravan_greek.png#villager_greek.png",
    greeks_hero:
      "achilles.png#ajax_spc.png#atalanta.png#bellerophon.png#chiron.png#heracles.png#hippolyta.png#jason.png#odysseus.png#perseus.png#polyphemus.png#theseus.png",
    greeks_human:
      "gastraphetoros.png#hetairos.png#hippeus.png#hoplite.png#hypaspist.png#militia.png#myrmidon.png#peltast.png#prodromos.png#toxotes.png",
    greeks_minor_god:
      "aphrodite.png#apollo.png#ares.png#artemis.png#athena.png#dionysus.png#hephaestus.png#hera.png#hermes.png",
    greeks_myth:
      "carcinos.png#centaur.png#chimera.png#colossus.png#cyclops.png#greek_titan.png#hippocampus.png#hydra.png#manticore.png#medusa.png#minotaur.png#nemean_lion.png#pegasus.png#scylla.png",
    greeks_power:
      "bolt.png#bronze.png#ceasefire.png#curse.png#earthquake.png#lightning_storm.png#lure_power.png#pestilence.png#plenty_vault.png#restoration.png#sentinel_power.png#underworld_passage.png",
    greeks_ship:
      "fishing_ship_greek.png#juggernaut.png#pentekonter.png#transport_ship_greek.png#trireme.png",
    greeks_siege: "helepolis.png#petrobolos.png",
    greeks_tech:
      "aegis_shield.png#anastrophe.png#argive_patronage.png#conscript_cavalry.png#conscript_infantry.png#conscript_ranged_soldiers.png#deimos_sword_of_dread.png#dionysia.png#divine_blood.png#enyos_bow_of_horror.png#face_of_the_gorgon.png#flames_of_typhon.png#forge_of_olympus.png#golden_apples.png#hand_of_talos.png#labyrinth_of_minos.png#levy_cavalry.png#levy_infantry.png#levy_ranged_soldiers.png#lord_of_horses.png#monstrous_rage.png#olympian_parentage.png#olympian_weapons.png#oracle.png#phobos_spear_of_panic.png#roar_of_orthus.png#sarissa.png#shafts_of_plague.png#shoulder_of_talos.png#spirited_charge.png#sun_ray.png#sylvan_lore.png#temple_of_healing.png#thracian_horses.png#trierarch.png#vaults_of_erebus.png#will_of_kronos.png#winged_messenger.png",
    japanese_building:
      "castle.png#dojo.png#guardhouse.png#japanese_stable.png#mining_camp.png#shrine.png#watermill.png",
    japanese_civilian: "commoner.png",
    japanese_hero: "bushi.png#daimyo.png#miko.png#onmyoji.png#onna_musha.png",
    japanese_human:
      "naginata_rider.png#samurai.png#shinobi.png#yari_spearman.png#yumi_archer.png#yumi_horse_archer.png",
    japanese_minor_god:
      "ame-no-uzume.png#fujin.png#hachiman.png#inari_okami.png#minakatatomi.png#okuninushi.png#raijin.png#takemikazuchi.png#watatsumi.png",
    japanese_myth:
      "asura.png#honengyo.png#jorogumo.png#kamaitachi.png#kitsune.png#oni.png#onmoraki.png#raiju.png#shinigami.png#tengu.png#titan_japanese.png#umibozu.png#wanyudo.png#wretch.png",
    japanese_power:
      "divine_slash.png#dragon_typhoon.png#goshinboku.png#kusanagi.png#new_moon.png#sacred_gate.png#shogun.png#shrine_of_the_hunt.png#smiting_gust.png#solar_shield.png#swampland.png#thunder_burst.png",
    japanese_ship: "junkozosen.png#ramming_wasen.png#wasen.png",
    japanese_siege: "oyumi.png",
    japanese_tech:
      "ascetic_practices.png#asymmetrical_bows.png#burning_malevolence.png#condemned_soul.png#crushing_waves.png#dan-no-ura_tactics.png#deadly_rage.png#deadly_snare.png#den_den_drums.png#divine_prefecture.png#eight_banners.png#eternal_haunting.png#gales_fury.png#gohei_wands.png#golden_kite.png#hannya_mask.png#heavenly_barrage.png#hunters_strength.png#ivory_netsuke.png#kagura.png#katagi.png#kumiki.png#mechanical_artisans.png#oni_mask.png#onmyodo.png#restless_army.png#sacred_custodians.png#sakura_gardens.png#saltwater_spring.png#sashimono_bannermen.png#seaside_infiltrators.png#sojutsu.png#sumo_training.png#ten-fist_sword.png#tenshu.png#thunderous_presence.png#wind_sickles.png#wisdom_of_nine.png",
    major_god:
      "amaterasu.png#freyr.png#fuxi.png#gaia.png#hades.png#isis.png#kronos.png#loki.png#nuwa.png#odin.png#oranos.png#poseidon.png#ra.png#set.png#shennong.png#susanoo.png#thor.png#tsukuyomi.png#zeus.png",
    market: "ambassadors.png#coinage.png#market.png#tax_collectors.png",
    norse_building:
      "dwarven_armory.png#great_hall.png#hill_fort.png#longhouse.png#town_center_norse.png",
    norse_civilian: "caravan_norse.png#dwarf.png#gatherer.png#ox_cart.png",
    norse_hero: "godi.png#hersir.png",
    norse_human:
      "berserk.png#hirdman.png#huskarl.png#jarl.png#raiding_cavalry.png#throwing_axeman.png",
    norse_minor_god:
      "aegir.png#baldr.png#bragi.png#forseti.png#freyja.png#heimdall.png#hel.png#njord.png#skadi.png#tyr.png#ullr.png#vidar.png",
    norse_myth:
      "battle_boar.png#draugr.png#einherjar.png#fafnir.png#fenris_wolf_brood.png#fimbulwinter_wolf.png#fire_giant.png#frost_giant.png#jormun_elver.png#kraken.png#mountain_giant.png#nidhogg_unit.png#norse_titan.png#raven.png#rock_giant.png#troll.png#valkyrie.png#walking_woods_unit.png",
    norse_power:
      "asgardian_bastion.png#dwarven_mine.png#fimbulwinter.png#flaming_weapons.png#forest_fire.png#frost.png#great_hunt.png#gullinbursti.png#healing_spring_power.png#inferno.png#nidhogg.png#ragnarok.png#spy.png#tempest.png#undermine.png#walking_woods_power.png",
    norse_ship:
      "dragon_ship.png#dreki.png#fishing_ship_norse.png#longboat.png#transport_ship_norse.png",
    norse_siege: "ballista.png#portable_ram.png",
    norse_tech:
      "arctic_winds.png#avenging_spirit.png#berserkergang.png#bravery.png#call_of_valhalla.png#cave_troll.png#conscript_great_hall_soldiers.png#conscript_hill_fort_soldiers.png#conscript_longhouse_soldiers.png#disablot.png#dragonscale_shields.png#dwarven_auger.png#dwarven_breastplate.png#dwarven_weapons.png#eyes_in_the_forest.png#feasts_of_renown.png#freyr's_gift.png#fury_of_the_fallen.png#gjallarhorn.png#granite_blood.png#granite_maw.png#grasp_of_ran.png#hall_of_thanes.png#hamask.png#hammer_of_thunder.png#huntress_axe.png#levy_great_hall_soldiers.png#levy_hill_fort_soldiers.png#levy_longhouse_soldiers.png#long_serpent.png#meteoric_iron_armor.png#nine_waves.png#rampage.png#rigsthula.png#rime.png#ring_giver.png#ring_oath.png#safeguard.png#servants_of_glory.png#sessrumnir.png#silent_resolve.png#sons_of_sleipnir.png#swine_array.png#thundering_hooves.png#thurisaz_rune.png#twilight_of_the_gods.png#valgaldr.png#winter_harvest.png#wrath_of_the_deep.png#ydalir.png",
    other: "farm.png#house.png#relic.png#titan_gate.png#wonder.png",
    resource: "berry.png#favor.png#food.png#gold.png#repair.png#tree.png#wood.png#worker.png",
    tech_military:
      "champion_archers.png#champion_cavalry.png#champion_infantry.png#draft_horses.png#engineers.png#heavy_archers.png#heavy_cavalry.png#heavy_infantry.png#medium_archers.png#medium_cavalry.png#medium_infantry.png#norse_champion_infantry.png#norse_heavy_infantry.png#norse_medium_infantry.png",
    temple: "omniscience.png#temple.png",
    town_center:
      "architects.png#fortified_town_center.png#masons.png#town_center.png#village_center.png",
  };

  // Split each string (e.g. 'image_0#image_1#image_2') in a list of images.
  for (const [key, value] of Object.entries(imagesDict)) {
    imagesDict[key] = value.split("#");
  }

  return imagesDict;
}

/**
 * Get the images available for SC2, sorted by sub-folder.
 *
 * @returns Dictionary with all the images per sub-folder.
 */
function getImagesSC2() {
  // This is obtained using the 'python/utilities/list_images.py' script.
  let imagesDict = {
    protoss_buildings:
      "Assimilator.png#Cybernetics_Core.png#Dark_Shrine.png#Fleet_Beacon.png#Forge.png#Gateway.png#Nexus.png#Photon_Cannon.png#Pylon.png#Robotics_Bay.png#Robotics_Facility.png#ShieldBattery.png#Stargate.png#StasisWard.png#Templar_Archives.png#Twilight_Council.png#Warp_Gate.png",
    protoss_techs:
      "Air_armor_1.png#Air_armor_2.png#Air_armor_3.png#Air_weapons_1.png#Air_weapons_2.png#Air_weapons_3.png#Anion_Pulse-Crystals.png#Battery_Overcharge.png#Blink.png#Charge.png#Chrono_boost.png#Extended_thermal_lances.png#Flux_Vanes.png#Gravitic_booster.png#Gravitic_drive.png#Graviton_catapult.png#Ground_armor_1.png#Ground_armor_2.png#Ground_armor_3.png#Ground_weapons_1.png#Ground_weapons_2.png#Ground_weapons_3.png#Guardian_shield.png#Mass_Recall.png#Psionic_storm.png#Resonating_Glaives.png#Shadow_Stride.png#Shields_1.png#Shields_2.png#Shields_3.png#Tectonic_Destabilizers.png#Transform_warpgate.png",
    protoss_units:
      "Adept.png#Archon.png#Carrier.png#Colossus.png#Dark_Templar.png#Disruptor.png#High_Templar.png#Immortal.png#Mothership.png#Mothership_Core.png#Observer.png#Oracle.png#Phoenix.png#Probe.png#Sentry.png#Stalker.png#Tempest.png#VoidRay.png#Warp_Prism.png#Zealot.png",
    race_icon: "AnyRaceIcon.png#ProtossIcon.png#TerranIcon.png#ZergIcon.png",
    resource: "minerals.png#vespene_gas.png",
    terran_buildings:
      "Armory.png#Barracks.png#Bunker.png#CommandCenter.png#EngineeringBay.png#Factory.png#FusionCore.png#GhostAcademy.png#MissileTurret.png#OrbitalCommand.png#PlanetaryFortress.png#Reactor.png#Refinery.png#SensorTower.png#Starport.png#SupplyDepot.png#TechLab.png",
    terran_techs:
      "Advanced_Ballistics.png#Behemoth_reactor.png#Building_armor.png#Build_Reactor.png#Build_Tech_Lab.png#Calldown_extra_supplies.png#Calldown_mule.png#Cloak.png#Enhanced_Shockwaves.png#High_Capacity_Fuel_Tanks.png#Hisec_auto_tracking.png#Infantry_armor_1.png#Infantry_armor_2.png#Infantry_armor_3.png#Infantry_weapons_1.png#Infantry_weapons_2.png#Infantry_weapons_3.png#Lower.png#Moebius_reactor.png#Neosteel_frames.png#Nuke.png#Scanner_sweep.png#Ship_weapons_1.png#Ship_weapons_2.png#Ship_weapons_3.png#Vehicle_plating_1.png#Vehicle_plating_2.png#Vehicle_plating_3.png#Vehicle_weapons_1.png#Vehicle_weapons_2.png#Vehicle_weapons_3.png#Yamato_cannon.png",
    terran_units:
      "Auto-turret.png#Banshee.png#Battlecruiser.png#Cyclone.png#Ghost.png#Hellbat.png#Hellion.png#Liberator.png#Marauder.png#Marine.png#Medivac.png#MULE.png#Point_defense_drone.png#Raven.png#Reaper.png#SCV.png#SiegeTank.png#Thor.png#Viking.png#WidowMine.png",
    zerg_buildings:
      "Baneling_Nest.png#Creep_Tumor.png#Evolution_Chamber.png#Extractor.png#Greater_Spire.png#Hatchery.png#Hive.png#Hydralisk_Den.png#Infestation_Pit.png#Lair.png#LurkerDen.png#Nydus_Network.png#Nydus_Worm.png#Roach_Warren.png#Spawning_Pool.png#Spine_Crawler.png#Spire.png#Spore_Crawler.png#Ultralisk_Cavern.png",
    zerg_techs:
      "Adaptive_Talons.png#Adrenal_glands.png#Anabolic_Synthesis.png#Burrow.png#Centrifugal_hooks.png#Chitinous_Plating.png#Flyer_attack_1.png#Flyer_attack_2.png#Flyer_attack_3.png#Flyer_carapace_1.png#Flyer_carapace_2.png#Flyer_carapace_3.png#Glial_reconstitution.png#Grooved_Spines.png#Ground_carapace_1.png#Ground_carapace_2.png#Ground_carapace_3.png#Melee_attacks_1.png#Melee_attacks_2.png#Melee_attacks_3.png#Metabolic_boost.png#Microbial_Shroud.png#Missile_attacks_1.png#Missile_attacks_2.png#Missile_attacks_3.png#Muscular_Augments.png#Mutate_Ventral_Sacs.png#Neural_parasite.png#Pathogen_glands.png#Pneumatized_carapace.png#Seismic_Spines.png#Tunneling_claws.png",
    zerg_units:
      "Baneling.png#Broodling.png#Brood_Lord.png#Changeling.png#Corruptor.png#Drone.png#Hydralisk.png#Infested_Terran.png#Infestor.png#Larva.png#Lurker.png#Mutalisk.png#Overlord.png#Overseer.png#Queen.png#Ravager.png#Roach.png#Swarm_Host.png#Ultralisk.png#Viper.png#Zergling.png",
  };

  // Split each string (e.g. 'image_0#image_1#image_2') in a list of images.
  for (const [key, value] of Object.entries(imagesDict)) {
    imagesDict[key] = value.split("#");
  }

  return imagesDict;
}

/**
 * Get the images available for WC3, sorted by sub-folder.
 *
 * @returns Dictionary with all the images per sub-folder.
 */
function getImagesWC3() {
  // This is obtained using the 'python/utilities/list_images.py' script.
  let imagesDict = {
    human_building:
      "altar_of_kings.png#arcane_sanctum.png#arcane_vault.png#barracks.png#blacksmith.png#farm.png#gryphon_aviary.png#lumber_mill.png#scout_tower.png#town_hall.png#workshop.png",
    human_hero: "archmage.png#blood_mage.png#mountain_king.png#paladin.png",
    human_special: "militia.png#phoenix.png#summon_water_elemental.png",
    human_unit:
      "dragon_hawk_rider.png#flying_machine.png#footman.png#gryphon_rider.png#knight.png#mortar_team.png#peasant.png#priest.png#rifleman.png#siege_engine.png#sorceress.png#spell_breaker.png",
    night_elf_building:
      "altar_of_elders.png#ancient_of_lore.png#ancient_of_war.png#ancient_of_wind.png#ancient_of_wonders.png#ancient_protector.png#chimaera_roost.png#hunters_hall.png#moon_well.png#tree_of_life.png",
    night_elf_hero: "demon_hunter.png#keeper_of_the_grove.png#priestess_of_the_moon.png#warden.png",
    night_elf_special:
      "avatar_of_vengeance.png#druid_of_the_claw.png#druid_of_the_talon.png#hippogryph_rider.png#owl_scout.png#spirit_of_vengeance.png#treant.png",
    night_elf_unit:
      "archer.png#chimaera.png#druid_of_the_claw.png#druid_of_the_talon.png#dryad.png#faerie_dragon.png#glaive_thrower.png#hippogryph.png#huntress.png#mountain_giant.png#wisp.png",
    orc_building:
      "altar_of_storms.png#barracks.png#beastiary.png#great_hall.png#orc_burrow.png#spirit_lodge.png#tauren_totem.png#voodoo_lounge.png#war_mill.png#watch_tower.png",
    orc_hero: "blademaster.png#far_seer.png#shadow_hunter.png#tauren_chieftain.png",
    orc_special: "serpent_ward.png#spirit_wolf.png#troll_berserker.png",
    orc_unit:
      "demolisher.png#grunt.png#kodo_beast.png#peon.png#raider.png#shaman.png#spirit_walker.png#tauren.png#troll_batrider.png#troll_headhunter.png#wind_rider.png#witch_doctor.png",
    race: "dice.png#human.png#night_elf.png#orc.png#undead.png",
    resource: "food.png#gold.png#lumber.png",
    undead_building:
      "altar_of_darkness.png#boneyard.png#crypt.png#graveyard.png#haunted_goldmine.png#necropolis.png#sacrificial_pit.png#slaughter_house.png#temple_of_the_damned.png#tomb_of_relics.png#ziggurat.png",
    undead_hero: "crypt_lord.png#death_knight.png#dread_lord.png#lich.png",
    undead_special:
      "carrion_beetle.png#destroyer.png#shade.png#skeletal_mage.png#skeleton_warrior.png",
    undead_unit:
      "abomination.png#acolyte.png#banshee.png#crypt_fiend.png#frost_wyrm.png#gargoyle.png#ghoul.png#meat_wagon.png#necromancer.png#obsidian_statue.png",
  };

  // Split each string (e.g. 'image_0#image_1#image_2') in a list of images.
  for (const [key, value] of Object.entries(imagesDict)) {
    imagesDict[key] = value.split("#");
  }

  return imagesDict;
}

/**
 * Get the images available for the game folder, sorted by sub-folder.
 *
 * @param {int} gameName  Name of the selected game.
 *
 * @returns Dictionary with all the images per sub-folder.
 */
function getImagesGame(gameName) {
  switch (gameName) {
    case "aoe2":
      return getImagesAoE2();
    case "aoe4":
      return getImagesAoE4();
    case "aom":
      return getImagesAoM();
    case "sc2":
      return getImagesSC2();
    case "wc3":
      return getImagesWC3();
    default:
      throw "Unknown game: " + gameName;
  }
}

/**
 * Get the images available for the common folder, sorted by sub-folder.
 *
 * @returns Dictionary with all the images per sub-folder.
 */
function getImagesCommon() {
  // This is obtained using the 'python/utilities/list_images.py' script.
  let imagesDict = {
    action_button:
      "feather.png#gears.png#hide.png#leave.png#load.png#manual_timer_switch.png#next.png#pause.png#previous.png#save.png#start_stop.png#start_stop_active.png#timer_0.png#to_beginning.png#to_end.png",
    icon: "blue_plus.png#cross.png#down_arrow.png#grey_return.png#house.png#info.png#invalid_timing.png#light_blue_plus.png#logo-192.png#logo-512.png#mouse.png#orange_cross.png#question_mark.png#red_cross.png#salamander_sword_shield.png#salamander_sword_shield_small.png#time.png#top_arrow.png#valid_timing.png",
  };

  // Split each string (e.g. 'image_0#image_1#image_2') in a list of images.
  for (const [key, value] of Object.entries(imagesDict)) {
    imagesDict[key] = value.split("#");
  }

  return imagesDict;
}
