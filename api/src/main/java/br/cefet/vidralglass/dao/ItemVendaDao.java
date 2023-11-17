/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package br.cefet.vidralglass.dao;

import br.cefet.vidralglass.model.ItemVenda;
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
@RegisterBeanMapper(ItemVenda.class)  
public interface ItemVendaDao {
    @GetGeneratedKeys
    @SqlUpdate("insert into ItemVenda (nome, imagem, descricao, quantidade, valorItem, observacao, largura, altura, unidade, valorM2, valorEspessura, valorFolha, idVenda) values (:nome, :imagem, :descricao, :quantidade, :valorItem, :observacao, :largura, :altura, :unidade, :valorM2, :valorEspessura, :valorFolha, :idVenda)")
    int insert(@BindBean ItemVenda itemVenda);


    @SqlQuery("select * " +
            " from ItemVenda " +
            " where idItemVenda = :id;")
    ItemVenda get(@Bind("id") int id);


    @SqlQuery("select * " +
            " from ItemVenda ")
    List<ItemVenda> getAll();


    @SqlQuery("select * " +
            " from ItemVenda " +
            " where idVenda = :idVenda;")
    List<ItemVenda> getAllByVenda(@Bind("idVenda") String idVenda);


    @SqlUpdate("update ItemVenda " +
            " set nome = :nome, " + 
            "     imagem = :imagem, descricao = :descricao, quantidade = :quantidade, valorItem = :valorItem, observacao = :observacao, largura = :largura, altura = :altura, unidade = :unidade, valorM2 = :valorM2, valorEspessura = :valorEspessura, valorFolha = :valorFolha " +
            " where idItemVenda = :id;")
    int update(@BindBean ItemVenda itemVenda);


    @SqlUpdate("delete " +
            " from ItemVenda " +
            " where idItemVenda = :id;")
    int delete(@Bind("id") int id);
}
