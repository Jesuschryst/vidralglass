package br.cefet.vidralglass.service;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */


import br.cefet.vidralglass.dao.AcessorioDao;
import br.cefet.vidralglass.model.Acessorio;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

/**
 *
 * @author criad
 */
@Service
public class AcessorioService {
    private final AcessorioDao acessorioDao;
    
    public AcessorioService(Jdbi jdbi){
        this.acessorioDao = jdbi.onDemand(AcessorioDao.class);
    }
    
    public Acessorio inserir (Acessorio acessorio){
        int id = acessorioDao.insert(acessorio);
        acessorio.setId(id);
        return acessorio;
    }
    
    public List<Acessorio> consultarTodos(){
        List<Acessorio> acessorioList = acessorioDao.getAll();
        
        return acessorioList;
    }
    
    public Acessorio consultarPorId(int id){
        Acessorio acessorio = acessorioDao.get(id);
        return acessorio;
    }
    
    public void alterar(Acessorio acessorio){
        acessorioDao.update(acessorio);
    }
    
    public void excluir(int id){
        acessorioDao.delete(id);
    }
}
