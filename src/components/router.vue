<template>
	<div>
		<button @click="go(-1)">后退</button>
		<button @click="go(1)">前进</button>
		<button @click="click">router</button>
		<router-link to="/routerc/123">123</router-link>
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
				console.log(1)
				this.$router.push({
					
					name:'routerc',
					params:{
						id:'a'
					}
					// path:'/routerc',
					// query:{
					// 	id:'a'
					// }
				})
			},
			go(value){
				this.$router.go(value)
			}
		}
	}
</script>