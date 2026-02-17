document.addEventListener("DOMContentLoaded", function () {
  // Recover elements
  const gameSelect = document.getElementById("game-select");
  const factionSelect = document.getElementById("faction-select");
  const opponentFactionGroup = document.getElementById("opponent-faction-group");
  const opponentFactionSelect = document.getElementById("opponent-faction-select");
  const designBuildOrderButton = document.getElementById("design-build-order");
  const downloadOverlayButton = document.getElementById("download-overlay");
  const authorFilter = document.getElementById("author-filter");
  const buildOrderFilter = document.getElementById("build-order-filter");
  const buildOrdersContainer = document.getElementById("build-orders-container");
  const header = document.querySelector(".header");

  // Map game names to their build orders arrays
  const buildOrdersMap = {
    aoe2: aoe2_build_orders,
    aoe4: aoe4_build_orders,
    aom: aom_build_orders,
    sc2: sc2_build_orders,
    wc3: wc3_build_orders,
  };

  // Update faction select based on game
  function updateFactionSelect() {
    gameName = gameSelect.value;

    imagesGame = getImagesGame(gameName);
    imagesCommon = getImagesCommon();

    factionSelect.innerHTML = '<option value="All">All</option>';
    if (gameName && gameFactions[gameName]) {
      Object.keys(gameFactions[gameName]).forEach((factionKey) => {
        // Skip specific generic factions
        const skipEntry = (gameName === "sc2" || gameName === "wc3") && factionKey == "Any";
        if (!skipEntry) {
          const option = document.createElement("option");
          option.value = factionKey;
          option.textContent = factionKey;
          factionSelect.appendChild(option);
        }
      });
    }

    // Show opponent faction select for specific games
    if (gameName === "sc2" || gameName === "wc3") {
      opponentFactionGroup.style.display = "flex";
      opponentFactionSelect.innerHTML = "";
      if (gameFactions[gameName]) {
        Object.keys(gameFactions[gameName]).forEach((factionKey) => {
          const option = document.createElement("option");
          option.value = factionKey;
          option.textContent = factionKey;
          opponentFactionSelect.appendChild(option);
        });
      }
    } else {
      opponentFactionGroup.style.display = "none";
    }
  }

  // Initialize the faction select with AoE2 factions
  updateFactionSelect();

  // Update design build order button link based on game
  designBuildOrderButton.addEventListener("click", function () {
    if (gameName) {
      window.open(`https://rts-overlay.github.io/?gameId=${gameName}`, "_blank");
    }
  });

  // Download overlay button link
  downloadOverlayButton.addEventListener("click", function () {
    window.open("https://github.com/CraftySalamander/RTS_Overlay", "_blank");
  });

  // Filter build orders based on input
  function filterBuildOrders() {
    const faction = factionSelect.value;
    const opponentFaction = opponentFactionSelect.value;
    const author = authorFilter.value.toLowerCase();
    const buildOrderName = buildOrderFilter.value.toLowerCase();
    const filterOpponentFaction = gameName === "sc2" || gameName === "wc3";

    buildOrdersContainer.innerHTML = "";
    if (gameName) {
      const buildOrders = buildOrdersMap[gameName] || [];

      if (buildOrders.length === 0) {
        buildOrdersContainer.innerHTML = '<div class="no-build-orders">No valid build order</div>';
      } else {
        buildOrders.forEach((buildOrder) => {
          // Check if the build order matches the filters
          const matchesFaction =
            faction === "All" ||
            (Array.isArray(buildOrder.faction)
              ? buildOrder.faction.includes(faction)
              : buildOrder.faction === faction);
          const matchesOpponentFaction =
            !filterOpponentFaction ||
            buildOrder.opponent_faction === "Any" ||
            buildOrder.opponent_faction === opponentFaction;
          const matchesAuthor = !author || buildOrder.author.toLowerCase().includes(author);
          const matchesName =
            !buildOrderName || buildOrder.name.toLowerCase().includes(buildOrderName);

          if (matchesFaction && matchesOpponentFaction && matchesAuthor && matchesName) {
            const buildOrderElement = document.createElement("div");
            buildOrderElement.className = "build-order-button";
            const factionIcon = Array.isArray(buildOrder.faction)
              ? buildOrder.faction[0]
              : buildOrder.faction;
            buildOrderElement.innerHTML = `
                        <img src="assets/${gameName}/${gameFactions[gameName][factionIcon]}" alt="${factionIcon} icon">
                        <span class="build-order-name">${buildOrder.name}</span>
                        `;
            buildOrderElement.addEventListener("click", function () {
              displayBuildOrder(buildOrder.content);
            });
            buildOrdersContainer.appendChild(buildOrderElement);
          }
        });
      }
    }
  }

  // Add event listeners for filtering
  gameSelect.addEventListener("change", function () {
    updateFactionSelect();
    filterBuildOrders();
  });
  factionSelect.addEventListener("change", filterBuildOrders);
  opponentFactionSelect.addEventListener("change", filterBuildOrders);
  authorFilter.addEventListener("input", filterBuildOrders);
  buildOrderFilter.addEventListener("input", filterBuildOrders);

  // Run initial filtering
  filterBuildOrders();
});
