package br.cefet.vidralglass.dao;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */


import br.cefet.vidralglass.model.Usuario;
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
@RegisterBeanMapper(Usuario.class)
public interface UsuarioDao {
    
    @GetGeneratedKeys
    @SqlUpdate("insert into Usuario (login, senha) values (:login, :senha)")
    int insert(@BindBean Usuario usuario);


    @SqlQuery("select * " +
            " from Usuario " +
            " where idUsuario = :id;")
    Usuario get(@Bind("id") int id);


    @SqlQuery("select * " +
            " from Usuario " +
            " order by login;")
    List<Usuario> getAll();


    @SqlQuery("select * " +
            " from Usuario " +
            " where login = :email AND senha = :senha;")
    Usuario getAllByName(@Bind("email") String email, @Bind("senha") String senha);
    
    @SqlQuery("select * from Usuario where email = :email;")
    Usuario recover(@Bind("email") String email);


    @SqlUpdate("update Usuario " +
            " set login = :login, " +
            "     senha = :senha " +
            " where idUsuario = :idUsuario;")
    int update(@BindBean Usuario usuario);


    @SqlUpdate("delete " +
            " from Usuario " +
            " where idUsuario = :id;")
    int delete(@Bind("id") int id);
}
