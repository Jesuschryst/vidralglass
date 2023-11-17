package br.cefet.vidralglass.service;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */



import br.cefet.vidralglass.dao.ClienteDao;
import br.cefet.vidralglass.dao.EnderecoDao;
import br.cefet.vidralglass.model.Cliente;
import br.cefet.vidralglass.model.Endereco;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

/**
 *
 * @author criad
 */
@Service
public class ClienteService {
    private final ClienteDao clienteDao;
    private final EnderecoDao enderecoDao;
    
    public ClienteService(Jdbi jdbi){
        this.clienteDao = jdbi.onDemand(ClienteDao.class);
        this.enderecoDao = jdbi.onDemand(EnderecoDao.class);
    }
    
    public Cliente inserir (Cliente cliente){
        int id = clienteDao.insert(cliente);
        cliente.setIdCliente(id);
        return cliente;
    }
    
    public List<Cliente> consultarTodos(){
        List<Cliente> ClienteList = clienteDao.getAll();
        
        for (Cliente cliente : ClienteList) {
            Endereco endereco = enderecoDao.getOneByIdCliente(cliente.getIdCliente());
            cliente.setEndereco(endereco);
        }
        
        return ClienteList;
    }
    
    public Cliente consultarPorId(int id){
        Cliente cliente = clienteDao.get(id);
        
        if (cliente != null) {
            Endereco endereco = enderecoDao.getOneByIdCliente(cliente.getIdCliente());
            cliente.setEndereco(endereco);
        }
        return cliente;
    }
    
    public void alterar(Cliente cliente){
        clienteDao.update(cliente);
    }
    
    public void excluir(int id){
        clienteDao.delete(id);
    }
}
