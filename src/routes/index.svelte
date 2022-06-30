<script>
	import bild from './web.jpg';
</script>

<svelte:head>
	<title>tagungshotels.info</title>
</svelte:head>

<div class="container mx-auto max-w-screen-md">
	<div class="mx-4 bg-white  p-8  rounded-lg relative">
		<div class="absolute p-4 bg-white shadow-lg rounded-lg wrapper rotate-12 hidden md:block ani">
			<img src={bild} alt="Felix Koch" class="bild rounded-md " />
		</div>
		<p class="mb-4 text-lg text-blue-700 italic md:w-[calc(100%_-_10rem)]">
			Liebe Kundinnen und Kunden,
		</p>
		<p class="md:w-[calc(100%_-_10rem)]">
			ich habe mich entschieden meine Tagungshotelvermittlung <em>tagungshotels.info</em> aufzugeben.
			Ich bedanke mich für Ihr Vertrauen in den vergangenen zwei Jahren.
		</p>
		<p>Es hat mir viel Freude bereitet, Sie bei Ihrer Tagungsplanung unterstützen zu dürfen.</p>
		<p>
			<em>tagungshotels.info</em> war mein Einstieg in die Selbständigkeit und ich durfte durch die Gründung
			viel lernen. Zukünftig möchte ich mich ausschließlich auf meine Tätigkeiten als Freelancer konzentrieren.
		</p>
		<p>
			Als Full Stack Developer mit über 15 Jahren Erfahrung und Datenanalyst unterstütze ich meine
			Kunden beim Entwurf und bei der Entwicklung von internen und externen Webanwendungen, Tools
			und Dashboards. Hierbei setze ich am liebsten TypeScript/React und Power BI ein. Meine Stärke
			liegt in der Kommunikation auf dem Weg von Ihrem fachlichem Bedarf zur technischen Lösung.
		</p>
		<p>
			Gerne spreche ich mit Ihnen über Ihr Projekt: <a href="tel:+4942669999999" class="underline"
				>+49 4266 999 999 9</a
			>
			oder wählen Sie einfach einen Termin in
			<a href="https://meetings.hubspot.com/felix137" class="underline">meinem Kalender</a>.
		</p>

		<p class="mb-4 text-lg text-blue-700 italic">Herzliche Grüße<br />Felix Koch</p>
	</div>
</div>

<style>
	p {
		margin-bottom: 1.5em;
	}

	.bild {
		width: 150px;
	}

	.wrapper {
		right: -20px;
		top: -20px;
	}

	/* animate wiggle */
	.ani:hover {
		animation: wiggle 2s infinite;
	}

	@keyframes wiggle {
		0% {
			transform: rotate(12deg);
		}
		50% {
			transform: rotate(5deg);
		}
		100% {
			transform: rotate(12deg);
		}
	}
</style>
