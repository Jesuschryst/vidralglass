package br.cefet.vidralglass.dao;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */


import br.cefet.vidralglassbase.model.Orcamento;
import java.util.List;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

/**
 *
 * @author criad
 */
@RegisterBeanMapper(Orcamento.class)
public interface OrcamentoDao {
    @GetGeneratedKeys
    @SqlUpdate("insert into Orcamento (numero, dataOrcamento,  dataValidade, valorTotal, status, idUsuario, idCliente) values (:numero, :dataOrcamento, :dataValidade, :valorTotal, :status, :idUsuario, :idCliente)")
    int insert(@BindBean Orcamento orcamento);


    @SqlQuery("select * " +
            " from Orcamento " +
            " where idOrcamento = :id;")
    Orcamento get(@Bind("id") int id);


    @SqlQuery("select * " +
            " from Orcamento ")
    List<Orcamento> getAll();
    


    @SqlQuery("select * " +
            " from Orcamento " +
            " where idCliente = :idCliente;")
    Orcamento getAllByCliente(@Bind("idCliente") int idCliente);
    
    @SqlQuery("select * " +
            " from Orcamento " +
            " where idUsuario = :idUsuario;")
    Orcamento getAllByUsuario(@Bind("idUsuario") int idUsuario);


    @SqlUpdate("update Orcamento " +
            " set numero = :numero, " +
            "     dataOrcamento = :dataOrcamento," +
            "     dataValidade = :dataValidade," +
            "     valorTotal = :valorTotal," +
            "     status = :status" +
            " where idOrcamento = :idOrcamento;")
    int update(@BindBean Orcamento orcamento);


    @SqlUpdate("delete " +
            " from Orcamento " +
            " where idOrcamento = :idOrcamento;")
    int delete(@Bind("id") int id);
    
    
}
