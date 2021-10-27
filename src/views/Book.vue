<template>
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>图书名称</td>
                <td>作者</td>
                <td>页数</td>
            </tr>

            <tr v-for="value in books">
                <td>{{value.id}}</td>
                <td>{{value.name}}</td>
                <td>{{value.author}}</td>
                <td>{{value.pages}}</td>
            </tr>
        </table>
        {{msg}}
    </div>
</template>

<script>
    export default {
        name: "Book",
        data() {
            return {
                msg: 'hello vue',
                books: []
            }
        }, created() {
            const _this=this;
            axios.get('http://localhost:8181/book/findAll').then(function (resp) {
                _this.books = resp.data

            })
        }
    }
</script>

<style scoped>

</style>