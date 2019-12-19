function add_tr_begin(){
    tb.insertAdjacentHTML('afterbegin', '<tr><td></td><td></td><td></td></tr>');
}

function add_tr_end(){
    tb.insertAdjacentHTML('beforeend', '<tr><td></td><td></td><td></td></tr>');
}

function delete_tr_begin(){
    if(tb.childElementCount>3)tb.firstChild.remove();
}

function delete_tr_end(){
    if(tb.childElementCount>3)tb.lastChild.remove();
}