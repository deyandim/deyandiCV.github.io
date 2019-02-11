function showCertifivateBasic() {
    let imgBasicSertif = document.getElementById('basicCertif');
    let btnShowBasic = document.getElementById('showBasicCertif');

    if(btnShowBasic.value === 'Show'){
        imgBasicSertif.style.display = 'block';
        btnShowBasic.value = 'Hide'
    }else if(btnShowBasic.value === 'Hide'){
        imgBasicSertif.style.display = 'none';
        btnShowBasic.value = 'Show';
    }

}
function showCertifivateTechno() {
    let technologyCertif = document.getElementById('technologyCertif');
    let btnShowTechnoCertif = document.getElementById('showTechnoCertif');

    if (btnShowTechnoCertif.value === 'Show') {
        technologyCertif.style.display = 'block';
        btnShowTechnoCertif.value = 'Hide';
    }else if(btnShowTechnoCertif.value === 'Hide'){
        technologyCertif.style.display = 'none';
        btnShowTechnoCertif.value = 'Show';
    }




}
function mobileTypeInfo() {
    let rightSide = document.getElementById('rightSide');
    let leftSide = document.getElementById('leftSide');
    let btnMoreInfo = document.getElementById('mobileType');

    if(btnMoreInfo.value === 'Skills'){
        rightSide.style.display = 'none';
        leftSide.style.display = 'block';
        btnMoreInfo.value = 'Experience';
    }else if(btnMoreInfo.value === 'Experience'){
        rightSide.style.display = 'inline';
        leftSide.style.display = 'none';
        btnMoreInfo.value = 'Skills';
    }
}