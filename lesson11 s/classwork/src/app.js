import jquery from 'jquery';
import {header} from './modules/header';
import {main} from './modules/main';
import {footer} from './modules/footer';
import './app.scss';

jquery('body').append(header,main, footer);