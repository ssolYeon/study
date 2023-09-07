/* 
(arrow function)();
IIFE(Immediately-invoked function expression: 즉시 작동하는 함수식)
이 안에 들어있는 코드를 바로 실행
 */

(() => {
  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");
  let currentItem = graphicElems[0]; // 현재 활성화된 .graphic-item"
  
  for (let i = 0; i < stepElems.length; i++) {
    // stepElems[i].setAttribute('data-index', i);
    stepElems[i].dataset.index = i;
    // stepElems 수만큼 돌기 때문에 graphicElems에도 같은 index값을 부여할 수 있음
    graphicElems[i].dataset.index = i;
  }

  function activate() {
    // currentItem에 visible 추가
    currentItem.classList.add('visible');
  }
  function inactivate() {
    // currentItem에 visible 제거
    currentItem.classList.remove('visible');
  }

  // window.addEventListener('scroll', () => {});
  window.addEventListener('scroll', function () {
    let step;
    let boundingRect;

    for (let i = 0; i < stepElems.length; i++) {
      step = stepElems[i];
      boundingRect = step.getBoundingClientRect();

      if (boundingRect.top > this.window.innerHeight * 0.1 &&
        boundingRect.top < this.window.innerHeight * 0.8) {
        
        inactivate();

        // visible을 추가 제거 할 대상을 currentItem에 부여
        currentItem = graphicElems[step.dataset.index];
        // currentItem에 부여된 대상에 visible을 추가 
        activate();
        
      }
    }
  });

  // 처음 graphicElems[0] 활성화
  activate();
})();