<%@ page language="java" import="java.util.*"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="format-detection" content="telephone=no" />
<meta name="viewport"
	content="width=device-width initial-scale=1.0 maximum-scale=1.0 user-scalable=yes" />
<title>学生之友-用户登录</title>
<script src="plug-in/weixin/yx/js/jquery-1.8.3.min.js"></script>
<link href="plug-in/weixin/yx/css/global.css" rel="stylesheet"
	type="text/css">
<link href="plug-in/weixin/yx/css/login.css" rel="stylesheet"
	type="text/css">

<script type="text/javascript">
	function doSubmit() {
		var ksh = $("#ksh").val();
		var sfzh = $("#sfzh").val();
		
		$.ajax({
			type : "post",
			dataType : "json",
			url : "mobileStudentController.do?doLogin",
			data : {
				sfzh : sfzh,
				ksh : ksh
			},
			success : function(data) {
				if(data==false)
				{
						alert("验证失败！");
					
						
				}
				else
				{
					
					location.href="mobileStudentController.do?goMain";
				}
			},
			error : function(msg) {
				alert("error:" + msg);
			}

			
		});
	}
</script>
</head>

<body>
		<div class="header">
			<div class="img">
				<div class="photo">
					<img src="plug-in/weixin/yx/images/head.png" />
				</div>
			</div>
		</div>
		<div class="login">
			<div class="user">
				<div class="userName">
					<div class="inp">
						<input type="tel" id="ksh" name="ksh" placeholder="请输入学号或手机号"
							class="txt" />
					</div>
				</div>
			</div>
			<div class="user">
				<div class="userPwd">
					<div class="inp">
						<input type="password" id="sfzh" name="sfzh" placeholder="请输入密码"
							class="txt" />
					</div>
				</div>
			</div>
		</div>
		<div class="box">
			<div class="btn">
				<input type="submit" id="button" name="button" onclick="doSubmit()" value="登录" class="sub" />
			</div>
			<%--<div class="link">--%>
				<%--<span class="one"><a href="#">用户注册</a></span> <span class="two"><a--%>
					<%--href="#">忘记密码？</a></span>--%>
			<%--</div>--%>
		</div>
</body>
</html>
