<template>
    <div id="system-bulletin">
        <el-button v-show="checkPermission(['AUTH_CURD_SYSTEM_NOTICE'])" type="success" size="mini" @click="addSystemNotice" style="margin: 10px">添加公告</el-button>
        <el-table
                :data="systemNotice.content"
                style="width: 100%">
            <el-table-column
                    type="index"
                    width="50">
            </el-table-column>
            <el-table-column width="150" label="创建时间">
                <template slot-scope="scope">
                    {{scope.row.createTime | date-string}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="title"
                    label="标题">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="200">
                <template slot-scope="scope">
                    <el-button size="mini" type="success" @click="seeContent(scope.row)">查看</el-button>
                    <el-button
                            v-show="checkPermission(['AUTH_CURD_SYSTEM_NOTICE'])"
                            size="mini"
                            type="primary"
                            @click="editSystemNotice(scope.row)">修改</el-button>
                    <el-button
                            v-show="checkPermission(['AUTH_CURD_SYSTEM_NOTICE'])"
                            size="mini"
                            type="danger"
                            @click="deleteSystemNotice(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--底部分页-->
        <div class="footer">
            <el-pagination :current-page="page" :page-size="size" layout="prev, pager, next" :total="systemNotice.totalElements" @current-change="handleCurrentChange"></el-pagination>
            <div class="footerLength">第{{systemNotice.number + 1}}页，共{{systemNotice.totalPages}}页/{{systemNotice.totalElements}}条</div>
        </div>
        <!--公告详情-->
        <el-dialog
                center
                title="系统公告"
                :visible.sync="dialogVisible2"
                width="1000px">
            <div v-html="notificationContent"></div> <!--系统公告详情-->
            <span slot="footer" class="dialog-footer">
           <el-button @click="dialogVisible2 = false">关闭</el-button>
     </span>
        </el-dialog>

        <!--添加-->
        <el-dialog
                :title="title"
                center
                :visible.sync="dialogVisible"
                width="800px">
            <div style="width: 100%">
                <div>标题</div>
                <el-input v-model="form.title" max="64" placeholder="请输入标题（2-64位字符之间）" style="margin: 5px auto"></el-input>
                <div>详细内容</div>
                <quill-editor style="width: 100%;min-width: 400px" v-model="form.notificationContent"
                              ref="myQuillEditor"
                              :options="editorOption">
                </quill-editor>
                <!-- 图片上传组件辅助 不显示-->
                <el-upload v-show="photoStatus" :before-upload="beforeAvatarUpload" class="avatar-uploader" :show-file-list="false" :headers="headers" :on-success="uploadSuccess" style="margin: 10px 20px" drag action="crmapi/api/v1/common/uploadfiles" multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" v-show="this.title === '添加'" @click="saveSystemContentAdd">保存</el-button>
    <el-button type="primary" v-show="this.title === '修改'" @click="saveSystemContent">保存</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
  // 工具栏配置
  import { mapGetters } from 'vuex'
  import { baseImg } from '../../api'
  import { apiSearchSystem, apiEditSystem, apiDeleteSystem, apiAddSystem } from '../../api/systemBulletin.js'
  const toolOptions = [
    ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
    ['blockquote', 'code-block'], // 引用  代码块
    [{ header: 1 }, { header: 2 }], // 1、2 级标题
    [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
    [{ script: 'sub' }, { script: 'super' }], // 上标/下标
    [{ indent: '-1' }, { indent: '+1' }], // 缩进
    // [{'direction': 'rtl'}],                         // 文本方向
    [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
    [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
    [{ font: [] }], // 字体种类
    [{ align: [] }], // 对齐方式
    ['clean'], // 清除文本格式
    ['link', 'image'] // 链接、图片、视频
  ]
  export default {
    name: 'systemBulletin',
    data() {
      return {
        title: '', //文本框添加修改的title
        form: {
          title: '', //系统公告标题
          notificationContent: '' //系统公告详细信息
        },
        systemNotice: {}, //公告列表
        page: 1,
        size: 10,
        dialogVisible: false, //添加
        notificationContent: '', //公告详情
        dialogVisible2: false, //公告详情
        photoStatus: false, //辅助组件不能出现
        editorOption: {
          modules: {
            toolbar: {
              container: toolOptions, // 工具栏选项
              handlers: {
                //value为布尔类型 是否触发
                image: function(value) {
                  if (value) {
                    // 触发input框选择图片文件
                    document.querySelector('.avatar-uploader input').click()//自定义元素的点击事件
                  } else {
                    this.quill.format('image', false)
                  }
                }, //图片上传事件重写
                link: function(value) {
                  if (value) {
                    let href = prompt('请输入url')
                    this.quill.format('link', href)
                    return false
                  } else {
                    this.quill.format('link', false)
                  }
                }
              }

            }
          },
          placeholder: '请在这里添加公告', //提示
          readyOnly: false, //是否只读
          theme: 'snow', //主题 snow/bubble
          syntax: true //语法检测
        }
      }
    },
    computed: {
      ...mapGetters(['headers'])
    },
    mounted() {
      this.initSearch() //初始化查询
    },
    methods: {
      //添加
      addSystemNotice() {
        this.title = '添加'
        this.form = {
          title: '', //系统公告标题
          notificationContent: '' //系统公告详细信息
        }
        this.dialogVisible = true
      },
      // 添加保存
      async saveSystemContentAdd() {
        if (this.form.title.length > 64 || this.form.title.length < 2) {
          this.$message.error('标题字数请限制在2-64位字符之间')
          return false
        }
        let _form = {
          enterpriseId: 1,
          number: 0,
          contentUrl: '',
          state: 1,
          ...this.form,
          createTime: new Date().getTime()
        }
        let { data } = await apiAddSystem(_form)
        if (data.code == 1020000) {
          this.$message.success('添加成功')
          this.dialogVisible = false
          this.initSearch() //查询第一页
        }
      },
      //初始化查询
      initSearch() {
        this.page = 1
        this.searchSystemNotice()
      },
      //查询请求
      async searchSystemNotice() {
        let _form = {
          size: this.size,
          page: this.page - 1
        }
        let { data } = await apiSearchSystem(_form)
        if (data.code == 1020000 || data.code == 1040400) {
          this.systemNotice = data.content
        } else {
          this.systemNotice = {}
        }
      },
      //点击修改按钮
      editSystemNotice(system) {
        this.title = '修改'
        this.dialogVisible = true
        this.form = { //赋值
          ...system
        }
      },
      seeContent(row) {
        this.dialogVisible2 = true
        this.notificationContent = row.notificationContent
      },
      //修改保存
      async saveSystemContent() {
        if (this.form.title.length > 64 || this.form.title.length < 2) {
          this.$message.error('标题字数请限制在2-64位字符之间')
          return false
        }
        let _form = {
          ...this.form
        }
        let {data} = await apiEditSystem(_form)
        if (data.code == 1020000) {
          this.$message.success('系统公告修改成功')
          this.dialogVisible = false
          this.searchSystemNotice() //重新执行查询当前页
        } else if (data.code == 1040400) {
          this.$message.error(data.message)
        }
      },
      // 删除公告
      async deleteSystemNotice(user) {
        let { data } = await apiDeleteSystem(user.id)
        if (data.code == 1020000) {
          this.$message.success('删除成功')
          // 当前页面只剩一条数据且page大于1
          // 查询的page自动- 1
          if (this.systemNotice.content.length == 1 && this.page > 1) {
            this.page = this.page - 1
            this.searchSystemNotice() //重新执行查询当前page -1页
          } else {
            this.searchSystemNotice() //重新执行查询当前页
          }
        } else {
          this.$message.error('删除失败')
        }
      },
      // 上传图片
      uploadSuccess(success) {
        // res为图片服务器返回的数据
        // 获取富文本组件实例
        let quill = this.$refs.myQuillEditor.quill
        if (success.result == 'yes') {
          // 获取光标所在位置
          let length = quill.getSelection().index
          // 插入图片  res.url为服务器返回的图片地址
          quill.insertEmbed(length, 'image', `${baseImg}${success.url}`)
          // 调整光标到最后
          quill.setSelection(length + 1)
        } else {
          this.$message.error('图片插入失败')
        }
      },
      // 限制上传文件的类型为图片 -- 否则不上传
      beforeAvatarUpload(file) {
        let type = file.type.split('/')[0]
        if (type !== 'image') {
          this.$message.error('上传图片类型不匹配')
          return false
        }
      },
      // 分页
      handleCurrentChange(page) {
        this.page = page
        this.searchSystemNotice()
      }
      /*富文本编辑框自带方法
      onEditorBlur(quill) {
        //设置高度且能滚动 多图上传
        console.log('editor blur!')
      },
      onEditorFocus(quill) {
        console.log('editor focus!')
      },
      onEditorReady(quill) {
        console.log('editor ready!')
      }*/
      // onEditorChange({ quill, html, text }) { //单项数据绑定写法的change监听事件
      //   this.content = html
      // }
    }
  }
</script>

<style scoped>

</style>
