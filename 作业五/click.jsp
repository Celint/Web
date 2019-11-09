<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.Statement" %>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.ResultSet" %>
<%--
  Created by IntelliJ IDEA.
  User: Redsky
  Date: 2019/11/9
  Time: 13:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>网站点击量统计</title>
</head>
<body>

    <%
        String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
        String DB_URL = "jdbc:mysql://localhost:3306/click";

        String USER = "root";
        String PASS = "170405";

        Class.forName(JDBC_DRIVER);
        Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
        Statement statement = conn.createStatement();
        String sql = "select * from clickcount;";
        ResultSet set = statement.executeQuery(sql);
        set.next();
        Integer count = set.getInt("count");
        count++;
        sql = "update clickcount set count = " + count + ";";
        statement.execute(sql);
    %>

    <h2 align="center">这个网站被访问了
        <span style="color: red; font-size: 50px;">
            <%= count%>
        </span>
        次
    </h2>
</body>
</html>
