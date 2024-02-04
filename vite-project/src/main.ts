import './src/style.scss';

const images = ['src/img/img_01.jpg', 'src/img/img_02.jpg', 'src/img/img_03.jpg'];
const slideItems = document.querySelectorAll('.slide_items img');
const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');
// カウンター
let current = 0;

// 型を指定する
const showImage = (index: number) => {
  slideItems.forEach((item, i) => {
    if (i === index) {
      (item as HTMLElement).style.display = 'block';
    } else {
      (item as HTMLElement).style.display = 'none';
    }
  });
};
showImage(current);

//ボタンクリック（?でエラー回避する
prev?.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});
next?.addEventListener('click', () => {
  current = (current + 1) % images.length;
  showImage(current);
});
