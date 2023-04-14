//ЗАДАЧА 1

function parseCount(productCount) {
    let count = Number.parseFloat(productCount);
    if (isNaN(count)) {
        throw new Error("Невалидное значение");
    } else {
        return count;
    }
}

function validateCount(productCount) {
    try {
        return parseCount(productCount);
    } catch(error) {
        return error;
    }
}

//ЗАДАЧА 2

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
	}

get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
        let halfPerimeter = this.perimeter * 0.5;
        let area = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
        return Number(area.toFixed(3));
  }
}

function getTriangle(a, b, c) {
        try { 
            return new Triangle(a, b ,c);
    } catch(error) {
        return { 
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}