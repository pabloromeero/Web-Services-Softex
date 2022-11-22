
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

@WebService
@SOAPBinding(style = Style.RPC)
public interface CalculadoraServer {
  @WebMethod float soma(float num1, float num2);
  @WebMethod float subtracao(float num1, float num2);
  @WebMethod float multiplicacao(float num1, float num2);
  @WebMethod float divisao(float num1, float num2);
}

import java.util.Date;
import javax.jws.WebService;

@WebService(endpointInterface = "calc.CalculadoraServer")
public class CalculadoraServerImpl implements CalculadoraServer {

  public float soma(float num1, float num2) {
    return num1 + num2;
  }

  public float subtracao(float num1, float num2) {
    return num1 - num2;
  }

  public float multiplicacao(float num1, float num2) {
    return num1 * num2;
  }

  public float divisao(float num1, float num2) {
    return num1 / num2;
  }

}

import javax.xml.ws.Endpoint;

public class CalculadoraServerPublisher {

  public static void main(String[] args)
  {
    Endpoint.publish("http://127.0.0.1:9876/calc",
    new CalculadoraServerImpl());
  }
}

import javax.xml.namespace.QName;
import javax.xml.ws.Service;
import java.net.URL;

class CalculadoraClient {

  public static void main(String args[]) throws Exception {
    URL url = new URL("http://127.0.0.1:9876/calc?wsdl");
    QName qname = new QName("http://calc/","CalculadoraServerImplService");
    Service ws = Service.create(url, qname);
    CalculadoraServer calc = ws.getPort(CalculadoraServer.class);

    System.out.println("Soma (5+1): " + calc.soma(5,1));
    System.out.println("Subtracao (5-1): " + calc.subtracao(5,1));
    System.out.println("Multiplicacao (5*1): " + calc.multiplicacao(5,1));
    System.out.println("Divisao (5/1): " + calc.divisao(5,1));

  }
}