import data from './data.js';
import renderTableRows from './renderTableRows.js';
import renderTableFooter from './renderTableFooter.js';
import renderSummary from './renderSummary.js';

const months = [
    'Sausis',
    'Vasaris',
    'Kovas',
    'Balandis',
    'Gegužė',
    'Birželis',
    'Liepa',
    'Rugpjūtis',
    'Rugsėjis',
    'Spalis',
    'Lapkritis',
    'Gruodis'
];

renderTableRows('.table-content', data, months);
renderTableFooter('.table-footer', data);
renderSummary('.summary-list', data, months);
