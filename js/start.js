const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const quiz_main = document.querySelector("#quiz_main");
const quiz = document.querySelector("#quiz");
const result_2 = document.querySelector("#result_2");

const endPoint = 3; //심리테스트 개수
const endPoint_2 = 5; // 퀴즈 질문 개수

const select = [0, 0, 0];
const select_2 = [0, 0];

function calResult(){
  console.log(select);
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.jpeg';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}

function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button'); //answer라는 변수에 버튼 만들
  answer.classList.add('answerList');
  answer.classList.add('my-3'); //마진 3
  answer.classList.add('py-3'); //패딩 3
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true; //버튼 비활성화하
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      var target = qnaList[qIdx].a[idx].type;
      for(let i = 0; i < target.length; i++){
        select[target[i]] += 1;
      }

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);  //다음 질문으로 넘어가
    },450)
  }, false);
}

function goNext(qIdx){
  if(qIdx === endPoint){  // 세번 채우면 result page로 넘어감.
    goResult();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function begin(){
  ask_gift.style.WebkitAnimation = "fadeOut 1s"; //1초간
  ask_gift.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      ask_gift.style.display = "none";
      qna.style.display = "block"
    }, 450)  //450밀리초
    let qIdx = 0;  // 변수 0 assign
    goNext(qIdx);
  }, 450);
}

function goInput(){
  main.style.WebkitAnimation = "fadeOut 1s"; //1초간
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    input.style.WebkitAnimation = "fadeIn 1s";
    input.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      input.style.display = "block"
    }, 450)});
}

function goToGift(){
  input.style.WebkitAnimation = "fadeOut 1s"; //1초간
  input.style.animation = "fadeOut 1s";
  setTimeout(() => {
    ask_gift.style.WebkitAnimation = "fadeIn 1s";
    ask_gift.style.animation = "fadeIn 1s";
    setTimeout(() => {
      input.style.display = "none";
      ask_gift.style.display = "block"
    }, 450)});
}

function goTosimul_1(){
  result.style.WebkitAnimation = "fadeOut 1s"; //1초간
  result.style.animation = "fadeOut 1s";
  setTimeout(() => {
    simul_1.style.WebkitAnimation = "fadeIn 1s";
    simul_1.style.animation = "fadeIn 1s";
    setTimeout(() => {
      result.style.display = "none";
      simul_1.style.display = "block"
    }, 450)});

}

function goTosimul_2(){
  simul_1.style.WebkitAnimation = "fadeOut 1s"; //1초간
  simul_1.style.animation = "fadeOut 1s";
  setTimeout(() => {
    simul_2.style.WebkitAnimation = "fadeIn 1s";
    simul_2.style.animation = "fadeIn 1s";
    setTimeout(() => {
      simul_1.style.display = "none";
      simul_2.style.display = "block"
    }, 450)});
}


function goToquiz_main(){
  simul_2.style.WebkitAnimation = "fadeOut 1s"; //1초간
  simul_2.style.animation = "fadeOut 1s";
  setTimeout(() => {
    quiz_main.style.WebkitAnimation = "fadeIn 1s";
    quiz_main.style.animation = "fadeIn 1s";
    setTimeout(() => {
      simul_2.style.display = "none";
      quiz_main.style.display = "block"
    }, 450)});
}

function begin_2(){
  quiz_main.style.WebkitAnimation = "fadeOut 1s"; //1초간
  quiz_main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    quiz.style.WebkitAnimation = "fadeIn 1s";
    quiz.style.animation = "fadeIn 1s";
    setTimeout(() => {
      quiz_main.style.display = "none";
      quiz.style.display = "block"
    }, 450)  //450밀리초
    let qIdx_2 = 0;  // 변수 0 assign
    goNext_2(qIdx_2);
  }, 450);
}

function goNext_2(qIdx_2){
  if(qIdx_2 === endPoint_2){  // 세번 채우면 result page로 넘어감.
    goResult_2();
    return;
  }

  var q = document.querySelector('.qBox_2');
  q.innerHTML = quizList[qIdx_2].q;
  for(let i in quizList[qIdx_2].a){
    addAnswer_2(quizList[qIdx_2].a[i].answer, qIdx_2, i);
  }
  var status_2 = document.querySelector('.statusBar_2');
  status_2.style.width = (100/endPoint_2) * (qIdx_2+1) + '%';
}

function goResult_2(){
  quiz.style.WebkitAnimation = "fadeOut 1s";
  quiz.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result_2.style.WebkitAnimation = "fadeIn 1s";
    result_2.style.animation = "fadeIn 1s";
    setTimeout(() => {
      quiz.style.display = "none";
      result_2.style.display = "block"
    }, 450)})
    setResult_2();
}

function setResult_2(){
  let point = calResult_2();
  const resultName_2 = document.querySelector('.resultname_2');
  resultName_2.innerHTML = infoList_2[point].name;

  var resultImg_2 = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg_2');
  var imgURL = 'img/image-' + point + '.jpeg';
  resultImg_2.src = imgURL;
  resultImg_2.alt = point;
  resultImg_2.classList.add('img-fluid');
  imgDiv.appendChild(resultImg_2);

  const resultDesc_2 = document.querySelector('.resultDesc_2');
  resultDesc_2.innerHTML = infoList_2[point].desc;
}

function calResult_2(){
  console.log(select_2);
  var result = select.indexOf(Math.max(...select_2));
  return result;
}


function addAnswer_2(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox_2');
  var answer = document.createElement('button'); //answer라는 변수에 버튼 만들
  answer.classList.add('answerList_2');
  answer.classList.add('my-3'); //마진 3
  answer.classList.add('py-3'); //패딩 3
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList_2');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true; //버튼 비활성화하
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      var target = quizList[qIdx].a[idx].type;
      for(let i = 0; i < target.length; i++){
        select_2[target[i]] += 1;
      }

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext_2(++qIdx);  //다음 질문으로 넘어가
    },450)
  }, false);
}
