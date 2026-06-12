(() => {
  "use strict";

  const config = window.WIDGET_CONFIG ?? {};
  const player = document.getElementById("spotify-player");
  const setupMessage = document.getElementById("setup-message");

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element && typeof value === "string" && value.trim()) {
      element.textContent = value.trim();
    }
  };

  const toEmbedUrl = (input) => {
    if (typeof input !== "string" || !input.trim()) return null;

    const value = input.trim();
    const allowedTypes = new Set([
      "track",
      "album",
      "playlist",
      "artist",
      "show",
      "episode"
    ]);

    // spotify:playlist:xxxx のようなSpotify URIにも対応
    if (value.startsWith("spotify:")) {
      const [, type, id] = value.split(":");
      if (allowedTypes.has(type) && id) {
        return `https://open.spotify.com/embed/${type}/${encodeURIComponent(id)}?utm_source=generator`;
      }
      return null;
    }

    try {
      const url = new URL(value);
      if (url.hostname !== "open.spotify.com") return null;

      const parts = url.pathname.split("/").filter(Boolean);
      const embedOffset = parts[0] === "embed" ? 1 : 0;
      const type = parts[embedOffset];
      const id = parts[embedOffset + 1];

      if (!allowedTypes.has(type) || !id) return null;
      return `https://open.spotify.com/embed/${type}/${encodeURIComponent(id)}?utm_source=generator`;
    } catch {
      return null;
    }
  };

  setText("widget-title", config.title);
  setText("widget-subtitle", config.subtitle);
  setText("widget-kicker", config.kicker);
  setText("footer-label", config.footerLabel);

  const height = Number(config.playerHeight);
  if (Number.isFinite(height) && height >= 152 && height <= 1000) {
    player.height = String(height);
  }

  const embedUrl = toEmbedUrl(config.spotifyUrl);
  if (!embedUrl) {
    player.hidden = true;
    setupMessage.hidden = false;
    return;
  }

  player.src = embedUrl;
})();
