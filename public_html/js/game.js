// enchant.jsのひな形

enchant();

window.onload = function() {

  // ゲームクラスのインスタンス
  var game = new Game(300, 300);

  // メインループ
  game.onload = function() {
    // 処理をここに書く
  }

  // ゲーム開始
  game.start();
}
