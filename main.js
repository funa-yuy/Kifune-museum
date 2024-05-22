// ハンバーガーメニュー

const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');


document.getElementById('js-hamburger').addEventListener('click',function() {
document.getElementById('js-nav').classList.toggle('active');
});

$('a[href*="#"]').click(function () {
	document.getElementById('js-nav').classList.remove('active');
	var elmHash = this.getAttribute('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top - 30;  //idの上部の距離を取得
	$('html, body').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

// ヘッダー登場
$(window).scroll(function () {           /* スクロールされた時 */
  var pos = $('.about').offset();          /* mvを過ぎたmainタグの高さを取得して変数[pos]に格納 */
  if ($(this).scrollTop() > pos.top) {   /* 変数[pos]より、スクロールされていたら */
    $('header').fadeIn();                /* ヘッダーをふわっと表示 */
  } else {                               /* それ以外の場合 */
    $('header').fadeOut();               /* ヘッダーをふわっと非表示 */
  }
});
