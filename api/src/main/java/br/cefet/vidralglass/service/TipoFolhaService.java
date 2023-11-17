package br.cefet.vidralglass.service;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

import br.cefet.vidralglass.dao.TipoFolhaDao;
import br.cefet.vidralglassbase.model.TipoFolha;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

/**
 *
 * @author criad
 */
@Service
public class TipoFolhaService {
    private final TipoFolhaDao tipoFolhaDao;
    
    public TipoFolhaService(Jdbi jdbi){
        this.tipoFolhaDao = jdbi.onDemand(TipoFolhaDao.class);
    }
    
    public TipoFolha inserir (TipoFolha tipoFolha){
        int id = tipoFolhaDao.insert(tipoFolha);
        tipoFolha.setId(id);
        return tipoFolha;
    }
    
    public List<TipoFolha> consultarTodos(){
        List<TipoFolha> TipoFolhaList = tipoFolhaDao.getAll();
        
        return TipoFolhaList;
    }
    
    public TipoFolha consultarPorId(int id){
        TipoFolha tipoFolha = tipoFolhaDao.get(id);
        return tipoFolha;
    }
    
    public void alterar(TipoFolha tipoFolha){
        tipoFolhaDao.update(tipoFolha);
    }
    
    public void excluir(int id){
        tipoFolhaDao.delete(id);
    }
}
