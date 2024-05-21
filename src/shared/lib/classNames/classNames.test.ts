import { classNames } from './classNames';

describe('classNames', () => {
	test('with one class', () => {
		expect(classNames('someClass')).toBe('someClass');
	});
	test('with additional classes', () => {
		const expected = 'someClass class1 class2';
		expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
	});
	test('with mods and additional classes', () => {
		const expected = 'someClass class1 class2 hovered scrollable';
		expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(
			expected,
		);
	});
	test('with one false mod and without classes', () => {
		const expected = 'scrollable';
		expect(classNames('', { hovered: false, scrollable: true })).toBe(expected);
	});
	test('with one false and one undefined mod and without classes', () => {
		const expected = '';
		expect(classNames('', { hovered: false, scrollable: undefined })).toBe(expected);
	});
});
