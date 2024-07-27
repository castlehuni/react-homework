//@ts-nocheck
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import AccodionPage from "./pages/AccodionPage.js";

// const data = [
//   { name: "국 · 반찬 · 메인요리", count: "16" },
//   { name: "샐러드 · 간편식", count: "32" },
//   { name: "정육 · 계란", count: "20" },
//   { name: "간식 · 과자 · 떡", count: "40" },
//   { name: "건강식품", count: "15" },
// ];

const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(<AccodionPage />);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
