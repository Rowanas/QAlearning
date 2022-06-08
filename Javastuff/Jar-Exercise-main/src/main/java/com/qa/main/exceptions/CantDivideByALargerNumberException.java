package com.qa.main.exceptions;

public class CantDivideByALargerNumberException extends Exception {

	public CantDivideByALargerNumberException(String string) {
		super("This is a message: " + string);
	}
}