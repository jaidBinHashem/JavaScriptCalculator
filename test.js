
	function keyDown(key)
				{
					var display=document.getElementById("display");
					display.value+=key;
				}
				
				function checkDecimal(key)
				{
					var display=document.getElementById("display");
					var str=display.value;
					var operator;
					if(str.indexOf(".")==-1)
					{
						display.value+=key;
					}
					else
					{
						if(str.indexOf("+")!=-1)
						{
							operator="+";
						}
						else if(str.indexOf("-")!=-1)
						{
							operator="-";
						}
						else if(str.indexOf("*")!=-1)
						{
							operator="*";
						}
						else if(str.indexOf("/")!=-1)
						{
							operator="/";
						}
						
						if(operator=="+" || operator=="-" || operator=="*" || operator=="/")
						{
							var number=str.split(operator);
							var numberTwo=String(number[1]);
							if(!numberTwo.includes("."))
							{
								display.value+=key;
							}
						}
					}
				}
				
				function addOperator(key)
				{
					var display=document.getElementById("display");
					var str=display.value;
					if(str=="")
					{
					
					}
					else if(!(str.includes("+") ||str.includes("-") || str.includes("*") || str.includes("/")))
					{
						display.value+=key;
					}
				
				}
		
				function cancel(key)
				{
					if(key=='c')
					{
						var display=document.getElementById("display");
						display.value="";
					}
					else{
						var display=document.getElementById("display");
						var str=display.value;
						display.value=str.substr(0,(str.length-1));
					}
				}
				
				function calculate()
				{
					var dis=document.getElementById("display");					
					var mainStr = dis.value;
					var operator;
					if(mainStr.indexOf("+")!=-1)
					{
						operator="+";
					}
					else if(mainStr.indexOf("-")!=-1)
					{
						operator="-";
					}
					else if(mainStr.indexOf("*")!=-1)
					{
						operator="*";
					}
					else if(mainStr.indexOf("/")!=-1)
					{
						operator="/";
					}
					else
					{
						window.alert("No Operator Found");
					}
					
					
					var number=mainStr.split(operator);
					var numberOne=parseFloat(number[0]);
					var numberTwo=parseFloat(number[1]);
					
					if(numberTwo=="NaN")
					{
					
					}
					else if(operator=="+")
					{	
						result = numberOne + numberTwo;
						document.getElementById("display").value=result;
					}
					
					else if(operator=="-")
					{	
						result = numberOne - numberTwo;
						document.getElementById("display").value=result;
					}
					else if(operator=="*")
					{	
						result = numberOne * numberTwo;
						document.getElementById("display").value=result;
					}
					else if(operator=="/")
					{	
						result = numberOne / numberTwo;
						document.getElementById("display").value=result;
					}
				}
				
				function keyBoardEvent(event)
				{
					var x=event.key;
					
					if(x==0 || x==1 || x==2 || x==3 || x==4 || x==5 || x==6 || x==7 || x==8 || x==9 || x=='+' || x=='-' || x=='*' || x=='/')
					{
						keyDown(x);
					}
					else if(x=='Delete' || x=='Backspace')
					{
						cancel();
					}
					else if(x=='Enter')
					{
						calculate();
					}
					else if(x=='.')
					{
						checkDecimal(x);
					}
					else if(x=='+' || x=='-' || x=='*' || x=='/')
					{
						addOperator();
					}
					
				}