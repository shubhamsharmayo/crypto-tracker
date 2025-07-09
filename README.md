
# 🚀 VR Automations - CoinGecko Crypto Tracker

## ✅ Objective
Automated system to track top 15 cryptocurrencies from CoinGecko API, storing both:
- Real-time current data (`Current Prices` tab)
- Historical hourly snapshots (`Price History` tab)

---

## ⚙️ Functionality

- Runs every 30 minutes via Google Apps Script trigger.
- Overwrites `Current Prices` tab with latest market data.
- Appends new rows to `Price History` tab with a precise timestamp.
- Coin data includes ID, name, symbol, price, market cap, 24h change.

---

## 🛠️ Setup

1. Open Google Sheet and create tabs: `Current Prices`, `Price History`
2. Paste provided Apps Script code
3. Set time-driven trigger for `fetchAndUpdateCryptoData` (every 30 minutes)

---

## 🧪 Validation Notes

- `Timestamp` in `Price History` uses UTC ISO format and matches hourly precision.
- `Internal Ref Code` left blank (as instructed).
- No duplicate rows in `Current Prices`.

---

## 📌 Known Limitations

- Only tracks top 15 coins (as required).
- No alerting or visualizations (can be added as enhancements).

---

## 📷 Deliverables

1. Google Sheet (shared as View)
2. Apps Script code
3. Trigger screenshot
4. This README
