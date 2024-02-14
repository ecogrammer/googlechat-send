/**
 * GoogleChatに通知
 */
function googlechatSend() {
  let webhook = PropertiesService.getScriptProperties().getProperty("GOOGLECHAT_WEBHOOK_KEY");
  let googlechat_webhook_url = 'https://chat.googleapis.com/v1/spaces/' + webhook;
  let text = 'テストだよ';
  let payload  = {
    'text': text
  };
  let options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(payload),
  };

  let result = UrlFetchApp.fetch(googlechat_webhook_url, options);
  Logger.log(result);
}
