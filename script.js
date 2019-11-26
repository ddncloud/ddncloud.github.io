var form = new FormData();
form.append("data", "'{\"id\": 100, \"title\": \"Test Title\", \"note\": \"Test note\"}'");

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://postman-echo.com/delete",
  "method": "DELETE",
  "headers": {
    "Content-type": "application/json",
    "User-Agent": "PostmanRuntime/7.20.1",
    "Accept": "*/*",
    "Cache-Control": "no-cache",
    "Postman-Token": "37d0c740-64df-4dd2-9125-87f6457ef95e,aaba1af1-efc5-40ae-ac7c-9243861ef85f",
    "Host": "postman-echo.com",
    "Accept-Encoding": "gzip, deflate",
    "Content-Length": "216",
    "Connection": "keep-alive",
    "cache-control": "no-cache"
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
console.log("empty")
