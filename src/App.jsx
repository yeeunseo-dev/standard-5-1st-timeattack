import { useState } from "react";

function calc(input) {
  const initial = 0;

  const add = () => {};
  const subtract = () => {};

  const remove = input("");
  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" placeholder="숫자를 입력해주세요" value={input} />{" "}
        만큼을 <button value={add}>더할게요</button>{" "}
        <button value={subtract}>뺄게요</button>
        <button onClick={remove}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>0</p>
      </div>
    </div>
  );
}
