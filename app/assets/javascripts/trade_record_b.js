window.onload = function(){
	createTab();
	hideHeading();
	showCategory('trade_record_info');
	setTabClick('li_trade_info','trade_record_info');
	setTabClick('li_trade_whisper','trade_record_whisper');
	setTabClick('li_trade_evaluate','trade_record_evaluate');
}

function hide(element){
	document.getElementById(element).style.display = "none";
}

function show(element){
	document.getElementById(element).style.display = "block";
}

function hideHeading(){
	hide("trade_info_head");
	hide("trade_record_whisper_head");
	hide("trade_record_evaluate_head");
}

function showCategory(categoryName){
	hide('trade_record_info');
	hide('trade_record_whisper');
	hide('trade_record_evaluate');
	show(categoryName);
	changeTab(categoryName);
}

function createTab(){
	
	// member_evaluation page
	var member_wrap = document.getElementById("goods");
 	var evalue_content = document.getElementById("trade_record");
	var nav1 = document.createElement("ul");
	nav1.setAttribute('id','nav_three');
	nav1.appendChild(createListItem('li_trade_info','#li_trade_info','交易資訊'));
	nav1.appendChild(createListItem('li_trade_whisper','#li_trade_whisper','悄悄話'));
	nav1.appendChild(createListItem('li_trade_evaluate','#li_trade_evaluate','評價'));
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