// Welcome to Easy Mode
// Copyright 2021 - Дауны.com

const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

// Тут типа сам тест начинается
class Quiz {
    constructor(questions, results) {

        // Массив с вопросами
        this.questions = questions;

        // Массив с возможными результатами
        this.results = results;

        // Количество набранных очков
        this.score = 0;

        // Номер результата из массива
        this.result = 0;

        // Номер текущего вопроса
        this.current = 0;
    }

    Click(index) {
        // Добавление очков
        let value = this.questions[this.current].Click(index);
        this.score += value;

        let correct = -1;

        // Если добавлено хотя одно очко (ахахах), то ответ так уж и быть засчитаем как верный
        if (value >= 1) {
            correct = index;
        } else {
            // Или ищем какой ответ может быть правильным
            for (let i = 0; i < this.questions[this.current].answers.length; i++) {
                if (this.questions[this.current].answers[i].value >= 1) {
                    correct = i;
                    break;
                }
            }
        }

        this.Next();

        return correct;
    }

    // Next (типа дота поняли) некст вопрос крч
    Next() {
        this.current++;

        if (this.current >= this.questions.length) {
            this.End();
        }
    }

    // Если вопросы кончились, то код ниже определит результат 
    End() {
        for (let i = 0; i < this.results.length; i++) {
            if (this.results[i].Check(this.score)) {
                this.result = i;
            }
        }
    }
}

// Тут вопрос предоставляем
class Question {
    constructor(text, answers) {
        this.text = text;
        this.answers = answers;
    }

    Click(index) {
        return this.answers[index].value;
    }
}

// Тут ответ предоставляем
class Answer {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}

// Представляем результат
class Result {
    constructor(text, value, src) {
        this.text = text;
        this.value = value;
        this.src = src;
    }

    // Этот код проверит, достаточно ли очков набрал чел
    Check(value) {
        if (this.value <= value) {
            return true;
        } else {
            return false;
        }
    }
}

// Массив с результатами
const results = [
	new Result("Не грусти)", 0, 'https://klike.net/uploads/posts/2020-04/1585988826_9.jpg'),
	new Result("Уже лучше, молодец)))", 2, 'https://vjoy.cc/wp-content/uploads/2020/08/img_user_file_5a1a519048e29_0_22.jpg'),
	new Result("Держи немного соку)))", 4, 'https://www.coca-cola.ru/content/dam/one/ru/ru/2020/06/dobryiy/1_Dobry_Sok_Apple_1L.png'),
	new Result("Иди возьми шоколадку)))", 6, 'https://www.posadfm.ru/upload/iblock/764/764331422c8db8ad4a85f3317d7c0143.jpg'),
  	new Result("Иди возьми пирожок с творогом на столе)))", 8, 'https://mokostav.com/media/bakery/%D0%BF%D0%B8%D1%80%D0%BE%D0%B6%D0%BE%D0%BA%20%D1%81%20%D0%BA%D0%B0%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B9.png'),
  	new Result("Я позвоню твоей маме и скажу, что ты умничка))))", 10, 'https://klike.net/uploads/posts/2020-08/1597215711_2.jpg'),
]

