package br.cefet.vidralglass.service;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */


import br.cefet.vidralglass.dao.TipoVidroDao;
import br.cefet.vidralglassbase.model.TipoVidro;
import java.util.List;

import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

/**
 *
 * @author criad
 */
@Service
public class TipoVidroService {
   private final TipoVidroDao tipoVidroDao;
    
    public TipoVidroService(Jdbi jdbi){
        this.tipoVidroDao = jdbi.onDemand(TipoVidroDao.class);
    }
    
    public TipoVidro inserir (TipoVidro tipoVidro){
        int id = tipoVidroDao.insert(tipoVidro);
        tipoVidro.setId(id);
        return tipoVidro;
    }
    
    public List<TipoVidro> consultarTodos(){
        List<TipoVidro> TipoVidroList = tipoVidroDao.getAll();
        
        return TipoVidroList;
    }
    
    public TipoVidro consultarPorId(int id){
        TipoVidro tipoVidro = tipoVidroDao.get(id);
        return tipoVidro;
    }
    
    public void alterar(TipoVidro tipoVidro){
        tipoVidroDao.update(tipoVidro);
    }
    
    public void excluir(int id){
        tipoVidroDao.delete(id);
    }
}
