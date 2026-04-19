import { cookiePolicyDataDE } from "./cookie/cookie_de";
import { cookiePolicyDataEN } from "./cookie/cookie_en";
import { cookiePolicyDataUA } from "./cookie/cookie_ua";
import { privacyPolicyDataDE } from "./privacy/privacy_de";
import { privacyPolicyDataEN } from "./privacy/privacy_en";
import { privacyPolicyDataUA } from "./privacy/privacy_ua";
import { termsDataDE } from "./terms/terms_de";
import { termsDataEN } from "./terms/terms_en";
import { termsDataUA } from "./terms/terms_ua";

export interface PolicySection {
	id: string | number;
	title?: string;
	content: string[];
	list?: string[];
	subTitle?: string;
	subList?: string[];
	footer?: string;
}

export interface PolicyType {
	title: string;
	lastUpdated: string;
	introduction?: string[];
	sections: PolicySection[];
}

export const privacyData = {
	content_en: privacyPolicyDataEN as PolicyType,
	content_ua: privacyPolicyDataUA as PolicyType,
	content_de: privacyPolicyDataDE as PolicyType,
};

export const cookieData = {
	content_en: cookiePolicyDataEN as PolicyType,
	content_ua: cookiePolicyDataUA as PolicyType,
	content_de: cookiePolicyDataDE as PolicyType,
};

export const termsData = {
	content_en: termsDataEN as PolicyType,
	content_ua: termsDataUA as PolicyType,
	content_de: termsDataDE as PolicyType,
};
