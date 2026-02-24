// Most functions were copied from RTS Overlay

/**
 * Get the images available for AoE2, sorted by sub-folder.
 *
 * @returns Dictionary with all the images per sub-folder.
 */
function getImagesAoE2() {
  // This is obtained using the 'python/utilities/list_images.py' script.
  let imagesDict = {
    age: "AgeUnknown.webp#CastleAgeIconDE.webp#CastleAgeIconDE_alpha.webp#DarkAgeIconDE.webp#DarkAgeIconDE_alpha.webp#FeudalAgeIconDE.webp#FeudalAgeIconDE_alpha.webp#ImperialAgeIconDE.webp#ImperialAgeIconDE_alpha.webp",
    animal:
      "AoE2DE_ingame_goose_icon.webp#AoE2DE_ingame_ibex_icon.webp#AoE2_DE_box_turtles_icon.webp#AoE2_DE_dolphin_icon.webp#AoE2_DE_dorado_icon.webp#AoE2_DE_marlin_icon.webp#AoE2_DE_perch_icon.webp#AoE2_DE_salmon_icon.webp#AoE2_DE_shore_fish_icon.webp#AoE2_DE_snapper_icon.webp#AoE2_DE_tuna_icon.webp#Boar_aoe2DE.webp#CowDE.webp#Deer_aoe2DE.webp#Elephant_aoe2DE.webp#Goat_aoe2DE.webp#Llama_aoe2DE.webp#Ostrich_icon_aoe2de.webp#Pig_aoe2DE.webp#Rhinoceros_aoe2DE.webp#Sheep_aoe2DE.webp#Turkey_aoe2DE.webp#Wild_Chicken.webp#Yak_aoe2DE.webp#Zebra_aoe2DE.webp",
    archery_range:
      "Aoe2de_DOI_elephant_archer_icon.webp#ArbalestDE.webp#Arbalester_aoe2DE.webp#Archery_range_aoe2DE.webp#Archer_aoe2DE.webp#Cavalryarcher_aoe2DE.webp#Crossbowman_aoe2DE.webp#ElephantArcherIcon-DE.webp#Elite_skirmisher_aoe2DE.webp#Hand_cannoneer_aoe2DE.webp#Heavy-cavalry-archer-resear.webp#Heavycavalryarcher_aoe2de.webp#ImperialSkirmisherUpgDE.webp#ParthianTacticsDE.webp#Skirmisher_aoe2DE.webp#ThumbRingDE.webp",
    barracks:
      "Aoe2-infantry-2-pikeman.webp#ArsonDE.webp#Barracks_aoe2DE.webp#ChampionUpgDE.webp#Champion_aoe2DE.webp#Champi_Runner.webp#Champi_Scout.webp#Champi_Warrior.webp#Eaglescout_aoe2DE.webp#EagleWarriorUpgDE.webp#Eaglewarrior_aoe2DE.webp#EliteEagleWarriorUpgDE.webp#EliteEaglewarrior_aoe2DE.webp#Elite_Champi_Warrior.webp#Elite_Fire_Lancer.webp#Fire_Lancer.webp#GambesonsDE.webp#HalberdierDE.webp#Halberdier_aoe2DE.webp#LongSwordmanUpgDE.webp#Longswordsman_aoe2DE.webp#ManAtArmsUpgDE.webp#Manatarms_aoe2DE.webp#MilitiaDE.webp#PikemanUpDE.webp#Spearman_aoe2DE.webp#SquiresDE.webp#Suplliesicon.webp#TwoHandedSwordsmanUpgDE.webp#Twohanded_aoe2DE.webp",
    blacksmith:
      "Blacksmith_aoe2de.webp#BlastFurnaceDE.webp#BodkinArrowDE.webp#BracerDE.webp#ChainBardingDE.webp#ChainMailArmorDE.webp#FletchingDE.webp#Forging_aoe2de.webp#IronCastingDE.webp#LeatherArcherArmorDE.webp#PaddedArcherArmorDE.webp#PlateBardingArmorDE.webp#PlateMailArmorDE.webp#RingArcherArmorDE.webp#ScaleBardingArmorDE.webp#ScaleMailArmorDE.webp",
    castle:
      "CastleAgeUnique.webp#Castle_aoe2DE.webp#ConscriptionDE.webp#HoardingsDE.webp#Petard_aoe2DE.webp#SapperDE.webp#SpiesDE.webp#Trebuchet_aoe2DE.webp#Unique-tech-imperial.webp",
    civilization:
      "CivIcon-Armenians.webp#CivIcon-Aztecs.webp#CivIcon-Bengalis.webp#CivIcon-Berbers.webp#CivIcon-Bohemians.webp#CivIcon-Britons.webp#CivIcon-Bulgarians.webp#CivIcon-Burgundians.webp#CivIcon-Burmese.webp#CivIcon-Byzantines.webp#CivIcon-Celts.webp#CivIcon-Chinese.webp#CivIcon-Cumans.webp#CivIcon-Dravidians.webp#CivIcon-Ethiopians.webp#CivIcon-Franks.webp#CivIcon-Georgians.webp#CivIcon-Goths.webp#CivIcon-Gurjaras.webp#CivIcon-Hindustanis.webp#CivIcon-Huns.webp#CivIcon-Incas.webp#CivIcon-Indians.webp#CivIcon-Italians.webp#CivIcon-Japanese.webp#CivIcon-Jurchens.webp#CivIcon-Khitans.webp#CivIcon-Khmer.webp#CivIcon-Koreans.webp#CivIcon-Lithuanians.webp#CivIcon-Magyars.webp#CivIcon-Malay.webp#CivIcon-Malians.webp#CivIcon-Mapuche.webp#CivIcon-Mayans.webp#CivIcon-Mongols.webp#CivIcon-Muisca.webp#CivIcon-Persians.webp#CivIcon-Poles.webp#CivIcon-Portuguese.webp#CivIcon-Romans.webp#CivIcon-Saracens.webp#CivIcon-Shu.webp#CivIcon-Sicilians.webp#CivIcon-Slavs.webp#CivIcon-Spanish.webp#CivIcon-Tatars.webp#CivIcon-Teutons.webp#CivIcon-Tupi.webp#CivIcon-Turks.webp#CivIcon-Vietnamese.webp#CivIcon-Vikings.webp#CivIcon-Wei.webp#CivIcon-Wu.webp#question_mark.webp#question_mark_black.webp",
    defensive_structures:
      "Bombard_tower_aoe2DE.webp#Donjon_aoe2DE.webp#FortifiedWallDE.webp#Gate_aoe2de.webp#Krepost_aoe2de.webp#Outpost_aoe2de.webp#Palisade_gate_aoe2DE.webp#Palisade_wall_aoe2de.webp#Stone_wall_aoe2de.webp#Tower_aoe2de.webp",
    dock: "Cannon_galleon_aoe2DE.webp#CareeningDE.webp#Carrack.webp#Catapult_Galleon.webp#DemolitionShipUpgrade.webp#Demoraft_aoe2DE.webp#Demoship_aoe2DE.webp#Dock_aoe2de.webp#Dragonship.webp#DryDockDE.webp#Elite-cannon-galleon-resear.webp#Elite_cannon_galleon_aoe2de.webp#Fastfireship_aoe2DE.webp#Fireship_aoe2DE.webp#Fire_galley_aoe2DE.webp#FishingShipDE.webp#Fishing_Lines.webp#Fish_trap_aoe2DE.webp#GalleonUpgDE.webp#Galleon_aoe2DE.webp#Galley_aoe2DE.webp#GillnetsDE.webp#Heavydemoship_aoe2de.webp#Heavy_Warships.webp#Hulk.webp#Lou_Chuan.webp#Medium_Warships.webp#ShipwrightDE.webp#Trade_cog_aoe2DE.webp#Transportship_aoe2DE.webp#WarGalleyDE.webp#War_galley_aoe2DE.webp#War_Hulk.webp",
    hero: "Cao_Cao.webp#Liu_Bei.webp#Sun_Jian.webp",
    lumber_camp: "BowSawDE.webp#DoubleBitAxe_aoe2DE.webp#Lumber_camp_aoe2de.webp#TwoManSawDE.webp",
    market:
      "BankingDE.webp#CaravanDE.webp#CoinageDE.webp#GuildsDE.webp#Market_aoe2DE.webp#Tradecart_aoe2DE.webp",
    mill: "Aoe2-icon--folwark.webp#CropRotationDE.webp#Domestication.webp#FarmDE.webp#HeavyPlowDE.webp#HorseCollarDE.webp#Mill_aoe2de.webp#Pastoralism.webp#Pasture.webp#Transhumance.webp",
    mining_camp:
      "GoldMiningDE.webp#GoldShaftMiningDE.webp#Mining_camp_aoe2de.webp#StoneMiningDE.webp#StoneShaftMiningDE.webp",
    monastery:
      "AtonementDE.webp#BlockPrintingDE.webp#FaithDE.webp#FervorDE.webp#FortifiedChurch.webp#HerbalDE.webp#HeresyDE.webp#IlluminationDE.webp#MonasteryAoe2DE.webp#Monk_aoe2DE.webp#RedemptionDE.webp#SanctityDE.webp#TheocracyDE.webp",
    other:
      "Ao2de_caravanserai_icon.webp#Feitoria_aoe2DE.webp#House_aoe2DE.webp#MuleCart.webp#Settlement.webp#Wonder_aoe2DE.webp",
    resource:
      "Aoe2de_food.webp#Aoe2de_gold.webp#Aoe2de_hammer.webp#Aoe2de_stone.webp#Aoe2de_wood.webp#BerryBushDE.webp#FEMALEVILLDE.webp#MaleVillDE.webp#MaleVillDE_alpha.webp#tree.webp#villager.webp",
    siege_workshop:
      "AoE2DE_Armored_Elephant_icon.webp#AoE2DE_Siege_Elephant_icon.webp#Battering_ram_aoe2DE.webp#Bombard_cannon_aoe2DE.webp#CappedRamDE.webp#Capped_ram_aoe2DE.webp#HeavyScorpionDE.webp#Heavyscorpion_aoe2DE.webp#Heavy_Rocket_Cart.webp#Mangonel_aoe2DE.webp#OnagerDE.webp#Onager_aoe2DE.webp#Rocket_Cart.webp#Scorpion_aoe2DE.webp#Siege-ram-research.webp#SiegeOnagerDE.webp#Siegetower_aoe2DE.webp#Siege_onager_aoe2DE.webp#Siege_ram_aoe2DE.webp#Siege_workshop_aoe2DE.webp#Traction_Trebuchet.webp",
    stable:
      "Aoe2de_camel_scout.webp#Aoe2_heavycamelriderDE.webp#Battle_elephant_aoe2DE.webp#BloodlinesDE.webp#Camelrider_aoe2DE.webp#Cavalier-research.webp#Cavalier_aoe2DE.webp#EliteBattleElephantUpg.webp#Elitesteppelancericon.webp#EliteSteppeLancerUpgDE.webp#Elite_battle_elephant_aoe2DE.webp#HeavyCamelUpgDE.webp#Heavy_Hei_Guang_Cavalry.webp#Hei_Guang_Cavalry.webp#HusbandryDE.webp#Hussar_aoe2DE.webp#Hussar_upgrade_aoe2de.webp#Knight_aoe2DE.webp#Light-cavalry-research.webp#Lightcavalry_aoe2DE.webp#Paladin-research.webp#Paladin_aoe2DE.webp#Scoutcavalry_aoe2DE.webp#Stable_aoe2DE.webp#Steppelancericon.webp#Winged-hussar_upgrade.webp",
    town_center:
      "HandcartDE.webp#LoomDE.webp#Towncenter_aoe2DE.webp#TownPatrolDE.webp#TownWatchDE.webp#WheelbarrowDE.webp",
    unique_unit:
      "Aoe2-icon--houfnice.webp#Aoe2-icon--obuch.webp#Aoe2-icon-coustillier.webp#Aoe2-icon-flemish-militia.webp#Aoe2-icon-hussite-wagon.webp#Aoe2-icon-serjeant.webp#Aoe2de_camel_scout.webp#Aoe2de_Chakram.webp#Aoe2de_Ghulam.webp#Aoe2de_ratha_ranged.webp#Aoe2de_shrivamsha_rider.webp#Aoe2de_Thirisadai.webp#Aoe2de_Urumi.webp#Arambaiicon-DE.webp#Ballistaelephanticon-DE.webp#BerserkIcon-DE.webp#Blackwood_Archer.webp#Bolas_Rider.webp#BoyarIcon-DE.webp#CamelArcherIcon-DE.webp#CaravelIcon-DE.webp#CataphractIcon-DE.webp#Centurion-DE.webp#ChukoNuIcon-DE.webp#CompositeBowman.webp#CondottieroIcon-DE.webp#ConquistadorIcon-DE.webp#Dromon-DE.webp#Fire_Archer.webp#Flaming_camel_icon.webp#GbetoIcon-DE.webp#GenitourIcon-DE.webp#GenoeseCrossbowmanIcon-DE.webp#Grenadier.webp#Guecha_Warrior.webp#HuskarlIcon-DE.webp#Ibirapema_Warrior.webp#ImperialCamelRiderIcon-DE.webp#Imperialskirmishericon-DE.webp#Iron_Pagoda.webp#JaguarWarriorIcon-DE.webp#JanissaryIcon-DE.webp#Jian_Swordsman_strong.webp#KamayukIcon-DE.webp#Karambitwarrioricon-DE.webp#Keshikicon.webp#Kipchakicon.webp#Kona.webp#Konnikicon.webp#Legionary-DE.webp#Leitisicon.webp#Liao_Dao.webp#LongboatIcon-DE.webp#LongbowmanIcon-DE.webp#MagyarHuszarIcon-DE.webp#MamelukeIcon-DE.webp#MangudaiIcon-DE.webp#MissionaryIcon-DE.webp#Monaspa.webp#Mounted_Trebuchet.webp#OrganGunIcon-DE.webp#PlumedArcherIcon-DE.webp#Rattanarchericon-DE.webp#SamuraiIcon-DE.webp#Shotelwarrioricon-DE.webp#SlingerIcon-DE.webp#TarkanIcon-DE.webp#Temple_Guard.webp#TeutonicKnightIcon-DE.webp#ThrowingAxemanIcon-DE.webp#Tiger_Cavalry.webp#TurtleShipIcon-DE.webp#WarElephantIcon-DE.webp#WarriorPriest.webp#WarWagonIcon-DE.webp#War_Chariot.webp#White_Feather_Guard.webp#WoadRaiderIcon-DE.webp#Xianbei_Raider.webp",
    university:
      "ArchitectureDE.webp#ArrowSlitsDE.webp#BallisticsDE.webp#BombardTower_aoe2DE.webp#Careening.webp#Carvel_Hull.webp#ChemistryDE.webp#Clinker_Construction.webp#Dry_Dock.webp#FortifiedWallDE.webp#HeatedShotDE.webp#Incendiaries.webp#Masonry_aoe2de.webp#MurderHolesDE.webp#SiegeEngineersDE.webp#Siphons.webp#Tower_aoe2de.webp#TreadmillCraneDE.webp#University_AoE2_DE.webp",
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
    age: "age_1.webp#age_2.webp#age_3.webp#age_4.webp#age_unknown.webp#goldenagetier1.webp#goldenagetier2.webp#goldenagetier3.webp#goldenagetier4.webp#goldenagetier5.webp#vizier_point.webp",
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
    civilization_flag:
      "abb.webp#ang.webp#ant.webp#ayy.webp#byz.webp#chi.webp#CivIcon-AbbasidAoE4.webp#CivIcon-AbbasidAoE4_spacing.webp#CivIcon-AyyubidsAoE4.webp#CivIcon-AyyubidsAoE4_spacing.webp#CivIcon-ByzantinesAoE4.webp#CivIcon-ByzantinesAoE4_spacing.webp#CivIcon-ChineseAoE4.webp#CivIcon-ChineseAoE4_spacing.webp#CivIcon-DelhiAoE4.webp#CivIcon-DelhiAoE4_spacing.webp#CivIcon-EnglishAoE4.webp#CivIcon-EnglishAoE4_spacing.webp#CivIcon-FrenchAoE4.webp#CivIcon-FrenchAoE4_spacing.webp#CivIcon-GoldenHordeAoE4.webp#CivIcon-GoldenHordeAoE4_spacing.webp#CivIcon-HouseofLancasterAoE4.webp#CivIcon-HouseofLancasterAoE4_spacing.webp#CivIcon-HREAoE4.webp#CivIcon-HREAoE4_spacing.webp#CivIcon-JapaneseAoE4.webp#CivIcon-JapaneseAoE4_spacing.webp#CivIcon-JeanneDArcAoE4.webp#CivIcon-JeanneDArcAoE4_spacing.webp#CivIcon-KnightsTemplarAoE4.webp#CivIcon-KnightsTemplarAoE4_spacing.webp#CivIcon-MacedonianDynastyAoE4.webp#CivIcon-MacedonianDynastyAoE4_spacing.webp#CivIcon-MaliansAoE4.webp#CivIcon-MaliansAoE4_spacing.webp#CivIcon-MongolsAoE4.webp#CivIcon-MongolsAoE4_spacing.webp#CivIcon-OrderOfTheDragonAoE4.webp#CivIcon-OrderOfTheDragonAoE4_spacing.webp#CivIcon-OttomansAoE4.webp#CivIcon-OttomansAoE4_spacing.webp#CivIcon-RusAoE4.webp#CivIcon-RusAoE4_spacing.webp#CivIcon-SengokuDaimyoAoE4.webp#CivIcon-SengokuDaimyoAoE4_spacing.webp#CivIcon-TughlaqDynastyAoE4.webp#CivIcon-TughlaqDynastyAoE4_spacing.webp#CivIcon-ZhuXiLegacyAoE4.webp#CivIcon-ZhuXiLegacyAoE4_spacing.webp#del.webp#dra.webp#eng.webp#fre.webp#gen.webp#goh.webp#hol.webp#hos.webp#hre.webp#jap.webp#jda.webp#koc.webp#kof.webp#kte.webp#mac.webp#mal.webp#mon.webp#ott.webp#pol.webp#rus.webp#sen.webp#teu.webp#tug.webp#ven.webp#zxl.webp",
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
    age: "age_unknown.webp#archaic_age.webp#classical_age.webp#heroic_age.webp#mythic_age.webp#wonder_age.webp",
    animal:
      "arctic_wolf.webp#aurochs.webp#baboon.webp#bear.webp#boar.webp#caribou.webp#chicken.webp#cow.webp#crocodile.webp#crowned_crane.webp#deer.webp#elephant.webp#elk.webp#fish.webp#gazelle.webp#giraffe.webp#goat.webp#hippopotamus.webp#hyena.webp#lion.webp#monkey.webp#pig.webp#polar_bear.webp#rhinoceros.webp#tiger.webp#walrus.webp#water_buffalo.webp#wolf.webp#zebra.webp",
    armory:
      "armory.webp#ballistics.webp#bronze_armor.webp#bronze_shields.webp#bronze_weapons.webp#burning_pitch.webp#copper_armor.webp#copper_shields.webp#copper_weapons.webp#iron_armor.webp#iron_shields.webp#iron_weapons.webp",
    atlanteans_building:
      "counter-barracks.webp#economic_guild.webp#manor.webp#military_barracks.webp#mirror_tower.webp#palace.webp#sky_passage.webp#time_shift.webp#town_center_atlantean.webp",
    atlanteans_civilian: "caravan_atlantean.webp#citizen.webp",
    atlanteans_hero:
      "arcus_hero.webp#cheiroballista_hero.webp#citizen_hero.webp#contarius_hero.webp#destroyer_hero.webp#fanatic_hero.webp#katapeltes_hero.webp#murmillo_hero.webp#oracle_hero.webp#turma_hero.webp",
    atlanteans_human:
      "arcus.webp#contarius.webp#destroyer.webp#fanatic.webp#katapeltes.webp#murmillo.webp#oracle_unit.webp#turma.webp",
    atlanteans_minor_god:
      "atlas.webp#hekate.webp#helios.webp#hyperion.webp#leto.webp#oceanus.webp#prometheus.webp#rheia.webp#theia.webp",
    atlanteans_myth:
      "argus.webp#atlantean_titan.webp#automaton.webp#behemoth.webp#caladria.webp#centimanus.webp#dryad.webp#lampades.webp#man_o_war.webp#nereid.webp#promethean.webp#satyr.webp#servant.webp#stymphalian_bird.webp",
    atlanteans_power:
      "carnivora_power.webp#chaos.webp#deconstruction.webp#gaia_forest.webp#hesperides.webp#implode.webp#shockwave.webp#spider_lair.webp#tartarian_gate_power.webp#traitor.webp#valor.webp#vortex.webp",
    atlanteans_ship:
      "bireme.webp#fire_ship.webp#fishing_ship_atlantean.webp#siege_bireme.webp#transport_ship_atlantean.webp",
    atlanteans_siege: "cheiroballista.webp#fire_siphon.webp",
    atlanteans_tech:
      "alluvial_clay.webp#asper_blood.webp#bite_of_the_shark.webp#celerity.webp#channels.webp#conscript_counter_soldiers.webp#conscript_mainline_soldiers.webp#conscript_palace_soldiers.webp#empyrian_speed.webp#eyes_of_atlas.webp#focus.webp#gemini.webp#guardian_of_io.webp#halo_of_the_sun.webp#heart_of_the_titans.webp#hephaestus_revenge.webp#heroic_renewal.webp#horns_of_consecration.webp#lance_of_stone.webp#lemuriandescendants.webp#levy_counter_soldiers.webp#levy_mainline_soldiers.webp#levy_palace_soldiers.webp#mythic_rejuvenation.webp#orichalcum_mail.webp#petrification.webp#poseidons_secret.webp#rheias_gift.webp#safe_passage.webp#temporal_chaos.webp#titan_shield.webp#volcanic_forge.webp#weightless_mace.webp",
    chinese_blessing:
      "creator_auspice.webp#shennong_gift_all.webp#yang.webp#yin.webp#yin_yang.webp",
    chinese_building:
      "baolei.webp#camp_tower.webp#camp_trainingyard.webp#crossbow_tower.webp#great_wall.webp#guard_tower_chinese.webp#imperial_academy.webp#machine_workshop.webp#military_camp.webp#silo.webp#watch_tower_chinese.webp",
    chinese_civilian:
      "clay_peasant.webp#kuafu.webp#mechanical_ox_caravan.webp#peasant.webp#sky_lantern.webp",
    chinese_hero:
      "jiang_ziya.webp#li_jing.webp#nezha.webp#nezha_child.webp#nezha_youth.webp#pioneer.webp#sage.webp#wen_zhong.webp#yang_jian.webp",
    chinese_human:
      "chu_ko_nu.webp#dao_swordsman.webp#fire_archer.webp#ge_halberdier.webp#summon_terracotta_riders.webp#terracotta_rider.webp#tiger_cavalry.webp#white_horse_cavalry.webp#wuzu_javelineer.webp",
    chinese_minor_god:
      "chiyou.webp#gonggong.webp#goumang.webp#houtu.webp#huangdi.webp#nuba.webp#rushou.webp#xuannu.webp#zhurong.webp",
    chinese_myth:
      "baihu.webp#chiwen.webp#hundun.webp#pixiu.webp#qilin.webp#qinglong.webp#qiongqi.webp#taotie.webp#taowu.webp#titan_chinese.webp#xuanwu.webp#yazi.webp#zhuque.webp",
    chinese_power:
      "blazing_prairie.webp#creation.webp#drought.webp#earth_wall_power.webp#fei_beasts.webp#forest_protection.webp#great_flood.webp#lightning_weapons.webp#peachblossomspring_power.webp#prosperous_seeds.webp#vanish.webp#yinglongs_wrath.webp",
    chinese_ship: "doujian.webp#louchuan.webp#mengchong.webp",
    chinese_siege: "axe_cart.webp#siege_crossbow.webp",
    chinese_tech:
      "abundance.webp#advanced_defenses.webp#autumn_of_abundance.webp#bottomless_stomach.webp#celestial_weapons.webp#champion_infantry_chinese.webp#chasing_the_sun.webp#conscript_baolei_soldiers.webp#divine_books.webp#divine_judgement.webp#divine_light.webp#drought_ships.webp#east_wind.webp#flaming_blood.webp#frenzied_dash.webp#gilded_shields.webp#heavy_infantry_chinese.webp#herbal_medicine.webp#hooves_of_the_wind.webp#imperial_order.webp#kuafu_chieftain.webp#last_stand.webp#leizu's_silk.webp#levy_baolei_soldiers.webp#maelstrom.webp#master_of_weaponry.webp#medium_infantry_chinese.webp#mountainous_might.webp#peach_of_immortality.webp#power_of_chaos.webp#qilin's_blessing.webp#rage_of_slaughter.webp#red_cliffs_fleet.webp#reincarnation.webp#rising_tide.webp#rock_solid.webp#scorching_feathers.webp#shaker_of_heaven.webp#silk_road.webp#sinister_defiance.webp#sky_fire.webp#slash_and_burn.webp#song_of_midsummer.webp#son_of_loong.webp#southern_fire.webp#spoils_of_war.webp#summon_terracotta_riders.webp#tai_chi.webp#tempestuous_storm.webp#vibrant_land.webp#xuanyuan's_bloodline.webp",
    defensive:
      "boiling_oil.webp#bronze_wall.webp#carrier_pigeons.webp#citadel_wall.webp#crenellations.webp#fortified_wall.webp#guard_tower_upgrade.webp#improvement_ballista_tower.webp#improvement_watch_tower.webp#iron_wall.webp#orichalkos_wall.webp#sentry_tower.webp#signal_fires.webp#stone_wall.webp#wooden_wall.webp",
    dock: "arrowship_cladding.webp#champion_warships.webp#conscript_sailors.webp#dock.webp#enclosed_deck.webp#heavy_warships.webp#heroic_fleet.webp#naval_oxybeles.webp#purse_seine.webp#reinforced_ram.webp#salt_amphora.webp",
    economy:
      "bow_saw.webp#carpenters.webp#flood_control.webp#hand_axe.webp#husbandry.webp#irrigation.webp#pickaxe.webp#plow.webp#quarry.webp#shaft_mine.webp#survival_equipment.webp",
    egyptians_building:
      "barracks.webp#granary.webp#lighthouse.webp#lumber_camp.webp#migdol_stronghold.webp#mining_camp.webp#monument_to_villagers.webp#obelisk.webp#siege_works.webp#town_center_egyptian.webp",
    egyptians_civilian: "caravan_egyptian.webp#laborer.webp",
    egyptians_hero: "pharaoh.webp#priest.webp",
    egyptians_human:
      "axeman.webp#camel_rider.webp#chariot_archer.webp#mercenary.webp#mercenary_cavalry.webp#slinger.webp#spearman.webp#war_elephant.webp",
    egyptians_minor_god:
      "anubis.webp#bast.webp#horus.webp#nephthys.webp#osiris.webp#ptah.webp#sekhmet.webp#sobek.webp#thoth.webp",
    egyptians_myth:
      "anubite.webp#avenger.webp#egyptian_titan.webp#leviathan.webp#mummy.webp#petsuchos.webp#phoenix.webp#roc.webp#scarab.webp#scorpion_man.webp#son_of_osiris.webp#sphinx.webp#wadjet.webp#war_turtle.webp",
    egyptians_power:
      "ancestors.webp#citadel_power.webp#eclipse.webp#locust_swarm.webp#meteor.webp#plague_of_serpents.webp#prosperity.webp#rain.webp#shifting_sands.webp#son_of_osiris_power.webp#tornado.webp#vision.webp",
    egyptians_ship:
      "fishing_ship_egyptian.webp#kebenit.webp#ramming_galley.webp#transport_ship_egyptian.webp#war_barge.webp",
    egyptians_siege: "catapult.webp#siege_tower.webp",
    egyptians_tech:
      "adze_of_wepwawet.webp#atef_crown.webp#axe_of_vengeance.webp#bone_bow.webp#book_of_thoth.webp#champion_axemen.webp#champion_camel_riders.webp#champion_chariot_archers.webp#champion_slingers.webp#champion_spearmen.webp#champion_war_elephants.webp#city_of_the_dead.webp#clairvoyance.webp#conscript_barracks_soldiers.webp#conscript_migdol_soldiers.webp#crimson_linen.webp#criosphinx.webp#crocodilopolis.webp#dark_water.webp#desert_wind.webp#electrum_bullets.webp#feet_of_the_jackal.webp#feral.webp#flood_of_the_nile.webp#force_of_the_west_wind.webp#funeral_barge.webp#funeral_rites.webp#greatest_of_fifty.webp#hands_of_the_pharaoh.webp#heavy_axemen.webp#heavy_camel_riders.webp#heavy_chariot_archers.webp#heavy_slingers.webp#heavy_spearmen.webp#heavy_war_elephants.webp#hieracosphinx.webp#leather_frame_shield.webp#levy_barracks_soldiers.webp#levy_migdol_soldiers.webp#medium_axemen.webp#medium_slingers.webp#medium_spearmen.webp#nebty.webp#necropolis.webp#new_kingdom.webp#sacred_cats.webp#scalloped_axe.webp#serpent_spear.webp#shaduf.webp#skin_of_the_rhino.webp#slings_of_the_sun.webp#solar_barque - copy.webp#solar_barque.webp#spear_of_horus.webp#spirit_of_maat.webp#stones_of_red_linen.webp#sundried_mud_brick.webp#tusks_of_apedemak.webp#valley_of_the_kings.webp",
    greeks_building:
      "archery_range.webp#fortress.webp#granary.webp#military_academy.webp#stable.webp#storehouse.webp#town_center_greek.webp#village_center_greeks.webp",
    greeks_civilian: "caravan_greek.webp#villager_greek.webp",
    greeks_hero:
      "achilles.webp#ajax_spc.webp#atalanta.webp#bellerophon.webp#chiron.webp#heracles.webp#hippolyta.webp#icarus.webp#iolaus.webp#jason.webp#midas.webp#odysseus.webp#orpheus.webp#perseus.webp#polyphemus.webp#theseus.webp",
    greeks_human:
      "gastraphetoros.webp#hetairos.webp#hippeus.webp#hoplite.webp#hypaspist.webp#militia.webp#myrmidon.webp#peltast.webp#prodromos.webp#toxotes.webp",
    greeks_minor_god:
      "aphrodite.webp#apollo.webp#ares.webp#artemis.webp#athena.webp#dionysus.webp#hephaestus.webp#hera.webp#hermes.webp#hestia.webp#pan.webp#persephone.webp",
    greeks_myth:
      "carcinos.webp#centaur.webp#chimera.webp#colossus.webp#cyclops.webp#greek_titan.webp#hamadryad.webp#harpy.webp#hippocampus.webp#hydra.webp#lykaon.webp#lykaon_wolf.webp#manticore.webp#medusa.webp#minotaur.webp#nemean_lion.webp#pegasus.webp#scylla.webp#siren.webp",
    greeks_power:
      "arcadian_meadow.webp#bolt.webp#bronze.webp#ceasefire.webp#communal_hearth.webp#curse.webp#earthquake.webp#lightning_storm.webp#lure_power.webp#pestilence.webp#plenty_vault.webp#restoration.webp#sentinel_power.webp#underworld_invasion.webp#underworld_passage.webp#wither.webp",
    greeks_ship:
      "fishing_ship_greek.webp#juggernaut.webp#pentekonter.webp#transport_ship_greek.webp#trireme.webp",
    greeks_siege: "helepolis.webp#petrobolos.webp",
    greeks_tech:
      "aegis_shield.webp#anastrophe.webp#argive_patronage.webp#conscript_cavalry.webp#conscript_infantry.webp#conscript_ranged_soldiers.webp#deimos_sword_of_dread.webp#dionysia.webp#divine_blood.webp#divine_Labor.webp#enchanted_hymn.webp#enyos_bow_of_horror.webp#face_of_the_gorgon.webp#fated_arrows.webp#flames_of_typhon.webp#forge_of_olympus.webp#golden_apples.webp#gracious_hospitality.webp#hallowed_woodlands.webp#hand_of_talos.webp#iron_grip.webp#labyrinth_of_minos.webp#levy_cavalry.webp#levy_infantry.webp#levy_ranged_soldiers.webp#lord_of_horses.webp#monstrous_rage.webp#olympian_parentage.webp#olympian_weapons.webp#oracle.webp#pans_pioneers.webp#phobos_spear_of_panic.webp#pious_sacrifice.webp#predatory_instinct.webp#roar_of_orthus.webp#sacred_land.webp#sarissa.webp#shafts_of_plague.webp#shoulder_of_talos.webp#spirited_charge.webp#sun_ray.webp#sylvan_lore.webp#temple_of_healing.webp#thorned_walls.webp#thracian_horses.webp#trierarch.webp#vaults_of_erebus.webp#will_of_kronos.webp#winged_messenger.webp",
    japanese_building:
      "castle.webp#dojo.webp#guardhouse.webp#japanese_stable.webp#mining_camp.webp#shrine.webp#watermill.webp",
    japanese_civilian: "commoner.webp",
    japanese_hero: "bushi.webp#daimyo.webp#miko.webp#onmyoji.webp#onna_musha.webp",
    japanese_human:
      "naginata_rider.webp#samurai.webp#shinobi.webp#yari_spearman.webp#yumi_archer.webp#yumi_horse_archer.webp",
    japanese_minor_god:
      "ame-no-uzume.webp#fujin.webp#hachiman.webp#inari_okami.webp#minakatatomi.webp#okuninushi.webp#raijin.webp#takemikazuchi.webp#watatsumi.webp",
    japanese_myth:
      "asura.webp#honengyo.webp#jorogumo.webp#kamaitachi.webp#kitsune.webp#oni.webp#onmoraki.webp#raiju.webp#shinigami.webp#tengu.webp#titan_japanese.webp#umibozu.webp#wanyudo.webp#wretch.webp",
    japanese_power:
      "divine_slash.webp#dragon_typhoon.webp#goshinboku.webp#kusanagi.webp#new_moon.webp#sacred_gate.webp#shogun.webp#shrine_of_the_hunt.webp#smiting_gust.webp#solar_shield.webp#swampland.webp#thunder_burst.webp",
    japanese_ship: "junkozosen.webp#ramming_wasen.webp#wasen.webp",
    japanese_siege: "oyumi.webp",
    japanese_tech:
      "ascetic_practices.webp#asymmetrical_bows.webp#burning_malevolence.webp#condemned_soul.webp#crushing_waves.webp#dan-no-ura_tactics.webp#deadly_rage.webp#deadly_snare.webp#den_den_drums.webp#divine_prefecture.webp#eight_banners.webp#eternal_haunting.webp#gales_fury.webp#gohei_wands.webp#golden_kite.webp#hannya_mask.webp#heavenly_barrage.webp#hunters_strength.webp#ivory_netsuke.webp#kagura.webp#katagi.webp#kumiki.webp#mechanical_artisans.webp#oni_mask.webp#onmyodo.webp#restless_army.webp#sacred_custodians.webp#sakura_gardens.webp#saltwater_spring.webp#sashimono_bannermen.webp#seaside_infiltrators.webp#sojutsu.webp#sumo_training.webp#ten-fist_sword.webp#tenshu.webp#thunderous_presence.webp#wind_sickles.webp#wisdom_of_nine.webp",
    major_god:
      "amaterasu.webp#demeter.webp#freyr.webp#fuxi.webp#gaia.webp#hades.webp#isis.webp#kronos.webp#loki.webp#nuwa.webp#odin.webp#oranos.webp#poseidon.webp#ra.webp#set.webp#shennong.webp#susanoo.webp#thor.webp#tsukuyomi.webp#zeus.webp",
    market: "ambassadors.webp#coinage.webp#market.webp#tax_collectors.webp",
    norse_building:
      "dwarven_armory.webp#great_hall.webp#hill_fort.webp#longhouse.webp#town_center_norse.webp",
    norse_civilian: "caravan_norse.webp#dwarf.webp#gatherer.webp#ox_cart.webp",
    norse_hero: "godi.webp#hersir.webp",
    norse_human:
      "berserk.webp#hirdman.webp#huskarl.webp#jarl.webp#raiding_cavalry.webp#throwing_axeman.webp",
    norse_minor_god:
      "aegir.webp#baldr.webp#bragi.webp#forseti.webp#freyja.webp#heimdall.webp#hel.webp#njord.webp#skadi.webp#tyr.webp#ullr.webp#vidar.webp",
    norse_myth:
      "battle_boar.webp#draugr.webp#einherjar.webp#fafnir.webp#fenris_wolf_brood.webp#fimbulwinter_wolf.webp#fire_giant.webp#frost_giant.webp#jormun_elver.webp#kraken.webp#mountain_giant.webp#nidhogg_unit.webp#norse_titan.webp#raven.webp#rock_giant.webp#troll.webp#valkyrie.webp#walking_woods_unit.webp",
    norse_power:
      "asgardian_bastion.webp#dwarven_mine.webp#fimbulwinter.webp#flaming_weapons.webp#forest_fire.webp#frost.webp#great_hunt.webp#gullinbursti.webp#healing_spring_power.webp#inferno.webp#nidhogg.webp#ragnarok.webp#spy.webp#tempest.webp#undermine.webp#walking_woods_power.webp",
    norse_ship:
      "dragon_ship.webp#dreki.webp#fishing_ship_norse.webp#longboat.webp#transport_ship_norse.webp",
    norse_siege: "ballista.webp#portable_ram.webp",
    norse_tech:
      "arctic_winds.webp#avenging_spirit.webp#berserkergang.webp#bravery.webp#call_of_valhalla.webp#cave_troll.webp#conscript_great_hall_soldiers.webp#conscript_hill_fort_soldiers.webp#conscript_longhouse_soldiers.webp#disablot.webp#dragonscale_shields.webp#dwarven_auger.webp#dwarven_breastplate.webp#dwarven_weapons.webp#eyes_in_the_forest.webp#feasts_of_renown.webp#freyr's_gift.webp#fury_of_the_fallen.webp#gjallarhorn.webp#granite_blood.webp#granite_maw.webp#grasp_of_ran.webp#hall_of_thanes.webp#hamask.webp#hammer_of_thunder.webp#huntress_axe.webp#levy_great_hall_soldiers.webp#levy_hill_fort_soldiers.webp#levy_longhouse_soldiers.webp#long_serpent.webp#meteoric_iron_armor.webp#nine_waves.webp#rampage.webp#rigsthula.webp#rime.webp#ring_giver.webp#ring_oath.webp#safeguard.webp#servants_of_glory.webp#sessrumnir.webp#silent_resolve.webp#sons_of_sleipnir.webp#swine_array.webp#thundering_hooves.webp#thurisaz_rune.webp#twilight_of_the_gods.webp#valgaldr.webp#winter_harvest.webp#wrath_of_the_deep.webp#ydalir.webp",
    other: "farm.webp#house.webp#relic.webp#titan_gate.webp#wonder.webp",
    resource:
      "berry.webp#favor.webp#food.webp#gold.webp#repair.webp#tree.webp#wood.webp#worker.webp",
    tech_military:
      "champion_archers.webp#champion_cavalry.webp#champion_infantry.webp#draft_horses.webp#engineers.webp#heavy_archers.webp#heavy_cavalry.webp#heavy_infantry.webp#medium_archers.webp#medium_cavalry.webp#medium_infantry.webp#norse_champion_infantry.webp#norse_heavy_infantry.webp#norse_medium_infantry.webp",
    temple: "omniscience.webp#temple.webp",
    town_center:
      "architects.webp#fortified_town_center.webp#masons.webp#town_center.webp#village_center.webp",
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
      "Assimilator.webp#Cybernetics_Core.webp#Dark_Shrine.webp#Fleet_Beacon.webp#Forge.webp#Gateway.webp#Nexus.webp#Photon_Cannon.webp#Pylon.webp#Robotics_Bay.webp#Robotics_Facility.webp#ShieldBattery.webp#Stargate.webp#StasisWard.webp#Templar_Archives.webp#Twilight_Council.webp#Warp_Gate.webp",
    protoss_techs:
      "Air_armor_1.webp#Air_armor_2.webp#Air_armor_3.webp#Air_weapons_1.webp#Air_weapons_2.webp#Air_weapons_3.webp#Anion_Pulse-Crystals.webp#Battery_Overcharge.webp#Blink.webp#Charge.webp#Chrono_boost.webp#Extended_thermal_lances.webp#Flux_Vanes.webp#Gravitic_booster.webp#Gravitic_drive.webp#Graviton_catapult.webp#Ground_armor_1.webp#Ground_armor_2.webp#Ground_armor_3.webp#Ground_weapons_1.webp#Ground_weapons_2.webp#Ground_weapons_3.webp#Guardian_shield.webp#Mass_Recall.webp#Psionic_storm.webp#Resonating_Glaives.webp#Shadow_Stride.webp#Shields_1.webp#Shields_2.webp#Shields_3.webp#Tectonic_Destabilizers.webp#Transform_warpgate.webp",
    protoss_units:
      "Adept.webp#Archon.webp#Carrier.webp#Colossus.webp#Dark_Templar.webp#Disruptor.webp#High_Templar.webp#Immortal.webp#Mothership.webp#Mothership_Core.webp#Observer.webp#Oracle.webp#Phoenix.webp#Probe.webp#Sentry.webp#Stalker.webp#Tempest.webp#VoidRay.webp#Warp_Prism.webp#Zealot.webp",
    race_icon: "AnyRaceIcon.webp#ProtossIcon.webp#TerranIcon.webp#ZergIcon.webp",
    resource: "minerals.webp#vespene_gas.webp",
    terran_buildings:
      "Armory.webp#Barracks.webp#Bunker.webp#CommandCenter.webp#EngineeringBay.webp#Factory.webp#FusionCore.webp#GhostAcademy.webp#MissileTurret.webp#OrbitalCommand.webp#PlanetaryFortress.webp#Reactor.webp#Refinery.webp#SensorTower.webp#Starport.webp#SupplyDepot.webp#TechLab.webp",
    terran_techs:
      "Advanced_Ballistics.webp#Behemoth_reactor.webp#Building_armor.webp#Build_Reactor.webp#Build_Tech_Lab.webp#Calldown_extra_supplies.webp#Calldown_mule.webp#Cloak.webp#Enhanced_Shockwaves.webp#High_Capacity_Fuel_Tanks.webp#Hisec_auto_tracking.webp#Infantry_armor_1.webp#Infantry_armor_2.webp#Infantry_armor_3.webp#Infantry_weapons_1.webp#Infantry_weapons_2.webp#Infantry_weapons_3.webp#Lower.webp#Moebius_reactor.webp#Neosteel_frames.webp#Nuke.webp#Scanner_sweep.webp#Ship_weapons_1.webp#Ship_weapons_2.webp#Ship_weapons_3.webp#Vehicle_plating_1.webp#Vehicle_plating_2.webp#Vehicle_plating_3.webp#Vehicle_weapons_1.webp#Vehicle_weapons_2.webp#Vehicle_weapons_3.webp#Yamato_cannon.webp",
    terran_units:
      "Auto-turret.webp#Banshee.webp#Battlecruiser.webp#Cyclone.webp#Ghost.webp#Hellbat.webp#Hellion.webp#Liberator.webp#Marauder.webp#Marine.webp#Medivac.webp#MULE.webp#Point_defense_drone.webp#Raven.webp#Reaper.webp#SCV.webp#SiegeTank.webp#Thor.webp#Viking.webp#WidowMine.webp",
    zerg_buildings:
      "Baneling_Nest.webp#Creep_Tumor.webp#Evolution_Chamber.webp#Extractor.webp#Greater_Spire.webp#Hatchery.webp#Hive.webp#Hydralisk_Den.webp#Infestation_Pit.webp#Lair.webp#LurkerDen.webp#Nydus_Network.webp#Nydus_Worm.webp#Roach_Warren.webp#Spawning_Pool.webp#Spine_Crawler.webp#Spire.webp#Spore_Crawler.webp#Ultralisk_Cavern.webp",
    zerg_techs:
      "Adaptive_Talons.webp#Adrenal_glands.webp#Anabolic_Synthesis.webp#Burrow.webp#Centrifugal_hooks.webp#Chitinous_Plating.webp#Flyer_attack_1.webp#Flyer_attack_2.webp#Flyer_attack_3.webp#Flyer_carapace_1.webp#Flyer_carapace_2.webp#Flyer_carapace_3.webp#Glial_reconstitution.webp#Grooved_Spines.webp#Ground_carapace_1.webp#Ground_carapace_2.webp#Ground_carapace_3.webp#Melee_attacks_1.webp#Melee_attacks_2.webp#Melee_attacks_3.webp#Metabolic_boost.webp#Microbial_Shroud.webp#Missile_attacks_1.webp#Missile_attacks_2.webp#Missile_attacks_3.webp#Muscular_Augments.webp#Mutate_Ventral_Sacs.webp#Neural_parasite.webp#Pathogen_glands.webp#Pneumatized_carapace.webp#Seismic_Spines.webp#Tunneling_claws.webp",
    zerg_units:
      "Baneling.webp#Broodling.webp#Brood_Lord.webp#Changeling.webp#Corruptor.webp#Drone.webp#Hydralisk.webp#Infested_Terran.webp#Infestor.webp#Larva.webp#Lurker.webp#Mutalisk.webp#Overlord.webp#Overseer.webp#Queen.webp#Ravager.webp#Roach.webp#Swarm_Host.webp#Ultralisk.webp#Viper.webp#Zergling.webp",
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
      "altar_of_kings.webp#arcane_sanctum.webp#arcane_vault.webp#barracks.webp#blacksmith.webp#farm.webp#gryphon_aviary.webp#lumber_mill.webp#scout_tower.webp#town_hall.webp#workshop.webp",
    human_hero: "archmage.webp#blood_mage.webp#mountain_king.webp#paladin.webp",
    human_special: "militia.webp#phoenix.webp#summon_water_elemental.webp",
    human_unit:
      "dragon_hawk_rider.webp#flying_machine.webp#footman.webp#gryphon_rider.webp#knight.webp#mortar_team.webp#peasant.webp#priest.webp#rifleman.webp#siege_engine.webp#sorceress.webp#spell_breaker.webp",
    night_elf_building:
      "altar_of_elders.webp#ancient_of_lore.webp#ancient_of_war.webp#ancient_of_wind.webp#ancient_of_wonders.webp#ancient_protector.webp#chimaera_roost.webp#hunters_hall.webp#moon_well.webp#tree_of_life.webp",
    night_elf_hero:
      "demon_hunter.webp#keeper_of_the_grove.webp#priestess_of_the_moon.webp#warden.webp",
    night_elf_special:
      "avatar_of_vengeance.webp#druid_of_the_claw.webp#druid_of_the_talon.webp#hippogryph_rider.webp#owl_scout.webp#spirit_of_vengeance.webp#treant.webp",
    night_elf_unit:
      "archer.webp#chimaera.webp#druid_of_the_claw.webp#druid_of_the_talon.webp#dryad.webp#faerie_dragon.webp#glaive_thrower.webp#hippogryph.webp#huntress.webp#mountain_giant.webp#wisp.webp",
    orc_building:
      "altar_of_storms.webp#barracks.webp#beastiary.webp#great_hall.webp#orc_burrow.webp#spirit_lodge.webp#tauren_totem.webp#voodoo_lounge.webp#war_mill.webp#watch_tower.webp",
    orc_hero: "blademaster.webp#far_seer.webp#shadow_hunter.webp#tauren_chieftain.webp",
    orc_special: "serpent_ward.webp#spirit_wolf.webp#troll_berserker.webp",
    orc_unit:
      "demolisher.webp#grunt.webp#kodo_beast.webp#peon.webp#raider.webp#shaman.webp#spirit_walker.webp#tauren.webp#troll_batrider.webp#troll_headhunter.webp#wind_rider.webp#witch_doctor.webp",
    race: "dice.webp#human.webp#night_elf.webp#orc.webp#undead.webp",
    resource: "food.webp#gold.webp#lumber.webp",
    undead_building:
      "altar_of_darkness.webp#boneyard.webp#crypt.webp#graveyard.webp#haunted_goldmine.webp#necropolis.webp#sacrificial_pit.webp#slaughter_house.webp#temple_of_the_damned.webp#tomb_of_relics.webp#ziggurat.webp",
    undead_hero: "crypt_lord.webp#death_knight.webp#dread_lord.webp#lich.webp",
    undead_special:
      "carrion_beetle.webp#destroyer.webp#shade.webp#skeletal_mage.webp#skeleton_warrior.webp",
    undead_unit:
      "abomination.webp#acolyte.webp#banshee.webp#crypt_fiend.webp#frost_wyrm.webp#gargoyle.webp#ghoul.webp#meat_wagon.webp#necromancer.webp#obsidian_statue.webp",
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
      "feather.webp#gears.webp#hide.webp#leave.webp#load.webp#manual_timer_switch.webp#next.webp#pause.webp#previous.webp#save.webp#start_stop.webp#start_stop_active.webp#timer_0.webp#to_beginning.webp#to_end.webp",
    icon: "blue_plus.webp#cross.webp#down_arrow.webp#grey_return.webp#house.webp#info.webp#invalid_timing.webp#light_blue_plus.webp#logo-192.webp#logo-512.webp#mouse.webp#orange_cross.webp#question_mark.webp#red_cross.webp#salamander_sword_shield.webp#salamander_sword_shield_small.webp#time.webp#top_arrow.webp#valid_timing.webp",
  };

  // Split each string (e.g. 'image_0#image_1#image_2') in a list of images.
  for (const [key, value] of Object.entries(imagesDict)) {
    imagesDict[key] = value.split("#");
  }

  return imagesDict;
}
