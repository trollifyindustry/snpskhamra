function doGet() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("1st5th");
    var data = sheet.getDataRange().getValues();
    data.shift(); // Remove header row

    return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
