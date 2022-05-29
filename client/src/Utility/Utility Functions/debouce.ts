export default function debounce(callback: any, wait: number) {
    let timerId: NodeJS.Timer;
    return (...args: any) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback(...args);
      }, wait);
    };
  }