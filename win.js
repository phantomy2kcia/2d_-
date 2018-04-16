'use strict';

var winState = {
  create: function() {
    bitmapTextCentered(90, 'engeexpa', '이겼습니다!', 38);
    // Score
    bitmapTextCentered(170, 'engeexpa', '축하합니다. 당신은 다음 스테이지로 넘어갈수 있습니다.', 25);
    bitmapTextCentered(200, 'engeexpa', '게임의 레벨은 ' + game.global.level + ' 입니다.', 25);
    bitmapTextCentered(230, 'engeexpa', '다음 스테이지로 갑니다. 주의하세요', 25);
    bitmapTextCentered(280, 'engeexpa', '복귀하기를 빕니다.', 25);

    bitmapTextCentered(439, 'engeexpa', '엔터를 누르면 시작합니다.', 18);

    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.addOnce(this.exit, this);
    game.sound.stopAll();
    this.bgmSound = game.add.audio('win');
    this.bgmSound.play();
  },

  exit: function() {
    game.state.start('menu');
  }
};
