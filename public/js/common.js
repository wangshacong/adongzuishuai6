// ****** 选项卡切换 ******
function MM(id,menu,Txt,cln){
var QuickLinkList = document.getElementsByName(Txt),i=0;
for(i=0; i<=QuickLinkList.length-1; i++ ){
if(i==id)QuickLinkList[i].style.display = '';
else QuickLinkList[i].style.display = 'none';
}
var TSMenuList = document.getElementsByName(menu),i=0;
var clnIn;
for(i=0; i<=TSMenuList.length-1; i++ ){
clnIn = TSMenuList[i].className;
if(i==id)TSMenuList[i].className = clnIn.replace(cln+'Off',cln+'On');
else TSMenuList[i].className = clnIn.replace(cln+'On',cln+'Off');
}
}

