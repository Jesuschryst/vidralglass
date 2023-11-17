/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.cefet.vidralglass.service;



import br.cefet.vidralglass.dao.ItemOrcamentoDao;
import br.cefet.vidralglass.model.ItemOrcamento;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

/**
 *
 * @author criad
 */
@Service
public class ItemOrcamentoService {
    private final ItemOrcamentoDao itemOrcamentoDao;
    
    public ItemOrcamentoService(Jdbi jdbi){
        this.itemOrcamentoDao = jdbi.onDemand(ItemOrcamentoDao.class);

    }
    
    public ItemOrcamento inserir (ItemOrcamento itemOrcamento){
        int idOrcamento = itemOrcamentoDao.insert(itemOrcamento);
        itemOrcamento.setIdOrcamento(idOrcamento);
        return itemOrcamento;
    }
    
    public List<ItemOrcamento> consultarTodos(){
     return itemOrcamentoDao.getAll();

    }
    
    public List<ItemOrcamento> consultarTodosPorIdOrcamento(int idOrcamento){
     return itemOrcamentoDao.getAllByOrcamento(idOrcamento);

    }
    
    public ItemOrcamento consultarPorId(int id){
       return itemOrcamentoDao.get(id);
    }
    
    public ItemOrcamento consultarPorIdOrcamento(int id){
       return itemOrcamentoDao.getByIdOrcamento(id);
    }
    
    public ItemOrcamento consultarIdPorIdOrcamento(int id){
       return itemOrcamentoDao.getIdByIdOrcamento(id);
    }
    
    public void alterar(ItemOrcamento itemOrcamento){
       itemOrcamentoDao.update(itemOrcamento);
    }
    
    public void excluir(int id){
        itemOrcamentoDao.delete(id);
    }
    
    public void excluirPorIdOrcamento(int id){
        itemOrcamentoDao.deleteByIdOrcamento(id);
    }
}
