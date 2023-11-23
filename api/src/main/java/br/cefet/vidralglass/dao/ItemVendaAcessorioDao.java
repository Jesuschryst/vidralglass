package br.cefet.vidralglass.dao;

import br.cefet.vidralglass.model.ItemOrcamentoAcessorio;
import java.util.List;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */


/**
 *
 * @author criad
 */
@RegisterBeanMapper(ItemOrcamentoAcessorio.class)
public interface ItemOrcamentoAcessorioDao {
    
    @GetGeneratedKeys
    @SqlUpdate("insert into itemorcamentoacessorio (valor, quantidade, idItemOrcamento, idAcessorio, valorTotal) values (:valor, :quantidade, :idItemOrcamento, :idAcessorio, :valorTotal)")
    
        int insert(@BindBean ItemOrcamentoAcessorio itemOrcamentoAcessorio);


    @SqlQuery("select * " +
            " from itemorcamentoacessorio " +
            " where iditemorcamentoacessorio = :id;")
    ItemOrcamentoAcessorio get(@Bind("id") int id);
    
    @SqlQuery("select * " +
            " from itemorcamentoacessorio " +
            " where iditemacessorio = :id;")
    ItemOrcamentoAcessorio getByIdItem(@Bind("id") int id);


    @SqlQuery("select * " +
            " from itemorcamentoacessorio ")
    List<ItemOrcamentoAcessorio> getAll();


    @SqlQuery("select * " +
            " from itemorcamentoacessorio " +
            " where idItemOrcamento = :idItemOrcamento;")
    List<ItemOrcamentoAcessorio> getAllByItemOrcamento(@Bind("idItemOrcamento") int idItemOrcamento);


    @SqlUpdate("update itemorcamentoacessorio " +
            " set valor = :valor, " +
            "     quantidade = :quantidade, " +
            " valorTotal = :valorTotal " +
            " where iditemorcamentoacessorio = :iditemorcamentoacessorio;")
    int update(@BindBean ItemOrcamentoAcessorio itemOrcamentoAcessorio);


    @SqlUpdate("delete " +
            " from itemorcamentoacessorio " +
            " where iditemorcamentoacessorio = :id;")
    int delete(@Bind("id") int id);
    
    @SqlUpdate("delete " +
            " from itemorcamentoacessorio " +
            " where iditemorcamento = :id;")
    int deleteByItemOrcamento(@Bind("id") int id);
}
