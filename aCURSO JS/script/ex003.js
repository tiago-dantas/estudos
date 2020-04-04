// inputs and select
let lname = document.getElementById(iname).Value;
let lage = document.getElementById(iage).Value;
let lgender = document.getElementById(igender).Value;
let llane = document.getElementById(slane).Value;

// button  

let fsubscribe = function() {
    let lbt = document.getElementById(showsubscribe)
    lbt.innerHTML(`Thanks ${lname}. 
    You are ${lgender} and have ${lage}, so your group is GROUP D.
    You go on ${llane} lane and your position is ${lclass}.
    Welcome!`)
}

// checkbox

(function() {
    "use strict";

    var marcados = 0;
    var verifyCheckeds = function($checks) {
        if (marcados >= 1) {
            loop($checks, function($element) {
                $element.disabled = $element.checked ? '' : 'disabled';
            });
        } else {
            loop($checks, function($element) {
                $element.disabled = '';
            });
        }
    };
    var loop = function($elements, cb) {
        var max = $elements.length;
        while (max--) {
            cb($elements[max]);
        }
    }
    var count = function($element) {
        return $element.checked ? marcados + 1 : marcados - 1;
    }
    window.onload = function() {
        var $checks = document.querySelectorAll('input[type="checkbox"]');
        loop($checks, function($element) {
            $element.onclick = function() {
                marcados = count(this);
                verifyCheckeds($checks);
            }
            if ($element.checked) marcados = marcados + 1;
        });
        verifyCheckeds($checks);
    }
}());