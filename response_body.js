let reqBody = $request.body;
console.log("Request body: ", reqBody);  // 输出请求体内容

// 定义要匹配的请求体
let targetBody = {
  "sdnd": "2024",
  "sdxmDms": ["0100", "0400", "0500", "0600"],
  "pageSize": "500",
  "includeJysdFlsd": false,
  "pageNum": 1
};

// 将请求体字符串转为 JSON 对象进行对比
try {
  let reqBodyObj = JSON.parse(reqBody);
  
  // 判断请求体是否匹配
  if (JSON.stringify(reqBodyObj) === JSON.stringify(targetBody)) {
    console.log("Request body matched! Replacing response.");
  
    // 替换响应体
    $response.body = JSON.stringify({
      "status": "success",
      "message": "Request body matched. Replaced with custom response.",
      "data": {
        "params": null,
        "data": {
          "ybtseHj": 6897.7399999999998,
          "sreHj": 164619,
          "nsmxList": [
            {
              "nsrdah": "fUZNWINaFl2qizSEVpuFJEGYzYAo4Dqbwv0eqevcHgBAaTtuv/0raSOFbWQ1PWH7",
              "kjywrMc": "深圳正中云有限公司",
              "sre": 16300,
              "grsdssdxmmc": "正常工资薪金",
              "skssqq": 1730390400000,
              "sblsh": "2000004276066420",
              "jyqdMc": "其他",
              "btzqynsrsbh": null,
              "mxxh": "41281357167",
              "ywlxDm": "A061005019",
              "sdxmDlmc": "工资薪金",
              "ybtse": 1093.4,
              "kjywrlbDm": "1",
              "sdxmDlDm": "0100",
              "skssqz": 1732896000000,
              "btzdwmc": null,
              "zybz": null,
              "grsdssdxmDm": "0101"
            },
            // 省略其他数据，按照相同格式继续...
          ],
          "rowCount": 11
        },
        "code": "SUCCESS",
        "rid": null,
        "message": null,
        "appCodeForEx": null,
        "originalErrorCode": null
      }
    });
  
  } else {
    console.log("Request body did not match.");
  }

} catch (e) {
  console.error("Error parsing request body:", e);
}

$done();
