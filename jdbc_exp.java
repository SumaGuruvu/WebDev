package jdbc;

import java.sql.*;
import java.sql.Statement;

public class jdbc_exp {
	
	public static void main(String args[])
	{
		Connection con=null;
		try
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
			con=DriverManager.getConnection("jdbc:mysql://localhost:3306/softbound","root","root");
			Statement s=con.createStatement();  
			if(con!=null)
			{
				System.out.println("success");
			}
			else
			{
				System.out.println("fail");
			}
			con.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}

}
