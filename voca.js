
const titleArry = ["번호", "단어", "발음", "뜻"];
const wordArry=[
      ["abandon","ǝbǽndǝn","포기하다"],
			["abandoned","ə|bӕndənd","버림받은"],
			["abbreviated","əbrí:vièitid","축약된"],
			["ability","ə|bɪləti","능력"],
			["abnormal","ӕb|nɔ:rml","비정상적인"],
			["abolish","ə|bɑ:lɪʃ","폐지하다"],
			["about","ə|baʊt","-에 관하여"], 
			["concerning","kən|s3:rnɪŋ","-에 관하여"],
			["regarding","rɪ|gɑ:rdɪŋ","-에 관하여"],
			["abroad","ə|brɔ:d","해외로"],
			["abandon","ǝbǽndǝn","포기하다"],
			["abandoned","ə|bӕndənd","버림받은"],
			["abbreviated","əbrí:vièitid","축약된"],
			["ability","ə|bɪləti","능력"],
			["abnormal","ӕb|nɔ:rml","비정상적인"],
			["abolish","ə|bɑ:lɪʃ","폐지하다"],
			["about","ə|baʊt","-에 관하여"], 
			["concerning","kən|s3:rnɪŋ","-에 관하여"],
			["regarding","rɪ|gɑ:rdɪŋ","-에 관하여"],
			["abroad","ə|brɔ:d","해외로"],
			["abandon","ǝbǽndǝn","포기하다"],
			["abandoned","ə|bӕndənd","버림받은"],
			["abbreviated","əbrí:vièitid","축약된"],
			["ability","ə|bɪləti","능력"],
			["abnormal","ӕb|nɔ:rml","비정상적인"],
			["abolish","ə|bɑ:lɪʃ","폐지하다"],
			["about","ə|baʊt","-에 관하여"], 
			["concerning","kən|s3:rnɪŋ","-에 관하여"],
			["regarding","rɪ|gɑ:rdɪŋ","-에 관하여"],
			["abroad","ə|brɔ:d","해외로"],
			["abandon","ǝbǽndǝn","포기하다"],
			["abandoned","ə|bӕndənd","버림받은"],
			["abbreviated","əbrí:vièitid","축약된"],
			["ability","ə|bɪləti","능력"],
			["abnormal","ӕb|nɔ:rml","비정상적인"],
			["abolish","ə|bɑ:lɪʃ","폐지하다"],
			["about","ə|baʊt","-에 관하여"], 
			["concerning","kən|s3:rnɪŋ","-에 관하여"],
			["regarding","rɪ|gɑ:rdɪŋ","-에 관하여"],
			["abroad","ə|brɔ:d","해외로"],
			["abandon","ǝbǽndǝn","포기하다"],
			["abandoned","ə|bӕndənd","버림받은"],
			["abbreviated","əbrí:vièitid","축약된"],
			["ability","ə|bɪləti","능력"],
			["abnormal","ӕb|nɔ:rml","비정상적인"],
			["abolish","ə|bɑ:lɪʃ","폐지하다"],
			["about","ə|baʊt","-에 관하여"], 
			["concerning","kən|s3:rnɪŋ","-에 관하여"],
			["regarding","rɪ|gɑ:rdɪŋ","-에 관하여"],
			["abroad","ə|brɔ:d","해외로"],
			["abandon","ǝbǽndǝn","포기하다"],
			["abandoned","ə|bӕndənd","버림받은"],
			["abbreviated","əbrí:vièitid","축약된"],
			["ability","ə|bɪləti","능력"],
			["abnormal","ӕb|nɔ:rml","비정상적인"],
			["abolish","ə|bɑ:lɪʃ","폐지하다"],
			["about","ə|baʊt","-에 관하여"], 
			["concerning","kən|s3:rnɪŋ","-에 관하여"],
			["regarding","rɪ|gɑ:rdɪŋ","-에 관하여"],
			["abroad","ə|brɔ:d","해외로"],
			["abandon","ǝbǽndǝn","포기하다"],
			["abandoned","ə|bӕndənd","버림받은"],
			["abbreviated","əbrí:vièitid","축약된"],
			["ability","ə|bɪləti","능력"],
			["abnormal","ӕb|nɔ:rml","비정상적인"],
			["abolish","ə|bɑ:lɪʃ","폐지하다"],
			["about","ə|baʊt","-에 관하여"], 
			["concerning","kən|s3:rnɪŋ","-에 관하여"],
			["regarding","rɪ|gɑ:rdɪŋ","-에 관하여"],
			["abroad","ə|brɔ:d","해외로"],
			["abandon","ǝbǽndǝn","포기하다"],
			["abandoned","ə|bӕndənd","버림받은"],
			["abbreviated","əbrí:vièitid","축약된"],
			["ability","ə|bɪləti","능력"],
			["abnormal","ӕb|nɔ:rml","비정상적인"],
			["abolish","ə|bɑ:lɪʃ","폐지하다"],
			["about","ə|baʊt","-에 관하여"], 
			["concerning","kən|s3:rnɪŋ","-에 관하여"],
			["regarding","rɪ|gɑ:rdɪŋ","-에 관하여"],
			["abroad","ə|brɔ:d","해외로"],
			["abandon","ǝbǽndǝn","포기하다"],
			["abandoned","ə|bӕndənd","버림받은"],
			["abbreviated","əbrí:vièitid","축약된"],
			["ability","ə|bɪləti","능력"],
			["abnormal","ӕb|nɔ:rml","비정상적인"],
			["abolish","ə|bɑ:lɪʃ","폐지하다"],
			["about","ə|baʊt","-에 관하여"], 
			["concerning","kən|s3:rnɪŋ","-에 관하여"],
			["regarding","rɪ|gɑ:rdɪŋ","-에 관하여"],
			["abroad","ə|brɔ:d","해외로"],
			["abandon","ǝbǽndǝn","포기하다"],
			["abandoned","ə|bӕndənd","버림받은"],
			["abbreviated","əbrí:vièitid","축약된"],
			["ability","ə|bɪləti","능력"],
			["abnormal","ӕb|nɔ:rml","비정상적인"],
			["abolish","ə|bɑ:lɪʃ","폐지하다"],
			["about","ə|baʊt","-에 관하여"], 
			["concerning","kən|s3:rnɪŋ","-에 관하여"],
			["regarding","rɪ|gɑ:rdɪŋ","-에 관하여"],
			["abroad","ə|brɔ:d","해외로"],
		];
