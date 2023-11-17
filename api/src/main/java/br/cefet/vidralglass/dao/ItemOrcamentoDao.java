/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package br.cefet.vidralglass.dao;

import br.cefet.vidralglass.model.ItemOrcamento;
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
@RegisterBeanMapper(ItemOrcamento.class)
public interface ItemOrcamentoDao {
    @GetGeneratedKeys
    @SqlUpdate("insert into ItemOrcamento (tipo, nome, cor, quantidade, valorItem, valorTotal, observacao, largura, altura, unidade, valorM2, espessura, idOrcamento) values (:tipo, :nome, :cor, :quantidade, :valorItem, valorTotal, :observacao, :largura, :altura, :unidade, :valorM2, :espessura, :idOrcamento)")
    int insert(@BindBean ItemOrcamento itemOrcamento);


    @SqlQuery("select * " +
            " from ItemOrcamento " +
            " where idItemOrcamento = :id;")
    ItemOrcamento get(@Bind("id") int id);
    
    @SqlQuery("select * " +
            " from ItemOrcamento " +
            " where idOrcamento = :id;")
    ItemOrcamento getByIdOrcamento(@Bind("id") int id);
    
    @SqlQuery("select idItemOrcamento " +
            " from ItemOrcamento " +
            " where idOrcamento = :id;")
    ItemOrcamento getIdByIdOrcamento(@Bind("id") int id);


    @SqlQuery("select * " +
            " from ItemOrcamento ")
    List<ItemOrcamento> getAll();


    @SqlQuery("select * " +
            " from ItemOrcamento " +
            " where idOrcamento = :idOrcamento;")
    List<ItemOrcamento> getAllByOrcamento(@Bind("idOrcamento") int idOrcamento);


    @SqlUpdate("update ItemOrcamento " +
            " set nome = :nome, cor = :cor, tipo = :tipo, quantidade = :quantidade, valorItem = :valorItem, valorTotal = :valorTotal, observacao = :observacao, largura = :largura, altura = :altura, unidade = :unidade, valorM2 = :valorM2, espessura = :espessura"+
            " where idItemOrcamento = :idItemOrcamento;")
    int update(@BindBean ItemOrcamento itemOrcamento);


    @SqlUpdate("delete " +
            " from ItemOrcamento " +
            " where idItemOrcamento = :id;")
    int delete(@Bind("id") int id);
    
    @SqlUpdate("delete " +
            " from ItemOrcamento " +
            " where idOrcamento = :id;")
    int deleteByIdOrcamento(@Bind("id") int id);
}
