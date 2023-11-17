package br.cefet.vidralglass.service;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */


import br.cefet.vidralglass.dao.TipoPecaDao;
import br.cefet.vidralglassbase.model.TipoPeca;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

/**
 *
 * @author criad
 */
@Service
public class TipoPecaService {
   private final TipoPecaDao tipoPecaDao;
    
    public TipoPecaService(Jdbi jdbi){
        this.tipoPecaDao = jdbi.onDemand(TipoPecaDao.class);
    }
    
    public TipoPeca inserir (TipoPeca tipoPeca){
        int id = tipoPecaDao.insert(tipoPeca);
        tipoPeca.setId(id);
        return tipoPeca;
    }
    
    public List<TipoPeca> consultarTodos(){
        List<TipoPeca> TipoPecaList = tipoPecaDao.getAll();
        
        return TipoPecaList;
    }
    
    public TipoPeca consultarPorId(int id){
        TipoPeca tipoPeca = tipoPecaDao.get(id);
        return tipoPeca;
    }
    
    public void alterar(TipoPeca tipoPeca){
        tipoPecaDao.update(tipoPeca);
    }
    
    public void excluir(int id){
        tipoPecaDao.delete(id);
    }
}
