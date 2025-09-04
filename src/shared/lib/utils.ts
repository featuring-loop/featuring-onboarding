import { Gender } from "@/components/discover/model/types";

/**
 * 성별 코드를 한국어로 변환하는 함수
 * @param gender - 'M' (남성) 또는 'F' (여성)
 * @returns 한국어 성별 표현
 */
export const convertGenderToKorean = (gender: Gender): '여성' | '남성' | '알 수 없음' => {
  switch (gender.toUpperCase()) {
    case 'M':
      return '남성';
    case 'F':
      return '여성';
    default:
      return '알 수 없음';
  }
};

/**
 * 숫자에 천의자리마다 콤마를 추가하는 함수
 * @param num - 숫자 또는 숫자 문자열
 * @returns 콤마가 추가된 문자열
 */
export const addCommas = (num: number | string): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
