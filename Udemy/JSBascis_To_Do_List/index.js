import "./styles.css";

let val; //테스트용

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection_item:first-child"); //첫번째만 선택

//get child nodes  --> 얘는 노드 타입 전체를 보여줌! []로 지정할 수 도 있음
// val = listItem.childNodes;
// val = listItem.childNodes[0].nodeName;
// val = listItem.childNodes[0].nodeType;
// --> 숫자별 노드 타입!!
// 1 - Element 혹은 HTML 요소 말함, 2- attribute(deprecated 3- text node 8-comment 9-Document itself 10-doctype)
//html 엘리먼트 가져올 때는 .children 씀 0---> .children[3].children 이렇게 중첩하거나 .children[3].children.id ="test-link" 도 가능
val = listItem.children[0].textContent = "hello";
//li의 첫번쨰 자식[0]에 글씨써주기
val = list.childElementCount; // vs .firstchild --> 얘는  html 요소가 아니라  첫번재 노드 요쇼를 가져옴!
console.log(val);
