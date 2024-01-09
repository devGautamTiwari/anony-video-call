const messages = [
	{ id: 1, user: "user1", message: "Hi" },
	{ id: 2, user: "user2", message: "Hello" },
	{ id: 3, user: "user1", message: "What is your fav movie genre?" },
	{ id: 4, user: "user2", message: 'idk, i don\'t have any "fav"' },
	{
		id: 5,
		user: "user2",
		message: "i like action and great storytelling films",
	},
];

const user = "user1";

function Chat() {
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const formData = Object.fromEntries(form);
		console.log(formData);
		e.currentTarget.reset();
	};
	return (
		<div className="chat-area">
			<div className="chat-messages">
				{messages.map((message) => (
					<div
						className={`message ${
							message.user === user ? "message--own" : ""
						}`}
						key={message.id}
					>
						<span className="message-text">{message.message}</span>
					</div>
				))}
			</div>
			<form className="chat-footer" onSubmit={onSubmit}>
				<input
					type="text"
					className="chat-input"
					name="message"
					placeholder="Type your message here"
				/>
				<button type="submit" className="chat-send">
					Send
				</button>
			</form>
		</div>
	);
}

export default Chat;
