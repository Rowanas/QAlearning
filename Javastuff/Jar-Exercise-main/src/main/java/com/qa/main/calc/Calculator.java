package com.qa.main.calc;

import com.qa.main.exceptions.CantDivideByALargerNumberException;

public class Calculator {
	
	public static double add(double x, double y) {
		return x + y;
	}
	
	public static double sub(double x, double y) {
		return x - y;
	}
	
	public static double mult(double x, double y) {
		return x * y;
	}
	
	public static double div(double x, double y) throws ArithmeticException, CantDivideByALargerNumberException {

		if (y == 0) {
			throw new ArithmeticException("Cannot div by 0");
		}else if (x < y){
			throw new CantDivideByALargerNumberException("Avoid dividing by a larger number than " + x);
		}else {
			return x / y;
		}
	}
	
	public static double mod(double x, double y) {
		return x % y;
	}
		

}
