var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    // Read other form fields (email, salary, city) similarly
    return formData;
}

function insertNewRecord(data) {
    // Insert new employee record into the table
    // Example: Add data.fullName, data.email, etc.
}

function updateRecord(formData) {
    // Update existing employee record
    // Example: Update selectedRow.cells[0].innerHTML = formData.fullName;
}

function onDelete(td) {
    // Handle delete operation
}

// Other helper functions (resetForm, onEdit, validate) go here

// Remember to add event listeners for Edit and Delete actions
