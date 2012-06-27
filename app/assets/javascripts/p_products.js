window.onload = function(){
	createTab();
	hideHeading();
	showCategory('on_sale');
	setTabClick('li_on_sale','on_sale');
	setTabClick('li_not_on_sale','not_on_sale');
	setTabClick('li_sale_close','sale_close');
}

function hide(element){
	document.getElementById(element).style.display = "none";
}

function show(element){
	document.getElementById(element).style.display = "block";
}

function hideHeading(){
	hide("on_sale_head");
	hide("not_on_sale_head");
	hide("sale_close_head");
}

function showCategory(categoryName){
	hide('on_sale');
	hide('not_on_sale');
	hide('sale_close');
	show(categoryName);
	changeTab(categoryName);
}

function createTab(){
	
	// member_evaluation page
	var member_wrap = document.getElementById("goods");
 	var evalue_content = document.getElementById("member_products");
	var nav1 = document.createElement("ul");
	nav1.setAttribute('id','nav_three');
	nav1.appendChild(createListItem('li_on_sale','#li_on_sale','拍賣中'));
	nav1.appendChild(createListItem('li_not_on_sale','#li_not_on_sale','未上架'));
	nav1.appendChild(createListItem('li_sale_close','#li_sale_close','已結束'));
	nav1.appendChild(document.createElement("hr"));
	member_wrap.insertBefore(nav1,evalue_content);
	
}

function createListItem(id,href,text){
	var li = document.createElement('li');
	var a = document.createElement('a');
	var t = document.createTextNode(text);
	li.setAttribute('id',id);
	a.setAttribute('href',href);
	li.appendChild(a);
	a.appendChild(t);
	return li;
}

function setTabClick(listName, categoryName){
	var e = document.getElementById(listName).getElementsByTagName('a')[0];
	e.onclick = function(){
		showCategory(categoryName);
		return false;
	}
}

function changeTab(categoryName){
	var e = document.getElementById('nav_three');
	e.className = categoryName;
}