//--------------------
let vocaStartNum = 1;
let vocaEndNum = 2;
let currentPage = 1;       // 현재 보고 있는 페이지
const itemsPerPage = 5;    // 한페이지 5
let vocaSelStartNumEl; // 시작단어 인덱스
let vocaSelEndNumEl;   // 마지막 단어 인덱스
let leftColumnEl;      // 순번
let rightColumnEl;     // 단어
let currentStartIndex = 0; 
let currentEndIndex = 0; 
let prevPageBtn, nextPageBtn, currentPageDisplayEl, totalPagesDisplayEl;
let firstPageBtn, lastPageBtn, pageNumbersContainer, totalItemsDisplayEl;
let correctSoundEffect;
let incorrectSoundEffect;
//-------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  const inputs = Array.from(document.querySelectorAll('.cell-input, #cell-input, .cell-input1'));
  if (inputs.length > 0) {
    inputs[0].focus();
  }
  inputs.forEach((input, idx) => {
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (inputs[idx + 1]) {
          inputs[idx + 1].focus();
        }
      }
    });
  });

  vocaSelStartNumEl = document.querySelector('#vocaSel .stend1');
  vocaSelEndNumEl = document.querySelector('#vocaSel .stend2');
  leftColumnEl = document.querySelector('.left-column');
  rightColumnEl = document.getElementById('right-column');
  
  prevPageBtn = document.getElementById('prevPageBtn');
  nextPageBtn = document.getElementById('nextPageBtn');
  currentPageDisplayEl = document.getElementById('currentPageDisplay');
  totalPagesDisplayEl = document.getElementById('totalPagesDisplay');
  
  firstPageBtn = document.getElementById('firstPageBtn');
  lastPageBtn = document.getElementById('lastPageBtn');
  pageNumbersContainer = document.getElementById('pageNumbersContainer');
  totalItemsDisplayEl = document.getElementById('totalItemsDisplay'); 
  correctSoundEffect = document.getElementById('correctSound');
  incorrectSoundEffect = document.getElementById('incorrectSound');


  if (prevPageBtn) prevPageBtn.addEventListener('click', goToPrevPage);
  if (nextPageBtn) nextPageBtn.addEventListener('click', goToNextPage);
  if (firstPageBtn) firstPageBtn.addEventListener('click', goToFirstPage);
  if (lastPageBtn) lastPageBtn.addEventListener('click', goToLastPage); 


  if (typeof wordArry !== 'undefined' && wordArry.length > 0) {
    let initialVocaStart = Math.max(1, vocaStartNum); 
		let initialVocaEnd = Math.max(initialVocaStart, vocaEndNum); 
    
    currentStartIndex = Math.max(0, Math.min(initialVocaStart - 1, wordArry.length - 1));
    currentEndIndex = Math.max(currentStartIndex, Math.min(initialVocaEnd - 1, wordArry.length - 1));
    
    vocaStartNum = currentStartIndex + 1;
    vocaEndNum = currentEndIndex + 1;

  } else {
    console.error("단어 배열(wordArry)이 비어있거나 정의되지 않았습니다! 기본값으로 설정합니다.");
    vocaStartNum = 1;
    vocaEndNum = 1; 
    currentStartIndex = 0; 
    currentEndIndex = 0;
  }

  updateNumberDisplay(); 
  displayWordRange(); 
});
//------------------------------------
function sup1() {
  if (vocaStartNum < vocaEndNum) { 
    vocaStartNum++;
  }
	currentPage = 1;
	updateNumberDisplay();
	displayWordRange();
}

