const turnMarked = str => marked(str)

const log = console.log.bind(console)

const saveStorage = (key, str) => localStorage.setItem(key, str)

const loadStorage = key => localStorage.getItem(key)

const __main = () => {
    let app = new Vue({
        // 数据属性
        data: function () {
            return {
                noteKey: 'myContent',
                content: '',
                notes: [],
            }
        },

        // 生命钩子
        // 在 Vue 实例被创建时（例如使用 new Vue({}) ）、完成其他事项之前调用。
        beforeCreate: function () {

        },

        // 在实例准备就绪之后调用。注意，此时实例还没有挂载到 DOM 中。
        created: function () {
            let vue = this
            let note = loadStorage(vue.noteKey) || '**Start note your life!**'
            vue.content = note
        },

        // 在挂载（添加）实例到 Web 页面之前调用
        beforeMount: function () {

        },

        // 当实例被挂载到页面并且 DOM 可见时调用
        mounted: function () {

        },

        // 当实例需要更新时（一般来说，是当某个数据或计算属性发生改变时）调用。
        beforeUpdate: function () {

        },
        // 在把数据变化应用到模板之后调用。注意此时 DOM 可能还没有更新。
        updated: function () {

        },
        // 在实例销毁之前调用。
        beforeDestroy: function () {

        },
        // 在实例完全销毁之后调用。
        destroyed: function () {

        },

    // 计算属性
        computed: {
            notePreview: function () {
                let vue = this
                let h = turnMarked(vue.content)
                return h
            }
        },

        // 侦听器
        watch: {
            // 侦听指定数据属性
            // content: {
            //     handler: function (val, oldVal) {
            //         saveStorage(key, val)
            //     },
            //     deep: false, // 是否递归侦听嵌套对象内部值
            //     immediate: false, // 是否立即调用处理函数
            // }
            // 简写
            // content: function (val, oldVal) {
            //     saveStorage(key, val)
            // }
            // 复用方法
            // content: {
            //     handler: 'saveNote',
            // }
            content: 'saveNote',
        },

        // 复用方法 可复用的函数
        methods:{
            reportOperation: function (opName) {
                log('operation', opName, '-----is here-----')
            },
            saveNote: function (noteString) {
                let vue = this
                saveStorage(vue.noteKey, noteString)
                vue.reportOperation('saving')
            },
        }
    })
    let selector = '#notebook'
    app.$mount(selector)

}

__main()