package br.cefet.vidralglass.service;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */




import br.cefet.vidralglass.dao.UsuarioDao;
import br.cefet.vidralglass.model.Usuario;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

/**
 *
 * @author criad
 */
@Service
public class UsuarioService {
    private final UsuarioDao usuarioDao;
    
    public UsuarioService(Jdbi jdbi){
        this.usuarioDao = jdbi.onDemand(UsuarioDao.class);
    }
    
    public Usuario inserir (Usuario usuario){
        int idUsuario = usuarioDao.insert(usuario);
        usuario.setIdUsuario(idUsuario);
        return usuario;
    }
    
    public List<Usuario> consultarTodos(){
        List<Usuario> UsuarioList = usuarioDao.getAll();
        return UsuarioList;
    }
    
    public Usuario consultarTodosPorEmail(String email, String senha){
        Usuario usuario = usuarioDao.getAllByName(email, senha);
        return usuario;
    }
    
    public Usuario recover(String email) {
        Usuario usuario = usuarioDao.recover(email);
        return usuario;
    }
    
    public Usuario consultarPorId(int id){
        Usuario usuario = usuarioDao.get(id);
        return usuario;
    }
    
    public void alterar(Usuario usuario){
        usuarioDao.update(usuario);
    }
    
    public void excluir(int id){
        usuarioDao.delete(id);
    }
}
