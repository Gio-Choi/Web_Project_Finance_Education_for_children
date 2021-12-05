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
  const gift = document.getElementById("preference");
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

function goTosimul_8(){
  result.style.WebkitAnimation = "fadeOut 1s"; //1초간
  result.style.animation = "fadeOut 1s";
  setTimeout(() => {
    simul_8.style.WebkitAnimation = "fadeIn 1s";
    simul_8.style.animation = "fadeIn 1s";
    setTimeout(() => {
      result.style.display = "none";
      simul_8.style.display = "block"
    }, 450)});
}

function goTosimul_9(){simul_8.style.WebkitAnimation = "fadeOut 1s";simul_8.style.animation = "fadeOut 1s"; setTimeout(() => { simul_9.style.WebkitAnimation = "fadeIn 1s"; simul_9.style.animation = "fadeIn 1s"; setTimeout(() => { simul_8.style.display = "none"; simul_9.style.display = "block" }, 450)});}
function goTosimul_10(){simul_9.style.WebkitAnimation = "fadeOut 1s";simul_9.style.animation = "fadeOut 1s"; setTimeout(() => { simul_10.style.WebkitAnimation = "fadeIn 1s"; simul_10.style.animation = "fadeIn 1s"; setTimeout(() => { simul_9.style.display = "none"; simul_10.style.display = "block"}, 450)}); }
function goTosimul_11(){simul_10.style.WebkitAnimation = "fadeOut 1s";simul_10.style.animation = "fadeOut 1s"; setTimeout(() => { simul_11.style.WebkitAnimation = "fadeIn 1s"; simul_11.style.animation = "fadeIn 1s"; setTimeout(() => { simul_10.style.display = "none"; simul_11.style.display = "block"}, 450)}); }
function goTosimul_12(){simul_11.style.WebkitAnimation = "fadeOut 1s";simul_11.style.animation = "fadeOut 1s"; setTimeout(() => { simul_12.style.WebkitAnimation = "fadeIn 1s"; simul_12.style.animation = "fadeIn 1s"; setTimeout(() => { simul_11.style.display = "none"; simul_12.style.display = "block"}, 450)}); }
function goTosimul_13(){simul_12.style.WebkitAnimation = "fadeOut 1s";simul_12.style.animation = "fadeOut 1s"; setTimeout(() => { simul_13.style.WebkitAnimation = "fadeIn 1s"; simul_13.style.animation = "fadeIn 1s"; setTimeout(() => { simul_12.style.display = "none"; simul_13.style.display = "block"}, 450)}); }
function goTosimul_14(){simul_13.style.WebkitAnimation = "fadeOut 1s";simul_13.style.animation = "fadeOut 1s"; setTimeout(() => { simul_14.style.WebkitAnimation = "fadeIn 1s"; simul_14.style.animation = "fadeIn 1s"; setTimeout(() => { simul_13.style.display = "none"; simul_14.style.display = "block"}, 450)}); }
function goTosimul_15(){simul_14.style.WebkitAnimation = "fadeOut 1s";simul_14.style.animation = "fadeOut 1s"; setTimeout(() => { simul_15.style.WebkitAnimation = "fadeIn 1s"; simul_15.style.animation = "fadeIn 1s"; setTimeout(() => { simul_14.style.display = "none"; simul_15.style.display = "block"}, 450)}); }
function goTosimul_16(){simul_15.style.WebkitAnimation = "fadeOut 1s";simul_15.style.animation = "fadeOut 1s"; setTimeout(() => { simul_16.style.WebkitAnimation = "fadeIn 1s"; simul_16.style.animation = "fadeIn 1s"; setTimeout(() => { simul_15.style.display = "none"; simul_16.style.display = "block"}, 450)}); }
function goTosimul_17(){simul_16.style.WebkitAnimation = "fadeOut 1s";simul_16.style.animation = "fadeOut 1s"; setTimeout(() => { simul_17.style.WebkitAnimation = "fadeIn 1s"; simul_17.style.animation = "fadeIn 1s"; setTimeout(() => { simul_16.style.display = "none"; simul_17.style.display = "block"}, 450)}); }
function goTosimul_18(){simul_17.style.WebkitAnimation = "fadeOut 1s";simul_17.style.animation = "fadeOut 1s"; setTimeout(() => { simul_18.style.WebkitAnimation = "fadeIn 1s"; simul_18.style.animation = "fadeIn 1s"; setTimeout(() => { simul_17.style.display = "none"; simul_18.style.display = "block"}, 450)}); }
function goTosimul_19(){simul_18.style.WebkitAnimation = "fadeOut 1s";simul_18.style.animation = "fadeOut 1s"; setTimeout(() => { simul_19.style.WebkitAnimation = "fadeIn 1s"; simul_19.style.animation = "fadeIn 1s"; setTimeout(() => { simul_18.style.display = "none"; simul_19.style.display = "block"}, 450)}); }
function goTosimul_20(){simul_19.style.WebkitAnimation = "fadeOut 1s";simul_19.style.animation = "fadeOut 1s"; setTimeout(() => { simul_20.style.WebkitAnimation = "fadeIn 1s"; simul_20.style.animation = "fadeIn 1s"; setTimeout(() => { simul_19.style.display = "none"; simul_20.style.display = "block"}, 450)}); }
function goTosimul_21(){simul_20.style.WebkitAnimation = "fadeOut 1s";simul_20.style.animation = "fadeOut 1s"; setTimeout(() => { simul_21.style.WebkitAnimation = "fadeIn 1s"; simul_21.style.animation = "fadeIn 1s"; setTimeout(() => { simul_20.style.display = "none"; simul_21.style.display = "block"}, 450)}); }
function goTosimul_22(){simul_21.style.WebkitAnimation = "fadeOut 1s";simul_21.style.animation = "fadeOut 1s"; setTimeout(() => { simul_22.style.WebkitAnimation = "fadeIn 1s"; simul_22.style.animation = "fadeIn 1s"; setTimeout(() => { simul_21.style.display = "none"; simul_22.style.display = "block"}, 450)}); }
function goTosimul_23(){simul_22.style.WebkitAnimation = "fadeOut 1s";simul_22.style.animation = "fadeOut 1s"; setTimeout(() => { simul_23.style.WebkitAnimation = "fadeIn 1s"; simul_23.style.animation = "fadeIn 1s"; setTimeout(() => { simul_22.style.display = "none"; simul_23.style.display = "block"}, 450)}); }
function goTosimul_24(){simul_23.style.WebkitAnimation = "fadeOut 1s";simul_23.style.animation = "fadeOut 1s"; setTimeout(() => { simul_24.style.WebkitAnimation = "fadeIn 1s"; simul_24.style.animation = "fadeIn 1s"; setTimeout(() => { simul_23.style.display = "none"; simul_24.style.display = "block"}, 450)}); }
function goTosimul_25(){simul_24.style.WebkitAnimation = "fadeOut 1s";simul_24.style.animation = "fadeOut 1s"; setTimeout(() => { simul_25.style.WebkitAnimation = "fadeIn 1s"; simul_25.style.animation = "fadeIn 1s"; setTimeout(() => { simul_24.style.display = "none"; simul_25.style.display = "block"}, 450)}); }
function goTosimul_26(){simul_25.style.WebkitAnimation = "fadeOut 1s";simul_25.style.animation = "fadeOut 1s"; setTimeout(() => { simul_26.style.WebkitAnimation = "fadeIn 1s"; simul_26.style.animation = "fadeIn 1s"; setTimeout(() => { simul_25.style.display = "none"; simul_26.style.display = "block"}, 450)}); }
function goTosimul_27(){simul_26.style.WebkitAnimation = "fadeOut 1s";simul_26.style.animation = "fadeOut 1s"; setTimeout(() => { simul_27.style.WebkitAnimation = "fadeIn 1s"; simul_27.style.animation = "fadeIn 1s"; setTimeout(() => { simul_26.style.display = "none"; simul_27.style.display = "block"}, 450)}); }
function goTosimul_28(){simul_27.style.WebkitAnimation = "fadeOut 1s";simul_27.style.animation = "fadeOut 1s"; setTimeout(() => { simul_28.style.WebkitAnimation = "fadeIn 1s"; simul_28.style.animation = "fadeIn 1s"; setTimeout(() => { simul_27.style.display = "none"; simul_28.style.display = "block"}, 450)}); }
function goTosimul_29(){simul_28.style.WebkitAnimation = "fadeOut 1s";simul_28.style.animation = "fadeOut 1s"; setTimeout(() => { simul_29.style.WebkitAnimation = "fadeIn 1s"; simul_29.style.animation = "fadeIn 1s"; setTimeout(() => { simul_28.style.display = "none"; simul_29.style.display = "block"}, 450)}); }
function goTosimul_30(){simul_29.style.WebkitAnimation = "fadeOut 1s";simul_29.style.animation = "fadeOut 1s"; setTimeout(() => { simul_30.style.WebkitAnimation = "fadeIn 1s"; simul_30.style.animation = "fadeIn 1s"; setTimeout(() => { simul_29.style.display = "none"; simul_30.style.display = "block"}, 450)}); }
function goTosimul_31(){simul_30.style.WebkitAnimation = "fadeOut 1s";simul_30.style.animation = "fadeOut 1s"; setTimeout(() => { simul_31.style.WebkitAnimation = "fadeIn 1s"; simul_31.style.animation = "fadeIn 1s"; setTimeout(() => { simul_30.style.display = "none"; simul_31.style.display = "block"}, 450)}); }
function goTosimul_32(){simul_31.style.WebkitAnimation = "fadeOut 1s";simul_31.style.animation = "fadeOut 1s"; setTimeout(() => { simul_32.style.WebkitAnimation = "fadeIn 1s"; simul_32.style.animation = "fadeIn 1s"; setTimeout(() => { simul_31.style.display = "none"; simul_32.style.display = "block"}, 450)}); }
function goTosimul_33(){simul_32.style.WebkitAnimation = "fadeOut 1s";simul_32.style.animation = "fadeOut 1s"; setTimeout(() => { simul_33.style.WebkitAnimation = "fadeIn 1s"; simul_33.style.animation = "fadeIn 1s"; setTimeout(() => { simul_32.style.display = "none"; simul_33.style.display = "block"}, 450)}); }
function goTosimul_34(){simul_33.style.WebkitAnimation = "fadeOut 1s";simul_33.style.animation = "fadeOut 1s"; setTimeout(() => { simul_34.style.WebkitAnimation = "fadeIn 1s"; simul_34.style.animation = "fadeIn 1s"; setTimeout(() => { simul_33.style.display = "none"; simul_34.style.display = "block"}, 450)}); }
function goTosimul_35(){simul_34.style.WebkitAnimation = "fadeOut 1s";simul_34.style.animation = "fadeOut 1s"; setTimeout(() => { simul_35.style.WebkitAnimation = "fadeIn 1s"; simul_35.style.animation = "fadeIn 1s"; setTimeout(() => { simul_34.style.display = "none"; simul_35.style.display = "block"}, 450)}); }
function goTosimul_36(){simul_35.style.WebkitAnimation = "fadeOut 1s";simul_35.style.animation = "fadeOut 1s"; setTimeout(() => { simul_36.style.WebkitAnimation = "fadeIn 1s"; simul_36.style.animation = "fadeIn 1s"; setTimeout(() => { simul_35.style.display = "none"; simul_36.style.display = "block"}, 450)}); }
function goTosimul_37(){simul_36.style.WebkitAnimation = "fadeOut 1s";simul_36.style.animation = "fadeOut 1s"; setTimeout(() => { simul_37.style.WebkitAnimation = "fadeIn 1s"; simul_37.style.animation = "fadeIn 1s"; setTimeout(() => { simul_36.style.display = "none"; simul_37.style.display = "block"}, 450)}); }
function goTosimul_38(){simul_37.style.WebkitAnimation = "fadeOut 1s";simul_37.style.animation = "fadeOut 1s"; setTimeout(() => { simul_38.style.WebkitAnimation = "fadeIn 1s"; simul_38.style.animation = "fadeIn 1s"; setTimeout(() => { simul_37.style.display = "none"; simul_38.style.display = "block"}, 450)}); }
function goTosimul_39(){simul_38.style.WebkitAnimation = "fadeOut 1s";simul_38.style.animation = "fadeOut 1s"; setTimeout(() => { simul_39.style.WebkitAnimation = "fadeIn 1s"; simul_39.style.animation = "fadeIn 1s"; setTimeout(() => { simul_38.style.display = "none"; simul_39.style.display = "block"}, 450)}); }
function goTosimul_40(){simul_39.style.WebkitAnimation = "fadeOut 1s";simul_39.style.animation = "fadeOut 1s"; setTimeout(() => { simul_40.style.WebkitAnimation = "fadeIn 1s"; simul_40.style.animation = "fadeIn 1s"; setTimeout(() => { simul_39.style.display = "none"; simul_40.style.display = "block"}, 450)}); }
function goTosimul_41(){simul_40.style.WebkitAnimation = "fadeOut 1s";simul_40.style.animation = "fadeOut 1s"; setTimeout(() => { simul_41.style.WebkitAnimation = "fadeIn 1s"; simul_41.style.animation = "fadeIn 1s"; setTimeout(() => { simul_40.style.display = "none"; simul_41.style.display = "block"}, 450)}); }
function goTosimul_42(){simul_41.style.WebkitAnimation = "fadeOut 1s";simul_41.style.animation = "fadeOut 1s"; setTimeout(() => { simul_42.style.WebkitAnimation = "fadeIn 1s"; simul_42.style.animation = "fadeIn 1s"; setTimeout(() => { simul_41.style.display = "none"; simul_42.style.display = "block"}, 450)}); }
function goTosimul_43(){simul_42.style.WebkitAnimation = "fadeOut 1s";simul_42.style.animation = "fadeOut 1s"; setTimeout(() => { simul_43.style.WebkitAnimation = "fadeIn 1s"; simul_43.style.animation = "fadeIn 1s"; setTimeout(() => { simul_42.style.display = "none"; simul_43.style.display = "block"}, 450)}); }
function goTosimul_44(){simul_43.style.WebkitAnimation = "fadeOut 1s";simul_43.style.animation = "fadeOut 1s"; setTimeout(() => { simul_44.style.WebkitAnimation = "fadeIn 1s"; simul_44.style.animation = "fadeIn 1s"; setTimeout(() => { simul_43.style.display = "none"; simul_44.style.display = "block"}, 450)}); }
function goTosimul_45(){simul_44.style.WebkitAnimation = "fadeOut 1s";simul_44.style.animation = "fadeOut 1s"; setTimeout(() => { simul_45.style.WebkitAnimation = "fadeIn 1s"; simul_45.style.animation = "fadeIn 1s"; setTimeout(() => { simul_44.style.display = "none"; simul_45.style.display = "block"}, 450)}); }
function goTosimul_46(){simul_45.style.WebkitAnimation = "fadeOut 1s";simul_45.style.animation = "fadeOut 1s"; setTimeout(() => { simul_46.style.WebkitAnimation = "fadeIn 1s"; simul_46.style.animation = "fadeIn 1s"; setTimeout(() => { simul_45.style.display = "none"; simul_46.style.display = "block"}, 450)}); }
function goTosimul_47(){simul_46.style.WebkitAnimation = "fadeOut 1s";simul_46.style.animation = "fadeOut 1s"; setTimeout(() => { simul_47.style.WebkitAnimation = "fadeIn 1s"; simul_47.style.animation = "fadeIn 1s"; setTimeout(() => { simul_46.style.display = "none"; simul_47.style.display = "block"}, 450)}); }
function goTosimul_48(){simul_47.style.WebkitAnimation = "fadeOut 1s";simul_47.style.animation = "fadeOut 1s"; setTimeout(() => { simul_48.style.WebkitAnimation = "fadeIn 1s"; simul_48.style.animation = "fadeIn 1s"; setTimeout(() => { simul_47.style.display = "none"; simul_48.style.display = "block"}, 450)}); }
function goTosimul_49(){simul_48.style.WebkitAnimation = "fadeOut 1s";simul_48.style.animation = "fadeOut 1s"; setTimeout(() => { simul_49.style.WebkitAnimation = "fadeIn 1s"; simul_49.style.animation = "fadeIn 1s"; setTimeout(() => { simul_48.style.display = "none"; simul_49.style.display = "block"}, 450)}); }
function goTosimul_50(){simul_49.style.WebkitAnimation = "fadeOut 1s";simul_49.style.animation = "fadeOut 1s"; setTimeout(() => { simul_50.style.WebkitAnimation = "fadeIn 1s"; simul_50.style.animation = "fadeIn 1s"; setTimeout(() => { simul_49.style.display = "none"; simul_50.style.display = "block"}, 450)}); }
function goTosimul_51(){simul_50.style.WebkitAnimation = "fadeOut 1s";simul_50.style.animation = "fadeOut 1s"; setTimeout(() => { simul_51.style.WebkitAnimation = "fadeIn 1s"; simul_51.style.animation = "fadeIn 1s"; setTimeout(() => { simul_50.style.display = "none"; simul_51.style.display = "block"}, 450)}); }
function goTosimul_52(){simul_51.style.WebkitAnimation = "fadeOut 1s";simul_51.style.animation = "fadeOut 1s"; setTimeout(() => { simul_52.style.WebkitAnimation = "fadeIn 1s"; simul_52.style.animation = "fadeIn 1s"; setTimeout(() => { simul_51.style.display = "none"; simul_52.style.display = "block"}, 450)}); }
function goTosimul_53(){simul_52.style.WebkitAnimation = "fadeOut 1s";simul_52.style.animation = "fadeOut 1s"; setTimeout(() => { simul_53.style.WebkitAnimation = "fadeIn 1s"; simul_53.style.animation = "fadeIn 1s"; setTimeout(() => { simul_52.style.display = "none"; simul_53.style.display = "block"}, 450)}); }
function goTosimul_54(){simul_53.style.WebkitAnimation = "fadeOut 1s";simul_53.style.animation = "fadeOut 1s"; setTimeout(() => { simul_54.style.WebkitAnimation = "fadeIn 1s"; simul_54.style.animation = "fadeIn 1s"; setTimeout(() => { simul_53.style.display = "none"; simul_54.style.display = "block"}, 450)}); }
function goTosimul_55(){simul_54.style.WebkitAnimation = "fadeOut 1s";simul_54.style.animation = "fadeOut 1s"; setTimeout(() => { simul_55.style.WebkitAnimation = "fadeIn 1s"; simul_55.style.animation = "fadeIn 1s"; setTimeout(() => { simul_54.style.display = "none"; simul_55.style.display = "block"}, 450)}); }
function goTosimul_56(){simul_55.style.WebkitAnimation = "fadeOut 1s";simul_55.style.animation = "fadeOut 1s"; setTimeout(() => { simul_56.style.WebkitAnimation = "fadeIn 1s"; simul_56.style.animation = "fadeIn 1s"; setTimeout(() => { simul_55.style.display = "none"; simul_56.style.display = "block"}, 450)}); }
function goTosimul_57(){simul_56.style.WebkitAnimation = "fadeOut 1s";simul_56.style.animation = "fadeOut 1s"; setTimeout(() => { simul_57.style.WebkitAnimation = "fadeIn 1s"; simul_57.style.animation = "fadeIn 1s"; setTimeout(() => { simul_56.style.display = "none"; simul_57.style.display = "block"}, 450)}); }
function goTosimul_58(){simul_57.style.WebkitAnimation = "fadeOut 1s";simul_57.style.animation = "fadeOut 1s"; setTimeout(() => { simul_58.style.WebkitAnimation = "fadeIn 1s"; simul_58.style.animation = "fadeIn 1s"; setTimeout(() => { simul_57.style.display = "none"; simul_58.style.display = "block"}, 450)}); }
function goTosimul_59(){simul_58.style.WebkitAnimation = "fadeOut 1s";simul_58.style.animation = "fadeOut 1s"; setTimeout(() => { simul_59.style.WebkitAnimation = "fadeIn 1s"; simul_59.style.animation = "fadeIn 1s"; setTimeout(() => { simul_58.style.display = "none"; simul_59.style.display = "block"}, 450)}); }
function goTosimul_60(){simul_59.style.WebkitAnimation = "fadeOut 1s";simul_59.style.animation = "fadeOut 1s"; setTimeout(() => { simul_60.style.WebkitAnimation = "fadeIn 1s"; simul_60.style.animation = "fadeIn 1s"; setTimeout(() => { simul_59.style.display = "none"; simul_60.style.display = "block"}, 450)}); }
function goTosimul_61(){simul_60.style.WebkitAnimation = "fadeOut 1s";simul_60.style.animation = "fadeOut 1s"; setTimeout(() => { simul_61.style.WebkitAnimation = "fadeIn 1s"; simul_61.style.animation = "fadeIn 1s"; setTimeout(() => { simul_60.style.display = "none"; simul_61.style.display = "block"}, 450)}); }


function goToquiz_main(){
  simul_61.style.WebkitAnimation = "fadeOut 1s"; //1초간
  simul_61.style.animation = "fadeOut 1s";
  setTimeout(() => {
    quiz_main.style.WebkitAnimation = "fadeIn 1s";
    quiz_main.style.animation = "fadeIn 1s";
    setTimeout(() => {
      simul_61.style.display = "none";
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