function sup10() {
  vocaStartNum = Math.min(vocaStartNum + 10, vocaEndNum); 
	currentPage = 1;
	updateNumberDisplay();
	displayWordRange();
}

function sdown1() {
  if (vocaStartNum > 1) { 
    vocaStartNum--;
  }
	currentPage = 1;
	updateNumberDisplay();
	displayWordRange();
}

function sdown10() {
  vocaStartNum = Math.max(1, vocaStartNum - 10);
	currentPage = 1;
	updateNumberDisplay();
	displayWordRange();
}

function lup1() {
  vocaEndNum++;
	currentPage = 1;
	updateNumberDisplay();
	displayWordRange();
}


function lup10() {
  vocaEndNum += 10;
	currentPage = 1;
	updateNumberDisplay();
	displayWordRange();
}

function ldown1() {
  if (vocaEndNum > vocaStartNum) {
    vocaEndNum--;
  }
	currentPage = 1;
	updateNumberDisplay();
	displayWordRange();
}

function ldown10() {
  vocaEndNum = Math.max(vocaStartNum, vocaEndNum - 10); 
	currentPage = 1;
	updateNumberDisplay();
	displayWordRange();
}
//----------------------------------------------
function updateNumberDisplay() {
  if (vocaSelStartNumEl) {
    vocaSelStartNumEl.textContent = vocaStartNum;
  }
  if (vocaSelEndNumEl) {
    vocaSelEndNumEl.textContent = vocaEndNum;
  }
}
//-----------------------------------------
// voca.js 파일의 displayWordRange 함수 수정

