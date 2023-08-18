function acale() {
    setTimeout("acale()", 100);
    const form = document.forms['aform'];
    const form2 = document.forms['badgeform'];

    var badge1 = form2.elements.badge1.value;
    var badge2 = form2.elements.badge2.value;
    var badge3 = form2.elements.badge3.value;
    var badge4 = form2.elements.badge4.value;
    var badge5 = form2.elements.badge5.value;

    nb1g = 0; nb1p = 0;
    nb2g = 0; nb2p = 0;
    nb3g = 0; nb3p = 0;
    nb4g = 0; nb4p = 0;
    nb5g = 0; nb5p = 0;

    var badge1n = badge1.split(',');
    var badge2n = badge2.split(',');
    var badge3n = badge3.split(',');
    var badge4n = badge4.split(',');
    var badge5n = badge5.split(',');

    if (badge1n[1] == undefined) {
        var length1 = 1;
    }
    else {
        var length1 = 2;
    }

    if (badge2n[1] == undefined) {
        var length2 = 1;
    }
    else {
        var length2 = 2;
    }

    if (badge3n[1] == undefined) {
        var length3 = 1;
    }
    else {
        var length3 = 2;
    }

    if (badge4n[1] == undefined) {
        var length4 = 1;
    }
    else {
        var length4 = 2;
    }

    if (badge5n[1] == undefined) {
        var length5 = 1;
    }
    else {
        var length5 = 2;
    }


    for (var i = 0; i < length1; i++) {
        if (badge1 != '') {
            if ((badge1n[i].includes("%")) && (badge1n[i].includes("攻擊"))) {
                badge1n[i] = badge1n[i].replace(/[^\d]/g, '');
                var nb1p = parseFloat(badge1n[i]);
                nb1p = +nb1p || 0;
            }
            else if (!(badge1n[i].includes("%")) && (badge1n[i].includes("攻擊"))) {
                badge1n[i] = badge1n[i].replace(/[^\d]/g, '');
                var nb1g = parseFloat(badge1n[i]);
                nb1g = +nb1g || 0;
            }
        }
    }

    for (var i = 0; i < length2; i++) {
        if (badge2 != '') {
            if ((badge2n[i].includes("%")) && (badge2n[i].includes("攻擊"))) {
                badge2n[i] = badge2n[i].replace(/[^\d]/g, '');
                var nb2p = parseFloat(badge2n[i]);
                nb2p = +nb2p || 0;
            }
            else if (!(badge2n[i].includes("%")) && (badge2n[i].includes("攻擊"))) {
                badge2n[i] = badge2n[i].replace(/[^\d]/g, '');
                var nb2g = parseFloat(badge2n[i]);
                nb2g = +nb2g || 0;
            }
        }
    }

    for (var i = 0; i < length3; i++) {
        if (badge3 != '') {
            if ((badge3n[i].includes("%")) && (badge3n[i].includes("攻擊"))) {
                badge3n[i] = badge3n[i].replace(/[^\d]/g, '');
                var nb3p = parseFloat(badge3n[i]);
                nb3p = +nb3p || 0;
            }
            else if (!(badge3n[i].includes("%")) && (badge3n[i].includes("攻擊"))) {
                badge3n[i] = badge3n[i].replace(/[^\d]/g, '');
                var nb3g = parseFloat(badge3n[i]);
                nb3g = +nb3g || 0;
            }
        }
    }

    for (var i = 0; i < length4; i++) {
        if (badge4 != '') {
            if ((badge4n[i].includes("%")) && (badge4n[i].includes("攻擊"))) {
                badge4n[i] = badge4n[i].replace(/[^\d]/g, '');
                var nb4p = parseFloat(badge4n[i]);
                nb4p = +nb4p || 0;
            }
            else if (!(badge4n[i].includes("%")) && (badge4n[i].includes("攻擊"))) {
                badge4n[i] = badge4n[i].replace(/[^\d]/g, '');
                var nb4g = parseFloat(badge4n[i]);
                nb4g = +nb4g || 0;
            }
        }
    }

    for (var i = 0; i < length5; i++) {
        if (badge5 != '') {
            if ((badge5n[i].includes("%")) && (badge5n[i].includes("攻擊"))) {
                badge5n[i] = badge5n[i].replace(/[^\d]/g, '');
                var nb5p = parseFloat(badge5n[i]);
                nb5p = +nb5p || 0;
            }
            else if (!(badge5n[i].includes("%")) && (badge5n[i].includes("攻擊"))) {
                badge5n[i] = badge5n[i].replace(/[^\d]/g, '');
                var nb5g = parseFloat(badge5n[i]);
                nb5g = +nb5g || 0;
            }
        }
    }

    

    var aweapon = parseFloat(form.elements.aweapon.value);
    var acollection = parseFloat(form.elements.acollection.value);
    var acollection2 = parseFloat(form.elements.acollection2.value);
    var acollection3 = parseInt(form.elements.acollection3.value);//固
    var acollection4 = parseInt(form.elements.acollection4.value);//固
    var afrp = parseFloat(form.elements.afrp.value);
    var afrpp = parseFloat(form.elements.afrpp.value);
    var afrf = parseInt(form.elements.afrf.value);
    var afrff = parseInt(form.elements.afrff.value);
    var asrp = parseFloat(form.elements.asrp.value);
    var asrpp = parseFloat(form.elements.asrpp.value);
    var asrf = parseInt(form.elements.asrf.value);
    var asrff = parseInt(form.elements.asrff.value);
    var amrp = parseFloat(form.elements.amrp.value);
    var amrpp = parseFloat(form.elements.amrpp.value);
    var amrppp = parseFloat(form.elements.amrppp.value);
    var amrf = parseInt(form.elements.amrf.value);
    var amrff = parseInt(form.elements.amrff.value);
    var amrfff = parseInt(form.elements.amrfff.value);
    var aatt = parseInt(form.elements.aatt.value);
    var acombination = parseFloat(form.elements.acombination.value);
    var mythatk = parseFloat(form.elements.mythatk.value);
    //                       0       1          2             3           4             5     6      7      8     9     10     11    12     13     14    15      16    17      18     19     20            21               
    var nv = new Array(aweapon, acollection, acollection2, acollection3, acollection4, afrp, afrpp, afrf, afrff, asrp, asrpp, asrf, asrff, amrp, amrpp, amrppp, amrf, amrff, amrfff, aatt, acombination, mythatk)
    for (var i = 0; i < 22; i++) {
        nv[i] = +nv[i] || 0;
    }

    var abase1 = nv[19] + nv[7] + nv[8] + nv[11] + nv[12] + nv[16] + nv[17] + nv[18] + nv[3] + nv[4] + nb1g+nb2g+nb3g+nb4g+nb5g;
    var abase2 = nv[0] + nv[1] + nv[2] + nv[5] + nv[6] + nv[9] + nv[10] + nv[13] + nv[14] + nv[15] + nb1p+nb2p+nb3p+nb4p+nb5p;

    var matt = abase1 * (1 + (abase2 / 100)) * (1 + ((nv[20] + nv[21]) / 100));

    mma.innerHTML = matt;
}
