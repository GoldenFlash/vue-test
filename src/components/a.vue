<template>
	<div class="a">
		<!-- v-model语法糖的实现方式
		<custom-input
  			v-bind:value="something"
  			v-on:input="something = arguments[0]">
		</custom-input>
		<abc v-model = "string">
  			<span slot = "header">header</span>	
  		</abc>  -->

		<!-- <component-c></component-c> -->

		 <!-- 动态模块， abc模块根据component的值发生改变 -->
		<!-- component 标签绑定is属性表示子模块 -->
		<!-- <component v-bind:is="component"></component>  -->

		<!-- 	watch
		<button @click="click">click a</button>
		<span>{{numb}}</span>
		<span>{{numb1}}</span> -->

	</div>
</template>
<script type="text/javascript">	
import abc from '@/components/b.vue'
	export default{
		data(){
			return {
				string:'',
				numb:1,
				numb1:1,
				message:{
					name:'wang',
					numb:2,
					numb1:3
				},
				component:'abc'
			}
		},

		components:{
			abc:abc
		},
		methods:{
			click(){
				this.numb++
				// vue.$data.numb 相当于 vue.numb
				// console.log(this.$data.numb)
			}

		},
		//计算属性性质与data中的数据相同，当计算属性所依赖的属性发生改变时时时改变属性的值，
		//当依赖的属性值没有发生改变时会利用缓存的值而不会去计算（读取计算属性时）
		computed:{

		},
		//当背监视的数据发生改变时通知依赖此数据的数据发生改变（调用watch中对应的函数）,被监视的数据必须在data中存在
		//watch中的函数名即为被监视的数据
		// 实例属性 vue.$watch
		watch:{
			numb:function(newvalue,oldvalue){
				console.log(newvalue)
				this.numb1 = newvalue
				console.log(this.numb1)
			}
		}
	};
	// 全局组件
	// Vue.component('component-c',{
	// 	template:'<span>cccc</span>'
	// })
</script>
<style type="text/css">
	.a{
		height:500px;
		width:100%;
		border:solid black 1px;
	}
</style>