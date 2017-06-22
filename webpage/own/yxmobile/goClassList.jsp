<%@ page language="java" import="java.util.*"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE HTML>
<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="format-detection" content="telephone=no" />
		<meta name="viewport" content="width=device-width initial-scale=1.0 maximum-scale=1.0 user-scalable=yes" />
		<title>教师端</title>
		<script src="plug-in/weixin/yx/js/jquery-1.8.3.min.js"></script>
		<script src="plug-in/weixin/yx/js/mui.min.js"></script>
		<link href="plug-in/weixin/yx/css/loading.css" rel="stylesheet" type="text/css">

		<link href="plug-in/weixin/yx/css/mui.css" rel="stylesheet" type="text/css">
		<link href="plug-in/weixin/yx/css/yingxin.css" rel="stylesheet" type="text/css">
		<script type="text/javascript">
			var ksh = "";

			function getclass(ksh) {

				$(".jiazai").stop().fadeIn(800);
				$.ajax({
					type: "post",
					dataType: "json",
					timeout: 5000,
					url: "mobileStudentController.do?getClassList",
					data: {
						ksh: ksh
					},
					success: function(data) {
						var xsxx = "";
						console.log(data.success);
						if(data.obj == "YES") {
							var obj = $.parseJSON(data.msg);
							if(obj != null) {
								$(".tip").stop().fadeOut(600);
								for(var i = 0; i < obj.length; i++) {
									var sfyxbd;
									var kshin = "cc" + obj[i].ksh;

									if(obj[i].sfyx == "N") {
										sfyxbd = "<div style='color:red;float:left;margin-left:0px' class='sfyxbd'>否</div>"
										xsxx = '<div style="color:#000;font-size: 11pt" id="xsxxcon"><div class="mui-card-header" style="color:#000;font-size: 11pt">考生号<span id="kshthis">' + obj[i].ksh +
											'</span></div><div class="mui-card-content" style="color:#000;font-size: 11pt;height:44px;"><div class="mui-card-content-inner" >姓名:' + obj[i].xm +
											'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;班级:' + obj[i].bjmc +
											'</div></div><div class="mui-card-footer" style="color:#000;font-size: 11pt;justify-content: inherit"><div>是否系部报道：</div><div id="bdzt">' + sfyxbd +
											'</div><div style="color:#157EE0;position:absolute;right:20px;" id="qrbd" onclick="auto(\'' + kshin + '\')" ><span id="' + kshin + '">确认系部报道</div></div>';
									} else {
										sfyxbd = "<div style='color:#168FF1;float:left;margin-left:0px' class='sfyxbd'>是</div>";
										var sfyxtxt = $(".sfyxbd").text();
										xsxx = '<div style="color:#000;font-size: 11pt" id="xsxxcon"><div class="mui-card-header" style="color:#000;font-size: 11pt">考生号<span id="kshthis">' + obj[i].ksh +
											'</span></div><div class="mui-card-content" style="color:#000;font-size: 11pt;height:44px;"><div class="mui-card-content-inner" >姓名:' + obj[i].xm +
											'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;班级:' + obj[i].bjmc +
											'</div></div><div class="mui-card-footer" style="color:#000;font-size: 11pt;justify-content: inherit"><div>是否系部报道：</div><div id="bdzt">' + sfyxbd +
											'</div><div style="color:#157EE0;position:absolute;right:20px;" id="qrbd" ></div></div>';

									}

									// console.log(xsxx);
									$(".con").append(xsxx);
								}
								$(".jiazai").stop().fadeOut(800);

							}
						} else if(data.obj == "NOT") {
							console.log("当前无可用数据！");
							$(".jiazai").stop().fadeOut();
							$(".tip").stop().fadeIn(800).html("暂无学生信息");
							//$(".input-wrap input").val("").attr('placeholder','暂无学生信息,请重新输入');

						} else {
							console.log(data.obj + "数据获取失败");
						}
					},
					error: function(msg) {
						console.log("error:" + msg);
					},
					complete: function(XMLHttpRequest, status) { //请求完成后最终执行参数
						　　　　
						if(status == 'timeout') { //超时,status还有success,error等值的情况
							　　　　　　　　　
							alert("连接超时");　　　　
						}
					}

				});
			}

			//获取班主任所带学生信息
			$(document).ready(function() {
				getclass();

				$("#xsxxcon").addClass("mui-card");

			});
		</script>

		<style type="text/css">
			.top {
				width: 100%;
				height: 50px;
				position: fixed;
				background-color:#fff;
				top: 60px;
				z-index:555;
				border-bottom:1px solid #eee;
				
			}
			
			.input-wrap {
				height: 42px;
				margin-right: 90px;
				border-radius: 3px;
				margin-left: 10px;
			}
			
			.input-wrap input {
				height: 42px;
				font-size:11pt;
				box-shadow:0 1 2px 0px rgba(0, 0, 0, .2);
			}
			
			.search-but {
				height: 42px;
				width: 90px;
				border-top-right-radius: 3px;
				border-bottom-right-radius: 3px;
				background-color: #157EE0;
				color: #fff;
				line-height: 42px;
				text-align: center;
				float: right;
				position: absolute;
				top: 0px;
				right: 10px;
				box-shadow:0 1 2px 0px rgba(0, 0, 0, .2);
			}
			
			.con {
				position: relative;
				top: 110px;
			}
			
			#xsxxcon {
				font-size: 14px;
				position: relative;
				overflow: hidden;
				margin: 10px;
				border-radius: 2px;
				background-color: white;
				background-clip: padding-box;
				box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
			}
			
			.shadow1{
				-webkit-box-shadow:0px 4px 5px 1px #ccc;
			}
			
			.jiazai {
				width: 100%;
				height: 100%;
				position: fixed;
				top: 0px;
				left: 0px;
				z-index: 888;
			}
			
			#spinner {
				position: fixed;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
			}
			
			.maoboli {
				-webkit-filter: blur(10px);
			}
			
			.tip {
				height: 20px;
				line-height: 20px;
				width: 100%;
				position: fixed;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
				text-align: center;
			}
		</style>
	
	</head>

	<body>
		<div class="tip" style="display:none"></div>
		<div class="jiazai">
			<div id="spinner"></div>
		</div>
		<div class="zhezhao-queren">
			<div class="querenkuang">
				<div class="queren-wenzi">
					<p></p>
				</div>
				<div class="conbut" id="querenbut-main" style="width:100%;text-align: center;line-height: 47px;display:none">确定</div>
				<div class="conbut" id="main-quxiao" style="display:none">取消</div>
				<div class="conbut" id="main-querenbut" style="display:none">继续</div>
			</div>
		</div>
		<div class="wrap">
		
			<div class="topwrap" style="position:fixed;top:0px;z-index:999;width:100%;background-color:#fff;">
				<div class="mui-card" style="width:100%;margin-left:0px;margin-top:0px; box-shadow:none;z-index:666;">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell mui-collapse">
							
							
							<a class="mui-navigate-right" href="#" style="line-height:30px;text-decoration:underline;">辅导员信息</a>
							<div class="mui-collapse-content">
								<div class="fdyinfo">
									<div class="fdytitle"><span>姓名</span><span class="fdyright" id="fdyxm">张三</span></div>
									<div class="fdytitle"><span>工号</span><span class="fdyright" id="fdygh">00011122</span></div>
									<div class="fdyowner">所带班级</div>
									<div class="fdyowner-con">
										<ul>
											<li>班级111111111</li>
											<li>班级111111111</li>
											<li>班级111111111</li>
											<li>班级111111111</li>
											<li>班级111111111</li>
											<li>班级111111111</li>

										</ul>

									</div>

								</div>
								<div class="fdyloginout">注销</div>
							</div>

						</li>

					</ul>
				</div>
				<div class="top">
					<div class="input-wrap">
						<input type="text" placeholder="请输入考生号">
					</div>
					<div class="search-but">
						查询
					</div>
				</div>

			</div>

		
		<div class="con">





			<div style="color:#000;font-size: 11pt" id="xsxxcon"><div class="mui-card-header" style="color:#000;font-size: 11pt">考生号<span id="kshthis">16361122110197</span></div><div class="mui-card-content" style="color:#000;font-size: 11pt;height:44px;"><div class="mui-card-content-inner">姓名:潘佳倩&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;班级:17高职英语(01)班</div></div><div class="mui-card-footer" style="color:#000;font-size: 11pt;justify-content: inherit"><div>是否系部报道：</div><div id="bdzt"><div style="color:#168FF1;float:left;margin-left:0px" class="sfyxbd">是</div></div><div style="color:#157EE0;position:absolute;right:20px;" id="qrbd"></div></div></div>
			<div style="color:#000;font-size: 11pt" id="xsxxcon"><div class="mui-card-header" style="color:#000;font-size: 11pt">考生号<span id="kshthis">16361122110197</span></div><div class="mui-card-content" style="color:#000;font-size: 11pt;height:44px;"><div class="mui-card-content-inner">姓名:潘佳倩&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;班级:17高职英语(01)班</div></div><div class="mui-card-footer" style="color:#000;font-size: 11pt;justify-content: inherit"><div>是否系部报道：</div><div id="bdzt"><div style="color:#168FF1;float:left;margin-left:0px" class="sfyxbd">是</div></div><div style="color:#157EE0;position:absolute;right:20px;" id="qrbd"></div></div></div>
			<div style="color:#000;font-size: 11pt" id="xsxxcon"><div class="mui-card-header" style="color:#000;font-size: 11pt">考生号<span id="kshthis">16361122110197</span></div><div class="mui-card-content" style="color:#000;font-size: 11pt;height:44px;"><div class="mui-card-content-inner">姓名:潘佳倩&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;班级:17高职英语(01)班</div></div><div class="mui-card-footer" style="color:#000;font-size: 11pt;justify-content: inherit"><div>是否系部报道：</div><div id="bdzt"><div style="color:#168FF1;float:left;margin-left:0px" class="sfyxbd">是</div></div><div style="color:#157EE0;position:absolute;right:20px;" id="qrbd"></div></div></div>
			<div style="color:#000;font-size: 11pt" id="xsxxcon"><div class="mui-card-header" style="color:#000;font-size: 11pt">考生号<span id="kshthis">16361122110197</span></div><div class="mui-card-content" style="color:#000;font-size: 11pt;height:44px;"><div class="mui-card-content-inner">姓名:潘佳倩&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;班级:17高职英语(01)班</div></div><div class="mui-card-footer" style="color:#000;font-size: 11pt;justify-content: inherit"><div>是否系部报道：</div><div id="bdzt"><div style="color:#168FF1;float:left;margin-left:0px" class="sfyxbd">是</div></div><div style="color:#157EE0;position:absolute;right:20px;" id="qrbd"></div></div></div>





			</div>

		</div>
	</body>
	<script type="text/javascript">
		$(document).ready(function(){
		$(function(){
			var timer;
			$(window).scroll(function(){
				clearTimeout(timer);
				if($(document).scrollTop()>3){
					$(".top").addClass("shadow1");
				}
				else{
					$(".top").removeClass("shadow1");
				}
			});
		});
		
	});
		
		
		
		
		$(".search-but").click(function() {
			$(".con").children().remove();
			var kshinput = $(".input-wrap input").val();
			console.log(kshinput);
			getclass(kshinput);

		});

		function auto(ksh) {
			$(".zhezhao-queren").stop().fadeIn();
			$("#querenbut-main").hide();
			$("#main-quxiao").show();
			$("#main-querenbut").show();
			$("#main-quxiao").click(function() {
				$(".zhezhao-queren").hide();
			})
			// body...

			$(".queren-wenzi p").text("是否将该学生设为已在系部报道状态？");
			$("#main-querenbut").click(function() {
				var kshstr = ksh.slice(2);
				console.log(kshstr);
				$.ajax({
					type: "post",
					dataType: "json",
					url: "mobileStudentController.do?dosaveXy",
					data: {
						ksh: kshstr
					},
					success: function(data) {
						console.log(data.success);
						if(data.success == true) {
							$("#" + ksh).html("");
							$(".zhezhao-queren").stop().fadeOut();
							$("#" + ksh).parent().prev().find(".sfyxbd").text("是").css("color", "#168FF1");

						} else {
							$(".queren-wenzi p").text("网络错误！");
							$("#querenbut-main").show();
							$("#main-quxiao").hide();
							$("#main-querenbut").hide();
							$("#querenbut-main").click(function() {
								$(".zhezhao-queren").hide();

							});

						}
					}
				});
			})

		}
	</script>

</html>