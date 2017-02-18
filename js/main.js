/*
Task 0
Напишите функцию которая будет складывать два числа.
Входные числа всегда строка.
solution('91', '19') expected: 110
solution('123456789', '987654322') expected:  1111111111
solution('999999999', '1') expected:  1000000000
solution('451982', '3588') expected:  455570
solution('92023', '556083') expected:  648106
solution('945521', '823864') expected:  1769385
solution('823094582094385190384102934810293481029348123094818923749817', '234758927345982475298347523984572983472398457293847594193837')// expected:  1057853509440367665682450458794866464501746580388666517943654
solution('234859234758913759182357398457398474598237459823745928347538', '987429134712934876249385134781395873198472398562384958739845')// expected:  1222288369471848635431742533238794347796709858386130887087383
solution('854694587458967459867923420398420394845873945734985374844444', '333333333333439439483948394839834938493843948394839432322229')// expected:  1188027920792406899351871815238255333339717894129824807166673
solution('666666665656566666666565656666666656565666666665656566666666', '464646464646464644646464646464646464646464646463463463463466')// expected:  1131313130303031311313030303131313121212131313129120030130132
solution('987429134712934876249385134781395873198472398562384958739845234859234758913759182357398457398474598237459823745928347538', '835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789') 
expected: 1823172964260263830982280609675150766951754355882242391698277783797094242179652457248777050585906182180138262963360272327
*/

function solution(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let biggerArray;
  let smallerArray;
  if (arr1.length >= arr2.length) {
    biggerArray = arr1;
    smallerArray = arr2;
  } else {
    biggerArray = arr2;
    smallerArray = arr1;
  }

  let difference = biggerArray.length - smallerArray.length;
  for (let i = 0; i < difference; i++) {
    smallerArray.unshift('0');
  }

  let one = 0;
  let answer = [];
  for (let i = biggerArray.length - 1; i >= 0; i--) {
    let elem1 = biggerArray[i];
    let elem2 = smallerArray[i];
    let sum = +elem1 + (+elem2) + one;
    if (sum >= 10) {
      one = 1;
      sum = sum % 10;
      answer.push(sum);
    } else {
      answer.push(sum);
      one = 0;
    }
  };
  if (one > 0) {
    answer.push(one);
  }
  return answer.reverse().join('');
}


console.log(solution('91', '19'));//expected: 110
console.log(solution('123456789', '987654322'));//expected:  1111111111
console.log(solution('999999999', '1'));//1000000000
console.log(solution('451982', '3588'));//455570
console.log(solution('92023', '556083'));// expected:  648106
console.log(solution('945521', '823864'));// expected:  1769385
console.log(solution('823094582094385190384102934810293481029348123094818923749817', '234758927345982475298347523984572983472398457293847594193837'));// expected:  1057853509440367665682450458794866464501746580388666517943654;
