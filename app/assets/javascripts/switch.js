window.onload = function(){
	createTab();
	hideHeading();
	showCategory('goods_profile');
	setTabClick('li_profile','goods_profile');
	setTabClick('li_ask','ask_answers');
}

function hide(element){
	document.getElementById(element).style.display = "none";
}

function show(element){
	document.getElementById(element).style.display = "block";
}

function hideHeading(){
	hide("good_profile_head");
	hide("ask_answers_head");
}

function showCategory(categoryName){
	hide('goods_profile');
	hide('ask_answers');
	show(categoryName);
	changeTab(categoryName);
}

function createTab(){
	// introduce page
	var intro_wrapper = document.getElementById("goods_introduce");
	var content = document.getElementById("goods_introduce_button");
	var nav = document.createElement("ul");
	nav.setAttribute('id','nav');
	nav.appendChild(createListItem('li_profile','#li_profile','商品檔案'));
	nav.appendChild(createListItem('li_ask','#li_ask','問與答'));
	nav.appendChild(document.createElement("hr"));
	intro_wrapper.insertBefore(nav,content);
	
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
