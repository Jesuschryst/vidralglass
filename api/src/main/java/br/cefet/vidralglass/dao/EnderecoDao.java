/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package br.cefet.vidralglass.dao;


import br.cefet.vidralglass.model.Endereco;
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
@RegisterBeanMapper(Endereco.class)  
public interface EnderecoDao {
    @GetGeneratedKeys
    @SqlUpdate("insert into endereco (rua, cidade, bairro, numero, complemento, idCliente) values (:rua, :cidade, :bairro, :numero, :complemento, :idCliente)")
    int insert(@BindBean Endereco endereco);


    @SqlQuery("select * " +
            " from Endereco " +
            " where idEndereco = :id;")
    Endereco get(@Bind("id") int id);


    @SqlQuery("select * " +
            " from Endereco ")
    List<Endereco> getAll();


    @SqlQuery("select * " +
            " from Endereco " +
            " where idCliente = :idCliente;")
    List<Endereco> getAllByCliente(@Bind("idCliente") int idCliente);
    
    @SqlQuery("select * from Endereco where idCliente = :idCliente;")
    Endereco getOneByIdCliente(@Bind("idCliente") int idCliente);


    @SqlUpdate("update Endereco " +
            " set rua = :rua, " +
            "     cidade = :cidade, " +
            "     bairro = :bairro, " +
            "     numero = :numero," +
            "     complemento = :complemento " +
            " where idEndereco = :idEndereco;")
    int update(@BindBean Endereco endereco);


    @SqlUpdate("delete " +
            " from Endereco " +
            " where idEndereco = :id;")
    int delete(@Bind("id") int id);

}
