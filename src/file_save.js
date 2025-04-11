// script written by Shadowdara

document.getElementById('importFile').addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        alert("Datei ausgewählt:", file.name);

        document.getElementById('load_button').innerHTML = '<button onclick="on_press_load(); loadSavedDates();">load dates</button>'
    }
});

function on_press_load() {
    document.getElementById('load_button').innerHTML = ''
}

function importSavedDates(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        localStorage.setItem("savedDates", e.target.result);
        alert("'savedDates' imported succesfully!");
    };
    reader.readAsText(file);
}

function exportSavedDates() {
    const savedDates = localStorage.getItem("savedDates");
    if (!savedDates) {
        alert("found no data under 'savedDates' !");
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
