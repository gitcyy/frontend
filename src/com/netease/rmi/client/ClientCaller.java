package com.netease.rmi.client;

import java.net.MalformedURLException;
import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

import com.netease.rmi.server.RmiServer;

public class ClientCaller {

	public static void main(String[] args) throws MalformedURLException, RemoteException, NotBoundException {

		try {
			// String url = "rmi://127.0.0.1/Hello";
			// RmiServer server = (RmiServer) Naming.lookup(url);
			// String result = server.answer("ÄãÔÚÂð?...");
			// System.out.println(result);

			Registry registry = LocateRegistry.getRegistry("127.0.0.1", 1099);
			RmiServer server2 = (RmiServer) registry.lookup("Hello");
			String result2 = server2.answer("fsdfÄãÔÚÂð?...");
			System.out.println(result2);
			String username = server2.getAccountInfo().getUsername();
			String password = server2.getAccountInfo().getPassword();
			System.out.println(username + " : " + password);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			System.exit(0);
		}

	}

}
