package com.netease.rmi.server;

import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

import com.netease.rmi.entity.Account;

public class RmiServerImpl extends UnicastRemoteObject implements RmiServer {

	private static final long serialVersionUID = -7120976117262187234L;

	protected RmiServerImpl() throws RemoteException {
		super();
	}

	public String answer(String question) throws RemoteException {
		String str = "收到问题：" + question;
		return str;
	}

	public Account getAccountInfo() throws RemoteException {
		Account account = new Account();
		account.setUsername("admin");
		account.setPassword("admin");
		return account;
	}

}
