// JavaScript Document
function tshow(){
	document.getElementById("side_hidden").style.display="block";
	}
	
function thidden(){
	document.getElementById("side_hidden").style.display="none";
	}
	
function tbiger(e){
	if(e=="con_bottom_item01"){
		document.getElementById("con_bottom_item02").style.width="150px";
		document.getElementById("con_bottom_item01").style.width="450px";
		}else if(e=="con_bottom_item02"){
			document.getElementById("con_bottom_item01").style.width="150px";
			document.getElementById("con_bottom_item02").style.width="450px";
			}else if(e=="con_bottom_item03"){
				document.getElementById("con_bottom_item04").style.width="150px";
				document.getElementById("con_bottom_item03").style.width="450px";
				}else if(e=="con_bottom_item04"){
				document.getElementById("con_bottom_item03").style.width="150px";
				document.getElementById("con_bottom_item04").style.width="450px";
				}else{
					return 0;
					}
	}