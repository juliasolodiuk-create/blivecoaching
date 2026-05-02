export const navData = {
	home: {
		title: "HOME PAGE",
		pageLinks: [
			{ title: "Home", href: "#hero" },
			{ title: "Problems", href: "#problems" },
			{ title: "Benefits", href: "#benefits" },
			{ title: "Feedbacks", href: "#feedbacks" },
			{ title: "FAQ", href: "#faq" },
			// { title: "Blog", href: "#blog" },
			{ title: "Contacts", href: "#contacts" },
		],
		siteMap: [
			// { title: "Home", href: "/" },
			{ title: "About", href: "/about-me" },
			// { title: "Blog", href: "/blog" },
			{ title: "How To Choose Coach?", href: "/how-to-choose-coach" },
			{ title: "BLive Coaching", href: "/about-blc" },
		],
	},
	howToChooseCoach: {
		title: "HOW TO CHOOSE COACH PAGE",
		pageLinks: [{ title: "Guide", href: "#guide" }],
		siteMap: [
			{ title: "Home", href: "/" },
			{ title: "About", href: "/about-me" },
			// { title: "Blog", href: "/blog" },
			// { title: "How To Choose Coach?", href: "/how-to-choose-coach" },
			{ title: "BLive Coaching", href: "/about-blc" },
		],
	},
	aboutBLC: {
		title: "ABOUT BE LIVE COACHING PAGE",
		pageLinks: [
			{ title: "About", href: "#about" },
			{ title: "How It Works", href: "#howItWorks" },
		],
		siteMap: [
			{ title: "Home", href: "/" },
			{ title: "About", href: "/about-me" },
			// { title: "Blog", href: "/blog" },
			{ title: "How To Choose Coach?", href: "/how-to-choose-coach" },
			// { title: "Be Live Coaching", href: "/about-blc" },
		],
	},
	aboutMe: {
		title: "ABOUT ME PAGE",
		pageLinks: [
			{ title: "About", href: "#about" },
			{ title: "My Why", href: "#myWhy" },
			{ title: "Certificate", href: "#certificate" },
			{ title: "About ICA", href: "#aboutICA" },
		],
		siteMap: [
			{ title: "Home", href: "/" },
			// { title: "Blog", href: "/blog" },
			{ title: "How To Choose Coach?", href: "/how-to-choose-coach" },
			{ title: "BLive Coaching", href: "/about-blc" },
		],
	},
	policy: {
		title: "",
		pageLinks: [],
		siteMap: [
			{ title: "Home", href: "/" },
			{ title: "About", href: "/about-me" },
			// { title: "Blog", href: "/blog" },
			{ title: "How To Choose Coach?", href: "/how-to-choose-coach" },
			{ title: "BLive Coaching", href: "/about-blc" },
		],
	},
};

export type PageType = keyof typeof navData;
