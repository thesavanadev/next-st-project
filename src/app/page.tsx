import Link from "next/link";

import { Button } from "@/ui/button";
import { Container } from "@/components/container";

const Home = () => {
	return (
		<Container>
			<article>
				<section className="pt-36 pb-36">
					<h1 className="text-primary font-header text-4xl font-bold tracking-wide">Next.js Starter Template</h1>

					<p className="my-5">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, cum reprehenderit. Doloremque
						corrupti aliquid nihil magnam impedit, quisquam soluta? Expedita et dolorum quo laudantium odio esse,
						distinctio nulla hic ea.
					</p>

					<Button className="rounded-lg font-semibold uppercase" variant="default" asChild>
						<Link href="/" target="_blank">
							Go To Homepage
						</Link>
					</Button>
				</section>
			</article>
		</Container>
	);
};

export default Home;
