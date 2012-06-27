window.onload = function(){
	createTab();
	hideHeading();
	showCategory('sell_evalution_content');
	setTabClick('li_sell_value','sell_evalution_content');
	setTabClick('li_buy_value','buy_evalution_content');
}

function hide(element){
	document.getElementById(element).style.display = "none";
}

function show(element){
	document.getElementById(element).style.display = "block";
}

function hideHeading(){
	hide("sell_evaluation_head");
	hide("buy_evaluation_head");
}

function showCategory(categoryName){
	hide('sell_evalution_content');
	hide('buy_evalution_content');
	show(categoryName);
	changeTab(categoryName);
}

function createTab(){
	
	// member_evaluation page
	var member_wrap = document.getElementById("member_evaluation_section");
 	var evalue_content = document.getElementById("evaluation_content");
	var nav1 = document.createElement("ul");
	nav1.setAttribute('id','nav');
	nav1.appendChild(createListItem('li_sell_value','#li_sell','賣的評價'));
	nav1.appendChild(createListItem('li_buy_value','#li_buy','買的評價'));
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