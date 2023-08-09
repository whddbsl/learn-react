import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// JSX가 하는 일은 React 요소 생성 → 마크업 생성
// JSX → 컴파일러(변환기) → React 요소 → ReactDOM → 실제 DOM 요소 생성 → 구조 작성
