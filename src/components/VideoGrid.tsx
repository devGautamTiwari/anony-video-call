import { ForwardedRef, ReactNode, forwardRef } from "react";

interface VideoGridProps {
	children: ReactNode;
}

const VideoGrid = forwardRef<HTMLDivElement, VideoGridProps>(
	(props, videoGridRef: ForwardedRef<HTMLDivElement>) => {
		return (
			<div className="video-grid" ref={videoGridRef}>
				{props.children}
			</div>
		);
	}
);

export default VideoGrid;
