/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.cefet.vidralglass.service;


import br.cefet.vidralglass.dao.ItemOrcamentoAcessorioDao;
import br.cefet.vidralglass.model.ItemOrcamentoAcessorio;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

/**
 *
 * @author criad
 */
@Service
public class ItemOrcamentoAcessorioService {
    private final ItemOrcamentoAcessorioDao itemOrcamentoAcessorioDao;
    
    public ItemOrcamentoAcessorioService(Jdbi jdbi){
        this.itemOrcamentoAcessorioDao = jdbi.onDemand(ItemOrcamentoAcessorioDao.class);

    }
    
    public ItemOrcamentoAcessorio inserir (ItemOrcamentoAcessorio itemOrcamentoAcessorio){
        int idOrcamento = itemOrcamentoAcessorioDao.insert(itemOrcamentoAcessorio);
        itemOrcamentoAcessorio.setIdItemOrcamentoAcessorio(idOrcamento);
        return itemOrcamentoAcessorio;
    }
    
    public List<ItemOrcamentoAcessorio> consultarTodos(){
     return itemOrcamentoAcessorioDao.getAll();

    }
    
    public List<ItemOrcamentoAcessorio> consultarTodosPorItemOrcamento(int id){
     return itemOrcamentoAcessorioDao.getAllByItemOrcamento(id);

    }
    
    public ItemOrcamentoAcessorio consultarPorId(int id){
       return itemOrcamentoAcessorioDao.get(id);
    }
    
    public ItemOrcamentoAcessorio consultarPorIdItem(int id){
       return itemOrcamentoAcessorioDao.getByIdItem(id);
    }
    
    
    public void alterar(ItemOrcamentoAcessorio itemOrcamentoAcessorio){
       itemOrcamentoAcessorioDao.update(itemOrcamentoAcessorio);
    }
    
    public void excluir(int id){
        itemOrcamentoAcessorioDao.delete(id);
    }
    
    public void excluirPorItemOrcamento(int id){
        itemOrcamentoAcessorioDao.deleteByItemOrcamento(id);
    }
}
