package br.cefet.vidralglass.dao;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */


import br.cefet.vidralglassbase.model.Venda;
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
@RegisterBeanMapper(Venda.class)
public interface VendaDao {
    @GetGeneratedKeys
    @SqlUpdate("insert into Venda (status, dataVenda, dataEntrega) values (:status, :dataVenda, :dataEntrega)")
    int insert(@BindBean Venda venda);


    @SqlQuery("select * " +
            " from Venda " +
            " where idVenda = :id;")
    Venda get(@Bind("id") int id);


    @SqlQuery("select * " +
            " from Venda ")
    List<Venda> getAll();


    @SqlQuery("select * " +
            " from Venda " +
            " where idVenda = :idVenda;")
    List<Venda> getAllByIdVenda(@Bind("idVenda") String idVenda);


    @SqlUpdate("update Venda " +
            " set status = :status, " +
            "     dataVenda = :dataVenda" +
            "     dataEntrega = :dataEntrega" +
                " where idVenda = :idVenda;")
    int update(@BindBean Venda venda);


    @SqlUpdate("delete " +
            " from Venda " +
            " where idVenda = :idVenda;")
    int delete(@Bind("id") int id);
}
