package com.netease.rmi.server;

import java.rmi.Naming;
import java.rmi.registry.LocateRegistry;

public class RmiServerStart {

	public static void main(String args[]) {
		try {
			// ����RMIע�����ָ���˿�Ϊ1099����1099ΪĬ�϶˿ڣ�
			// Ҳ����ͨ������ ��java_home/bin/rmiregistry 1099����
			// ���������ַ�ʽ�������ٴ�һ��DOS����
			// ����������rmiregistry����ע����񻹱���������RMIC����һ��ռλ����(stub��)Ϊ������
			LocateRegistry.createRegistry(1099);

			// ����Զ�̶����һ������ʵ����������hello����
			// �����ò�ͬ����ע�᲻ͬ��ʵ��
			RmiServer server = new RmiServerImpl();

			// ��helloע�ᵽRMIע��������ϣ�����ΪHello
			Naming.rebind("Hello", server);

			// ���Ҫ��helloʵ��ע�ᵽ��һ̨������RMIע�����Ļ�����
			// Naming.rebind("//192.168.1.105:1099/Hello",hello);
			System.out.println("Hello����������������");
		} catch (Exception e) {
			System.out.println("��������ʧ�ܣ�" + e);
		}
	}
}
