import { LitElement } from 'lit-element';
import { YoButton } from '../src/component/yo-button';

test('Can yo', () => {
  expect(YoButton).toBeInstanceOf(LitElement);
});
