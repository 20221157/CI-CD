/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
//
//
const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', () => {
	    // 다크 모드 토글
     document.body.classList.toggle('dark-mode');  // body에 'dark-mode' 클래스 추가/제거

         // 다크 모드 상태를 로컬 저장소에 저장
             if (document.body.classList.contains('dark-mode')) {
                     localStorage.setItem('theme', 'dark');
                             toggleButton.textContent = 'Light Mode';  // 버튼 텍스트 변경
                                 } else {
                                         localStorage.setItem('theme', 'light');
                                                 toggleButton.textContent = 'Dark Mode';  // 버튼 텍스트 변경
                                                     }
                                                   });

                                                     // 페이지 로드 시 저장된 테마를 확인하고 적용
                                                     window.addEventListener('load', () => {
                                                         const savedTheme = localStorage.getItem('theme');
                                                             if (savedTheme === 'dark') {
                                                                     document.body.classList.add('dark-mode');
                                                                             toggleButton.textContent = 'Light Mode';  // 저장된 테마가 다크 모드일 때 버튼 텍스트 변경
                                                                                 } else {
                                                                                         toggleButton.textContent = 'Dark Mode';  // 저장된 테마가 라이트 모드일 때 버튼 텍스트 변경
                                                                                             }
                                                                                             });
                                                                                             
