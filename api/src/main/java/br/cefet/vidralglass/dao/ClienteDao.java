/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.cefet.vidralglass.dao;

/**
 *
 * @author maria
 */
import br.cefet.vidralglass.model.Cliente;
import java.util.List;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

/**
 *
 * @author maria
 */
@RegisterBeanMapper(Cliente.class)
public interface ClienteDao {

    @GetGeneratedKeys
    @SqlUpdate("insert into cliente (nome, cpf) values (:nome, :cpf)")
    int insert(@BindBean Cliente cliente);


    @SqlQuery("select * " +
            " from cliente " +
            " where idCliente = :id;")
    Cliente get(@Bind("id") int id);


    @SqlQuery("select * " +
            " from cliente " +
            " order by nome;")
    List<Cliente> getAll();


    @SqlQuery("select * " +
            " from cliente " +
            " where nome like :nome " +
            " order by nome;")
    List<Cliente> getAllByName(@Bind("cliente") String nome);


    @SqlUpdate("update cliente " +
            " set nome = :nome, " +
            "     cpf = :cpf " +
            " where idCliente = :idCliente;")
    int update(@BindBean Cliente cliente);


    @SqlUpdate("delete " +
            " from cliente " +
            " where idCliente = :id;")
    int delete(@Bind("id") int id);

}