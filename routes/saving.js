var express = require('express');
var router = express.Router();

var mysql_dbc = require('../config/database')();
var connection = mysql_dbc.init();



router.get('/', function (req, res, next) {
    // 적금
//    res.render('index', { title: 'saving', body: 'saving' });

    var sql = 'SELECT `savings`.*, \
    `bank_accounts`.`bank_account_name`, `bank_accounts`.`name` AS `bank_account_name`  \
    FROM `savings` \
    JOIN `bank_accounts` ON `savings`.`expend_bank_account_id`=`bank_accounts`.`id` \
    ORDER BY `id` DESC';

    connection.query(sql, function (error, results, fields) {
      if (error) {
        console.log(error);
      }
      console.log(sql);
      console.log(results);
      res.render('index', { title: 'saving', body: 'saving', dataList: results });
      //    res.send(ejs.render(data, {prodList: results}));    
    });

  });


module.exports = router;


