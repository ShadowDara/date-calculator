# 📅 Date Calculator

**A simple, web-based date calculator built with vanilla JavaScript.**  
Enter important dates and calculate how much time has passed since.  
Live Demo: 👉 [Try it here](https://weuritz8u.github.io/date-calculator)

---

## 🔍 Features

- Add multiple custom dates
- Calculate days/months/years since a given date
- Save entered dates to local storage
- Export saved dates to JSON
- Import previously exported dates
- Lightweight and fast – no frameworks used

---

## 🚀 Getting Started

### Clone this repo

```bash
git clone https://github.com/weuritz8u/date-calculator.git
cd date-calculator
```

### Open `index.html` in your browser  
That's it! No build steps, no setup.

---

## 💾 File Import/Export

- **Export**: Saves your current dates in JSON format for backup
- **Import**: Load a previously saved file to restore your dates

> ⚠️ Make sure your JSON file is valid and has this format:
```json
["2024-05-21", "2024-05-21", "2025-04-08", "2025-01-07"]
```

---

## 🐞 Known Issues

> Listed directly from the developer (`<!-- comments -->`) 😉

- ❌ File upload does not always trigger correctly  
- ❌ Imported files are not always parsed as expected  
- ❌ Cannot upload a second file without refreshing  

✅ Fixes are in progress – feel free to open a PR or issue!

---

## 📦 Folder Structure

```
.
├── index.html          # Main HTML page
├── src/
│   ├── style_blue.css  # Styling
│   ├── calculate.js    # Date logic
│   └── file_save.js    # Import/Export logic
└── README.md           # This file
```

---

## 🙌 Contributing

Pull requests are welcome!  
If you spot a bug or want to add a feature, feel free to fork and submit a PR.

---

## 👤 Author

**Shadowdara**  
🛠️ GitHub: [@weuritz8u](https://github.com/weuritz8u)

---

## 📄 License

MIT License – free to use, modify, and distribute.
