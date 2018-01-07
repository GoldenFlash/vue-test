<template>
	<div>
		<!-- <div>router</div> -->
		<button @click="click">go to foo</button>
		<!-- <router-view :message="aa"></router-view> -->
		<router-view name="a"></router-view>
		<!-- <div>{{name}}</div> -->
	</div>
</template>
<script type="text/javascript">
	export default{
		props:["id"],
		methods:{
			click(){
				this.$router.push({
					path:'/routerc/foo',

				})
			}
		},
		mounted(){
			console.log(this.$props.id)
			console.log(this.$route.params)
			// console.log(this.$route.query)
		}
	}
</script>