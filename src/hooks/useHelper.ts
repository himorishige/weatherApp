import { useCallback } from 'react';
import { format, fromUnixTime } from 'date-fns';

export const useHelper = () => {
  // 少数値を任意の桁数に変換する
  const fixFloat = useCallback((num: number, fixed: number) => {
    return num.toFixed(fixed);
  }, []);

  // unixtimeを任意のフォーマットに変換する
  const formatUnixtime = useCallback((unixtime: number | undefined, formatType = 'M月d日') => {
    if (!unixtime) {
      return 'error';
    }
    return format(fromUnixTime(unixtime), formatType);
  }, []);

  // 風向き情報（360°）を矢印に変換する
  const printWindDirection = useCallback((degree: number) => {
    const direction = Math.floor((degree - 22.5) / 45);

    switch (direction) {
      case 1: {
        return '➡️';
      }
      case 2: {
        return '↗️️';
      }
      case 3: {
        return '⬆️️';
      }
      case 4: {
        return '↖️️';
      }
      case 5: {
        return '⬅️️';
      }
      case 6: {
        return '↙️️';
      }
      case 7: {
        return '⬇️️';
      }
      case 8: {
        return '↘️️';
      }
      default:
        return '➡️';
    }
  }, []);

  return { printWindDirection, formatUnixtime, fixFloat };
};
