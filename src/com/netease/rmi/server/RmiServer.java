package com.netease.rmi.server;

import java.rmi.Remote;
import java.rmi.RemoteException;

import com.netease.rmi.entity.Account;

public interface RmiServer extends Remote {
	
	public String answer(String question) throws RemoteException;
	
	public Account getAccountInfo() throws RemoteException;
}
