# Тестовое задание N1 Creator

[Описание задания](https://n1creator.com/whtestjs.html).

[Демонстрация результата](https://geff21st.github.io/n1creator.whtestjs/).

## Компонент <CalendarPicker>

Подключение компонента:

```vue
<calendar-picker
    @select="onDateSelect"
    :initial-date="date"
    initial-lang="ru"
/>
```

Входные параметры:

* Дата (строка в формате "год-месяц-день"), необязательный
* Язык (названия месяцев / дней недели), необязательный, (en / ru)

При выборе даты срабатывает событие ``@select``, в котором можно получить выбранную в календаре дату (в виде строки и в виде объекта).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

