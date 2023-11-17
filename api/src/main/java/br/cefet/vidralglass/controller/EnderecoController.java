/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.cefet.vidralglass.controller;

import br.cefet.vidralglass.model.Endereco;
import br.cefet.vidralglass.service.EnderecoService;
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
@RequestMapping("/api/v1/cliente/endereco")
public class EnderecoController {
    private final EnderecoService enderecoService;
    
    public EnderecoController(EnderecoService enderecoService){
        this.enderecoService = enderecoService;
    }
    
    @GetMapping({"/", ""})
    public List<Endereco> consultarTodos(){
        List<Endereco> EnderecoList = enderecoService.consultarTodos();
        return EnderecoList;
    }
    
    @GetMapping("/{id}")
    public Endereco consultarCliente(@PathVariable("id") int id){
        Endereco ret = enderecoService.consultarPorId(id);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public Endereco inserir(@RequestBody Endereco endereco){
        Endereco ret = enderecoService.inserir(endereco);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public Endereco alterar(@RequestBody Endereco endereco){
        enderecoService.alterar(endereco);
        return endereco;
    }
    
    @DeleteMapping("/{id}")
    public Endereco deletar(@PathVariable("id") int id){
        Endereco endereco = enderecoService.consultarPorId(id);
        if (endereco == null){
            throw new RuntimeException("Nao existe endereço com este id para ser excluido....");
        }
        enderecoService.excluir(id);
        return endereco;
}
}