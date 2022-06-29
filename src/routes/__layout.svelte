<script lang="ts">
	import '../app.css';
	import logo from './logo.svg';
</script>

<div class="flex flex-col min-h-screen">
	<header class="p-4 mb-6 md:mb-8 flex justify-between items-center container  mx-auto">
		<a href="/"><img src="/logo.svg" alt="" class="logo" /></a>
		<a href="/" class="bg-red-600 text-white rounded-md px-3 py-1 hover:bg-red-700 hidden md:block"
			>Termin vereinbaren</a
		>
	</header>
	<main class="grow">
		<slot />
	</main>
	<footer class="flex justify-center mt-4 text-gray-500 py-4">
		<a href="/datenschutz">Datenschutz</a>&nbsp;/&nbsp;<a href="/impressum">Impressum</a>
	</footer>
</div>

<style>
	.logo {
		height: 30px;
	}
</style>
