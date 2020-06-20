var reviewStart = document.getElementById('reviewButton')
var reviewComplete = document.getElementById('reveiwComplete')
var copyClipboard = document.getElementById('copyClipboard')

// <!-- 리뷰작성 바로가기 버튼 클릭 -->
reviewStart.addEventListener("click",moveToReview)
function moveToReview(){
  location.href="#reviewTitle"
}
// <!-- 클립보드 복사 완료 alert -->
copyClipboard.addEventListener("click",clipboard)
function clipboard(){
    alert('링크주소가 복사되었습니다.');
}
// <!-- 리뷰 작성 완료 alert -->
reviewComplete.addEventListener("click",completeMessage)
function completeMessage(){
    alert('리뷰 작성이 완료되었습니다. 이벤트 응모 완료!');
}
