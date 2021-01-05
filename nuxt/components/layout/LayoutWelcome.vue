<template>
	<div class="layout-welcome text-center mt-12 mb-16">
		<div class="layout-welcome__top font-weight-bold">
			{{ $t('main_welcome_top') }}
		</div>
		<h1 class="layout-welcome__middle">{{ $t('main_welcome_mid') }}</h1>
		<div class="layout-welcome__bottom">
			<span>{{ $t('main_welcome_bottom1') }}</span>
			<span class="font-weight-bold">{{ $t('main_welcome_bottom2') }}</span>
			<span>{{ $t('main_welcome_bottom3') }}</span>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.layout-welcome__top {
	font-size: 1.3rem;
	letter-spacing: 10px;
}
.layout-welcome__middle {
	font-size: 6rem;
	color: #b388ff;
}
</style>
