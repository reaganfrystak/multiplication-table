function getRowsDesired() {
    return +document.getElementById("rows").value;
}

function getColumnsDesired() {
    return +document.getElementById("cols").value;
}

function getHighlightValue() {
    const value = document.getElementById("highlight").value;
    return value ? +value : null;
}

function createWithFlexboxGrid(rows, cols, highlight) {
    const output = document.getElementById("output");
    output.innerHTML = ""; // Clear previous table


    if (!rows || !cols) {
        output.textContent = "Provide some inputs";
        return;
    }


    const grid = document.createElement("section");
    grid.className = "rows-of-columns";


    for (let r = 1; r <= rows; r++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row"; // Each row is also flex


        for (let c = 1; c <= cols; c++) {
            const cell = document.createElement("div");
            cell.textContent = r * c;


            if (highlight && (r === highlight || c === highlight)) {
                cell.classList.add("highlight");
            }

            rowDiv.appendChild(cell);
        }

        grid.appendChild(rowDiv);
    }

    output.appendChild(grid);
}