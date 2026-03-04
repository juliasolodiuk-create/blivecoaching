export const footerNavData = {
	home: {
		title: "HOME PAGE",
		pageLinks: [
			{ title: "Home", href: "#hero" },
			{ title: "Problems", href: "#problems" },
			{ title: "Benefits", href: "#benefits" },
			{ title: "Feedbacks", href: "#feedbacks" },
			{ title: "FAQ", href: "#faq" },
			{ title: "Highlighs", href: "#highlights" },
			{ title: "Contacts", href: "#contacts" },
		],
		siteMap: [
			// { title: "Home", href: "/" },
			{ title: "About", href: "/about-me" },
			{ title: "Blog", href: "/blog" },
			{ title: "How To Choose Coach?", href: "/how-to-choose-coach" },
			{ title: "Be Live Coaching", href: "/about-blc" },
		],
	},
	howToChooseCoach: {
		title: "HOW TO CHOOSE COACH PAGE",
		pageLinks: [{ title: "Guide", href: "#guide" }],
		siteMap: [
			{ title: "Home", href: "/" },
			{ title: "About", href: "/about-me" },
			{ title: "Blog", href: "/blog" },
			// { title: "How To Choose Coach?", href: "/how-to-choose-coach" },
			{ title: "Be Live Coaching", href: "/about-blc" },
		],
	},
};

export type PageType = keyof typeof footerNavData;
