<template>
	<div>
		<input  @input='updateValue($event.target.value)'>
		<!-- <div >{{abc}}</div> -->
		<div>{{name}}</div>
		<div>{{message}}</div>
		<slot name= "header"></slot>
		<!-- <selfComponent>2131</selfComponent>	 -->
	</div>
</template>
<script type="text/javascript">
// import b from './b.vue'
	export default{
		model:{
			prop:'abc', //设置父组件 v-model 中的参数 默认为  model:{prop:'abc', event:'change'};
			event:'change'
		},
		props:{
			msg:[Object,Number,String],
			numb1:Number,
			name:String,
			abc:[Number,String],
			message:{
				type:Object,
				// default:100,
			},
			
			numb2:{
				type:Number,
				default:20
			}
		},
		data(){
			return {
				age:12
			}
		},
		components:{
			// selfomponent:b
		},
		methods:{
			clickb(){
				this.$emit('increase')
			},
			input(){
				this.$emit('input')
			},
			updateValue: function (value) {
		      var formattedValue = value.trim().slice(0,value.indexOf('.') === -1? value.length: value.indexOf('.') + 3
		        )

		     
		      // 通过 input 事件带出数值
		      this.$emit('change', formattedValue)
		    }
		}
	}
</script>
<style type="text/css">
	.b{
		/*height:20px;*/
		/*width:20px;*/
		/*border:solid red 1px;*/
	}
</style>