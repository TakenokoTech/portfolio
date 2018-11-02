// キャッシュにバージョンを付けておくと、古いキャッシュを消す時に便利
var CACHE_STATIC_VERSION = 'static-v1';

// サービスワーカーのインストール
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing Service Worker...');

  // キャッシュできるまで次の処理を待つ
  event.waitUntil(
    caches.open(CACHE_STATIC_VERSION)
      .then(function(cache) {
        console.log('[Service Worker] Precaching App...');
        // 何でもキャッシュできる。cssとかの中で更にリクエストが発生する場合は、動的にキャッシュする必要がある（後述）
        cache.addAll([
          '/',
          '/src/css/main.css',
          '/src/js/main.js',
          '/src/images/logo.jpg',
        ]);
      })
  );
});