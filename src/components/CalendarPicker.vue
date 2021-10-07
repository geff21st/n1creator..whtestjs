<template>
    <div class="calendar">
        <div class="calendar__top">
            <div class="calendar__prev-month" @click="prevMonth" />

            <div class="calendar__date">
                <div class="calendar__month" v-text="month" />
                <div class="calendar__year" v-text="year" />
            </div>

            <div class="calendar__next-month" @click="nextMonth" />
        </div>

        <div class="calendar__week-days">
            <div class="calendar__week-day"
                 v-for="(day, i) in weekDays"
                 :key="i"
                 v-text="day"
            />

        </div>

        <div class="calendar__days">
            <div class="calendar__day"
                 v-for="(day,i) in days"
                 v-text="day.text"
                 :key="i"
                 :class="{ active: day.active }"
                 @click="selectDay(day)"
            />
        </div>

        <div class="calendar__bottom"></div>
    </div>
</template>

<script>
const DEFAULT_LANG = 'ru';

export default {
    name: "CalendarPicker",

    props: {
        initialDate: String,
        initialLang: String,
    },

    data() {
        return {
            date: null,
            lang: null,
            // todo: добавить возможность управления первым днем недели
            weekDays: [],
            monthNames: [],
        };
    },
    mounted() {
        this.date = this.getInitialDate(this.initialDate) || new Date();
        this.lang = this.initialLang || this.getDocumentLang();

        if (this.lang) {
            try {
                const locData = require(`../data/i18n/${this.lang}.json`) || {};
                this.weekDays = locData.weekDays || [];
                this.monthNames = locData.monthNames || [];
            } catch (error) {
                console.error({ error });
            }
        }


    },
    methods: {
        getInitialDate(value) {
            let tmpDate = null;
            if (value) {
                tmpDate = new Date(value);
                if (tmpDate && tmpDate.getTime()) {
                    return tmpDate;
                }
            }

            return null;
        },
        getDocumentLang() {
            const rootElement = document.querySelector('html');
            if (rootElement) {
                return rootElement.getAttribute('lang') || DEFAULT_LANG;
            }

            return DEFAULT_LANG;
        },
        selectDay(day) {
            this.date = day.date || null;
        },

        getDateFormatted({ date = null }) {
            if (date && (date instanceof Date)) {
                return date.toLocaleDateString('en-CA');
            }

            return null;
        },

        prevMonth() {
            if (this.date && this.date instanceof Date) {
                this.date = new Date(this.year, this.monthNumber - 1, 1);
            }
        },

        nextMonth() {
            if (this.date && this.date instanceof Date) {
                this.date = new Date(this.year, this.monthNumber + 1, 1);
            }
        }
    },

    watch: {
        initialDate(newValue) {
            const initialDate = this.getInitialDate(newValue);
            if (initialDate) {
                this.date = initialDate;
            }
        },
        date(day) {
            const date = { date: day };
            this.$emit(
                'select',
                {
                    ...date,
                    dateFormatted: this.getDateFormatted(date)
                }
            );
        }
    },

    computed: {
        year() {
            return this.date && (this.date instanceof Date) ? this.date.getFullYear() : '';
        },

        /**
         * Номер текущего месяца, январь - это 0
         *
         * @returns {number|null}
         */
        monthNumber() {
            return this.date && (this.date instanceof Date) ? this.date.getMonth() : null;
        },

        month() {
            return typeof this.monthNumber === 'number'
                ? this.monthNames[this.monthNumber] || ''
                : '';
        },

        days() {
            // январь - это 1
            const daysCount = new Date(this.year, this.monthNumber + 1, 0).getDate();

            let days = [];
            for (let i = 1; i <= daysCount; i++) {
                const listDate = new Date(this.year, this.monthNumber, i);
                days.push(
                    {
                        text: i,
                        date: listDate,
                        active: this.date && this.date.getDate() === i,
                    }
                );
            }

            return days;
        }
    }
}
</script>

<style scoped>
.calendar,
.calendar * {
    box-sizing: border-box;
}

.calendar {
    border: 1px solid #ccc;
    width: 300px;
    padding: 20px;
    font-size: 12px;
}

.calendar__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.calendar__date {
    display: flex;
}

.calendar__date div + div {
    margin-left: 10px;
}

.calendar__next-month,
.calendar__prev-month {
    width: 0;
    height: 0;
    display: block;
    border: 4px solid transparent;
    cursor: pointer;
    position: relative;
}

.calendar__next-month:before,
.calendar__prev-month:before {
    content: '';
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -20px;
    right: -20px;
    display: block;
}

.calendar__next-month {
    border-left-color: #000;
}

.calendar__prev-month {
    border-right-color: #000;
}

.calendar__next-month:hover {
    border-left-color: #ccc;
}

.calendar__prev-month:hover {
    border-right-color: #ccc;
}

.calendar__week-days,
.calendar__days {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-right: -4px;
}

.calendar__week-days {
    margin-bottom: 10px;
}

.calendar__week-day,
.calendar__day {
    width: calc((100% / 7) - 4px);
    /*border: 1px solid;*/
    padding-top: 5px;
    padding-bottom: 5px;
    margin-right: 4px;
}

.calendar__day {
    cursor: pointer;
}

.calendar__day:hover,
.calendar__day.active {
    color: blue;
    font-weight: bold;
    position: relative;
}

.calendar__day.active:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    margin-top: -13px;
    background: blue;
    opacity: .2;
    border-radius: 50%;
}
</style>
