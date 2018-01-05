<template>
	<div>
		<input type="checkbox" name="checkbox" value ="a" v-model="checked">
		<input type="checkbox" name="checkbox" value ="b" v-model="checked">
		<select v-model="checked" multiple>
			<option>1</option>
			<option>2</option>
			<option>3</option>
		</select>
		<!-- 触发条件变为change -->
		<input type="text" name="" v-model.lazy="lazy">
		<div>
			<span>{{checked}}</span>
			<span>{{lazy}}</span>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				checked:[],
				lazy:'',
			}
		},
		mounted(){
			console.log(this.$root)
		}

	}
</script>