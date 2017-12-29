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

		}
	},
	render:function(createElement){
		this.$slots.default //slot插槽中的内容
		return createElement('h'+this.level,this.$slots.default)
	}
	// template:'#template'
}

</script>