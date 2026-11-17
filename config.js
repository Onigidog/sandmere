// ============================================================
//  沙蟲海珀・連線設定
//  只有第一次設定時需要填，之後更新網站只換 index.html，這個檔案不用動
// ============================================================

// ① 從 Firebase「專案設定 → 你的應用程式」複製過來，整段貼上取代
export const firebaseConfig = {
  apiKey: "AIzaSyDx9ClPCQhqJoJRzfI0HAUkBK_qr0hoZdw",
  authDomain: "sandmere-50e18.firebaseapp.com",
  projectId: "sandmere-50e18",
  storageBucket: "sandmere-50e18.firebasestorage.app",
  messagingSenderId: "582762010762",
  appId: "1:582762010762:web:e3c88dcd8f082027737573"
};


// ② 房主（你）的 Gmail，必須和 Firestore 規則裡的 ownerEmail() 一模一樣
export const OWNER_EMAIL = "you@gmail.com";
