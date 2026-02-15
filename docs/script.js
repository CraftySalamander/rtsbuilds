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
    const game = gameSelect.value;
    factionSelect.innerHTML = '<option value="All">All</option>';
    if (game && gameFactions[game]) {
      Object.keys(gameFactions[game]).forEach((factionKey) => {
        // Skip specific generic factions
        const skipEntry = (game === "sc2" || game === "wc3") && factionKey == "Any";
        if (!skipEntry) {
          const option = document.createElement("option");
          option.value = factionKey;
          option.textContent = factionKey;
          factionSelect.appendChild(option);
        }
      });
    }

    // Show opponent faction select for specific games
    if (game === "sc2" || game === "wc3") {
      opponentFactionGroup.style.display = "flex";
      opponentFactionSelect.innerHTML = "";
      if (gameFactions[game]) {
        Object.keys(gameFactions[game]).forEach((factionKey) => {
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
    const game = gameSelect.value;
    if (game) {
      window.open(`https://rts-overlay.github.io/?gameId=${game}`, "_blank");
    }
  });

  // Download overlay button link
  downloadOverlayButton.addEventListener("click", function () {
    window.open("https://github.com/CraftySalamander/RTS_Overlay", "_blank");
  });

  // Filter build orders based on input
  function filterBuildOrders() {
    const game = gameSelect.value;
    const faction = factionSelect.value;
    const opponentFaction = opponentFactionSelect.value;
    const author = authorFilter.value.toLowerCase();
    const buildOrderName = buildOrderFilter.value.toLowerCase();
    const filterOpponentFaction = game === "sc2" || game === "wc3";

    buildOrdersContainer.innerHTML = "";
    if (game) {
      const buildOrders = buildOrdersMap[game] || [];

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
                        <img src="assets/${game}/${gameFactions[game][factionIcon]}" alt="${factionIcon} icon">
                        <span class="build-order-name">${buildOrder.name}</span>
                        `;
            buildOrderElement.addEventListener("click", function () {
              openBuildOrderWindow(buildOrder);
            });
            buildOrdersContainer.appendChild(buildOrderElement);
          }
        });
      }
    }
  }

  // Function to open a new window with the build order content
  function openBuildOrderWindow(buildOrder) {
    const content = buildOrder.content;
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>${buildOrder.name}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }
          .header-img {
            max-width: 200px; /* Adjust the max-width as needed */
            height: auto;
          }
          pre {
            white-space: pre-wrap;
            word-wrap: break-word;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="assets/common/title/rts_builds.png" alt="RTS Builds Title" class="header-img">
        </div>
        <div class="build-order-content">
          <h2>${buildOrder.name}</h2>
          <pre>${JSON.stringify(content, null, 2)}</pre>
        </div>
      </body>
      </html>
    `);
    newWindow.document.close();
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
