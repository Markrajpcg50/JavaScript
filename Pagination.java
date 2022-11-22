import java.util.*;
public class Pagination
{
    public static void main(String[] args)
    {
        Scanner sc1= new Scanner(System.in);
        Scanner sc2= new Scanner(System.in);

        System.out.println("Total Number of Records ");
        int noOfRecords=sc1.nextInt();
        System.out.println("");
        System.out.print("Record per Page :");
        int recordsPerPage=sc1.nextInt();
        System.out.println("");
        int output=(int)(Math.ceil((double)noOfRecords/recordsPerPage));
        System.out.println("Output: Number of Pages : "+output);
        sc1.close();
        sc2.close();
    }
}