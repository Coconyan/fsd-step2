
import './assets/js/jquery-3.5.1.min.js';
import './assets/scss/nullstyle.scss';
import './assets/scss/main.scss';
import './assets/scss/colors.scss';
import './assets/scss/fonts.scss';
import './assets/scss/form-elements.scss';
import './assets/scss/item-quantity-dropdown.scss';
import './assets/js/item-quantity-dropdown';

$(document).ready(() => {
  $('.iqdropdown').iqDropdown({ 
  // max total items
  maxItems: Infinity,
  // min total items
  minItems: 0,
  // text to show on the dropdown override data-selection-text attribute
  selectionText: 'item',
  // text to show for multiple items
  textPlural: 'items',
  // optionally can use setSelectionText function to override selectionText
  setSelectionText: (itemCount, totalItems) => { /* return string */ },
  // buttons to increment/decrement
  controls: {
    position: 'right',
    displayCls: 'iqdropdown-item-display',
    controlsCls: 'iqdropdown-item-controls',
    counterCls: 'counter'
  },
  // fires when an item quantity changes
  onChange: (id, count, totalItems) => {},
  // return false to prevent an item decrement
  beforeDecrement: (id, itemCount) => {},
  // return false to prevent an item increment
  beforeIncrement: (id, itemCount) => {}
  });
});