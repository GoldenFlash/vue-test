<!-- <template>
	<div>
		<input type="text" name="a" @input = "input($event.target.value)">
		<div class="value">{{inputValue}}</div>
	</div>
</template> -->
<script type="text/javascript">
	export default{
		// 父组件使用v-model必须设置model 属性
		model:{
			prop:'inputValue',
			event:'input'
		},
		// 可以获取model中的prop属性值作为父组件传递的值
		props:['inputValue'],
		// methods:{
		// 	input(value){
				
		// 		this.$emit('input',value);
		// 	}
		// },
		render:function(createElement){
			var self = this;//保存this
			// render函数只允许有一个根节点，同template相同
			return createElement('div',[createElement('input',{

				on:{
					input:function(){
						self.$emit('input',event.target.value) //event.target.value ==template中的$event.target.value
					}
				}
			}),createElement('div',{
				// dom节点内容设置
				'domProps':{
					// value:this.inputValue,
					innerText:this.inputValue
				},
				// style:{
				// 	height:'20px',
				// 	border:'solid red 1px',
				// }
				// 'class':{
				// 	value:true
				// }
				// key可加引号可不加引号
				class:{
					// 'value':true
					value:true
				}
			},)])
		}

	}
</script>
<style type="text/css">
	.value{
		border:solid red 1px;
		height:20px;
	}
</style>