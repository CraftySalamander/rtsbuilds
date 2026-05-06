// Most functions were copied from RTS Overlay

let gameName = "aoe2"; // Name of the game (i.e. its picture folder)
let imagesGame = {}; // Dictionary with images available for the game.
let imagesCommon = {}; // Dictionary with images available from common folder.

/**
 * Add space indentation.
 *
 * @param {int} indentCount  Number of indentations to make.
 * @param {int} indentSize   Number of spaces per indentation.
 *
 * @returns String with the indentations as sequence of spaces.
 */
function indentSpace(indentCount, indentSize = 4) {
  return " ".repeat(indentCount * indentSize);
}

/**
 * Enumerate function for array.
 *
 * @param {*} iterable    Iterable for array.
 */
function* enumerate(iterable) {
  let i = 0;
  for (const x of iterable) {
    yield [i, x];
    i++;
  }
}

/**
 * Split a line based on the @ markers and remove first/last empty elements.
 *
 * @param {string} noteLine  Line corresponding to a note, to split.
 *
 * @returns Requested split line.
 */
function splitNoteLine(noteLine) {
  lineSplit = noteLine.split("@");

  if (lineSplit.length > 0 && lineSplit[0] === "") {
    lineSplit.shift(); // Remove first element
  }
  if (lineSplit.length > 0 && lineSplit[-1] === "") {
    lineSplit.pop(); // Remove last element
  }

  return lineSplit;
}

/**
 * Get the path for an image.
 *
 * @param {string} imageSearch  Image to search, with extension and path
 *                              starting in 'common' or 'game' picture folder.
 *
 * @returns Image with its path, 'null' if not found.
 */
function getImagePath(imageSearch) {
  const extensions = [".webp", ".png", ".jpg"]; // different extensions to try

  // Extract current extension (if any)
  const currentExtMatch = imageSearch.match(/\.(webp|png|jpg)$/);
  const currentExt = currentExtMatch ? currentExtMatch[0] : null;

  // Get base path without extension
  const basePath = currentExt ? imageSearch.slice(0, -currentExt.length) : imageSearch;

  // Reorder extensions to start with current one (if present)
  const orderedExtensions = currentExt
    ? [currentExt, ...extensions.filter((ext) => ext !== currentExt)]
    : extensions;

  // Loop through extension variations
  for (const ext of orderedExtensions) {
    const imageSearchExtension = `${basePath}${ext}`;

    // Try first with the game folder
    for (const [subFolder, images] of Object.entries(imagesGame)) {
      for (let image of images) {
        if (imageSearchExtension === subFolder + "/" + image) {
          return "assets/" + gameName + "/" + imageSearchExtension;
        }
      }
    }

    // Try then with the common folder
    for (const [subFolder, images] of Object.entries(imagesCommon)) {
      for (let image of images) {
        if (imageSearchExtension === subFolder + "/" + image) {
          return "assets/common" + "/" + imageSearchExtension;
        }
      }
    }
  }

  // not found
  return null;
}

/**
 * Convert a note line to HTML with text and images.
 *
 * @param {string} note       Note line from a build order.
 * @param {int} imageHeight   Height of the images, <= 0 to take 'imageHeightBO'.
 *
 * @returns HTML code corresponding to the requested line, with text and images.
 */
function noteToTextImages(note, imageHeight = -1) {
  let result = "";

  // Split note line between text and images
  const splitLine = splitNoteLine(note);
  const splitCount = splitLine.length;

  if (splitCount > 0) {
    // loop on the line parts
    for (let splitID = 0; splitID < splitCount; splitID++) {
      // Check if it is a valid image and get its path
      const imagePath = getImagePath(splitLine[splitID]);

      if (imagePath) {
        // image
        result += getBOImageHTML(imagePath, imageHeight);
      } else {
        // text
        result += splitLine[splitID];
      }
    }
  }

  return result;
}

/**
 * Render the full BO in a single panel inside build_order.html,
 * based on table descriptions.
 *
 * @param {Object} dataBO             Data of the build order.
 * @param {Array} columnsDescription  Array of 'SinglePanelColumn' describing
 *                                    each column (except the notes).
 * @param {Object} sectionsHeader     Dictionary describing the sections headers, containing 'key',
 *                                    'before' and 'after', null if no section.
 */
