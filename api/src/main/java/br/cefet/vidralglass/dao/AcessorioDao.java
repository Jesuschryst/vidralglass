package br.cefet.vidralglass.dao;


import br.cefet.vidralglass.model.Acessorio;
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
@RegisterBeanMapper(Acessorio.class)
public interface AcessorioDao {
    
    @GetGeneratedKeys
    @SqlUpdate("insert into acessorio (nome, valor, largura, altura) values (:nome, :valor, :altura, :largura)")
    int insert(@BindBean Acessorio acessorio);


    @SqlQuery("select * " +
            " from acessorio " +
            " where idacessorio = :id;")
    Acessorio get(@Bind("id") int id);


    @SqlQuery("select * " +
            " from acessorio " +
            " order by nome;")
    List<Acessorio> getAll();


    @SqlQuery("select * " +
            " from acessorio " +
            " where nome like :nome " +
            " order by nome;")
    List<Acessorio> getAllByName(@Bind("Acessorio") String nome);


    @SqlUpdate("update acessorio " +
            " set nome = :nome, " +
            "     valor = :valor, " +
            "     largura = :largura, " +
            "     altura = :altura " +
            " where idacessorio = :id;")
    int update(@BindBean Acessorio acessorio);


    @SqlUpdate("delete " +
            " from acessorio " +
            " where idacessorio = :id;")
    int delete(@Bind("id") int id);

}
