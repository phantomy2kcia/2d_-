'use strict';

var introState = {
  create: function() {
    bitmapTextCentered(150, uiFonts.TITLE, '아주 오래전 지구에 외계인이 불시착했다.', 26);
    bitmapTextCentered(180, uiFonts.TITLE, '하지만 먼저 온 외계인들에 의해 생태계가 점령당한 상태', 26);
    bitmapTextCentered(210, uiFonts.TITLE, '여분의 우주선을 불렀다. 그러나 외계 생물의 한가운데에 불시착했다.', 26);
    bitmapTextCentered(250, uiFonts.TITLE, '우주선을 타기 위해 외계 생물들을 죽이시오', 26);
    bitmapTextCentered(450, uiFonts.TITLE, '시작하려면 엔터를 누르세요', 18);

    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.addOnce(this.start, this);
  },

  start: function() {
    game.state.start('play');
  }
};
