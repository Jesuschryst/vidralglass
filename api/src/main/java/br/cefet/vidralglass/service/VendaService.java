package br.cefet.vidralglass.service;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */


import br.cefet.vidralglass.dao.VendaDao;
import br.cefet.vidralglassbase.model.Venda;
import java.util.List;

import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

/**
 *
 * @author criad
 */
@Service
public class VendaService {
    private final VendaDao vendaDao;
    
    public VendaService(Jdbi jdbi){
        this.vendaDao = jdbi.onDemand(VendaDao.class);
    }
    
    public Venda inserir (Venda venda){
        int id = vendaDao.insert(venda);
        venda.setId(id);
        return venda;
    }
    
    public List<Venda> consultarTodos(){
        List<Venda> VendaList = vendaDao.getAll();
        
        return VendaList;
    }
    
    public Venda consultarPorId(int id){
        Venda venda = vendaDao.get(id);
        return venda;
    }
    
    public void alterar(Venda venda){
        vendaDao.update(venda);
    }
    
    public void excluir(int id){
        vendaDao.delete(id);
    }
}
