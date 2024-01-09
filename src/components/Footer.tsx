import { forwardRef, ForwardedRef } from "react";
import { Chat, Controls } from "./";

const Footer = forwardRef<HTMLDivElement>(
	(props, footerRef: ForwardedRef<HTMLDivElement>) => {
		return (
			<div
				className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-4 py-2 px-2 md:px-4"
				ref={footerRef}
			>
				<Controls />
				<Chat />
			</div>
		);
	}
);

export default Footer;
