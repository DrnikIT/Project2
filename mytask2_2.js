//Написать функцию, которая принимает три аргумента: массив чисел, первое значение интервала, второе значение интервала.
//Результатом вызова функции должен быть массив из значений, переданного массива, которые входят в этот интервал (концы включая).
//Договоримся использовать только массивы чисел. При этом значения интервала могут быть только числами.
//Если в качестве первого параметра передан не массив или массив, содержащий не только числа - кидать ошибку (throw new Error('error message')). 
//Если хотя бы одно из значений интервала - невалидное число - также кидать ошибку.
//Если первое значение интервала < второго, то считать за интервал значения от первого до второго, в ином случае - от второго до первого.
//Функция должна называться selectFromInterval. Это важно, т.к. проверять буду тестами.
//> Примеры:
//Вызываем функцию: selectFromInterval([1,3,5], 5, 2)
//Получаем результат: [3,5]
//Вызываем функцию: selectFromInterval([-2, -15, 0, 4], -13, -5)
//Получаем результат: []
//Вызываем функцию: selectFromInterval(['aaa'], 2, 3)
//Получаем результат: Ошибка!





function selectFromInterval(arr, from, to) {
    const result = [];
  
    if (!Array.isArray(arr)) {
      throw new Error(`${arr} is not a array.`);
    }
    for (let i = 0; i < arr.length; i++) {
      if (!Number.isInteger(arr[i])) {
        throw new Error(`${arr[i]} is not a number.`);
      }
    }
    if (!Number.isInteger(from) || !Number.isInteger(to)) {
      throw new Error(`arguments from and to must be a number.`);
    }
    let number;
    if (from > to) {
      number = from;
      from = to;
      to = number;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= from && arr[i] <= to) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  