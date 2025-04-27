// script.js

// Get the subscription form and data table elements
const subscriptionForm = document.getElementById('subscription-form-data');
const subscriptionDataTable = document.getElementById('subscription-data-table-body');

// Create an array to store subscription data
let subscriptionData = [];

// Add event listener to the subscription form
subscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subscriptionPlan = document.getElementById('subscription-plan').value;
    const paymentMethod = document.getElementById('payment-method').value;

    // Create a new subscription data object
    const newSubscriptionData = {
        name,
        email,
        phone,
        subscriptionPlan,
        paymentMethod
    };

    // Add the new subscription data to the array
    subscriptionData.push(newSubscriptionData);

    // Display the subscription data in the table
    displaySubscriptionData();
});

// Function to display subscription data in the table
function displaySubscriptionData() {
    // Clear the table body
    subscriptionDataTable.innerHTML = '';

    // Loop through the subscription data array
    subscriptionData.forEach((data, index) => {
        // Create a new table row
        const tableRow = document.createElement('tr');

        // Create table cells for each data field
        const nameCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const phoneCell = document.createElement('td');
        const subscriptionPlanCell = document.createElement('td');
        const paymentMethodCell = document.createElement('td');

        // Set the text content of each table cell
        nameCell.textContent = data.name;
        emailCell.textContent = data.email;
        phoneCell.textContent = data.phone;
        subscriptionPlanCell.textContent = data.subscriptionPlan;
        paymentMethodCell.textContent = data.paymentMethod;

        // Append the table cells to the table row
        tableRow.appendChild(nameCell);
        tableRow.appendChild(emailCell);
        tableRow.appendChild(phoneCell);
        tableRow.appendChild(subscriptionPlanCell);
        tableRow.appendChild(paymentMethodCell);

        // Append the table row to the table body
        subscriptionDataTable.appendChild(tableRow);
    });
}