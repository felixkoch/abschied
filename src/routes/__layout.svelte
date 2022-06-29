<script lang="ts">
	import '../app.css';
	import logo from './logo.svg';

  import { base } from '$app/paths';
	

</script>

<div class="flex flex-col min-h-screen">
	<header class="p-4 mb-4 md:mb-8 mt-4 flex justify-between items-center container  mx-auto">
		<a href="{base}/"><img src="{base}/logo.svg" alt="" class="logo" /></a>
		<a href="https://meetings.hubspot.com/felix137" class="bg-red-600 text-white rounded-md px-3 py-1 hover:bg-red-700 hidden md:block"
			>Termin vereinbaren</a
		>
	</header>
	<main class="grow">
		<slot />
	</main>
	<footer class="flex justify-center mt-4 text-gray-500 py-4">
		<a href="{base}/datenschutz">Datenschutz</a>&nbsp;/&nbsp;<a href="{base}/impressum">Impressum</a><br />
		
	</footer>
</div>

<style>
	.logo {
		height: 30px;
	}
</style>
