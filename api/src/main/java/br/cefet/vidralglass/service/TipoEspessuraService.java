/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.cefet.vidralglass.service;

import br.cefet.vidralglass.dao.TipoEspessuraDao;
import br.cefet.vidralglass.model.TipoEspessura;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

/**
 *
 * @author criad
 */
@Service
public class TipoEspessuraService {
  private final TipoEspessuraDao tipoEspessuraDao;
    
    public TipoEspessuraService(Jdbi jdbi){
        this.tipoEspessuraDao = jdbi.onDemand(TipoEspessuraDao.class);

    }
    
    public TipoEspessura inserir (TipoEspessura tipoEspessura){
        int idItemOrcamento = tipoEspessuraDao.insert(tipoEspessura);
        tipoEspessura.setId(idItemOrcamento);
        return tipoEspessura;
    }
    
    public List<TipoEspessura> consultarTodos(){
     return tipoEspessuraDao.getAll();

    }
    
    public TipoEspessura consultarPorId(int id){
       return tipoEspessuraDao.get(id);
    }
    
    public void alterar(TipoEspessura tipoEspessura){
       tipoEspessuraDao.update(tipoEspessura);
    }
    
    public void excluir(int id){
        tipoEspessuraDao.delete(id);
    }
}
