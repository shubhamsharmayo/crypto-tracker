const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&meta_info=VR6";

function fetchAndUpdateCryptoData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const currentSheet = ss.getSheetByName("Current Prices");
  const historySheet = ss.getSheetByName("Price History");
  const now = new Date();
  const timestamp = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyy-MM-dd'T'HH:mm:ss'Z'");

  
  const response = UrlFetchApp.fetch(API_URL, { muteHttpExceptions: true });
  const statusCode = response.getResponseCode();

  if (statusCode === 429) {
    
    currentSheet.clearContents();
    currentSheet.appendRow(["Rate limit exceeded. Please wait before retrying."]);
    Logger.log("Rate limit exceeded: " + response.getContentText());
    return;
  }

  if (statusCode !== 200) {
    currentSheet.clearContents();
    currentSheet.appendRow(["Error fetching data: Status " + statusCode]);
    Logger.log("Fetch failed. Response code: " + statusCode);
    Logger.log("Response body: " + response.getContentText());
    return;
  }

  const data = JSON.parse(response.getContentText());


  currentSheet.clearContents();
  currentSheet.appendRow([
    "Coin ID", "Symbol", "Name", "Current Price (USD)", "Market Cap (USD)", "24h % Change", "Last Updated", "Last Synced"
  ]);

  data.forEach(coin => {
    currentSheet.appendRow([
      coin.id,
      coin.symbol,
      coin.name,
      coin.current_price,
      coin.market_cap,
      coin.price_change_percentage_24h,
      coin.last_updated,
      timestamp
    ]);
  });


  data.forEach(coin => {
    historySheet.appendRow([
      timestamp,
      coin.id,
      coin.symbol,
      coin.name,
      "", 
      coin.current_price,
      coin.market_cap,
      coin.price_change_percentage_24h
    ]);
  });
}
