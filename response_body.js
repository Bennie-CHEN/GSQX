// 获取请求体
let reqBody = $request.body;
console.log("Request body: ", reqBody);  // 输出请求体内容

// // 定义要匹配的请求体
// let targetBody = {
//   "sdnd": "2024",
//   "sdxmDms": ["0100", "0400", "0500", "0600"],
//   "pageSize": "500",
//   "includeJysdFlsd": false,
//   "pageNum": 1
// };

// // 尝试解析请求体
//   let reqBodyObj = JSON.parse(reqBody);  // 将请求体字符串转换为对象
  
//   // 判断请求体是否匹配目标请求体
//   if (JSON.stringify(reqBodyObj) === JSON.stringify(targetBody)) {
//     console.log("Request body matched! Replacing response.");

    // 获取响应体
    let body = $response.body;
    let obj = JSON.parse(body); // 将响应体解析为JSON对象
    console.log("$response body: ", body);  // 输出请求体内容
    
    // 如果请求体匹配，则修改响应体的内容
    obj.data = 
    {
        "ybtseHj" : 11089.8,
        "sreHj" : 211900,
        "nsmxList" : [
          {
            "nsrdah" : "fUZNWINaFl2qizSEVpuFJEGYzYAo4Dqbwv0eqevcHgBAaTtuv/0raSOFbWQ1PWH7",
            "kjywrMc" : "深圳正中云有限公司",
            "sre" : 16300,
            "grsdssdxmmc" : "正常工资薪金",
            "skssqq" : 1730390400000,
            "sblsh" : "2000004276066420",
            "jyqdMc" : "其他",
            "btzqynsrsbh" : null,
            "mxxh" : "41281357167",
            "ywlxDm" : "A061005019",
            "sdxmDlmc" : "工资薪金",
            "ybtse" : 1093.4,
            "kjywrlbDm" : "1",
            "sdxmDlDm" : "0100",
            "skssqz" : 1732896000000,
            "btzdwmc" : null,
            "zybz" : null,
            "grsdssdxmDm" : "0101"
          },
          {
            "nsrdah" : "fUZNWINaFl2qizSEVpuFJEGYzYAo4Dqbwv0eqevcHgBAaTtuv/0raSOFbWQ1PWH7",
            "kjywrMc" : "深圳正中云有限公司",
            "sre" : 16300,
            "grsdssdxmmc" : "正常工资薪金",
            "skssqq" : 1727712000000,
            "sblsh" : "2000004215641834",
            "jyqdMc" : "其他",
            "btzqynsrsbh" : null,
            "mxxh" : "40590816350",
            "ywlxDm" : "A061005019",
            "sdxmDlmc" : "工资薪金",
            "ybtse" : 1093.4,
            "kjywrlbDm" : "1",
            "sdxmDlDm" : "0100",
            "skssqz" : 1730304000000,
            "btzdwmc" : null,
            "zybz" : null,
            "grsdssdxmDm" : "0101"
          },
          {
            "nsrdah" : "fUZNWINaFl2qizSEVpuFJEGYzYAo4Dqbwv0eqevcHgBAaTtuv/0raSOFbWQ1PWH7",
            "kjywrMc" : "深圳正中云有限公司",
            "sre" : 16300,
            "grsdssdxmmc" : "正常工资薪金",
            "skssqq" : 1725120000000,
            "sblsh" : "2000004154697139",
            "jyqdMc" : "其他",
            "btzqynsrsbh" : null,
            "mxxh" : "39972656465",
            "ywlxDm" : "A061005019",
            "sdxmDlmc" : "工资薪金",
            "ybtse" : 1093.4,
            "kjywrlbDm" : "1",
            "sdxmDlDm" : "0100",
            "skssqz" : 1727625600000,
            "btzdwmc" : null,
            "zybz" : null,
            "grsdssdxmDm" : "0101"
          },
          {
            "nsrdah" : "fUZNWINaFl2qizSEVpuFJEGYzYAo4Dqbwv0eqevcHgBAaTtuv/0raSOFbWQ1PWH7",
            "kjywrMc" : "深圳正中云有限公司",
            "sre" : 16300,
            "grsdssdxmmc" : "正常工资薪金",
            "skssqq" : 1722441600000,
            "sblsh" : "2000004099426451",
            "jyqdMc" : "其他",
            "btzqynsrsbh" : null,
            "mxxh" : "39281664092",
            "ywlxDm" : "A061005019",
            "sdxmDlmc" : "工资薪金",
            "ybtse" : 1093.4,
            "kjywrlbDm" : "1",
            "sdxmDlDm" : "0100",
            "skssqz" : 1725033600000,
            "btzdwmc" : null,
            "zybz" : null,
            "grsdssdxmDm" : "0101"
          },
          {
            "nsrdah" : "fUZNWINaFl2qizSEVpuFJEGYzYAo4Dqbwv0eqevcHgBAaTtuv/0raSOFbWQ1PWH7",
            "kjywrMc" : "深圳正中云有限公司",
            "sre" : 16300,
            "grsdssdxmmc" : "正常工资薪金",
            "skssqq" : 1719763200000,
            "sblsh" : "2000004039004628",
            "jyqdMc" : "其他",
            "btzqynsrsbh" : null,
            "mxxh" : "38609554394",
            "ywlxDm" : "A061005019",
            "sdxmDlmc" : "工资薪金",
            "ybtse" : 1093.4,
            "kjywrlbDm" : "1",
            "sdxmDlDm" : "0100",
            "skssqz" : 1722355200000,
            "btzdwmc" : null,
            "zybz" : null,
            "grsdssdxmDm" : "0101"
          },
          {
            "nsrdah" : "fUZNWINaFl2qizSEVpuFJEGYzYAo4Dqbwv0eqevcHgBAaTtuv/0raSOFbWQ1PWH7",
            "kjywrMc" : "深圳正中云有限公司",
            "sre" : 16300,
            "grsdssdxmmc" : "正常工资薪金",
            "skssqq" : 1717171200000,
            "sblsh" : "2000003965568965",
            "jyqdMc" : "其他",
            "btzqynsrsbh" : null,
            "mxxh" : "37877319444",
            "ywlxDm" : "A061005019",
            "sdxmDlmc" : "工资薪金",
            "ybtse" : 1093.4,
            "kjywrlbDm" : "1",
            "sdxmDlDm" : "0100",
            "skssqz" : 1719676800000,
            "btzdwmc" : null,
            "zybz" : null,
            "grsdssdxmDm" : "0101"
          },
          {
            "nsrdah" : "fUZNWINaFl2qizSEVpuFJEGYzYAo4Dqbwv0eqevcHgBAaTtuv/0raSOFbWQ1PWH7",
            "kjywrMc" : "深圳正中云有限公司",
            "sre" : 16300,
            "grsdssdxmmc" : "正常工资薪金",
            "skssqq" : 1714492800000,
            "sblsh" : "2000003891205223",
            "jyqdMc" : "其他",
            "btzqynsrsbh" : null,
            "mxxh" : "37049799262",
            "ywlxDm" : "A061005019",
            "sdxmDlmc" : "工资薪金",
            "ybtse" : 1093.4,
            "kjywrlbDm" : "1",
            "sdxmDlDm" : "0100",
            "skssqz" : 1717084800000,
            "btzdwmc" : null,
            "zybz" : null,
            "grsdssdxmDm" : "0101"
          },
          {
            "nsrdah" : "fUZNWINaFl2qizSEVpuFJEGYzYAo4Dqbwv0eqevcHgBAaTtuv/0raSOFbWQ1PWH7",
            "kjywrMc" : "深圳正中云有限公司",
            "sre" : 16300,
            "grsdssdxmmc" : "正常工资薪金",
            "skssqq" : 1711900800000,
            "sblsh" : "2000003798456022",
            "jyqdMc" : "其他",
            "btzqynsrsbh" : null,
            "mxxh" : "36279873965",
            "ywlxDm" : "A061005019",
            "sdxmDlmc" : "工资薪金",
            "ybtse" : 869.6,
            "kjywrlbDm" : "1",
            "sdxmDlDm" : "0100",
            "skssqz" : 1714406400000,
            "btzdwmc" : null,
            "zybz" : null,
            "grsdssdxmDm" : "0101"
          },
          {
            "nsrdah" : "fUZNWINaFl2qizSEVpuFJEGYzYAo4Dqbwv0eqevcHgBAaTtuv/0raSOFbWQ1PWH7",
            "kjywrMc" : "深圳正中云有限公司",
            "sre" : 16300,
            "grsdssdxmmc" : "正常工资薪金",
            "skssqq" : 1709222400000,
            "sblsh" : "2000003677990559",
            "jyqdMc" : "其他",
            "btzqynsrsbh" : null,
            "mxxh" : "35438948103",
            "ywlxDm" : "A061005019",
            "sdxmDlmc" : "工资薪金",
            "ybtse" : 328,
            "kjywrlbDm" : "1",
            "sdxmDlDm" : "0100",
            "skssqz" : 1711814400000,
            "btzdwmc" : null,
            "zybz" : null,
            "grsdssdxmDm" : "0101"
          },
          {
            "nsrdah" : "fUZNWINaFl2qizSEVpuFJEGYzYAo4Dqbwv0eqevcHgBAaTtuv/0raSOFbWQ1PWH7",
            "kjywrMc" : "深圳正中云有限公司",
            "sre" : 16300,
            "grsdssdxmmc" : "正常工资薪金",
            "skssqq" : 1706716800000,
            "sblsh" : "2000003490658891",
            "jyqdMc" : "其他",
            "btzqynsrsbh" : null,
            "mxxh" : "34531706292",
            "ywlxDm" : "A061005019",
            "sdxmDlmc" : "工资薪金",
            "ybtse" : 328,
            "kjywrlbDm" : "1",
            "sdxmDlDm" : "0100",
            "skssqz" : 1709136000000,
            "btzdwmc" : null,
            "zybz" : null,
            "grsdssdxmDm" : "0101"
          },
          {
            "nsrdah" : "fUZNWINaFl2qizSEVpuFJEGYzYAo4Dqbwv0eqevcHgBAaTtuv/0raSOFbWQ1PWH7",
            "kjywrMc" : "深圳正中云有限公司",
            "sre" : 16300,
            "grsdssdxmmc" : "正常工资薪金",
            "skssqq" : 1704038400000,
            "sblsh" : "2000003440346628",
            "jyqdMc" : "其他",
            "btzqynsrsbh" : null,
            "mxxh" : "33960385340",
            "ywlxDm" : "A061005019",
            "sdxmDlmc" : "工资薪金",
            "ybtse" : 328,
            "kjywrlbDm" : "1",
            "sdxmDlDm" : "0100",
            "skssqz" : 1706630400000,
            "btzdwmc" : null,
            "zybz" : null,
            "grsdssdxmDm" : "0101"
          }
        ],
        "rowCount" : 11
    }

    ;

    // 将修改后的对象转换回JSON字符串
    body = JSON.stringify(obj);

    // 替换响应体
    $done({body});
  // } else {
  //   console.log("Request body did not match.");
  //   $done();
  // }

