# Notion Spotify Widget: Cloud Radio

曇り空と不揃いチェックを使った、グレースケール基調のNotion向けSpotifyウィジェットです。
Spotify公式Embedを内側に保持し、外枠・背景・文字だけを独自デザインにしています。

## 1. Spotifyの内容を変更する

`config.js` を開き、`spotifyUrl` を自分のURLへ差し替えます。

```js
window.WIDGET_CONFIG = {
  spotifyUrl: "https://open.spotify.com/playlist/ここを自分のIDに変更",
  title: "CLOUD RADIO",
  subtitle: "quiet frequencies for a cloudy room",
  kicker: "NOTION AUDIO",
  footerLabel: "OVERCAST SESSION",
  playerHeight: 352
};
```

通常の共有URLでも、Spotify URIでも使えます。

```text
https://open.spotify.com/playlist/xxxxxxxx
spotify:playlist:xxxxxxxx
```

## 2. GitHubへ配置する

リポジトリ直下が次の配置になるようにアップロードします。

```text
notion-spotify-widget/
├─ index.html
├─ styles.css
├─ config.js
├─ app.js
└─ assets/
   ├─ cloudy-sky-gray.webp
   └─ plaid-gray.webp
```

## 3. GitHub Pagesを有効にする

1. GitHubのリポジトリで `Settings`
2. 左側の `Pages`
3. `Build and deployment` の Source を `Deploy from a branch`
4. Branch を `main`、Folder を `/(root)`
5. `Save`

公開URLの例：

```text
https://ユーザー名.github.io/リポジトリ名/
```

## 4. Notionへ埋め込む

1. Notionで `/embed`
2. GitHub Pagesの公開URLを貼る
3. 横幅を広げる
4. 高さは約 `520〜620px` を目安に調整する

## 注意

- Spotifyのiframeから `allow="encrypted-media"` を削除しないでください。プレビュー再生だけになる原因になります。
- 外部ログインが必要な埋め込みは、Notionデスクトップ版・モバイル版で正しく動かない場合があります。その場合はブラウザ版Notionで確認してください。
- APIキーやSpotify Developerアプリは不要です。
