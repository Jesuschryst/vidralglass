package br.cefet.vidralglass.dao;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */



import br.cefet.vidralglassbase.model.TipoPeca;
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
@RegisterBeanMapper(TipoPeca.class)
public interface TipoPecaDao {
    @GetGeneratedKeys
    @SqlUpdate("insert into TipoPeca (descricao, idItemOrcamento, idItemVenda) values (:descricao, :idItemOrcamento, :idItemVenda)")
    int insert(@BindBean TipoPeca tipoPeca);


    @SqlQuery("select * " +
            " from TipoPeca " +
            " where idTipoPeca = :id;")
    TipoPeca get(@Bind("id") int id);


    @SqlQuery("select * " +
            " from TipoPeca ")
    List<TipoPeca> getAll();


    @SqlQuery("select * " +
            " from TipoPeca " +
            " where idItemOrcamento = :idItemOrcamento;")
    List<TipoPeca> getAllByItemOrcamento(@Bind("idItemOrcamento") String idItemOrcamento);
    
    @SqlQuery("select * " +
            " from TipoPeca " +
            " where idItemVenda = :idItemVenda;")
    List<TipoPeca> getAllByItemVenda(@Bind("idItemVenda") String idItemVenda);


    @SqlUpdate("update TipoPeca " +
            " set descricao = :descricao, " +
            " where idTipoPeca = :id;")
    int update(@BindBean TipoPeca tipoPeca);


    @SqlUpdate("delete " +
            " from TipoPeca " +
            " where idTipoPeca = :id;")
    int delete(@Bind("id") int id);
}
