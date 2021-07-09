import { useState } from "react";

// useInput 함수를 만든다. 파라미터는 initialValue와 validator 두 개를 받는다.
const useInput = (initialValue, validator) => {
  // useState 기본 리액트 훅을 쓴다. useState는 Array를 반환한다.
  // 초기 값으로 initialValue 값을 할당한다.
  const [value, setValue] = useState(initialValue || undefined);
  // onChange 함수는 유효성 검사를 위한 함수이다.
  const onChange = (e) => {
    const { value } = e.target;
    // willUpdate라는 변수를 지정하고 초기값은 true이다.
    // useInput의 파라미터 validator가 함수일 때만 작동해야하기 떄문에
    // validator의 type을 일차적으로 검사해서
    // validator가 함수이면 true로
    // willUpdate가 validator(e.target.value)으로 할당
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    // willUpdate 값이 true이면
    // setValue가 e.target.value값으로 값이 업데이트
    if (willUpdate) {
      setValue(value);
    }
  };
  // return {
  //   value: value,
  //   onChange: onChange,
  // };
  // 아래와 같이 구조분해 할당이 가능
  return { value, onChange };
};

export default useInput;
