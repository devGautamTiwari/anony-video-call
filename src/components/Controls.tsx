import { useState } from "react";

const allGenders = [
	{ name: "Male", icon: "👨" },
	{ name: "Female", icon: "👩" },
	{ name: "Other", icon: "🏳️‍🌈" },
];
function Controls() {
	const [genders, setGenders] = useState({ self: 0, lookingFor: 1 });
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);
	const [isStreamingStarted, setIsStreamingStarted] = useState(false);
	const startStreaming = () => {
		setIsStreamingStarted(true);
	};

	const stopStreaming = () => {
		setIsStreamingStarted(false);
	};
	return (
		<div className="grid grid-cols-2 md:grid-cols-2 gap-4 relative mt-4 md:mt-0">
			<button
				type="button"
				className={`absolute top-0 right-0 -mt-7 md:hidden
        `}
				onClick={() => setIsSettingsOpen((prev) => !prev)}
			>
				⚙️
			</button>
			<button
				type="button"
				className="bg-green-900 button text-white hover:bg-green-800"
				onClick={() => startStreaming()}
			>
				{isStreamingStarted ? "Next" : "Start"}
			</button>
			<button
				type="button"
				className="bg-red-900 button text-white hover:bg-red-800 "
				onClick={() => stopStreaming()}
			>
				Stop
			</button>
			<button
				type="button"
				className={`bg-gray-900 button text-white hover:bg-gray-800 ${
					isSettingsOpen ? "block" : "hidden"
				} md:block`}
				onClick={() =>
					setGenders((prev) => ({
						...prev,
						self: (prev.self + 1) % allGenders.length,
					}))
				}
			>
				I am : {allGenders[genders.self].name}{" "}
				{allGenders[genders.self].icon}
			</button>
			<button
				type="button"
				className={`bg-indigo-900 button text-white hover:bg-indigo-800 ${
					isSettingsOpen ? "block" : "hidden"
				} md:block`}
				onClick={() =>
					setGenders((prev) => ({
						...prev,
						lookingFor: (prev.lookingFor + 1) % allGenders.length,
					}))
				}
			>
				Looking for : {allGenders[genders.lookingFor].name}{" "}
				{allGenders[genders.lookingFor].icon}
			</button>
		</div>
	);
}

export default Controls;
