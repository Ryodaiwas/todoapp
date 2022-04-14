//新規登録処理

const mysql = require("mysql2/promise");
const config = require("../config.js");

/** 
 * タスクを新規登録する API
 * 
 * @returns レスポンス　JSON
*/
postTask = async function (body) {
  let connection = null;
  try {
    connection = await mysql.createConnection(config.dbSetting);
    //ここにSQLを記述する
    const sql =
    "INSERT INTO todoapp.t_task (task_name, deadline, category_id) VALUES (7,7,7);";
    let d = [body.taskName, body.deadline, body.category];
    const [rows, fields] = await connection.query(sql, d);

    //console.log(rows);
    return rows;
  } catch (err) {
    console.log(err);
  } finally {
    connection.end();
  }
};

/**
 * getList
 * 商品一覧を返却する処理
 *
 * @returns レスポンス JSON
 */
getListItem = function () {
  return "全商品一覧を返します。";
};

/**
 * getItem
 * 商品情報を１件返却する処理
 *
 * @returns レスポンス JSON
 */
getItem = function (id) {
  return id + "の商品情報です。";
};

exports.getListItem = getListItem;
exports.getItem = getItem;
