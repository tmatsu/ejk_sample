// キャラクターを表示するsample

enchant();

window.onload = function() {

  // ゲームクラスのインスタンス
  var game = new Game(300, 300);

  game.preload('img/space3.gif');

  game.onload = function() {
    var scene = new Scene();

    // キャラクターのスプライトを生成
    var character = new Sprite(32, 32);
    // キャラクターに画像をセットする
    character.image = game.assets['img/space3.gif'];
    // キャラクターをSceneオブジェクトに追加する
    scene.addChild(character);

    game.pushScene(scene);
  }

  game.rootScene.backgroundColor = 'rgb(240, 255, 255)';

  // ゲームを開始
  game.start();
}
