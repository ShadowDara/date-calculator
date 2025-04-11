// script written by Shadowdara

document.addEventListener("DOMContentLoaded", () => {
    loadSavedDates();
    calculateAllTimes();
});

function addDateField(dateValue = "") {
    const container = document.getElementById("dateFields");
    const newInput = document.createElement("input");
    newInput.type = "date";
    newInput.className = "dateInput";
    newInput.value = dateValue;
    newInput.addEventListener("change", saveDates);

    container.appendChild(newInput);
    saveDates();
}

function calculateAllTimes() {
    const inputs = document.querySelectorAll(".dateInput");
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    inputs.forEach((input, index) => {
        const inputDate = input.value;
        if (!inputDate) return;

        const [year, month, day] = inputDate.split("-");
        const startDate = new Date(year, month - 1, day);
        const now = new Date();

        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        const resultText = `Date ${index + 1}: ${days} days, ${months} months, ${years} years`;
        const resultP = document.createElement("p");
        resultP.innerText = resultText;
        resultsDiv.appendChild(resultP);
    });

    saveDates();
}

function saveDates() {
    const inputs = document.querySelectorAll(".dateInput");
    const dates = Array.from(inputs).map(input => input.value);
    localStorage.setItem("savedDates", JSON.stringify(dates));
}

function loadSavedDates() {
    const savedDates = JSON.parse(localStorage.getItem("savedDates")) || ["2024-05-21"];
    savedDates.forEach(date => addDateField(date));
}

function resetDates() {
    localStorage.removeItem("savedDates");
    document.getElementById("dateFields").innerHTML = "";
    document.getElementById("results").innerHTML = "";
    addDateField("2024-05-21");
}
