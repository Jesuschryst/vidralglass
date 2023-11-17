package br.cefet.vidralglass.controller;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */


import br.cefet.vidralglass.model.Cliente;
import br.cefet.vidralglass.service.ClienteService;
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
@RequestMapping("/api/v1/cliente")
public class ClienteController {
    private final ClienteService clienteService;
    
    public ClienteController(ClienteService clienteService){
        this.clienteService = clienteService;
    }
    
    @GetMapping({"/", ""})
    public List<Cliente> consultarTodos(){
        List<Cliente> ClienteList = clienteService.consultarTodos();
        return ClienteList;
    }
    
    @GetMapping("/{id}")
    public Cliente consultarCliente(@PathVariable("id") int id){
        Cliente ret = clienteService.consultarPorId(id);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public Cliente inserir(@RequestBody Cliente cliente){
        Cliente ret = clienteService.inserir(cliente);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public Cliente alterar(@RequestBody Cliente cliente){
        clienteService.alterar(cliente);
        return cliente;
    }
    
    @DeleteMapping("/{id}")
    public Cliente deletar(@PathVariable("id") int id){
        Cliente cliente = clienteService.consultarPorId(id);
        if (cliente == null){
            throw new RuntimeException("Nao existe Cliente com este id para ser excluido....");
        }
        clienteService.excluir(id);
        return cliente;
}
}
