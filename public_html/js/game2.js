// キャラクターに動きを追加してみるsample

enchant();

window.onload = function() {

  // ゲームクラスのインスタンス
  var game = new Game(300, 300);

  game.preload('img/space3.gif');

  game.onload = function() {
    var scene = new Scene();

    // キャラクターのスプライトを生成
//    var character = new Sprite(32, 32);
    // キャラクターに画像をセットする
    character.image = game.assets['img/space3.gif'];
    // キャラクターをSceneオブジェクトに追加する
    scene.addChild(character);

    game.pushScene(scene);
  }

  game.rootScene.backgroundColor = 'rgb(0, 0, 0)';

  // ゲームを開始
  game.start();
}

/**
 * Kumaスプライトクラス
 */
var KumaSprite = enchant.Class.create(Sprite, {
  initialize : function(x, y) {

    // 親クラスの呼び出し
    Sprite.call(this, 32, 32);
    this.image = game.assets['img/space3.gif'];

    this.x = x;
    this.y = y;
    this.frame = 1;

    // Kumaを画面下まで動かす
    this.movedown = function() {
    };

  },

  remove : function() {
  }
});
