<template>
    <div id="app">
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <!-- el-menu: 外部总体菜单-->
                <!-- :default-openeds: 默认展开事件-->
                <!-- :default-active: 默认打开时选择-->
                <!--                <el-menu :default-openeds="['1', '3']" :default-active="'1-1'">-->
                <!--                    &lt;!&ndash;el-submenu ：可展开的菜单&ndash;&gt;-->
                <!--                    &lt;!&ndash;index 菜单的下标，文本类型，不是数值类型&ndash;&gt;-->
                <!--                    <el-submenu index="1">-->
                <!--                        <template slot="title"><i class="el-icon-setting"></i>导航一</template>-->
                <!--                        &lt;!&ndash;el-menu-item:不可在展开的字节的-->
                <!--                        index：菜单的下标-->
                <!--                        &ndash;&gt;-->
                <!--                        <el-menu-item index="1-1">选项1-1</el-menu-item>-->
                <!--                        <el-menu-item index="1-2">选项1-2</el-menu-item>-->
                <!--                        <el-submenu index="1-3">-->
                <!--                            <template slot="title"><i class="el-icon-setting"></i>导航二</template>-->
                <!--                            <el-menu-item index="1-3-1">选项2-1</el-menu-item>-->
                <!--                            <el-menu-item index="1-3-1">选项2-2</el-menu-item>-->
                <!--                        </el-submenu>-->
                <!--                    </el-submenu>-->
                <!--                </el-menu>-->
                <el-menu :default-openeds="['0', '1']" router>
                    <el-submenu v-for="(item,index) in $router.options.routes" v-bind:index="(index)+''">
                        <template slot="title"><i class="el-icon-setting"></i>{{item.name}}</template>
                        <el-menu-item v-for="(item2) in item.children" v-bind:index="item2.path"
                                      :class="$route.path==item2.path?'is-active':''">
                            {{item2.name}}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>


            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>

                <el-main>
                    <!--                    <el-table :data="tableData">-->
                    <!--                        <el-table-column prop="date" label="日期" width="140">-->
                    <!--                        </el-table-column>-->
                    <!--                        <el-table-column prop="name" label="姓名" width="120">-->
                    <!--                        </el-table-column>-->
                    <!--                        <el-table-column prop="address" label="地址">-->
                    <!--                        </el-table-column>-->
                    <!--                    </el-table>-->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>


<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>

<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    };
</script>