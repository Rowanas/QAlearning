package com.qa.main.calc;

import java.util.Scanner;

import com.qa.main.exceptions.CantDivideByALargerNumberException;
import com.qa.main.utils.UserInput;

public class CalculatorApp {

	private Scanner input;

	public CalculatorApp() {
		super();

		this.input = UserInput.getScanner();
		menu();
	}

	public void menu() {
		boolean menuFlag = true;
		String menuOption = "";

		double[] choices = { 0, 0 };
		double answer = 0;

		System.out.println("Welcome to the Calculator app");

		while (menuFlag) {
			System.out.println("=".repeat(40));
			System.out.println("Please select which operation you would like to perform");
			System.out.println("=".repeat(40));
			System.out.println("\t1). Addition");
			System.out.println("\t2). Subtraction");
			System.out.println("\t3). Multiplication");
			System.out.println("\t4). Division");
			System.out.println("\t5). Modulus");
			System.out.println("=".repeat(40));
			System.out.println("\t0). EXIT");

			menuOption = this.input.nextLine();
			
			switch (menuOption) {
				case "1":
					choices = userEntry();
					answer = Calculator.add(choices[0], choices[1]);
					break;
	
				case "2":
					choices = userEntry();
					answer = Calculator.sub(choices[0], choices[1]);
					break;
	
				case "3":
					choices = userEntry();
					answer = Calculator.mult(choices[0], choices[1]);
					break;
	
				case "4":
					choices = userEntry();
				try {
					answer = Calculator.div(choices[0], choices[1]);
				} catch (ArithmeticException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (CantDivideByALargerNumberException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
					break;
	
				case "5":
					choices = userEntry();
					System.out.println("");
					choices = userEntry();
	
					answer = Calculator.mod(choices[0], choices[1]);
					break;
	
				case "0":
					menuFlag = false;
					break;
	
				default:
					System.out.println("Incorrect option detected, please select again!\n\n");
			}

			System.out.println("You result is: " + answer + "\n");
		}
	}

	private double[] userEntry() {

		double[] result = { 0, 0 };

		System.out.println("Please enter the first number:");
		result[0] = Double.parseDouble(input.nextLine());

		System.out.println("Please enter the second number:");
		result[1] = Double.parseDouble(input.nextLine());

		return result;
	}

}
