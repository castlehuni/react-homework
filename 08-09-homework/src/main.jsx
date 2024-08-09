import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Sqaures from "@/tic-tac-toe/components/Squares/Squares";

const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(
    <StrictMode>
      <Sqaures />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
