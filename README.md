
# restaurant list
用Node.js、Express、handlebars練習的作品，內容主要為支出紀錄。

## 安裝方法
下載專案
```
git clone https://github.com/Eli-777/expense-tracker.git
```
安裝 Package
```
npm install
```
使用 seed data
```
npm run seed
```
使用 nodemon 啟動伺服器
```
npm run dev
```
或正常啟動
```
npm start
```

## 功能 
- 在首頁一次瀏覽所有支出的清單。
- 在首頁看到所有支出清單的總金額。
- 新增一筆支出。
- 編輯支出的所有屬性 (一次只能編輯一筆)。
- 刪除任何一筆支出 (一次只能刪除一筆)。
- 在首頁可以根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和。


## 使用工具
- Node.js v12.16.2 -執行環境
- Express V4.17.1 -框架
- Express-handlebars V4.0.4 -模板引擎
- body-parser: 1.19.0
- mongoDB Community Server: 4.2.6
- mongoose: 5.9.13
- method-override: 3.0.0

## 專案畫面
![Alt text](/public/pictures/index_expenseTracker.png)


