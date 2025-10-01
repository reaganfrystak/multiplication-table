function getRowsDesired() {
    // console.log(document.getElementById('rows').value);
    // console.log(Number(document.querySelector('.rows input').value));
    //console.log(Number(document.querySelectorAll('.rows input')[0].value));
    //  console.log(Number(document.getElementById('rows').value));

    return Number(document.getElementById("rows").value)

    //most of these do the same thing it's just different ways to get the value i think
}

function getColumnsDesired() {
    return Number(document.getElementById("cols").value)
}

function createWithHtmlTable(rows, cols) {
    let string
    if (rows && cols) {
        string = "<table\n"

        for (let row = 1; row <= rows; row++) {
            string += "<tr>\n"


            for (let col = 1; col <= cols; col++) {
                string += "<td>"
                string += row * col
                string += "</td>\n"
            }
            string += "</tr>\n"
        }

        string += "</table>\n"

    } else {
        string = 'Provide some inputs'
    }

    document.getElementById("output").innerHTML = string;
}

getRowsDesired()