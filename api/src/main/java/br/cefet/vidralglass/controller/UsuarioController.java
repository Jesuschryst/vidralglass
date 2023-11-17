package br.cefet.vidralglass.controller;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */


import br.cefet.vidralglass.model.Usuario;
import br.cefet.vidralglass.service.UsuarioService;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author criad
 */
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/usuario")
public class UsuarioController {
    private final UsuarioService usuarioService;
    
    public UsuarioController(UsuarioService usuarioService){
        this.usuarioService = usuarioService;
    }
    
    @GetMapping({"/", ""})
    public List<Usuario> consultarTodos(){
        List<Usuario> UsuarioList = usuarioService.consultarTodos();
        return UsuarioList;
    }
    
    @GetMapping("/{id}")
    public Usuario consultarUsuario(@PathVariable("id") int id){
        Usuario ret = usuarioService.consultarPorId(id);
        return ret;
    }
    
    @GetMapping("/{email}/{senha}/authenticate")
    public Usuario consultarUsuarioPorEmail(@PathVariable("email") String email, @PathVariable("senha") String senha){
        Usuario login = usuarioService.consultarTodosPorEmail(email, senha);
        return login;
    }
    
    @PostMapping({"", "/"})
    public Usuario inserir(@RequestBody Usuario usuario){
        Usuario ret = usuarioService.inserir(usuario);
        return ret;
    }
    
    @GetMapping("/{email}/recover")
    public Usuario recover(@PathVariable("email") String email){
        Usuario user = usuarioService.recover(email);
        return user;
    }

    
    @PutMapping({"", "/"})
    public Usuario alterar(@RequestBody Usuario usuario){
        usuarioService.alterar(usuario);
        return usuario;
    }
    
    @DeleteMapping("/{id}")
    public Usuario deletar(@PathVariable("id") int id){
        Usuario usuario = usuarioService.consultarPorId(id);
        if (usuario == null){
            throw new RuntimeException("Nao existe Usuario com este id para ser excluido....");
        }
        usuarioService.excluir(id);
        return usuario;
}
}
