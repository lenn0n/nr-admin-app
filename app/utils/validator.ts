export const isCallbackValid  = (f : Function | undefined) => {
  if (f !== null && f !== undefined && typeof Function === 'function') {
    return true
  } else {
    return false
  }
}

export const formatRawNumber = (number: number | string[] = 0, decimal = 0, leadingUnit = '', trailingUnit = '') => {
  let formatted;
  let num = number;
  if (number) {
      number = number.toString().split(".");
      if (number[1]) {
          if (number[1].length >= decimal) {
              if (number[0].length > 3) {
                  number[0] = number[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
              }
              formatted = number[0] + '.' + number[1].slice(0,decimal);
          } else{
              let add = '';
              for (var i = 0; i < decimal-number[1].length; i++) {
                  add += '0';
              }
              if (number[0].length > 3) {
                  number[0] = number[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
              }

              formatted = number[0] + '.' + number[1] + add;
          }
      }else{
          let add = '';
          for (var i = 0; i < decimal; i++) {
              add += '0';
          }
          if (number[0].length > 3) {
              number[0] = number[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
          }
          formatted = number[0] + '.' + add;
      }

      // If decimal point is 0, remove appended "."
      if (decimal < 1) {
        formatted = strReplace(formatted, { '.': '' });
      }

      return  ((leadingUnit != '') ? leadingUnit + ' ' : '') + formatted + ((trailingUnit != '') ? ' ' + trailingUnit : '' );
  }else{
      let add ='';
      for (var i = 0; i < decimal; i++) {
          add += '0';
      }

      let zero = '0.' + add;

      // If decimal point is 0, remove appended "."
      if (decimal < 1) {
          zero = strReplace(zero, { '.': '' });
      }

      return ((leadingUnit != '') ? leadingUnit + ' ' : '') + zero + ((trailingUnit != '') ? ' ' + trailingUnit : '' );
  }
}

export const scrollInto = (el: any) => {
  if (el) {
    el.scrollIntoView({ block: 'end', scrollBehavior: 'smooth' });
  }
}

export const scrollTop = (el: any) => {
  if (el) {
    el.scrollIntoView({ block: 'start', scrollBehavior: 'smooth' });
  }
  // el.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export const numIsNegative = (num: number) => {
  if (Math.sign(num) === -1) {
    return true;
  }

  return false;
}

export const maskCharacter = (str: string, mask: string, n = 4) => {
  str = String(str);
  return ('' + str ).slice(0, -n).replace(/./g, mask) + ('' + str).slice(-n);
}

export const isAmountValid = (amount = '') => {
  // Remove commas
  amount = String(amount).replace(",", "")
  // Remove spaces
  amount = String(amount).replace(" ", "")

  // 0{X}
  if (String(amount).charAt(0) == '0' && isFinite(Number(String(amount).charAt(1))) && String(amount).length > 1 ) {
    return false;
  }
  // .{XXXXX}
  else if(String(amount).charAt(0) == '.'){
    return false
  }
  // REGEX 0-9 AND ONE DOT ONLY
  else if (/^[0-9]*[.]{0,1}[0-9]*$/.test(amount)){
    return true
  }
  else {
    return false
  }
};

export const clipboardCopy = async (text: string, callback: Function) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      if (callback != undefined && callback != null && typeof callback === 'function') {
        callback(true);
      }
    }, () => {
      if (callback != undefined && callback != null && typeof callback === 'function') {
        callback(false);
      }
    });
  }
}

export const strReplace = (string: string = '', replace: any = {}) => {
  let str = string;
  if (replace == undefined || replace == null || replace == '' || typeof replace !== 'object') {
    return '';
  }

  Object.entries(replace).forEach(([key, value]) => {
    str = str.replace(key, value as string);
  });

  return str;
};
