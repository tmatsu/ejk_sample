// キャラクターに動きを追加してみるsample

enchant();

window.onload = function() {

  // ゲームクラスのインスタンス
  game = new Game(300, 300);

  game.preload('img/space3.gif');

  game.onload = function() {
    kumas = [];

    game.rootScene.addEventListener('enterframe',function() {
      // キャラクターのスプライトを生成
      x = Math.random() * (300 - 32);
      y = 0;
      var Kuma = new KumaSprite(x, y);
//      kumas[game.frame] = Kuma;

      Kuma.movedown();
    });

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
    // Kumaが生成されたときのフレーム数
    this.frame = game.frame;
    this.accel = 0.9;
//    this.movedown = function() {
//    };

    game.rootScene.addChild(this);
  },
  movedown : function() {
    // 加速度計算
    // Kumaが生成されてから経過したフレーム数と加速度を乗算
    this.y = this.accel * (game.frame - this.frame);
    // 着地していたら止まる
    if (this.y - 32 <= 300) {
        this.accel = 0;
    }
  },
  remove : function() {
    game.rootScene.removeChild(this);
    delete this;
  }

});
