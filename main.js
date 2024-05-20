// ハンバーガーメニュー

const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

/*
ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});
*/


document.getElementById('js-hamburger').addEventListener('click',function() {
document.getElementById('js-nav').classList.toggle('active');
});

document.getElementById('rink').addEventListener('click',function() {
document.getElementById('js-nav').classList.remove('active');
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


//  ページ内リンク　スクロール
 $('a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top - 50;  //idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
  });

