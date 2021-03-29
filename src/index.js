
//import './assets/js/jquery-3.5.1.min.js';
//import $ from 'jquery';
import './assets/scss/nullstyle.scss';
import './assets/scss/main.scss';
import './assets/scss/colors.scss';
import './assets/scss/fonts.scss';
import './assets/scss/form-elements.scss';
import './assets/scss/item-quantity-dropdown.scss';
import './assets/js/item-quantity-dropdown';
import './assets/js/datepicker';
import './assets/scss/air-datepicker/air-datepicker.scss';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';
// import './assets/scss/air-datepicker/cell.scss';
// import './assets/scss/air-datepicker/datepicker.scss';
// import './assets/scss/air-datepicker/navigation.scss';
// import './assets/scss/air-datepicker/timepicker.scss';

$(document).ready(() => {
  $('.iqdropdown').iqDropdown({ 
  // max total items
  maxItems: Infinity,
  // min total items
  minItems: 0,
  // text to show on the dropdown override data-selection-text attribute
  selectionText: 'Сколько гостей',
  // text to show for multiple items
  textPlural: 'гостя',
  //  optionally can use setSelectionText function to override selectionText
  // setSelectionText: (itemCount, totalItems) => {
  //   if (totalItems == 0) {
  //     return 'Сколько гостей';
  //   }
  //   else if (totalItems == 1) {
  //     return `${totalItems} гость`;
  //   } 
  //   else if (totalItems < 5) {
  //     return `${totalItems} гостя`;
  //   }
  //   else return `${totalItems} гостей`;
  // },
  // // buttons to increment/decrement
  // controls: {
  //   position: 'right',
  //   displayCls: 'iqdropdown-item-display',
  //   controlsCls: 'iqdropdown-item-controls',
  //   counterCls: 'counter'
  // },
  // // fires when an item quantity changes
  // onChange: (id, count, totalItems) => {},
  // // return false to prevent an item decrement
  // beforeDecrement: (id, itemCount) => {},
  // // return false to prevent an item increment
  // beforeIncrement: (id, itemCount) => {}
  });
});


var handlesSlider = document.getElementById('slider-handles');

noUiSlider.create(handlesSlider, {
    start: [5000, 10000],
    connect: [false, true, false],
    range: {
        'min': [0],
        'max': [15000]
    }
});