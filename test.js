import test from 'ava';
import captureStackTrace from './index.js';

test('main', t => {
	const object = {};
	captureStackTrace(object);
	t.is(typeof object.stack, 'string');
});
