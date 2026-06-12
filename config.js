/**
 * 表示内容はここだけ変更すればOKです。
 * spotifyUrl には曲・アルバム・プレイリスト・アーティスト・番組・エピソードのURLを指定できます。
 */
window.WIDGET_CONFIG = {
  spotifyUrl: "https://open.spotify.com/episode/7makk4oTQel546B0PZlDM5",
  title: "CLOUD RADIO",
  subtitle: "quiet frequencies for a cloudy room",
  kicker: "NOTION AUDIO",
  footerLabel: "OVERCAST SESSION",

  // auto: 細いNotionカラムでは自動的にコンパクト化
  // compact: 常にコンパクト / wide: 常に通常表示
  layout: "auto",
  compactBreakpoint: 420,
  playerHeight: 352,
  compactPlayerHeight: 152,

  // Spotify本体もグレーにする。色を残したい場合は false
  grayscalePlayer: true
};
