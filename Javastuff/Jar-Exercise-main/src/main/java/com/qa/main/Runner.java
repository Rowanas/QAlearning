package com.qa.main;

import com.qa.main.calc.CalculatorApp;
import com.qa.main.utils.UserInput;

public class Runner {

	public static void main(String[] args) {
		try {
			CalculatorApp myApp = new CalculatorApp();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			UserInput.closeScanner();
			System.out.println("=".repeat(40));
			System.out.println("APPLICATION HAS CLOSED!");
			System.out.println("=".repeat(40));
		}
	}

}
