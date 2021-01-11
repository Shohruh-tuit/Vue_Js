const App = {
    data() {
        return {
            placeholderString: "Введите значение",
            title: 'Список заметок',
            inputValue: ''
        }
    }
}

Vue.createApp(App).mount('#app')