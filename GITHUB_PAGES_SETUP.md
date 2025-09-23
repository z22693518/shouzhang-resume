# GitHub Pages 設定指南

## 推送程式碼到 GitHub

在終端機執行以下命令（請將 YOUR_USERNAME 替換為你的 GitHub 用戶名）：

```bash
cd ~/shouzhang-resume
git remote add origin https://github.com/YOUR_USERNAME/shouzhang-resume.git
git push -u origin main
```

## 啟用 GitHub Pages

1. 推送成功後，前往你的 GitHub repository 頁面
   `https://github.com/YOUR_USERNAME/shouzhang-resume`

2. 點擊上方的 **Settings** 標籤

3. 在左側選單找到 **Pages**

4. 在 **Source** 部分：
   - 選擇 **Deploy from a branch**
   - Branch: 選擇 **main**
   - Folder: 選擇 **/ (root)**
   - 點擊 **Save**

5. 等待約 2-5 分鐘後，你的網站將會在以下網址上線：
   `https://YOUR_USERNAME.github.io/shouzhang-resume`

## 確認部署狀態

1. 在 repository 頁面，點擊 **Actions** 標籤
2. 你會看到 "pages build and deployment" 工作流程
3. 綠色勾勾表示部署成功

## 自訂域名（選用）

如果你有自己的域名：
1. 在 Settings → Pages → Custom domain
2. 輸入你的域名（例如：resume.yourdomain.com）
3. 在你的域名 DNS 設定添加 CNAME 記錄指向 YOUR_USERNAME.github.io

## 網站預覽

你的履歷網站包含以下內容：
- 個人簡介和照片
- 工作經歷時間軸
- 技能展示
- 專案作品集
- 聯絡資訊表單
- 響應式設計（支援手機瀏覽）
- 平滑滾動和動畫效果

## 更新網站

每次要更新網站時：
```bash
cd ~/shouzhang-resume
# 修改檔案後
git add .
git commit -m "Update resume"
git push
```

網站會自動在幾分鐘內更新！