function displayBuildOrderFromDescription(dataBO, columnsDescription, sectionsHeader = null) {
  const buildOrderData = dataBO["build_order"];
  const buildOrderName = dataBO["name"];

  // Update the page title
  document.title = "RTS Builds - " + buildOrderName;
  document.querySelector(".build-order-title").textContent = buildOrderName;

  // Check which columns need to be displayed
  let displayColumns = new Array(columnsDescription.length).fill(false);

  for (const currentStep of buildOrderData) {
    for (const [index, column] of columnsDescription.entries()) {
      if (displayColumns[index]) continue;
      if (!(column instanceof SinglePanelColumn)) throw "Wrong column definition.";
      if (!column.hideIfAbsent) {
        displayColumns[index] = true;
        continue;
      }
      let subPart = currentStep;
      let valid = true;
      for (const subField of column.field.split("/")) {
        if (!(subField in subPart)) {
          valid = false;
          break;
        }
        subPart = subPart[subField];
      }
      if (valid) {
        if (column.displayIfPositive) {
          const num = Number(subPart);
          if (Number.isInteger(num) && num > 0) displayColumns[index] = true;
        } else {
          displayColumns[index] = true;
        }
      }
    }
  }

  // Update the columns description to only keep the ones to display
  let updatedColumnsDescription = [];
  let validColumnsCount = 0;
  for (const [index, column] of columnsDescription.entries()) {
    if (displayColumns[index]) {
      updatedColumnsDescription.push(column);
      validColumnsCount++;
    }
  }

  // Generate HTML content
  let htmlContent = "";

  htmlContent += "<style>";
  htmlContent += "table {\n";
  htmlContent += "  color: rgb(255, 255, 255);\n";
  htmlContent += "  background-color: rgb(55, 55, 55);\n";
  htmlContent += "  margin: 0 auto;\n";
  htmlContent += "  border-radius: 15px;\n";
  htmlContent += "  border-collapse: collapse;\n";
  htmlContent += "  margin-bottom: 30px;\n";
  htmlContent += "}\n\n";

  htmlContent += "td {\n";
  htmlContent += "  text-align: center;\n";
  htmlContent += "  vertical-align: middle;\n";
  htmlContent += "  padding: 10px;\n";
  htmlContent += "}\n\n";

  htmlContent += "img {\n";
  htmlContent += "  vertical-align: middle;\n";
  htmlContent += "}\n\n";

  htmlContent += ".note {\n";
  htmlContent += "  text-align: left;\n";
  htmlContent += "  padding-right: 25px;\n";
  htmlContent += "}\n\n";

  htmlContent += ".full_line {\n";
  htmlContent += "  text-align: left;\n";
  htmlContent += "  font-weight: bold;\n";
  htmlContent += "  padding-left: 25px;\n";
  htmlContent += "}\n\n";

  htmlContent += ".full_line img {\n";
  htmlContent += "  margin-right: 10px;\n";
  htmlContent += "}\n\n";

  htmlContent += ".border_top {\n";
  htmlContent += "  position: relative;\n";
  htmlContent += "}\n\n";

  htmlContent += ".border_top::after {\n";
  htmlContent += "  content: '';\n";
  htmlContent += "  position: absolute;\n";
  htmlContent += "  top: 0;\n";
  htmlContent += "  left: 2.5%;\n";
  htmlContent += "  width: 95%;\n";
  htmlContent += "  border: 1px solid rgb(150, 150, 150);\n";
  htmlContent += "}\n\n";

  htmlContent += ".column-0 {\n";
  htmlContent += "  padding-left: 25px;\n";
  htmlContent += "}\n\n";

  // Style from column description
  for (const [index, column] of updatedColumnsDescription.entries()) {
    if (column.italic || column.bold || column.backgroundColor || column.textAlign) {
      htmlContent += `.column-${index} {\n`;
      if (column.italic) {
        htmlContent += "  font-style: italic;\n";
      }
      if (column.bold) {
        htmlContent += "  font-weight: bold;\n";
      }
      if (column.backgroundColor) {
        const color = column.backgroundColor;
        htmlContent += `  background-color: rgb(${color[0]}, ${color[1]}, ${color[2]});\n`;
      }
      if (column.textAlign) {
        htmlContent += `  text-align: ${column.textAlign};\n`;
      }
      htmlContent += "}\n\n";
    }
  }
  htmlContent += "</style>";

  // Table content
  htmlContent += "<table class='build-order-table'>";
  htmlContent += '<tr id="header">';

  for (const column of updatedColumnsDescription) {
    if (column.image) {
      htmlContent += "<td>" + getBOImageHTML(column.image) + "</td>";
    } else {
      htmlContent += "<td></td>";
    }
  }
  htmlContent += "</tr>";

  let lastSectionHeaderKey = null;
  for (const currentStep of buildOrderData) {
    const notes = currentStep["notes"];
    let currentSectionHeaderKey = null;
    if (sectionsHeader) {
      currentSectionHeaderKey = currentStep[sectionsHeader.key];
      if (
        sectionsHeader.first_line &&
        currentSectionHeaderKey in sectionsHeader.first_line &&
        !lastSectionHeaderKey
      ) {
        htmlContent += '<tr class="border_top">';
        htmlContent += `<td class="full_line" colspan=${validColumnsCount}>${sectionsHeader.first_line[currentSectionHeaderKey]}</td>`;
        htmlContent += "</tr>";
      }
      if (
        sectionsHeader.before &&
        currentSectionHeaderKey in sectionsHeader.before &&
        lastSectionHeaderKey &&
        currentSectionHeaderKey !== lastSectionHeaderKey
      ) {
        htmlContent += '<tr class="border_top">';
        htmlContent += `<td class="full_line" colspan=${validColumnsCount}>${sectionsHeader.before[currentSectionHeaderKey]}</td>`;
        htmlContent += "</tr>";
      }
    }

    for (const [noteID, note] of enumerate(notes)) {
      if (noteID == 0) {
        htmlContent += '<tr class="border_top">';
        for (const [index, column] of updatedColumnsDescription.entries()) {
          let subPart = currentStep;
          for (const subField of column.field.split("/")) {
            if (!(subField in subPart)) {
              subPart = "";
              break;
            }
            subPart = subPart[subField];
          }
          let fieldValue = subPart;
          if (column.displayIfPositive && fieldValue !== "") {
            const num = Number(fieldValue);
            if (Number.isInteger(num) && num <= 0) fieldValue = "";
          }
          htmlContent += `<td class="column-${index}">${fieldValue}</td>`;
        }
      } else {
        htmlContent += "<tr>";
        for (let index = 0; index < updatedColumnsDescription.length; index++) {
          htmlContent += `<td class="column-${index}"></td>`;
        }
      }
      htmlContent += `<td class="note"><div>${noteToTextImages(note)}</div></td>`;
      htmlContent += "</tr>";
    }

    if (sectionsHeader) {
      if (
        sectionsHeader.after &&
        currentSectionHeaderKey in sectionsHeader.after &&
        lastSectionHeaderKey &&
        currentSectionHeaderKey !== lastSectionHeaderKey
      ) {
        htmlContent += '<tr class="border_top">';
        htmlContent += `<td class="full_line" colspan=${validColumnsCount}>${sectionsHeader.after[currentSectionHeaderKey]}</td>`;
        htmlContent += "</tr>";
      }
      lastSectionHeaderKey = currentSectionHeaderKey;
    }
  }
  htmlContent += "</table>";

  // Inject the table into build_order.html
  const buildOrderContentContainer =
    document.getElementById("build-order-content") || document.createElement("div");
  buildOrderContentContainer.id = "build-order-content";
  buildOrderContentContainer.innerHTML = htmlContent;

  // Append the container to the selectors div (or another suitable parent)
  const selectorsDiv = document.querySelector(".selectors");
  if (selectorsDiv) {
    selectorsDiv.after(buildOrderContentContainer);
  } else {
    document.body.appendChild(buildOrderContentContainer);
  }

  // Set up button event listeners
  const exportName = dataBO.name ? dataBO.name.replaceAll(/\s+/g, "_") : "rts_overlay";

  document.getElementById("open_in_rts_overlay").addEventListener("click", () => {
    const buildOrderName = dataBO.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const url = `https://rts-overlay.github.io?gameId=${gameName}&buildOrderId=rtsbuilds|${buildOrderName}`;
    window.open(url, "_blank");
  });

  document.getElementById("copy_bo").addEventListener("click", () => {
    const jsonString = JSON.stringify(dataBO, null, 4);
    navigator.clipboard
      .writeText(jsonString)
      .then(() => {
        console.log("Content copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });

  document.getElementById("export_bo").addEventListener("click", () => {
    const fileBO = new Blob([JSON.stringify(dataBO, null, 4)], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(fileBO);
    link.download = `${exportName}.json`;
    link.click();
    URL.revokeObjectURL(link.href);
  });
}

/**
 * Definition of a column for BO in a single panel.
 */
class SinglePanelColumn {
  /**
   * Constructor.
   *
   * @param {string} field               Name of the field to display.
   * @param {string} image               Path of the image on top of
   *                                     the column (null to hide).
   * @param {string} text                Text to use instead of an image.
   * @param {boolean} italic             true for italic.
   * @param {boolean} bold               true for bold.
   * @param {boolean} optional           true if field is optional.
   * @param {boolean} isIntegerInRawBO   true if field is represented by an integer in raw BO.
   * @param {boolean} hideIfAbsent       true to  hide if fully absent.
   * @param {boolean} displayIfPositive  true to display only if it is > 0,
   *                                     should be 'false' for non-integers.
   * @param {boolean} showOnlyPositive   true to only show the positive characters.
   * @param {Array} backgroundColor      Color of the background, null to keep default.
   * @param {string} textAlign           Value for 'text-align', null for default.
   * @param {string} tooltip             Tootlip to show, null for no tooltip.
   * @param {boolean} isSelectwidget     true if selection widget column.
   */
  constructor(
    field,
    image = null,
    text = null,
    italic = false,
    bold = false,
    optional = false,
    isIntegerInRawBO = false,
    hideIfAbsent = false,
    displayIfPositive = false,
    showOnlyPositive = false,
    backgroundColor = null,
    textAlign = null,
    tooltip = null,
    isSelectwidget = false,
  ) {
    this.field = field;
    this.image = image;
    this.text = text;
    this.italic = italic;
    this.bold = bold;
    this.optional = optional;
    this.isIntegerInRawBO = isIntegerInRawBO;
    this.hideIfAbsent = hideIfAbsent;
    this.displayIfPositive = displayIfPositive;
    this.showOnlyPositive = showOnlyPositive;
    this.backgroundColor = backgroundColor;
    this.textAlign = textAlign;
    this.tooltip = tooltip;
    this.isSelectwidget = isSelectwidget;
  }
}

/**
 * Get the HTML code to add an image.
 *
 * @param {string} imagePath       Image to display (with path and extension).
 * @param {int} imageHeight        Height of the image.
 * @param {string} functionName    Name of the function to call when clicking on
 *                                 the image, null if no function to call.
 * @param {string} functionArgs    Arguments to use for the function,
 *                                 null if no function or no argument.
 * @param {string} tooltipText     Text for the tooltip, null if no tooltip.
 * @param {string} imageID         ID of the image, null if no specific ID
 * @param {boolean} tooltipOnLeft  true for tooltip on left (if any), false for right
 * @param {boolean} argsInQuotes   true to put 'functionArgs' inside quotes.
 *
 * @returns Requested HTML code.
 */
function getImageHTML(
  imagePath,
  imageHeight,
  functionName = null,
  functionArgs = null,
  tooltipText = null,
  imageID = null,
  tooltipOnLeft = true,
  argsInQuotes = true,
) {
  // Image to display when the requested image can not be loaded
  const ERROR_IMAGE = "assets/common/icon/question_mark.webp";

  let imageHTML = "";

  // Add tooltip
  if (tooltipText) {
    imageHTML += '<div class="tooltip">';
  }

  // Button with image
  if (functionName) {
    imageHTML += '<input type="image" src="' + imagePath + '"';
    imageHTML += " onerror=\"this.onerror=null; this.src='" + ERROR_IMAGE + "'\"";
    imageHTML += imageID ? ' id="' + imageID + '"' : "";
    imageHTML += ' height="' + imageHeight + '"';
    const argsQuotes = argsInQuotes ? "'" : "";
    imageHTML +=
      ' onclick="' +
      functionName +
      (functionArgs
        ? "(" + argsQuotes + functionArgs.replaceAll("'", "\\'") + argsQuotes + ')"'
        : '()"');
    imageHTML += "/>";
  }
  // Image (no button)
  else {
    imageHTML += '<img src="' + imagePath + '"';
    imageHTML += " onerror=\"this.onerror=null; this.src='" + ERROR_IMAGE + "'\"";
    imageHTML += imageID ? ' id="' + imageID + '"' : "";
    imageHTML += ' height="' + imageHeight + '">';
  }

  // Add tooltip
  if (tooltipText) {
    imageHTML +=
      '<span class="' + (tooltipOnLeft ? "tooltiptext_left" : "tooltiptext_right") + '">';
    imageHTML += "<div>" + tooltipText + "</div>";
    imageHTML += "</span></div>";
  }

  return imageHTML;
}

/**
 * Get the HTML code to add an image for the content of the BO.
 *
 * @param {string} imagePath  Image to display (with path and extension).
 * @param {int} imageHeight   Height of the image, <= 0 to take 'DEFAULT_BO_PANEL_IMAGES_SIZE'.
 *
 * @returns Requested HTML code.
 */
function getBOImageHTML(imagePath, imageHeight = -1) {
  const DEFAULT_BO_PANEL_IMAGES_SIZE = 25; // Default images size for BO panel.
  return getImageHTML(imagePath, imageHeight >= 1 ? imageHeight : DEFAULT_BO_PANEL_IMAGES_SIZE);
}

/**
 * Open a new page displaying the full BO in a single panel, for AoE2.
 *
 * @param {Object} dataBO    Dictionary with the content of the build order.
 */
function displayBuildOrderAoE2(dataBO) {
  // Image folders
  const common = "assets/common/";
  const game = "assets/" + gameName + "/";
  const resource = game + "/resource/";

  // Description for each column
  let columnsDescription = [
    new SinglePanelColumn("time", common + "icon/time.webp"),
    new SinglePanelColumn("villager_count", resource + "MaleVillDE_alpha.webp"),
    new SinglePanelColumn("resources/builder", resource + "Aoe2de_hammer.webp"),
    new SinglePanelColumn("resources/wood", resource + "Aoe2de_wood.webp"),
    new SinglePanelColumn("resources/food", resource + "Aoe2de_food.webp"),
    new SinglePanelColumn("resources/gold", resource + "Aoe2de_gold.webp"),
    new SinglePanelColumn("resources/stone", resource + "Aoe2de_stone.webp"),
  ];

  columnsDescription[0].italic = true; // time
  columnsDescription[0].hideIfAbsent = true; // time
  columnsDescription[0].textAlign = "right"; // time
  columnsDescription[1].bold = true; // villager count
  columnsDescription[2].hideIfAbsent = true; // builder
  columnsDescription[3].backgroundColor = [94, 72, 56]; // wood
  columnsDescription[4].backgroundColor = [153, 94, 89]; // food
  columnsDescription[5].backgroundColor = [135, 121, 78]; // gold
  columnsDescription[6].backgroundColor = [100, 100, 100]; // stone

  // all columns, except time
  for (let i = 1; i <= 6; i++) {
    columnsDescription[i].displayIfPositive = true;
  }

  // Sections Header
  const topArrow = getBOImageHTML(common + "icon/top_arrow.webp");
  const sectionsHeader = {
    key: "age", // Key to look for
    // Header before the current row
    before: {
      2: topArrow + "Aging up to Feudal Age",
      3: topArrow + "Aging up to Castle Age",
      4: topArrow + "Aging up to Imperial Age",
    },
    // Header after the current row
    after: {
      1: getBOImageHTML(game + "age/DarkAgeIconDE_alpha.webp") + "Dark Age",
      2: getBOImageHTML(game + "age/FeudalAgeIconDE_alpha.webp") + "Feudal Age",
      3: getBOImageHTML(game + "age/CastleAgeIconDE_alpha.webp") + "Castle Age",
      4: getBOImageHTML(game + "age/ImperialAgeIconDE_alpha.webp") + "Imperial Age",
    },
  };
  // Header for first line
  sectionsHeader["first_line"] = sectionsHeader.after;

  // Feed game description to generic function
  displayBuildOrderFromDescription(dataBO, columnsDescription, sectionsHeader);
}

/**
 * Open a new page displaying the full BO in a single panel, for AoE4.
 *
 * @param {Object} dataBO    Dictionary with the content of the build order.
 */
function displayBuildOrderAoE4(dataBO) {
  // Image folders
  const common = "assets/common/";
  const game = "assets/" + gameName + "/";
  const resource = game + "/resource/";

  // Description for each column
  let columnsDescription = [
    new SinglePanelColumn("time", common + "icon/time.webp"),
    new SinglePanelColumn("population_count", game + "building_economy/house.webp"),
    new SinglePanelColumn("villager_count", game + "unit_worker/villager.webp"),
    new SinglePanelColumn("resources/builder", resource + "repair.webp"),
    new SinglePanelColumn("resources/food", resource + "resource_food.webp"),
    new SinglePanelColumn("resources/wood", resource + "resource_wood.webp"),
    new SinglePanelColumn("resources/gold", resource + "resource_gold.webp"),
    new SinglePanelColumn("resources/stone", resource + "resource_stone.webp"),
  ];

  columnsDescription[0].italic = true; // time
  columnsDescription[0].hideIfAbsent = true; // time
  columnsDescription[0].textAlign = "right"; // time
  columnsDescription[1].hideIfAbsent = true; // population count
  columnsDescription[2].bold = true; // villager count
  columnsDescription[3].hideIfAbsent = true; // builder
  columnsDescription[4].backgroundColor = [153, 94, 89]; // food
  columnsDescription[5].backgroundColor = [94, 72, 56]; // wood
  columnsDescription[6].backgroundColor = [135, 121, 78]; // gold
  columnsDescription[7].backgroundColor = [100, 100, 100]; // stone

  // all columns, except time
  for (let i = 1; i <= 7; i++) {
    columnsDescription[i].displayIfPositive = true;
  }

  // Sections Header
  const sectionsHeader = {
    key: "age", // Key to look for
    // Header before the current row
    before: {
      1: getBOImageHTML(game + "age/age_1.webp") + "Dark Age",
      2: getBOImageHTML(game + "age/age_2.webp") + "Feudal Age",
      3: getBOImageHTML(game + "age/age_3.webp") + "Castle Age",
      4: getBOImageHTML(game + "age/age_4.webp") + "Imperial Age",
    },
  };
  // Header for first line
  sectionsHeader["first_line"] = sectionsHeader.before;

  // Feed game description to generic function
  displayBuildOrderFromDescription(dataBO, columnsDescription, sectionsHeader);
}

/**
 * Open a new page displaying the full BO in a single panel, for AoM.
 *
 * @param {Object} dataBO    Dictionary with the content of the build order.
 */
function displayBuildOrderAoM(dataBO) {
  // Image folders
  const common = "assets/common/";
  const game = "assets/" + gameName + "/";
  const resource = game + "/resource/";

  // Description for each column
  let columnsDescription = [
    new SinglePanelColumn("time", common + "icon/time.webp"),
    new SinglePanelColumn("worker_count", resource + "worker.webp"),
    new SinglePanelColumn("resources/builder", resource + "repair.webp"),
    new SinglePanelColumn("resources/food", resource + "food.webp"),
    new SinglePanelColumn("resources/wood", resource + "wood.webp"),
    new SinglePanelColumn("resources/gold", resource + "gold.webp"),
    new SinglePanelColumn("resources/favor", resource + "favor.webp"),
  ];

  columnsDescription[0].italic = true; // time
  columnsDescription[0].hideIfAbsent = true; // time
  columnsDescription[0].textAlign = "right"; // time
  columnsDescription[1].bold = true; // worker count
  columnsDescription[2].hideIfAbsent = true; // builder
  columnsDescription[3].backgroundColor = [153, 94, 89]; // food
  columnsDescription[4].backgroundColor = [94, 72, 56]; // wood
  columnsDescription[5].backgroundColor = [135, 121, 78]; // gold
  columnsDescription[6].backgroundColor = [100, 100, 100]; // favor

  // all columns, except time
  for (let i = 1; i <= 6; i++) {
    columnsDescription[i].displayIfPositive = true;
  }

  // Sections Header
  const topArrow = getBOImageHTML(common + "icon/top_arrow.webp");
  const sectionsHeader = {
    key: "age", // Key to look for
    // Header before the current row
    before: {
      2: topArrow + "Aging up to Classical Age",
      3: topArrow + "Aging up to Heroic Age",
      4: topArrow + "Aging up to Mythic Age",
      5: topArrow + "Aging up to Wonder Age",
    },
    // Header after the current row
    after: {
      1: getBOImageHTML(game + "age/archaic_age.webp") + "Archaic Age",
      2: getBOImageHTML(game + "age/classical_age.webp") + "Classical Age",
      3: getBOImageHTML(game + "age/heroic_age.webp") + "Heroic Age",
      4: getBOImageHTML(game + "age/mythic_age.webp") + "Mythic Age",
      5: getBOImageHTML(game + "age/wonder_age.webp") + "Wonder Age",
    },
  };
  // Header for first line
  sectionsHeader["first_line"] = sectionsHeader.after;

  // Feed game description to generic function
  displayBuildOrderFromDescription(dataBO, columnsDescription, sectionsHeader);
}

/**
 * Open a new page displaying the full BO in a single panel, for SC2.
 *
 * @param {Object} dataBO    Dictionary with the content of the build order.
 */
function displayBuildOrderSC2(dataBO) {
  // Image folders
  const common = "assets/common/";
  const game = "assets/" + gameName + "/";
  const resource = game + "/resource/";

  // Description for each column
  let columnsDescription = [
    new SinglePanelColumn("time", common + "icon/time.webp"),
    new SinglePanelColumn("supply", common + "icon/house.webp"),
    new SinglePanelColumn("minerals", resource + "minerals.webp"),
    new SinglePanelColumn("vespene_gas", resource + "vespene_gas.webp"),
  ];

  columnsDescription[0].italic = true; // time
  columnsDescription[0].textAlign = "right"; // time
  columnsDescription[1].bold = true; // supply
  columnsDescription[2].backgroundColor = [77, 103, 136]; // minerals
  columnsDescription[3].backgroundColor = [67, 96, 57]; // vespene gas

  // all columns
  for (let i = 0; i <= 3; i++) {
    columnsDescription[i].hideIfAbsent = true;
  }

  // all columns, except time
  for (let i = 1; i <= 3; i++) {
    columnsDescription[i].displayIfPositive = true;
  }

  // Feed game description to generic function
  displayBuildOrderFromDescription(dataBO, columnsDescription);
}

/**
 * Open a new page displaying the full BO in a single panel, for WC3.
 *
 * @param {Object} dataBO    Dictionary with the content of the build order.
 */
function displayBuildOrderWC3(dataBO) {
  // Image folders
  const common = "assets/common/";
  const game = "assets/" + gameName + "/";
  const resource = game + "/resource/";

  // Description for each column
  let columnsDescription = [
    new SinglePanelColumn("time", common + "icon/time.webp"),
    new SinglePanelColumn("food", resource + "food.webp"),
    new SinglePanelColumn("gold", resource + "gold.webp"),
    new SinglePanelColumn("lumber", resource + "lumber.webp"),
  ];

  columnsDescription[0].italic = true; // time
  columnsDescription[0].textAlign = "right"; // time
  columnsDescription[1].bold = true; // food
  columnsDescription[2].backgroundColor = [167, 115, 0]; // gold
  columnsDescription[3].backgroundColor = [80, 100, 0]; // lumber

  // all columns
  for (let i = 0; i <= 3; i++) {
    columnsDescription[i].hideIfAbsent = true;
  }

  // all columns, except time
  for (let i = 1; i <= 3; i++) {
    columnsDescription[i].displayIfPositive = true;
  }

  // Feed game description to generic function
  displayBuildOrderFromDescription(dataBO, columnsDescription);
}

/**
 * Open a new page displaying the full BO in a single panel.
 *
 * @param {Object} dataBO    Dictionary with the content of the build order.
 *
 * This function corresponds to the "openSinglePanelPage" function of RTS Overlay.
 */
function displayBuildOrder(dataBO) {
  switch (gameName) {
    case "aoe2":
      displayBuildOrderAoE2(dataBO);
      break;
    case "aoe4":
      displayBuildOrderAoE4(dataBO);
      break;
    case "aom":
      displayBuildOrderAoM(dataBO);
      break;
    case "sc2":
      displayBuildOrderSC2(dataBO);
      break;
    case "wc3":
      displayBuildOrderWC3(dataBO);
      break;
    default:
      throw "Unknown game: " + gameName;
  }
}
