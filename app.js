// =========================
    // Data
    // =========================
    const excuses = [
      "Я тестировал новые границы реальности.",
      "Сигнал Wi-Fi ушёл в отпуск.",
      "Мой кот срочно требовал брифинга.",
      "Письмо ушло в спам и заблудилось.",
      "Мой будильник перешёл в режим тишины.",
      "Я спасал кофемашину от перегрева.",
      "Только что завершил важную миссию в метро.",
      "Застрял в бесконечной очереди обновлений.",
      "Сегодня я был временно офлайн в реальности.",
      "Открыл портал в поддержку и не смог выйти.",
      "Мне позвонила судьба, пришлось ответить.",
      "На меня напал внезапный режим фокуса.",
      "Гравитация была нестабильна этим утром.",
      "Я перепутал календарь с планетой.",
      "Срочно спасал файл от исчезновения.",
      "Слишком вдохновился идеей и потерял время.",
      "В лифте зависла вся мотивация.",
      "Моя клавиатура потребовала перезагрузки.",
      "Шёл дождь из уведомлений.",
      "Секретная встреча с будущим заняла дольше.",
      "Карта города обновлялась прямо под ногами.",
      "Гугл-карта подвела и нарисовала лабиринт.",
      "Я учился говорить с микроволновкой.",
      "Получил квест от соседей по дому.",
      "Проверял, как работают альтернативные линии времени.",
      "Выполнял срочную зарядку вдохновения.",
      "Поймал вдохновение, пришлось преследовать.",
      "Слишком быстро летел через мысль.",
      "В это время я был в режиме бета-теста.",
      "Собирал силу для продуктивного старта.",
      "У меня случилась срочная перепрошивка мотивации.",
      "Я настраивал бесшумный режим для дедлайна.",
      "Дорога внезапно решила быть квестом.",
      "Секретная синхронизация с календарём заняла дольше.",
      "В комнате завис звук, пришлось перезагрузить атмосферу.",
      "Я перепроверял, не забыл ли я забыть.",
      "Слишком серьезно отнесся к паузе и ушёл в нее полностью.",
      "Служба поддержки реальности попросила подождать.",
      "Меня захватил внезапный режим созерцания.",
      "Случилась внеплановая инвентаризация мыслей.",
      "Вдохновение приехало позже, чем обещало.",
      "Телефон устроил репетицию исчезновения.",
      "Я провалился в вкладку, из которой нет выхода.",
      "Возникла срочная тренировка внимания.",
      "Задумался на секунду, прошло полчаса.",
      "У меня отняли время на регистрацию в утре.",
      "Погода попросила эмоциональный комментарий.",
      "Случилось неотложное спасение заметок.",
      "В лифте застряли идеи, пришлось ждать.",
      "Карта приоритета обновилась без предупреждения.",
      "Утренний кофе потребовал дополнительного согласования.",
      "Реальность выдала мне апдейт с перезагрузкой.",
      "Был занят настройкой режима антистресса.",
      "Встретил вдохновение и забыл про время.",
      "Произошла срочная смена сюжетной линии дня.",
      "Я искал тихое место, чтобы собраться с мыслями.",
      "Мой тайм-менеджмент ушёл на перекур.",
      "Завис в очереди за вдохновением.",
      "Пока думал, как начать, начал позже.",
      "Слишком серьёзно подошёл к разминке и не остановился.",
      "Поймал баг в реальности и чинил вручную.",
      "Срабатывала сигнализация внимания каждые пять минут.",
      "Я перепутал «сейчас» и «чуть позже».",
      "Утро не загрузилось, пришлось перезапустить день.",
      "Проверял, совпадают ли планы с погодой.",
      "У меня случился непредвиденный апгрейд настроения.",
      "Пока настраивал режим фокуса, фокус ушёл.",
      "Дорога решила быть длиннее, чем обычно.",
      "Локальный интернет исчез на личных вещах.",
      "Я выбирал правильный темп, и он не выбрался.",
      "Включился режим «перепроверить всё трижды».",
      "Поймал уведомление и пошёл по цепочке событий.",
      "Временная зона мыслей сместилась.",
      "Слишком увлёкся планированием идеального старта.",
      "Меня задержал срочный митинг с собой.",
      "Нужно было спасти идею, она почти убежала.",
      "Потерялся между задачами и нашёлся позже.",
      "Мой список дел начал сам себя редактировать.",
      "Случилась внеплановая пауза на перезагрузку головы.",
      "Я изучал, как правильно ничего не забыть.",
      "Временный сбой навигации по дню.",
      "Файлы решали, как им лучше сохраниться.",
      "Я собирал себя по частям после многозадачности.",
      "Срочно наводил порядок в мыслях."
    ];

    const predictions = [
      "Да, и очень скоро.",
      "Все сложится лучше, чем кажется.",
      "Спроси снова после кофе.",
      "Шансы высоки, действуй смело.",
      "Судьба уже подмигивает.",
      "Не торопись, ответ придет ночью.",
      "Прямо сейчас — лучший момент.",
      "Сегодня твой знак — вдохновение.",
      "Ответ спрятан в маленькой детали.",
      "Сейчас больше подходит пауза.",
      "Удача в синем свете.",
      "Пора раскрывать потенциал.",
      "Твой следующий шаг приведет к сюрпризу.",
      "Это решение сделает день ярче.",
      "Смелость — твой главный союзник.",
      "Оставь сомнения на завтра.",
      "Скоро получишь полезный сигнал.",
      "Неожиданная встреча всё изменит.",
      "Доверяй интуиции.",
      "Ответ: конечно да.",
      "Звёзды улыбаются, действуй мягко.",
      "Небольшая пауза даст сильный результат.",
      "Сегодня твой шанс выглядит как мелочь.",
      "Путь откроется, когда перестанешь торопить.",
      "Сейчас подходит короткий рывок.",
      "Ответ придет из самого спокойного места.",
      "Удача рядом, просто не спугни ее.",
      "Сделай первый шаг без громких ожиданий.",
      "Решение появится после маленькой прогулки.",
      "Судьба за тебя, но любит ясность.",
      "Смелость дает тебе преимущество сегодня.",
      "Да, но добавь чуть больше дисциплины.",
      "Нет, зато рядом есть лучший вариант.",
      "Сейчас время подготовить почву.",
      "День благоволит честному выбору.",
      "Прислушайся к самой простой идее.",
      "Ответ уже есть, просто загляни в заметки.",
      "Попроси помощи — это сработает.",
      "Твой вопрос уже в пути к решению.",
      "Да, если ты оставишь место для вдохновения.",
      "Нет, но это расчистит дорогу к важному.",
      "Важная деталь проявится к вечеру.",
      "Сделай паузу и послушай, что внутри.",
      "Сейчас нужна мягкость, а не скорость.",
      "Судьба любит ясные формулировки.",
      "Лучшее решение проще, чем кажется.",
      "Тебя поддержат, если ты попросишь прямо.",
      "В ближайшее время появится полезный сигнал.",
      "Оставь одно «но» за дверью и входи.",
      "Скоро всё станет на свои места.",
      "Успех рядом, только не спеши.",
      "Ты уже сделал половину пути.",
      "Сначала стабилизация, потом рывок.",
      "Доверься процессу, он работает.",
      "Да, если поставишь четкую цель.",
      "Сначала порядок, потом чудеса.",
      "Смени угол зрения — решение там.",
      "Ответ придёт, когда ты упростишь вопрос.",
      "Тебе нужна не скорость, а ясность.",
      "Согласись на меньшее, чтобы получить больше.",
      "Прямо сейчас — удачный момент для начала.",
      "Сдержанность принесёт лучший результат.",
      "Ожидание не напрасно, оно работает.",
      "Небольшой риск даст крупную награду.",
      "Сделай шаг, даже если он маленький.",
      "Да, если в этом есть твой интерес.",
      "Нет, потому что есть более сильный путь.",
      "Судьба говорит «почти да»."
    ];

    const moodStatuses = [
      "энергия на максимуме",
      "спокойное сияние",
      "легкая бодрость",
      "мечтательный режим",
      "нужен перерыв и чай",
      "заряд вдохновения",
      "тихий фокус",
      "игровой настрой"
    ];

    const facts = [
      "Октопусы могут менять цвет быстрее, чем вы моргаете.",
      "Мед никогда не портится — он может храниться тысячелетиями.",
      "У слонов есть уникальный \"паспорт\" из запахов.",
      "Человеческий мозг потребляет около 20% энергии тела.",
      "Космос официально начинается на высоте 100 км.",
      "Пчёлы общаются танцами.",
      "Коалы спят до 20 часов в сутки.",
      "На Венере день длиннее года.",
      "Киты поют песни, которые слышны за сотни километров.",
      "В космосе пахнет жареным стейком (по описаниям астронавтов).",
      "Бананы технически являются ягодами.",
      "Сердце креветки находится в голове.",
      "Самая короткая война длилась 38 минут.",
      "Глаза страуса больше его мозга.",
      "Луна ежегодно удаляется от Земли примерно на 3,8 см.",
      "Слизни имеют четыре носа.",
      "Дождевые черви дышат через кожу.",
      "Свет от Солнца до Земли летит 8 минут.",
      "Человек производит слюну за жизнь, которой хватит на два бассейна.",
      "Морские звезды не имеют мозга.",
      "Коровы могут различать до 50 других коров.",
      "Сатурн мог бы плавать в воде, если бы она была достаточно большой.",
      "Белый медведь на самом деле имеет чёрную кожу.",
      "В мире больше пластиковых фламинго, чем настоящих.",
      "Шоколад был валютой у ацтеков.",
      "Слоны не умеют прыгать.",
      "В Японии есть остров, населенный кроликами.",
      "Человек делится 50% ДНК с бананом.",
      "Фламинго розовые из-за рациона.",
      "Утконосы светятся в ультрафиолете.",
      "Скорость чихания может превышать 150 км/ч.",
      "У улиток могут быть тысячи микроскопических зубов.",
      "Волки могут слышать вой других волков на километры.",
      "Морские коньки держатся парами и плавают синхронно.",
      "У бабочек есть вкус на лапках.",
      "Самое старое известное дерево старше 4 тысяч лет.",
      "Голуби способны узнавать себя в зеркале.",
      "У жирафа такой же набор костей в шее, как у человека.",
      "Некоторые грибы светятся в темноте.",
      "Летучие мыши могут жить более 30 лет.",
      "Пингвины делают предложение, даря камешек.",
      "Кошки могут издавать более 100 разных звуков.",
      "У медуз нет сердца, но они двигаются ритмично.",
      "Собаки различают до 250 слов и жестов.",
      "Лемуры принимают солнечные ванны сидя.",
      "Вода может кипеть и замерзать одновременно при особых условиях.",
      "Вулканический пепел может ускорять рост некоторых растений.",
      "В Антарктиде есть озера, скрытые под льдом.",
      "У кенгуру нельзя двигать задними лапами независимо.",
      "Самый глубокий океанический желоб глубже Эвереста.",
      "Северное сияние можно услышать в полной тишине.",
      "Олени видят ультрафиолет.",
      "Крокодилы могут плакать, когда едят.",
      "Морские ежи имеют зубы, которые продолжают расти.",
      "Пауки могут плести паутину с разной степенью липкости.",
      "Дельфины используют индивидуальные свисты как имена.",
      "Некоторые птицы спят на лету короткими интервалами.",
      "У лам водоотталкивающая шерсть.",
      "Слонята сосут хобот как дети палец.",
      "Некоторые акулы светятся в темноте.",
      "У колибри сердце может биться больше 1200 раз в минуту.",
      "Вода на Луне была обнаружена в теневых кратерах.",
      "Белки забывают часть своих тайников, помогая лесу расти.",
      "У кенгуру детёныши рождаются размером с вишню.",
      "Моржи могут засыпать в воде, держась клыками за лёд.",
      "В пустынях иногда бывает снег.",
      "У сов поворот головы достигает 270 градусов.",
      "Некоторые рыбы могут «гулять» по суше.",
      "Медведи не все спят зимой, некоторые лишь замедляются.",
      "Совы летают почти бесшумно из-за особого строения перьев.",
      "Леопарды умеют перетаскивать добычу выше собственного веса.",
      "Тигры имеют полосы не только на шерсти, но и на коже.",
      "У пингвинов есть «колени», просто они скрыты перьями.",
      "Соленая вода проводит звук лучше пресной.",
      "Некоторые растения «слышат» вибрации и реагируют ростом.",
      "В горах молния может ударять чаще, чем внизу.",
      "Мухоморы становятся ярче после дождя.",
      "У песцов зимой мех меняет цвет на белый.",
      "Некоторые змеи видят тепло, как картинку.",
      "У жуков-скарабеев есть своеобразный навигационный «компас».",
      "В океане есть «снег» из органических частиц.",
      "Кораллы могут жить сотни лет.",
      "Сахар в крови у колибри в разы выше, чем у человека.",
      "У черепах есть чувство магнитного поля Земли.",
      "Радуга может быть видна ночью при яркой луне.",
      "Паутины могут отражать ультрафиолет и служить ловушками.",
      "Некоторые деревья могут общаться через корневые сети.",
      "У лягушек есть «зимняя» версия сердца, работающая медленнее."
    ];

    // =========================
    // State
    // =========================
    const state = {
      totalGenerations: 0,
      gamesPlayed: 0,
      wins: 0,
      firstClick: false,
      achievements: {
        firstClick: false,
        tenGenerations: false,
        firstWin: false
      }
    };

    const achievementsData = [
      { id: "firstClick", label: "Первый клик", icon: "1" },
      { id: "tenGenerations", label: "10 генераций", icon: "10" },
      { id: "firstWin", label: "Победа в игре", icon: "W" }
    ];

    // =========================
    // Elements
    // =========================
    const excuseOutput = document.getElementById("excuseOutput");
    const excuseBtn = document.getElementById("excuseBtn");
    const ballOutput = document.getElementById("ballOutput");
    const ballBtn = document.getElementById("ballBtn");
    const magicBall = document.getElementById("magicBall");
    const moodOutput = document.getElementById("moodOutput");
    const moodBtn = document.getElementById("moodBtn");
    const moodBar = document.getElementById("moodBar");
    const moodPercent = document.getElementById("moodPercent");
    const moodStatus = document.getElementById("moodStatus");
    const factOutput = document.getElementById("factOutput");
    const factBtn = document.getElementById("factBtn");
    const countFrom = document.getElementById("countFrom");
    const countTo = document.getElementById("countTo");
    const countStep = document.getElementById("countStep");
    const counterDisplay = document.getElementById("counterDisplay");
    const counterStartBtn = document.getElementById("counterStartBtn");
    const counterStopBtn = document.getElementById("counterStopBtn");
    const randomMin = document.getElementById("randomMin");
    const randomMax = document.getElementById("randomMax");
    const randomOutput = document.getElementById("randomOutput");
    const randomBtn = document.getElementById("randomBtn");
    const dice = document.getElementById("dice");
    const diceValue = document.getElementById("diceValue");
    const diceRollBtn = document.getElementById("diceRollBtn");
    const decorCube = document.getElementById("decorCube");
    const guessGrid = document.getElementById("guessGrid");
    const guessMessage = document.getElementById("guessMessage");
    const gameStatus = document.getElementById("gameStatus");
    const totalGenerations = document.getElementById("totalGenerations");
    const gamesPlayed = document.getElementById("gamesPlayed");
    const winsCount = document.getElementById("winsCount");
    const heroClicks = document.getElementById("heroClicks");
    const achievementList = document.getElementById("achievementList");
    const toastContainer = document.getElementById("toastContainer");
    const aboutBtn = document.getElementById("aboutBtn");
    const modeBtn = document.getElementById("modeBtn");
    const year = document.getElementById("year");
    const heroTip = document.getElementById("heroTip");

    const aboutModal = document.getElementById("aboutModal");
    const winModal = document.getElementById("winModal");

    // =========================
    // Helpers
    // =========================
    const getRandom = (items) => items[Math.floor(Math.random() * items.length)];

    const updateCounters = () => {
      totalGenerations.textContent = state.totalGenerations;
      gamesPlayed.textContent = state.gamesPlayed;
      winsCount.textContent = state.wins;
      heroClicks.textContent = state.totalGenerations + state.gamesPlayed;
      gameStatus.textContent = `Игры: ${state.gamesPlayed}`;
    };

    const showToast = (message, highlight = "") => {
      const toast = document.createElement("div");
      toast.className = "toast";
      toast.innerHTML = highlight ? `<strong>${highlight}</strong> ${message}` : message;
      toastContainer.appendChild(toast);
      setTimeout(() => toast.remove(), 2600);
    };

    const unlockAchievement = (id) => {
      if (state.achievements[id]) return;
      state.achievements[id] = true;
      renderAchievements();
      showToast("Достижение получено!", achievementsData.find((a) => a.id === id).label);
    };

    const handleFirstClick = () => {
      if (!state.firstClick) {
        state.firstClick = true;
        unlockAchievement("firstClick");
      }
    };

    const checkTenGenerations = () => {
      if (state.totalGenerations >= 10) {
        unlockAchievement("tenGenerations");
      }
    };

    const renderAchievements = () => {
      achievementList.innerHTML = "";
      achievementsData.forEach((item) => {
        const el = document.createElement("div");
        el.className = "achievement" + (state.achievements[item.id] ? "" : " locked");
        el.innerHTML = `<span class="badge">${item.icon}</span><span>${item.label}</span>`;
        achievementList.appendChild(el);
      });
    };

    const openModal = (modal) => {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    };

    const closeModal = (modal) => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    };

    // =========================
    // Modules logic
    // =========================
    excuseBtn.addEventListener("click", () => {
      handleFirstClick();
      const text = getRandom(excuses);
      excuseOutput.textContent = text;
      excuseOutput.classList.remove("text-pop");
      void excuseOutput.offsetWidth;
      excuseOutput.classList.add("text-pop");
      state.totalGenerations += 1;
      updateCounters();
      checkTenGenerations();
      showToast("Новая отмазка готова!", "SSLLab Fun");
    });

    ballBtn.addEventListener("click", () => {
      handleFirstClick();
      const text = getRandom(predictions);
      ballOutput.textContent = text;
      magicBall.classList.remove("spin");
      void magicBall.offsetWidth;
      magicBall.classList.add("spin");
      state.totalGenerations += 1;
      updateCounters();
      checkTenGenerations();
      showToast("Судьба сказала свое слово", "Шар");
    });

    moodBtn.addEventListener("click", () => {
      handleFirstClick();
      const percent = Math.floor(Math.random() * 61) + 40;
      const status = getRandom(moodStatuses);
      moodOutput.textContent = `Настроение: ${percent}%`;
      moodBar.style.width = `${percent}%`;
      moodPercent.textContent = `${percent}%`;
      moodStatus.textContent = status;
      moodOutput.classList.remove("text-pop");
      void moodOutput.offsetWidth;
      moodOutput.classList.add("text-pop");
      state.totalGenerations += 1;
      updateCounters();
      checkTenGenerations();
      showToast("Настроение обновлено", "Сканер");
    });

    factBtn.addEventListener("click", () => {
      handleFirstClick();
      const text = getRandom(facts);
      factOutput.textContent = text;
      factOutput.classList.remove("fact-flip");
      void factOutput.offsetWidth;
      factOutput.classList.add("fact-flip");
      state.totalGenerations += 1;
      updateCounters();
      checkTenGenerations();
      showToast("Новый факт открыт!", "Факт");
    });

    // =========================
    // Counter
    // =========================
    let counterTimer = null;

    const updateCounterDisplay = (value) => {
      counterDisplay.textContent = Number.isFinite(value) ? value : "Готово";
    };

    const stopCounter = () => {
      if (counterTimer) {
        clearInterval(counterTimer);
        counterTimer = null;
      }
    };

    const startCounter = () => {
      handleFirstClick();
      stopCounter();
      let from = Number(countFrom.value);
      let to = Number(countTo.value);
      let step = Number(countStep.value);

      if (!Number.isFinite(from) || !Number.isFinite(to)) {
        updateCounterDisplay("Ошибка");
        showToast("Введите корректные числа", "Считалка");
        return;
      }

      if (!Number.isFinite(step) || step === 0) {
        step = 1;
      }

      if (from < to && step < 0) {
        step = Math.abs(step);
      }

      if (from > to && step > 0) {
        step = -step;
      }

      let current = from;
      updateCounterDisplay(current);
      showToast("Считалка запущена", "Старт");

      counterTimer = setInterval(() => {
        if ((step > 0 && current >= to) || (step < 0 && current <= to)) {
          updateCounterDisplay(to);
          stopCounter();
          showToast("Готово!", "Считалка");
          return;
        }

        current = Number((current + step).toFixed(6));
        updateCounterDisplay(current);
      }, 320);
    };

    counterStartBtn.addEventListener("click", startCounter);
    counterStopBtn.addEventListener("click", () => {
      stopCounter();
      updateCounterDisplay("Пауза");
    });

    // =========================
    // Random number
    // =========================
    const generateRandomNumber = () => {
      handleFirstClick();
      let min = Number(randomMin.value);
      let max = Number(randomMax.value);

      if (!Number.isFinite(min) || !Number.isFinite(max)) {
        randomOutput.textContent = "Ошибка";
        showToast("Введите корректные числа", "Рандом");
        return;
      }

      if (min > max) {
        [min, max] = [max, min];
      }

      const value = Math.floor(Math.random() * (max - min + 1)) + min;
      randomOutput.textContent = value;
      randomOutput.classList.remove("text-pop");
      void randomOutput.offsetWidth;
      randomOutput.classList.add("text-pop");
      state.totalGenerations += 1;
      updateCounters();
      checkTenGenerations();
      showToast("Случайное число готово", "Рандом");
    };

    randomBtn.addEventListener("click", generateRandomNumber);

    // =========================
    // Dice
    // =========================
    const rollDice = () => {
      handleFirstClick();
      const value = Math.floor(Math.random() * 6) + 1;
      dice.setAttribute("data-value", String(value));
      diceValue.textContent = value;
      dice.classList.remove("roll");
      void dice.offsetWidth;
      dice.classList.add("roll");
      showToast("Выпало число " + value, "Кость");
    };

    diceRollBtn.addEventListener("click", rollDice);

    // =========================
    // Decorative cube
    // =========================
    if (decorCube) {
      const shuffleDecorCube = () => {
        const rotX = -30 + Math.floor(Math.random() * 5) * 30;
        const rotY = 20 + Math.floor(Math.random() * 6) * 30;
        decorCube.style.setProperty("--decor-x", `${rotX}deg`);
        decorCube.style.setProperty("--decor-y", `${rotY}deg`);
      };

      shuffleDecorCube();
      setInterval(shuffleDecorCube, 2200);
    }

    // =========================
    // Guess game
    // =========================
    let winningIndex = 0;

    const setupGame = () => {
      guessGrid.innerHTML = "";
      winningIndex = Math.floor(Math.random() * 9);
      for (let i = 0; i < 9; i++) {
        const btn = document.createElement("button");
        btn.className = "guess-btn";
        btn.textContent = i + 1;
        btn.addEventListener("click", () => handleGuess(i));
        guessGrid.appendChild(btn);
      }
      guessMessage.textContent = "Выберите кнопку.";
    };

    const handleGuess = (index) => {
      handleFirstClick();
      state.gamesPlayed += 1;
      updateCounters();
      if (index === winningIndex) {
        state.wins += 1;
        updateCounters();
        unlockAchievement("firstWin");
        openModal(winModal);
        showToast("Победа в игре!", "Game");
        setTimeout(setupGame, 600);
      } else {
        guessMessage.textContent = "Попробуй снова";
      }
    };

    // =========================
    // Navigation active state
    // =========================
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              link.classList.toggle("active", link.dataset.section === id);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    // =========================
    // Card reveal animation
    // =========================
    const cards = document.querySelectorAll(".card");
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => cardObserver.observe(card));

    // =========================
    // Modals and toggles
    // =========================
    aboutBtn.addEventListener("click", () => openModal(aboutModal));

    document.querySelectorAll("[data-close]").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const modal = event.target.closest(".modal");
        closeModal(modal);
      });
    });

    [aboutModal, winModal].forEach((modal) => {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          closeModal(modal);
        }
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal(aboutModal);
        closeModal(winModal);
      }
    });

    modeBtn.addEventListener("click", () => {
      document.body.classList.toggle("game-mode");
      showToast("Режим игры переключен", "Mode");
    });

    heroTip.addEventListener("click", () => {
      showToast("Совет: соберите 10 генераций для достижения!", "Совет");
    });

    // =========================
    // Init
    // =========================
    year.textContent = new Date().getFullYear();
    renderAchievements();
    setupGame();
    updateCounters();