function displayWordRange() {
  // ... (함수 시작 부분, DOM 요소 체크, innerHTML 초기화, 페이지 범위 계산 등은 이전과 동일) ...
  if (!leftColumnEl || !rightColumnEl) { /* ... */ return; }
  leftColumnEl.innerHTML = ''; rightColumnEl.innerHTML = '';
  const overallStartIndex0 = vocaStartNum - 1; /* ... 범위 계산 ... */
  const overallValidStartIndex = Math.max(0, overallStartIndex0); 
  const overallValidEndIndex = Math.min(wordArry.length - 1, Math.max(overallStartIndex0, vocaEndNum - 1)); // vocaEndNum 사용
  const pageStartIndex0 = overallValidStartIndex + (currentPage - 1) * itemsPerPage;
  let pageEndIndex0 = pageStartIndex0 + itemsPerPage - 1;
  pageEndIndex0 = Math.min(pageEndIndex0, overallValidEndIndex);

  const totalItemsInOverallRange = (overallValidEndIndex - overallValidStartIndex + 1);
  const totalPages = (wordArry.length === 0 || totalItemsInOverallRange <= 0) ? 0 : Math.ceil(totalItemsInOverallRange / itemsPerPage);
  if (typeof updatePaginationDisplay === "function") { updatePaginationDisplay(totalPages, totalItemsInOverallRange); }
  if (wordArry.length === 0 || overallValidStartIndex > overallValidEndIndex || pageStartIndex0 > pageEndIndex0 || pageStartIndex0 > overallValidEndIndex) {
    rightColumnEl.textContent = "표시할 단어가 없습니다.";
    if (typeof setupInputNavigation === 'function') setupInputNavigation();
    return;
  }
  // --- 여기까지는 이전과 거의 동일 ---


  for (let i = pageStartIndex0; i <= pageEndIndex0; i++) {
    if (i >= wordArry.length) break;
    const wordData = wordArry[i];
    const englishWord = wordData[0]; // 현재 단어의 영어 정답 (예: "abandon")

    // --- 왼쪽 컬럼 번호 추가 (기존과 동일) ---
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('number-item'); 
    numberDiv.textContent = i + 1; 
    leftColumnEl.appendChild(numberDiv);

    // --- 오른쪽 컬럼 단어 정보 행 추가 (기존과 동일) ---
    const wordRowDiv = document.createElement('div');
    wordRowDiv.classList.add('row', 'row-1');
    // ... (voca1Div, voca2Div, voca3Div 생성 및 추가는 기존과 동일) ...
    const voca1Div = document.createElement('div'); voca1Div.classList.add('voca1'); voca1Div.textContent = wordData[0]; wordRowDiv.appendChild(voca1Div);
    const voca2Div = document.createElement('div'); voca2Div.classList.add('voca2'); voca2Div.textContent = wordData[1]; wordRowDiv.appendChild(voca2Div);
    const voca3Div = document.createElement('div'); voca3Div.classList.add('voca3'); voca3Div.textContent = wordData[2]; wordRowDiv.appendChild(voca3Div);
    rightColumnEl.appendChild(wordRowDiv);


    // --- ★★★ 입력 필드 행 생성 및 이벤트 연결 (새로운 로직) ★★★ ---
    const wordInputElementsForThisBlock = []; // 이 단어 세트의 단어 입력칸들
    let scoreDisplayElementForThisBlock;      // 이 단어 세트의 점수 표시칸

    // 첫 번째 입력 행 (.row-2, 4칸)
    const inputRowDiv1 = document.createElement('div');
    inputRowDiv1.classList.add('row', 'row-2');
    for (let j = 0; j < 4; j++) {
      const inputEl = createWordInput(englishWord); // 전체 단어 입력용 input 생성
      wordInputElementsForThisBlock.push(inputEl);
      const cellDiv = document.createElement('div'); cellDiv.classList.add('cell');
      cellDiv.appendChild(inputEl); inputRowDiv1.appendChild(cellDiv);
    }
    rightColumnEl.appendChild(inputRowDiv1);

    // 두 번째 입력 행 (.row-2, 4칸)
    const inputRowDiv2 = document.createElement('div');
    inputRowDiv2.classList.add('row', 'row-2');
    for (let j = 0; j < 4; j++) {
      const inputEl = createWordInput(englishWord);
      wordInputElementsForThisBlock.push(inputEl);
      const cellDiv = document.createElement('div'); cellDiv.classList.add('cell');
      cellDiv.appendChild(inputEl); inputRowDiv2.appendChild(cellDiv);
    }
    rightColumnEl.appendChild(inputRowDiv2);

    // 세 번째 입력 행 (.row-3, 3칸)
    const inputRowDiv3 = document.createElement('div');
    inputRowDiv3.classList.add('row', 'row-3');
    for (let k = 0; k < 3; k++) { 
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      if (k < 2) { // 처음 2칸은 단어 입력칸
        const inputEl = createWordInput(englishWord);
        wordInputElementsForThisBlock.push(inputEl);
        cellDiv.appendChild(inputEl);
      } else { // 마지막 칸은 점수 표시칸
        scoreDisplayElementForThisBlock = document.createElement('input');
        scoreDisplayElementForThisBlock.setAttribute('type', 'text');
        scoreDisplayElementForThisBlock.classList.add('cell-input1', 'score-display');
        scoreDisplayElementForThisBlock.readOnly = true;
        scoreDisplayElementForThisBlock.value = "0 / 100"; // 총 10칸 * 10점 = 100점 만점
        cellDiv.appendChild(scoreDisplayElementForThisBlock);
      }
      inputRowDiv3.appendChild(cellDiv);
    }
    rightColumnEl.appendChild(inputRowDiv3);

    // 생성된 10개의 단어 입력칸들에 대해 이벤트 리스너 설정
    wordInputElementsForThisBlock.forEach(inputEl => {
      // 'input' 이벤트는 입력할 때마다, 'change'나 'blur'는 포커스 잃을 때 발생
      inputEl.addEventListener('blur', function() { 
        evaluateWordRepetitionAttempt(wordInputElementsForThisBlock, scoreDisplayElementForThisBlock);
      });
    });
  } // end of for loop (각 단어에 대한 처리 끝)

  if (typeof setupInputNavigation === 'function') {
    setupInputNavigation();
  }
}
//-------------------------------------------------------
function createWordInput(fullCorrectWord) {
  const inputEl = document.createElement('input');
  inputEl.setAttribute('type', 'text');
  inputEl.classList.add('cell-input'); 
  inputEl.dataset.correctWord = fullCorrectWord.toLowerCase(); 
  return inputEl;
}
//----------------------------------------------------------
// voca.js 에 새로 추가 (기존 evaluateWordAttempt 함수가 있다면 이걸로 대체)

