// 順次フェードイン。表示の遅延以外の動きは追加しない。
(() => {
  const elements = Array.from(document.querySelectorAll(".reveal"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 動きを減らす設定が有効な環境では、全要素を即時表示する。
  if (reduceMotion) return;

  // JavaScriptが有効な場合だけ初期状態を隠し、順番に表示する。
  document.documentElement.classList.add("js-ready");

  const step = 55; // 要素ごとの開始間隔
  elements.forEach((element, index) => {
    element.style.animationDelay = `${index * step}ms`;
  });
})();
