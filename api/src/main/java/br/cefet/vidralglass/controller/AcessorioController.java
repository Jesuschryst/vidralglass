/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.cefet.vidralglass.controller;

import br.cefet.vidralglass.model.Acessorio;
import br.cefet.vidralglass.service.AcessorioService;
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
@RequestMapping("/api/v1/acessorio")
public class AcessorioController {
   private final AcessorioService acessorioService;
    
    public AcessorioController(AcessorioService acessorioService){
        this.acessorioService = acessorioService;
    }
    
    @GetMapping({"/", ""})
    public List<Acessorio> consultarTodos(){
        List<Acessorio> AcessorioList = acessorioService.consultarTodos();
        return AcessorioList;
    }
    
    @GetMapping("/{id}")
    public Acessorio consultarAcessorio(@PathVariable("id") int id){
        Acessorio ret = acessorioService.consultarPorId(id);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public Acessorio inserir(@RequestBody Acessorio acessorio){
        Acessorio ret = acessorioService.inserir(acessorio);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public Acessorio alterar(@RequestBody Acessorio acessorio){
        acessorioService.alterar(acessorio);
        return acessorio;
    }
    
    @DeleteMapping("/{id}")
    public Acessorio deletar(@PathVariable("id") int id){
        Acessorio acessorio = acessorioService.consultarPorId(id);
        if (acessorio == null){
            throw new RuntimeException("Nao existe acessorio com este id para ser excluido....");
        }
        acessorioService.excluir(id);
        return acessorio;
}
}
