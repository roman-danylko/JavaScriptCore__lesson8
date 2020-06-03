function EmployeeMonth(name, role, monthAmount) {
  this.name = name;
  this.role = role;
  this.monthAmount = monthAmount;
}
EmployeeMonth.prototype.yearAmount = function () {
  let result = this.monthAmount * 12;
  console.log(
    `Employee ${this.name} with a monthly salary ${this.monthAmount}$ for the year will receive ${result}$`
  );
};

function EmployeeHour(name, role, hourAmount) {
  this.name = name;
  this.role = role;
  this.hourAmount = hourAmount;
}
EmployeeHour.prototype = new EmployeeMonth();
EmployeeHour.prototype.yearAmount = function () {
  let forDay = this.hourAmount * 8;
  let forMonth = forDay * 25;
  let result = forMonth * 12;
  console.log(
    `Employee ${this.name} with a hourly salary ${this.hourAmount}$ for the day will receive ${forDay}$, for the month - ${forMonth}$ and year - ${result}$`
  );
};

let myEmployeeHour = new EmployeeHour("Vlastyslav", "manager", 25);
let myEmployeeMonth = new EmployeeMonth("Iryna", "programmer", 4000);

myEmployeeHour.yearAmount();
myEmployeeMonth.yearAmount();

console.log(`-----------------------------------------------------`);

/* -------------------------------------------------------------------- */
// 2. Створити класи Кермо, Колесо, Кузов - описати дані класи(getters, setters). Додати методи які б виконували певні функції з полями, тобто збільшували розмір колеса у декілька разів, чи змінювали діаметр керма і т.д.. Створити клас Машина, який матиме деякі свої поля типів Кермо, Кузов, Колесо (Композиція).  Додати методи в клас Машина, які би працювали з обє"ктами Кермо, Кузов, Колесо , для виконання певних функцій. Створити обє"кт класу Машина, запустити всі його методи.

// Всі виводи направити в текстову консоль.
function show(data) {
  console.log(data);
}

function handlebar() {
  let material = "leather";
  let setMaterial = material;
  let diameter = 40;
  let setDiameter = diameter;

  this.getMaterial = function () {
    show(`Матеріал руля - ${setMaterial}`);
  };

  this.setMaterial = function (data) {
    setMaterial = data;
    show(`Матеріал руля ${material} було змінено на ${setMaterial}`);
  };

  this.getDiameter = function () {
    show(`Діаметр руля - ${setDiameter}`);
  };

  this.setDiameter = function (data) {
    setDiameter = data;
    show(`Діаметр руля ${diameter} було змінено на ${setDiameter}`);
  };

  this.diameterPlus = function (data) {
    setDiameter *= data;
    show(
      `Діаметр руля ${diameter} було збільшено в ${data} рази. Тепер діаметр = ${setDiameter}`
    );
  };
}

function wheel(width, height, diameter) {
  let ourWidth = width;
  let setWidth = ourWidth;

  let ourHeight = height;
  let setHeight = ourHeight;

  let ourDiameter = diameter;
  let setDiameter = ourDiameter;

  this.getWidth = function () {
    show(`Width колеса = ${setWidth}`);
  };
  this.setWidth = function (data) {
    setWidth = data;
    show(`Width колеса ${ourWidth} було змінено на ${setWidth}`);
  };
  this.widthMinus = function (data) {
    ourWidth /= data;
    show(
      `Width колеса ${setWidth} було зменшено в ${data} разів. Тепер  Width = ${ourWidth}`
    );
  };

  this.getHeight = function () {
    show(`Height колеса = ${setHeight}`);
  };
  this.setHeight = function (data) {
    setHeight = data;
    show(`Height колеса ${ourHeight} було змінено на ${setHeight}`);
  };

  this.getDiameter = function () {
    show(`Diameter колеса = ${setDiameter}`);
  };
  this.setDiameter = function (data) {
    setDiameter = data;
    show(`Diameter колеса ${ourDiameter} було змінено на ${setDiameter}`);
  };
}

function body(color, type) {
  let ourColor = color;
  let setColor = ourColor;

  this.ourType = type;
  this.setOurType = this.ourType;

  this.getColor = function () {
    show(`Color кузова - ${setColor}`);
  };
  this.setColor = function (data) {
    setColor = data;
    show(`Color кузова було змінено на ${setColor}`);
  };

  this.getType = function () {
    show(`Type кузова - ${this.setOurType}`);
  };
  this.setType = function (data) {
    this.setOurType = data;
    show(`Type кузова було змінено на ${this.setOurType}`);
  };
}

function Car() {
  this.handlebar = new handlebar();
  this.wheel = new wheel(205, 65, 16);
  this.body = new body("Black", "Universal");

  this.getCrazyRide = function () {
    if (this.body.setOurType == "Universal") {
      show(`Твій кузов ${this.body.setOurType} не зможе екстремально їхати`);
    } else {
      show(
        `Так...з таким кузовом як ${this.body.setOurType} можна покататися!`
      );
    }
  };

  this.setBodyType = function (data) {
    this.body.setOurType = data;
    show(
      `Наш кузов ${this.body.ourType} було змінено на ${this.body.setOurType}`
    );
  };
}

let myCar = new Car();
myCar.handlebar.getDiameter();
myCar.handlebar.setDiameter(60);
myCar.handlebar.diameterPlus(1.2);
myCar.handlebar.getMaterial();
myCar.handlebar.setMaterial("Wood");

myCar.wheel.getDiameter();
myCar.wheel.setDiameter(18);
myCar.wheel.getHeight();
myCar.wheel.setHeight(55);
myCar.wheel.widthMinus(2);

myCar.body.getColor();
myCar.body.setColor("Red");
myCar.body.getType();
myCar.body.setType("Хетчбек");
myCar.setBodyType("Crosover");
myCar.getCrazyRide();
