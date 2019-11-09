import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

@WebServlet(name = "ClickCount")
public class ClickCount extends HttpServlet {

    private static final long serialVersionUID = 1L;
    private int count;

    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost:3306/click";

    static final String USER = "root";
    static final String PASS = "170405";

    Connection conn = null;
    Statement statement = null;
    String sql = "";

    public void init() {
        try {
            Class.forName(JDBC_DRIVER);
            conn = DriverManager.getConnection(DB_URL, USER, PASS);
            statement = conn.createStatement();
            sql = "select * from clickcount;";
            ResultSet set = statement.executeQuery(sql);
            set.next();
            count = set.getInt("count");
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html; charset=utf-8");
        count++;
        PrintWriter writer = response.getWriter();
        writer.println("<html><head><title>");
        writer.println("统计网站访问量");
        writer.println("</title></head><body>");
        writer.println("<h2 align=\"center\">这个网页被访问了");
        writer.println("<font color=\"red\" size=\"50\">" + count + "</font>");
        writer.println("次了呢</h2>");
        writer.println("</body></html>");
    }

    public void destroy() {
        try {
            sql = "update clickcount set count = " + count + ";";
            statement.execute(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}
