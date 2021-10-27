<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="书名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="书作者" prop="author">
                <el-input v-model="ruleForm.author"></el-input>
            </el-form-item>
            <el-form-item label="书页数" prop="pages">
                <el-input v-model="ruleForm.pages"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                <el-button @click="resetForm('ruleForm')">清除</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    id: "",
                    name: '',
                    author: '',
                    pages: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入书名称', trigger: 'blur'},
                        {min: 1, message: '至少1 个字符', trigger: 'blur'}
                    ], author: [
                        {required: true, message: '请输入作者名称', trigger: 'blur'},
                        {min: 1, message: '至少 1  个字符', trigger: 'blur'}
                    ], pages: [
                        {required: true, message: '请输入书页码', trigger: 'blur'},
                        {min: 1, max: 5, message: '长度在 0 到 99999 数字', trigger: 'blur'}
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const _this = this;
                        axios.post("http://localhost:8181/book/saveBook", _this.ruleForm).then(function (response) {
                            if (response.data == "1") {
                                _this.$alert('《' + _this.ruleForm.name + '》添加成功', '成功', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        _this.$router.push("/pageOne")
                                    }
                                });
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>