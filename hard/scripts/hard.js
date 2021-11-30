// Welcome to Hard Mode
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
new Result("Плох", 0, 'img/0.png'),
new Result("Кринжанул", 2, 'img/2.jpg'),
new Result("Что то могешь", 4, 'img/4.png'),
new Result("Муняня чупапа", 6, 'img/6.jpg'),
new Result("уга буга", 8, 'img/8.jpg'),
new Result("заебал давай меньше", 10, 'img/10.jpg'),
new Result("едут два еблана один из них ты другой генрих", 12, 'img/12.gif'),
new Result("туда его", 14, 'img/14.jpg'),
new Result('Харош', 16, 'img/16.gif'),
new Result("мегахарош", 18, 'img/18.gif'),
new Result("чел харош", 20, 'img/20.gif'),
new Result("норм", 22, 'img/22.jpg'),
new Result("теперь то я плох?", 24, 'img/24.png'),
new Result("26 ебать ты ебланище цифра не красивая", 26, 'img/26.jpg'),
new Result("сверхразум", 28, 'img/28.gif'),
new Result("ебать я аллах", 30, 'img/30.jpg'),
];

// Массив с вопросами
const questions = [
    new Question("Если ты купил таблетки для повышения интеллекта и не смог открыть их что будешь делать?",
[
    new Answer("Куплю еще одни", 0),
    new Answer("ЫЫАЫАЫАА", 1),
    new Answer("Попрошу маму открыть их", 0),
    new Answer("чел какую мать она у тебя сдохла", 0)
]),
new Question("Куда нужно идти если надо туда и тудa?",
[
    new Answer("Не туда", 1),
    new Answer("Туда", 0),
    new Answer("Не не туда", 0),
    new Answer("Куда нибудь туда", 0)
]),
new Question("Если черного зовут негр то как зовут белого?",
[
    new Answer("Его не зовут он сам порабощает", 0),
    new Answer("Хозяин", 0),
    new Answer("Негр альбинос", 1),
    new Answer("Прораб", 0)
]),
new Question("Едут сын и батя на шестерке и они перевернулись, что дальше?",
[
    new Answer("Они умерли", 0),
    new Answer("Негры их поработили", 0),
    new Answer("Едут на девятке", 1),
    new Answer("Ты поржал", 0)
]),
new Question("Какие коровы производят мед?",
[
    new Answer("Какие пчелы производят мед?", 1),
    new Answer("ЧЕ?", 0),
    new Answer("Какие люди производят сперму?", 0),
    new Answer("Какие сперматозоиды производят людей?", 0)
]),
new Question("Как быстро похудеть?",
[
    new Answer("Бегать", 0),
    new Answer("Прыгать", 0),
    new Answer("Отрубить ногу", 1),
    new Answer("Покушать", 0)
]),
new Question("Кто отец интернета",
[
    new Answer("Джон Кеннеди", 0),
    new Answer("Билл Гейтс", 0),
    new Answer("Твоя мать", 1),
    new Answer("У Генриха мать сдохла", 1)
]),
new Question("Блять кто такой Кеннеди?",
[
    new Answer("Джон", 1),
    new Answer("Призидент", 0),
    new Answer("С дырой в башке", 0),
    new Answer("хехе, пуля делает пиу пиу", 0)
]),
new Question("Кто додумался доить коров?",
[
    new Answer("Педофил", 0),
    new Answer("Растлитель коров", 0),
    new Answer("Панин", 1),
    new Answer("Мать Генриха", 0)
]),
new Question("Почему Земля не падает?",
[
    new Answer("Говно не тонет", 0),
    new Answer("Потому что она прописала /fly", 1),
    new Answer("Потому что она в космосе", 0),
    new Answer("Падать некуда", 0)
]),
new Question("Каким еще словом можно описать, что ты не прав?",
[
    new Answer("Женщина", 0),
    new Answer("Ты не прав", 1),
    new Answer("Ты не лев", 0),
    new Answer("Пернуть", 0)
]),
new Question("Как прикрыть свой пердеж?",
[
    new Answer("Свои телом", 0),
    new Answer("Засунуть палец в жопу", 0),
    new Answer("Засунуть чЛеН в жопу", 0),
    new Answer("Еще более громким пердежом", 1)
]),
new Question("Может ли страус назвать себя птицей?",
[
    new Answer("Да, он же с крыльями", 0),
    new Answer("Да, он же птица", 0),
    new Answer("Нет, он не летает", 0),
    new Answer("Нет, у него же нет рта", 1)
]),
new Question("Электричка едет со скоростью 70 км/час. В какую сторону летит дым?",
[
    new Answer("В северную", 0),
    new Answer("В твою сторону", 0),
    new Answer("У электрички нет дыма", 1),
    new Answer("В сторону кладбища с твоей мамой", 0)
]),
new Question("Что будет если повернуть направо три раза?",
[
    new Answer("Лево", 1),
    new Answer("Право", 0),
    new Answer("Три раза право", 0),
    new Answer("280 no scope", 0)
]),
new Question("Умерла мать что делать?",
[
    new Answer("Пособолезновать Генриху", 0),
    new Answer("Я ТЕПЕРЬ ГЕНРИХ!", 0),
    new Answer("Пойти в доту", 0),
    new Answer("Я еблан", 1)
]),
new Question("Кокое слово пишеться неправильно?",
[
    new Answer("Кокое", 0),
    new Answer("Неправильно", 1),
    new Answer("Пишеться", 0),
    new Answer("Генрих", 0)
]),
new Question("Сколько месяцев в году имеют мать Генриха",
[
    new Answer("3 Потому что зимой учеба", 0),
    new Answer("12", 1),
    new Answer("0 Давайте уже пожалеем генриха", 0),
    new Answer("Генрих иди нахуй", 0)
]),
new Question("Сколько вопросов в этом тесте?",
[
    new Answer("60", 0),
    new Answer("Чота много", 1),
    new Answer("30", 0),
    new Answer("31?", 0)
]),
new Question("Где южный полюс?",
[
    new Answer("Где то там", 1),
    new Answer("С юга", 0),
    new Answer("С севера", 0),
    new Answer("На юге", 0)
]),
new Question("Существует ли Бог?!",
[
    new Answer("Админа обсуждать запрещено", 0),
    new Answer("Админ шлюха", 0),
    new Answer("Ток не тема всевышнего", 1),
    new Answer("Это кто?", 0)
]),
new Question("Где я? o_0",
[
    new Answer("Действительно...хде ты?!.....", 1),
    new Answer("В матере генриха", 0),
    new Answer("Генрих не бей плз", 0),
    new Answer("В сосне", 0)
]),
new Question("Кого ты блять выберешь?!",
[
    new Answer("Нас или", 0),
    new Answer("Их", 0),
    new Answer("Сыс или", 0),
    new Answer("Хых", 1)
]),
new Question("Почему когда солнце,это именно день,а когда луна-это ночь?!",
[
    new Answer("Потому что корова ахуела", 0),
    new Answer("Нотч так придумал", 1),
    new Answer("Ты не ешь грибы?!", 0),
    new Answer("УУУ, обсуждаю.....", 0)
]),
new Question("Крч, это YouTube Shorts",
[
    new Answer("крч... крч.. круто крч", 0),
    new Answer("крч... крч...", 0),
    new Answer("крч... круто крч", 1),
    new Answer("Dam Dam Dam Dam", 0)
]),
new Question("Кто здесь?! о_0",
[
    new Answer("Ессс +1 ребёнок в подвал", 1),
    new Answer("Это я генрих, спускайся...", 0),
    new Answer("дырка найдена", 0),
    new Answer("Дима Шаруда ищет новую дырку", 0)
]),
new Question("Если мужика кастрировать, стоять будет?",
[
    new Answer("Смотря что... :(", 0),
    new Answer("Ща как засажу!", 1),
    new Answer("Крч говоря, перепутала кота и мужа", 0),
    new Answer("АААААААААААААААААААААААА", 0)
]),
new Question("На хира козе бойан?",
[
    new Answer("В последний раз спрашиваю!", 0),
    new Answer("Верните козе баян", 0),
    new Answer("Joe Baxilы", 1),
    new Answer("Joe Biden", 0)
]),
new Question("Есть ли в жопе зубы, если нет, тода кто кокашки откусывает?$)~",
[
    new Answer("Для олдов: бабка отъебись", 0),
    new Answer("Зубы хавают говно", 0),
    new Answer("Говно хавает зубы", 0),
    new Answer("Dam Dam Dam Dam", 1)
]),
new Question("Пум пум ту ту гр гр?! ЕЕЕ ууу брррр",
[
    new Answer("У меня с твоей дочкой связи", 0),
    new Answer("Раме ро, микстура", 0),
    new Answer("Нету связи с мусорами", 1),
    new Answer("Трап медали ЕЕЕ УУУ", 0)
]),
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
        headElem.insertAdjacentHTML('beforebegin', `<img src="${quiz.results[quiz.result].src}" width="400" height="250">`)

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
