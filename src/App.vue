<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script>
export default {
	name:'app-zy',
	created() {}
}
</script>
<style lang="scss">
html,body,#app{
	width: 100%;
	height: 100%;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #333;
}
</style>
