<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">

        <div class="calendar-demo">
            <calendar-picker
                @select="onDateSelect"
                :initial-date="date"
                initial-lang="ru"
            />

            <div class="calendar-demo__r">
                <input type="text" v-model="date">
            </div>
        </div>
    </div>
</template>

<script>
import CalendarPicker from "./components/CalendarPicker";

export default {
    name: 'App',
    components: {
        CalendarPicker,
    },
    data() {
        return {
            date: '...'
        };
    },
    methods: {
        onDateSelect($event) {
            this.date = $event.dateFormatted || '...'
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.calendar-demo {
    display: flex;
    width: 540px;
    max-width: 100%;
    margin: 60px auto 0;
    justify-content: space-between;
}

input {
    height: 30px;
    border: 1px solid #ccc;
    padding: 0 10px;
}
</style>
