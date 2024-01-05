import React from "react";
import { useState } from "react";

// 페이지 이미지 가져오기
export const useImportPageImage = (ebPageData) => {
  // 페이지 이미지 url 가져오기
  const getPageImage = ebPageData.map((a, i) => {
    return a.pageImage;
  });
  const pageImgSrc = [...getPageImage];

  // 페이지 이미지 파일 로컬에 임시 저장하기
  const preloading = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      let pageImgSrc = new Image();
      pageImgSrc.src = arr[i];
    }
  };
  preloading(pageImgSrc);

  return { pageImgSrc };
};
