package br.cefet.vidralglass.controller;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */


import br.cefet.vidralglass.service.OrcamentoService;
import br.cefet.vidralglassbase.model.Orcamento;
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
@RequestMapping("/api/v1/orcamento")
public class OrcamentoController {
    private final OrcamentoService orcamentoService;
    
    public OrcamentoController(OrcamentoService orcamentoService){
        this.orcamentoService = orcamentoService;
    }
    
    @GetMapping({"/", ""})
    public List<Orcamento> consultarTodos(){
        List<Orcamento> OrcamentoList = orcamentoService.consultarTodos();
        return OrcamentoList;
    }
    
    @GetMapping("/{id}")
    public Orcamento consultarOrcamento(@PathVariable("id") int id){
        Orcamento ret = orcamentoService.consultarPorId(id);
        return ret;
    }
    
    @GetMapping("/cliente/{id}")
    public Orcamento consultarCliente(@PathVariable("id") int id){
        Orcamento ret = orcamentoService.consultarPorIdCliente(id);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public Orcamento inserir(@RequestBody Orcamento orcamento){
        Orcamento ret = orcamentoService.inserir(orcamento);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public Orcamento alterar(@RequestBody Orcamento orcamento){
        orcamentoService.alterar(orcamento);
        return orcamento;
    }
    
    @DeleteMapping("/{id}")
    public Orcamento deletar(@PathVariable("id") int id){
        Orcamento orcamento = orcamentoService.consultarPorId(id);
        if (orcamento == null){
            throw new RuntimeException("Nao existe orcamento com este id para ser excluido....");
        }
        orcamentoService.excluir(id);
        return orcamento;
}
}
