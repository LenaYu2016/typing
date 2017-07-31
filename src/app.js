import $ from 'jquery';
import Rx from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

let userInput=Rx.Observable.fromEvent($('#userInput'), 'keyup');

userInput.do(()=>$('#notice').text('typing...'))
.debounceTime(1000).map(e=>e.target.value).subscribe(v=>$('#notice').text(v));

