    // 获取响应体
    let body = $response.body;
    let obj = JSON.parse(body); // 将响应体解析为JSON对象
    console.log("obj 值是: " + obj);

    // 提取 mxxh 
    let mxxh = obj.data.jbqkDetail.mxxh;

    console.log("mxxh 值是: " + mxxh);
    
    if (mxxh === 41281357167) {
     console.log("命中"); 
     obj.data = {
                  "bqDetail" : {
                    "nj" : 0,
                    "syjkbx" : 0,
                    "jbjcfy" : 5000,
                    "srze" : null,
                    "zykcdjze" : 0,
                    "jbylbxf" : 622.24000000000001,
                    "mssr" : 0,
                    "yxkcdsf" : 0,
                    "tzdk" : null,
                    "sre" : 16300,
                    "qtkcqt" : 0,
                    "jbylbxf1" : 155.56,
                    "sybxf" : 15.56,
                    "ccyz" : null,
                    "cbfyje" : null,
                    "syylbx" : 0,
                    "qtkchj" : 0,
                    "zfgjj" : 663.85000000000002,
                    "mbyqndksje" : null,
                    "fyje" : null,
                    "zxkchj" : 1457.21
                  },
                  "ljDetail" : {
                    "ljyyezhfyzc" : 0,
                    "ljjbjcfy" : 55000,
                    "ljynssde" : 94177.419999999998,
                    "ljzfzjzc" : 0,
                    "ljzykcdjze" : 0,
                    "ljsre" : 179300,
                    "ljzxkchj" : 15441.58,
                    "ljznjyzc" : 0,
                    "ljmssr" : 0,
                    "ljgrylj" : 0,
                    "ljzxfjkchj" : 0,
                    "ljdbylzc" : null,
                    "ljzfdklxzc" : 0,
                    "ljfy" : 0,
                    "ljsylrzc" : 0,
                    "ljjxjyzc" : 0,
                    "ljqtkchj" : 0
                  },
                  "skjsDetail" : {
                    "ssxdjmse" : null,
                    "zsfsDm" : null,
                    "hdyynssde" : null,
                    "ynssde" : 94177.419999999998,
                    "sskcs" : 2520,
                    "ykjse" : 6897.7399999999998,
                    "sl1" : 0.10000000000000001,
                    "xdsl" : null,
                    "jmse" : 0,
                    "yjse" : 6047.8599999999997,
                    "ybtse" : 981.90,
                    "ljynssde" : null,
                    "ynse" : 6897.7399999999998,
                    "jjbl" : null,
                    "sndyjynssde" : null
                  },
                  "jbqkDetail" : {
                    "kjywrdah" : "10214403000001912108",
                    "zgswskfjDm" : "14403611300",
                    "jylxDm" : "0",
                    "srlyd" : null,
                    "zsfsDm" : null,
                    "sblsh" : "2000004276066420",
                    "yjfsDm" : null,
                    "btzdwlxDm" : null,
                    "skssswjgDm" : "14403610000",
                    "sblrrq" : 1733120079000,
                    "skssqq" : 1730390400000,
                    "sdxmmc" : "正常工资薪金",
                    "zspmDm" : "101060100",
                    "zgswjgMc" : "国家税务总局深圳市光明区税务局",
                    "btzqynsrsbh" : null,
                    "yxbz" : "Y",
                    "sbjlSre" : 16300,
                    "srlydmc" : null,
                    "jyqdMc" : "其他",
                    "jsbs" : null,
                    "sbmxxh" : 10039528820642,
                    "sfljsd" : "Y",
                    "btzdwdjxh" : null,
                    "ywlxDm" : "A061005019",
                    "skssqz" : 1732896000000,
                    "btzdwmc" : null,
                    "jysbm" : "296ca4a46c604c93826fa18ac18278b7",
                    "sfhm" : null,
                    "sbrq" : 1733068800000,
                    "sbxh" : "1000003848545044",
                    "sfyz" : null,
                    "mxxh" : 41281357167,
                    "pzzmhwjh" : "国家税务总局公告2018年第61号",
                    "jttknr" : "<p class=\"c-title\">《个人所得税扣缴申报管理办法（试行）》（国家税务总局公告2018年第61号）第六条</p><p>扣缴义务人向居民个人支付工资、薪金所得时，应当按照累计预扣法计算预扣税款，并按月办理扣缴申报。</p><p>累计预扣法，是指扣缴义务人在一个纳税年度内预扣预缴税款时，以纳税人在本单位截至当前月份工资、薪金所得累计收入减除累计免税收入、累计减除费用、累计专项扣除、累计专项附加扣除和累计依法确定的其他扣除后的余额为累计预扣预缴应纳税所得额，适用个人所得税预扣率表一，计算累计应预扣预缴税额，再减除累计减免税额和累计已预扣预缴税额，其余额为本期应预扣预缴税额。余额为负值时，暂不退税。纳税年度终了后余额仍为负值时，由纳税人通过办理综合所得年度汇算清缴，税款多退少补。</p>",
                    "kjywrlbDm" : "1",
                    "sdxmDlmc" : null,
                    "ywlxMc" : "综合所得预扣预缴申报",
                    "sdxmDm" : "0101",
                    "ckgssm" : "<p>本期应预扣预缴税额=（累计预扣预缴应纳税所得额×预扣率-速算扣除数)-累计已预扣预缴税额</p><p>累计预扣预缴应纳税所得额=累计收入-累计免税收入-累计减除费用-累计专项扣除-累计专项附加扣除-累计依法确定的其他扣除</p><p>其中：累计减除费用，按照5000元/月乘以纳税人当年截至本月在本单位的任职受雇月份数计算。</p>",
                    "hhqyhhrFpbl" : null,
                    "hzywm" : "101060100-0.100000-431",
                    "kjywrMc" : "深圳正中云有限公司",
                    "zybz" : null,
                    "kjywrsbh" : "91440300MA5G9YMM2B",
                    "jyqdDm" : "13",
                    "bmbh" : "",
                    "bz" : "",
                    "sbjlYbtse" : 981.90,
                    "sdxmDlDm" : null,
                    "zgswjgDm" : "14403610000",
                    "btzdwzgswjgDm" : null
                  }               
    };
    

    // 将修改后的对象转换回JSON字符串
    body = JSON.stringify(obj);

    // 替换响应体
    $done({body});


