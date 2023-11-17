/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.cefet.vidralglass.service;

import br.cefet.vidralglass.dao.EnderecoDao;
import br.cefet.vidralglass.model.Endereco;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

/**
 *
 * @author criad
 */
@Service
public class EnderecoService {
   private final EnderecoDao enderecoDao;
    
    public EnderecoService(Jdbi jdbi){
        this.enderecoDao = jdbi.onDemand(EnderecoDao.class);

    }
    
    public Endereco inserir (Endereco endereco){
        int idCliente = enderecoDao.insert(endereco);
        endereco.setIdCliente(idCliente);
        return endereco;
    }
    
    public List<Endereco> consultarTodos(){
     return enderecoDao.getAll();

    }
    
    public Endereco consultarPorId(int id){
       return enderecoDao.get(id);
    }
    
    public void alterar(Endereco endereco){
       enderecoDao.update(endereco);
    }
    
    public void excluir(int id){
        enderecoDao.delete(id);
    }
}
