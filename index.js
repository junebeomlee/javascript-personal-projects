import {createStore} from "redux";

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const countElement = document.getElementById("count");

/** 바닐라로 구현된 방식 */

// let count = 0;
//
// function update() {
//     countElement.innerText = count;
// }
//
// function increase() {
//     count += 1;
//     update();
// }
//
// function decrease() {
//     count -= 1;
//     update();
// }
//
// increaseButton.addEventListener("click", increase);
// decreaseButton.addEventListener("click", decrease);

/** 리덕스로 구현된 방식 */

// 타입에 대한 선언
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// modifier 에서만 상태의 변경이 발생
const countModifier = (count = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return count + 1;
        case DECREMENT:
            return count - 1;
        default:
            return count;
    }
}

const countStore = createStore(countModifier);

increaseButton.addEventListener("click", () => countStore.dispatch({type: INCREMENT}));
decreaseButton.addEventListener("click", () => countStore.dispatch({type: DECREMENT}));

function update() {
    countElement.innerText = countStore.getState();
}

countStore.subscribe(update);

/**  */