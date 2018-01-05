<template>
	
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				message:'1'
			}
		},
		beforeCreate(){
			console.log(this.mesage)
		},
		created(){
			console.log(this.message)
			console.log(this.$el)
			
		},
		mounted(){
			console.log(this.$el)
		}
	}
</script>