# 🌦️ LWC Integration - Weather API

A Salesforce **Lightning Web Component (LWC)** project that integrates with a weather API to fetch and display real-time weather data.

---

## 🚀 Features

* 🌍 Fetch weather data by city name
* 🌡️ Displays temperature, humidity & weather conditions
* ⚡ Real-time API integration
* 💻 Built using LWC + Apex

---

## 🛠️ Tech Stack

* Lightning Web Components (LWC)
* Apex
* HTML, JavaScript, XML
* Weather API (OpenWeather / similar)

---

## ⚙️ Setup

1. Clone the repository:

```bash
git clone https://github.com/DeMoN-7/Lwc-Integration-Weather-API.git
```

2. Deploy to Salesforce Org:

```bash
sfdx force:source:deploy -p force-app
```

3. Add Remote Site Setting for API endpoint

4. Add your API key in Apex class

---

## 📌 Usage

* Open the LWC component in your Salesforce app
* Enter a city name
* View real-time weather details

---

## 📂 Project Structure

```
force-app/
 └── main/default/
      ├── classes/       # Apex Controllers (.cls)
      ├── lwc/           # LWC Components (.html, .js)
      └── layouts/       # Metadata (.xml)
```

---

## 🤝 Contributing

Feel free to fork and contribute 🚀

---

## 📄 License

This project is for learning and practice purposes.
