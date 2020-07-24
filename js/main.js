'use strict';

import account from './data.js';
import renderYearBalance from './renderYearBalanceContent.js';
import renderYearBalanceFooter from './renderYearBalanceFooter.js';

renderYearBalance(account, '.table-content');
renderYearBalanceFooter(account, '.table-footer');