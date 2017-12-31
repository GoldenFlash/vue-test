<template>
	<div class="a">
		<!-- v-model语法糖的实现方式 -->
	<!-- 	<input
  			v-bind:value="inputValue"
  			v-on:input='inputValue = $event.target.value'> -->

		<!-- 组件中的写法 -->
		<!-- <custom-input
		  v-bind:value="something"
		  v-on:input="something = arguments[0]">
		</custom-input> -->

		<!-- <abc v-model = "string">
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

		<!-- <render :level='1'>hello</render> -->
		
		<inputComponent :inputValue = "inputValue" @input = "inputValue=arguments[0]"></inputComponent>
		<inputComponent v-model = "inputValue"></inputComponent>
		<inputComponent ></inputComponent>
		

	</div>
</template>
<script type="text/javascript">	
import abc from '@/components/b.vue'
import render from '@/components/render.vue'
import inputComponent from '@/components/inputComponent.vue'
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
				component:'abc',
				inputValue:'123'
			}
		},

		components:{
			abc:abc,
			render:render,
			inputComponent
		},
		methods:{
			click(){
				this.numb++
				// vue.$data.numb 相当于 vue.numb
				// console.log(this.$data.numb)
			},
			input(arg){
				console.log(arg);
				this.inputValue = arg;
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
			},
			// numb:{
			// 	// 监听回调函数
			// 	hander:function(newvalue,oldvalue){
			// 		console.log(newvalue)
			// 		this.numb1 = newvalue
			// 		console.log(this.numb1)
			// 	},
			// 	//深度watcher
			// 	deep:true,
			// 	immediate:true,//该回调会在侦听开始后被立即调用
			// }
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