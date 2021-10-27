<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="id"
                    label="ID"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名称"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="author"
                    label="作者"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="pages"
                    label="页数"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">

                    <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="deleteBook(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                @current-change="page"
                page-size=2
                :total="total">
        </el-pagination>
    </div>


</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            }, page(currentPage) {
                const _this = this;
                _this.pageSize = currentPage;
                axios.get('http://localhost:8181/book/findAll/' + _this.pageSize + '/' + _this.size).then(function (resp) {
                    _this.tableData = resp.data.content;
                    _this.total = resp.data.totalElements;

                })
            }, edit(row) {
                this.$router.push({
                    path: '/PageThree',
                    query: {
                        id: row.id
                    }
                })
            }, deleteBook(row) {
                const _this = this;
                axios.post("http://localhost:8181/book/deleteById", row).then(function (response) {
                    if (response.status = 200) {
                        axios.get('http://localhost:8181/book/findAll/' + _this.pageSize + '/' + _this.size).then(function (resp) {
                            _this.tableData = resp.data.content;
                            _this.total = resp.data.totalElements;

                        })
                    }


                })
            }
        }, created() {
            const _this = this;
            axios.get('http://localhost:8181/book/findAll/' + _this.pageSize + '/' + _this.size).then(function (resp) {
                _this.tableData = resp.data.content;
                _this.total = resp.data.totalElements;

            })
        },

        data() {
            return {
                total: null,
                pageSize: 1,
                size: 2,
                tableData: []
            }
        }
    }
</script>