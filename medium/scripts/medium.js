// Welcome to Medium Mode
// Copyright 2021 - Дауны.com

const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

// Тут типа сам тест начинается
class Quiz
{
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

	Click(index)
	{
		// Добавление очков
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		// Если добавлено хотя одно очко (ахахах), то ответ так уж и быть засчитаем как верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			// Или ищем какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	// Next (типа дота поняли) некст вопрос крч
	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	// Если вопросы кончились, то код ниже определит результат 
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

// Тут вопрос предоставляем
class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

// Тут ответ предоставляем
class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

// Представляем результат
class Result 
{
	constructor(text, value, src)
	{
		this.text = text;
		this.value = value;
		this.src = src;
	}

	// Этот код проверит, достаточно ли очков набрал чел
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

// Массив с результатами
const results = 
[
	new Result("Белая ворона", 0, 'http://siratallah.com/wp-content/uploads/sites/3/2017/10/white-crow.jpg'),
	new Result("В кого ты такой вырос", 2, 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0f/8e/64/0f8e64ad-946f-39fa-934f-bb39b4ad4c9d/21UMGIM66250.rgb.jpg/400x400cc.jpg'),
	new Result("Почему же ты такой тупой", 4, 'https://lh3.googleusercontent.com/proxy/Sh8KPd_sxg7JzobOBTaMdjpniaGgTosImnrOVRhj47JmWDB9ISyJwbQ8G-9ldigebHmPh420q44X-ue3yY4dEVmXrXQ'),
	new Result("7 лет в школе учишься, а такой тупой", 6, 'https://st2.depositphotos.com/1000742/6569/i/600/depositphotos_65695705-stock-photo-boy-twist-by-finger-near.jpg'),
  	new Result("Ну это как вообще возможно?", 8, 'http://risovach.ru/upload/2014/04/mem/kianu-rivz_47721128_orig_.jpeg'),
  	new Result("Уже лучше, но не предел", 10, 'https://cs.pikabu.ru/post_img/big/2013/10/09/8/1381318774_93049810.jpg'),
  	new Result("Ещё немного и ты будешь крутым", 12, 'http://risovach.ru/upload/2014/12/mem/gomer_68668300_orig_.png'),
	new Result("Давай давай, ты сможешь!", 14, 'https://s1.anekdoty.ru/uploads/images/funny/open/nu-pochti-poluchilos-open.jpg'),
	new Result("Ну давай же, ещё чуть чуть!!!", 16, 'https://i.ytimg.com/vi/qS49jA0_2Jw/hqdefault.jpg'),
	new Result("Это конечно не 20 баллов, но не плохо", 18, 'https://i.ytimg.com/vi/L1pr6y9bFtg/mqdefault.jpg'),
	new Result("Молодец, умничка, красавец, крутыш и всё такое", 20, 'https://mem-baza.ru/_ph/1/2/212700364.jpg?1600932369')
];


// Массив с вопросами
const questions = 
[
	new Question("Что будет делать ворона, прожив 3 года?", 
	[
		new Answer("Умрёт, всеми известный факт", 0),
		new Answer("Сьест сыр", 0),
		new Answer("Будет жить дальше", 1),
		new Answer("Сьест лису", 0)
	]),

	new Question("Как сорвать ветку, чтобы не спугнуть птицу?", 
	[
		new Answer("Сорвать другую ветку", 1),
		new Answer("Убить птицу", 0),
		new Answer("Лучше вообще ветку не трогать", 0),
		new Answer("Никак, это невозможно", 0) 
	]),

	new Question("На что больше всего похожа половина апельсина?", 
	[
		new Answer("На второю половину яблока", 0),
		new Answer("На вторую половину", 1),
		new Answer("На тебя", 0),
		new Answer("На что то", 0)
	]),

	new Question("На какое дерево садится ворона во время проливного дождя?", 
	[
		new Answer("На сырое", 0),
		new Answer("На обычное", 0),
		new Answer("Она не садится, она ложится", 0),
		new Answer("На мокрое", 1)
	]),

	new Question("Когда черной кошке легче всего пробраться в дом?", 
	[
		new Answer("Ночью", 0),
		new Answer("Утром", 0), 
		new Answer("Когда угодно, это же кошка", 0),
		new Answer("Когда дверь открыта", 1)
	]),

	new Question("Что в России на первом месте, а во Франции на втором?", 
	[
		new Answer("Путин", 0),
		new Answer("Буква «Р»", 1),
		new Answer("Медведев", 0),
		new Answer("Алфавит", 0)
	]),
    
	new Question("Какая деталь книжного шкафа состоит из половины согласной буквы?", 
	[
		new Answer("Полка", 1),
		new Answer("Телевизор", 0),
		new Answer("Подстилка", 0),
		new Answer("Под-полка", 0)
	]),
    
	new Question("Верблюд в течение часа выдерживает ношу в 10 пудов. В течение какого времени он выдержит ношу в 1000 пудов?", 
	[
		new Answer("Верблюд легко выдержить ношу в 1000 пудков", 0),
		new Answer("Слишком сложно", 0),
		new Answer("Верблюд не выдержит ношу в 1000 пудов", 1),
		new Answer("Это бред какой то", 0)
	]),
    
	new Question("Сколько концов у трех палок, четырех с половиной? двух с четвертью?", 
	[
		new Answer("4, 9, 4", 0),
		new Answer("5, 11, 3", 0),
		new Answer("6, 10, 6", 1),
		new Answer("3, 5, 11", 0)
	]),
    
	new Question("Разделите 5 лимонов между 5 лицами так, чтобы каждый получил по лимону и 1 лимон остался в корзине.", 
	[
		new Answer("Один человек берет лимон вместе с корзиной", 1),
		new Answer("Два человека берут 500 тысяч с корзиной", 0),
		new Answer("Просто положите в банк", 0),
		new Answer("Сыграйте в бутылочку", 0)
	]),
    
	new Question("Шел мужик в Москву и повстречал 7 богомолок. У каждой из них было по мешку, в мешке по коту. Сколько существ направлялось в Москву?", 
	[
		new Answer("9", 0),
		new Answer("17", 0),
		new Answer("18", 0),
		new Answer("В Москву шел только мужик", 1)
	]),
    
	new Question("Почему загадки опасны?", 
	[
		new Answer("Потому что от них болит голова", 0),
		new Answer("Потому что люди ломают над ними голову", 1),
		new Answer("Слишком скучные", 0),
		new Answer("Слишком интересные", 0)
	]),

	new Question("Всегда ли после 12 следует 13?", 
	[
		new Answer("Естественно", 0),
		new Answer("Нет. На часах после 12 следует 1", 1),
		new Answer("Математика как бы", 0),
		new Answer("Я что похож на 2 класс?", 0)
	]),

	new Question("Сколько яиц можно съесть натощак?", 
	[
		new Answer("Два", 0),
		new Answer("Три легко", 0),
		new Answer("Ни сколько", 0),
		new Answer("Одно", 1)
	]),

	new Question("На какой вопрос никогда нельзя дать утвердительный ответ?", 
	[
		new Answer("Ты спишь?", 1),
		new Answer("Ты мёртв внутри?", 0),
		new Answer("Ты уже поел?", 0),
		new Answer("Ты опять пил?", 0)
	]),

	new Question("Какое слово начинается с трех букв «Г» и заканчивается тремя буквами «Я»?", 
	[
		new Answer("Треугольния", 0),
		new Answer("Гвадратная", 0),
		new Answer("Даже не знаю", 0),
		new Answer("Тригонометрия", 1)
	]),

	new Question("Эти три телезвезды хорошо известны каждому из нас. Блондина зовут Степан, шатена зовут Филипп. А как зовут лысого?", 
	[
		new Answer("Егор Крид", 0),
		new Answer("Хрюша", 1),
		new Answer("Нагиев", 0),
		new Answer("Браззерс", 0)
	]),

	new Question("Висит груша, нельзя скушать. Почему?", 
	[
		new Answer("Дедушке это может не понравиться", 0),
		new Answer("Высоко весит", 0),
		new Answer("Боксерам это может не понравиться", 1),
		new Answer("Грязная", 0)
	]),

	new Question("Что нужно делать, когда видишь зеленого человечка?", 
	[
		new Answer("Переходить улицу", 1),
		new Answer("Бежать оттуда быстрее", 0),
		new Answer("Это просто человек ночью", 0),
		new Answer("Просто не бояться, и идти домой", 0)
	]),

	new Question("Маленькая, серого цвета и весит 3 килограмма.", 
	[
		new Answer("Старая мышь", 0),
		new Answer("Обычная мышь", 0),
		new Answer("Джерри", 0),
		new Answer("Мышь, у которой проблемы с весом", 1)
	]),
];

// Перемешка вопросов
const quiz = new Quiz(questions.sort(() => 0.5 - Math.random()), results);

// Сам тест
Update();

// Обновление теста
function Update()
{
	// Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{
		// Если есть, меняем вопрос в заголовке
		headElem.textContent = quiz.questions[quiz.current].text;

		// Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		// Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
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
	}
	else
	{
		// Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		headElem.textContent = quiz.results[quiz.result].text;
		pagesElem.textContent = "Очки: " + quiz.score;
		headElem.insertAdjacentHTML('beforebegin', `<img src="${quiz.results[quiz.result].src}" width="400" height="250">`)

	}
}

function Init()
{
	// Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		// Прикрепляем событие для каждой отдельной кнопки
		// При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{
	// Получаем номер правильного ответа
	let correct = quiz.Click(index);

	// Находим все кнопки
	let btns = document.getElementsByClassName("button");

	// Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	// Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным


		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 

	// Ждём секунду и обновляем тест (по приколу типа, ладно, это оч важно(нет))
	setTimeout(Update, 1000);
}
