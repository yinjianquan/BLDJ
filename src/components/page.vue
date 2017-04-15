<template>
	<div>
		<h1>这是页面2</h1>
		<p @click='goPage1'>点击跳到页面1</p>
	</div>
</template>
<script>
	export default {
	    methods :{
	        goPage1 () {
	            this.$router.push('/main');
	        }
	    }
	}
</script>