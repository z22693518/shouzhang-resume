# 🎨 REDSHOU 個人圖片上傳指南

## 📍 可放置個人圖片的位置

### 1. **Hero 區塊 - 主要形象照** ⭐
**位置：** 首頁大標題上方
**建議尺寸：** 300x300 像素（正方形）
**圖片類型：** 個人 DJ 形象照、專業頭像
**HTML 位置：** `index.html` 第 47 行
```html
<img src="你的圖片連結" alt="REDSHOU DJ Profile" class="hero-profile-img">
```
**特效：** 圓形裁切、紅色光暈、懸停放大

### 2. **About 區塊 - 專業個人照** ⭐
**位置：** 「THE STORY」區塊右側
**建議尺寸：** 600x800 像素（直立)
**圖片類型：** 專業 DJ 照、演出照、工作室照
**HTML 位置：** `index.html` 第 278 行
```html
<img src="你的圖片連結" alt="REDSHOU Professional Photo">
```
**特效：** 灰階轉彩色、懸停放大

### 3. **Gallery 區塊 - 演出照片集** 
**位置：** 「EVENT GALLERY」6 張照片
**建議尺寸：** 400x400 像素（正方形）
**圖片類型：** 演出現場照、活動照、幕後照
**HTML 位置：** `index.html` 第 201-242 行

### 4. **Mix Cover - 專輯封面**
**位置：** 「LATEST MIX」區塊
**建議尺寸：** 400x400 像素（正方形）
**圖片類型：** 專輯封面、Mix 封面
**HTML 位置：** `index.html` 第 68 行

## 🔄 圖片替換方法

### 方法一：使用圖片托管服務（推薦）

1. **上傳到 Imgur**
   - 前往 https://imgur.com
   - 點擊「New post」
   - 上傳您的圖片
   - 複製「Direct link」網址

2. **上傳到 GitHub**
   - 在您的 repository 創建 `images` 資料夾
   - 上傳圖片檔案
   - 使用網址：`https://github.com/用戶名/repository名/raw/main/images/圖片名.jpg`

### 方法二：使用本地檔案（需要部署）

1. **放到 nginx 容器**
```bash
# 複製圖片到容器
docker cp 你的圖片.jpg shouzhang-nginx-1:/usr/share/nginx/html/images/

# 然後在 HTML 中使用
<img src="images/你的圖片.jpg" alt="描述">
```

## 📐 圖片規格建議

### Hero 形象照
- **尺寸：** 300x300px 或更高（正方形）
- **格式：** JPG/PNG
- **內容：** 清晰的面部特寫、專業 DJ 形象
- **背景：** 深色或簡潔背景效果更佳

### About 專業照
- **尺寸：** 600x800px 或更高（3:4 比例）
- **格式：** JPG/PNG
- **內容：** 全身或半身、展現 DJ 專業形象
- **風格：** 可以是黑白或彩色，建議有個性

### Gallery 演出照
- **尺寸：** 400x400px 或更高（正方形）
- **格式：** JPG/PNG
- **內容：** 現場演出、後台準備、與觀眾互動
- **數量：** 6 張不同場合的照片

## ⚡ 快速替換步驟

1. **準備圖片**
   - 調整至建議尺寸
   - 確保圖片清晰度足夠
   - 檔案大小控制在 2MB 以下

2. **上傳到圖片服務**
   - 推薦使用 Imgur 或 GitHub
   - 獲取直接連結網址

3. **修改 HTML**
   ```html
   <!-- 替換前 -->
   <img src="https://via.placeholder.com/300x300" alt="REDSHOU">
   
   <!-- 替換後 -->
   <img src="https://i.imgur.com/你的圖片ID.jpg" alt="REDSHOU">
   ```

4. **部署更新**
   ```bash
   # 本地預覽
   docker cp index.html shouzhang-nginx-1:/usr/share/nginx/html/
   
   # 推送到 GitHub Pages
   git add .
   git commit -m "Update personal photos"
   git push origin main
   ```

## 📱 圖片最佳化建議

### 拍攝技巧
- **光線：** 充足的光線，避免陰影
- **背景：** 簡潔或與 DJ 主題相關
- **姿態：** 展現專業和個性
- **器材：** 可包含 DJ 設備增加專業感

### 後製建議
- **對比度：** 適度提高對比度
- **色調：** 可偏向冷色調配合網站風格
- **銳度：** 確保主體清晰
- **尺寸：** 使用建議尺寸以獲得最佳效果

## 🎯 完整替換清單

- [ ] Hero 區塊個人形象照 (300x300)
- [ ] About 區塊專業照片 (600x800)
- [ ] Gallery 演出照片 1 (400x400)
- [ ] Gallery 演出照片 2 (400x400)
- [ ] Gallery 演出照片 3 (400x400)
- [ ] Gallery 演出照片 4 (400x400)
- [ ] Gallery 演出照片 5 (400x400)
- [ ] Gallery 演出照片 6 (400x400)
- [ ] Mix Cover 專輯封面 (400x400)

替換完成後，您的 REDSHOU 網站將展現完整的個人品牌形象！