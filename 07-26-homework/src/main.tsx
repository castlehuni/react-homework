//@ts-nocheck
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import AccodionItem from "../components/AccodionItem.js";

const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(<AccodionItem name="샐러드 · 간편식" />);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
