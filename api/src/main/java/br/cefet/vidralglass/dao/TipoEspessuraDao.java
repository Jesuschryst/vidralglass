/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package br.cefet.vidralglass.dao;

import br.cefet.vidralglass.model.TipoEspessura;
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
@RegisterBeanMapper(TipoEspessura.class)
public interface TipoEspessuraDao {
    @GetGeneratedKeys
    @SqlUpdate("insert into TipoEspessura (descricao, valorEspessura, idItemOrcamento) values (:descricao, :valorEspessura, :idItemOrcamento,)")
    int insert(@BindBean TipoEspessura TipoEspessura);


    @SqlQuery("select * " +
            " from TipoEspessura " +
            " where idTipoEspessura = :id;")
    TipoEspessura get(@Bind("id") int id);


    @SqlQuery("select * " +
            " from TipoEspessura ")
    List<TipoEspessura> getAll();


    @SqlQuery("select * " +
            " from TipoEspessura " +
            " where idItemOrcamento = :idItemOrcamento;")
    List<TipoEspessura> getAllByItemOrcamento(@Bind("idItemOrcamento") String idItemOrcamento);


    @SqlUpdate("update TipoEspessura " +
            " set descricao = :descricao, valorEspessura = :valorEspessura" +
            " where idTipoEspessura = :id;")
    int update(@BindBean TipoEspessura tipoEspessura);


    @SqlUpdate("delete " +
            " from TipoEspessura " +
            " where idTipoEspessura = :id;")
    int delete(@Bind("id") int id);
}
