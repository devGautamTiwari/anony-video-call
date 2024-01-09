import { useEffect, useRef } from "react";
import { Footer, VideoGrid } from "./components";
import Webcam from "react-webcam";

function App() {
	const videoGrid = useRef<HTMLDivElement>(null);
	const footer = useRef<HTMLDivElement>(null);
	const webcam = useRef<Webcam>(null);
	const handleResize = () => {
		if (videoGrid.current && footer.current) {
			const videoGridHeight = videoGrid.current.offsetHeight;

			footer.current.style.height = `${
				document.body.clientHeight - videoGridHeight
			}px`;
		}
	};

	useEffect(() => {
		handleResize();
		let currentVideo: null | HTMLVideoElement = null;
		window.addEventListener("resize", handleResize);
		if (webcam.current && webcam.current.video) {
			currentVideo = webcam.current?.video;
			webcam.current.video.addEventListener("loadeddata", () => {
				handleResize();
			});
			webcam.current.video.addEventListener("resize", () => {
				handleResize();
			});
		}
		return () => {
			window.removeEventListener("resize", handleResize);
			currentVideo?.removeEventListener("loadeddata", () => {});
			currentVideo?.removeEventListener("resize", () => {});
		};
	}, []);
	return (
		<div className="app">
			<VideoGrid ref={videoGrid}>
				<Webcam
					className="video video--own"
					ref={webcam}
					audio
					audioConstraints={{
						echoCancellation: true,
						noiseSuppression: true,
						autoGainControl: true,
					}}
					videoConstraints={{ facingMode: "user" }}
					disablePictureInPicture
					mirrored
				/>
				<Webcam />
			</VideoGrid>
			<Footer ref={footer} />
		</div>
	);
}

export default App;
