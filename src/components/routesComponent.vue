<template>
	<div>
		<!-- <div>router</div> -->
		<router-link to="/routerc/foo">foo</router-link>
		<!-- <router-view></router-view> -->
	</div>
</template>
<script type="text/javascript">
	export default{
		mounted(){
			console.log(this.$route.params)
		}
	}
</script>