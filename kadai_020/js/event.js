  // output-btnというidを持つHTML要素を取得し、定数に代入する
  const btn = document.getElementById('btn');
 
  // HTML要素がクリックされたときにイベント処理を実行する
  btn.addEventListener('click', () => {
    const btnText = document.getElementById('text');
    btnText.textContent = 'ボタンをクリックしました';
    console.log('クリックされました！');
});