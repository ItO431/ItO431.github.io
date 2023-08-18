
function cale() {
    setTimeout("cale()",100);
    const form = document.forms['form'];
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
            if ((badge1n[i].includes("%")) && (badge1n[i].includes("生命"))) {
                badge1n[i] = badge1n[i].replace(/[^\d]/g, '');
                var nb1p = parseFloat(badge1n[i]);
                nb1p = +nb1p || 0;
            }
            else if (!(badge1n[i].includes("%")) && (badge1n[i].includes("生命"))) {
                badge1n[i] = badge1n[i].replace(/[^\d]/g, '');
                var nb1g = parseFloat(badge1n[i]);
                nb1g = +nb1g || 0;
            }
        }
    }

    for (var i = 0; i < length2; i++) {
        if (badge2 != '') {
            if ((badge2n[i].includes("%")) && (badge2n[i].includes("生命"))) {
                badge2n[i] = badge2n[i].replace(/[^\d]/g, '');
                var nb2p = parseFloat(badge2n[i]);
                nb2p = +nb2p || 0;
            }
            else if (!(badge2n[i].includes("%")) && (badge2n[i].includes("生命"))) {
                badge2n[i] = badge2n[i].replace(/[^\d]/g, '');
                var nb2g = parseFloat(badge2n[i]);
                nb2g = +nb2g || 0;
            }
        }
    }

    for (var i = 0; i < length3; i++) {
        if (badge3 != '') {
            if ((badge3n[i].includes("%")) && (badge3n[i].includes("生命"))) {
                badge3n[i] = badge3n[i].replace(/[^\d]/g, '');
                var nb3p = parseFloat(badge3n[i]);
                nb3p = +nb3p || 0;
            }
            else if (!(badge3n[i].includes("%")) && (badge3n[i].includes("生命"))) {
                badge3n[i] = badge3n[i].replace(/[^\d]/g, '');
                var nb3g = parseFloat(badge3n[i]);
                nb3g = +nb3g || 0;
            }
        }
    }

    for (var i = 0; i < length4; i++) {
        if (badge4 != '') {
            if ((badge4n[i].includes("%")) && (badge4n[i].includes("生命"))) {
                badge4n[i] = badge4n[i].replace(/[^\d]/g, '');
                var nb4p = parseFloat(badge4n[i]);
                nb4p = +nb4p || 0;
            }
            else if (!(badge4n[i].includes("%")) && (badge4n[i].includes("生命"))) {
                badge4n[i] = badge4n[i].replace(/[^\d]/g, '');
                var nb4g = parseFloat(badge4n[i]);
                nb4g = +nb4g || 0;
            }
        }
    }

    for (var i = 0; i < length5; i++) {
        if (badge5 != '') {
            if ((badge5n[i].includes("%")) && (badge5n[i].includes("生命"))) {
                badge5n[i] = badge5n[i].replace(/[^\d]/g, '');
                var nb5p = parseFloat(badge5n[i]);
                nb5p = +nb5p || 0;
            }
            else if (!(badge5n[i].includes("%")) && (badge5n[i].includes("生命"))) {
                badge5n[i] = badge5n[i].replace(/[^\d]/g, '');
                var nb5g = parseFloat(badge5n[i]);
                nb5g = +nb5g || 0;
            }
        }
    }


    var armor = parseFloat(form.elements.armor.value);
    var collection = parseFloat(form.elements.collection.value);
    var collection2 = parseFloat(form.elements.collection2.value);
    var collection3 = parseInt(form.elements.collection3.value);//固
    var collection4 = parseInt(form.elements.collection4.value);//固
    var frp = parseFloat(form.elements.frp.value);
    var frpp = parseFloat(form.elements.frpp.value);
    var frf = parseInt(form.elements.frf.value);
    var frff = parseInt(form.elements.frff.value);
    var srp = parseFloat(form.elements.srp.value);
    var srpp = parseFloat(form.elements.srpp.value);
    var srf = parseInt(form.elements.srf.value);
    var srff = parseInt(form.elements.srff.value);
    var mrp = parseFloat(form.elements.mrp.value);
    var mrpp = parseFloat(form.elements.mrpp.value);
    var mrppp = parseFloat(form.elements.mrppp.value);
    var mrf = parseInt(form.elements.mrf.value);
    var mrff = parseInt(form.elements.mrff.value);
    var mrfff = parseInt(form.elements.mrfff.value);
    var hp = parseInt(form.elements.hp.value);
    var combination = parseFloat(form.elements.combination.value);
    var mythhp = parseFloat(form.elements.mythhp.value);
    
//                        0      1          2           3           4        5    6   7   8    9   10   11  12   13  14   15   16   17   18   19   20                    
    var nv = new Array(armor,collection,collection2,collection3,collection4,frp,frpp,frf,frff,srp,srpp,srf,srff,mrp,mrpp,mrppp,mrf,mrff,mrfff,hp,combination,mythhp)   
    for(var i=0;i<22;i++){
        nv[i] = +nv[i] || 0;       
    } 
    var hbase1 = nv[19]+nv[7]+nv[8]+nv[12]+nv[11]+nv[17]+nv[16]+nv[18]+nv[3]+nv[4]+ nb1g+nb2g+nb3g+nb4g+nb5g;
    var hbase2 = nv[0]+nv[1]+nv[2]+nv[5]+nv[6]+nv[9]+nv[10]+nv[14]+nv[15]+nv[13]+ nb1p+nb2p+nb3p+nb4p+nb5p;

    var mhp = hbase1*(1+(hbase2/100))*(1+((nv[20]+nv[21])/100));

    mmh.innerHTML = mhp;
}

