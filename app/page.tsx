import {
	Avatar,
	Box,
	Button,
	Center,
	Heading,
	LinkOverlay,
	UIProvider,
	VStack,
	Text,
	Link
} from "@yamada-ui/react";
import React from "react";

const Home = () => {
	return (
		<div>
			<UIProvider>
				<Box my="10">
					<Center>
						<Avatar
							size="2xl"
							src="https://avatars.githubusercontent.com/u/65223637?v=4"
						/>
					</Center>
				</Box>
				<Box my="5">
					<Center>
						<Heading as="h1" size="xl">Kosei Nakajima</Heading>
					</Center>
					<Center>
						<Heading as="h2" size="md">ねくさす</Heading>
					</Center>
				</Box>

				<VStack>
					<Button>
						<LinkOverlay href="https://twitter.com/nexus_106" isExternal>
							X(Twitter)
						</LinkOverlay>
					</Button>
					<Button>
						<LinkOverlay
							href="https://bsky.app/profile/nexus106.com"
							isExternal
						>
							Bluesky
						</LinkOverlay>
					</Button>
					<Button>
						<LinkOverlay
							href="https://i.kosein.dev/"
							isExternal
						>
							Instagram
						</LinkOverlay>
					</Button>
					<Button>
						<LinkOverlay href="https://soundcloud.com/nexus_106" isExternal>
							Soundcloud
						</LinkOverlay>
					</Button>
					<Button>
						<LinkOverlay href="https://podcasters.spotify.com/pod/show/nvpptidk4so">
							Podcast
						</LinkOverlay>
					</Button>
					<Button>
						<LinkOverlay href="https://github.com/nexus106">
							GitHub
						</LinkOverlay>
					</Button>
					<Box>
						<Center>
							<Text>
								Made with Next.js(Static Exports) &{" "}
								<Link href="https://yamada-ui.com/ja">Yamada UI</Link>
							</Text>
						</Center>
					</Box>
				</VStack>
			</UIProvider>
		</div>
	);
};

export default Home;

// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.tsx</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore starter templates for Next.js.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
