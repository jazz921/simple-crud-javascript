    // Get all the input field
const fullName = document.getElementById('full-name');
const studNum = document.getElementById('stud-num');
const age = document.getElementById('age');
const course = document.getElementById('course');

let selectedRow = null;

// this function will be executed if the form is submitted
function formSubmit() {
    let data = getValue();
    if (selectedRow == null) {
        tableInput(data);
    } else {
        updateData(data);
    }
    resetField();
}

// clear the input field
function resetField() {
    fullName.value = "";
    studNum.value = "";
    age.value = "";
    course.value = "";
}

// get the value from the input field and store in array of objects
function getValue() {
    let data = {};
    data["fullName"] = fullName.value;
    data["studNum"] = studNum.value;
    data["age"] = age.value;
    data["course"] = course.value;
    return data;
}

// input the value to the table 
function tableInput(data) {
    let table = document.getElementById('table').getElementsByTagName('tbody')[1];
    let newRow = table.insertRow(table.length); // create a new Row
    let cell1 = newRow.insertCell(0); // Create cells according to the <th>
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    // insert data to the cell
    cell1.innerHTML = data.fullName;
    cell2.innerHTML = data.studNum;
    cell3.innerHTML = data.age;
    cell4.innerHTML = data.course;
    cell5.innerHTML = `<a onClick="editData(this)">Edit</a><a onClick="deleteData(this)">Delete</a>`;     
}


// this will be executed if the "Edit" button is click
function editData(td) { // this function get information of current row and fill it back to the input field
    selectedRow = td.parentElement.parentElement;
    fullName.value = selectedRow.cells[0].innerHTML;
    studNum.value = selectedRow.cells[1].innerHTML;
    age.value = selectedRow.cells[2].innerHTML;
    course.value = selectedRow.cells[3].innerHTML;
}
// this will be executed if the submit button is click after clicking the edit button inside the table
function updateData(data) {
    selectedRow.cells[0].innerHTML = data.fullName;
    selectedRow.cells[1].innerHTML = data.studNum;
    selectedRow.cells[2].innerHTML = data.age;
    selectedRow.cells[3].innerHTML = data.course;
}
// this will be executed if the "Delete" button is clicked inside the table. This function is to delete a row
function deleteData(td) {
 if (confirm("Delete Data?")) {
    let row = td.parentElement.parentElement
    document.getElementById('table').deleteRow(row.rowIndex);
    resetField();
 }

}