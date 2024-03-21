const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MusicPlayer-VibeEdition</title>
        {/* тут даже комментарии работают. Можно подключать через defer скрипты и стили относительно /public */}
      </head>
      <body>{children}</body>
    </html>
  );
};
