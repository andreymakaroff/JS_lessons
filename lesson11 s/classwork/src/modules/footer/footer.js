import { elementBuilder } from '../elementBuilder';

import './footer.scss';

export const  footer = elementBuilder('footer',`<p>Easycode11 ${new Date().getFullYear()} (c)</p>`, 'footer');