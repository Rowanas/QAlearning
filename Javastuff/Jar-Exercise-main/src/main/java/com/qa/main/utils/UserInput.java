package com.qa.main.utils;

import java.util.Scanner;

public class UserInput {
	
	private static Scanner input;
	
	public static Scanner getScanner() {
		
		if(input == null) {
			input = new Scanner(System.in);
		}
		
		return input;
	}
	
	public static boolean closeScanner() {
		input.close();
		return true;
	}

}