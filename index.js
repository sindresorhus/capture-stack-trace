function captureStackTrace(error) {
	const container = new Error(); // eslint-disable-line unicorn/error-message

	Object.defineProperty(error, 'stack', {
		configurable: true,
		get() {
			const {stack} = container;
			Object.defineProperty(this, 'stack', {value: stack});
			return stack;
		},
	});
}

export default Error.captureStackTrace ?? captureStackTrace;
