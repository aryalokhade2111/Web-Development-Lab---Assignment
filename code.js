let expenses = [];

function addExpense() {

    let name = document.getElementById("name").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;

    if (name == "" || amount <= 0) {
        alert("Please enter a valid name and amount");
        return;
    }

    let expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";

    showExpenses();
}

function showExpenses() {

    let list = document.getElementById("expenseList");
    let filter = document.getElementById("filter").value;
    let total = 0;

    list.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {

        total = total + expenses[i].amount;

        if (filter == "All" || expenses[i].category == filter) {

            let div = document.createElement("div");
            div.className = "expense";

            let text = document.createElement("p");
            text.textContent = expenses[i].name + " - ₹" +
                expenses[i].amount + " (" + expenses[i].category + ")";

            let button = document.createElement("button");
            button.textContent = "Delete";
            button.className = "delete";

            button.onclick = function() {
                deleteExpense(i);
            };

            div.appendChild(text);
            div.appendChild(button);

            list.appendChild(div);
        }
    }

    document.getElementById("total").textContent = total;
}

function deleteExpense(index) {

    expenses.splice(index, 1);

    showExpenses();
}