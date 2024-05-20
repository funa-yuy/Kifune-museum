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


//  ページ内リンク　スクロール
 $('a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top - 50;  //idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
  });

