export const useDebounce = (func: any, delayMs = 500) => {
  let timeout: any = null;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.warn('test');

      func();
    }, delayMs);
  };
};

// function createDebounce() {
//   let timeout: any = null;
//   return function (fnc: any, delayMs: number) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       fnc();
//     }, delayMs || 500);
//   };
// }

// export default {
//   debounce: createDebounce(),
// };
