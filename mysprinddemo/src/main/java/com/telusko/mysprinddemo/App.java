package com.telusko.mysprinddemo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App 
{
    public static void main( String[] args )
    {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml"); 
        //Laptop obj = context.getBean(Laptop.class);
        Dev obj = context.getBean(Dev.class);
        System.out.println(obj.getLaptop());
    }
}
