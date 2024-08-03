import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AddCartHeader from "@/components/AddCartHeader";

const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(
    <StrictMode>
      <AddCartHeader />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
