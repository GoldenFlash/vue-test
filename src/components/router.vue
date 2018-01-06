<template>
	<div>
		<button @click="click">router</button>
		<!-- <router-view></router-view> -->
	</div>
</template>
<script type="text/javascript">

	export default{
		data(){
			return{

			}
		},
		methods:{
			click(){
				this.$router.push({
					path:'/router'
				})
			}
		}
	}
</script>