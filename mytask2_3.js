//Создать обычный объект и сделать его итерируемым. 
//При этом итерация должна происходить следующим образом:
//Должны поочерёдно проходиться все значения от внутреннего свойства объекта from, до внутреннего свойства объекта to. 
//(в случае если to < from - должна возникать ошибка).
//Если to или from не указаны ИЛИ to или from являются не числами, должна возникать ошибка. 
//Объект должен называться myIterable. Это важно, т.к. проверять буду тестами.
//> Примеры:
//const myIterable = { from: 1, to: 4 };
//for (let item of myIterable) {
//console.log(item); // 1, 2, 3, 4
//}

//const myIterable = { from: 'aaa', to: 4 };
//for (let item of myIterable) { // Ошибка!
// console.log(item);
//}




let myIterable = {
    from: 1,
    to: 5,
  };
  
  myIterable[Symbol.iterator] = function () {
    if (!Number.isInteger(this.from) || !Number.isInteger(this.to)) {
      throw new Error("From or to must be a number");
    }
    if (this.from > this.to) {
      throw new Error("From must be a bigger then to");
    }
    return {
      current: this.from,
      last: this.to,
  
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  };
  
  for (let num of myIterable) {
    console.log(num);
  }
  