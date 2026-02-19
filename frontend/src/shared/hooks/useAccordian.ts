import { useEffect, useRef, useState } from "react";

export const useAccordion = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [height, setHeight] = useState(0);
	const contentRef = useRef<HTMLDivElement>(null);

	const toggle = () => setIsOpen((prev) => !prev);

	useEffect(() => {
		if (isOpen && contentRef.current) {
			setHeight(contentRef.current.scrollHeight);
		} else {
			setHeight(0);
		}
	}, [isOpen]);

	return { isOpen, toggle, contentRef, height };
};
