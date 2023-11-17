package br.cefet.vidralglass.dao;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */




import br.cefet.vidralglassbase.model.TipoFolha;
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
@RegisterBeanMapper(TipoFolha.class)
public interface TipoFolhaDao {
    @GetGeneratedKeys
    @SqlUpdate("insert into TipoFolha (valorFolha, descricao, idItemOrcamento, idItemVenda) values (:valorFolha, :descricao, :idItemOrcamento, :idItemVenda)")
    int insert(@BindBean TipoFolha tipoFolha);


    @SqlQuery("select * " +
            " from TipoFolha " +
            " where idTipoFolha = :id;")
    TipoFolha get(@Bind("id") int id);


    @SqlQuery("select * " +
            " from TipoFolha ")
    List<TipoFolha> getAll();


    @SqlQuery("select * " +
            " from TipoFolha " +
            " where idItemOrcamento = :idItemOrcamento;")
    List<TipoFolha> getAllByItemOrcamento(@Bind("idItemOrcamento") String idItemOrcamento);
    
    @SqlQuery("select * " +
            " from TipoFolha " +
            " where idItemVenda = :idItemVenda;")
    List<TipoFolha> getAllByItemVenda(@Bind("idItemVenda") String idItemVenda);


    @SqlUpdate("update TipoFolha " +
            " set valorFolha = :valorFolha, " +
            "     descricao = :descricao" +
            " where idTipoFolha = :id;")
    int update(@BindBean TipoFolha tipoFolha);


    @SqlUpdate("delete " +
            " from TipoFolha " +
            " where idTipoFolha = :id;")
    int delete(@Bind("id") int id);
}
