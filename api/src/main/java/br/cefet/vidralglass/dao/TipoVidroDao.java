package br.cefet.vidralglass.dao;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */



import br.cefet.vidralglassbase.model.TipoVidro;
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
@RegisterBeanMapper(TipoVidro.class)
public interface TipoVidroDao {
    @GetGeneratedKeys
    @SqlUpdate("insert into TipoVidro (descricao, valorM2, idItemOrcamento, idItemVenda) values (:descricao, :valorM2, :idItemOrcamento, :idItemVenda)")
    int insert(@BindBean TipoVidro tipoVidro);


    @SqlQuery("select * " +
            " from TipoVidro " +
            " where idTipoVidro = :id;")
    TipoVidro get(@Bind("id") int id);


    @SqlQuery("select * " +
            " from TipoVidro ")
    List<TipoVidro> getAll();


    @SqlQuery("select * " +
            " from TipoVidro " +
            " where idItemOrcamento = :idItemOrcamento;")
    List<TipoVidro> getAllByItemOrcamento(@Bind("idItemOrcamento") String idItemOrcamento);
    
    @SqlQuery("select * " +
            " from TipoVidro " +
            " where idItemVenda = :idItemVenda;")
    List<TipoVidro> getAllByItemVenda(@Bind("idItemVenda") String idItemVenda);


    @SqlUpdate("update TipoVidro " +
            " set descricao = :descricao, " +
            "     valorM2 = :valorM2" +
            " where idTipoVidro = :id;")
    int update(@BindBean TipoVidro tipoVidro);


    @SqlUpdate("delete " +
            " from TipoVidro " +
            " where idTipoVidro = :id;")
    int delete(@Bind("id") int id);
}