// Массив с вопросами
const questions = [
	new Question("Что делали древние люди, чтобы вызвать дождь?",
	[
		new Answer('Три дня ничего не ели', 0),
		new Answer('Убивали мамонта', 0),
		new Answer('Танцевали вокруг костра с бубном в руках', 1),
		new Answer('Ходили с зонтиком и говорили «кажется, дождь начинается…»', 0)
	]),

	new Question("Чего не может торнадо?",
	[
		new Answer("Стоять на месте", 1),
		new Answer("Поднять в воздух автомобиль", 0),
		new Answer("Вырвать с корнями дерево", 0),
		new Answer("Разрушить здание", 0)
	]),

	new Question("В древности китайцы научились делать из коконов шелковичных червей…",
	[
		new Answer("Приправу", 0),
		new Answer("Бумагу", 0),
		new Answer("Резину", 0),
		new Answer("Шелк", 1)
	]),

	new Question("Где находится яд у кобры?",
	[
		new Answer("На кончике языка", 0),
		new Answer("В зубе", 1),
		new Answer("На хвосте", 0),
		new Answer("В капюшоне", 0)
	]),

	new Question("Хвост какого животного похож на весло?",
	[
		new Answer("Бобра", 1),
		new Answer("Белки", 0),
		new Answer("Лисы", 0),
		new Answer("Медведя", 0)
	]),

	new Question("Как приветствуют друг друга эскимосы?",
	[
		new Answer("Пожимают руки", 0),
		new Answer("Целуются", 0),
		new Answer("Трутся носами", 1),
		new Answer("Обнимаются", 0)
	]),

    new Question("Какое насекомое скользит по воде и не тонет?",
	[
		new Answer("Божья коровка", 0),
		new Answer("Подёнка", 0),
		new Answer("Водомерка", 1),
		new Answer("Стрекоза", 0)
	]),

    new Question("Чтобы в загробной жизни фараон ни в чем не нуждался, в саркофаг вместе с мумией клали…",
	[
		new Answer("Драгоценности", 1),
		new Answer("Продукты", 0),
		new Answer("Папирус", 0),
		new Answer("Плюшевого мишку", 0)
	]),

    new Question("Как называется помещение на судне, где живут матросы?",
	[
		new Answer("Келья", 0),
		new Answer("Кубрик", 1),
		new Answer("Квартира", 0),
		new Answer("Кабинет", 0)
	]),

    new Question("Что образуется в раковинах устриц?",
	[
		new Answer("Жемчуг", 1),
		new Answer("Кораллы", 0),
		new Answer("Золото", 0),
		new Answer("Алмазы", 0)
	])
];

// Перемешка вопросов
const quiz = new Quiz(questions.sort(() => 0.5 - Math.random()), results);

// Сам тест
Update();

// Обновление теста
function Update() {
    // Проверяем, есть ли ещё вопросы
    if (quiz.current < quiz.questions.length) {
        // Если есть, меняем вопрос в заголовке
        headElem.textContent = quiz.questions[quiz.current].text;

        // Удаляем старые варианты ответов
        buttonsElem.innerHTML = "";

        // Создаём кнопки для новых вариантов ответов
        for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
            let btn = document.createElement("button");
            btn.className = "button";

            btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

            btn.setAttribute("index", i);

            buttonsElem.append(btn);
        }

        // Выводим номер текущего вопроса
        pagesElem.textContent = (quiz.current + 1) + " / " + quiz.questions.length;

        // Прикрепляем события к новым кнопкам
        Init();
    } else {
        // Если это конец, то выводим результат
        buttonsElem.innerHTML = "";
        headElem.textContent = quiz.results[quiz.result].text;
        pagesElem.textContent = "Очки: " + quiz.score;
        headElem.insertAdjacentHTML('beforebegin', `<img src="${quiz.results[quiz.result].src}" width="350" height="350">`)

    }
}

function Init() {
    // Находим все кнопки
    let btns = document.getElementsByClassName("button");

    for (let i = 0; i < btns.length; i++) {
        // Прикрепляем событие для каждой отдельной кнопки
        // При нажатии на кнопку будет вызываться функция Click()
        btns[i].addEventListener("click", function (e) {
            Click(e.target.getAttribute("index"));
        });
    }
}

function Click(index) {
    // Получаем номер правильного ответа
    let correct = quiz.Click(index);

    // Находим все кнопки
    let btns = document.getElementsByClassName("button");

    // Делаем кнопки серыми
    for (let i = 0; i < btns.length; i++) {
        btns[i].className = "button button_passive";
    }

    // Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным


    if (correct >= 0) {
        btns[correct].className = "button button_correct";
    }

    if (index != correct) {
        btns[index].className = "button button_wrong";
    }

    // Ждём секунду и обновляем тест (по приколу типа, ладно, это оч важно(нет))
    setTimeout(Update, 1000);
}
