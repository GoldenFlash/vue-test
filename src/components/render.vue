<!-- <template>
	<div>
		<h1 v-if="level ===1">
			<slot></slot>
		</h1>
		<h2 v-if="level ===2">
			<slot></slot>
		</h2>
	</div>
</template> -->

<script type="text/javascript">
export default{
	props:{
			level:{
				type:Number,
				required:true
			}
		},
	data(){
		return{
			items:[1,2,3,4,5]
		}
	},
	// render:function(createElement){
	// 	// this.$slots.default //slot插槽中的内容
	// 	return createElement('h'+this.level,//此模块的最外层元素
	// 			{//外层元素的配置
	// 				on:{
	// 					click:function(){
	// 						console.log(2)
	// 					}
	// 				}
	// 			},
	// 			[//子元素
	// 				createElement('span',
	// 				{//内层元素的配置
	// 					attrs:{
	// 						name:'a',
							
	// 					},
	// 					style:{
	// 							color:'red'
	// 					},
	// 					on:{
	// 						click:function(){
	// 							console.log(1)
	// 						}
	// 					},
	// 				},this.$slots.default)
	// 			]
	// 		)
	// },
	// render: function (createElement) {
 //  		return createElement('div',
 //  			//在div 中渲染多个子节点
 //  			// 形成一个数组
	//     	Array.apply(null, { length: 20 }).map(function () {
	//       	return createElement('p', 'hi')
	//     	})
 //  		)
	// }
	// render 函数中v-if/v-for
	render:function(createElement){
		if(this.items.length){
			return createElement('ul',this.items.map(function(item){
				return createElement('li',item)
			}))
		}else{
			return createElement('span','error')
		}
	}
		
		
	
	// template:'#template'
}

</script>