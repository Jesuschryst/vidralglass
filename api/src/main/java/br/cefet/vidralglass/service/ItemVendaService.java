/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.cefet.vidralglass.service;

import br.cefet.vidralglass.dao.ItemVendaDao;
import br.cefet.vidralglass.model.ItemVenda;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

/**
 *
 * @author criad
 */
@Service
public class ItemVendaService {
    private final ItemVendaDao itemVendaDao;
    
    public ItemVendaService(Jdbi jdbi){
        this.itemVendaDao = jdbi.onDemand(ItemVendaDao.class);

    }
    
    public ItemVenda inserir (ItemVenda itemVenda){
        int idVenda = itemVendaDao.insert(itemVenda);
        itemVenda.setId(idVenda);
        return itemVenda;
    }
    
    public List<ItemVenda> consultarTodos(){
     return itemVendaDao.getAll();

    }
    
    public ItemVenda consultarPorId(int id){
       return itemVendaDao.get(id);
    }
    
    public void alterar(ItemVenda itemVenda){
       itemVendaDao.update(itemVenda);
    }
    
    public void excluir(int id){
        itemVendaDao.delete(id);
    }
}