function evaluateWordRepetitionAttempt(wordInputsInBlock, scoreDisplayInput) {
  let totalScoreForBlock = 0;
  const expectedWord = wordInputsInBlock[0].dataset.correctWord; // 아무 입력칸에서나 정답 가져오기 (다 동일)

  wordInputsInBlock.forEach(inputEl => {
    const typedValue = inputEl.value.trim().toLowerCase();
    
    if (typedValue === expectedWord) { // 전체 단어와 일치하는지 확인
      inputEl.style.borderColor = 'green';
      inputEl.style.backgroundColor = '#e6ffe6';
      totalScoreForBlock += 10; // 맞으면 10점
      // 이 칸에 대한 '정답' 효과음은 여기서 개별적으로 낼 수도 있고,
      // 모든 칸이 다 채워졌을 때 한 번에 낼 수도 있습니다.
    } else if (typedValue !== "") { // 입력했는데 틀린 경우
      inputEl.style.borderColor = 'red';
      inputEl.style.backgroundColor = '#ffe6e6';
      if (incorrectSoundEffect && incorrectSoundEffect.readyState >= 2 && !incorrectSoundEffect.paused) {
        // 이미 재생 중이면 중지하고 처음부터 (또는 다른 효과음 정책)
        incorrectSoundEffect.pause();
        incorrectSoundEffect.currentTime = 0;
      }
      if (incorrectSoundEffect && incorrectSoundEffect.readyState >= 2) incorrectSoundEffect.play();
    } else { // 빈칸인 경우
      inputEl.style.borderColor = ''; // 기본 스타일로
      inputEl.style.backgroundColor = '';
    }
  });

  scoreDisplayInput.value = totalScoreForBlock + " / 100";

  // 모든 칸(10개)이 정확히 입력되었는지 확인 후 전체 정답 효과음 (선택적)
  if (totalScoreForBlock === 100) {
    if (correctSoundEffect && correctSoundEffect.readyState >= 2 && !correctSoundEffect.paused) {
        correctSoundEffect.pause();
        correctSoundEffect.currentTime = 0;
    }
    if (correctSoundEffect && correctSoundEffect.readyState >= 2) correctSoundEffect.play();
    // 모든 입력칸 비활성화 등 추가 동작 가능
    wordInputsInBlock.forEach(input => input.disabled = true);
  }
}
//------------------------------------------------------------
function goToPage(pageNumber) {
  const overallStartIndex0 = vocaStartNum - 1;
  const overallEndIndex0 = vocaEndNum - 1;
  const overallValidStartIndex = Math.max(0, overallStartIndex0);
  const overallValidEndIndex = Math.min(wordArry.length - 1, Math.max(overallStartIndex0, overallEndIndex0));
  const totalItemsInOverallRange = (overallValidEndIndex - overallValidStartIndex + 1);
  const totalPages = (wordArry.length === 0 || totalItemsInOverallRange <= 0) ? 0 : Math.ceil(totalItemsInOverallRange / itemsPerPage);

  if (pageNumber >= 1 && pageNumber <= totalPages) {
    currentPage = pageNumber;
    displayWordRange();
  } else {
    console.warn("goToPage: 요청된 페이지 번호가 유효 범위를 벗어났습니다:", pageNumber, "총 페이지:", totalPages);
  }
}
///--------------------------------------
function updatePaginationDisplay(totalPages, totalItems) {
  if (!currentPageDisplayEl || !totalPagesDisplayEl || !prevPageBtn || !nextPageBtn ||
      !firstPageBtn || !lastPageBtn || !pageNumbersContainer || !totalItemsDisplayEl) {
    return;
  }

  currentPageDisplayEl.textContent = totalPages === 0 ? 0 : currentPage;
  totalPagesDisplayEl.textContent = totalPages;
  totalItemsDisplayEl.textContent = totalItems;

  firstPageBtn.style.display = (currentPage <= 1 || totalPages === 0) ? 'none' : 'inline-block';
  prevPageBtn.disabled = (currentPage <= 1 || totalPages === 0);

  nextPageBtn.disabled = (currentPage >= totalPages || totalPages === 0);
  lastPageBtn.style.display = (currentPage >= totalPages || totalPages === 0) ? 'none' : 'inline-block';
  
  pageNumbersContainer.innerHTML = ''; 

  if (totalPages === 0) return; 

  const MAX_VISIBLE_PAGE_BUTTONS = 7;
  let startPageNum = 1;
  let endPageNum = totalPages;

  if (totalPages > MAX_VISIBLE_PAGE_BUTTONS) {
    let half = Math.floor(MAX_VISIBLE_PAGE_BUTTONS / 2);
    startPageNum = currentPage - half;
    endPageNum = currentPage + half - (MAX_VISIBLE_PAGE_BUTTONS % 2 === 0 ? 1 : 0) ; // 짝수면 하나 덜

    if (startPageNum < 1) {
      startPageNum = 1;
      endPageNum = MAX_VISIBLE_PAGE_BUTTONS;
    }
    if (endPageNum > totalPages) {
      endPageNum = totalPages;
      startPageNum = totalPages - MAX_VISIBLE_PAGE_BUTTONS + 1;
      if (startPageNum < 1) startPageNum = 1; 
    }
  }

  for (let i = startPageNum; i <= endPageNum; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.style.margin = '0 3px'; 
    pageButton.style.padding = '5px 10px';
    pageButton.style.border = '1px solid #ccc';
    pageButton.style.background = '#fff';
    pageButton.setAttribute('aria-label', i + '페이지로 이동');


    if (i === currentPage) {
      pageButton.disabled = true; 
      pageButton.style.fontWeight = 'bold';
      pageButton.style.borderColor = '#333';
      pageButton.style.background = '#eee';
    } else {
      pageButton.style.cursor = 'pointer';
      pageButton.onclick = function() { goToPage(i); };
    }
    pageNumbersContainer.appendChild(pageButton);
  }

  if (startPageNum > 1 && totalPages > MAX_VISIBLE_PAGE_BUTTONS) {
      const ellipsisStart = document.createElement('span');
      ellipsisStart.textContent = '...';
      ellipsisStart.style.margin = '0 5px';
      pageNumbersContainer.insertBefore(ellipsisStart, pageNumbersContainer.firstChild);
      
      const firstPageShortcut = document.createElement('button');
      firstPageShortcut.textContent = '1';
      firstPageShortcut.style.margin = '0 3px'; firstPageShortcut.style.padding = '5px 10px'; firstPageShortcut.style.border = '1px solid #ccc'; firstPageShortcut.style.background = '#fff'; firstPageShortcut.style.cursor = 'pointer';
      firstPageShortcut.onclick = function() { goToPage(1); };
      pageNumbersContainer.insertBefore(firstPageShortcut, ellipsisStart);

  }
  
  if (endPageNum < totalPages && totalPages > MAX_VISIBLE_PAGE_BUTTONS) {
      const ellipsisEnd = document.createElement('span');
      ellipsisEnd.textContent = '...';
      ellipsisEnd.style.margin = '0 5px';
      pageNumbersContainer.appendChild(ellipsisEnd);

      const lastPageShortcut = document.createElement('button');
      lastPageShortcut.textContent = totalPages;
      lastPageShortcut.style.margin = '0 3px'; lastPageShortcut.style.padding = '5px 10px'; lastPageShortcut.style.border = '1px solid #ccc'; lastPageShortcut.style.background = '#fff'; lastPageShortcut.style.cursor = 'pointer';
      lastPageShortcut.onclick = function() { goToPage(totalPages); };
      pageNumbersContainer.appendChild(lastPageShortcut);
  }
}

function goToPrevPage() {
  goToPage(currentPage - 1);
}

function goToNextPage() {
  goToPage(currentPage + 1);
}

function goToFirstPage() {
  goToPage(1);
}

function goToLastPage() {
  const overallStartIndex0 = vocaStartNum - 1;
  const overallEndIndex0 = vocaEndNum - 1;
  const overallValidStartIndex = Math.max(0, overallStartIndex0);
  const overallValidEndIndex = Math.min(wordArry.length - 1, Math.max(overallStartIndex0, overallEndIndex0));
  const totalItemsInOverallRange = (overallValidEndIndex - overallValidStartIndex + 1);
  const totalPages = (wordArry.length === 0 || totalItemsInOverallRange <=0) ? 0 : Math.ceil(totalItemsInOverallRange / itemsPerPage);
  
  if (totalPages > 0) {
      goToPage(totalPages);
  }
}