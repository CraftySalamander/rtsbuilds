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
  const extensions = [".png", ".jpg", ".webp"]; // different extensions to try

  // Extract current extension (if any)
  const currentExtMatch = imageSearch.match(/\.(png|jpg|webp)$/);
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
 * Open a new page displaying the full BO in a single panel,
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

  // Check which columns need to be displayed
  let displayColumns = new Array(columnsDescription.length).fill(false);

  for (const currentStep of buildOrderData) {
    // loop on all BO steps
    // Loop on all the columns
    for (const [index, column] of columnsDescription.entries()) {
      // Colmun already validated
      if (displayColumns[index]) {
        continue;
      }

      // Check valid description
      if (!(column instanceof SinglePanelColumn)) {
        throw "Wrong column definition.";
      }

      // No need to hide the column (even if totally absent)
      if (!column.hideIfAbsent) {
        displayColumns[index] = true;
        continue;
      }

      // Check field presence (potentially after splitting part_0/part_1/...)
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
          // Check if valid number
          const num = Number(subPart);
          if (Number.isInteger(num)) {
            if (num > 0) {
              displayColumns[index] = true;
            }
          } else {
            console.log(
              "Warning: Exepcted integer for '" + field + "', but received '" + num + "'.",
            );
          }
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

  // Create window
  let fullPageWindow = window.open("", "_blank");

  // Prepare HTML main content
  let htmlContent = '<!DOCTYPE html>\n<html lang="en">\n\n';
  htmlContent += "<head>\n";

  // Title
  htmlContent += indentSpace(1) + "<title>RTS Builds - " + dataBO["name"] + "</title>\n";

  // Style
  htmlContent += indentSpace(1) + "<style>\n";

  htmlContent += indentSpace(2) + "body {\n";
  htmlContent += indentSpace(3) + "font-family: Arial, Helvetica, sans-serif;\n";
  htmlContent += indentSpace(3) + "background-color: rgb(176, 176, 176);\n";
  htmlContent += indentSpace(3) + "margin: 0;\n";
  htmlContent += indentSpace(3) + "padding: 20px;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + ".container {\n";
  htmlContent += indentSpace(3) + "max-width: 1200px;\n";
  htmlContent += indentSpace(3) + "margin: 0 auto;\n";
  htmlContent += indentSpace(3) + "background-color: #dcdcdc;\n";
  htmlContent += indentSpace(3) + "padding: 20px;\n";
  htmlContent += indentSpace(3) + "border-radius: 10px;\n";
  htmlContent += indentSpace(3) + "box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + ".header {\n";
  htmlContent += indentSpace(3) + "text-align: center;\n";
  htmlContent += indentSpace(3) + "margin-bottom: 20px;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + ".header img {\n";
  htmlContent += indentSpace(3) + "max-width: 50%;\n";
  htmlContent += indentSpace(3) + "height: auto;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + ".selectors {\n";
  htmlContent += indentSpace(3) + "display: flex;\n";
  htmlContent += indentSpace(3) + "flex-wrap: wrap;\n";
  htmlContent += indentSpace(3) + "gap: 10px;\n";
  htmlContent += indentSpace(3) + "margin-bottom: 20px;\n";
  htmlContent += indentSpace(3) + "align-items: center;\n";
  htmlContent += indentSpace(3) + "justify-content: center;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + ".selector-group {\n";
  htmlContent += indentSpace(3) + "display: flex;\n";
  htmlContent += indentSpace(3) + "flex-direction: column;\n";
  htmlContent += indentSpace(3) + "min-width: 200px;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + ".selector-group label {\n";
  htmlContent += indentSpace(3) + "margin-bottom: 5px;\n";
  htmlContent += indentSpace(3) + "font-size: 16px;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + "button {\n";
  htmlContent += indentSpace(3) + "padding: 10px;\n";
  htmlContent += indentSpace(3) + "font-size: 16px;\n";
  htmlContent += indentSpace(3) + "border-radius: 5px;\n";
  htmlContent += indentSpace(3) + "border: 1px solid #ccc;\n";
  htmlContent += indentSpace(3) + "background-color: #333;\n";
  htmlContent += indentSpace(3) + "color: white;\n";
  htmlContent += indentSpace(3) + "cursor: pointer;\n";
  htmlContent += indentSpace(3) + "transition: background-color 0.3s;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + "button:hover {\n";
  htmlContent += indentSpace(3) + "background-color: #555;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + "table {\n";
  htmlContent += indentSpace(3) + "color: rgb(255, 255, 255);\n";
  htmlContent += indentSpace(3) + "background-color: rgb(51, 51, 51);\n";
  htmlContent += indentSpace(3) + "margin: 0 auto;\n";
  htmlContent += indentSpace(3) + "border-radius: 15px;\n";
  htmlContent += indentSpace(3) + "border-collapse: collapse;\n";
  htmlContent += indentSpace(3) + "margin-bottom: 30px;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + "td {\n";
  htmlContent += indentSpace(3) + "text-align: center;\n";
  htmlContent += indentSpace(3) + "vertical-align: middle;\n";
  htmlContent += indentSpace(3) + "padding: 10px;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + "img {\n";
  htmlContent += indentSpace(3) + "vertical-align: middle;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + ".note {\n";
  htmlContent += indentSpace(3) + "text-align: left;\n";
  htmlContent += indentSpace(3) + "padding-right: 25px;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + ".full_line {\n";
  htmlContent += indentSpace(3) + "text-align: left;\n";
  htmlContent += indentSpace(3) + "font-weight: bold;\n";
  htmlContent += indentSpace(3) + "padding-left: 25px;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + ".full_line img {\n";
  htmlContent += indentSpace(3) + "margin-right: 10px;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + ".border_top {\n";
  htmlContent += indentSpace(3) + "position: relative;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + ".border_top::after {\n";
  htmlContent += indentSpace(3) + "content: '';\n";
  htmlContent += indentSpace(3) + "position: absolute;\n";
  htmlContent += indentSpace(3) + "top: 0;\n";
  htmlContent += indentSpace(3) + "left: 2.5%;\n";
  htmlContent += indentSpace(3) + "width: 95%;\n";
  htmlContent += indentSpace(3) + "border: 1px solid rgb(150, 150, 150);\n";
  htmlContent += indentSpace(2) + "}\n\n";

  htmlContent += indentSpace(2) + ".column-0 {\n";
  htmlContent += indentSpace(3) + "padding-left: 25px;\n";
  htmlContent += indentSpace(2) + "}\n\n";

  // Style from column description
  for (const [index, column] of updatedColumnsDescription.entries()) {
    if (column.italic || column.bold || column.backgroundColor || column.textAlign) {
      htmlContent += indentSpace(2) + ".column-" + index.toString() + " {\n";

      if (column.italic) {
        htmlContent += indentSpace(3) + "font-style: italic;\n";
      }
      if (column.bold) {
        htmlContent += indentSpace(3) + "font-weight: bold;\n";
      }
      if (column.backgroundColor) {
        color = column.backgroundColor;
        console.assert(color.length == 3, "Background color length should be of size 3.");
        htmlContent +=
          indentSpace(3) +
          "background-color: rgb(" +
          color[0].toString() +
          ", " +
          color[1].toString() +
          ", " +
          color[2].toString() +
          ");\n";
      }
      if (column.textAlign) {
        htmlContent += indentSpace(3) + "text-align: " + column.textAlign + ";\n";
      }
      htmlContent += indentSpace(2) + "}\n\n";
    }
  }

  htmlContent += indentSpace(1) + "</style>\n\n";
  htmlContent += "</head>\n\n";

  // Main body
  htmlContent += "<body>\n";
  htmlContent += indentSpace(1) + "<div class='container'>\n";
  htmlContent += indentSpace(2) + "<div class='header'>\n";
  htmlContent +=
    indentSpace(3) + "<img src='assets/common/title/rts_builds.png' alt='RTS Builds Title' />\n";
  htmlContent += indentSpace(2) + "</div>\n";

  // Build order name
  htmlContent +=
    indentSpace(2) +
    "<h1 style='text-align: center; margin-bottom: 30px; font-family: \"Book Antiqua\", Palatino, serif; font-size: 40px;'>" +
    dataBO["name"] +
    "</h1>\n";

  // Buttons and build order name
  htmlContent += indentSpace(2) + "<div class='selectors'>\n";
  htmlContent += indentSpace(3) + "<div class='selector-group'>\n";
  htmlContent += indentSpace(4) + "<button id='open_in_rts_overlay'>Open in RTS Overlay</button>\n";
  htmlContent += indentSpace(3) + "</div>\n";
  htmlContent += indentSpace(3) + "<div class='selector-group'>\n";
  htmlContent += indentSpace(4) + "<button id='copy_bo'>Copy build order to clipboard</button>\n";
  htmlContent += indentSpace(3) + "</div>\n";
  htmlContent += indentSpace(3) + "<div class='selector-group'>\n";
  htmlContent += indentSpace(4) + "<button id='export_bo'>Export build order</button>\n";
  htmlContent += indentSpace(3) + "</div>\n";
  htmlContent += indentSpace(2) + "</div>\n";

  htmlContent += indentSpace(1) + "<table>\n";

  // Icons header
  htmlContent += indentSpace(2) + '<tr id="header">\n';

  for (const column of updatedColumnsDescription) {
    if (column.image) {
      htmlContent += indentSpace(3) + "<td>" + getBOImageHTML(column.image) + "</td>\n";
    } else {
      htmlContent += indentSpace(3) + "<td></td>\n";
    }
  }
  htmlContent += indentSpace(2) + "</tr>\n";

  let lastSectionHeaderKey = null; // last key value for section header

  // Loop on all the build order steps
  for (const currentStep of buildOrderData) {
    const notes = currentStep["notes"];

    let currentSectionHeaderKey = null; // current key value for section header

    if (sectionsHeader) {
      // Key to check for section header
      console.assert(
        sectionsHeader.key in currentStep,
        "Current step is missing '" + sectionsHeader.key + "'.",
      );
      currentSectionHeaderKey = currentStep[sectionsHeader.key];

      // Header section before first line
      if (
        sectionsHeader.first_line &&
        currentSectionHeaderKey in sectionsHeader.first_line &&
        !lastSectionHeaderKey
      ) {
        htmlContent += indentSpace(2) + '<tr class="border_top">\n';
        htmlContent +=
          indentSpace(3) +
          '<td class="full_line" colspan=' +
          validColumnsCount.toString() +
          ">" +
          sectionsHeader.first_line[currentSectionHeaderKey] +
          "</td>\n";
        htmlContent += indentSpace(2) + "</tr>\n";
      }

      // Header section before current line
      if (
        sectionsHeader.before &&
        currentSectionHeaderKey in sectionsHeader.before &&
        lastSectionHeaderKey &&
        currentSectionHeaderKey !== lastSectionHeaderKey
      ) {
        htmlContent += indentSpace(2) + '<tr class="border_top">\n';
        htmlContent +=
          indentSpace(3) +
          '<td class="full_line" colspan=' +
          validColumnsCount.toString() +
          ">" +
          sectionsHeader.before[currentSectionHeaderKey] +
          "</td>\n";
        htmlContent += indentSpace(2) + "</tr>\n";
      }
    }

    // Loop on the notes
    for (const [noteID, note] of enumerate(notes)) {
      // Add column content for the first line of the notes.
      if (noteID == 0) {
        htmlContent += indentSpace(2) + '<tr class="border_top">\n';

        // Loop on the columns to show
        for (const [index, column] of updatedColumnsDescription.entries()) {
          // Get the value of the current field
          const field = column.field;
          let subPart = currentStep;
          for (const subField of field.split("/")) {
            if (!(subField in subPart)) {
              // field not found
              subPart = "";
              break;
            }
            subPart = subPart[subField];
          }
          let fieldValue = subPart;

          // Only show numbers > 0
          if (column.displayIfPositive && fieldValue !== "") {
            const num = Number(fieldValue);
            if (Number.isInteger(num)) {
              if (num <= 0) {
                fieldValue = "";
              }
            } else {
              console.log(
                "Warning: Exepcted integer for '" + field + "', but received '" + fieldValue + "'.",
              );
            }
          }

          // Display field value
          htmlContent +=
            indentSpace(3) +
            '<td class="column-' +
            index.toString() +
            '">' +
            fieldValue +
            "</td>\n";
        }
      }
      // Only add notes for the next lines (i.e. no column content).
      else {
        htmlContent += indentSpace(2) + "<tr>\n";
        for (let index = 0; index < updatedColumnsDescription.length; index++) {
          htmlContent += indentSpace(3) + '<td class="column-' + index.toString() + '"></td>\n';
        }
      }

      // Add the current note line
      htmlContent +=
        indentSpace(3) +
        '<td class="note">\n' +
        indentSpace(4) +
        "<div>" +
        noteToTextImages(note) +
        "</div>\n" +
        indentSpace(3) +
        "</td>\n";
      htmlContent += indentSpace(2) + "</tr>\n";
    }

    if (sectionsHeader) {
      // Header section after current line
      if (
        sectionsHeader.after &&
        currentSectionHeaderKey in sectionsHeader.after &&
        lastSectionHeaderKey &&
        currentSectionHeaderKey !== lastSectionHeaderKey
      ) {
        htmlContent += indentSpace(2) + '<tr class="border_top">\n';
        htmlContent +=
          indentSpace(3) +
          '<td class="full_line" colspan=' +
          validColumnsCount.toString() +
          ">" +
          sectionsHeader.after[currentSectionHeaderKey] +
          "</td>\n";
        htmlContent += indentSpace(2) + "</tr>\n";
      }

      // Save last key value seen
      lastSectionHeaderKey = currentSectionHeaderKey;
    }
  }

  htmlContent += indentSpace(1) + "</table>\n";

  // Copy HTML for export
  const htmlContentCopy = JSON.parse(JSON.stringify(htmlContent)) + "</div></body>\n\n</html>";

  // Name for file export
  const exportName = Object.keys(dataBO).includes("name")
    ? dataBO.name.replaceAll(/\s+/g, "_")
    : "rts_overlay";

  htmlContent += indentSpace(1) + "<script>\n";

  htmlContent += indentSpace(2) + "const dataHTML = " + JSON.stringify(htmlContentCopy) + ";\n\n";
  htmlContent += indentSpace(2) + "const dataBO = " + JSON.stringify(dataBO) + ";\n\n";

  // Open in RTS Overlay
  htmlContent +=
    indentSpace(2) +
    "document.getElementById('open_in_rts_overlay').addEventListener('click', function() {\n";
  htmlContent += indentSpace(3) + "let game;\n";
  htmlContent += indentSpace(3) + "if (dataBO.major_god) {\n";
  htmlContent += indentSpace(4) + "game = 'aom';\n";
  htmlContent += indentSpace(3) + "} else if (dataBO.race) {\n";
  htmlContent += indentSpace(4) + "game = dataBO.opponent_race ? 'wc3' : 'sc2';\n";
  htmlContent += indentSpace(3) + "} else if (dataBO.civilization) {\n";
  htmlContent += indentSpace(4) + "game = 'aoe2';\n";
  htmlContent += indentSpace(3) + "} else {\n";
  htmlContent +=
    indentSpace(4) + "console.error('Could not determine game from build order data');\n";
  htmlContent += indentSpace(4) + "return;\n";
  htmlContent += indentSpace(3) + "}\n";
  htmlContent +=
    indentSpace(3) +
    "const buildOrderName = dataBO.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');\n";
  htmlContent +=
    indentSpace(3) +
    "const url = `https://rts-overlay.github.io?gameId=${game}&buildOrderId=rtsbuilds|${buildOrderName}`;\n";
  htmlContent += indentSpace(3) + "window.open(url, '_blank');\n";
  htmlContent += indentSpace(2) + "});\n\n";

  // Copy BO
  htmlContent +=
    indentSpace(2) + "document.getElementById('copy_bo').addEventListener('click', function() {\n";
  htmlContent += indentSpace(3) + "const jsonString = JSON.stringify(dataBO, null, 4);\n";
  htmlContent += indentSpace(3) + "navigator.clipboard.writeText(jsonString).then(() => {\n";
  htmlContent += indentSpace(4) + "console.log('Content copied to clipboard');\n";
  htmlContent += indentSpace(3) + "}).catch(err => {\n";
  htmlContent += indentSpace(4) + "console.error('Failed to copy: ', err);\n";
  htmlContent += indentSpace(3) + "});\n";
  htmlContent += indentSpace(2) + "});\n\n";

  // Export BO
  htmlContent +=
    indentSpace(2) +
    "document.getElementById('export_bo').addEventListener('click', function() {\n";
  htmlContent +=
    indentSpace(3) +
    "const fileBO = new Blob([JSON.stringify(dataBO, null, 4)], {type: 'text/plain'});\n";
  htmlContent += indentSpace(3) + "const link = document.createElement('a');\n";
  htmlContent += indentSpace(3) + "link.href = URL.createObjectURL(fileBO);\n";
  htmlContent += indentSpace(3) + "link.download = '" + exportName + ".json';\n";
  htmlContent += indentSpace(3) + "link.click();\n";
  htmlContent += indentSpace(3) + "URL.revokeObjectURL(link.href);\n";
  htmlContent += indentSpace(2) + "});\n\n";

  htmlContent += indentSpace(1) + "</script>\n";

  htmlContent += "</div></body>\n\n</html>";

  // Update overlay HTML content
  fullPageWindow.document.open();
  fullPageWindow.document.write(htmlContent);
  fullPageWindow.document.close();
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
  const ERROR_IMAGE = "assets/common/icon/question_mark.png";

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
    new SinglePanelColumn("time", common + "icon/time.png"),
    new SinglePanelColumn("villager_count", resource + "MaleVillDE_alpha.png"),
    new SinglePanelColumn("resources/builder", resource + "Aoe2de_hammer.png"),
    new SinglePanelColumn("resources/wood", resource + "Aoe2de_wood.png"),
    new SinglePanelColumn("resources/food", resource + "Aoe2de_food.png"),
    new SinglePanelColumn("resources/gold", resource + "Aoe2de_gold.png"),
    new SinglePanelColumn("resources/stone", resource + "Aoe2de_stone.png"),
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
  const topArrow = getBOImageHTML(common + "icon/top_arrow.png");
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
      1: getBOImageHTML(game + "age/DarkAgeIconDE_alpha.png") + "Dark Age",
      2: getBOImageHTML(game + "age/FeudalAgeIconDE_alpha.png") + "Feudal Age",
      3: getBOImageHTML(game + "age/CastleAgeIconDE_alpha.png") + "Castle Age",
      4: getBOImageHTML(game + "age/ImperialAgeIconDE_alpha.png") + "Imperial Age",
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
    new SinglePanelColumn("time", common + "icon/time.png"),
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
    new SinglePanelColumn("time", common + "icon/time.png"),
    new SinglePanelColumn("worker_count", resource + "worker.png"),
    new SinglePanelColumn("resources/builder", resource + "repair.png"),
    new SinglePanelColumn("resources/food", resource + "food.png"),
    new SinglePanelColumn("resources/wood", resource + "wood.png"),
    new SinglePanelColumn("resources/gold", resource + "gold.png"),
    new SinglePanelColumn("resources/favor", resource + "favor.png"),
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
  const topArrow = getBOImageHTML(common + "icon/top_arrow.png");
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
      1: getBOImageHTML(game + "age/archaic_age.png") + "Archaic Age",
      2: getBOImageHTML(game + "age/classical_age.png") + "Classical Age",
      3: getBOImageHTML(game + "age/heroic_age.png") + "Heroic Age",
      4: getBOImageHTML(game + "age/mythic_age.png") + "Mythic Age",
      5: getBOImageHTML(game + "age/wonder_age.png") + "Wonder Age",
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
    new SinglePanelColumn("time", common + "icon/time.png"),
    new SinglePanelColumn("supply", common + "icon/house.png"),
    new SinglePanelColumn("minerals", resource + "minerals.png"),
    new SinglePanelColumn("vespene_gas", resource + "vespene_gas.png"),
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
    new SinglePanelColumn("time", common + "icon/time.png"),
    new SinglePanelColumn("food", resource + "food.png"),
    new SinglePanelColumn("gold", resource + "gold.png"),
    new SinglePanelColumn("lumber", resource + "lumber.png"),
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
