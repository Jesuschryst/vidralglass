package br.cefet.vidralglass.service;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */




import br.cefet.vidralglass.dao.OrcamentoDao;
import br.cefet.vidralglassbase.model.Orcamento;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

/**
 *
 * @author criad
 */
@Service
public class OrcamentoService {
    private final OrcamentoDao orcamentoDao;
    
    public OrcamentoService(Jdbi jdbi){
        this.orcamentoDao = jdbi.onDemand(OrcamentoDao.class);
    }
    
    public Orcamento inserir (Orcamento orcamento){
        int id = orcamentoDao.insert(orcamento);
        orcamento.setIdOrcamento(id);
        return orcamento;
    }
    
    public List<Orcamento> consultarTodos(){
        List<Orcamento> OrcamentoList = orcamentoDao.getAll();
        
        return OrcamentoList;
    }
    
    public Orcamento consultarPorId(int id){
        Orcamento orcamento = orcamentoDao.get(id);
        return orcamento;
    }
    
    public Orcamento consultarPorIdCliente(int id){
        Orcamento orcamento = orcamentoDao.getAllByCliente(id);
        return orcamento;
    }

    
    public void alterar(Orcamento orcamento){
        orcamentoDao.update(orcamento);
    }
    
    public void excluir(int id){
        orcamentoDao.delete(id);
    }
}
