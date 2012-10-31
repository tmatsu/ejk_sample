// キャラクターに動きを追加してみるsample

enchant();

window.onload = function() {

  // ゲームクラスのインスタンス
  game = new Game(300, 300);

  game.preload('js/img/space3.gif');

  game.onload = function() {
    Kumas = [];

    game.rootScene.addEventListener('enterframe',function() {
      // キャラクターのスプライトを生成
      if (Math.random() > 0.7) {
        x = Math.random() * (300 - 32);
        y = 0;
        var Kuma = new KumaSprite(x, y);

        Kuma.key = game.frame;
        Kumas[game.frame] = Kuma;
      }
    });
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
    this.image = game.assets['js/img/space3.gif'];

    this.x = x;
    this.y = y;
    this.frame = 0;
    this.stop_frame = 0;
    // 加速度
    this.accel = 0.2;

    this.addEventListener('enterframe', function(){
        this.movedown();
    });

    game.rootScene.addChild(this);
  },
  movedown : function() {
    // 加速度計算
    // Kumaが生成されてから経過したフレーム数と加速度を乗算
    this.y += this.accel * (game.frame - this.key);

    // 着地していたら止まる
    if (this.y - 32 >= 200) {
      this.accel = 0;

      if (this.stop_frame == 0) {
        this.stop_frame = game.frame;
      }

      // 30フレ待ってから削除
      // 着地から削除までの間に透明度を上げていく
      if (game.frame > 25 && this.stop_frame + 25 < game.frame) {
        this.remove();
      } else {
        this.opacity -= 0.04;
      }
    }
  },
  remove : function() {
    game.rootScene.removeChild(this);
    delete Kumas[this.key];
    delete this;
  }

});
