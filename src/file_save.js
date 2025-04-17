// script written by Shadowdara

document.getElementById('importFile').addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        alert("Datei ausgewählt:", file.name);

        document.getElementById('load_button').innerHTML = '<button onclick="on_press_load(); loadSavedDates();">load dates</button>'
    }
});

function importSavedDates(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const jsonData = JSON.parse(e.target.result);

            if (localStorage.getItem("savedDates")) {
                if (!confirm("Es gibt bereits gespeicherte Daten. Überschreiben?")) {
                    return;
                }
            }

            localStorage.setItem("savedDates", JSON.stringify(jsonData));
            document.getElementById("dateFields").innerHTML = "";
            jsonData.forEach(date => addDateField(date));

            alert("'savedDates' wurden erfolgreich importiert!");
        } catch (error) {
            alert("Fehler: Die Datei enthält ungültige Daten!");
        }
    };

    reader.readAsText(file);

    event.target.value = "";
}

function exportSavedDates() {
    const savedDates = localStorage.getItem("savedDates");
    if (!savedDates) {
        alert("Keine gespeicherten Daten gefunden!");
        return;
    }

    const blob = new Blob([savedDates], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "savedDatesBackup.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
