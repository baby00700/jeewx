/*function formatDate(date, format) {
	var paddNum = function(num) {
		num += "";
		return num.replace(/^(\d)$/, "0$1");
	}
	//指定格式字符
	var cfg = {
		yyyy: date.getFullYear() //年 : 4位
			,
		yy: date.getFullYear().toString().substring(2) //年 : 2位
			,
		M: date.getMonth() + 1 //月 : 如果1位的时候不补0
			,
		MM: paddNum(date.getMonth() + 1) //月 : 如果1位的时候补0
			,
		d: date.getDate() //日 : 如果1位的时候不补0
			,
		dd: paddNum(date.getDate()) //日 : 如果1位的时候补0
			,
		hh: date.getHours() //时
			,
		mm: date.getMinutes() //分
			,
		ss: date.getSeconds() //秒
	}
	format || (format = "yyyy-MM-dd hh:mm:ss");
	return format.replace(/([a-z])(\1)*///ig, function(m) {
	//	return cfg[m];
	//});
//}*/

$(document).ready(function() {

	//alert(typeof csrq);
	//	$("#pagepcState").css("display","block");   
	//var oldTime = (new Date("2012/12/25 20:11:11")).getTime();
	/*var curTime = formatDate(new Date(csrq), "yyyy-MM-dd");
	console.log(curTime);
	$("#csrq").text(curTime);*/

	/*//获取班级信息
	$.ajax({
		type : "post",
		dataType : "json",
		url : "mobileStudentController.do?getClassInfo",
		data : {
			sfzh : sfzh
		},
		success : function(data) {
			var obj = $.parseJSON(data.msg);
			for (var i = 0; i < obj.length; i++) {
				//alert("班级代码：" + obj[i].bjdm + "班级名称：" + obj[i].bjmc);
				var bjSELmc=obj[i].bjmc;
				var bjSELdm=obj[i].bjdm;
				var bjSEL='<option value='+bjSELdm+'>'+bjSELmc+'</option>';
				$("#select00").append(bjSEL);
				
			}
		},
		error : function(msg) {
			alert("error:" + msg);
		}
	});*/

	/*//获取宿舍信息
	var dropid = "";
	var susheOBJmc;
	var susheOBJid;
	$("#qinshi00").css("width", "0");
	$("#qinshijiazai").show();
	$.ajax({
		type: "post",
		dataType: "json",
		url: "mobileStudentController.do?getDromList",
		data: {

			pid: dropid
		},
		success: function(data) {
			//	alert("jiazai");
			//console.log(data);
			var end = data.obj;
			console.log(data.msg);
			var obj = $.parseJSON(data.msg);

			if(obj.length != 0) { //判断是否有床位
				if(end != null && end == "end") { //判断是否为END
					//	alert(end);
					for(var i = 0; i < obj.length; i++) {
						alert("名称：" + obj[i].cname + "ID：" + obj[i].cc);
					}
				} else {
					for(var i = 0; i < obj.length; i++) {
						//alert("名称：" + obj[i].cname + "ID：" + obj[i].BS);
						susheOBJmc = obj[i].cname;
						susheOBJid = obj[i].BS;
						var susheSEL = '<option value=' + susheOBJid + '>' + susheOBJmc + '</option>';
						$("#qinshi00").append(susheSEL);
						var selsize = $("#qinshi00 option").size();
						if(selsize >= 2) {
							console.log(selsize);
							$("#qinshijiazai").hide();
							$("#qinshi00").css("width", "auto");
						}
					}

				}

			} else {
				//alert("无可用床位！");
				$("#qinshijiazai").hide();
				$("#qinshi00").css("width", "auto");
				$("#qinshi00 option").remove();
				$("#qinshi00").append('<option value="none">无</option>');
				$("#chuangwei00 option").remove();
				$("#chuangwei00").append('<option value="none">无</option>');
			}

		},
		error: function(msg) {
			//alert("error:" + msg);
		}
	});

	//select change事件 选宿舍 每一次change就给下面的option赋值
	$("#qinshi00").change(function() {
		$("#chuangwei00").css("width", "0");
		$("#chuangweijiazai").show();
		$("#chuangwei00 option").remove();
		$("#chuangwei00").append('<option value="none">请选择</option>');
		var val00 = $("#qinshi00").val();
		if(val00 == "none") {
			$("#chuangwei00").css("width", "auto");
			$("#chuangweijiazai").hide();
		}
		dropid = val00;
		$.ajax({
			type: "post",
			dataType: "json",
			url: "mobileStudentController.do?getDromList",
			data: {
				sfzh: sfzh,
				pid: dropid
			},
			success: function(data) {
				var end = data.obj;

				var obj = $.parseJSON(data.msg);
				if(end != null && end == "end") {
					//alert(end);
					for(var i = 0; i < obj.length; i++) {
						//alert("名称：" + obj[i].cname + "ID：" + obj[i].cc);
						susheOBJmc = obj[i].cname;
						susheOBJid = obj[i].cc;
						var susheSEL = '<option value=' + susheOBJid + '>' + susheOBJmc + '</option>';
						$("#chuangwei00").append(susheSEL);

						var selsize = $("#chuangwei00 option").size();
						if(selsize >= 2) {
							console.log(selsize);
							$("#chuangweijiazai").hide();
							$("#chuangwei00").css("width", "auto");
						}
						susheOBJid = val00;
					}
				} else {
					for(var i = 0; i < obj.length; i++) {
						//alert("名称：" + obj[i].cname + "ID：" + obj[i].BS);

					}

				}
			},
			error: function(msg) {
				alert("error:" + msg);
			}
		});
	});
*/
	/*
		$("#loudong00").change(function() {
			$("#louceng00").css("width","0");
	  	$("#loucengjiazai").show();
			$("#louceng00 option").remove();
			$("#louceng00").append('<option value="none">请选择</option>');
			var val00=$("#loudong00").val();
			if(val00=="none"){
				$("#louceng00").css("width","auto");
	  		$("#loucengjiazai").hide();
			}
			dropid=val00;
			
			$.ajax({
			type : "post",
			dataType : "json",
			url : "mobileStudentController.do?getDromList",
			data : {
				sfzh : sfzh,
				pid : dropid
			},
			success : function(data) {
				var end = data.obj;
				var obj = $.parseJSON(data.msg);
				if (end != null && end == "end") {
					alert(end);
					for (var i = 0; i < obj.length; i++) {
						//alert("名称：" + obj[i].cname + "ID：" + obj[i].cc);
					}
				} else {
					for (var i = 0; i < obj.length; i++) {
						//alert("名称：" + obj[i].cname + "ID：" + obj[i].BS);
						susheOBJmc=obj[i].cname;
						susheOBJid=obj[i].BS;
						var susheSEL='<option value='+susheOBJid+'>'+susheOBJmc+'</option>';
						$("#louceng00").append(susheSEL);
						var selsize=$("#louceng00 option").size();
						if(selsize>=2){
								console.log(selsize);
								$("#loucengjiazai").hide();
								$("#louceng00").css("width","auto");
						}
						
						susheOBJid= val00;
					}

				}
			},
			error : function(msg) {
				alert("error:" + msg);
			}
		});
		});
		
		
		$("#louceng00").change(function() {
			$("#qinshi00").css("width","0");
	  	$("#qinshijiazai").show();
			$("#qinshi00 option").remove();
			$("#qinshi00").append('<option value="none">请选择</option>');
			var val00=$("#louceng00").val();
			if(val00=="none"){
				$("#qinshi00").css("width","auto");
	  		$("#qinshijiazai").hide();
			}
			dropid=val00;
			
			$.ajax({
			type : "post",
			dataType : "json",
			url : "mobileStudentController.do?getDromList",
			data : {
				sfzh : sfzh,
				pid : dropid
			},
			success : function(data) {
				var end = data.obj;
				var obj = $.parseJSON(data.msg);
				if (end != null && end == "end") {
					alert(end);
					for (var i = 0; i < obj.length; i++) {
						//alert("名称：" + obj[i].cname + "ID：" + obj[i].cc);
					}
				} else {
					for (var i = 0; i < obj.length; i++) {
						//alert("名称：" + obj[i].cname + "ID：" + obj[i].BS);
						susheOBJmc=obj[i].cname;
						susheOBJid=obj[i].BS;
						var susheSEL='<option value='+susheOBJid+'>'+susheOBJmc+'</option>';
						$("#qinshi00").append(susheSEL);
						var selsize=$("#qinshi00 option").size();
						if(selsize>=2){
								console.log(selsize);
								$("#qinshijiazai").hide();
								$("#qinshi00").css("width","auto");
						}
						susheOBJid= val00;
					}

				}
			},
			error : function(msg) {
				alert("error:" + msg);
			}
		});
		});
		
		
		
		
		$("#qinshi00").change(function() {
			$("#chuangwei00").css("width","0");
	  	$("#chuangweijiazai").show();
			$("#chuangwei00 option").remove();
			$("#chuangwei00").append('<option value="none">请选择</option>');
			var val00=$("#qinshi00").val();
			if(val00=="none"){
				$("#chuangwei00").css("width","auto");
	  		$("#chuangweijiazai").hide();
			}
			dropid=val00;
			
			$.ajax({
			type : "post",
			dataType : "json",
			url : "mobileStudentController.do?getDromList",
			data : {
				sfzh : sfzh,
				pid : dropid
			},
			success : function(data) {
				var end = data.obj;
				var obj = $.parseJSON(data.msg);
				if (end != null && end == "end") {
					//alert(end);
					for (var i = 0; i < obj.length; i++) {
						//alert("名称：" + obj[i].cname + "ID：" + obj[i].cc);
						susheOBJmc=obj[i].cname;
						susheOBJid=obj[i].cc;
						var susheSEL='<option value='+susheOBJid+'>'+susheOBJmc+'</option>';
						$("#chuangwei00").append(susheSEL);
						var selsize=$("#chuangwei00 option").size();
						if(selsize>=2){
								console.log(selsize);
								$("#chuangweijiazai").hide();
								$("#chuangwei00").css("width","auto");
						}
						susheOBJid= val00;
					}
				} else {
					for (var i = 0; i < obj.length; i++) {
						//alert("名称：" + obj[i].cname + "ID：" + obj[i].BS);
						
					}

				}
			},
			error : function(msg) {
				alert("error:" + msg);
			}
		});
		});
		
		
		*/

	var xh; //流程序号
	var n; //当前点击流程
	var liucheng //后端获取01234567对应12345678获取流程
	var benciliucheng; //本次流程
	benciliucheng = liucheng;
	var buttn = benciliucheng - 1;
	var isn1;
	//liucheng
	$.ajax({
		type: "post",
		dataType: "json",
		url: "mobileStudentController.do?getProcess",
		success: function(data) {
			var obj = $.parseJSON(data.msg);
			for(var i = 0; i < obj.length; i++) {
				console.log("ok");
				console.log("流程ID：" + obj[i].id + "流程名称：" + obj[i].process_name);
				var liuchengName = obj[i].process_name;
				//var liuchengXH=obj[i].process_step;
				//console.log(liuchengXH);
				var liuchengTOU = '<li><span class="step">' + (i + 1) + '</span><span class="title">' + liuchengName + '</span></li>';
				$(".wizard-steps").append(liuchengTOU);
				if(grlc != "" && grlc != null && grlc != undefined && grlc != "null") {
					if(obj[i].id == grlc) {
						console.log("个人流程" + grlc);
						console.log("I=" + i);
						liucheng = i + 1;
						console.log("流程" + liucheng);
						var oron = obj[i].endbs;
						console.log(oron);
						if(oron == "on") {
							$("#page4").show().siblings().hide();

						}
					}
				} else {
					liucheng = 0;
					console.log(liucheng + "//////");
				}

			}
			benciliucheng = liucheng; //流程控制
			//默认状态	默认头部本步骤高亮 默认所获取的状态之前的页面不可见 默认显示本次流程状态页面
			//将按钮样式变化以及切换div封装为函数//初始状态下按钮
			function buttonclick(buttn) {
				buttn = benciliucheng - 1;
				if(buttn <= 0) {
					buttn = 0;
				} else {
					$(".spage").eq(buttn).find(".subbut").removeClass("subbut").addClass("subbut-visited").hide().next(".sub-non").show();
					$(".spage").eq(benciliucheng).show().siblings().hide();
					$(".spage").eq(buttn).prevAll().find(".subbut").removeClass("subbut").addClass("subbut-visited").hide().next(".sub-non").show();
				}
			}
			buttonclick(buttn); //默认执行初始按钮状态；

			$(".spage").eq(liucheng).show().siblings().hide();

			//定义顶部高亮封装为函数
			function gaoliangtop(n) {
				$('.wizard-steps li').eq(n).children().first().css("border-color", "#1296DB").css("background", "#1296DB").css("color", "#fff").parent().siblings().children(".step").css("background-color", "#CED1D6").css("border-color", "#CED1D6").css("color", "black");
				$(".wizard-steps  li").eq(n).children().last().css("color", "#1296DB").parent().siblings().children(".title").css("color", "#333");
				$(".wizard-steps li").eq(n).removeClass().addClass('wizard-steps li ' + "gaoliang").siblings().removeClass('wizard-steps li ' + "gaoliang");
			}
			//顶部左右滚动点击高亮代码 开始 默认状态 morenliucheng=liucheng
			var morenliucheng = liucheng; //
			//console.log(n);
			$('.wizard-steps li').eq(morenliucheng).children().first().css("border-color", "#1296DB").css("background", "#1296DB").css("color", "#fff").parent().siblings().children(".step").css("background-color", "#CED1D6").css("border-color", "#CED1D6").css("color", "black");
			$(".wizard-steps li").eq(morenliucheng).children().last().css("color", "#1296DB").parent().siblings().children(".title").css("color", "#333");
			$(".wizard-steps li").eq(morenliucheng).removeClass().addClass('wizard-steps li ' + "gaoliang").siblings().removeClass('wizard-steps li ' + "gaoliang");

			$(".wizard-steps li").click(function() {
				n = $(this).index();
				console.log(n + "n");
				console.log(liucheng + "liucheng");
				console.log(benciliucheng + "benciliucheng");
				if(n <= benciliucheng && n >= liucheng) {
					$('.wizard-steps  li').eq(n).children().first().css("border-color", "#1296DB").css("background", "#1296DB").css("color", "#fff").parent().siblings().children(".step").css("background-color", "#CED1D6").css("border-color", "#CED1D6").css("color", "black");
					$(".wizard-steps  li").eq(n).children().last().css("color", "#1296DB").parent().siblings().children(".title").css("color", "#333");
					$(".wizard-steps  li").eq(n).removeClass().addClass('wizard-steps li ' + "gaoliang").siblings().removeClass('wizard-steps li ' + "gaoliang");
					$(".spage").eq(n).show().siblings().hide();
				}

			});
			//input失去焦点后判断所输入的是否正确
			//			$("#stMobile").blur(function(){
			//				var mobile
			//				var stmobile1 = $("#inputout p").html();
			//				var inputavl=$("#inputout input").val();
			//				console.log(stmobile1);
			//				console.log(inputavl);
			//				if(isNaN(inputavl)==true){
			//					console.log('nan');
			//					$("#inputout p").html();
			//				}
			//			});
			//点击底部按钮 提交数据 跳转下一页 并禁用事件
			//page1
			
			$("#gerenxinxibut").on("click", function() {
				//判断必填项是否为空
				//定义变量
				var stmobile1 = $("#inputout p").html();
				console.log(stmobile1);
				if(stmobile1 == "null" || stmobile1 == "" || stmobile1 == undefined || stmobile1 == null) {
					var mobile = $("#stMobile").val(); //手机号
					$("#inputout p").html("请输入");
				} else {
					var mobile = stmobile; //手机号
				}

				console.log(mobile);
				var syd = $("#stShengyuan").val(); //生源地
				var jtdz = $("#jiatingzhuzhi").val(); //家庭住址

				var jtmc1 = $("#jzxm1").val(); //家长姓名123
				var jtmc2 = $("#jzxm2").val();
				var jtmc3 = $("#jzxm3").val();
				var jtdh1 = $("#jzdh1").val(); //电话123
				var jtdh2 = $("#jzdh2").val();
				var jtdh3 = $("#jzdh3").val();
				var jtgx1 = $("#jzgx1").val(); //关系123
				var jtgx2 = $("#jzgx2").val();
				var jtgx3 = $("#jzgx3").val();
				var xssg = $("#stshengao").val(); //身高
				var xstz = $("#sttizhong").val(); //体重
				var fzcc = $("#fuzhuangchima").val(); //服装尺码
				var xzcc = $("#xiezichima").val(); //鞋子尺码

				var grinfo = [{
					"mobile": mobile,
					"syd": syd,
					"jtdz": jtdz
				}, ];

				var jtinfo = [{
					"jtmc1": jtmc1,
					"jtmc2": jtmc2,
					"jtmc3": jtmc3,
					"jtdh1": jtdh1,
					"jtdh2": jtdh2,
					"jtdh3": jtdh3,
					"jtgx1": jtgx1,
					"jtgx2": jtgx2,
					"jtgx3": jtgx3,
					"xssg": xssg,
					"xstz": xstz,
					"fzcc": fzcc,
					"xzcc": xzcc
				}];

				var otjt1;
				if(jtmc1 != "" && jtdh1 != "" && jtgx1 != "") {
					otjt1 = true;
				} else {
					otjt1 = false;
					//	alert("nono");
				}

				var otjt2;
				if(jtmc2 != "" && jtdh2 != "" && jtgx2 != "") {
					otjt2 = true;
				} else {
					otjt2 = false;
					//alert("nono");
				}

				var otjt3;
				if(jtmc3 != "" && jtdh3 != "" && jtgx3 != "") {
					otjt3 = true;
				} else {
					otjt3 = false;
					//alert("nono");
				}
				console.log(mobile);

				if(mobile == "" || syd == "" || jtdz == "" || xssg == "" || xstz == "" || fzcc == "none" || xzcc == "none") {
					alert('带"*"的为必填项');
				} else {
					if(otjt1 == true || otjt2 == true || otjt2 == true) {
						
						//mobileStudentController.do?generatingClass//生成班级
						$.ajax({
							type: "post",
							dataType: "json",
							url: "mobileStudentController.do?generatingClass",
							success: function(data) {
								var su = data.success;
								//var su=false;
								var obj = data.msg;
								if(su == true) {
									//分班成功提示（hide）
									console.log(data.success);
									console.log(obj);

									//报名方法AJAx
									$.ajax({
										type: "post",
										dataType: "json",
										url: "mobileStudentController.do?doSignUp",
										data: {
											grinfo: JSON.stringify(grinfo),
											jtinfo: JSON.stringify(jtinfo)
										},
										async: true,
										success: function(data) {
											var bmsu = data.success;
											var bmobj = data.msg;
											if(bmsu == true) {
												console.log(data.success);
												console.log(bmobj);
												$("#page1").stop().fadeOut();
												$("#page2").stop().fadeIn();
												n = 1;
												isn1=n;
												gaoliangtop(n);
												$(this).removeClass("subbut").addClass("subbut-visited");
												benciliucheng++;
												buttonclick(buttn);
												$("#gerenxinxibut").unbind();
												//获取宿舍信息
				var dropid = "";
				var susheOBJmc;
				var susheOBJid;
				$("#qinshi00").css("width", "0");
				$("#qinshijiazai").show();
				$.ajax({
					type: "post",
					dataType: "json",
					url: "mobileStudentController.do?getDromList",
					data: {

						pid: dropid
					},
					success: function(data) {
						//	alert("jiazai");
						//console.log(data);
						var end = data.obj;
						console.log(data.msg);
						var obj = $.parseJSON(data.msg);

						if(obj.length != 0) { //判断是否有床位
							if(end != null && end == "end") { //判断是否为END
								//	alert(end);
								for(var i = 0; i < obj.length; i++) {
									alert("名称：" + obj[i].cname + "ID：" + obj[i].cc);
								}
							} else {
								for(var i = 0; i < obj.length; i++) {
									//alert("名称：" + obj[i].cname + "ID：" + obj[i].BS);
									susheOBJmc = obj[i].cname;
									susheOBJid = obj[i].BS;
									var susheSEL = '<option value=' + susheOBJid + '>' + susheOBJmc + '</option>';
									$("#qinshi00").append(susheSEL);
									var selsize = $("#qinshi00 option").size();
									if(selsize >= 2) {
										console.log(selsize);
										$("#qinshijiazai").hide();
										$("#qinshi00").css("width", "auto");
									}
								}

							}

						} else {
							//alert("无可用床位！");
							$("#qinshijiazai").hide();
							$("#qinshi00").css("width", "auto");
							$("#qinshi00 option").remove();
							$("#qinshi00").append('<option value="none">无</option>');
							$("#chuangwei00 option").remove();
							$("#chuangwei00").append('<option value="none">无</option>');
						}

					},
					error: function(msg) {
						//alert("error:" + msg);
					}
				});

				//select change事件 选宿舍 每一次change就给下面的option赋值
				$("#qinshi00").change(function() {
					$("#chuangwei00").css("width", "0");
					$("#chuangweijiazai").show();
					$("#chuangwei00 option").remove();
					$("#chuangwei00").append('<option value="none">请选择</option>');
					var val00 = $("#qinshi00").val();
					if(val00 == "none") {
						$("#chuangwei00").css("width", "auto");
						$("#chuangweijiazai").hide();
					}
					dropid = val00;
					$.ajax({
						type: "post",
						dataType: "json",
						url: "mobileStudentController.do?getDromList",
						data: {
							sfzh: sfzh,
							pid: dropid
						},
						success: function(data) {
							var end = data.obj;

							var obj = $.parseJSON(data.msg);
							if(end != null && end == "end") {
								//alert(end);
								for(var i = 0; i < obj.length; i++) {
									//alert("名称：" + obj[i].cname + "ID：" + obj[i].cc);
									susheOBJmc = obj[i].cname;
									susheOBJid = obj[i].cc;
									var susheSEL = '<option value=' + susheOBJid + '>' + susheOBJmc + '</option>';
									$("#chuangwei00").append(susheSEL);

									var selsize = $("#chuangwei00 option").size();
									if(selsize >= 2) {
										console.log(selsize);
										$("#chuangweijiazai").hide();
										$("#chuangwei00").css("width", "auto");
									}
									susheOBJid = val00;
								}
							} else {
								for(var i = 0; i < obj.length; i++) {
									//alert("名称：" + obj[i].cname + "ID：" + obj[i].BS);

								}

							}
						},
						error: function(msg) {
							alert("error:" + msg);
						}
					});
				});

											} else {
												console.log(bmobj);
												//提示报名失败无法进入下一步
												$('#fbbm-queren').stop().fadeIn();
												//$("#wenzi-con").text(obj);
												$("#baoming-fbbut").show();
												$("#wenzi-con p").text(bmobj);
												$("#baoming-fbbut").click(function() {
													$("#fbbm-queren").stop().fadeOut();
												});

											}
										},
										error: function() {
											$('#fbbm-queren').stop().fadeIn();
											//$("#wenzi-con").text(obj);
											$("#baoming-fbbut").show();
											console.log("nono11");
											$("#wenzi-con p").text("连接超时！请稍后重试！");
											$("#baoming-fbbut").click(function() {
												$("#fbbm-queren").stop().fadeOut();
											});
										}
									});
									//b报名方法end

								} else {
									console.log(obj);
									//分班遮罩层提示分班失败并无法进入下一步
									$('#fbbm-queren').stop().fadeIn();
									$("#wenzi-con p").text(obj);
									$("#baoming-fbbut").show();
									//$("#wenzi-con p").text("分班失败！请联系xxx后继续进行报道流程");
									$("#baoming-fbbut").click(function() {
										$("#fbbm-queren").stop().fadeOut();
									});

								}

							},
							error: function(msg) {
								console.log("error:" + msg);
								$('#fbbm-queren').stop().fadeIn();
								//$("#wenzi-con").text(obj);
								$("#baoming-fbbut").show();
								console.log("nono222");
								$("#wenzi-con p").text("连接超时！请稍后重试！");
								$("#baoming-fbbut").click(function() {
									$("#fbbm-queren").stop().fadeOut();
								});
							}
						});

					} else {
						alert("请至少填写完整一位家长或监护人的信息！");

					}
				}

				

			});
			
			if(liucheng == 1) {
				//获取宿舍信息
				var dropid = "";
				var susheOBJmc;
				var susheOBJid;
				$("#qinshi00").css("width", "0");
				$("#qinshijiazai").show();
				$.ajax({
					type: "post",
					dataType: "json",
					url: "mobileStudentController.do?getDromList",
					data: {

						pid: dropid
					},
					success: function(data) {
						//	alert("jiazai");
						//console.log(data);
						var end = data.obj;
						console.log(data.msg);
						var obj = $.parseJSON(data.msg);

						if(obj.length != 0) { //判断是否有床位
							if(end != null && end == "end") { //判断是否为END
								//	alert(end);
								for(var i = 0; i < obj.length; i++) {
									alert("名称：" + obj[i].cname + "ID：" + obj[i].cc);
								}
							} else {
								for(var i = 0; i < obj.length; i++) {
									//alert("名称：" + obj[i].cname + "ID：" + obj[i].BS);
									susheOBJmc = obj[i].cname;
									susheOBJid = obj[i].BS;
									var susheSEL = '<option value=' + susheOBJid + '>' + susheOBJmc + '</option>';
									$("#qinshi00").append(susheSEL);
									var selsize = $("#qinshi00 option").size();
									if(selsize >= 2) {
										console.log(selsize);
										$("#qinshijiazai").hide();
										$("#qinshi00").css("width", "auto");
									}
								}

							}

						} else {
							//alert("无可用床位！");
							$("#qinshijiazai").hide();
							$("#qinshi00").css("width", "auto");
							$("#qinshi00 option").remove();
							$("#qinshi00").append('<option value="none">无</option>');
							$("#chuangwei00 option").remove();
							$("#chuangwei00").append('<option value="none">无</option>');
						}

					},
					error: function(msg) {
						//alert("error:" + msg);
					}
				});

				//select change事件 选宿舍 每一次change就给下面的option赋值
				$("#qinshi00").change(function() {
					$("#chuangwei00").css("width", "0");
					$("#chuangweijiazai").show();
					$("#chuangwei00 option").remove();
					$("#chuangwei00").append('<option value="none">请选择</option>');
					var val00 = $("#qinshi00").val();
					if(val00 == "none") {
						$("#chuangwei00").css("width", "auto");
						$("#chuangweijiazai").hide();
					}
					dropid = val00;
					$.ajax({
						type: "post",
						dataType: "json",
						url: "mobileStudentController.do?getDromList",
						data: {
							sfzh: sfzh,
							pid: dropid
						},
						success: function(data) {
							var end = data.obj;

							var obj = $.parseJSON(data.msg);
							if(end != null && end == "end") {
								//alert(end);
								for(var i = 0; i < obj.length; i++) {
									//alert("名称：" + obj[i].cname + "ID：" + obj[i].cc);
									susheOBJmc = obj[i].cname;
									susheOBJid = obj[i].cc;
									var susheSEL = '<option value=' + susheOBJid + '>' + susheOBJmc + '</option>';
									$("#chuangwei00").append(susheSEL);

									var selsize = $("#chuangwei00 option").size();
									if(selsize >= 2) {
										console.log(selsize);
										$("#chuangweijiazai").hide();
										$("#chuangwei00").css("width", "auto");
									}
									susheOBJid = val00;
								}
							} else {
								for(var i = 0; i < obj.length; i++) {
									//alert("名称：" + obj[i].cname + "ID：" + obj[i].BS);

								}

							}
						},
						error: function(msg) {
							alert("error:" + msg);
						}
					});
				});

			}

			//			//page2
			//			//不贷款
			//			$("#budaikuan").one("click", function() {
			//				//ajax
			//				$("#page2").stop().fadeOut();
			//				$("#page3").stop().fadeIn();
			//				n++;
			//				gaoliangtop(n);
			//				$(this).removeClass("subbut").addClass("subbut-visited");
			//				$("#daikuansub").removeClass("subbut").addClass("subbut-visited").unbind("click");
			//				benciliucheng++;
			//				buttonclick(buttn);
			//			});
			//			//daikuan
			//			$("#daikuansub").one("click", function() {
			//				//ajax
			//				$("#page2").stop().fadeOut();
			//				$("#page3").stop().fadeIn();
			//				n++;
			//				gaoliangtop(n);
			//				$("#budaikuan").removeClass("subbut").addClass("subbut-visited").unbind("click");
			//				$("#daikuansub").removeClass("subbut").addClass("subbut-visited");
			//				benciliucheng++;
			//				buttonclick(buttn);
			//			});
			//
			//			//page3
			//			$("#xuefeizhifubut").one("click", function() {
			//				//ajax
			//				$("#page3").stop().fadeOut();
			//				$("#page4").stop().fadeIn();
			//				n++;
			//				gaoliangtop(n);
			//				$(this).removeClass("subbut").addClass("subbut-visited");
			//				benciliucheng++;
			//				buttonclick(buttn);
			//			});
			//			//page4
			//			//确认班级分配按钮，使验证是否为必选
			//			$("#fenpeibut").click(function() {
			//				var fenpeiID = $("#select00").val();
			//				var fenpeiMC=$("#select00").find("option:selected").text();
			//				console.log(fenpeiMC);
			//				if(fenpeiID === "none") {
			//					alert("请选择你的班级");
			//				} else {
			//					$(".zhezhao-queren").stop().fadeIn();
			//					var yuanxi = $("#yuanxi").text();
			//					var zhuanye = $("#zhuanye").text();
			//					console.log(yuanxi + zhuanye);
			//					$(".queren-wenzi p").text("您被分配到" + yuanxi + fenpeiMC + "，确定分配班级吗？");
			//				}
			//			});
			//			//取消||重选||隐藏遮罩
			//			$("#quxiao").click(function() {
			//				$(".zhezhao-queren").stop().fadeOut();
			//			});
			//			//确认分配
			//			$("#querenbut").one("click", function() {
			//				//ajax
			//				$("#page4").stop().fadeOut();
			//				$("#page5").stop().fadeIn();
			//				n++;
			//				gaoliangtop(n);
			//				$("#fenpeibut").removeClass("subbut").addClass("subbut-visited").unbind("click");
			//				$(".zhezhao-queren").stop().fadeOut();
			//				benciliucheng++;
			//				buttonclick(buttn);
			//			});
			//page5
			//是否确认分配宿舍并验证是否为空 并跳转下一步
			$("#xuansushe").click(function() {

				var qinshi00 = $("#qinshi00").val();
				var chuangwei00 = $("#chuangwei00").val();
				var chuangwei01 = $("#chuangwei00").find("option:selected").text();
				var qxz = "none";
				console.log(qinshi00 + chuangwei00);
				if(qinshi00 != qxz && chuangwei00 != qxz) {
					$("#sushe-querenzz").stop().fadeIn();
					$("#sushe-queren-z p").text("您被分配到" + chuangwei01 + "，确认分配宿舍吗？");
					$("#sushe-quxiao").click(function() {
						$("#sushe-querenzz").stop().fadeOut();
					});
					//确认并跳转
					var info = [{
						"chmc": chuangwei01,
						"chbm": chuangwei00
					}];
					$("#sushe-querenbut").on("click", function() {
						//ajax
						$.ajax({
							type: "post",
							url: "mobileStudentController.do?dosaveDrom",
							dataType: "json",
							data: {
								info: JSON.stringify(info)
							},
							async: true,
							success: function(data) {
								console.log('success');
								if(data.success==true){
									//alert(data.msg);
									$("#page2").stop().fadeOut();
									$("#page3").stop().fadeIn();
									n = 2;
									gaoliangtop(n);
									$("#xuansushe").removeClass("subbut").addClass("subbut-visited").unbind("click");
									$(".zhezhao-queren").stop().fadeOut();
									benciliucheng++;
									buttonclick(buttn);
								}else{
									alert("宿舍信息办理失败！");
								}
								
							},
							error: function() {
								console.log(data.msg);
							}

						});

					});

				} else {
					alert("请选择完整！");
				}

			});

			//			//page6支付
			//
			//			//判断是否要付款；若要付款则将底部按钮变为付款
			//			//不付款则底部按钮为下一步
			//			//是否购买军训服
			//			//计算金额
			//			var junxunmoney = 200;
			//			var chuangshangmoney = 300;
			//			var zongjine = junxunmoney + chuangshangmoney
			//			var junxun = $('input:radio[name="junxun"]:checked').val();
			//			$(".shi-junxun").children(".radio-but").addClass("radio-but-on");
			//			$(".shi-junxun").click(function() {
			//				$("#radiotrue1").attr("checked", true);
			//				$(".fou-junxun").children(".radio-but").removeClass("radio-but-on");
			//				$(this).children(".radio-but").addClass("radio-but-on");
			//				junxun = "true";
			//				junxunmoney = 200;
			//				$(".junxunfu-fou").hide().prev().stop().fadeIn();
			//				console.log(junxunmoney);
			//				zongjine = junxunmoney + chuangshangmoney;
			//
			//			});
			//			$(".fou-junxun").click(function() {
			//				$("#radiofalse1").attr("checked", true);
			//				$(".shi-junxun").children(".radio-but").removeClass("radio-but-on");
			//				$(this).children(".radio-but").addClass("radio-but-on");
			//				junxun = "false";
			//				junxunmoney = 0;
			//				$(".junxunfu-shi").hide().next().stop().fadeIn();
			//				console.log(junxunmoney);
			//				zongjine = junxunmoney + chuangshangmoney;
			//			});
			//			//点击按钮
			//			$("#xuangoubut").click(function() {
			//
			//				$("#goumai-queren").stop().fadeIn();
			//				$("#goumai-queren-z p").text("确认后不可更改或取消，是否确认？");
			//				$("#goumai-quxiao").click(function() {
			//					$("#goumai-queren").stop().fadeOut();
			//				});
			//				$("#goumai-queren1").click(function() {
			//
			//					console.log(zongjine);
			//					if(zongjine > 0) {
			//						alert("给钱！" + zongjine + "元"); //调支付接口，calback后跳转页面
			//					} else {
			//						alert("下一步！"); //直接跳转页面
			//						//ajax
			//						$("#page6").stop().fadeOut();
			//						$("#page7").stop().fadeIn();
			//						n++;
			//						gaoliangtop(n);
			//						$(".zhezhao-queren").stop().fadeOut();
			//						benciliucheng++;
			//					}
			//
			//					$("#xuangoubut").removeClass("subbut").addClass("subbut-visited");
			//				});
			//			});

			//page7
			//抵校信息页 radio  赋值
			$(".radio-wrap").click(function() {
				$(this).siblings().children(".radio-button").removeClass("radio-but-on");
				$(this).children(".radio-button").addClass("radio-but-on");
			});
			//baodao
			var baodao = $('input:radio[name="baodao"]:checked').val();
			$("#baodao1").click(function() {
				baodao = "zhunshi";
			});
			$("#baodao2").click(function() {
				baodao = "yanchi";
			});

			//			//jiezhan
			//			var jiezhan = $('input:radio[name="jiezhan"]:checked').val();
			//			$("#jiezhan1").click(function() {
			//				jiezhan = "xuyao";
			//			});
			//			$("#jiezhan2").click(function() {
			//				jiezhan = "buxuyao";
			//			});

			//到校时间

			//jiaotong
			var jiaotong = $('input:radio[name="jiaotong"]:checked').val();
			$("#jiaotong1").click(function() {
				jiaotong = "huoche";
			});
			$("#jiaotong2").click(function() {
				jiaotong = "qiche";
			});
			$("#jiaotong3").click(function() {
				jiaotong = "xiaoche";
			});
			//peitong
			var peitong = $('input:radio[name="peitong"]:checked').val();
			$("#peitong1").click(function() {
				peitong = "wu";
			});
			$("#peitong2").click(function() {
				peitong = "1";
			});
			$("#peitong3").click(function() {
				peitong = "2";
			});
			$("#peitong4").click(function() {
				peitong = "3";
			});
			$("#peitong5").click(function() {
				peitong = "4";
			});
			$("#peitong6").click(function() {
				peitong = "5+";
			});
			var chezhan;
			//dixiao butpage7
			$("#chezhan").change(function() {
				chezhan = $("#chezhan").find("option:selected").text();
			});

			var wenti1 = $("#wenti1").text();
			var wenti2 = $("#wenti2").text();
			var wenti3 = $("#wenti3").text();
			var wenti4 = $("#wenti4").text();
			var wenti5 = $("#wenti5").text();
			console.log(wenti1);
			console.log(wenti2);
			console.log(wenti3);
			console.log(wenti4);
			console.log(wenti5);
			$("#dixiaobut").click(function() {
				//				if(dixiaoTime==undefined){
				//					alert('khfsdviwf');
				//				}

				console.log(chezhan);
				if(baodao != null && dixiaoTime != undefined && jiaotong != null && peitong != null && chezhan != "" && chezhan != "none" && chezhan != undefined) {
					//	ajax
					var info = [{
							"title": wenti1,
							"answer": baodao
						},
						{
							"title": wenti2,
							"answer": jiaotong
						},
						{
							"title": wenti3,
							"answer": peitong
						},
						{
							"title": wenti4,
							"answer": dixiaoTime
						},
						{
							"title": wenti5,
							"answer": chezhan
						}
					];
					console.log(info);
					$.ajax({
						type: "post",
						url: "mobileStudentController.do?dosaveSchoolReport",
						dataType: "json",
						data: {
							info: JSON.stringify(info)
						},
						async: true,
						success: function(data) {
							console.log(data.msg);
						},
						error: function(data) {
							console.log(data.msg);
						}
					});
                        n = 3;
                        gaoliangtop(n);
                        benciliucheng++;
                        $(this).removeClass("subbut").addClass("subbut-visited");

                        $("#page3").stop().fadeOut();
                        $("#page4").stop().fadeIn(200, function () {
                            var nn = true;
                            if (nn == true) {
                                reloadout();
                            }
                        });
					
					
					
					//$("#banji").html(bjmc);
					//$("#yddh").html(yddh);
					//$("#fdyxm").html(fdyxm);
					
				} else {
					alert("有未作答的项！");
				}

			});
		},
		error: function(msg) {
			alert("error:" + msg);
		}
	});

	//判断性别
	if(xb == 1) {
		$("#xb").text("男");
	} else {
		$("#xb").text("女");
	}

	//判断是否单招

	if(dz == "N") {
		$("#dz").text("否");
	} else {
		$("#dz").text("是");
	}

	//判断是否领钥匙

	if(sfcollar_key == "N") {
		$("#yaoshi").text("否");
	} else {
		$("#yaoshi").text("是");
	}
	// //页面切换动画 点击顶部导航切换
	// $(".wizard-steps li").click(function(){
	// 	n=$(this).index();
	// 	console.log(n);
	// 	//如果当前点击状态大于当前状态 不允许点击未进行的流程
	// 	if(n>benciliucheng){
	// 		n=benciliucheng;
	// 		$(".spage").eq(n).show().siblings().hide();
	// 	}else if(n<benciliucheng&&n>liucheng){
	// 		$('.wizard-steps  li').eq(n).children().first().css("border-color","#1296DB").css("background","#1296DB").css("color","#fff").parent().siblings().children(".step").css("background-color","#CED1D6").css("border-color","#CED1D6").css("color","black");
	// 		$(".wizard-steps  li").eq(n).children().last().css("color","#1296DB").parent().siblings().children(".title").css("color","#333");
	// 		$(".wizard-steps  li").eq(n).removeClass().addClass('wizard-steps li ' +"gaoliang").siblings().removeClass('wizard-steps li ' +"gaoliang");

	// 	}else{
	// 		$('.wizard-steps li').eq(n).prevAll().unbind();
	// 	}
	// 	//如果当前点击状态小于当前状态且大于获取的流程状态 liucheng<n<benxiliucheng才可以点

	// });

	// //点击状态
	// $('.wizard-steps  li').click(function(){
	// 	//console.log(n)
	// 	n=$(this).index();
	// 	console.log(n);
	// 	//控制头部横向高亮 n
	// 	$('.wizard-steps  li').eq(n).children().first().css("border-color","#1296DB").css("background","#1296DB").css("color","#fff").parent().siblings().children(".step").css("background-color","#CED1D6").css("border-color","#CED1D6").css("color","black");
	// 	$(".wizard-steps  li").eq(n).children().last().css("color","#1296DB").parent().siblings().children(".title").css("color","#333");
	// 	$(".wizard-steps  li").eq(n).removeClass().addClass('wizard-steps li ' +"gaoliang").siblings().removeClass('wizard-steps li ' +"gaoliang");

	// });

	//基本信息填手机号隐藏显示
	var shoujihao
	$("#inputout").click(function() {
		$("#inputout p").hide().parent().children().last().show().css("border", "0").css("text-align", "right").css("color", "#555");
	});
	if(stmobile != "null" && stmobile != "") {
		shoujihao = stmobile;
		$("#inputout p").html(shoujihao);
	}

	$("#inputout input").blur(function() {
		shoujihao = $("#inputout input").val();

		console.log(shoujihao);
		if(shoujihao != "") {
			//alert("ok");
			$("#inputout p").html(shoujihao);
		} else {
			//alert("no");
			shoujihao = sjh;
			$("#inputout p").html(shoujihao);
		}

		$("#inputout input").hide().prev().show().css("color", "#555");

	});

	//生源地
	$("#inputout1").click(function() {
		$("#inputout1 p").hide().parent().children().last().show().css("border", "0").css("text-align", "right").css("color", "#555");
	});

	$("#inputout1 input").blur(function() {
		var shengyuandi = $("#inputout1 input").val();
		console.log(shengyuandi);
		if(shengyuandi != "") {
			//alert("ok");
			$("#inputout1 p").html(shengyuandi);
		} else {
			//alert("no");

			$("#inputout1 p").html("请输入");
		}

		$("#inputout1 input").hide().prev().show().css("color", "#555");

	});

	//贷款选项卡高亮
	$(".daikuan-left").click(function() {
		$(".daikuan-left").removeClass("daikuan-gaoliang-no").addClass("daikuan-gaoliang").next().addClass("daikuan-gaoliang-no");
		$("#daikuan1").next().stop().fadeOut(200).prev().stop().fadeIn(200);
	});

	$(".daikuan-right").click(function() {
		$(".daikuan-right").removeClass("daikuan-gaoliang-no").addClass("daikuan-gaoliang").prev().addClass("daikuan-gaoliang-no");
		$("#daikuan2").prev().stop().fadeOut(200).next().stop().fadeIn(200);
	});

	//个人信息展开隐藏
	$(".zhankai").children(".jiantou-geren").addClass("xiala-down");
	$(".zhankai").click(function() {
		$(this).prev().stop().slideToggle();
		$(this).children(".jiantou-geren").toggleClass("xiala-down").toggleClass("xiala-up");
	});

	//绿色通道 缴费下拉箭头
	$(".feiyongxinxi li").children(".feiyong-list-wrap").children(".feiyong-con").children(".xiala").addClass("xiala-down");
	$(".feiyongxinxi li").click(function() {
		$(this).children(".feiyongxiangqing").stop().slideToggle(200);
		$(this).children(".feiyong-list-wrap").children(".feiyong-con").children(".xiala").toggleClass("xiala-down").toggleClass("xiala-up");
	});

	//控制贷款申请文字在200字以内
	$("#shenqing-shuoming").bind('input propertychange', function() {
		var curLength = $("#shenqing-shuoming").val().length;

		if(curLength > 200) {
			var num = $("#shenqing-shuoming").val().substr(0, 200);
			$("#shenqing-shuoming").val(num);
			alert("已超过限制字数（200字）！");
		}

	});

	//控制家庭住址在50字

	$("#jiatingzhuzhi").bind('input propertychange', function() {
		var curLength = $("#jiatingzhuzhi").val().length;

		if(curLength > 50) {
			var num = $("#jiatingzhuzhi").val().substr(0, 50);
			$("#jiatingzhuzhi").val(num);
			alert("已超过限制字数（50字）！");
		}

	});

	/*	//军训服和床上用品页面之间切换 高亮
		$(".xuangou-left").click(function(){
			$(".xuangou-left").removeClass("xuangou-gaoliang-no").addClass("xuangou-gaoliang").next().addClass("xuangou-gaoliang-no");
			$(".junxunfu-page").next().stop().hide().prev().stop().fadeIn();
		});

		$(".xuangou-right").click(function(){
			$(".xuangou-right").removeClass("xuangou-gaoliang-no").addClass("xuangou-gaoliang").prev().addClass("xuangou-gaoliang-no");
			$(".chuangshang-page").prev().stop().hide().next().stop().fadeIn();
		});*/

	//是否购买单选框样式切换
	$(".radio-but").click(function() {
		$(this).parent().siblings().children(".radio-but").removeClass("radio-but-on").parent().siblings().children(".radio-but").addClass("radio-but-on");
	});

	//是否选购页面切换 给假的radio赋值 改变假的radio样式
	var val = $('input:radio[name="chuang"]:checked').val();
	$(".shi-chuang").children(".radio-but").addClass("radio-but-on");
	$(".shi-chuang").click(function() {
		$("#radiotrue").attr("checked", true);
		$(".fou-chuang").children(".radio-but").removeClass("radio-but-on");
		$(this).children(".radio-but").addClass("radio-but-on");
		val = "true";
		chuangshangmoney = 300;
		$(".buxuan-chuangshang").hide().prev().stop().fadeIn();
		console.log(chuangshangmoney);
		zongjine = junxunmoney + chuangshangmoney;

	});
	$(".fou-chuang").click(function() {
		$("#radiofalse").attr("checked", true);
		$(".shi-chuang").children(".radio-but").removeClass("radio-but-on");
		$(this).children(".radio-but").addClass("radio-but-on");
		val = "false";
		chuangshangmoney = 0;
		$(".xuan-chuangshang").hide().next().stop().fadeIn();
		console.log(chuangshangmoney);
		zongjine = junxunmoney + chuangshangmoney;
	});

	//刷新方法
	function reloadout() {
		
		$.ajax({
			type: "post",
			url: "mobileStudentController.do?refresh",
			
			async: true,
			success: function(data) {
				console.log(data);
				location.reload(true);
			
			}

		});
	}
	//点击刷新，刷新按钮旋转
	$(".shuaxin").toggle(function() {
			$(".shuaxin-tubiao").removeClass("xuanzhuan1").addClass("xuanzhuan0");
			setTimeout(reloadout(), 900);
		},
		function() {
			$(".shuaxin-tubiao").removeClass("xuanzhuan0").addClass("xuanzhuan1");
			setTimeout(reloadout(), 900);
		}
	);

	//个人信息页面家庭成员
	$(".jiating-list-wrap").children(".jiating-con").children(".xiala").addClass("xiala-down");
	$(".jiating-list-wrap").click(function() {
		$(this).next(".jiatingxiangqing").stop().slideToggle(200);
		$(this).children(".jiating-con").children(".xiala").toggleClass("xiala-down").toggleClass("xiala-up");
	});
	//append服装尺码
	for(var chima = 140; chima <= 200; chima = chima + 5) {
		//console.log(chima);
		var fzcmsel = '<option value="' + chima + '">' + chima + '</option>';
		$("#fuzhuangchima").append(fzcmsel);
	}

	//append鞋子尺码
	for(var chima = 34; chima <= 50; chima = chima + 1) {
		//	console.log(chima);
		var xzcmsel = '<option value="' + chima + '">' + chima + '</option>';
		$("#xiezichima").append(xzcmsel);
	}



	//验证家长信息输入INPUT格式是否正确 (控制长度在20以内)
	$(".inputjzxm").change(function(){
		var inputlen=$(this).val().length;
		if(inputlen>=20){
			$(this).val("").attr('placeholder','姓名格式不正确 请重新输入').addClass("invalid");
		}
	})

	//判断手机号是否是11位并且是否是数字并且是否是1开头的数字
	$(".inputjzdh").change(function(){
		var inputlen=$(this).val().length;
		var inputcon=$(this).val();
		
		var firststr=inputcon.substr(0,1);//获取手机号的第一位，判断是否是1
		
		if(isNaN(inputcon)==true||inputlen>11||firststr!=1){
			$(this).val("").attr('placeholder','手机号格式不正确 请重新输入').addClass("invalid");
		
		}
	});
	//判断亲属关系最长输入5个字
	$(".inputjzgx").change(function(){
		var inputlen=$(this).val().length;
		if(inputlen>5){
			$(this).val("").attr('placeholder','亲属关系格式不正确 请重新输入').addClass("invalid");
		}
	})

	//判断身高体重最长3位数 必须为数字 不能0开头
	$(".sgtz").change(function(){
		var inputlen=$(this).val().length;
		var inputcon=$(this).val();
		var firststr=inputcon.substr(0,1);
		if(isNaN(inputcon)==true||inputlen>3||firststr==0){
			$(this).val("").attr('placeholder','输入格式不正确 请重新输入').addClass("invalid");
		
		}
	});
});