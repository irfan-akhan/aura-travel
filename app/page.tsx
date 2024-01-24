import Camp from "@/components/Destination";
import Features from "@/components/Features";
import GetApp from "@/components/Contact";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import HotelsView from "@/components/HotelsView";

export default function Home() {
	return (
		<>
			<Hero />
			<Camp />
			<Guide />
			<Features />
			<HotelsView />
			<GetApp />
		</>
	);
}
