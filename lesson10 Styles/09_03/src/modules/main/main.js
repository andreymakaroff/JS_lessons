import { elementBuilder } from '../elementBuilder'

import './main.scss';

const content = `<div>Main</div>`;

export const main = elementBuilder('section',content, 'main');