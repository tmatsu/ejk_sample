// キャラクターに動きを追加してみるsample

enchant();

window.onload = function() {

  // ゲームクラスのインスタンス
  game = new Game(300, 300);

  game.preload('img/space3.gif');

  game.onload = function() {

    // キャラクターのスプライトを生成
    x = Math.random() * 300;
    y = 0;
    var Kuma = new KumaSprite(x, y);

    // キャラクターをSceneオブジェクトに追加する
    game.rootScene.addChild(Kuma);
  }

  game.rootScene.backgroundColor = 'rgb(240, 250, 250)';

  // ゲームを開始
  game.start();
}

/**
 * Kumaスプライトクラス
 */
var KumaSprite = Class.create(Sprite, {
  initialize : function(x, y) {

    // 親クラスの呼び出し
    Sprite.call(this, 32, 32);
    // キャラクターに画像をセットする
    this.image = game.assets['img/space3.gif'];

    this.x = x;
    this.y = y;
    this.frame = 1;
    this.movedown = function() {
    };

    game.rootScene.addChild(this);
  },

  remove : function() {
    game.rootScene.removeChild(this);
    delete this;
  }

});
