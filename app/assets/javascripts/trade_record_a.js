window.onload = function(){
	createTab();
	hideHeading();
	showCategory('sell_record');
	setTabClick('li_sell_record','sell_record');
	setTabClick('li_buy_record','buy_record');
}

function hide(element){
	document.getElementById(element).style.display = "none";
}

function show(element){
	document.getElementById(element).style.display = "block";
}

function hideHeading(){
	hide("buy_record_head");
	hide("sell_record_head");
}

function showCategory(categoryName){
	hide('buy_record');
	hide('sell_record');
	show(categoryName);
	changeTab(categoryName);
}

function createTab(){
	
	// member_evaluation page
	var member_wrap = document.getElementById("goods");
 	var evalue_content = document.getElementById("trade_record_section");
	var nav1 = document.createElement("ul");
	nav1.setAttribute('id','nav');
	nav1.appendChild(createListItem('li_sell_record','#li_sell_record','賣的記錄'));
	nav1.appendChild(createListItem('li_buy_record','#li_buy_record','買的記錄'));
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
	var e = document.getElementById('nav');
	e.className = categoryName;
}