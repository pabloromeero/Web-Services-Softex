/*
 *  crie a estrutura de um web service, que demonstra exemplos de comunicação SOAP 
 *  (requisição e resposta em xmls) e explique como ele funciona. 
 *  Resposta: Criei um Web Services básica utilizando a comunicação SOAP, 
 *  na qual retornará o Hello e nome do cliente.
 */
package pacote1;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.ejb.Stateless;

/**
 *
 * @author Pablo Romero
 */
@WebService(serviceName = "Hello")
@Stateless()
public class Hello {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "hello")
    public String hello(@WebParam(name = "name") String txt) {
        return "Hello " + txt + " !";
    }
}
