<template>
	<div class="tab-pane-content pl10 pr10">
		<el-table :data="tableData3" border >
		    <el-table-column prop="date" label="日期" width="180">
		    </el-table-column>
		    <el-table-column prop="name" label="姓名" width="180">
		    </el-table-column>
		    <el-table-column prop="address" label="地址">
		    </el-table-column>
		    <el-table-column
		      label="操作"
		      width="100">
		      <template scope="scope">
		        <el-button @click="handleClick" type="text" size="small">查看</el-button>
		        <el-button type="text" size="small">编辑</el-button>
		      </template>
		    </el-table-column>
		</el-table>
		<div class="pagination pt10 pb10">
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage4"
		      :page-size="15"
		      layout="prev, pager, next, total"
		      :total="400">
		    </el-pagination>
		 </div>
	</div>
</template>

<script>
export default {
	props: {
		tabPaneContent: String
	},
	data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleClick() {
        console.log(1);
      }
    }
};
</script>

<style lang="scss">
.pagination{
	text-align: center;
}

</style>
