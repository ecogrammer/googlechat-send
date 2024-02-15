/**
 * GoogleChatに通知
 */
function googleChatSend() {
  let gchat_id = PropertiesService.getScriptProperties().getProperty("GOOGLECHAT_ID");
  let gchat_key = PropertiesService.getScriptProperties().getProperty("GOOGLECHAT_KEY");
  let gchat_token = PropertiesService.getScriptProperties().getProperty("GOOGLECHAT_TOKEN");

  let googlechat_webhook_url = 'https://chat.googleapis.com/v1/spaces/' + gchat_id + '/messages?key=' + gchat_key + '&token=' + gchat_token;
  let message = 'テストだよ';
  let payload  = {
    'text': message
  };
  let options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(payload),
  };
  let response;

  try {
    response = UrlFetchApp.fetch(googlechat_webhook_url, options);
  } catch (error) {
    Logger.log('リクエスト送信エラー: ' + error.message);
    return;
  }

  let statusCode = response.getResponseCode();

  if (statusCode === 200) {
    Logger.log('メッセージ送信成功');
    return;
  }
  Logger.log('メッセージ送信エラー: ' + statusCode + ' ' + response.getContentText());
}
