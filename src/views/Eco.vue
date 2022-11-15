<template>
	<div class="main-container">
		<HeaderShowcase />
		<HeroAppShowcase />
		<!-- <BrandLogoCarousel /> -->
		<FeatureAppShowcase />
		<Download />
		<ThreeStepProcessWrap />
		<AppShowcaseNewsletter />
		<FooterMain FooterStyle="bg_drak-footer" />
	</div>
</template>

<script>
	import HeaderShowcase from "../components/HeaderShowcase";
	import HeroAppShowcase from "../components/HeroAppShowcase";
	import BrandLogoCarousel from "../components/BrandLogoCarousel";
	import FeatureAppShowcase from "../components/FeatureAppShowcase";
	import Download from "../components/Download";
	import ThreeStepProcessWrap from "../components/ThreeStepProcessWrap";
	import AppShowcaseNewsletter from "../components/sections/AppShowcaseNewsletter";
	import FooterMain from '../components/FooterMain'

	export default {
		name: "HomeShowcase",
		components: {
			HeaderShowcase,
			HeroAppShowcase,
			BrandLogoCarousel,
			FeatureAppShowcase,
			Download,
			ThreeStepProcessWrap,
			AppShowcaseNewsletter,
			FooterMain
		}
	};
</script>
