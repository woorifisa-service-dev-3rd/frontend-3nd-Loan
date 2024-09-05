// 모든 케이스를 숨기는 함수
function hideAllCases() {
  document.querySelectorAll('.demo-case').forEach(function (element) {
    element.style.display = 'none'; // 모든 데모 케이스 숨김
  });
}

// 특정 케이스를 표시하는 함수
function showCase(caseId) {
  hideAllCases(); // 다른 케이스 숨김
  var element = document.getElementById(caseId); // 특정 케이스 선택
  if (element) {
    element.style.display = 'block'; // 선택된 케이스 표시
  }
}

// 페이지가 로드된 후 기본적으로 첫 번째 케이스를 표시
document.addEventListener('DOMContentLoaded', function() {
  showCase('reflow-bad');
});
