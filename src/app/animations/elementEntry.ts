import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const navMenuItemEntry = trigger('navMenuItemEntry', [
  state(
    'in',
    style({
      width: '100%',
    })
  ),
  transition('void => *', [style({ width: 0 }), animate('200ms ease-in')]),
  transition('* => void', [animate('200ms ease-out'), style({ width: 0 })]),
]);

export default navMenuItemEntry;
