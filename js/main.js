'use strict';

import account from './data.js';
import renderYearBalance from './renderYearBalanceContent.js';
import renderYearBalanceFooter from './renderYearBalanceFooter.js';
import renderSummaryList from './renderSummaryList.js';

renderYearBalance(account, '.table-content');
renderYearBalanceFooter(account, '.table-footer');
renderSummaryList(account, '.summary-list');
