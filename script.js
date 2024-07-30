document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addTransaction();
});

function addTransaction() {
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    const table = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const typeCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1);
    const amountCell = newRow.insertCell(2);
    const optionsCell = newRow.insertCell(3);

    typeCell.textContent = type;
    nameCell.textContent = name;
    amountCell.textContent = `$${amount}`;
    optionsCell.innerHTML = '<button onclick="deleteTransaction(this)">Delete</button>';

    document.getElementById('transactionForm').reset();
}

function deleteTransaction(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
