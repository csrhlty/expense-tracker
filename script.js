let expenses = [];

const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseList = document.getElementById("expenseList");
const totalCount = document.getElementById("totalCount");
const totalAmount = document.getElementById("totalAmount");

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = expenseName.value;
    const amount = Number(expenseAmount.value);

    const expense = {
        name: name,
        amount: amount
    };

    expenses.push(expense);

    expenseName.value = "";
    expenseAmount.value = "";

    displayExpenses();
});

function displayExpenses() {
    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        expenseList.innerHTML = '<p class="empty">Belum ada pengeluaran.</p>';
    }

    let total = 0;

    expenses.forEach(function(expense, index) {

        total += expense.amount;

        const expenseItem = document.createElement("div");
        expenseItem.className = "expense-item";

        expenseItem.innerHTML = `
            <div class="expense-info">
                <h3>${expense.name}</h3>
                <p>Rp ${expense.amount.toLocaleString("id-ID")}</p>
            </div>

            <button class="delete-button" onclick="deleteExpense(${index})">
                Hapus
            </button>
        `;

        expenseList.appendChild(expenseItem);
    });

    totalCount.textContent = expenses.length;
    totalAmount.textContent = "Rp " + total.toLocaleString("id-ID");
}

function deleteExpense(index) {
    expenses.splice(index, 1);

    displayExpenses();
}

displayExpenses();

